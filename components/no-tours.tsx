"use client";
import { Button } from "@/components/ui/button";
import type React from "react";

import Link from "next/link";
import { Compass } from "lucide-react";
import { cn } from "@/lib/utils";

interface NoToursProps {
  title?: string;
  description?: string;
  className?: string;
}

export function TourIllustration(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" {...props}>
      <path
        fill="currentColor"
        d="M200 50 L250 100 L240 110 L200 80 L160 110 L150 100 Z M180 120 L220 120 L220 200 L180 200 Z M160 200 L240 200 L250 220 L150 220 Z M200 100 C 190 100 180 110 180 120 L220 120 C 220 110 210 100 200 100 Z M120 180 L130 160 L140 180 Z M260 180 L270 160 L280 180 Z M100 240 L300 240 L290 260 L110 260 Z"
      />
    </svg>
  );
}

export function NoTours({
  title = "لا توجد جولات متاحة حالياً",
  description = "نعمل على إضافة جولات سياحية جديدة ومثيرة. يرجى العودة قريباً لاستكشاف وجهات سياحية رائعة.",
  className,
}: NoToursProps) {
  return (
    <div className={cn("relative text-center z-[1] py-5", className)}>
      <h1 className="font-primary mt-4 text-balance text-xl  md:text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
        {title}
      </h1>
      <p className="font-primary mt-6 text-pretty text-base font-medium text-muted-foreground sm:text-xl/8">
        {description}
      </p>
      <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-center gap-y-3 gap-x-6">
        <Link href="/" className="font-primary">
          <Button className="group font-primary">
            <Compass
              className="ltr:me-2 ltr:ms-0 rtl:ms-2 rtl:me-0 opacity-60 transition-transform group-hover:rotate-12"
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
            استكشف الوجهات
          </Button>
        </Link>
      </div>
    </div>
  );
}
