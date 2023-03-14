import Link from "next/link";

type Props = {
    href: string,
    text: string,
    variant: "primary" | "secondary",
    className?: string,
    externalLink?: boolean
}
function getBtnClasses(variant: "primary" | "secondary") {
    if (variant === "primary") {
        return "bg-primary border-2 border-transparent text-white hover:bg-opacity-90"
    } else if (variant === "secondary") {
        return "border-2 border-primary/30 text-primary hover:bg-primary/5"
    }

    return ""
}
function LinkComponent({ href, text, className }: Props) {
    return <a href={href} rel="noreferrer" target={"_blank"} className={`
        ${className}
    `}>{text}</a>
}

function NxtLink({ href, text,  className, externalLink }: Props) {
    return (
        <Link href={href === "" ? "#" : href} target={externalLink ? "_blank" : ""} className={`
        ${className}
    `}>
            {text}
        </Link>
    )
}
export default function BtnLink({ href, text, variant, className, externalLink }: Props) {
    const clName = `px-6 py-3 rounded-lg transition
    ${getBtnClasses(variant)} ${className}`
    return (
        <>
            {!externalLink ? (
                <NxtLink href={href} text={text} variant={variant} className={clName} />
            ) : null
            }

            {externalLink ? (
                <LinkComponent href={href} text={text} variant={variant} className={clName} />
            ) : null

            }
        </>
    )
}
