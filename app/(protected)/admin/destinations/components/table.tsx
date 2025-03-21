"use client";
import React, { use, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { queryLocationSchema } from "@/schema";
import { AnimatableTab } from "@/components/ui/animatable-tab";
import { Plus } from "lucide-react";
import { LocationForm } from "./form";
import { CardsContainer } from "./cards-container";
import { locationQuery } from "@/server/location.server";
const tabs = [
  { id: "MundoTours", label: "Mundo tours" },
  { id: "B2B", label: "B2B" },
];

export function LocationTable({
  dataPromise,
}: {
  dataPromise: ReturnType<typeof locationQuery>;
}) {
  const rawLocations = use(dataPromise);
  const locations = useMemo(
    () => rawLocations.map((x) => queryLocationSchema.parse(x)),
    [rawLocations]
  );

  const [tabId, setTabId] = useState(tabs[0].id);
  const [open, setOpen] = useState(false);

  const mundoToursLocations = useMemo(
    () => locations.filter((x) => x.isOffice === false),
    [locations]
  );
  const mundoToursB2B = useMemo(
    () => locations.filter((x) => x.isOffice === true),
    [locations]
  );

  const newOrder = useMemo(() => {
    if (tabId == "B2B") {
      return (mundoToursB2B.at(-1)?.order ?? 0) + 1;
    }
    return (mundoToursLocations.at(-1)?.order ?? 0) + 1;
  }, [mundoToursB2B, mundoToursLocations, tabId]);

  return (
    <div className="flex flex-col w-full space-y-4">
      <div className="flex items-center justify-between">
        <AnimatableTab tabs={tabs} onTabChange={setTabId} />

        <div className="flex space-x-2">
          <Button
            variant="default"
            size="sm"
            className="flex items-center gap-1"
            onClick={() => setOpen(true)}
          >
            <Plus className="h-4 w-4" />
            <span>Add new destination</span>
          </Button>
        </div>
      </div>

      {tabId === "MundoTours" && (
        <CardsContainer locations={mundoToursLocations} />
      )}

      {tabId === "B2B" && <CardsContainer locations={mundoToursB2B} />}

      <LocationForm
        key={tabId}
        onOpenChange={setOpen}
        open={open}
        isOffice={tabId === "B2B"}
        newOrder={newOrder}
      />
    </div>
  );
}
