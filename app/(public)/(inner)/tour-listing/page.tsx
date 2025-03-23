import Filter from "@/components/shared/filter";
import { Suspense } from "react";

import React from "react";
import { ToursList } from "./components/tours-list";
import { getDestinations, getTourTypes } from "@/server/public-query.server";
import { getSettingBySectionAsync } from "@/server/settings.server";
import { Metadata } from "next";
import { SettingSchema } from "@/schema/setting-schema";
import { generatePageSeo } from "@/lib/generate-seo";
import { FilterLoading } from "@/components/shared/filter-loading";
import { CardsLoading } from "@/components/cards-loading";
import { unstable_cache } from "next/cache";

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

export default async function Page() {
  return (
    <Suspense
      fallback={
        <React.Fragment>
          <div className="mt-8">
            <FilterLoading />
          </div>
          <CardsLoading />
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
      <ToursList />
    </Suspense>
  );
}
