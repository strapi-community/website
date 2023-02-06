import AppHeader from "@/components/AppHeader";
import { ReactNode } from "react";
import AppFooter from "./AppFooter";

export default function AppLayouut({children}:{children:ReactNode}) {
  return (
    <>
        <AppHeader/>
        {children}
        <AppFooter/>
    </>
  )
}
