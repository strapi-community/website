import { ReactNode } from "react";

export default function IconLink(
    { href, title, icon }: { href: string, title: string, icon: ReactNode }
) {
    return (
        <a href={href} target="_blank" rel="noreferrer" className="p-2 rounded-full border border-gray-100 dark:border-gray-600 shadow-lg shadow-gray-200/60 dark:shadow-transparent">
            <span className="sr-only">
                {title}
            </span>
            <span>
                {icon}
            </span>
        </a>
    )
}
