import Image from "next/image"
import Link from "next/link"
import Paragraph from "../atoms/Paragraph"


export default function Meet(
  { illustration, title, href, subtext }: { illustration: string, title: string, href: string, subtext: string }
) {
  return (
    <Link href={href} target={"_blank"} className="relative p-5 sm:p-8 lg:p-10 group ">
      <div className="absolute inset-0 rounded-xl group-hover:scale-105 bg-white shadow-lg border-2 border-gray-100 shadow-gray-100/50 dark:border-gray-100/20 transition ease-linear dark:shadow-transparent dark:border-gray-700 dark:bg-darkCard"></div>
      <div className="relative flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="md:min-w-max">
          <Image src={illustration} alt={title} width={200} height={200} className=" md:w-36 md:h-auto sm:h-44 w-11/12 h-auto " />
        </div>
        <div className="flex flex-col">

          <div className="flex justify-betwee relative  gap-2 items-center">
            <h2 className="text-title font-semibold dark:text-gray-200 text-xl ">
              {title}
            </h2>
            <span aria-hidden="true" className="hidden md:flex min-w-max group-hover:-right-4 absolute -right-3 top-1 transition-all text-gray-400  ease-linear">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          <Paragraph className="pt-6">
            {subtext}
          </Paragraph>
        </div>
      </div>
    </Link>
  )
}
