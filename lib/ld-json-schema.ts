import { cookies } from "next/headers";
import { unstable_cache } from "next/cache";
import type {
  TravelAgency,
  WebSite,
  WebPage,
  TouristTrip,
  Offer,
  ItemList,
  ListItem,
  Place,
  Duration,
  AboutPage,
  ContactPage,
  CollectionPage,
} from "schema-dts";
import {
  getBaseSchemaGraph,
  getOrganizationSchema,
} from "./schema-org-helpers";
import {
  getAttributesBySlug,
  getTourDetails,
  getToursByAttributes,
} from "@/server/public-query.server";
import { hashString } from "./utils";
import { SeoSchema, seoSchema } from "@/schema/seo-schema";
import { getSettingBySectionAsync } from "@/server/settings.server";
import { SettingSchema } from "@/schema/setting-schema";
import { tourSearch } from "@/server/tours.server";

export async function generateHomepageLDJson(): Promise<string> {
  const BASE_URL =
    process.env.NEXT_PUBLIC_APP_URL || "https://www.mundo-tours.com";

  const baseGraph = await getBaseSchemaGraph();
  const getSettingsCached = unstable_cache(
    async () => getSettingBySectionAsync("CMS"),
    ["settings-cms"],
    { revalidate: 86400 }
  );

  const settings = (await getSettingsCached()) as SettingSchema | null;
  const homePageTitle = settings?.seoStaticPagesHome?.seo?.title ?? "";
  const homePageDescription =
    settings?.seoStaticPagesHome?.seo?.description ?? "";

  const organization = baseGraph.find(
    (item) => (item as any)["@type"] === "TravelAgency"
  ) as TravelAgency;
  const website = baseGraph.find(
    (item) => (item as any)["@type"] === "WebSite"
  ) as WebSite;

  const webpage: WebPage = {
    "@type": "WebPage",
    "@id": BASE_URL,
    url: BASE_URL,
    name: homePageTitle,
    description: homePageDescription,
    isPartOf: website["@id"],
    publisher: (organization as any)["@id"],
    inLanguage: website.inLanguage || ["ar"],
  };

  const finalGraph = [...baseGraph, webpage];

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": finalGraph,
  });
}

export async function generateTourDetailsLDJson({
  params,
}: {
  params: Promise<{ tourName: string }>;
}): Promise<string | null> {
  const { tourName } = await params;
  const localCookies = await cookies();

  const currency =
    (localCookies.get("currency")?.value as "SAR" | "OMR") || "SAR";
  const slug = decodeURIComponent(tourName);
  const BASE_URL =
    process.env.NEXT_PUBLIC_APP_URL || "https://www.mundo-tours.com";
  const pageUrl = `${BASE_URL}/tours/${slug}`;

  const getTourDetailsCached = unstable_cache(
    async () => getTourDetails(slug, currency),
    ["tour-details", hashString(slug), currency],
    { revalidate: 86400, tags: ["tour-details", hashString(slug), currency] }
  );
  const tour = await getTourDetailsCached();
  if (!tour) return null;

  const organization = await getOrganizationSchema();

  const parsedSeo = seoSchema.parse(tour.seo ?? {});
  const title = parsedSeo.title || tour.name;
  let description = parsedSeo.description || "";
  if (tour.additionalInfo) {
    description = description
      ? `${description}\n\n${tour.additionalInfo}`
      : tour.additionalInfo;
  }
  if (tour.tourIncludes.length > 0) {
    description +=
      "\n\nيشمل البرنامج التالي:\n" +
      tour.tourIncludes.map((inc) => `- ${inc.title}`).join("\n");
  }
  if (tour.tourExcludes.length > 0) {
    description +=
      "\n لا يشمل البرنامج التالي:\n" +
      tour.tourExcludes.map((exc) => `- ${exc.description}`).join("\n");
  }

  let duration: Duration | undefined = undefined;
  if (tour.numberOfDays && tour.numberOfDays > 0) {
    duration = `P${tour.numberOfDays}D`;
  }
  const basePrice: number | undefined | null =
    tour.priceSingle ?? tour.priceDouble ?? undefined;

  const offers: Offer[] = [];
  if (basePrice !== undefined && basePrice !== null) {
    const offer: Offer = {
      "@type": "Offer",
      price: basePrice.toString(),
      priceCurrency: currency,
      availability: "https://schema.org/InStock",
      url: pageUrl,
    };
    offers.push(offer);
  }

  let itinerary: ItemList | undefined = undefined;
  if (tour.tourSections && tour.tourSections.length > 0) {
    itinerary = {
      "@type": "ItemList",
      numberOfItems: tour.tourSections.length,
      itemListElement: tour.tourSections.map(
        (section, index) =>
          ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "TouristAttraction",
              name: section.title,
              description: section.description,
            },
          } as ListItem)
      ),
    };
  }

  let touristDestination: Place[] | undefined = undefined;
  if (tour.tourCountries && tour.tourCountries.length > 0) {
    touristDestination = tour.tourCountries.map((countryName) => ({
      "@type": "Place",
      name: countryName,
      address: { "@type": "PostalAddress", addressCountry: countryName },
    }));
  }

  const touristTrip: TouristTrip = {
    "@type": "TouristTrip",
    "@id": pageUrl,
    url: pageUrl,
    name: title,
    description: description,
    image: {
      "@type": "ImageObject",
      width: "900",
      height: "600",
      url: tour.images?.[0],
    },
    provider: (organization as any)["@id"],
    ...(duration && { duration: duration }),
    ...(touristDestination && { touristDestination: touristDestination }),
    ...(offers.length > 0 && { offers: offers }),
    ...(itinerary && { itinerary: itinerary }),
  };

  const finalGraph = [organization, touristTrip];

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": finalGraph,
  });
}

export async function generateAboutUsLDJson(): Promise<string> {
  const BASE_URL =
    process.env.NEXT_PUBLIC_APP_URL || "https://www.mundo-tours.com";
  const ABOUT_US_PATH = "/about-us";
  const aboutUsUrl = `${BASE_URL}${ABOUT_US_PATH}`;

  const getAboutUsSettingsCached = unstable_cache(
    async () => getSettingBySectionAsync("CMS"),
    ["settings-cms-about-us"],
    { revalidate: 86400 }
  );
  const settings = (await getAboutUsSettingsCached()) as SettingSchema | null;

  const aboutUsTitle = settings?.seoStaticPagesAboutUs?.seo?.title ?? "";
  const aboutUsDescription =
    settings?.seoStaticPagesAboutUs?.seo?.description ?? "";

  const baseGraph = await getBaseSchemaGraph();

  const organization = baseGraph.find(
    (item): item is TravelAgency => (item as any)["@type"] === "TravelAgency"
  );
  const website = baseGraph.find(
    (item): item is WebSite => (item as any)["@type"] === "WebSite"
  );

  if (!organization || !website) {
    console.error(
      "Base Organization or WebSite schema not found for About Us page."
    );
    return JSON.stringify({ "@context": "https://schema.org" });
  }

  const aboutPage: AboutPage = {
    "@type": "AboutPage",
    "@id": aboutUsUrl,
    url: aboutUsUrl,
    name: aboutUsTitle,
    description: aboutUsDescription,
    isPartOf: website["@id"],
    publisher: (organization as any)["@id"],
    inLanguage: website.inLanguage || ["ar"],
    mainEntity: (organization as any)["@id"],
  };

  const finalGraph = [...baseGraph, aboutPage];

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": finalGraph,
  });
}

export async function generateTourListingLDJson(): Promise<string> {
  const BASE_URL =
    process.env.NEXT_PUBLIC_APP_URL || "https://www.mundo-tours.com";
  const LISTING_PATH = "/tour-listing";
  const listingUrl = `${BASE_URL}${LISTING_PATH}`;

  const getListingSettingsCached = unstable_cache(
    async () => getSettingBySectionAsync("CMS"),
    ["settings-cms-tour-listing"],
    { revalidate: 86400 }
  );
  const settings = (await getListingSettingsCached()) as SettingSchema | null;
  const listingPageTitle = settings?.seoStaticPagesAllTours?.seo?.title ?? "";
  const listingPageDescription =
    settings?.seoStaticPagesAllTours?.seo?.description ?? "";

  const getInitialToursCached = unstable_cache(
    async () => tourSearch({ limit: 20 }),
    ["initial-tours-listing"],
    { revalidate: 3600 }
  );
  const initialTours = await getInitialToursCached();

  const baseGraph = await getBaseSchemaGraph();
  const organization = baseGraph.find(
    (item): item is TravelAgency => (item as any)["@type"] === "TravelAgency"
  );
  const website = baseGraph.find(
    (item): item is WebSite => (item as any)["@type"] === "WebSite"
  );

  if (!organization || !website) {
    console.error(
      "Base Organization or WebSite schema not found for Tour Listing page."
    );
    return JSON.stringify({ "@context": "https://schema.org" });
  }

  let itemList: ItemList | undefined = undefined;
  if (initialTours && initialTours.tours.length > 0) {
    itemList = {
      "@type": "ItemList",
      itemListElement: initialTours.tours.map((tour, index) => {
        const tourDetailUrl = `${BASE_URL}/tour/${tour.slug}`;
        const basePrice = tour.priceSingle ?? tour.priceDouble ?? undefined;
        let offer: Offer | undefined = undefined;
        if (basePrice !== undefined && basePrice !== null) {
          offer = {
            "@type": "Offer",
            price: basePrice.toString(),
            priceCurrency: "SAR",
            url: tourDetailUrl,
            availability: "https://schema.org/InStock",
          };
        }
        let duration: Duration | undefined = undefined;
        if (tour.numberOfDays && tour.numberOfDays > 0) {
          duration = `P${tour.numberOfDays}D`;
        }

        const tourItem: TouristTrip = {
          "@type": "TouristTrip",
          "@id": tourDetailUrl,
          url: tourDetailUrl,
          name: (tour.seo as SeoSchema)?.title || tour.name,
          description: (tour.seo as SeoSchema)?.description || undefined,
          image: tour.images?.[0],
          ...(duration && { duration: duration }),
          provider: (organization as any)["@id"],
          ...(offer && { offers: offer }),
        };

        return {
          "@type": "ListItem",
          position: index + 1,
          item: tourItem,
        } as ListItem;
      }),
    };
  }

  const collectionPage: CollectionPage = {
    "@type": "CollectionPage",
    "@id": listingUrl,
    url: listingUrl,
    name: listingPageTitle,
    description: listingPageDescription,
    isPartOf: website["@id"],
    publisher: (organization as any)["@id"],
    inLanguage: website.inLanguage || ["ar"],
    ...(itemList && { mainEntity: itemList }),
  };

  const finalGraph = [...baseGraph, collectionPage];

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": finalGraph,
  });
}

export async function generateFilteredTourListingLDJson({
  params,
  searchParams,
}: {
  params: Promise<{ destination: string }>;
  searchParams: Promise<{ attribute?: string }>;
}): Promise<string> {
  const { destination: destinationSlug } = await params;
  const { attribute } = await searchParams;
  const slug = decodeURIComponent(destinationSlug);

  const attributeSlug = decodeURIComponent(attribute as string);
  const BASE_URL = process.env.NEXT_PUBLIC_APP_URL!;

  let LISTING_PATH = `/tour-listing/${slug}`;
  if (attribute) LISTING_PATH += `?attribute=${attribute}`;

  const pageUrl = `${BASE_URL}${LISTING_PATH}`;

  const getDestinationCached = unstable_cache(
    async () => getAttributesBySlug(slug),
    ["category-seo", hashString(slug)],
    { revalidate: 86400 }
  );
  const destination = await getDestinationCached();

  const pageTitle = destination?.seo?.title ?? ``;
  const pageDescription = destination?.seo?.description ?? "";

  const getFilteredToursCached = unstable_cache(
    async () => getToursByAttributes(slug, attributeSlug, false, "SAR"),
    ["filtered-tours-listing", hashString(slug), hashString(attributeSlug)],
    { revalidate: 3600 }
  );
  const filteredTours = await getFilteredToursCached();

  const baseGraph = await getBaseSchemaGraph();
  const organization = baseGraph.find(
    (item): item is TravelAgency => (item as any)["@type"] === "TravelAgency"
  );
  const website = baseGraph.find(
    (item): item is WebSite => (item as any)["@type"] === "WebSite"
  );

  if (!organization || !website) {
    console.error(
      `Base Organization or WebSite schema not found for Tour Listing page (slug: ${slug}).`
    );
    return JSON.stringify({ "@context": "https://schema.org" });
  }

  let itemList: ItemList | undefined = undefined;
  if (filteredTours && filteredTours.tours.length > 0) {
    itemList = {
      "@type": "ItemList",
      itemListElement: filteredTours.tours.map((tour, index) => {
        const tourDetailUrl = `${BASE_URL}/tours/${tour.slug}`;
        const basePrice = tour.priceSingle ?? tour.priceDouble ?? undefined;
        let offer: Offer | undefined = undefined;
        if (basePrice !== undefined && basePrice !== null) {
          offer = {
            "@type": "Offer",
            price: basePrice.toString(),
            priceCurrency: "SAR",
            url: tourDetailUrl,
            availability: "https://schema.org/InStock",
          };
        }
        let duration: Duration | undefined = undefined;
        if (tour.numberOfDays && tour.numberOfDays > 0) {
          duration = `P${tour.numberOfDays}D`;
        }

        const tourItem: TouristTrip = {
          "@type": "TouristTrip",
          "@id": tourDetailUrl,
          url: tourDetailUrl,
          name: tour.seo?.title || tour.name,
          description: tour.seo?.description || undefined,
          image: tour.images?.[0],
          provider: (organization as any)["@id"],
          ...(duration && { duration: duration }),
          ...(offer && { offers: offer }),
        };

        return {
          "@type": "ListItem",
          position: index + 1,
          item: tourItem,
        } as ListItem;
      }),
    };
  }

  const collectionPage: CollectionPage = {
    "@type": "CollectionPage",
    "@id": pageUrl,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    isPartOf: website["@id"],
    publisher: (organization as any)["@id"],
    inLanguage: website.inLanguage || ["ar"],
    ...(itemList && { mainEntity: itemList }),
  };

  const finalGraph = [...baseGraph, collectionPage];

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": finalGraph,
  });
}

export async function generateContactUsLDJson(): Promise<string> {
  const BASE_URL =
    process.env.NEXT_PUBLIC_APP_URL || "https://www.mundo-tours.com";
  const ABOUT_US_PATH = "/call-us";
  const aboutUsUrl = `${BASE_URL}${ABOUT_US_PATH}`;

  const getCallUsSettingsCached = unstable_cache(
    async () => getSettingBySectionAsync("CMS"),
    ["settings-cms-call-us"],
    { revalidate: 86400 }
  );
  const settings = (await getCallUsSettingsCached()) as SettingSchema | null;

  const contactUsTitle = settings?.seoStaticPagesContactUs?.seo?.title ?? "";
  const contactUsDescription =
    settings?.seoStaticPagesContactUs?.seo?.description ?? "";

  const baseGraph = await getBaseSchemaGraph();

  const organization = baseGraph.find(
    (item): item is TravelAgency => (item as any)["@type"] === "TravelAgency"
  );
  const website = baseGraph.find(
    (item): item is WebSite => (item as any)["@type"] === "WebSite"
  );

  if (!organization || !website) {
    console.error(
      "Base Organization or WebSite schema not found for About Us page."
    );
    return JSON.stringify({ "@context": "https://schema.org" });
  }

  const contactPage: ContactPage = {
    "@type": "ContactPage",
    "@id": aboutUsUrl,
    url: aboutUsUrl,
    name: contactUsTitle,
    description: contactUsDescription,
    isPartOf: website["@id"],
    publisher: (organization as any)["@id"],
    inLanguage: website.inLanguage || ["ar"],
    mainEntity: (organization as any)["@id"],
  };

  const finalGraph = [...baseGraph, contactPage];

  return JSON.stringify({
    "@context": "https://schema.org",
    "@graph": finalGraph,
  });
}
