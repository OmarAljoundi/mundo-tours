"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import DesktopMenu from "./desktop-menu";
import { PhoneAction, WhatsappAction } from "./call-to-actions";
import { getDestinations, getTourTypes } from "@/server/public-query.server";
import { useMenu } from "./use-menu";
import { MobileMenu } from "./mobile-menu";
import { CurrencySwitcher } from "./currency-switcher";

export function Navigation({
  locations,
  tourTypes,
  currency,
}: {
  locations: Awaited<ReturnType<typeof getDestinations>>;
  tourTypes: Awaited<ReturnType<typeof getTourTypes>>;
  currency: "SAR" | "OMR";
}) {
  const items = useMenu({ locations, tourTypes });
  return (
    <nav
      className="z-40 w-full h-auto  data-[menu-open=true]:border-none border-border border-b sticky top-0 inset-x-0 backdrop-blur-lg
         data-[menu-open=true]:backdrop-blur-xl backdrop-saturate-150 bg-background/70"
    >
      <header className={cn("bg-white py-2")}>
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-1 lg:gap-8 px-2 sm:px-6 lg:px-8">
          <Link className="block text-teal-600 w-[80px] lg:w-[100px]" href="/">
            <span className="sr-only">Home</span>
            <Image
              src={"/images/mundo_logo.png"}
              quality={100}
              width={1593}
              height={867}
              alt="موندو تورز"
              sizes="(max-width: 640px) 256px, 256px"
            />
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <DesktopMenu items={items} />

            <div className="flex items-center gap-1">
              <CurrencySwitcher defaultCurrency={currency} />
              <PhoneAction />
              <WhatsappAction />
              <MobileMenu items={items} />
            </div>
          </div>
        </div>
      </header>
    </nav>
  );
}
