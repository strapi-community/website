type Props = {
    label: string,
    id: string,
    name: string
}

export default function RadioButton(
    inputprops: Props
) {
    const { label, id, name } = inputprops

    return (
        <>
            <label
                className="relative flex cursor-pointer items-center rounded-full select-none"
                htmlFor={id}
            >
                <input
                    id={id}
                    name={name}
                    type="radio"
                    className="peer appearance-none hidden"
                />

                <span className="relative flex items-center justify-center h-6 w-6 rounded-full border border-gray-300 dark:border-gray-700 peer-checked:!border-primary transition-all ease-linear text-transparent peer-checked:text-primary">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        className="h-3.5 w-3.5"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                    >
                        <circle data-name="ellipse" cx={8} cy={8} r={8} />
                    </svg>
                </span>
                <span
                    className="pl-1.5 text-text dark:text-gray-200"
                >
                    {label}
                </span>
            </label>
        </>
    )

}
