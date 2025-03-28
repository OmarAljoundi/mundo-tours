"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

import { useRouter } from "next/navigation";
import { setCookie } from "@/lib/utils";

export function CurrencySwitcher({
  defaultCurrency,
}: {
  defaultCurrency: "SAR" | "OMR";
}) {
  const router = useRouter();
  const [currency, setCurrency] = useState<string>(defaultCurrency);

  const currencies: Record<string, { name: string; flag: string }> = {
    SAR: {
      name: "ريال سعودي",
      flag: "/images/saudi-arabia.png",
    },
    OMR: {
      name: "ريال عماني",
      flag: "/images/oman.png",
    },
  };

  const onValueChange = (value: string) => {
    setCookie("currency", value);
    setCurrency(value);
    router.refresh();
    location.reload();
  };

  return (
    <Select value={currency} onValueChange={onValueChange}>
      <SelectTrigger className="w-[135px]  font-primary text-xs pl-2 pr-3 py-1 h-9">
        <SelectValue placeholder="Select currency" asChild>
          <div className="font-primary text-xs flex items-center gap-x-2">
            <div className="w-6 h-6 overflow-hidden rounded-full shadow-sm">
              <Image
                src={currencies[currency].flag}
                alt={`${currencies[currency].name} flag`}
                width={24}
                height={24}
                className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="text-xs font-primary">
              {currencies[currency].name}
            </div>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent className="text-xs">
        {Object.entries(currencies).map(([code, { name, flag }]) => (
          <SelectItem key={code} value={code} className="py-2">
            <div className="flex items-center gap-x-2">
              <div className="w-6 h-6 overflow-hidden rounded-full shadow-sm transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                <Image
                  src={flag}
                  alt={`${name} flag`}
                  width={24}
                  height={24}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-xs font-primary">{name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
