import React from 'react'
import {FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon} from "@phosphor-icons/react";
const TopHeader = () => {

  return (
    <div className="relative flex min-h-11 items-center justify-between md:justify-center bg-[#76563B] px-4 text-white">

      {/* Center announcement */}
       <p className="text-start md:text-center text-[8px] md:text-sm"> SOUTHERN FLAVOR. THOUGHTFUL GIFTS. MADE WITH LOVE.</p>
      {/* Right social icons */}
      <div className="absolute right-4 top-1/2 flex -translate-y-1/2 items-center gap-1 sm:right-8 ">
       <a
          href="https://facebook.com"
          aria-label="Facebook"
          className="bg-white rounded-full p-1 text-black transition-colors duration-300 hover:scale-105"
        >
          <FacebookLogoIcon size={16} strokeWidth={1.7} />
        </a>

        <a
          href="https://instagram.com"
          aria-label="Instagram"
          className="bg-white rounded-full p-1 text-black transition-colors duration-300 hover:scale-105"
        >
          <InstagramLogoIcon size={16} strokeWidth={1.7} />
        </a>

        <a
          href="https://youtube.com"
          aria-label="YouTube"
          className="bg-white rounded-full p-1 text-black transition-colors duration-300 hover:scale-105"
        >
          <LinkedinLogoIcon size={17} strokeWidth={1.7} />
        </a>
      </div>

    </div>
  );
}

export default TopHeader