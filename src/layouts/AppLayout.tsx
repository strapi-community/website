import { ThemeProvider } from "next-themes"
import { ReactNode } from "react";

import AppFooter from "@/components/AppFooter";
import AppHeader from "@/components/AppHeader";
import Head from "next/head";
import { fetchAPI } from "@/lib/api";

export default function AppLayout({ children,headerData,footerData }: { children: ReactNode, headerData: any, footerData: any }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="keywords" content="commmunity, strapi, devcommunity" />
      </Head>
      <ThemeProvider attribute="class">
        <AppHeader data={headerData} />
        {children}
        <AppFooter data={footerData} />
      </ThemeProvider>
    </>
  )
}
