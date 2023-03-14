import Link from "next/link"
import { HTMLAttributeAnchorTarget, ReactNode } from "react"
import Paragraph from "../atoms/Paragraph"

function ExternalRessource(
  { icon, title, subtext, href }: { icon: ReactNode, title: string, subtext: string, href: string }
) {
  return (
    <a href={href} className="relative p-5 sm:p-8 lg:p-10 group" rel="noreferrer" target={"_blank"}>
      <div className="absolute inset-0 rounded-xl bg-white shadow-lg border-2 border-gray-100 shadow-gray-100/50 dark:border-gray-100/20 transition ease-linear group-hover:scale-105 dark:shadow-transparent dark:border-gray-700 dark:bg-darkCard"></div>
      <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="min-w-max flex relative">
          <div className="w-14 h-14 text-text dark:text-gray-200 rounded-md flex items-center justify-center bg-gray-100 dark:bg-darkCard border border-gray-200 dark:border-gray-800">
            {icon}
          </div>
        </div>
        <div className="relative flex flex-col">
          <h2 className="text-title1 font-semibold dark:text-white text-xl md:text-2xl lg:font-bold">
            {title}
          </h2>
          <Paragraph className="pt-6">
            {subtext}
          </Paragraph>
        </div>
      </div>
    </a>
  )
}

function InternalResource({ icon, title, subtext, href }: { icon: ReactNode, title: string, subtext: string, href: string }) {
  return (
    <Link href={href} className="relative p-5 sm:p-8 lg:p-10 group">
      <div className="absolute inset-0 rounded-xl bg-white shadow-lg border-2 border-gray-100 shadow-gray-100/50 dark:border-gray-100/20 transition ease-linear group-hover:scale-105 dark:shadow-transparent dark:border-gray-700 dark:bg-darkCard"></div>
      <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="min-w-max flex relative">
          <div className="w-14 h-14 text-text dark:text-gray-200 rounded-md flex items-center justify-center bg-gray-100 dark:bg-darkCard border border-gray-200 dark:border-gray-800">
            {icon}
          </div>
        </div>
        <div className="relative flex flex-col">
          <h2 className="text-title1 font-semibold dark:text-white text-xl md:text-2xl lg:font-bold">
            {title}
          </h2>
          <Paragraph className="pt-6">
            {subtext}
          </Paragraph>
        </div>
      </div>
    </Link>
  )
}

export default function Resource(
  Props: { icon: ReactNode, title: string, subtext: string, href: string, externalressource?:boolean}
) {
  return (
    <>
      {Props.externalressource?(
        <ExternalRessource  {...Props}/>
      ):null
      }
      
      {!Props.externalressource?(
        <InternalResource  {...Props}/>
      ):null
      }
    </>
  )
}
