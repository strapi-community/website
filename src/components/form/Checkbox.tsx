import { ReactNode } from "react"

type CheckboxProps = {
    label: string|ReactNode,
    labelRequired?:boolean
    id: string,
}

export default function Checkbox(
    inputprops: CheckboxProps
) {
    const { label, id, labelRequired } = inputprops

    return (
        <>

            <label
                className="relative flex cursor-pointer items-center rounded-full select-none"
                htmlFor={id}
            >
                <input
                    type="checkbox"
                    className="peer appearance-none hidden"
                    id={id}
                />
                <span className="relative flex items-center justify-center h-6 w-6 cursor-pointer rounded-md border border-gray-300 dark:border-gray-700 transition-all peer-checked:!bg-primary text-transparent peer-checked:text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        width={20}
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth={1}
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </span>
                <span className="pl-1.5 text-text dark:text-gray-200">
                    {label} {labelRequired ?  ( <span className="text-red-600">*</span>):""}
                </span>
            </label>
        </>
    )

}
