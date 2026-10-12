import { useState } from "react";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
const slides = [
  {
    smallTitle: "SOUTHERN CULINARY ITEMS & GIFTS",
    title: "Made with Love",
    scriptTitle: "Shared with you",
    subtitle:
      "Handcrafted Southern treats and pantry staples made with premium ingredients and a whole lot of heart..",
    buttonText: "EXPLORE COLLECTION",
    buttonLink: "/shop",
    image: "home.png",
  },
  {
    smallTitle: "THOUGHTFULLY CURATED GOURMET GIFTS",
    title: "Give with Love",
    scriptTitle: "Made for sharing",
    subtitle:
      "Discover thoughtful gourmet gifts and delightful pantry favorites for every special occasion.",
    buttonText: "SHOP OUR GIFTS",
    buttonLink: "/gifts",
    image: "home.png",
  },
  {
    smallTitle: "DELICIOUS MOMENTS START HERE",
    title: "Gather Around",
    scriptTitle: "Taste the goodness",
    subtitle:
      "Bring everyone together with comforting recipes and delicious favorites made for sharing.",
    buttonText: "EXPLORE RECIPES",
    buttonLink: "/recipes",
    image: "home.png",
  },
];

export default function HomeBanner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentSlide = slides[activeIndex];

  const previousSlide = () => {
    setActiveIndex((index) =>
      index === 0 ? slides.length - 1 : index - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((index) =>
      index === slides.length - 1 ? 0 : index + 1
    );
  };

  return (
    <section className="relative isolate min-h-[600px] overflow-hidden bg-[#f6f3ed] sm:min-h-[650px] lg:h-[min(760px,100svh)] lg:min-h-[560px]">

      {/* Full hero background image */}
      {slides.map((slide, index) => (
        <img
          key={slide.image}
          src={slide.image}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 -z-10 h-full w-full object-cover object-center transition-opacity duration-700 ${
            index === activeIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Left-side content */}
      <div className="mx-auto flex min-h-[600px] max-w-[1500px] items-center px-5 pb-10 pt-28 sm:min-h-[650px] sm:px-8 lg:h-full lg:min-h-0 lg:px-[70px] lg:pb-0 lg:pt-16">

        <div
          key={currentSlide.title}
          className="relative z-10 w-full max-w-[570px] animate-[heroFadeIn_500ms_ease-out]"
        >
          <p className="mb-4 text-sm font-medium tracking-wide text-[#302f29] sm:text-sm">
            {currentSlide.smallTitle}
          </p>

          <h1 className="font-heading text-[42px] font-normal leading-[1.08] tracking-[-1px] text-[#77895D] sm:text-5xl lg:text-[58px] xl:text-[62px]">
            {currentSlide.title}
          </h1>

          <p className="mt-1 font-heading text-xl italic leading-[1.12] text-[#815c42] sm:text-5xl lg:text-[54px] xl:text-[82px]">
            {currentSlide.scriptTitle}
          </p>

          <p className="mt-5 max-w-[410px] text-sm leading-[1.7] text-[#25251f] sm:text-base">
            {currentSlide.subtitle}
          </p>

          <a
            href={currentSlide.buttonLink}
            className="mt-10 inline-flex min-h-[39px] items-center gap-3 rounded-full bg-[#77895D] py-1.5 pl-4 pr-1.5 text-base uppercase font-medium text-white transition-colors duration-300 hover:bg-[#65784e]"
          >
            {currentSlide.buttonText}

            <span className="flex h-10 w-10  items-center justify-center rounded-full bg-white text-lg leading-none text-[#77895D]">
                            <ArrowUpRightIcon size={16} />
                          </span>
          </a>
        </div>
      </div>

      {/* Previous slide */}
      <button
        type="button"
        onClick={previousSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#22201d] shadow-sm transition-transform hover:scale-105 sm:left-5 lg:left-[18px]"
      >
        <span className="text-2xl leading-none">‹</span>
      </button>

      {/* Next slide */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#22201d] shadow-sm transition-transform hover:scale-105 sm:right-5 lg:right-[18px]"
      >
        <span className="text-2xl leading-none">›</span>
      </button>
    </section>
  );
}
