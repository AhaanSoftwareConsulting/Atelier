import React from "react";
// TODO: replace with your uploaded image (adjust the path to where this file sits)
import benchImage from "../../../assets/bench.png"; // layout: 567 x 673

const Bench = () => {
  return (
    <section className="w-full overflow-hidden bg-[#F5F1EA] font-body">
      {/* ===== max-width container ===== */}
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:gap-[60px] lg:px-[60px] lg:py-[80px]">
        {/* ---- left: image (567 x 673 at full size, scales proportionally) ---- */}
        <div className="aspect-[567/673] w-full max-w-[567px] overflow-hidden rounded-[20px] lg:w-[43%] lg:shrink-0">
          <img
            src={benchImage}
            alt="Craftsperson working at the bench"
            className="h-full w-full object-cover"
          />
        </div>

        {/* ---- right: content ---- */}
        <div className="w-full text-left lg:min-w-0 lg:flex-1">
          <h2 className="font-heading text-[34px] font-normal uppercase leading-[1.1] text-[#272522] sm:text-[48px] lg:text-[44px] xl:text-[65px]">
            A small bench
            <br />
            with <span className="text-[#8B755A]">big patience</span>
          </h2>

          <div className="mt-5 flex max-w-[640px] flex-col gap-6 text-[16px] font-normal leading-normal text-[#272522] lg:mt-6">
            <p>
              What began as a single bench and a casting kit is now a
              three-craft studio. Our goldsmiths, watchmakers and
              leatherworkers share one room, so a ring, a dial and a strap can
              be designed together and finished to the same standard.
            </p>

            <p>
              We do not keep stock to fill a shelf. Every commission starts
              with a conversation about how you will wear the piece, and ends
              with a maker signing it off. If something is not right, we make
              it again.
            </p>

            <p>
              Our materials are chosen to age well: solid gold and platinum,
              sapphire crystal, and vegetable-tanned leather that darkens with
              use.
            </p>
          </div>

          {/* divider */}
          <div className="mt-8 h-px w-full bg-[#8B755A80] lg:mt-10" />

          <p className="mt-6 font-heading text-[26px] font-normal leading-[1.2] text-[#272522] sm:text-[30px] lg:text-[35px]">
            The Atelier Makers
          </p>
        </div>
      </div>
    </section>
  );
};

export default Bench;
