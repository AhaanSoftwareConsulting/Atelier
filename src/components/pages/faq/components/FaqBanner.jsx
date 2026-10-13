import React from "react";
import { CaretRightIcon } from "@phosphor-icons/react";
import faqBg from "../../../../assets/service.png"; // change to your background image path

const FaqBanner = () => {
  return (
    <section
      className="relative flex min-h-[420px] w-full items-center overflow-hidden bg-[#3a3a3a] bg-cover bg-center bg-no-repeat md:min-h-[520px] xl:min-h-[665px]"
      style={{ backgroundImage: `url(${faqBg})` }}
    >
      {/* Dark overlay (#0000008C) */}
      <div className="absolute inset-0 bg-[#0000008C]" />

      {/* Container: max 1440px, side padding 70px on desktop */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-[20px] pb-[48px] pt-[130px] md:px-[40px] md:pb-[64px] xl:px-[70px] xl:pb-[80px] xl:pt-[150px]">
        {/* Heading */}
        <h1 className="max-w-full break-words font-heading text-[36px] font-semibold uppercase leading-[1.15] text-white sm:text-[48px] md:text-[60px] xl:text-[80px]">
          Frequently Asked Questions
        </h1>

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mt-[20px] md:mt-[28px]">
          <ol className="flex flex-wrap items-center gap-[10px] font-inter text-[14px] font-normal uppercase text-white md:text-[16px] xl:text-[18px]">
            <li>
              <a
                href="/"
                className="transition-opacity duration-300 hover:opacity-70"
              >
                Home
              </a>
            </li>
            <li aria-hidden="true" className="flex items-center">
              <CaretRightIcon size={14} weight="bold" />
            </li>
            <li>
              <a
                href="/faq"
                className="transition-opacity duration-300 hover:opacity-70"
              >
                FAQ
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default FaqBanner;