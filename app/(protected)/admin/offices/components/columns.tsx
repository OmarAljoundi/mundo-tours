"use client";

import * as React from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { QueryOfficeSchema } from "@/schema";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { AlertCircle, ExternalLink } from "lucide-react";
import Link from "next/link";
import {
  ActionsRow,
  DeleteAction,
  RedirectActionItem,
} from "@/components/action-row";
import { UpdateOfficeStatus } from "./update-office-status";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { officeDelete } from "@/server/office.server";

export function getOfficeColumns(): ColumnDef<QueryOfficeSchema>[] {
  return [
    {
      accessorKey: "logo",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Logo" />
      ),
      cell: ({ row }) => {
        return (
          <Avatar>
            <AvatarImage src={row.original.logo ?? ""} alt="Preview logo" />
            <AvatarFallback>
              {row.original.name?.slice(0, 2)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
        );
      },
      filterFn: (row, id, value) => {
        return row.original.name?.includes(value) || false;
      },
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Office Name" />
      ),
      cell: ({ row }) => {
        return (
          <div>
            <span className=" truncate line-clamp-1 font-arabic-body">
              {row.getValue("name")}
            </span>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return row.original.name?.includes(value) || false;
      },
    },
    {
      accessorKey: "contactNumber",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Contact Number" />
      ),
      cell: ({ row }) => {
        return (
          <div className="w-40 flex items-center justify-start font-arabic-body">
            {row.original.contactNumber}
          </div>
        );
      },
    },
    {
      accessorKey: "email",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
      cell: ({ row }) => {
        return (
          <div className="w-32 flex items-center justify-between">
            <span className="max-w-[6rem] truncate">
              {row.getValue("email")}
            </span>
          </div>
        );
      },
    },
    {
      accessorKey: "slug",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Url" />
      ),
      cell: ({ row }) => {
        if (row.original.slug) {
          return (
            <div className="w-auto flex items-center justify-between">
              <Link
                href={`https://${row.original.slug}.imtour.travel`}
                target="_blank"
              >
                <Button
                  trailingIcon={<ExternalLink className="size-4" />}
                  size="sm"
                  variant="outline"
                >
                  <span className="w-24 truncate text-ellipsis overflow-hidden text-xs">
                    Visit Page
                  </span>
                </Button>
              </Link>
            </div>
          );
        }
        return (
          <div className="w-auto flex items-center justify-between">
            <Button
              trailingIcon={<AlertCircle />}
              size="sm"
              color="primary"
              variant="outline"
            >
              <span className="w-24 truncate text-ellipsis overflow-hidden">
                Need to set slug!
              </span>
            </Button>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        return (value as string[]).includes(row.original.slug ?? "");
      },
      size: 180,
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => <UpdateOfficeStatus row={row.original} />,
      filterFn: (row) => {
        if (row.original.status == true) return true;
        if (row.original.status == false) return true;

        return false;
      },
    },
    {
      accessorKey: "createdAt",
      sortingFn: "datetime",
      sortDescFirst: true,
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="CreatedAt" />
      ),
      cell: ({ row }) => (
        <div className="w-[100px] truncate">
          {format(new Date(row.original.createdAt!), "yyyy-MM-dd")}
        </div>
      ),
      filterFn: (row, id, value) => {
        let from = true;
        let to = true;
        if (value?.from) {
          from =
            new Date(value.from as string) <= new Date(row.original.createdAt!);
        }
        if (value?.to) {
          to =
            new Date(value.to as string) >= new Date(row.original.createdAt!);
        }

        return from && to;
      },
    },

    {
      id: "actions",
      cell: function Cell({ row: { original } }) {
        const route = useRouter();
        return (
          <ActionsRow gap="xs">
            <RedirectActionItem url={`/admin/offices/${original.id}`} />
            <DeleteAction
              itemName={original.name ?? ""}
              deleteFunction={() =>
                officeDelete({ where: { id: original.id } })
              }
              onSuccess={() => route.refresh()}
            />
          </ActionsRow>
        );
      },
      size: 40,
    },
  ];
}
