export const revalidate = 86400;

import React from "react";
import { getAttributesBySlug } from "@/server/public-query.server";

import { Metadata } from "next";
import { seoSchema } from "@/schema/seo-schema";
import { generatePageSeo } from "@/lib/generate-seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ destination: string }>;
}): Promise<Metadata> {
  const { destination } = await params;
  const slug = decodeURIComponent(destination);
  const url = `/tour-listing/${slug}`;

  const result = await getAttributesBySlug(slug);
  const parsedSeo = seoSchema.parse(result?.seo ?? {});
  const dictionary = generatePageSeo(
    parsedSeo,
    url,
    result?.image ? [{ ...result?.image }] : []
  );
  return dictionary;
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <React.Fragment>{children}</React.Fragment>;
}
