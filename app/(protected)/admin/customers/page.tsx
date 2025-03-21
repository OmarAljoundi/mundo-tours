export const revalidate = 0;
import ContentWrapper from "@/components/admin-panel/contet-wrapper";
import { DataTableSkeleton } from "@/components/data-table/data-table-skeleton";
import React, { Suspense } from "react";
import { CustomerTable } from "./components/table";
import { customerQuery } from "@/server/customer.server";
import { unstable_cache } from "next/cache";

const customerQueryCached = unstable_cache(
  async () =>
    customerQuery({
      orderBy: { createdAt: "desc" },
    }),
  ["customerQuery"],
  { revalidate: 86400 }
);

export default async function Page() {
  return (
    <ContentWrapper
      breadcrumbs={[
        { item: "Dashboard", url: "/admin" },
        { item: "Customers", currentPage: true },
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
        <CustomerTable dataPromise={customerQueryCached()} />
      </Suspense>
    </ContentWrapper>
  );
}
