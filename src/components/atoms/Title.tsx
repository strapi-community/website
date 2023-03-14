import { ReactNode } from "react";

export default function Title(
    {className, children}:{className?:string,children:ReactNode}
) {
  return (
    <h1 className={`font-bold text-title1 text-2xl sm:text-3xl lg:text-4xl dark:text-white ${className}`}>
        {children}
    </h1>
  )
}
