import { getDestinationNextRoute } from "@/lib/utils";
import { QueryLocationSchema, QueryTourTypeSchema } from "@/schema";
import { useMemo } from "react";
import { MenuItem } from "./lib";

const getDestinationSubMenus = (data: QueryLocationSchema[]) => {
  return data
    .filter((x) => x.showOnEurope)
    .map((z) => {
      const url = getDestinationNextRoute(z);
      return {
        name: z.name!,
        url,
      };
    });
};

const getTypesSubMenus = (data: QueryTourTypeSchema[]) => {
  return data
    .filter((x) => x.showOnService)
    .map((z) => {
      return {
        name: z.name!,
        url: `/tour-listing?type=${z.name}`,
      };
    });
};

const getDestinationSubMenusForTourism = (data: QueryLocationSchema[]) => {
  return data
    .filter((x) => x.showOnService)
    .map((z) => {
      return {
        name: z.name!,
        url: `/tour-listing/${z.slug}`,
      };
    });
};

export function useMenu({
  locations,
  tourTypes,
}: {
  locations: QueryLocationSchema[];
  tourTypes: QueryTourTypeSchema[];
}) {
  const items = useMemo(() => {
    const europMenu = [
      ...getDestinationSubMenus(locations ?? []),
      ...getTypesSubMenus(tourTypes ?? []),
    ];
    const travelServices = [
      ...getDestinationSubMenusForTourism(locations ?? []),
    ];

    return [
      {
        name: "الرئيسية",
        url: "/",
      },
      {
        name: "سافر أوروبا",
        subMenu: europMenu,
      },
      {
        name: "خدماتنا السياحية",
        subMenu: travelServices,
      },
      {
        name: "عن موندو",
        subMenu: [
          { name: "من نحن", url: "/about-us" },
          {
            name: "آراء العملاء",
            url: "https://www.instagram.com/p/B2Gr4omDs0y/",
            external: true,
          },
        ],
      },
    ];
  }, [locations, tourTypes]);

  return items as MenuItem[];
}
