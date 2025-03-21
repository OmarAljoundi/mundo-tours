import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TourSelector } from "./tour-selector";

export function BestTours() {
  return (
    <div className="flex justify-start items-start gap-x-4">
      <div className="flex flex-col gap-4 flex-1 h-min">
        <Card>
          <CardHeader>
            <CardTitle>Office Best tours</CardTitle>
            <CardDescription>Fill the office best tours</CardDescription>
          </CardHeader>
          <Separator className="my-2" />
          <CardContent className="pt-6">
            <TourSelector />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
