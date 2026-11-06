import BespokeWatchesSlider from "./BespokeWatchesSlider";

const BespokeWatches = ({id}) => {
  
  return (
    <section id={id} className="w-full overflow-hidden bg-[#F5F1EA] scroll-mt-24">
      {/* ===== max-width container ===== */}
      <div className="relative mx-auto w-full max-w-[1440px]  px-4 md:px-8 xl:px-[60px] py-[90px]">
        {/* ---- top row: heading (left) + description (right) ---- */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-10">
          <h2 className="text-left font-heading text-3xl font-normal uppercase leading-[1.1] text-[#272522] lg:text-5xl xl:text-[65px]">
            Bespoke Watches
          </h2>

          <p className="max-w-[360px] text-left text-[16px] font-normal leading-normal text-[#272522] md:shrink-0">
            Choose a case, dial and finish. We build and regulate each watch
            before it ships.
          </p>
        </div>

        {/* BespokeWatches slider */}
       <BespokeWatchesSlider/>
      </div>
    </section>
  );
};

export default BespokeWatches;
