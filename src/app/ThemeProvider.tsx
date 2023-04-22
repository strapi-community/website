"use client";

import React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

// https://github.com/pacocoursey/next-themes/issues/152#issuecomment-1364280564

export default function ThemeProvider(props: ThemeProviderProps) {
  return <NextThemesProvider {...props} />;
}