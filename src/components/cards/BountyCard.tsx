import Image from "next/image"
import Link from "next/link"
import BtnLink from "../atoms/BtnLink"
import Paragraph from "../atoms/Paragraph"

type Props = {
    href: string
    icourl: string
    title: string
    description: string,
    reward:string
}
export default function BountyCard({ href, icourl, title, description, reward }: Props) {
    return (
        <div className="p-1 relative group">
            <span className="absolute inset-0 rounded-xl bg-white shadow-lg border-2 border-gray-100 shadow-gray-100/50 dark:border-gray-100/20 transition group-hover:scale-105 dark:shadow-transparent dark:border-gray-700 dark:bg-darkCard"></span>
            <div className="py-5 md:py-8 px-4 md:px-5 relative">
                <Image width={50} height={50} alt="ico" src={icourl} className="h-14 w-auto  rounded-md relative" />
                <span className="absolute top-8 right-4 md:right-5 bg-gray-200 dark:bg-darkBg text-text dark:text-white px-2 rounded-md py-0.5">
                    ${reward}
                </span>
                <Link href={href} className="text-title dark:text-gray-100 text-xl  font-semibold md:line-clamp-3 pt-5">
                    {title}
                </Link>
                <Paragraph className="pt-6 line-clamp-3">
                    {description}
                </Paragraph>
                <div className="pt-7">
                    <BtnLink href="/submit-plugin" variant="primary"  type="fill" text="Know More" className="!px-3 !py-2.5 !text-sm"/>
                </div>
            </div>
        </div>
    )
}
