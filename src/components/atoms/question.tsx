import { useRef } from 'react'


export default function Question(
    { title, description, isOpen, handleEv }:
        { title: string, description: string, isOpen: boolean, handleEv?: () => void }
) {
    const descRef = useRef<HTMLDivElement>(null)

    return (
        <div className="py-3">
            <button onClick={handleEv} className="flex w-full outline-none justify-between items-center gap-3 cursor-pointer pb-4">
                <h2 className='text-lg text-title1 font-semibold dark:text-white'>
                    {title}
                </h2>
                <div className="min-w-max flex peer-checked:bg-red-400">
                    <span className={`relative w-3 h-3 after:absolute after:h-0.5 after:rounded-full after:transition after:ease-linear after:inset-x-0 after:top-1/2 after:-translate-y-1/2 after:bg-title dark:after:bg-white before:absolute before:inset-y-0 before:left-1/2 before:-translate-x-1/2 before:bg-title dark:before:bg-white before:w-0.5 before:rounded-full before:transition-all before:ease-linear
                    ${isOpen ? " before:rotate-90 after:rotate-180" : " before:rotate-0"}`}></span>
                </div>
            </button>
            <div ref={descRef} className={
                `overflow-hidden transition-all ease-linear h-0`
            } style={{
                height: isOpen === false
                    ? (
                        "0px"
                    ) : (
                        `${descRef.current?.scrollHeight}px`
                    )
            }}>
                <p className='text-gray-500 dark:text-gray-300'>
                    {description}
                </p>
            </div>
        </div>
    )
}
