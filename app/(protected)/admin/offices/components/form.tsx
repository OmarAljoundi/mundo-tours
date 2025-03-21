import React from "react";
import { SeoForm } from "@/components/seo-form";
import { GeneralInfo } from "./general-info";
import { BestTours } from "./best-tours";

export function OfficeForm() {
  return (
    <div className="flex flex-col w-full gap-y-4">
      <GeneralInfo />
      <BestTours />
      <SeoForm />
    </div>
  );
}
