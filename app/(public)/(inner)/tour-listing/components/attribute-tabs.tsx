"use client";
import { Separator } from "@/components/ui/separator";
import { Tabs as TabUi, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import React, { use } from "react";
import { getAttributesBySlug } from "@/server/public-query.server";

export function AttributeTabs({
  dataPromise,
  attribute,
}: {
  dataPromise: ReturnType<typeof getAttributesBySlug>;
  attribute?: string;
}) {
  const destinationItem = use(dataPromise);
  const route = useRouter();

  if (destinationItem && destinationItem.attributes.length > 1) {
    return (
      <React.Fragment>
        <Separator className="my-2" />
        <h1 className="text-center text-7xl font-secondary text-secondary mb-5">
          أختار نوع البرناج
        </h1>

        <TabUi
          defaultValue={decodeURIComponent(attribute as string)?.replaceAll(
            "-",
            " "
          )}
          className="w-full mb-8 "
          onValueChange={(e) =>
            route.push(
              `/tour-listing/${decodeURIComponent(
                destinationItem.slug as string
              )}?attribute=${e.replaceAll(" ", "-")}`
            )
          }
        >
          <TabsList
            className="w-full shadow-xl bg-white gap-4 grid grid-cols-2 lg:grid-cols-4 h-full "
            dir="rtl"
          >
            {destinationItem.attributes.map((item: any) => (
              <TabsTrigger
                value={item.title.toString()}
                key={item.id}
                className="w-full data-[state=active]:border-none border data-[state=active]:bg-primary data-[state=active]:text-white px-4 font-primary"
              >
                {item.title}
              </TabsTrigger>
            ))}
          </TabsList>
        </TabUi>
      </React.Fragment>
    );
  }
  return null;
}
