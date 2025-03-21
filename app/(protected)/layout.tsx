import { SidebarMenuLayout } from "@/components/admin-panel/sidebar-menu-layout";
import { TooltipProvider } from "@/providers/tooltip-provider";
import { ReactQueryProvider } from "@/providers/react-query-provider";
import { Toaster } from "@/components/ui/sonner";
import { Metadata } from "next";
import ThemeProvider from "@/providers/theme-provider";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { cn } from "@/lib/utils";
import { monaSans, notoKufiArabic, notoSans } from "../fonts";
import { AuthGuardProvider } from "@/providers/auth-guard-provider";
import React, { Suspense } from "react";
import { InitGlobalTransitionProvider } from "@/providers/init-global-transition-provider";

export const metadata: Metadata = {
  title: "Mundo Tours - Dashboard",
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.Fragment>
      <html dir="ltr" lang="en">
        <body
          className={cn(
            monaSans.className,
            notoKufiArabic.variable,
            notoSans.variable
          )}
        >
          <Suspense>
            <InitGlobalTransitionProvider />
            <AuthGuardProvider>
              <NuqsAdapter>
                <Toaster richColors />
                <ReactQueryProvider>
                  <TooltipProvider>
                    <ThemeProvider
                      attribute="class"
                      defaultTheme="system"
                      enableSystem
                      disableTransitionOnChange
                    >
                      <SidebarMenuLayout>{children}</SidebarMenuLayout>
                    </ThemeProvider>
                  </TooltipProvider>
                </ReactQueryProvider>
              </NuqsAdapter>
            </AuthGuardProvider>
          </Suspense>
        </body>
      </html>
    </React.Fragment>
  );
}
