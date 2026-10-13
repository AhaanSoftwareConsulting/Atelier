import { useState } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import home from "../../../../assets/home.png";

const slides = [
  {
    smallTitle: "SOUTHERN CULINARY ITEMS & GIFTS",
    title: "Made with Love",
    scriptTitle: "Shared with you",
    subtitle:
      "Handcrafted Southern treats and pantry staples made with premium ingredients and a whole lot of heart.",
    buttonText: "EXPLORE COLLECTION",
    buttonLink: "/shop",
    image: home,
  },
  {
    smallTitle: "THOUGHTFULLY CURATED GOURMET GIFTS",
    title: "Give with Love",
    scriptTitle: "Made For Sharing",
    subtitle:
      "Discover thoughtful gourmet gifts and delightful pantry favorites for every special occasion.",
    buttonText: "SHOP OUR GIFTS",
    buttonLink: "/gifts",
    image: home,
  },
  {
    smallTitle: "DELICIOUS MOMENTS START HERE",
    title: "Gather Around",
    scriptTitle: "Taste The Goodness",
    subtitle:
      "Bring everyone together with comforting recipes and delicious favorites made for sharing.",
    buttonText: "EXPLORE RECIPES",
    buttonLink: "/recipes",
    image: home,
  },
];

export default function HomeBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const changeSlide = (step) => {
    setActiveIndex(
      (current) => (current + step + slides.length) % slides.length
    );
  };

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative isolate min-h-[600px] overflow-hidden bg-[#f6f3ed] sm:min-h-[650px] lg:min-h-[800px]">

      {/* Background image */}
      <img
        src={activeSlide.image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 z-0 h-full min-h-[600px] w-full object-cover object-center sm:min-h-[650px] lg:min-h-[800px]"
      />

      {/* Content area: two columns, left content and empty right */}
      <div className="relative z-10 mx-auto grid min-h-[600px] w-full max-w-[1440px] grid-cols-1 items-center px-8 pb-16 pt-20 sm:min-h-[650px] lg:min-h-[800px] lg:grid-cols-2 lg:px-16 lg:pb-10 lg:pt-28 xl:px-[72px]">

        {/* Left column */}
        <div
          key={activeIndex}
          className="w-full min-w-0 max-w-[570px] animate-[fadeIn_500ms_ease-in-out]"
        >
          <p className="mb-4 text-[10px] font-medium tracking-wide text-[#302f29] sm:text-sm">
            {activeSlide.smallTitle}
          </p>

          <h1 className="font-heading text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-tight text-[#77895D]">
            {activeSlide.title}
          </h1>

          <p className="mt-2 break-words font-highlight text-[clamp(2rem,5vw,5.2rem)] leading-tight text-[#815c42]">
            {activeSlide.scriptTitle}
          </p>

          <p className="mt-5 max-w-[410px] text-sm leading-[1.7] text-[#25251f] sm:text-base lg:text-lg">
            {activeSlide.subtitle}
          </p>

          <a
            href={activeSlide.buttonLink}
            className="group mt-6 inline-flex max-w-fit items-center gap-3 rounded-full bg-[#77895D] py-2 md:py-2.5 pl-4 pr-2.5 font-inter text-[10px] font-medium uppercase text-white transition-colors duration-300 hover:bg-[#5E432D] sm:gap-4 sm:pl-5 sm:text-sm"
          >
            <span>{activeSlide.buttonText}</span>

            <span className="flex w-6 h-6 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#77895D]">
              <ArrowUpRightIcon
                size={16}
                weight="bold"
                className="transition-transform duration-300 group-hover:rotate-90"
              />
            </span>
          </a>
        </div>

        {/* Right column intentionally empty */}
        <div aria-hidden="true" className="hidden lg:block" />
      </div>

      {/* Previous button */}
      <button
        type="button"
        onClick={() => changeSlide(-1)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#22201d] shadow-sm transition-transform hover:scale-105 sm:left-5 lg:left-6"
      >
        <span className="text-2xl leading-none">‹</span>
      </button>

      {/* Next button */}
      <button
        type="button"
        onClick={() => changeSlide(1)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#22201d] shadow-sm transition-transform hover:scale-105 sm:right-5 lg:right-6"
      >
        <span className="text-2xl leading-none">›</span>
      </button>

      {/* Small fade animation */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
}

