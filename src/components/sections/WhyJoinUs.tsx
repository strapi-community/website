import Image from "next/image";
import AppContainer from "../atoms/AppContainer";
import BtnLink from "../atoms/BtnLink";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";
import WhyJoin from "../cards/WhyJoin";

export default function WhyJoinUs() {
    return (
        <section className="relative mt-16">
            <div className="absolute top-0 left-0">
                <div className="bg-gradient-to-tr from-primary w-40 sm:w-40 lg:w-44 aspect-square clipTriangleTopLeft"></div>
            </div>
            <AppContainer className="pt-24 lg:pt-32 relative">
                <div className="grid md:items-center md:grid-cols-2 gap-12 md:gap-8 xl:gap-12">
                    <div className="">
                        <Title>
                            Why you should Join the community
                        </Title>
                        <Paragraph className="pt-8 ">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi, provident.
                        </Paragraph>
                        <div className="mt-6 space-y-6 p-5 rounded-lg bg-[#f6fafe] dark:bg-darkCard border lg:border-2 border-gray-200/50 dark:border-gray-700">
                            <WhyJoin
                                icoUrl="/svg/grow.svg"
                                title="Grow your skills"
                                description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                            />

                            <WhyJoin
                                icoUrl="/svg/save.svg"
                                title="Share Your Passion"
                                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                            />

                            <WhyJoin
                                icoUrl="/svg/tag.svg"
                                title="An other reason"
                                description="Lorem, ipsum dolor sit amet consectetur adipisicing elit."
                            />
                        </div>
                        <div className="pt-8 flex">
                            <BtnLink text="Join on discord" href="/about-community" variant="primary" type="fill" />
                        </div>
                    </div>
                    <div className="flex md:h-full py-10 md:py-0">
                        <div className="w-full flex justify-center relative md:h-full">

                            
                            <div className="relative w-4/5 lg:w-3/4 md:h-full rounded-3xl">
                                <span className="absolute w-full h-full -left-4 -top-4 skew-y-6 bg-gradient-to-br from-purple-600 rounded-3xl"></span>
                                <span className="absolute w-full h-full left-4 top-4 skew-y-6 bg-primary/30 rounded-3xl"></span>
                                <Image
                                    src="/images/community-img1.webp"
                                    alt="Illustratuin about"
                                    width={1500}
                                    height={750}
                                    className="relative w-full skew-y-6 h-auto md:h-full object-cover rounded-2xl bg-white shadow-lg shadow-gray-200/60 border-4 border-gray-100/40"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </section>
    )
}
