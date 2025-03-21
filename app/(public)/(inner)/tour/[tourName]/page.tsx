export const dynamicParams = true;

import { TourDetails } from "../components/tour-details";
import { getTourDetails } from "@/server/public-query.server";
import HowWorks from "../components/how-works";
import { Metadata } from "next";
import { generatePageSeo } from "@/lib/generate-seo";
import { seoSchema } from "@/schema/seo-schema";
import { db } from "@/db.server";

export async function generateStaticParams() {
  if (process.env.NEXT_PUBLIC_BUILD_DEVICE == "local") return [];
  const tours = await db.tour.findMany({
    select: { slug: true },
    where: { isActive: true },
  });

  return tours.map((tour) => ({
    tourName: tour.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tourName: string }>;
}): Promise<Metadata> {
  const { tourName } = await params;
  const slug = decodeURIComponent(tourName);

  const tour = await getTourDetails(slug);

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

  const tour = await getTourDetails(slug);

  return (
    <section>
      <div className="mt-4 mb-16">
        <TourDetails tour={tour} />
        <HowWorks />
      </div>
    </section>
  );
}
