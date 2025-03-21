import { QueryLocationSchema } from "@/schema";

export function getTotalToursSeprate(location: QueryLocationSchema) {
  let total = 0;

  location.attributes?.map((x) => {
    total += x._count.locationTours;
  });
  return getWordTotalSeprate(total);
}

function getWordTotalSeprate(total: number) {
  switch (total) {
    case 0:
      return { count: 0, word: "رحلة" };
    case 1:
      return { word: "رحلة واحدة" };
    case 2:
      return { word: "رحلاتين" };
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      return { word: "رحلات", count: total };
    default:
      return { word: "رحلة", count: total };
  }
}
