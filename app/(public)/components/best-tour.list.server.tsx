import React from "react";
import BestToursList from "./best-tours.list";
import { getBestTours } from "@/server/public-query.server";
import { unstable_cache } from "next/cache";
import { cookies } from "next/headers";

export default async function BestTourListServer() {
  const localCookies = await cookies();

  const currency =
    (localCookies.get("currency")?.value as "SAR" | "OMR") || "SAR";

  const getBestToursCached = unstable_cache(
    async () => getBestTours(currency),
    ["best-tours"],
    { revalidate: 86400 }
  );

  const data = await getBestToursCached();

  return <BestToursList data={data} currency={currency} />;
}
