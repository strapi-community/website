"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
import { TextInput } from "@/components";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const [email, setEmail] = useState("");
  return (
    <footer>
      <div className={styles.head}>
        <Image
          src="/footer-img.svg"
          alt="Footer decoration"
          width={298}
          height={300}
          className={styles.decoration}
        />
        <h2 className="sc-heading--two text-center mb-6">
          Help us make Strapi better
        </h2>
        <button className="sc__btn">Join now</button>
      </div>

      <div className="container">
        <Image
          src="/logo-light-background.svg"
          alt="Strapi community logo"
          width={876}
          height={212}
          className={styles.logo}
        />
      </div>

      <div className="container sc-grid mb-12 sm:mb-24">
        <div className="col-span-12 sm:col-span-6 mb-10 sm:mb-0">
          <h2 className="sc-heading--three mb-10 hidden sm:block">
            Join our email list to stay up to date on features and releases.
          </h2>

          <p className="sm:hidden mb-6">
            Subscribe to our newsletter to stay in touch with our latest
          </p>

          <form className="flex flex-col sm:flex-row gap-4 mb-4 sm:mr-7">
            <TextInput
              type="email"
              placeholder="What's your email?"
              value={email}
              onChange={setEmail}
              containerClassName="flex-1"
            />

            <button type="submit" className="sc__btn--outline">
              Subscribe
            </button>
          </form>

          <p className={styles.helperText}>
            By subscribing you agree to with our privacy policy and provide
            consent to receive updates from our company.
          </p>
        </div>

        <div className="col-span-12 sm:col-start-11 sm:col-span-2 flex justify-between sm:flex-col">
          <ul className="flex flex-col gap-4 sm:gap-2 mb-14 sm:mb-14">
            <li className={styles.link}>
              <Link href="/about" className={styles.linkTypography}>
                About Us
              </Link>
            </li>
            <li className={styles.link}>
              <Link href="/bounties" className={styles.linkTypography}>
                Bounty
              </Link>
            </li>
            <li className={styles.link}>
              <Link href="#" className={styles.linkTypography}>
                Contact Us
              </Link>
            </li>
          </ul>

          <ul className="flex flex-col gap-4 sm:gap-2">
            <li className={styles.linkSmall}>
              <Link href="#" className={styles.linkTypography}>
                Terms & Services
              </Link>
            </li>
            <li className={styles.linkSmall}>
              <Link href="#" className={styles.linkTypography}>
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-12 sm:col-span-4 flex flex-wrap justify-center sm:justify-start gap-5 sm:gap-2">
          <button className="sc__btn--circular">
            <BsGithub size={20} color="#666687" />
          </button>
          <button className="sc__btn--circular">
            <BsDiscord size={20} color="#666687" />
          </button>
          <button className="sc__btn--circular">
            <BsTwitch size={20} color="#666687" />
          </button>
          <button className="sc__btn--circular">
            <BsTwitter size={20} color="#666687" />
          </button>
          <button className="sc__btn--circular">
            <BsFacebook size={20} color="#666687" />
          </button>
          <button className="sc__btn--circular">
            <BsLinkedin size={20} color="#666687" />
          </button>
          <button className="sc__btn--circular">
            <BsInstagram size={20} color="#666687" />
          </button>
          <button className="sc__btn--circular">
            <BsYoutube size={20} color="#666687" />
          </button>
        </div>
      </div>

      <div className={styles.footer}>
        <p className="col-span-12 text-center sm:text-start sm:col-span-4">
          © 2023, Strapi. All rights reserved
        </p>

        <p className="col-span-12 text-center sm:text-start sm:col-start-11 sm:col-span-2">
          Designed by Ottr
        </p>
      </div>
    </footer>
  );
};
