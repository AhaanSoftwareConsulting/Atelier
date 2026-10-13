import { ArrowUpRightIcon } from "@phosphor-icons/react";
import OurStoryImg from "../../../../assets/cta1.png";

const OurStory = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="relative mx-auto  max-w-[1440px] px-8 lg:px-12 xl:px-[70px] lg:py-20 ">
        {/* Image and overlapping card wrapper */}
        <div className="relative mx-auto w-full max-w-[1299px]">

          {/* Image */}
          <div className="ml-0 w-full overflow-hidden  md:ml-auto md:w-[78%] xl:w-[60.4%]">
            <img
              src={OurStoryImg}
              alt="Belle's Pantry toast with jam and fresh berries"
              className="block aspect-[634/659] h-full w-full object-cover"
            />
          </div>

          {/* Green overlapping card */}
          <div className="relative z-10 -mt-8 ml-3 w-[calc(100%-12px)] bg-[#77895D] px-5 py-7 text-white sm:-mt-12 sm:ml-6 sm:w-[calc(100%-24px)]  md:absolute md:left-0 md:top-1/2 md:ml-0 md:mt-0 md:w-[52%] md:-translate-y-1/2 xl:px-[75px] xl:py-[52px] ">

            <p className="mb-2 text-[10px] font-medium uppercase tracking-wide text-white/90 sm:text-xs">
              OUR STORY
            </p>

            <h2 className="w-fit font-heading text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl xl:text-[50px]">
              Where Southern Tradition Meets Thoughtful Craft
            </h2>

            <p className="mt-3 max-w-[460px] text-xs leading-[1.8] text-white/95 sm:mt-4 sm:text-sm">
              Belle's Pantry was created with a love for Southern cooking,
              warm hospitality, and the joy of sharing good food with others.
              Every item is selected with care to bring you the flavors and
              traditions that make the South so special.
            </p>

            <a
              href="/about"
              className="group mt-4 inline-flex max-w-full items-center gap-2 rounded-full bg-[#815C42] py-1.5 pl-3 pr-1.5 text-[10px] font-medium uppercase text-white transition-colors duration-300 hover:bg-[#5E432D] sm:mt-5 sm:text-xs"
            >
              <span>LEARN MORE ABOUT US</span>

              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#815C42]">
                <ArrowUpRightIcon
                  size={14}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:rotate-90"
                />
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;
