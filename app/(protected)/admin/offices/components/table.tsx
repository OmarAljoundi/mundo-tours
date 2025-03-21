"use client";
import React from "react";
import { DataTable } from "@/components/data-table/data-table";
import { getOfficeColumns } from "./columns";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useDataTable } from "@/hooks/use-data-table";
import { queryOfficeSchema } from "@/schema";
import { officeQuery } from "@/server/office.server";

export function OfficeTable({
  dataPromise,
}: {
  dataPromise: ReturnType<typeof officeQuery>;
}) {
  const data = React.use(dataPromise);
  const columns = React.useMemo(() => getOfficeColumns(), []);
  const dataParsed = React.useMemo(
    () => data.map((o) => queryOfficeSchema.parse(o)),
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

  return (
    <DataTable table={table}>
      <div className="flex items-center justify-between">
        <Link href={"/admin/offices/new"}>
          <Button size={"sm"}>Create new office</Button>
        </Link>
      </div>
    </DataTable>
  );
}
