import Link from "next/link";

type Props = {
    title: string,
    items: { text: string, href: string, externallink?: boolean }[]
}
export default function FooterNavBloc(
    { title, items }: Props
) {
    return (
        <div>
            <h2 className="text-xl font-semibold text-title1 dark:text-white">
                {title}
            </h2>
            <ul className="pt-6 space-y-3 text-sm md:text-base">
                {items.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.href}
                            target={item.externallink ? "_blank" : ""}
                            className="transition text-text dark:text-gray-200 hover:!text-primary"
                        >
                            {item.text}
                        </Link>
                    </li>
                ))
                }
            </ul>
        </div>
    )
}
