import Link from "next/link";
import { ReactNode } from "react";

export default function IconLink(
    { href, title, icon }: { href: string, title:string, icon: ReactNode }
) {
    return (
        <Link href={href} target="_blank" className="p-2 rounded-full border border-gray-100 dark:border-gray-600 shadow-lg shadow-gray-200/60 dark:shadow-transparent">
            <span className="sr-only">
                {title}
            </span>
            <span>
                {icon}
            </span>
        </Link>
    )
}
