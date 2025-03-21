"use server";

import { db } from "@/db.server";
import { QueryLocationSchema } from "@/schema";
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

export async function revalidateAll() {
  noStore();
  revalidatePath("/", "layout");

  // try {
  //   fetch(process.env.IMTOUR_API!, { next: { revalidate: 0 } });
  // } catch (ex) {
  //   console.log("ex", ex);
  //   return;
  // }
}

export async function revalidateTour(slug: string) {
  noStore();
  const encodeSlug = encodeURIComponent(slug);
  revalidatePath(`/tour/${encodeSlug}`);

  fetch(`${process.env.NEXT_PUBLIC_APP_URL}/tour/${slug}`, {
    cache: "no-store",
  });
  revalidatePath("/(protected)", "layout");
}

export async function revalidateStaticPages() {
  noStore();
  revalidatePath(`/(public)/(inner)/tour-listing`, "page");
  revalidatePath(`/(public)/(inner)/about-us`, "page");
  revalidatePath(`/(public)`, "page");
  revalidatePath(`/(public)`, "layout");

  fetch(`${process.env.NEXT_PUBLIC_APP_URL}/tour-listing`, {
    cache: "no-store",
  });
  fetch(`${process.env.NEXT_PUBLIC_APP_URL}`, {
    cache: "no-store",
  });
  fetch(`${process.env.NEXT_PUBLIC_APP_URL}/about-us`, {
    cache: "no-store",
  });

  revalidatePath("/(protected)", "layout");
}

export async function revalidateDestination(slug: string) {
  noStore();
  const encodeSlug = encodeURIComponent(slug);
  revalidatePath(`/tour-listing/${encodeSlug}`);
  fetch(`${process.env.NEXT_PUBLIC_APP_URL}/tour-listing/${slug}`, {
    cache: "no-store",
  });
  revalidatePath("/(protected)", "layout");
}

export async function revalidateDestinationAttribute(
  location: QueryLocationSchema
) {
  noStore();

  const encodeSlug = encodeURIComponent(location.slug);

  revalidatePath(
    `/(public)/(inner)/tour-listing/${encodeSlug}/[attribute]`,
    "page"
  );

  await revalidateStaticPages();
  await revalidateDestination(location.slug);

  const attributes = await db.locationAttribute.findMany({
    where: { locationId: location.id },
    select: {
      title: true,
    },
  });

  if (attributes.length > 1) {
    attributes.forEach((p) => {
      fetch(
        `${process.env.NEXT_PUBLIC_APP_URL}/tour-listing/${
          location.slug
        }/${p.title?.replaceAll(" ", "-")}`,
        {
          cache: "no-store",
        }
      );
    });
  }

  revalidatePath("/(protected)", "layout");
}

export async function revalidateCustomer() {
  noStore();
  revalidatePath("/(protected)", "layout");
}
