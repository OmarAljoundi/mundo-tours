"use server";

import { revalidatePath, unstable_noStore as noStore } from "next/cache";

export async function revalidateImTour() {
  noStore();
  try {
    fetch(process.env.IMTOUR_API!, { cache: "no-store" });
    fetch(process.env.ADVISER_API!, { cache: "no-store" });
  } catch (ex) {
    console.log("error whilte revalidating im tour: ", ex);
    return;
  }
}

export async function revalidateTour(slug: string) {
  noStore();
  const encodeSlug = encodeURIComponent(slug);
  revalidatePath(`/tour/${encodeSlug}`);
  revalidatePath("/(protected)", "layout");
  revalidatePath(`/(public)/(inner)/tour-listing/[destination]`, "page");
  revalidateImTour();
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
  revalidateImTour();
}

export async function revalidateDestination(slug: string) {
  noStore();
  const encodeSlug = encodeURIComponent(slug);
  revalidatePath(`/tour-listing/${encodeSlug}`);
  revalidatePath("/(protected)", "layout");
  await revalidateImTour();
  await revalidateStaticPages();

  fetch(`${process.env.NEXT_PUBLIC_APP_URL}/tour-listing/${slug}`, {
    cache: "no-store",
  });
}

export async function revalidateCustomer() {
  noStore();
  revalidatePath("/(protected)", "layout");
}

export async function revalidateOffice() {
  noStore();
  revalidatePath("/(protected)", "layout");
  revalidateImTour();
}
