import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";
import { cn, getDestinationNextRoute } from "@/lib/utils";
import { QueryLocationSchema, QueryTourTypeSchema } from "@/schema";

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

export default function DesktopMenu({
  locations,
  tourTypes,
}: {
  tourTypes: QueryTourTypeSchema[];
  locations: QueryLocationSchema[];
}) {
  const europMenu = [
    ...getDestinationSubMenus(locations ?? []),
    ...getTypesSubMenus(tourTypes ?? []),
  ];
  const travelServices = [...getDestinationSubMenusForTourism(locations ?? [])];

  return (
    <nav className={`hidden md:block `}>
      <NavigationMenu key={"main"}>
        <NavigationMenuList className="flex-row-reverse">
          <NavigationMenuItem key={"home"}>
            <NavigationMenuLink asChild>
              <Link
                href="/"
                className={cn(
                  navigationMenuTriggerStyle(),
                  "bg-transparent text-secondary",
                  "font-primary font-semibold"
                )}
              >
                الرئيسية
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem key={"سافر اوروبا"}>
            <NavigationMenuTrigger
              className={cn(
                "bg-transparent text-secondary ",
                "font-primary font-semibold"
              )}
            >
              سافر أوروبا
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[250px] p-1 text-right" dir="rtl">
                {europMenu.map(({ name, url }, index) => (
                  <li
                    key={`${name}-${index}`}
                    className="font-primary font-medium text-xs"
                  >
                    <NavigationMenuLink asChild>
                      <Link
                        href={`${url}`}
                        className="block font-primary select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        {name}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem key={"خدماتنا السياحية"}>
            <NavigationMenuTrigger
              className={cn(
                "bg-transparent text-secondary ",
                "font-primary font-semibold"
              )}
            >
              خدماتنا السياحية
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[250px] p-1 text-right" dir="rtl">
                {travelServices.map(({ name, url }, index) => (
                  <li
                    key={`${name}-${index}`}
                    className="font-primary font-medium text-xs"
                  >
                    <NavigationMenuLink asChild>
                      <Link
                        href={`${url}`}
                        className="block font-primary select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        {name}
                      </Link>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem key={"عن موندو"}>
            <NavigationMenuTrigger
              className={cn(
                "bg-transparent text-secondary ",
                "font-primary font-semibold"
              )}
            >
              عن موندو
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-[250px] p-1 text-right" dir="rtl">
                <li key={`من نحن`} className="font-primary font-medium text-xs">
                  <NavigationMenuLink asChild>
                    <Link
                      href={"/about-us"}
                      className="block font-primary select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      من نحن
                    </Link>
                  </NavigationMenuLink>
                </li>

                <li
                  key={`آراء العملاء`}
                  className="font-primary font-medium text-xs"
                >
                  <NavigationMenuLink asChild>
                    <Link
                      href={"https://www.instagram.com/p/B2Gr4omDs0y/"}
                      target="_blank"
                      className="block font-primary select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                    >
                      آراء العملاء
                    </Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
