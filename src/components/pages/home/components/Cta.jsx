import React from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import ctaBg from "../../../../assets/greenCTA.png"; // change to your background image path

const Cta = () => {
  return (
    <section
      className="relative flex min-h-[444px] w-full items-center overflow-hidden bg-[#7B8B5F] bg-cover bg-center bg-no-repeat xl:h-[444px]"
  style={{ backgroundImage: `url(${ctaBg})` }}
    >
      {/* Container: max 1440px */}
      <div className="mx-auto w-full max-w-[1440px] px-[20px] py-[64px] md:px-[40px] md:py-[90px] xl:px-[70px]">
        <div className="flex flex-col items-center text-center">
          {/* Heading */}
          <h2 className="font-heading text-[40px] font-semibold leading-[1.1] text-white sm:text-[56px] xl:text-[78px]">
            Ready to Work With Us?
          </h2>

          {/* Description */}
          <p className="mt-[20px] max-w-[760px] text-[16px] font-normal leading-[1.6] text-white md:mt-[24px] md:text-[18px] xl:text-[22px]">
            Belle's Pantry was created with a love for Southern cooking, warm
            hospitality, and the joy of sharing good food with
          </p>

          {/* Button */}
          <a
            href="#"
            className="group mt-[32px] inline-flex items-center gap-[16px] rounded-full bg-[#76563B] py-[10px] pl-[28px] pr-[10px] font-inter text-[16px] font-medium uppercase text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#5E432D] hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)] md:mt-[40px]"
          >
            <span className="text-center">Explore Recipes</span>
            <span className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-white text-[#76563B]">
              <ArrowUpRightIcon
                size={16}
                weight="bold"
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Cta;