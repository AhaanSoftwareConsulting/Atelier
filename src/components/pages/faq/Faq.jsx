import React, { useState } from "react";
import { CaretDownIcon } from "@phosphor-icons/react";

const faqs = [
  {
    question: "What Does Belle’s Pantry Offer?",
    answer:
      "We Offer Thoughtfully Curated Southern-Inspired Culinary Items, Pantry Favorites, And Gifts.",
  },
  {
    question: "Do You Offer Gift Collections?",
    answer:
      "Yes, we offer gift collections made from our pantry favorites. Add your answer here.",
  },
  {
    question: "How Can I Place An Order?",
    answer: "Add your answer here.",
  },
  {
    question: "Can I Contact Belle’s Pantry For Product Questions?",
    answer: "Add your answer here.",
  },
];

const Faq = () => {
  // First question is open by default
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full overflow-x-hidden bg-[#F7F2E8]">
      {/* Container: max 1440px */}
      <div className="mx-auto w-full max-w-[1440px] px-[20px] pb-[50px] pt-[50px] md:px-[40px] md:pb-[65px] md:pt-[65px] xl:px-[70px] xl:pb-[84px] xl:pt-[85px]">
        {/* Heading (70px gap below on desktop) */}
        <h2 className="mb-[40px] text-center font-heading text-[32px] font-semibold leading-[1.2] text-[#77895D] md:mb-[56px] md:text-[40px] xl:mb-[70px] xl:text-[50px]">
          Frequently Asked Questions
        </h2>

        {/* Questions list */}
        <div className="mx-auto w-full max-w-[924px]">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            const isLast = index === faqs.length - 1;

            return (
              <div
                key={item.question}
                className={!isLast ? "border-b border-[#00000033]" : ""}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className={`flex w-full cursor-pointer items-center justify-between gap-[16px] pt-[24px] text-left md:pt-[32px] xl:pt-[44px] ${isOpen
                      ? "pb-[10px]"
                      : "pb-[24px] md:pb-[32px] xl:pb-[44px]"
                    }`}
                >
                  <span className="min-w-0 break-words font-heading text-[20px] font-semibold leading-[1.3] text-black md:text-[22px] xl:text-[26px]">
                    {item.question}
                  </span>
                  <CaretDownIcon
                    size={20}
                    weight="bold"
                    className={`shrink-0 text-black transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                      }`}
                  />
                </button>

                {/* Answer (smooth open/close) */}
                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                >
                  <div className="overflow-hidden">
                    <p className="break-words pb-[24px] pr-[36px] font-inter text-[15px] font-normal leading-[1.6] text-[#767778] md:pb-[28px] md:text-[16px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;