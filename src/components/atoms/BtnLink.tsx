import Link from "next/link";

type Props = {
    href:string,
    text:string,
    variant:"primary"|"secondary",
    className?:string,
    externalLink?:boolean
}
function getBtnClasses(variant:"primary"|"secondary"){
    if (variant === "primary") {
        return "bg-primary border-2 border-transparent text-white hover:bg-opacity-90"
    }else if(variant === "secondary"){
        return "border-2 border-primary/30 text-primary hover:bg-primary/5"
    }

    return ""
}

export default function BtnLink({href, text, variant, className, externalLink}:Props) {
  return (
    <Link href={href === "" ? "#" : href} target={externalLink?"_blank":""} className={`
        px-6 py-3 rounded-md transition
        ${getBtnClasses(variant)}
        ${className}
    `}>
        {text}
    </Link>
  )
}
