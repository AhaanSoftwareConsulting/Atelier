import react from 'react';
import {ArrowUpRightIcon} from "@phosphor-icons/react";
import grid1 from "../../../../assets/grid1.png";
import grid2 from "../../../../assets/grid2.png";
import grid3 from "../../../../assets/grid3.png";
const offers = [
  {
    image: grid1,
    imageAlt: "Belle's Pantry gourmet pantry products",
    description:
      "Stock your pantry for everyday use and effortless entertaining",
    buttonText: "SHOP ALL",
    link: "/shop",
  },
  {
    image: grid2,
    imageAlt: "Thoughtfully curated gourmet gifts",
    description:
      "Thoughtfully curated gourmet gifts for every occasion",
    buttonText: "GIFTS",
    link: "/gifts",
  },
  {
    image: grid3,
    imageAlt: "French toast with bananas and blueberries",
    description:
      "Quick and easy recipes destined to be your new family favorites",
    buttonText: "RECIPES",
    link: "/recipes",
  },
];

export default function WhatWeOffer() {
  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 sm:py-14 lg:px-[70px] lg:py-16">
      <div className="mx-auto max-w-[1440px]">

        {/* Section title */}
        <h2 className="mb-8 text-center font-heading text-3xl font-normal uppercase leading-tight tracking-wide text-[#77895D] sm:mb-10 sm:text-4xl">
          What We Offer
        </h2>

        {/* Three-column grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-[30px]">
          {offers.map((offer) => (
            <div
              key={offer.buttonText}
              className="flex min-w-0 flex-col items-center text-center"
            >
              {/* Image */}
              <a
                href={offer.link}
                className="block w-full overflow-hidden rounded-[7px]"
              >
                <img
                  src={offer.image}
                  alt={offer.imageAlt}
                  className="aspect-[1.1/1] w-full object-cover transition-transform duration-500 hover:scale-[1.04]"
                  loading="lazy"
                />
              </a>

              {/* Description */}
              <p className="mt-3 min-h-[52px] max-w-[390px] text-base leading-[1.65] text-[#171717] sm:text-[17px] ">
                {offer.description}
              </p>

              {/* Button */}
              <a
                href={offer.link}
                className="mt-4 inline-flex min-h-[40px] items-center gap-3 rounded-full bg-[#77895D] py-1.5 pl-4 pr-1.5 text-[12px] font-medium text-white transition-colors duration-300 hover:bg-[#667a50]"
              >
                {offer.buttonText}

                <span className="flex h-10 w-10  items-center justify-center rounded-full bg-white text-lg leading-none text-[#77895D]">
                                            <ArrowUpRightIcon size={16} />
                                          </span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}