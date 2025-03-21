"use client";

import * as React from "react";
const NextThemesProvider = dynamic(
  () => import("next-themes").then((e) => e.ThemeProvider),
  {
    ssr: false,
    loading: () => <h1>Loading..</h1>,
  }
);

import { type ThemeProviderProps } from "next-themes";
import dynamic from "next/dynamic";

export default function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
