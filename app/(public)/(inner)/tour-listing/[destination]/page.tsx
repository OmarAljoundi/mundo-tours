import React, { Suspense } from "react";
import { DestinationToursList } from "../components/destination-tours-list";
import {
  getAttributesBySlug,
  getToursByAttributes,
} from "@/server/public-query.server";
import { Metadata } from "next";
import { seoSchema } from "@/schema/seo-schema";
import { generatePageSeo } from "@/lib/generate-seo";
import { CardsLoading } from "@/components/cards-loading";
import { AttributeTabs } from "../components/attribute-tabs";
import { unstable_cache } from "next/cache";
import { AttributeTabsLoading } from "../components/attribute-tabs-loading";
import { hashString } from "@/lib/utils";
import { cookies } from "next/headers";
import LoadJsonLdScript from "@/providers/load-jsonLd-script";
import { generateFilteredTourListingLDJson } from "@/lib/ld-json-schema";
import { FromCountryAirport } from "../components/from-country-airport";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ destination: string }>;
  searchParams: Promise<{ attribute?: string }>;
}): Promise<Metadata> {
  const { destination } = await params;
  const { attribute } = await searchParams;
  const slug = decodeURIComponent(destination);

  let url = `/tour-listing/${slug}`;

  if (attribute) url += `?attribute=${attribute}`;

  const getAttributesBySlugCached = unstable_cache(
    async () => getAttributesBySlug(slug),
    ["attributes", hashString(slug)],
    { revalidate: 86400, tags: ["attributes", hashString(slug)] }
  );

  const result = await getAttributesBySlugCached();
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
  searchParams,
}: {
  params: Promise<{ destination: string }>;
  searchParams: Promise<{ attribute?: string; from?: string }>;
}) {
  const { destination } = await params;
  const { attribute, from } = await searchParams;
  const localCookies = await cookies();

  const currency =
    (localCookies.get("currency")?.value as "SAR" | "OMR") || "SAR";
  const slug = decodeURIComponent(destination);
  const attributeSlug = decodeURIComponent(attribute as string);

  const getAttributesBySlugCached = unstable_cache(
    async () => getAttributesBySlug(slug),
    ["attributes", hashString(slug)],
    { revalidate: 86400, tags: ["attributes", hashString(slug)] }
  );

  const getToursByAttributesCached = unstable_cache(
    async () => getToursByAttributes(slug, attributeSlug, false, currency),
    ["attributes-tours", hashString(slug), hashString(attributeSlug), currency],
    {
      revalidate: 86400,
      tags: [
        "attributes-tours",
        hashString(slug),
        hashString(attributeSlug),
        currency,
      ],
    }
  );

  const isTourWithAir = slug == "عروض-تشمل-الطيران";
  const showContent = (isTourWithAir && from) || !isTourWithAir;

  return (
    <React.Fragment>
      <Suspense>
        <LoadJsonLdScript
          dataPromise={generateFilteredTourListingLDJson({
            params,
            searchParams,
          })}
        />
      </Suspense>

      <FromCountryAirport slug={slug} />
      {showContent && attribute && (
        <Suspense
          fallback={<AttributeTabsLoading />}
          key={destination ? hashString(destination) : "all"}
        >
          <AttributeTabs
            slug={slug}
            dataPromise={getAttributesBySlugCached()}
            attribute={attribute}
          />
        </Suspense>
      )}

      {showContent && (
        <Suspense
          fallback={<CardsLoading cards={9} />}
          key={hashString(attribute ?? destination)}
        >
          <DestinationToursList
            dataPromise={getToursByAttributesCached()}
            currency={currency}
            slug={slug}
          />
        </Suspense>
      )}
    </React.Fragment>
  );
}
