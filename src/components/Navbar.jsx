import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import StrapiCommunityLogo from "./common/StrapiCommunityLogo";
import openMenu from "../assets/icons/menu.svg";
import closeMenu from "../assets/icons/close.svg";
import JoinIcons from "./common/JoinIcons";
import GithubLogo from "../assets/icons/Bgithub.svg";
import DiscordLogo from "../assets/icons/Bdiscord.svg";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Showcase", href: "/showcase" },
  { name: "Bounty", href: "/bounty" },
  { name: "About", href: "about" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-10">
      <nav className="flex justify-between items-center px-6 md:px-14 lg:px-32 h-16 bg-neutral-0/90 backdrop-blur-sm">
        <StrapiCommunityLogo />

        <div className="hidden md:flex">
          <ul className="flex flex-row space-x-6">
            {navigation.map((item) => (
              <li key={item.name} className="text-darkPrimary font-medium">
                <NavLink to={item.href}>{item.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex">
          <div className="md:hidden">
            <button
              type="button"
              className="flex items-center justify-center -m-2.5 rounded p-2.5"
              onClick={() => {
                setMobileMenuOpen(mobileMenuOpen === false ? true : false);
              }}
            >
              <span className="sr-only">
                {mobileMenuOpen === false ? "open menu" : "close menu"}
              </span>
              <img
                src={mobileMenuOpen === false ? openMenu : closeMenu}
                alt="menu"
                className="w-6 h-6"
              />
            </button>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <a
              href="https://discord.strapi.io"
              target={"_blank"}
              className="mr-4 p-1 rounded bg-neutral-100"
            >
              <img src={DiscordLogo} alt="Github" className="h-5" />
            </a>
            <a
              href="https://github.com/strapi-community"
              target={"_blank"}
              className="p-1 rounded bg-neutral-100"
            >
              <img src={GithubLogo} alt="Github" className="h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/*---------- Mobile menu -----------*/}
      <div
        className={`md:hidden bg-neutral-0/90 backdrop-blur-md transition-all duration-200 overflow-hidden ${
          mobileMenuOpen === false ? "h-0 opacity-0" : "h-screen opacity-1"
        }`}
      >
        <nav className="py-14 z-50">
          <ul className="flex flex-col text-center space-y-6">
            {navigation.map((item) => (
              <li key={item.name} className="text-darkPrimary font-medium">
                <NavLink
                  to={item.href}
                  onClick={() => {
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="text-center mt-14 ">
            <h2 className="mb-4 text-neutral-600">Connect</h2>
            <JoinIcons />
          </div>
        </nav>
      </div>
    </header>
  );
}
