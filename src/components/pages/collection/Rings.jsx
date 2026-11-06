
import RingSlider from "./RingSlider";

const Rings = ({id}) => {

  return (
    <section id={id} className="w-full overflow-hidden bg-[#EDE7DE] scroll-mt-24">
      <div className="relative mx-auto w-full max-w-[1440px]  px-4 md:px-8 xl:px-[60px] py-[90px]">

        {/* Heading and description */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-10">
          <h2 className="text-left font-heading text-3xl font-normal uppercase leading-[1.1] text-[#272522] lg:text-5xl xl:text-[65px]">
            Rings
          </h2>

          <p className="max-w-[360px] text-left text-[16px] font-normal leading-normal text-[#272522] md:shrink-0">
            Cast and finished by hand in 18 kt gold or platinum.
            Sized to order.
          </p>
        </div>
        {/* Rings slider */}
        <RingSlider/>
      </div>
    </section>
  );
};

export default Rings;
