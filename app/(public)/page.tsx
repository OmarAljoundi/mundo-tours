import React, { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Hero from "./components/hero";
import { getSettingBySectionAsync } from "@/server/settings.server";
import { getDestinations, getTourTypes } from "@/server/public-query.server";
import SectionProvider from "./components/section-provider";
import DestinationHomeLoading from "./components/destination-home-loading";
import DestinationList from "./components/destination-list";
import CategoryList from "./components/category-list";
import InstagramSection from "./components/instagram-section";
import { CardsLoading } from "@/components/cards-loading";
import { generatePageSeo } from "@/lib/generate-seo";
import { Metadata } from "next";
import { SettingSchema } from "@/schema/setting-schema";
import { seoSchema } from "@/schema/seo-schema";
import { unstable_cache } from "next/cache";
import BestTourListServer from "./components/best-tour.list.server";
import LoadJsonLdScript from "@/providers/load-jsonLd-script";
import { generateHomepageLDJson } from "@/lib/ld-json-schema";

export async function generateMetadata(): Promise<Metadata> {
  const { seoStaticPagesHome } = (await getSettingBySectionAsync(
    "CMS"
  )) as SettingSchema;

  const parsedSeo = seoSchema.parse(seoStaticPagesHome.seo ?? {});

  const dictionary = generatePageSeo(parsedSeo, "/");
  return dictionary;
}

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
      <Suspense>
        <LoadJsonLdScript dataPromise={generateHomepageLDJson()} />
      </Suspense>
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
        <BestTourListServer />
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
