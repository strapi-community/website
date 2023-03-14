import Image from "next/image"
import Link from "next/link"
import Paragraph from "../atoms/Paragraph"

type Props = {
    href:string
    imgUrl:string
    category:string
    publishedAt:string
    title:string
    description:string
}
export default function Blog({ href, imgUrl, category, publishedAt, title, description }: Props) {
    return (
        <Link href={href} className="p-1 relative group">
            <span className="absolute inset-0 rounded-xl bg-white shadow-lg border-2 border-gray-100 shadow-gray-100/50 dark:border-gray-100/20 transition group-hover:scale-105 dark:shadow-transparent dark:border-gray-700 dark:bg-darkCard"></span>
            <Image width={500} height={600} alt="" src={imgUrl} className="w-full aspect-video object-cover rounded-md relative" />
            <div className="py-8 px-4 md:px-5 relative">
                <div className="flex  gap-x-3 gap-y-2 flex-wrap">
                    <span className="px-2 rounded-full text-sm bg-primary/5 text-primary border border-primary/20 dark:bg-primary dark:text-white">
                        { category }
                    </span>
                    <span className="px-2 rounded-full text-sm text-purple-600 dark:text-primary">
                        {publishedAt}
                    </span>
                </div>
                <h2 className="text-title dark:text-gray-100 text-xl  font-semibold md:line-clamp-3 pt-5">
                    {title}
                </h2>
                <Paragraph className="pt-6 line-clamp-3">
                    {description}
                </Paragraph>
            </div>
        </Link>
    )
}
