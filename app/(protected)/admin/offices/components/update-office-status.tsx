import { Switch } from "@/components/ui/switch";
import { officeUpdate } from "@/server/office.server";
import { QueryOfficeSchema } from "@/schema";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";
import { revalidateOffice } from "@/server/revalidation.server";

export function UpdateOfficeStatus({ row }: { row: QueryOfficeSchema }) {
  const route = useRouter();
  const [active, setActive] = useState<boolean>(row.status ?? false);
  const handleUpdateStatus = async (e: boolean) => {
    setActive(e);
    toast.promise(
      officeUpdate({
        where: { id: row.id! },
        data: { status: { set: !row.status } },
      }),
      {
        error(error) {
          setActive(!e);
          return error;
        },
        loading: "Updating office status in progress ..",
        async success(data) {
          route.refresh();
          revalidateOffice();

          return `Office ${data.name} status has been updated successfully`;
        },
      }
    );
  };
  return (
    <div className="w-32 flex items-center justify-between">
      <Switch
        defaultChecked
        checked={active}
        onCheckedChange={(e) => handleUpdateStatus(e)}
      />
    </div>
  );
}
