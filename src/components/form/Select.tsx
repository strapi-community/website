import { ReactNode } from "react"

interface SelectProps extends React.ComponentPropsWithoutRef<"select"> {
    children: ReactNode
    variant: "default" | "custom",
    className?: string,
}

function Select(selectProps: SelectProps) {
    const { className, variant, children, ...rest } = selectProps
    return (
        <select name="" id="" className={
            `outline-none relative
            ${variant === "default"
                ? "py-3 px-6 pr-9 appearance-none rounded-lg outline-none bg-white border-gray-200/70 dark:border-gray-700 dark:bg-darkBg border-2 transition focus:!border-primary text-text dark:text-gray-300 focus:bg-white dark:focus:bg-darkCard" : ""} 
            ${className}`
        } {...rest}>
            {children}

            {variant === "default" ? (
                <span className="absolute right-3 inset-y-0 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                </span>
            ) : null
            }
        </select>
    )
}


function SelectOption(
    { value, displaytext }: { value: string, displaytext: string }
) {
    return <option value={value}>{displaytext}</option>
}


Select.SelectOption = SelectOption
export default Select
