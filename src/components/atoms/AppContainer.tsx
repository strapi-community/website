import { ReactNode } from "react";

export default function AppContainer(
  {className, children}:{className?:string, children:ReactNode}
) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-10 md:px-12 lg:px-8 xl:px-10  ${className}`}>
        {children}
    </div>
  )
}
