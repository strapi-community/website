import AppContainer from "@/components/atoms/AppContainer";
import Paragraph from "@/components/atoms/Paragraph";
import Title from "@/components/atoms/Title";
import Meet from "@/components/cards/Meet";

export default function MeetCommunity() {
  return (
    <section className="relative pt-12 sm:pt-20 md:pt-32">
      <div className="absolute top-20 left-0">
        <div className="bg-gradient-to-tr from-primary w-40 sm:w-48 lg:w-52 aspect-square clipTriangleTopLeft"></div>
      </div>
      <AppContainer className="pt-14 pb-6 relative">
        <div className="text-center mx-auto max-w-2xl space-y-6">
          <Title>
            Meet the Strapi community
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum expedita porro assumenda, ne
          </Paragraph>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 md:gap-9 lg:gap-12  pt-12 sm:pt-16 md:pt-20">
          <Meet
            title="Strapi Meetups"
            subtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolorum odio facilis labore. Illum architecto doloribus quas nostrum sunt. Porro fuga fugit,."
            href="#"
            illustration={"/illustrations/meetUp.svg"}
          />
          <Meet
            title="Strapi Online Meetups"
            subtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolorum odio facilis labore. Illum architecto doloribus quas nostrum sunt. Porro fuga fugit,."
            href="#"
            illustration={"illustrations/onlineMeet.svg"}
          />
        </div>
      </AppContainer>
    </section>
  )
}
