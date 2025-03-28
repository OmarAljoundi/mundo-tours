"use server";
import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { db } from "@/db.server";
import {
  CreateCustomerSchema,
  queryLocationSchema,
  queryOfficeSchema,
  QueryTourSchema,
  queryTourSchema,
  queryTourTypeSchema,
} from "@/schema";
import { SettingSchema, settingSchema } from "@/schema/setting-schema";
import { formatDistance, subDays } from "date-fns";
import { unstable_noStore as noStore } from "next/cache";
import { getSettingBySectionAsync } from "./settings.server";
import { auth } from "@/auth";
import { NextRequest } from "next/server";
import { revalidateCustomer } from "./revalidation.server";

export async function submitForm(params: CreateCustomerSchema) {
  noStore();
  const result = await db.customer.create({
    data: { ...params },
    select: {
      createdAt: true,
      name: true,
      notes: true,
      contactMethod: true,
      phoneNumber: true,
      tour: {
        select: { name: true },
      },
    },
  });

  const mailerSend = new MailerSend({
    apiKey: process.env.NEXT_PUBLIC_API_MILL!,
  });

  const currentDate = formatDistance(
    subDays(new Date(result.createdAt), 0),
    new Date(),
    { addSuffix: true }
  );

  const body = {
    note: result.notes,
    tour_name: result.tour?.name,
    created_at: currentDate,
    customer_name: result.name,
    contact_option: result.contactMethod,
    customer_number: result.phoneNumber,
  };

  const personalization = [
    {
      email: process.env.NEXT_PUBLIC_API_SENT_TO!,
      data: {
        ...body,
      },
    },
  ];

  const sentFrom = new Sender("no-reply@mundo-tours.com", "no-reply");
  const recipients = [
    new Recipient(process.env.NEXT_PUBLIC_API_SENT_TO!, "Mohammed Shaker"),
  ];
  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setTemplateId("yzkq340pq66ld796")
    .setPersonalization(personalization);

  await mailerSend.email.send(emailParams);

  await revalidateCustomer();
}

export async function getSession(request: NextRequest) {
  return await auth.api.getSession({
    query: {
      disableCookieCache: false,
    },
    headers: request.headers,
  });
}

export async function getBestTours(currency: "SAR" | "OMR") {
  const settings = await db.setting.findFirst({
    where: { section: "CMS" },
  });

  if (!settings) return [];

  const settingsParsed = settingSchema.parse(settings.value);
  const tours = await db.tour.findMany({
    where: {
      id: { in: settingsParsed.home.bestTours.map((o) => o.id) },
      isActive: true,
      ...(currency === "SAR"
        ? { OR: [{ priceSingleSa: { gt: 0 } }, { priceDoubleSa: { gt: 0 } }] }
        : { OR: [{ priceSingle: { gt: 0 } }, { priceDouble: { gt: 0 } }] }),
    },
    include: {
      tourType: true,
    },
  });

  if (tours) return tours.map((o) => queryTourSchema.parse(o));

  return [];
}

export async function getDestinations(isOffice: boolean = false) {
  const destinations = await db.location.findMany({
    where: {
      isActive: true,
      isOffice,
    },
    include: {
      attributes: {
        select: {
          id: true,
          _count: true,
          order: true,
          title: true,
        },
        orderBy: {
          order: "asc",
        },
      },
    },
    orderBy: {
      order: "asc",
    },
  });

  return destinations.map((o) => queryLocationSchema.parse(o));
}

export async function getTourTypes() {
  const tourTypes = await db.tourType.findMany({
    orderBy: { order: "asc" },
  });
  return tourTypes.map((o) => queryTourTypeSchema.parse(o));
}

export async function getAttributesBySlug(
  slug: string,
  isOffice: boolean = false
) {
  const destination = await db.location.findFirst({
    where: {
      isActive: true,
      isOffice,
      slug,
    },
    include: {
      attributes: {
        orderBy: {
          order: "asc",
        },
      },
    },
  });

  if (destination) {
    return queryLocationSchema.parse(destination);
  }

  return undefined;
}

export async function getToursByAttributes(
  slug: string,
  attributeSlug?: string,
  isOffice: boolean = false,
  currency: "SAR" | "OMR" = "SAR"
) {
  const destination = await db.location.findFirst({
    orderBy: { order: "asc" },
    where: {
      slug,
      isActive: true,
      isOffice,
    },
    include: {
      attributes: {
        include: {
          locationTours: {
            where: {
              tour: {
                isActive: true,
                ...(currency === "SAR"
                  ? {
                      OR: [
                        { priceSingleSa: { gt: 0 } },
                        { priceDoubleSa: { gt: 0 } },
                      ],
                    }
                  : {
                      OR: [
                        { priceSingle: { gt: 0 } },
                        { priceDouble: { gt: 0 } },
                      ],
                    }),
              },
            },
            orderBy: {
              tour:
                currency === "SAR"
                  ? { priceDoubleSa: "asc" }
                  : { priceDouble: "asc" },
            },
            include: {
              locationAttr: true,
              location: true,
              tour: {
                select: {
                  name: true,
                  numberOfDays: true,
                  code: true,
                  images: true,
                  id: true,
                  isActive: true,
                  priceDouble: true,
                  priceDoubleSa: true,
                  priceSingle: true,
                  priceSingleSa: true,
                  slug: true,
                  startDay: true,
                  tourCountries: true,
                  tourType: {
                    select: {
                      id: true,
                      name: true,
                      image: true,
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  });

  if (!destination || destination.attributes.length == 0)
    return {
      tours: [] as QueryTourSchema[],
      destinationName: destination?.name,
    };

  if (destination.attributes.length == 1) {
    const tours = destination.attributes[0].locationTours.map((o) =>
      queryTourSchema.parse(o.tour)
    );

    return { tours: tours, destinationName: destination?.name };
  }

  if (!attributeSlug) {
    throw new Error("Attribute slug must be provided");
  }

  const tours =
    destination.attributes
      .find((x) => x.title == attributeSlug.replaceAll("-", " "))
      ?.locationTours.map((o) => queryTourSchema.parse(o.tour)) ?? [];

  return { tours: tours, destinationName: destination?.name };
}

export async function getTours() {
  const tours = await db.tour.findMany({
    where: { isActive: true },
    select: {
      name: true,
      numberOfDays: true,
      code: true,
      images: true,
      id: true,
      isActive: true,
      priceDouble: true,
      priceDoubleSa: true,
      priceSingle: true,
      priceSingleSa: true,
      slug: true,
      startDay: true,
      tourCountries: true,
      tourType: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
  });

  if (tours) return tours.map((o) => queryTourSchema.parse(o));

  return [];
}

export async function getTourDetails(
  slug: string,
  currency: "SAR" | "OMR" = "SAR"
) {
  const tour = await db.tour.findFirst({
    where: {
      isActive: true,
      slug,
      ...(currency === "SAR"
        ? { OR: [{ priceSingleSa: { gt: 0 } }, { priceDoubleSa: { gt: 0 } }] }
        : { OR: [{ priceSingle: { gt: 0 } }, { priceDouble: { gt: 0 } }] }),
    },
    include: {
      tourType: true,
    },
  });

  if (tour) return queryTourSchema.parse(tour);

  return undefined;
}

export async function getOfficeDetails(slug: string) {
  const settings = (await getSettingBySectionAsync("CMS")) as SettingSchema;

  const office = await db.office.findFirst({
    where: { status: true, slug },
  });

  if (office) {
    const currency = office.currency;
    const arCurrency = currency === "SAR" ? "ر.س" : "ر.ع";

    const officeParsed = queryOfficeSchema.parse(office);

    const bestTours = await db.tour.findMany({
      where: {
        isActive: true,
        id: { in: office.bestTours },
        ...(currency === "SAR"
          ? { OR: [{ priceSingleSa: { gt: 0 } }, { priceDoubleSa: { gt: 0 } }] }
          : { OR: [{ priceSingle: { gt: 0 } }, { priceDouble: { gt: 0 } }] }),
      },
      orderBy:
        currency === "SAR" ? { priceDoubleSa: "asc" } : { priceDouble: "asc" },
      select: {
        name: true,
        numberOfDays: true,
        code: true,
        images: true,
        id: true,
        isActive: true,
        priceDouble: true,
        priceDoubleSa: true,
        priceSingle: true,
        priceSingleSa: true,
        slug: true,
        startDay: true,
        tourCountries: true,
        tourType: {
          select: {
            id: true,
            name: true,
            image: true,
          },
        },
      },
    });

    const priceField = currency === "SAR" ? "priceDoubleSa" : "priceDouble";

    const minMaxPrices = await db.tour.aggregate({
      where: {
        isActive: true,
        locationTours: {
          some: {
            location: {
              isOffice: true,
            },
          },
        },
      },
      _min: {
        [priceField]: true,
      },
      _max: {
        [priceField]: true,
      },
    });

    const bestToursParsed = bestTours.map((o) => queryTourSchema.parse(o));

    return {
      bestTours: bestToursParsed,
      details: officeParsed,
      faq: settings?.home?.faq ?? [],
      pricingFilter: {
        arCurrency,
        minPrice: minMaxPrices._min[priceField] || 0,
        maxPrice: minMaxPrices._max[priceField] || 0,
      },
    };
  }

  return undefined;
}

export async function getOfficeTours(currency: "SAR" | "OMR") {
  let orderBy = {};

  if (currency == "OMR") {
    orderBy = {
      priceDouble: "asc",
    };
  } else {
    orderBy = {
      priceDoubleSa: "asc",
    };
  }

  const results = await db.tour.findMany({
    where: {
      ...(currency === "SAR"
        ? { OR: [{ priceSingleSa: { gt: 0 } }, { priceDoubleSa: { gt: 0 } }] }
        : { OR: [{ priceSingle: { gt: 0 } }, { priceDouble: { gt: 0 } }] }),
      locationTours: {
        some: {
          location: {
            isOffice: true,
          },
        },
      },
    },
    select: {
      name: true,
      numberOfDays: true,
      code: true,
      images: true,
      id: true,
      isActive: true,
      priceDouble: true,
      priceDoubleSa: true,
      priceSingle: true,
      priceSingleSa: true,
      slug: true,
      startDay: true,
      tourCountries: true,
      tourType: {
        select: {
          id: true,
          name: true,
          image: true,
        },
      },
    },
    orderBy,
  });

  const parsedResult = results.map((p) => queryTourSchema.parse(p));

  return parsedResult;
}

export async function getTourOfficeDetails(
  slug: string,
  currency: "SAR" | "OMR" = "SAR"
) {
  const tour = await db.tour.findFirst({
    where: {
      isActive: true,
      slug,
      ...(currency === "SAR"
        ? { OR: [{ priceSingleSa: { gt: 0 } }, { priceDoubleSa: { gt: 0 } }] }
        : { OR: [{ priceSingle: { gt: 0 } }, { priceDouble: { gt: 0 } }] }),
      locationTours: { some: { location: { isOffice: true } } },
    },
    include: {
      tourType: true,
    },
  });

  if (tour) return queryTourSchema.parse(tour);

  return undefined;
}
