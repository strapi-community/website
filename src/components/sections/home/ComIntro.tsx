import AppContainer from "@/components/atoms/AppContainer";
import BtnLink from "@/components/atoms/BtnLink";
import Paragraph from "@/components/atoms/Paragraph";
import Title from "@/components/atoms/Title";
import ComStat from "@/components/cards/ComStat";
import Image from "next/image";
import {getStrapiURL} from "@/lib/api";

export default function ComIntro({data}) {

    return (
        <section className="relative pt-20">
            <div className="absolute top-0 right-0">
                <div className="bg-gradient-to-tr from-primary w-40 sm:w-48 lg:w-52 aspect-square clipTriangleTopRight"></div>
            </div>
            <AppContainer className="pt-14 relative">
                <div className="grid md:items-center md:grid-cols-2 gap-12 md:gap-8 xl:gap-12">
                    <div className="flex md:h-full ">
                        <div className="w-full flex items-center md:h-full relative">
                            <div className="w-[44%] h-5/6 absolute top-1/2 -translate-y-1/2 right-0">
                                <Image
                                    src={getStrapiURL(data.image1.data.attributes.url)}
                                    alt="Illustratuin about"
                                    width={1500}
                                    height={800}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="relative w-4/5 lg:w-3/5 h-full rounded-3xl bg-white shadow-lg shadow-gray-200/60 border-4 border-gray-100/40 dark:bg-darkBg dark:shadow-darkBg dark:border-darkCard">
                                <Image
                                    src={getStrapiURL(data.image1.data.attributes.url)}
                                    alt="Illustratuin about"
                                    width={1500}
                                    height={750}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <Title>
                            {data.title}
                        </Title>
                        <Paragraph className="pt-8 line-clamp-4">
                            {data.description}
                        </Paragraph>
                        <div className="grid grid-cols-3 gap-4 max-w-2xl pt-10">
                            {data.stats !== undefined && data.stats.map((stat, i: number) => {
                                return <ComStat {...stat} key={i} />
                            })}
                        </div>
                        <div className="pt-6 flex">
                            {  data.button !== undefined && <BtnLink {...data.button}  />}
                        </div>
                    </div>
                </div>
            </AppContainer>
        </section>
    )
}
