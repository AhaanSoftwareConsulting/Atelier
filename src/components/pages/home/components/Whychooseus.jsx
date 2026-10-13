import React from "react";
import icon1 from "../../../../assets/leaf.png"; // change to your image paths
import icon2 from "../../../../assets/leaf.png";
import icon3 from "../../../../assets/leaf.png";
import icon4 from "../../../../assets/leaf.png";

const features = [
  {
    icon: icon1,
    title: "Quality You Can Trust",
    text: "Carefully selected products with quality in mind.",
  },
  {
    icon: icon2,
    title: "Southern Charm",
    text: "Authentic flavors and traditions inspired by the South.",
  },
  {
    icon: icon3,
    title: "Thoughtful Gifting",
    text: "Specially curated gifts for every occasion.",
  },
  {
    icon: icon4,
    title: "Personal Service",
    text: "A warm, welcoming experience for every customer.",
  },
];

const Whychooseus = () => {
  return (
    <section className="flex w-full items-center overflow-hidden bg-[#76563B] xl:h-[530px]">
      {/* Keyframes for the rotating half circle */}
      <style>{`
        @keyframes whySpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      {/* Container: max 1440px, side padding 70px on desktop */}
      <div className="mx-auto w-full max-w-[1440px] px-[20px] py-[56px] md:px-[40px] md:py-[70px] xl:px-[70px] xl:py-0">
        {/* Heading */}
        <h2 className="mb-[40px] text-center font-heading text-[32px] font-semibold uppercase leading-[1.2] text-white md:mb-[50px] md:text-[40px] xl:mb-[60px] xl:text-[45px]">
          Why Choose Us
        </h2>

        {/* 1 col mobile | 2 cols tablet | 4 cols desktop (70px gap) */}
        <div className="grid grid-cols-1 gap-x-[40px] gap-y-[44px] md:grid-cols-2 xl:grid-cols-4 xl:gap-x-[70px]">
          {features.map(({ icon, title, text }) => (
            <div
              key={title}
              className="flex min-w-0 flex-col items-center text-center"
            >
              {/* Icon circle + rotating half circle */}
              <div className="relative flex h-[130px] w-[130px] items-center justify-center">
                {/* Rotating half ring (gradient #76563B -> #FFF4F4) */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(from 180deg, #76563B 0deg, #FFF4F4 180deg, transparent 180deg, transparent 360deg)",
                    WebkitMask:
                      "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                    mask: "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 2px))",
                    animation: "whySpin 6s linear infinite",
                  }}
                />

                {/* Circle background */}
                <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-[#F7F2E8]">
                  <img
                    src={icon}
                    alt={title}
                    className="h-[68px] w-[68px] object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-[20px] max-w-[240px] font-heading text-[20px] font-normal leading-[1.3] text-[#FFF5F5] md:text-[22px]">
                {title}
              </h3>

              {/* Description */}
              <p className="mt-[10px] max-w-[260px] font-inter text-[16px] font-normal leading-[1.6] text-white">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whychooseus;