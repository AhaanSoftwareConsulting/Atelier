
import hero from "../../../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate  overflow-hidden  "
    >
      {/* Background image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-right xl:bg-center"
        style={{ backgroundImage: `url(${hero})` }}
      />

      
      {/* Hero content */}
      <div className="mx-auto flex min-h-[700px] md:min-h-[850px] xl:min-h-[950px] max-w-[1440px] items-center xl:items-end px-4 md:px-8 xl:px-[60px] pt-[70px] pb-14 md:py-[100px] xl:pt-[404px] xl:pb-[132px]">
        <div className="max-w-[850px]">
          <h1 className="font-heading  font-normal leading-[1.02] tracking-[-1.8px] text-[#fffaf5] text-[44px] sm:leading-[1.06] xl:text-[95px] lg:tracking-[-2px]">
            MADE TO BE
            <br />
            UNIQUELY YOURS
          </h1>

          <p className="mt-4 max-w-[430px] text-[13px] leading-[1.65] text-white/90 sm:text-[14px]">
           Discover fine rings, bespoke timepieces, and handcrafted leather straps, thoughtfully designed for those who appreciate the art of detail.
          </p>

           <a
            href="#collection"
            onClick={() => setMenuOpen(false)}
            className="mt-5 xl:mt-10 rounded-full bg-[#8B755A] px-5 py-3 text-sm xl:px-[30px] xl:py-[15px] xl:text-base font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#c0a783] hover:text-[#26170e] inline-flex"
          >
            EXPLORE COLLECTION
          </a>
        </div>
      </div>
    </section>
  );
}
