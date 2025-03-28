import { createLoader, parseAsString } from "nuqs/server";

export const tourListingSearchParams = {
  country: parseAsString,
  days: parseAsString,
  type: parseAsString,
};

export const loadSearchParams = createLoader(tourListingSearchParams);
