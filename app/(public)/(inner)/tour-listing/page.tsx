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

export async function generateMetadata(): Promise<Metadata> {
  const { seoStaticPagesAllTours } = (await getSettingBySectionAsync(
    "CMS"
  )) as SettingSchema;
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
          destinationPromise={getDestinations()}
          tourTypesPromise={getTourTypes()}
        />
      </div>
      <ToursList />
    </Suspense>
  );
}
