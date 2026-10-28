import React from "react";
// TODO: replace with your uploaded images (adjust the path to where this file sits)
import imgLarge from "../../../assets/big.png"; // layout: 424 x 527
import imgSmall from "../../../assets/small.png"; // layout: 200 x 233

const Objects = () => {
  return (
    <section className="w-full overflow-hidden bg-[#F5F1EA] font-body">
      {/* ===== max-width container ===== */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:flex-row lg:items-end lg:gap-[50px] lg:px-[60px] lg:py-[90px]">
        {/* ---- left: 2 images (scale proportionally, 424x527 + 200x233 at full size) ---- */}
        <div className="flex w-full max-w-[649px] items-start gap-[3.85%] lg:w-[49%] lg:shrink-0">
          <div className="aspect-[424/527] w-[65.3%] overflow-hidden rounded-[20px]">
            <img
              src={imgLarge}
              alt="Craftsperson shaping a piece of jewellery"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="aspect-[200/233] w-[30.8%] overflow-hidden rounded-[20px]">
            <img
              src={imgSmall}
              alt="Watch on a leather strap"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* ---- right: text (bottom-aligned with the big image on desktop) ---- */}
        <div className="w-full text-left lg:max-w-[623px] lg:flex-1">
          <h2 className="font-heading text-[34px] font-normal uppercase leading-[1.1] text-[#272522] sm:text-[48px] lg:text-[50px] xl:text-[65px]">
            Objects with
            <br />
            character
          </h2>

          <p className="mt-5 max-w-[640px] text-[16px] font-normal leading-normal text-[#272522]">
            Every detail has a purpose. Every material tells a story. We bring
            together considered design and an appreciation for craftsmanship to
            create pieces that feel personal, distinctive, and enduring.
          </p>

          <button
            type="button"
            className="cursor-pointer mt-8 w-fit rounded-full bg-[#8B755A] px-8 py-3.5 text-[16px] font-medium uppercase text-white transition-all duration-300 hover:bg-[#A08868] hover:shadow-lg active:scale-95"
          >
            Discover Our Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Objects;
