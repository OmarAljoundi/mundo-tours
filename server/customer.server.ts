"use server";

import { db } from "@/db.server";
import { Prisma } from "@prisma/client";
import { unstable_noStore } from "next/cache";

/**
 * Query multiple customers with strong typing for filter, pagination, and relations
 */
export async function customerQuery<T extends Prisma.CustomerFindManyArgs>(
  args: Prisma.SelectSubset<T, Prisma.CustomerFindManyArgs>
): Promise<Array<Prisma.CustomerGetPayload<T>>> {
  return db.customer.findMany(args);
}

/**
 * Update a customer with strong typing for data, filter, and included relations
 */
export async function customerUpdate<T extends Prisma.CustomerUpdateArgs>(
  args: Prisma.SelectSubset<T, Prisma.CustomerUpdateArgs>
): Promise<Prisma.CustomerGetPayload<T>> {
  unstable_noStore();
  const result = await db.customer.update(args);
  return result;
}

/**
 * Delete a customer with strong typing for filter and included relations
 */
export async function customerDelete<T extends Prisma.CustomerDeleteArgs>(
  args: Prisma.SelectSubset<T, Prisma.CustomerDeleteArgs>
): Promise<Prisma.CustomerGetPayload<T>> {
  unstable_noStore();
  const result = await db.customer.delete(args);
  return result;
}

/**
 * Query a single customer with strong typing for filter and included relations
 */
export async function customerSingleQuery<
  T extends Prisma.CustomerFindUniqueArgs
>(
  args: Prisma.SelectSubset<T, Prisma.CustomerFindUniqueArgs>
): Promise<Prisma.CustomerGetPayload<T> | null> {
  return db.customer.findUnique(args);
}

/**
 * Create a customer with strong typing for data and included relations
 */
export async function customerCreate<T extends Prisma.CustomerCreateArgs>(
  args: Prisma.SelectSubset<T, Prisma.CustomerCreateArgs>
): Promise<Prisma.CustomerGetPayload<T>> {
  unstable_noStore();
  const result = await db.customer.create(args);
  return result;
}
