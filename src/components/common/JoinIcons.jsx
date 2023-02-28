import React from "react";
import GithubLogo from "../../assets/icons/Bgithub.svg";
import DiscordLogo from "../../assets/icons/Bdiscord.svg";
import TwitchLogo from "../../assets/icons/Btwitch.svg";
import YoutubLogo from "../../assets/icons/Byoutube.svg";
import FacebookLogo from "../../assets/icons/Bfacebook.svg";
import TwitterLogo from "../../assets/icons/Btwitter.svg";

export default function JoinIcons() {
  return (
    <div className="flex flex-row flex-wrap items-center justify-center space-x-6">
      <a href="https://github.com/strapi-community" target={"_blank"}>
        <img src={GithubLogo} alt="Github" className="h-6" />
      </a>
      <a href="https://discord.strapi.io" target={"_blank"}>
        <img src={DiscordLogo} alt="Discord" className="h-6" />
      </a>
      <a href="https://www.twitch.tv/strapijs" target={"_blank"}>
        <img src={TwitchLogo} alt="Twitch" className="h-6" />
      </a>
      <a href="https://www.youtube.com/strapi" target={"_blank"}>
        <img src={YoutubLogo} alt="Youtub" className="h-6" />
      </a>
      <a href="https://twitter.com/strapijs" target={"_blank"}>
        <img src={TwitterLogo} alt="Twitter" className="h-6" />
      </a>
      <a href="https://www.facebook.com/strapijs/" target={"_blank"}>
        <img src={FacebookLogo} alt="Facebook" className="h-6" />
      </a>
    </div>
  );
}
