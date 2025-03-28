import { getDestinations, getTourTypes } from "@/server/public-query.server";
import { unstable_cache } from "next/cache";
import React from "react";
import { Navigation } from "./navigation";
import { cookies } from "next/headers";

const getDestinationsCached = unstable_cache(
  async () => getDestinations(),
  ["destinations"],
  { revalidate: 86400 }
);
const getTourTypesCached = unstable_cache(
  async () => getTourTypes(),
  ["tour-types"],
  { revalidate: 86400 }
);
export default async function NavigationServer() {
  const [locations, tourTypes] = await Promise.all([
    getDestinationsCached(),
    getTourTypesCached(),
  ]);

  const localCookies = await cookies();

  const currency =
    (localCookies.get("currency")?.value as "SAR" | "OMR") || "SAR";

  return (
    <Navigation
      currency={currency}
      locations={locations}
      tourTypes={tourTypes}
    />
  );
}
