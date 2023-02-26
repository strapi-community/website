import { ReactNode } from "react"

interface BtnProps extends React.ComponentPropsWithoutRef<"button"> {
  children: ReactNode
  variant: "primary" | "secondary" | "custom",
  className?: string,
}

function getBtnClasses(variant: "primary" | "secondary" | "custom") {
  if (variant === "primary") {
    return "bg-primary border-2 border-transparent text-white hover:bg-opacity-90"
  } else if (variant === "secondary") {
    return "border-2 border-primary/30 text-primary hover:bg-primary/5"
  }
  return ""
}


export default function Button(
  btnprops: BtnProps
) {
  const { children, className, variant, ...rest } = btnprops
  return (
    <button className={`outline-none
        ${variant !== "custom" ? "px-6 py-3 rounded-lg transition" : ""}
        ${getBtnClasses(variant)}
        ${className}`} {...rest}
    >
      {children}
    </button>
  )
}
