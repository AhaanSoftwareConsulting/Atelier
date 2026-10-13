import React, { useEffect, useRef, useState } from "react";
import { CheckIcon } from "@phosphor-icons/react";
import aboutImg from "../../../../assets/about_CTA.png"; // change to your image path

/* Counts up from 0 to `end` when it scrolls into view */
const CountUp = ({ end = 10, duration = 1500, suffix = "+" }) => {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setCount(Math.round(progress * end));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const topics = [
  {
    title: "Our Mission",
    text: "Born from a love of Southern flavors and traditions, Belle's Pantry brings thoughtfully curated culinary favorites and gifts to every home.",
  },
  {
    title: "Our Story",
    text: "We share quality Southern-inspired products and thoughtful gifts that create warmth, joy, and connection.",
  },
];

const Aboutus = () => {
  return (
    <section className="w-full overflow-x-hidden bg-white">
      {/* Keyframes for the little animated line */}
      <style>{`
        @keyframes aboutLine {
          0%   { transform: scaleX(0.25); }
          50%  { transform: scaleX(1); }
          100% { transform: scaleX(0.25); }
        }
      `}</style>

      {/* Container: max 1440px, side padding 70px on desktop */}
      <div className="mx-auto w-full max-w-[1440px] px-[20px] py-[60px] md:px-[40px] md:py-[80px] xl:px-[70px] xl:py-[100px]">
        <div className="grid grid-cols-1 items-center gap-[48px] lg:grid-cols-2 lg:gap-[40px] xl:grid-cols-[minmax(0,650px)_minmax(0,1fr)] xl:gap-[50px] 2xl:gap-[70px]">
          {/* ===== Left: image + counter box ===== */}
          <div className="relative mx-auto mb-[16px] w-full max-w-[650px] lg:mb-0">
            <img
              src={aboutImg}
              alt="Baking with Southern tradition"
              className="aspect-[650/590] w-full rounded-[6px] object-cover"
            />

            {/* Counter box: 190 x 140, overlaps the image's bottom right */}
            <div className="absolute -bottom-[12px] -right-[12px] flex h-[120px] w-[160px] flex-col justify-center border-l-[6px] border-t-[6px] border-[#ECF0F0] bg-[#77895D] px-[16px] py-[10px] md:h-[140px] md:w-[190px] md:px-[20px] md:py-[12px] xl:-bottom-[16px] xl:-right-[40px]">
              <p className="font-inter text-[44px] font-bold leading-none text-white md:text-[60px]">
                <CountUp end={10} suffix="+" />
              </p>
              <p className="mt-[6px] font-inter text-[14px] font-normal leading-[1.3] text-[#EDEDED] md:text-[16px]">
                Years Southern Favorites
              </p>
            </div>
          </div>

          {/* ===== Right: content ===== */}
          <div className="min-w-0 text-left">
            {/* Animated line: 33 x 2 */}
            <div className="h-[2px] w-[33px]">
              <div
                className="h-full w-full origin-left bg-[#76563B]"
                style={{ animation: "aboutLine 2.4s ease-in-out infinite" }}
              />
            </div>

            {/* Sub title */}
            <p className="mt-[14px] font-heading text-[20px] font-bold italic text-[#76563B] md:text-[24px]">
              About Us
            </p>

            {/* Heading */}
            <h2 className="mt-[8px] break-words font-heading text-[32px] font-semibold uppercase leading-[1.2] text-black md:text-[40px] xl:text-[50px]">
              Rooted in Southern Tradition
            </h2>

            {/* Description */}
            <p className="mt-[20px] text-[16px] font-normal leading-[1.7] text-[#6F6F6F]">
              Belle's Pantry was created from a love of good food, Southern
              traditions, and the simple joy of sharing something special with
              others. We believe food has a way of bringing people together.
              That's why we thoughtfully curate Southern-inspired culinary items
              and gifts
            </p>

            {/* Two topics */}
            <div className="mt-[32px] grid grid-cols-1 gap-[28px] sm:grid-cols-2 sm:gap-[32px]">
              {topics.map(({ title, text }) => (
                <div key={title} className="min-w-0">
                  <div className="flex items-center gap-[10px]">
                    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#76563B] text-white">
                      <CheckIcon size={11} weight="bold" />
                    </span>
                    <h3 className="font-heading text-[24px] font-bold leading-none text-[#313131]">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-[12px] text-[16px] font-normal leading-[1.6] text-[#6F6F6F]">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;