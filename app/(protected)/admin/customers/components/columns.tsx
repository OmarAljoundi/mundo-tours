"use client";

import * as React from "react";
import { type ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { QueryCustomerSchema } from "@/schema";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { ActionItem, ActionsRow, DeleteAction } from "@/components/action-row";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { eCustomerStatus } from "./lib";
import { Badge } from "@/components/ui/badge";
import { customerDelete } from "@/server/customer.server";
import { Check, X } from "lucide-react";
import { toast } from "sonner";

export function getCustomerColumns(): ColumnDef<QueryCustomerSchema>[] {
  return [
    {
      accessorKey: "id",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Customer Id" />
      ),
      cell: ({ row }) => <div className="w-[80px]">#{row.getValue("id")}</div>,
      enableSorting: true,
      enableHiding: true,
    },
    {
      accessorKey: "name",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Customer Name" />
      ),
      cell: ({ row }) => {
        return <span>{row.getValue("name")}</span>;
      },
      filterFn: (row, id, value) => {
        return row.original.name?.includes(value) || false;
      },
    },
    {
      accessorKey: "phoneNumber",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Customer Phone" />
      ),
      cell: ({ row }) => {
        return (
          <div className="w-auto flex items-center justify-between">
            <span className="truncate">{row.getValue("phoneNumber")}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "notes",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Notes" />
      ),
      cell: ({ row }) => {
        return (
          <Tooltip>
            <TooltipTrigger>
              <div className=" flex items-center justify-between truncate">
                <span
                  className="text-ellipsis overflow-hidden font-arabic-body"
                  dir="rtl"
                >
                  {row.original.notes}
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <div className="px-1 py-2">
                <div className="text-small font-bold">Custom Note</div>
                <div
                  className="text-tiny break-words"
                  style={{ inlineSize: "150px" }}
                >
                  {row.original.notes}
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        );
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        const status = row.original.status;
        return (
          <div className="w-32 flex items-center justify-between">
            <Badge
              variant={
                eCustomerStatus.Completed == status
                  ? "outline"
                  : eCustomerStatus.No_Answer == status
                  ? "destructive"
                  : "destructive"
              }
            >
              {status == eCustomerStatus.Completed
                ? "Completed!"
                : status == eCustomerStatus.No_Answer
                ? "No answer"
                : "Pending"}
            </Badge>
          </div>
        );
      },
      filterFn: (row, id, value) => {
        const status =
          row.original.status == eCustomerStatus.Completed
            ? "Completed"
            : row.original.status == eCustomerStatus.No_Answer
            ? "No_Answer"
            : "Pending";
        return (value as string[]).includes(status);
      },
    },
    {
      accessorKey: "createdAt",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="CreatedAt" />
      ),
      cell: ({ row }) => (
        <div className="w-[100px] truncate">
          {format(new Date(row.getValue("createdAt")), "yyyy-MM-dd")}
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
            <ActionItem
              type="click"
              icon={Check}
              label="Completed"
              onClick={() => console.log("Completed")}
            />
            <ActionItem
              type="click"
              icon={X}
              label="No Answer"
              onClick={() => console.log("Completed")}
            />
            <DeleteAction
              itemName={original.name ?? ""}
              deleteFunction={() =>
                customerDelete({ where: { id: original.id } })
              }
              onSuccess={() => {
                route.refresh();
                toast.success("Deleted successfully", {
                  description: "Customer has been deleted successfully",
                });
              }}
            />
          </ActionsRow>
        );
      },
      size: 40,
    },
  ];
}
