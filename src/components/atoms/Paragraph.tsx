import { ReactNode } from "react";

export default function Paragraph(
    {className, children}:{className?:string,children:ReactNode}
) {
  return (
    <p className={`${className} text-text dark:text-gray-200`}>
        {children}
    </p>
  )
}
