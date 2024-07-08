"use client";

import Image from "next/image";
import App from "./components/App";
import { XIcon } from "./components/icons/XIcon";
import { LinkedInIcon } from "./components/icons/LinkedInIcon";
import { FacebookIcon } from "./components/icons/FacebookIcon";
import GitHubButton from "react-github-btn";
import ESLCompanion from "./components/ESLCompanion";

const Home = () => {
  return (
    <>
      <div className="h-full overflow-hidden">
      <ESLCompanion/>
      </div>
    </>
  );
};

export default Home;
