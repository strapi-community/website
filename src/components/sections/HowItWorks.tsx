import AppContainer from "../atoms/AppContainer";
import Paragraph from "../atoms/Paragraph";
import Title from "../atoms/Title";
import HowItWorkCard from "../cards/HowItWorkCard";
import CtaBounty from "./CtaBounty";

export default function HowItWorks() {
    return (
        <section className="relative pb-12">
            <div className="absolute top-0 left-0">
                <div className="bg-gradient-to-tr from-primary w-40 sm:w-48 lg:w-52 aspect-square clipTriangleTopLeft"></div>
            </div>
            <AppContainer className=" pt-32 relative">
                <div className="text-center mx-auto max-w-2xl space-y-6">
                    <Title>
                        How it works
                    </Title>
                    <Paragraph>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum expedita porro assumenda, ne
                    </Paragraph>
                </div>
                <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 max-w-xl lg:max-w-none mx-auto lg:mx-0 pt-12 sm:pt-16 md:pt-20">
                    <HowItWorkCard
                        imgUrl=""
                        headtitle="Step 1"
                        title="Step 1 title"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum expedita porro assumenda,"
                    />

                    <HowItWorkCard
                        imgUrl=""
                        headtitle="Step 2"
                        title="Step 2 title"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum expedita porro assumenda,"
                    />
                    
                    <HowItWorkCard
                        imgUrl=""
                        headtitle="Step 3"
                        title="Step 3 title"
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum expedita porro assumenda,"
                    />
                </div>
            </AppContainer>

            <div className="pt-32">
                <CtaBounty />
            </div>
        </section>
    )
}
