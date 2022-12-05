import React, { Component } from "react";
import SocialMedia from "../socialMedia";

class SocialContent extends Component {
  state = {
    socials: [
      { id: 0, icon: "", name: "github", url: "/", display: "" },
      { id: 1, icon: "", name: "instagram", url: "/", display: "" },
      { id: 2, icon: "", name: "twitter", url: "/", display: "" },
      { id: 3, icon: "", name: "steam", url: "/", display: "" },
      { id: 4, icon: "", name: "twitch", url: "/", display: "" },
      { id: 5, icon: "", name: "discord", url: "/", display: "" },
      { id: 6, icon: "", name: "irc", url: "/", display: "" },
    ],
  };
  render() {
    return (
      <div className="h-fit min-h-screen w-full flex justify-center bg-slate-400">
        <div className="flex flex-col justify-start rounded-md bg-slate-500 mt-10 h-fit text-center px-2">
          {this.state.socials.map((social) => (
            <SocialMedia key={social.id} display={social.name} href={social.url} />
          ))}
        </div>
      </div>
    );
  }
}

export default SocialContent;
