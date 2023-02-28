import AppContainer from "@/components/atoms/AppContainer";
import BtnLink from "@/components/atoms/BtnLink";
import Title from "@/components/atoms/Title";
import Blog from "@/components/cards/Blog";
import Image from "next/image";

export default function LatestNews() {
    return (
        <AppContainer className="pt-24 md:pt-32 lg:pt-40">
            <div className="max-w-lg text-center mx-auto">
                <Title>
                    Latest news from our Blog
                </Title>
            </div>
            <div className=" pt-12 sm:pt-16 md:pt-20">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    <Blog href="#" imgUrl="/images/working-from-home.webp" category="front-end" publishedAt="12-01-2023" title="Best plugins for quick development" description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt repellendus voluptates distinctio"/>
                    <Blog href="#" imgUrl="/images/working-from-home.webp" category="design" publishedAt="05-02-2023" title="Best plugins for quick development" description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt repellendus voluptates distinctio"/>
                    <Blog href="#" imgUrl="/images/working-from-home.webp" category="front-end" publishedAt="02-02-2023" title="Best plugins for quick development" description=" Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt repellendus voluptates distinctio"/>
                </div>
                <div className="pt-12 flex justify-center">
                    <BtnLink href="/articles" variant="secondary" text="Discover more"/>
                </div>
            </div>
        </AppContainer>
    )
}
