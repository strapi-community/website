import { ReactNode } from "react";

export default function GroupForm(
    { children }: { children: ReactNode }
) {
    return (
        <div className="space-y-0.5 flex flex-col">
            {children}
        </div>
    )
}
