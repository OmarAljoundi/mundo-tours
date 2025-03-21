export const dynamicParams = true;
import React from "react";
import {
  getAttributesBySlug,
  getToursByAttributes,
} from "@/server/public-query.server";
import { DestinationToursList } from "../../components/destination-tours-list";
import { AttributeTabs } from "../../components/attribute-tabs";
import { Metadata } from "next";
import { seoSchema } from "@/schema/seo-schema";
import { generatePageSeo } from "@/lib/generate-seo";
import { db } from "@/db.server";

export async function generateStaticParams() {
  if (process.env.NEXT_PUBLIC_BUILD_DEVICE == "local") return [];

  const destinations = await db.location.findMany({
    select: { slug: true, attributes: { select: { title: true } } },
    where: { isActive: true, isOffice: false },
  });

  const destinationsFiltered = destinations.filter(
    (location) => location.attributes.length > 1
  );

  return destinationsFiltered.flatMap((n) => {
    const attributeEntries = n.attributes
      .filter((m) => m.title)
      .map((m) => ({
        destination: n.slug,
        attribute: m.title!.replaceAll(" ", "-"),
      }));

    return attributeEntries;
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ destination: string; attribute: string }>;
}): Promise<Metadata> {
  const { destination, attribute } = await params;
  const slug = decodeURIComponent(destination);
  const attributeSlug = decodeURIComponent(attribute);

  const url = `/tour-listing/${slug}/${attributeSlug}`;

  const result = await getAttributesBySlug(slug);
  const parsedSeo = seoSchema.parse(result?.seo ?? {});
  const dictionary = generatePageSeo(
    parsedSeo,
    url,
    result?.image ? [{ ...result?.image }] : []
  );
  return dictionary;
}

export default async function DestinationTabPage({
  params,
}: {
  params: Promise<{ destination: string; attribute: string }>;
}) {
  const { destination, attribute } = await params;

  const slug = decodeURIComponent(destination);
  const slugAttribute = decodeURIComponent(attribute);

  const destinationItem = await getAttributesBySlug(slug);
  const data = await getToursByAttributes(slug, slugAttribute);

  return (
    <React.Fragment>
      <AttributeTabs destinationItem={destinationItem} />

      <DestinationToursList data={data} />
    </React.Fragment>
  );
}
