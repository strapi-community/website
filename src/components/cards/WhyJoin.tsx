import Image from "next/image";

export default function WhyJoin(
    {icoUrl, title, description}:{icoUrl:string, title:string, description:string}
) {
  return (
    <div className="flex gap-4">
        <div className="flex min-w-max">
            <Image src={icoUrl} height={40} width={40} alt="Icon" className="w-10 h-10"/>
        </div>
        <div className="flex flex-col">
            <h2  className="text-title dark:text-gray-100 font-semibold text-xl">
                {title}
            </h2>
            <p className="text-text dark:text-gray-300">
                {description}
            </p>
        </div>
    </div>
  )
}
