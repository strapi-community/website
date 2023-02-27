"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { clsx } from "clsx";
import styles from "./Header.module.scss";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Bounty", href: "/bounties" },
  { label: "Showcases", href: "/showcases" },
];

export const Header = () => {
  const [animateHeader, setAnimateHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 640
  );

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 0) setAnimateHeader(true);
      else setAnimateHeader(false);
    };
    window.addEventListener("scroll", scrollListener);

    const resizeListener = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (showMenu && isMobile) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [showMenu, isMobile]);

  const handleMenuClick = (status: boolean) => () => setShowMenu(status);

  return (
    <header
      className={clsx(
        styles.header,
        "transition ease-in-out duration-200",
        (animateHeader || showMenu) && "bg-white shadow-md"
      )}
    >
      <div className={styles.nav}>
        <Link href="/" onClick={handleMenuClick(false)}>
          <Image
            src="/logo-light-background.svg"
            alt="Strapi community logo"
            width={876}
            height={212}
            className={styles.logo}
          />
        </Link>

        <nav className="hidden sm:block">
          <ul className={styles.links}>
            {LINKS.map(({ label, href }) => (
              <li className={styles.link + " sc-link"} key={label}>
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <button className={styles.menu} onClick={handleMenuClick(!showMenu)}>
          {!showMenu ? <BiMenu size={24} /> : <BiX size={24} />}
        </button>
      </div>

      {showMenu && (
        <nav className="sm:hidden w-full mt-4">
          <ul className={styles.links}>
            {LINKS.map(({ label, href }) => (
              <li className={styles.link} key={label}>
                <Link href={href} onClick={handleMenuClick(false)}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};
