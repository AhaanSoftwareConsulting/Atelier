import React from "react";

const BespokeStraps = () => {
  return (
    <section className="w-full overflow-hidden bg-[#EDE7DE] font-body">
      {/* ===== max-width container ===== */}
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-[60px] lg:py-[80px]">
        {/* ---- top row: heading (left) + description (right) ---- */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-10">
          <h2 className="text-left font-heading text-[36px] font-normal uppercase leading-[1.1] text-[#272522] sm:text-[52px] xl:text-[65px]">
            Bespoke Straps
          </h2>

          <p className="max-w-[360px] text-left text-[16px] font-normal leading-normal text-[#272522] md:shrink-0">
            Cut to your wrist and lug width, edge painted and stitched by hand.
            Choose your leather and thread.
          </p>
        </div>

        {/* ---- slider area (WooCommerce products will go here) ---- */}
        <div className="mt-8 lg:mt-10" />
      </div>
    </section>
  );
};

export default BespokeStraps;
