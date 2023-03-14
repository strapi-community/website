import { ThemeProvider } from "next-themes"
import { ReactNode } from "react";

import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import Head from "next/head";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="commmunity, strapi, devcommunity" />
      </Head>
      <ThemeProvider attribute="class">
        <AppHeader />
        {children}
        <AppFooter />
      </ThemeProvider>
    </>
  )
}
