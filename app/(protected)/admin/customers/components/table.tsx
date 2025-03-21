"use client";
import React from "react";
import { DataTable } from "@/components/data-table/data-table";
import { getCustomerColumns } from "./columns";
import { useDataTable } from "@/hooks/use-data-table";
import { queryCustomerSchema } from "@/schema";
import { customerQuery } from "@/server/customer.server";

export function CustomerTable({
  dataPromise,
}: {
  dataPromise: ReturnType<typeof customerQuery>;
}) {
  const data = React.use(dataPromise);
  const columns = React.useMemo(() => getCustomerColumns(), []);
  const dataParsed = React.useMemo(
    () => data.map((o) => queryCustomerSchema.parse(o)),
    [data]
  );
  const { table } = useDataTable({
    data: dataParsed ?? [],
    columns,
    rowCount: data?.length ?? 0,
    initialState: {
      columnPinning: { right: ["actions"] },
    },
  });

  return <DataTable table={table} />;
}
