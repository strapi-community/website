import Link from "next/link";

type Props = {
    href: string,
    text: string,
    variant: "primary" | "secondary",
    type: "fill" | "outline",
    className?: string,
    externalLink?: boolean
}
function getBtnClasses(variant: "primary" | "secondary",type: "fill" | "outline") {
    if (variant === "primary" && type == "fill") {
        return "bg-primary border-2 border-transparent text-white hover:bg-opacity-90"
    } else if (variant === "secondary" && type == "fill") {
        return "border-2 border-primary/30 text-primary hover:bg-primary/5"
    } else if (variant === "secondary" && type == "outline") {
        return "border-2 border-primary/30 text-primary hover:bg-primary/5"
    } else if (variant === "secondary" && type == "outline") {
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
export default function BtnLink({ href, text, variant, type, className, externalLink }: Props) {
    const clName = `px-6 py-3 rounded-lg transition
    ${getBtnClasses(variant,type)} ${className}`
    return (
        <>
            {!externalLink ? (
                <NxtLink href={href} text={text} variant={variant} type={type} className={clName} />
            ) : null
            }

            {externalLink ? (
                <LinkComponent href={href} text={text} variant={variant} type={type} className={clName} />
            ) : null

            }
        </>
    )
}
