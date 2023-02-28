import React from "react";
import { Link } from "react-router-dom";
import StrapiCommunityLogo from "./common/StrapiCommunityLogo";
import JoinIcons from "./common/JoinIcons";

export default function Footer() {
  return (
    <footer className="px-6 md:px-14 lg:px-32 py-10 bg-neutral-100">
      <div className="flex flex-wrap justify-between items-center">
        <div className="w-full md:w-96 text-center md:text-left">
          <StrapiCommunityLogo />
          <p className="my-6 text-neutral-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi repellendus
            nesciunt iusto.
          </p>
        </div>

        <div className="w-full sm:w-auto flex flex-col items-center sm:items-start my-4">
          <p className="mb-4 text-neutral-700">Join us on</p>
          <JoinIcons />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex justify-center space-x-5 text-darkPrimary">
          <Link to="/">Home</Link>
          <Link to="/showcase">Showcase</Link>
          <Link to="/bounty">Bounty</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="text-center mt-4">
          <p className="text-neutral-600 text-sm">
            © 2023, Strapi Community. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
