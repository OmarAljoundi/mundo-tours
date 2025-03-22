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
import { cn } from "@/lib/utils";
import { MenuItem } from "./lib";

export default function DesktopMenu({ items }: { items: MenuItem[] }) {
  const renderItem = (item: MenuItem) => {
    return (
      <NavigationMenuItem key={item.name}>
        <NavigationMenuLink asChild>
          <Link
            href={item.url ?? ""}
            target={item.external ? "_blank" : "_self"}
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-transparent text-secondary",
              "font-primary font-semibold"
            )}
          >
            {item.name}
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  };

  const renderItemWithChildren = (item: MenuItem) => {
    return (
      <NavigationMenuItem key={item.name}>
        <NavigationMenuTrigger
          className={cn(
            "bg-transparent text-secondary ",
            "font-primary font-semibold"
          )}
        >
          {item.name}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-[250px] p-1 text-right" dir="rtl">
            {item.subMenu?.map(({ name, url }, index) => (
              <li
                key={`${name}-${index}`}
                className="font-primary font-medium text-xs"
              >
                <NavigationMenuLink asChild>
                  <Link
                    target={item.external ? "_blank" : "_self"}
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
    );
  };

  return (
    <nav className={`hidden md:block `}>
      <NavigationMenu key={"main"}>
        <NavigationMenuList className="flex-row-reverse">
          {items.map((item) =>
            item.subMenu ? renderItemWithChildren(item) : renderItem(item)
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
