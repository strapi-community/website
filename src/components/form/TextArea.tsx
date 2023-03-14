interface InputProps extends React.ComponentPropsWithoutRef<"textarea"> {
    variant: "default" | "costume"
    className?: string,
}
export default function TextArea(
    inputprops: InputProps
) {

    const { className, variant, children, ...rest } = inputprops
  return (
    <textarea className={
        `outline-none 
        ${variant === "default" 
        ? "py-3 px-6 rounded-lg outline-none resize-none h-40 bg-white border-gray-200/70 dark:border-gray-700 dark:bg-darkBg border-2 transition focus:!border-primary text-text dark:text-gray-300 focus:bg-white dark:focus:bg-darkCard" : ""} 
        ${className}`
    } {...rest}  >
        { children }
    </textarea>
  )
}
