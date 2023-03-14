import { ShowcaseProps } from "@/types";
import Link from "next/link";
import Paragraph from "../atoms/Paragraph";


function changeDateFormat(date: string) {
    return new Date(date).toLocaleDateString()
}

export default function ShowCase(
    {
        html_url,
        name,
        description,
        pushed_at,
        stargazers_count,
        watchers_count,
        open_issues_count,
    }: ShowcaseProps
) {
    const pubDate = changeDateFormat(pushed_at)
    return (
        <Link href={html_url} target="_blank" className="relative group p-5 sm:p-6 lg:p-8">
            <span className="absolute inset-0 rounded-xl bg-white shadow-lg border-2 border-gray-100 shadow-gray-100/50 dark:border-gray-100/20 transition group-hover:scale-105 dark:shadow-transparent dark:border-gray-700 dark:bg-darkCard"></span>
            <div className="relative space-y-4">
                <h2 className="text-lg font-semibold text-title dark:text-white">
                    {name}
                </h2>
                <Paragraph >{description}</Paragraph>
                <div className="flex flex-wrap gap-3">
                    <span className="px-2 rounded-full flex items-center gap-0.5 text-text bg-[#f6fafe] dark:bg-darkCard dark:text-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width={20} height={20} strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {pubDate}
                    </span>
                    <span className="px-2 rounded-full text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-darkBg flex items-center gap-0.5 w-max">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width={20} height={20} fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                        </svg>
                        {stargazers_count}
                    </span>

                    <span className="px-2 rounded-full flex items-center gap-0.5 text-text bg-[#f6fafe] dark:bg-darkCard dark:text-gray-200">
                        {"icon"} {watchers_count}
                    </span>
                    <span className="px-2 rounded-full flex items-center gap-0.5 text-text bg-[#f6fafe] dark:bg-darkCard dark:text-gray-200">
                        {"icon"}{open_issues_count}
                    </span>
                </div>
            </div>
        </Link>
    )
}
