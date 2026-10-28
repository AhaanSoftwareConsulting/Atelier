import React from "react";
import bgImage from "../../../assets/cta1.png"; // adjust the path to match where this file sits

const Discover = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#272522] font-body">
      {/* ===== full-width background image ===== */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-left"
      />

      {/* dark overlay: stronger on mobile (text sits over the image), softer on desktop */}
      <div className="absolute inset-0 lg:bg-gradient-to-r lg:from-black/10 lg:via-black/30 lg:to-black/60" />

      {/* ===== max-width container ===== */}
      <div className="relative mx-auto flex w-full max-w-[1440px] justify-start px-5 py-20 sm:px-8 sm:py-28 lg:min-h-[560px] lg:items-center lg:justify-end lg:px-[60px] lg:py-24">
        {/* text block (right side on desktop, left-aligned text) */}
        <div className="w-full text-left lg:w-[52%] lg:max-w-[760px]">
          <h2 className="font-heading text-[34px] font-normal uppercase leading-[1.1] text-white sm:text-[52px] lg:text-[50px] xl:text-[75px]">
            The beauty
            <br />
            is in the details.
          </h2>

          <p className="mt-5 max-w-[640px] text-[16px] font-normal leading-normal text-white sm:text-[18px] lg:mt-6 xl:text-[22px]">
            From the character of the materials to the precision of every
            finish, we believe the smallest details make the greatest
            difference. Discover the thought and care behind each piece.
          </p>

          <button
            type="button"
            className="cursor-pointer mt-8 w-fit rounded-full bg-[#8B755A] px-8 py-3.5 text-[16px] font-medium uppercase text-white transition-all duration-300 hover:bg-[#A08868] hover:shadow-lg active:scale-95"
          >
            Discover Our Philosophy
          </button>
        </div>
      </div>
    </section>
  );
};

export default Discover;
