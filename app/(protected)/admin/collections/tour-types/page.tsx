export const revalidate = 0;
import ContentWrapper from "@/components/admin-panel/contet-wrapper";
import React, { Suspense } from "react";
import { TourTypesTable } from "./component/table";
import { tourTypeQuery } from "@/server/tour-types.server";
import LoadingSkeleton from "./component/loading-skeleton";
import { unstable_cache } from "next/cache";

const tourTypeQueryCached = unstable_cache(
  async () => tourTypeQuery({ orderBy: { order: "asc" } }),
  ["tourTypeQuery"],
  { revalidate: 86400 }
);

export default async function Page() {
  return (
    <ContentWrapper
      breadcrumbs={[
        { item: "Dashboard", url: "/admin" },
        { item: "Tour types", currentPage: true },
      ]}
    >
      <Suspense fallback={<LoadingSkeleton />}>
        <TourTypesTable dataPromise={tourTypeQueryCached()} />
      </Suspense>
    </ContentWrapper>
  );
}
