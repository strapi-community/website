import React from "react";
import { Link } from "react-router-dom";
import StrapiLogo from "../../assets/icons/starpi_logo.svg";

export default function StrapiCommunityLogo() {
  return (
    <div>
      <Link to="/" className="inline-block">
        <img src={StrapiLogo} alt="Strapi Logo" className="w-24 mr-1 inline-block" />
        <span className="text-xs bg-primary-600 text-neutral-0 py-1 px-2 rounded">
          Community
        </span>
        <span className="sr-only">Strapi Community</span>
      </Link>
    </div>
  );
}
