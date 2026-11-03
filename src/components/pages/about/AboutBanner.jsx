import React from "react";
// TODO: replace with your uploaded image (adjust the path to where this file sits)
import bgImage from "../../../assets/about-banner.png";

const AboutBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#272522] font-body">
      {/* ===== full-width background image ===== */}
      <img
        src={bgImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-right"
      />

      {/* gradient overlay: #00000099 (left) -> #00000000 (right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00000099] to-[#00000000]" />

      {/* extra darkening on mobile so the text stays readable over the image */}
      <div className="absolute inset-0 bg-black/30 lg:hidden" />

      {/* ===== max-width container (798px tall on desktop) ===== */}
      <div className="relative mx-auto flex min-h-[560px] w-full max-w-[1440px] items-center px-5 pb-16 pt-32 sm:min-h-[640px] sm:px-8 lg:h-[798px] lg:px-[60px] lg:pb-0 lg:pt-24">
        {/* text block: left side, left-aligned */}
        <div className="w-full text-left lg:max-w-[760px]">
          <h1 className="font-heading text-[40px] font-normal uppercase leading-[1.05] text-white sm:text-[64px] lg:text-[95px]">
            Crafted with
            <br />
            intention.
          </h1>

          <p className="mt-5 max-w-[620px] text-[16px] font-normal leading-normal text-white sm:text-[18px] lg:mt-6 lg:text-[22px]">
            We believe the finest objects are defined by the details. From
            considered jewellery to bespoke timepieces and handcrafted leather
            watch straps, our approach brings together thoughtful design,
            enduring character, and a respect for craftsmanship.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
