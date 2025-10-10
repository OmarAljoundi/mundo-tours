"use client";

import { useQueryState } from "nuqs";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn, setCookie } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function FromCountryAirport({ slug }: { slug: string }) {
  const [from, setFrom] = useQueryState("from", { shallow: false });
  const router = useRouter();
  const [hoveredCurrency, setHoveredCurrency] = useState<string | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (!from) {
      setIsExiting(false);
    }
  }, [from]);

  const handleSelect = (value: string) => {
    setIsExiting(true);
    setCookie("currency", value);
    router.refresh();

    setTimeout(() => {
      setFrom(value);
    }, 200);
  };

  const isTourWithAir = slug == "عروض-تشمل-الطيران";
  const dontShowContent = (isTourWithAir && from) || !isTourWithAir;

  if (dontShowContent) {
    return null;
  }

  return (
    <div
      className={cn(
        "w-full max-w-7xl mx-auto transition-opacity duration-400 mt-8 mb-16 px-2 sm:px-0",
        isExiting && "opacity-0"
      )}
    >
      <h2 className="text-3xl md:text-4xl text-secondary font-bold text-center mb-8 text-balance font-primary">
        الرجاء اختيار بوابة الطيران
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <button
          onClick={() => handleSelect("SAR")}
          onMouseEnter={() => setHoveredCurrency("SAR")}
          onMouseLeave={() => setHoveredCurrency(null)}
          className={cn(
            "group relative overflow-hidden rounded-xl transition-all duration-300",
            "hover:scale-[1.02] active:scale-[0.98]",
            from === "SAR"
              ? "ring-4 ring-primary shadow-2xl"
              : "ring-2 ring-border hover:ring-primary/50 shadow-lg hover:shadow-xl"
          )}
        >
          <div className="relative aspect-[2/1] w-full">
            <Image
              src="/images/Saudi-gate.jpg"
              alt="Travel from Saudi Arabia"
              fill
              className={cn(
                "object-cover transition-all duration-500",
                hoveredCurrency === "SAR" && "scale-105",
                from === "SAR" && "brightness-110"
              )}
            />
          </div>
        </button>

        <button
          onClick={() => handleSelect("OMR")}
          onMouseEnter={() => setHoveredCurrency("OMR")}
          onMouseLeave={() => setHoveredCurrency(null)}
          className={cn(
            "group relative overflow-hidden rounded-xl transition-all duration-300",
            "hover:scale-[1.02] active:scale-[0.98]",
            from === "OMR"
              ? "ring-4 ring-primary shadow-2xl"
              : "ring-2 ring-border hover:ring-primary/50 shadow-lg hover:shadow-xl"
          )}
        >
          <div className="relative aspect-[2/1] w-full">
            <Image
              src="/images/Oman-gate.jpg"
              alt="Travel from Sultanate of Oman"
              fill
              className={cn(
                "object-cover transition-all duration-500",
                hoveredCurrency === "OMR" && "scale-105",
                from === "OMR" && "brightness-110"
              )}
            />
          </div>
        </button>
      </div>

      {from && (
        <div className="mt-8 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
          <p className="text-muted-foreground">
            Selected currency:{" "}
            <span className="font-bold text-foreground">{from}</span>
          </p>
        </div>
      )}
    </div>
  );
}
