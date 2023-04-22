import Image from "next/image";
import BtnLink from "../atoms/BtnLink";
import Paragraph from "../atoms/Paragraph";
import {getStrapiURL} from "@/utils/api";

export default function CtaBounty({data}) {
    return (
        <div className="pt-32">
            <div className="relative mx-auto max-w-5xl w-full">
                <div className="absolute top-0 inset-x-0 h-full bg-gradient-to-bl from-[#f6fafe] dark:from-gray-800"></div>
                <div className="relative gap-12 py-20 px-8 md:px-10 lg:px-14">
                    <div className="absolute right-1 bottom-1 h-2/5 md: md:h-auto md:bottom-2 md:inset-y-2 md:w-2/5 w-5/12">
                        <Image
                            src={getStrapiURL(data.image.data.attributes.url)}
                            alt="Illustratuin about"
                            width={1500}
                            height={750}
                            className="w-full h-full object-cover clipTriangleBottomRight md:clipTriangleTopRight"
                        />
                        <span className="w-16 aspect-square sm:w-20 md:w-28 bg-primary clipTriangleBottomRight md:clipTriangleTopRight absolute top-1/2 -translate-y-1/2 right-1 md:right-40 lg:right-44"></span>
                    </div>
                    
                    <div className="relative w-full max-w-xl md:w-3/5">
                        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-title1 dark:text-white">
                            {data.title}
                        </h1>
                        <Paragraph className="pt-8">
                            {data.description}
                        </Paragraph>

                        <div className="pt-16">
                            {  data.button !== undefined && <BtnLink {...data.button}  />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
