
interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
    variant: "default" | "costume"
    className?: string,
}

export default function Input(
    inputprops: InputProps
) {
    const { className, variant, ...rest } = inputprops
    return (
        <input className={
            `outline-none 
            ${variant === "default" 
            ? "py-3 px-6 rounded-lg outline-none bg-white border-gray-200/70 dark:border-gray-700 dark:bg-darkBg border-2 transition focus:!border-primary text-text dark:text-gray-300 focus:bg-white dark:focus:bg-darkCard" : ""} 
            ${className}`
        } {...rest} />
    )
}
