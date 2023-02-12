import Link from "next/link";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import {
  BsDiscord,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitch,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import "../styles/main.scss";
import styles from "./layout.module.scss";

const poppins = Poppins({ weight: ["400", "600", "700"], subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header className={styles.header}>
          <div className={styles.nav}>
            <Link href="/">
              <Image
                src="/logo-light-background.svg"
                alt="Strapi community logo"
                width={876}
                height={212}
                className={styles.logo}
              />
            </Link>
            <nav>
              <ul className={styles.links}>
                <li className={styles.link + " scw-link"}>
                  <Link href="/about">About</Link>
                </li>
                <li className={styles.link + " scw-link"}>
                  <Link href="/bounty">Bounty</Link>
                </li>
                <li className={styles.link + " scw-link"}>
                  <Link href="/showcases">Showcases</Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {children}

        <footer>
          <div className={styles.footerHead}>
            <Image
              src="/footer-img.svg"
              alt="Footer decoration"
              width={298}
              height={300}
              className={styles.footerDecoration}
            />
            <h2 className="scw-heading--two text-center mb-6">
              Help us make Strapi better
            </h2>
            <button className="scw__btn">Join now</button>
          </div>

          <div className="container grid grid-cols-12 gap-6 mb-24">
            <div className="col-span-5">
              <Image
                src="/logo-light-background.svg"
                alt="Strapi community logo"
                width={876}
                height={212}
                className={styles.logo + " mb-20"}
              />

              <p className="mb-6">
                Subscribe to our newsletter to stay in touch with our latest
                updates.
              </p>

              <form className="flex gap-4">
                <input
                  type="email"
                  placeholder="What's your email?"
                  className="scw__input flex-1"
                />
                <button type="submit" className="scw__btn--outline">
                  Subscribe
                </button>
              </form>
            </div>

            <div className="col-start-10 col-span-3">
              <ul className="flex flex-col gap-2 mb-14">
                <li className={styles.footerLink}>
                  <Link href="/about" className={styles.footerLinkTypography}>
                    About Us
                  </Link>
                </li>
                <li className={styles.footerLink}>
                  <Link href="/bounty" className={styles.footerLinkTypography}>
                    Bounty
                  </Link>
                </li>
                <li className={styles.footerLink}>
                  <Link href="#" className={styles.footerLinkTypography}>
                    Community Guidelines
                  </Link>
                </li>
                <li className={styles.footerLink}>
                  <Link href="#" className={styles.footerLinkTypography}>
                    Contact Us
                  </Link>
                </li>
              </ul>

              <ul className="flex flex-col gap-2">
                <li className={styles.footerLink}>
                  <Link href="#" className={styles.footerLinkTypography}>
                    Terms & Services
                  </Link>
                </li>
                <li className={styles.footerLink}>
                  <Link href="#" className={styles.footerLinkTypography}>
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="container grid grid-cols-12 gap-6 items-center mb-10">
            <p className="col-span-4">© 2023, Strapi. All rights reserved</p>

            <div className="col-span-4 flex gap-2 justify-center">
              <button className="scw__btn--circular">
                <BsGithub size={20} color="#666687" />
              </button>
              <button className="scw__btn--circular">
                <BsDiscord size={20} color="#666687" />
              </button>
              <button className="scw__btn--circular">
                <BsTwitch size={20} color="#666687" />
              </button>
              <button className="scw__btn--circular">
                <BsTwitter size={20} color="#666687" />
              </button>
              <button className="scw__btn--circular">
                <BsFacebook size={20} color="#666687" />
              </button>
              <button className="scw__btn--circular">
                <BsLinkedin size={20} color="#666687" />
              </button>
              <button className="scw__btn--circular">
                <BsInstagram size={20} color="#666687" />
              </button>
              <button className="scw__btn--circular">
                <BsYoutube size={20} color="#666687" />
              </button>
            </div>

            <p className="col-start-10 col-span-3">Designed by Ottr</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
