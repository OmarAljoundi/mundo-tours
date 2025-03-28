export const experimental_ppr = true;
import Scroll from "@/providers/scroll";
import React, { ReactNode, Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";
import LoadGMScript from "@/providers/load-gm-script";
import Footer from "@/components/menu/footer";
import { Viewport } from "next";
import {
  alfont,
  englishFont,
  notoKufiArabic,
  notoSans,
  saudiRiyal,
  shekari,
} from "../fonts";
import { cn } from "@/lib/utils";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "@/components/ui/sonner";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { TooltipProvider } from "@/providers/tooltip-provider";
import { NavigationsLoading } from "@/components/menu/navigations-loading";
import NavigationServer from "@/components/menu/navigation.server";

export const viewport: Viewport = {
  themeColor: "#ff2b00",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={cn(
          notoKufiArabic.variable,
          notoSans.variable,
          alfont.variable,
          englishFont.variable,
          shekari.variable,
          saudiRiyal.variable
        )}
      >
        <NuqsAdapter>
          <Toaster richColors />
          <ReactQueryProvider>
            <TooltipProvider>
              <LoadGMScript />
              <Analytics />
              <Scroll />
              <div className="flex flex-col ">
                <Suspense fallback={<NavigationsLoading />}>
                  <NavigationServer />
                </Suspense>
                {children}
                <Footer />
              </div>
            </TooltipProvider>
          </ReactQueryProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
