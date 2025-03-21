"use server";

import { db } from "@/db.server";
import { Prisma } from "@prisma/client";
import { unstable_noStore } from "next/cache";

/**
 * Query multiple offices with strong typing for filter, pagination, and relations
 */
export async function officeQuery<T extends Prisma.OfficeFindManyArgs>(
  args: Prisma.SelectSubset<T, Prisma.OfficeFindManyArgs>
): Promise<Array<Prisma.OfficeGetPayload<T>>> {
  return db.office.findMany(args);
}

/**
 * Update a office with strong typing for data, filter, and included relations
 */
export async function officeUpdate<T extends Prisma.OfficeUpdateArgs>(
  args: Prisma.SelectSubset<T, Prisma.OfficeUpdateArgs>
): Promise<Prisma.OfficeGetPayload<T>> {
  unstable_noStore();

  const result = await db.office.update(args);
  return result;
}

/**
 * Delete a office with strong typing for filter and included relations
 */
export async function officeDelete<T extends Prisma.OfficeDeleteArgs>(
  args: Prisma.SelectSubset<T, Prisma.OfficeDeleteArgs>
): Promise<Prisma.OfficeGetPayload<T>> {
  unstable_noStore();

  const result = await db.office.delete(args);
  return result;
}

/**
 * Query a single office with strong typing for filter and included relations
 */
export async function officeSingleQuery<T extends Prisma.OfficeFindUniqueArgs>(
  args: Prisma.SelectSubset<T, Prisma.OfficeFindUniqueArgs>
): Promise<Prisma.OfficeGetPayload<T> | null> {
  return db.office.findUnique(args);
}

/**
 * Create a office with strong typing for data and included relations
 */
export async function officeCreate<T extends Prisma.OfficeCreateArgs>(
  args: Prisma.SelectSubset<T, Prisma.OfficeCreateArgs>
): Promise<Prisma.OfficeGetPayload<T>> {
  unstable_noStore();

  const result = await db.office.create(args);
  return result;
}
