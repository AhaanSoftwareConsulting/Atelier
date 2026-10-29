import React, { useState } from "react";

// Tab labels. "value" is what you can use later to filter / fetch WooCommerce products
// (e.g. map each value to a WooCommerce category slug).
const tabs = [
  { label: "All Pieces", value: "all" },
  { label: "Rings", value: "rings" },
  { label: "Bespoke Watches", value: "bespoke-watches" },
  { label: "Leather Straps", value: "leather-straps" },
];

const ExploreCollections = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  return (
    <section className="w-full overflow-hidden bg-[#F5F1EA] font-body">
      {/* ===== max-width container ===== */}
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-[60px] lg:py-[80px]">
        {/* ---- heading ---- */}
        <h2 className="text-center font-heading text-[32px] font-normal uppercase leading-[1.1] text-[#272522] sm:text-[48px] xl:text-[65px]">
          Explore the collections
        </h2>

        {/* ---- tabs ---- */}
        <div className="mt-8 flex justify-center lg:mt-10">
          <div
            role="tablist"
            aria-label="Collections"
            className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-solid border-[#27252233] p-1.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {tabs.map((tab) => {
              const isActive = activeTab === tab.value;
              return (
                <button
                  key={tab.value}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(tab.value)}
                  className={`cursor-pointer whitespace-nowrap rounded-full px-5 py-2.5 text-[16px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-[#8B755A] text-white"
                      : "bg-transparent text-[#272522] hover:bg-[#8B755A]/10"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* ---- products area (WooCommerce products will go here) ----
            Use `activeTab` to fetch / filter products by category. */}
        <div className="mt-10 lg:mt-12" data-active-tab={activeTab} />
      </div>
    </section>
  );
};

export default ExploreCollections;
