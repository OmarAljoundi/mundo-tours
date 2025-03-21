export const revalidate = 0;
import ContentWrapper from "@/components/admin-panel/contet-wrapper";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import React, { Suspense } from "react";
import { OfficeTable } from "./components/table";
import { officeQuery } from "@/server/office.server";
import { unstable_cache } from "next/cache";

const officeQueryCached = unstable_cache(
  async () =>
    officeQuery({
      orderBy: { id: "desc" },
    }),

  ["officeQuery"],
  { revalidate: 86400 }
);

export default async function Page() {
  return (
    <ContentWrapper
      breadcrumbs={[
        { item: "Dashboard", url: "/admin" },
        { item: "Offices", currentPage: true },
      ]}
    >
      <Suspense
        fallback={
          <DataTableSkeleton
            columnCount={5}
            searchableColumnCount={1}
            filterableColumnCount={2}
            cellWidths={["10rem", "40rem", "12rem", "12rem", "8rem"]}
            shrinkZero
          />
        }
      >
        <OfficeTable dataPromise={officeQueryCached()} />
      </Suspense>
    </ContentWrapper>
  );
}
