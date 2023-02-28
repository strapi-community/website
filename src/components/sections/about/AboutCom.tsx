import AppContainer from "@/components/atoms/AppContainer";
import BtnLink from "@/components/atoms/BtnLink";
import Paragraph from "@/components/atoms/Paragraph";
import Title from "@/components/atoms/Title";
import Image from "next/image";

export default function AboutCom() {
    return (
        <section className="relative pb-24">
            <div className="absolute bottom-0 right-0">
                <div className="bg-gradient-to-tr from-primary w-40 sm:w-48 lg:w-52 aspect-square clipTriangleBottomRight"></div>
            </div>
            <AppContainer className="pt-24 relative">
                <div className="grid md:items-center md:grid-cols-2 gap-12 md:gap-8 xl:gap-12">
                    <div className="flex md:h-full ">
                        <div className="w-full flex items-center md:h-full relative">
                            <div className="w-[44%] h-5/6 absolute top-1/2 -translate-y-1/2 right-0">
                                <Image
                                    src="/images/working-from-home.webp"
                                    alt="Illustratuin about"
                                    width={1500}
                                    height={800}
                                    className="w-full h-full object-cover rounded-2xl"
                                />
                            </div>
                            <div className="relative w-4/5 lg:w-[66%] md:absolute md:h-full rounded-3xl bg-[#f6fafe] shadow-lg shadow-gray-200/60 border-4 border-gray-100/40 dark:bg-darkBg dark:shadow-darkBg dark:border-darkCard">
                                <Image
                                    src="/images/remote-working.webp"
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
                        Open-source gives power to the people.
                        </Title>
                        <Paragraph className="pt-6  line-clamp-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, provident. Facilis, alias nulla architecto similique pariatur vel, natus voluptates a adipisci rem, obcaecati totam modi praesentium asperiores fugit voluptatibus dignissimos!
                        </Paragraph>
                        <Paragraph className="pt-4  line-clamp-4">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, provident. Facilis, alias nulla architecto similique pariatur vel, natus voluptates a adipisci rem, obcaecati totam modi praesentium asperiores fugit voluptatibus dignissimos!
                        </Paragraph>
                        <div className="pt-8 flex">
                            <BtnLink text="Check The Roadmap" href="#" variant="secondary"/>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </section>
    )
}
