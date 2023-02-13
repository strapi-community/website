"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import styles from "./Header.module.scss";

export const Header = () => {
  const [animateHeader, setAnimateHeader] = useState(false);

  useEffect(() => {
    const listener = () => {
      if (window.scrollY > 0) setAnimateHeader(true);
      else setAnimateHeader(false);
    };

    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  return (
    <header
      className={clsx(
        styles.header,
        "transition ease-in-out duration-200",
        animateHeader && "bg-white shadow-md"
      )}
    >
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
            <li className={styles.link + " sc-link"}>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.link + " sc-link"}>
              <Link href="/bounties">Bounty</Link>
            </li>
            <li className={styles.link + " sc-link"}>
              <Link href="/showcases">Showcases</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
