import AppContainer from "@/components/atoms/AppContainer";
import BtnLink from "@/components/atoms/BtnLink";
import IconLink from "@/components/atoms/IconLink";
import { FacebookIco, GithubIcon, TwitterIcon, YoutubeIcon } from "@/components/icons/social";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <section className="relative pt-32 pb-14 xl:pb-20 w-full">
          <div className="absolute top-20 left-0">
            <div className="bg-gradient-to-tr from-primary w-40 sm:w-48 lg:w-52 aspect-square clipTriangleTopLeft"></div>
          </div>
          <div className="absolute bottom-0 right-0">
            <div className="bg-gradient-to-tr from-primary w-40 sm:w-48 lg:w-52 aspect-square clipTriangleBottomRight"></div>
          </div>
        <AppContainer className="relative">
          <div className="absolute top-0 w-full left-0">
            <div className="w-full max-w-7xl bg-gradient-to-tr from-primary h-20 blur-3xl"></div>
          </div>
          <div className="lg:pt-5 xl:pt-10 text-center mx-auto max-w-2xl relative">
            <div>
              <div className="flex pb-6 justify-center">
                <Link href={"#"} className="px-2 py-0.5 rounded bg-gray-100 dark:bg-darkCard text-gray-600 dark:text-white">
                  Strapi Furom lunched
                </Link>
              </div>
              <h1 className="font-bold leading-snug text-title1 dark:text-white text-4xl sm:text-5xl md:text-6xl xl:text-7xl">
                Made by developers, for <span className="text-transparent bg-clip-text bg-gradient-to-tr from-primary to-purple-600">developers.</span>
              </h1>
            </div>
            <div className="flex flex-col sm:flex-row pt-10 w-full sm:w-max mx-auto justify-center gap-4">
              <BtnLink text="Submit my project" href="#" variant="primary" type="fill" className="sm:w-max w-full flex justify-center" />
              <BtnLink text="Explore Github" href="https://github.com/strapi-community/" variant="secondary" type="fill" className="sm:w-max w-full flex justify-center" externalLink/>
            </div>
            <div className="pt-6 flex items-center gap-4 flex-col mx-auto">

              <p className="text-text dark:text-gray-200">
                Let{"'"}s connect on our social media
              </p>
              <div className="flex justify-center items-center gap-2 text-text dark:text-gray-300">
                <IconLink href="" title="Faceboock" icon={<FacebookIco />} />
                <IconLink href="https://github.com/strapi-community/" title="Github" icon={<GithubIcon />} />
                <IconLink href="" title="Twitter" icon={<TwitterIcon />} />
                <IconLink href="" title="Youtube" icon={<YoutubeIcon />} />
              </div>
            </div>
          </div>
        </AppContainer>
      </section>
    </>
  )
}
