export default function ComStat(
    { text, stat }: { text: string, stat: string }
) {
    return (
        <div className="text-center p-3 rounded-md bg-white shadow-lg shadow-gray-200/60 border-2 border-gray-100/50 dark:shadow-transparent dark:border-gray-700 dark:bg-darkCard">
            <span className="text-title dark:text-white text-xl md:text-2xl lg:text-3xl font-bold">{stat}</span>
            <p className="text-text dark:text-gray-200 text-sm sm:text-base">{text}</p>
        </div>
    )
}
