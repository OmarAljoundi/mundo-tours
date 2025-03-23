export const dynamicParams = true;

import { TourDetails } from "../components/tour-details";
import { getTourDetails } from "@/server/public-query.server";
import HowWorks from "../components/how-works";
import { Metadata } from "next";
import { generatePageSeo } from "@/lib/generate-seo";
import { seoSchema } from "@/schema/seo-schema";
import { hashString } from "@/lib/utils";
import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import ImLoading from "@/components/svg/ImLoading";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tourName: string }>;
}): Promise<Metadata> {
  const { tourName } = await params;
  const slug = decodeURIComponent(tourName);

  const getTourDetailsCached = unstable_cache(
    async () => getTourDetails(slug),
    ["tour-details", hashString(slug)],
    {
      revalidate: 86400,
      tags: ["tour-details", hashString(slug)],
    }
  );

  const tour = await getTourDetailsCached();

  const parsedSeo = seoSchema.parse(tour?.seo ?? {});
  const dictionary = generatePageSeo(
    parsedSeo,
    `/tour/${slug}`,
    tour?.images?.map((url) => {
      return { url, alt: tour?.name };
    })
  );
  return dictionary;
}

export default async function TourPage({
  params,
}: {
  params: Promise<{ tourName: string }>;
}) {
  const { tourName } = await params;
  const slug = decodeURIComponent(tourName);

  const getTourDetailsCached = unstable_cache(
    async () => getTourDetails(slug),
    ["tour-details", hashString(slug)],
    {
      revalidate: 86400,
      tags: ["tour-details", hashString(slug)],
    }
  );

  return (
    <section className="mt-4 mb-16">
      <Suspense
        fallback={
          <div className="h-[500px]">
            <ImLoading />
          </div>
        }
      >
        <TourDetails dataPromise={getTourDetailsCached()} />
        <HowWorks />
      </Suspense>
    </section>
  );
}
