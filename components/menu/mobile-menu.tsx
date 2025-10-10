"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MenuItem } from "./lib";

export function MobileMenu({ items }: { items: MenuItem[] }) {
  const [open, setOpen] = useState(false);

  const renderItem = (item: MenuItem) => {
    return (
      <div className="border-b" key={`${item.name}-${item.url}`}>
        <Link
          onClick={() => setOpen(false)}
          href={item.url ?? "/"}
          target={item.external ? "_blank" : "_self"}
          className=" hover:text-gray-300 text-base font-primary flex flex-1 items-center justify-between py-2  font-medium transition-all hover:underline"
        >
          {item.name}
        </Link>
      </div>
    );
  };

  const renderItemWithChildren = (item: MenuItem) => {
    return (
      <Accordion
        type="single"
        collapsible
        className="w-full"
        key={`${item.name}-${item.url}`}
      >
        <AccordionItem value={item.name}>
          <AccordionTrigger className="font-primary py-2 text-base">
            {item.name}
          </AccordionTrigger>
          <AccordionContent>
            <div className="flex flex-col space-y-2 pl-4">
              {item.subMenu?.map((item, index) => (
                <Link
                  key={`${item.name}-${index}`}
                  href={item.url ?? ""}
                  target={item.external ? "_blank" : "_self"}
                  onClick={() => setOpen(false)}
                  className="text-xs hover:text-primary duration-300 transition-colors font-primary"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  };

  return (
    <div className="flex lg:hidden gap-x-2">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            className="group  w-9 h-9 "
            variant="outline"
            size="icon"
            onClick={() => setOpen((prevState) => !prevState)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <svg
              className="pointer-events-none"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12L20 12"
                className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
              />
              <path
                d="M4 12H20"
                className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
              />
              <path
                d="M4 12H20"
                className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
              />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent
          side={"right"}
          className="w-[300px] sm:w-[400px]  backdrop-blur-md text-black overflow-y-auto"
        >
          <SheetTitle className="sr-only">Menu Item</SheetTitle>
          <nav className="flex flex-col space-y-4 mt-8">
            {items.map((item) =>
              item.subMenu ? renderItemWithChildren(item) : renderItem(item)
            )}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
