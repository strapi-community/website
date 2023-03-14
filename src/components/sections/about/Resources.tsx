import AppContainer from "@/components/atoms/AppContainer";
import Paragraph from "@/components/atoms/Paragraph";
import Title from "@/components/atoms/Title";
import Resource from "@/components/cards/Resource";
import { DiscordIcon, GithubIcon } from "@/components/icons/social";

export default function Resources() {
  return (
    <section className="relative pt-12 sm:pt-20 md:pt-32 pb-10">
      <div className="absolute top-0 left-0">
        <div className="bg-gradient-to-tr from-primary w-40 sm:w-48 lg:w-52 aspect-square clipTriangleTopLeft"></div>
      </div>
      <AppContainer className="pt-14 lg:pt-2 relative">
        <div className="text-center mx-auto max-w-2xl space-y-6">
          <Title>
            Resources and support
          </Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum expedita porro assumenda, ne
          </Paragraph>
        </div>
        <div className="grid sm:grid-cols-2 md:gap-8 gap-6 lg:gap-12 pt-12 sm:pt-16 md:pt-20">

          <Resource
            title="Discord"
            subtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolorum odio facilis labore. Illum architecto doloribus quas nostrum sunt. Porro fuga fugit,."
            href=""
            icon={<DiscordIcon className="w-8 h-8"/>}
            externalressource
          />

          <Resource
            title="Showcases"
            subtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolorum odio facilis labore. Illum architecto doloribus quas nostrum sunt. Porro fuga fugit,."
            href="/showcases"
            icon={<DiscordIcon className="w-8 h-8"/>}
          />

          <Resource
            title="Github"
            subtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolorum odio facilis labore. Illum architecto doloribus quas nostrum sunt. Porro fuga fugit,."
            href=""
            icon={<GithubIcon className="w-8 h-8"/>}
            externalressource
          />

          <Resource
            title="Strapi Forum"
            subtext="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique dolorum odio facilis labore. Illum architecto doloribus quas nostrum sunt. Porro fuga fugit,."
            href=""
            icon={<span></span>}
            externalressource
          />

        </div>
      </AppContainer>
    </section>
  )
}
