import Image from "next/image";
import Link from "next/link";


import AppContainer from "./atoms/AppContainer";
import Paragraph from "./atoms/Paragraph";
import FooterNavBloc from "./elements/FooterNavBloc";

import IconLink from "@/components/atoms/IconLink";
import { FacebookIco, TwitterIcon, GithubIcon, YoutubeIcon, DiscordIcon } from "@/components/icons/social";


const footerNavEl = [
  {
    title: "About",
    items: [
      {
        text: "About Us",
        href: "/about-community",
        externallink: false
      },
      {
        text: "Articles",
        href: "/articles",
        externallink: false
      },
      {
        text: "Bounty",
        href: "/",
        externallink: false
      },
      {
        text: "Showcases",
        href: "#",
        externallink: false
      },
    ]
  },

  {
    title: "About",
    items: [
      {
        text: "Contact",
        href: "#",
        externallink: false
      },
      {
        text: "F.A.Q",
        href: "/faq",
        externallink: false
      },
      {
        text: "Submit Plugin",
        href: "#",
        externallink: false
      },
      {
        text: "Link1",
        href: "#",
        externallink: false
      },
    ]
  },
  {
    title: "About",
    items: [
      {
        text: "Terms & Services",
        href: "#",
        externallink: false
      },
      {
        text: "Privacy Policy",
        href: "#",
        externallink: false
      },
      {
        text: "Link1",
        href: "#",
        externallink: false
      },
    ]
  }
]

export default function AppFooter() {
  return (
    <footer className="pt-20">
      <div className="relative overflow-auto pb-10  pt-10 sm:pt-12 lg:pt-16 bg-[#f6fafe] dark:bg-darkCard border-t-2 border-gray-200/50 dark:border-t-gray-700/50">
        <AppContainer>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 gap-y-10">
            <div className="col-span-2 sm:col-span-1 lg:col-span-2">
              <div className="w-full max-w-lg">
                <Link href={"/"}>
                  <Image width={80} height={40} alt="Strapi" src="/Strapi-logo.svg" className="w-auto h-8 hidden xs:flex dark:hidden" />
                  <Image width={80} height={40} alt="Strapi" src="/Strapi-logo-light.svg" className="w-auto h-8 hidden xs:dark:flex" />
                  <Image width={80} height={40} alt="Strapi" src="/Strapi-mono.svg" className="w-auto h-8 xs:hidden" />
                </Link>
                <Paragraph className="pt-6 text-sm md:!text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem iste, aut perspiciatis saepe fuga
                </Paragraph>

                <div className="flex flex-wrap gap-2 pt-12  text-text dark:text-gray-300">
                  <IconLink href="" title="Discord" icon={ <DiscordIcon/> }/>
                  <IconLink href="" title="Faceboock" icon={ <FacebookIco/> }/>
                  <IconLink href="" title="Github" icon={ <GithubIcon/> }/>
                  <IconLink href="" title="Twitter" icon={ <TwitterIcon/> }/>
                </div>
              </div>
            </div>

            {footerNavEl.map((el, index)=>(
              <FooterNavBloc key={index} {...el}/>
            ))
            }
          </div>
        </AppContainer>
      </div>
      <div className="py-2 bg-gray-100 dark:bg-darkBg">
        <AppContainer>
          <Paragraph className="text-center mx-auto max-w-3xl text-sm text-title dark:text-white">
          © {new Date().getFullYear()}, Strapi-Community. All rights reserved. Designed By <a href={"#"} rel="noreferrer" target="_blank" className="text-purple-600">John Kat-Mj</a>
          </Paragraph>
        </AppContainer>
      </div>
    </footer>
  )
}
