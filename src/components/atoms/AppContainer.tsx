import { ReactNode } from "react";

export default function AppContainer(
  {className, children}:{className?:string, children:ReactNode}
) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-10 lg:px-4 ${className}`}>
        {children}
    </div>
  )
}
