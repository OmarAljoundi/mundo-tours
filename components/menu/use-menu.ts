import { QueryLocationSchema, QueryTourTypeSchema } from "@/schema";
import { useMemo } from "react";
import { MenuItem } from "./lib";

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

export function useMenu({
  tourTypes,
}: {
  locations: QueryLocationSchema[];
  tourTypes: QueryTourTypeSchema[];
}) {
  const items = useMemo(() => {
    const europMenu = [...getTypesSubMenus(tourTypes ?? [])];

    return [
      {
        name: "الرئيسية",
        url: "/",
      },
      {
        name: "انت اختار",
        subMenu: europMenu,
      },
      {
        name: "من نحن",
        url: "/about-us",
      },
      {
        name: "اتصل بنا",
        url: "/call-us",
      },
    ];
  }, [tourTypes]);

  return items as MenuItem[];
}
