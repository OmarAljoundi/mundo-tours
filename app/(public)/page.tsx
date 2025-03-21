import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Hero from "./components/hero";
import { getSettingBySectionAsync } from "@/server/settings.server";
import {
  getBestTours,
  getDestinations,
  getTourTypes,
} from "@/server/public-query.server";
import SectionProvider from "./components/section-provider";
import DestinationHomeLoading from "./components/destination-home-loading";
import DestinationList from "./components/destination-list";
import BestToursList from "./components/best-tours.list";
import CategoryList from "./components/category-list";
import InstagramSection from "./components/instagram-section";
import { CardsLoading } from "@/components/cards-loading";
import { generatePageSeo } from "@/lib/generate-seo";
import { Metadata } from "next";
import { SettingSchema } from "@/schema/setting-schema";
import { seoSchema } from "@/schema/seo-schema";
import { unstable_cache } from "next/cache";

export async function generateMetadata(): Promise<Metadata> {
  const { seoStaticPagesHome } = (await getSettingBySectionAsync(
    "CMS"
  )) as SettingSchema;

  const parsedSeo = seoSchema.parse(seoStaticPagesHome.seo ?? {});

  const dictionary = generatePageSeo(parsedSeo, "/");
  return dictionary;
}

const getBestToursCached = unstable_cache(
  async () => getBestTours(),
  ["best-tours"],
  { revalidate: 86400 }
);
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

export default async function Home() {
  return (
    <React.Fragment>
      <Suspense fallback={<Skeleton className="h-[500px]" />}>
        <div className="lg:h-[500px]">
          <Hero
            contentPromise={getSettingBySectionAsyncCached()}
            destinationPromise={getDestinationsCached()}
            tourTypesPromise={getTourTypesCached()}
          />
        </div>
      </Suspense>

      <Suspense
        fallback={
          <div className="container">
            <DestinationHomeLoading />
          </div>
        }
      >
        <DestinationList destinationPromise={getDestinationsCached()} />
      </Suspense>

      <Suspense
        fallback={
          <div className="container">
            <CardsLoading />
          </div>
        }
      >
        <BestToursList toursPromise={getBestToursCached()} />
      </Suspense>

      <SectionProvider title="انواع البرامج">
        <Suspense>
          <CategoryList categoryPromise={getTourTypesCached()} />
        </Suspense>
      </SectionProvider>

      <InstagramSection />
    </React.Fragment>
  );
}
