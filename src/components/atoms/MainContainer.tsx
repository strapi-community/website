import { ReactNode } from "react";

export default function MainContainer(
    { className, children }: { className?: string, children: ReactNode }
) {
    return (
        <main className={`pt-24 lg:pt-32 ${className} overflow-hidden`}>
            {children}
        </main>
    )
}
