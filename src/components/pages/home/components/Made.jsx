import React from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import madeImg from "../../../../assets/cta2.png"; // change to your image path

const Made = () => {
  return (
    <section className="w-full overflow-x-hidden bg-white">
      {/* Container: max 1440px, side padding 70px on desktop */}
      <div className="mx-auto w-full max-w-[1440px] px-[20px] py-[40px] md:px-[40px] md:py-[60px] xl:px-[70px] xl:py-[80px]">
        {/* Wrapper: image + overlapping rectangle */}
        <div className="relative mx-auto flex w-full max-w-[1299px] flex-col items-center xl:block">
          {/* Image: 785 x 483 */}
          <img
            src={madeImg}
            alt="Belle's Pantry toast with jam and fresh berries"
            className="aspect-[785/483] w-full max-w-[785px] object-cover xl:w-[60.4%]"
          />

          {/* Green rectangle: 574 x 355 (overlaps the image) */}
          <div className="relative z-10 -mt-[40px] w-[calc(100%-32px)] max-w-[574px] bg-[#77895D] px-[24px] py-[30px] md:px-[50px] xl:absolute xl:right-0 xl:top-1/2 xl:mt-0 xl:flex xl:min-h-[355px] xl:w-[44.2%] xl:-translate-y-1/2 xl:flex-col xl:justify-center">
            {/* Heading */}
            <h2 className="font-heading text-[32px] font-semibold uppercase leading-[1.15] text-white md:text-[40px] xl:text-[45px]">
              Made for the Modern Pantry
            </h2>

            {/* Description */}
            <p className="mt-[16px] font-inter text-[16px] font-normal leading-[1.6] text-white">
              Belle's Pantry was created with a love for Southern cooking, warm
              hospitality, and the joy of sharing good food with
            </p>

            {/* Button */}
            <a
              href="#"
              className="group mt-[24px] inline-flex w-fit items-center gap-[16px] rounded-full bg-[#76563B] py-[10px] pl-[28px] pr-[10px] font-inter text-[16px] font-medium uppercase text-white transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#5E432D] hover:shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
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
      </div>
    </section>
  );
};

export default Made;