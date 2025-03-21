export const dynamicParams = true;

import React from "react";
import { DestinationToursList } from "../components/destination-tours-list";
import {
  getAttributesBySlug,
  getToursByAttributes,
} from "@/server/public-query.server";
import { Metadata } from "next";
import { seoSchema } from "@/schema/seo-schema";
import { generatePageSeo } from "@/lib/generate-seo";
import { db } from "@/db.server";

export async function generateStaticParams() {
  if (process.env.NEXT_PUBLIC_BUILD_DEVICE == "local") return [];

  const destinations = await db.location.findMany({
    where: { isActive: true, isOffice: false },
    select: {
      slug: true,
      attributes: {
        select: { id: true },
      },
    },
  });

  const destinationsFiltered = destinations.filter(
    (o) => o.attributes.length == 1
  );

  return destinationsFiltered.map((destination) => ({
    destination: destination.slug,
  }));
}

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

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ destination: string }>;
}) {
  const { destination } = await params;
  const slug = decodeURIComponent(destination);

  const data = await getToursByAttributes(slug);

  return (
    <React.Fragment>
      <DestinationToursList data={data} />
    </React.Fragment>
  );
}
