"use server";

import { db } from "@/db.server";
import { Prisma } from "@prisma/client";
import { unstable_noStore } from "next/cache";

export type TourFilters = {
  country?: string;
  days?: string;
  type?: string;
  maxprice?: number;
  isActive?: boolean;
};

type TourSearchParams = {
  cursor?: number;
  limit?: number;
  filters?: TourFilters;
};

/**
 * Query multiple tours with strong typing for filter, pagination, and relations
 */
export async function tourQuery<T extends Prisma.TourFindManyArgs>(
  args: Prisma.SelectSubset<T, Prisma.TourFindManyArgs>
): Promise<Array<Prisma.TourGetPayload<T>>> {
  return db.tour.findMany(args);
}

/**
 * Update a tour with strong typing for data, filter, and included relations
 */
export async function tourUpdate<T extends Prisma.TourUpdateArgs>(
  args: Prisma.SelectSubset<T, Prisma.TourUpdateArgs>
): Promise<Prisma.TourGetPayload<T>> {
  unstable_noStore();
  const result = await db.tour.update(args);
  return result;
}

/**
 * Delete a tour with strong typing for filter and included relations
 */
export async function tourDelete<T extends Prisma.TourDeleteArgs>(
  args: Prisma.SelectSubset<T, Prisma.TourDeleteArgs>
): Promise<Prisma.TourGetPayload<T>> {
  unstable_noStore();
  const result = await db.tour.delete(args);
  return result;
}

/**
 * Query a single tour with strong typing for filter and included relations
 */
export async function tourSingleQuery<T extends Prisma.TourFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.TourFindUniqueArgs>
): Promise<Prisma.TourGetPayload<T> | null> {
  return db.tour.findUnique(args);
}

/**
 * Create a tour with strong typing for data and included relations
 */
export async function tourCreate<T extends Prisma.TourCreateArgs>(
  args: Prisma.SelectSubset<T, Prisma.TourCreateArgs>
): Promise<Prisma.TourGetPayload<T>> {
  unstable_noStore();
  const result = await db.tour.create(args);
  return result;
}

/**
 * Search tours with strong typing for data and included relations
 */

export async function tourSearch({
  cursor,
  limit = 10,
  filters = {},
}: TourSearchParams) {
  const where: Prisma.TourWhereInput = {
    isActive: true,
  };

  if (filters.type) {
    const tourTypes = filters.type.split(",").map((c) => {
      return {
        name: c.trim(),
      };
    });
    where.tourType = {
      OR: tourTypes,
    };
  }

  if (filters.maxprice) {
    where.priceDouble = {
      lte: filters.maxprice,
    };
  }

  if (filters.country) {
    const countries = filters.country.split(",").map((c) => c.trim());
    where.tourCountries = {
      hasSome: countries,
    };
  }

  // Add days filter if provided
  if (filters.days) {
    const days = filters.days.split(",").map((d) => d.trim());
    where.startDay = {
      hasSome: days,
    };
  }

  const cursorCondition = cursor
    ? {
        cursor: {
          id: cursor,
        },
        skip: 1,
      }
    : undefined;

  const tours = await db.tour.findMany({
    take: limit + 1,
    ...cursorCondition,
    where,
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
    orderBy: {
      id: "asc",
    },
  });

  const hasMore = tours.length > limit;

  const paginatedTours = hasMore ? tours.slice(0, limit) : tours;

  const nextCursor = hasMore
    ? paginatedTours[paginatedTours.length - 1].id
    : undefined;

  return {
    tours: paginatedTours,
    nextCursor,
    hasMore,
  };
}
