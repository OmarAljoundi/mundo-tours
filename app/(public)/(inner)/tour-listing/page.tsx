import Filter from "@/components/shared/filter";
import { Suspense } from "react";
import React from "react";
import { getDestinations, getTourTypes } from "@/server/public-query.server";
import { getSettingBySectionAsync } from "@/server/settings.server";
import { Metadata } from "next";
import { SettingSchema } from "@/schema/setting-schema";
import { generatePageSeo } from "@/lib/generate-seo";
import { FilterLoading } from "@/components/shared/filter-loading";
import { CardsLoading } from "@/components/cards-loading";
import { unstable_cache } from "next/cache";
import { SearchParams } from "nuqs";
import ToursListServer from "./components/tours-list.server";
import LoadJsonLdScript from "@/providers/load-jsonLd-script";
import { generateTourListingLDJson } from "@/lib/ld-json-schema";

const getDestinationsCached = unstable_cache(
  async () => getDestinations(),
  ["destinations"],
  { revalidate: 86400 }
);

const getTourTypesCached = unstable_cache(
  async () => getTourTypes(),
  ["tour-types"],
  { revalidate: 86400 }
);

const getSettingBySectionAsyncCached = unstable_cache(
  async () => getSettingBySectionAsync("CMS"),
  ["setting-by-section-cms"],
  { revalidate: 86400 }
);

export async function generateMetadata(): Promise<Metadata> {
  const { seoStaticPagesAllTours } =
    (await getSettingBySectionAsyncCached()) as SettingSchema;
  const dictionary = generatePageSeo(seoStaticPagesAllTours.seo, "/");
  return dictionary;
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  return (
    <React.Fragment>
      <Suspense>
        <LoadJsonLdScript dataPromise={generateTourListingLDJson()} />
      </Suspense>
      <Suspense
        fallback={
          <React.Fragment>
            <div className="mt-8">
              <FilterLoading />
            </div>
          </React.Fragment>
        }
      >
        <div className="mt-8">
          <Filter
            onChange={true}
            enableTabs={true}
            destinationPromise={getDestinationsCached()}
            tourTypesPromise={getTourTypesCached()}
          />
        </div>
      </Suspense>
      <Suspense fallback={<CardsLoading />}>
        <ToursListServer searchParams={searchParams} />
      </Suspense>
    </React.Fragment>
  );
}
