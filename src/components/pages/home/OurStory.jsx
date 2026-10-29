import card1 from '../../../assets/card1.png';
import card2 from '../../../assets/card2.png';
import card3 from '../../../assets/card3.png';
const collections = [
  {
    id: 1,
    title: "Signature Rings",
    description:
      "Sculptural forms and refined details, designed to make a lasting impression.",
    buttonText: "EXPLORE RINGS",
    href: "#rings",
    image: card1,
    imageAlt: "Gold signature rings on a dark reflective surface",
  },
  {
    id: 2,
    title: "Bespoke Watches",
    description:
      "Precision, character, and timeless design come together in distinctive timepieces.",
    buttonText: "EXPLORE WATCHES",
    href: "#watches",
    image: card2,
    imageAlt: "Elegant wristwatch with a brown leather strap",
  },
  {
    id: 3,
    title: "Leather Watch Straps",
    description:
      "Beautiful textures and considered finishes bring a personal touch to every timepiece.",
    buttonText: "EXPLORE STRAPS",
    href: "#straps",
    image: card3,
    imageAlt: "Crafted leather watch straps on a work surface",
  },
];

export default function OurStory() {
  return (
    <div className="bg-[#D9D0C3]/50 text-[#272522]">
      <div className="mx-auto max-w-[1440px] relative px-4 md:px-8 xl:px-[60px] py-[90px]">
        {/* Introduction */}
        <div className="mb-6 grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-10 lg:gap-24">
          <h2 className="font-heading text-3xl md:text-5xl font-normal uppercase leading-[1.12] tracking-[-0.8px] xl:text-[65px]">
            Discover
            <br />
            Our Story
          </h2>

          <p className="w-full text-sm leading-[1.8] text-justify md:text-base">
            Discover a considered collection of fine rings, bespoke timepieces, and handcrafted leather watch straps. Each piece reflects a thoughtful approach to design, refined materials, and timeless elegance, created for those who appreciate the beauty of every detail.
          </p>
        </div>

        {/* Collection cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
          {collections.map((item) => (
            <article key={item.id} className="min-w-0">
              <a
                href={item.href}
                aria-label={`Discover ${item.title}`}
                className="group block overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.imageAlt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </a>

              <h3 className="mt-5 font-heading  font-normal leading-tight tracking-[-0.3px] text-3xl">
                {item.title}
              </h3>

              <p className="mt-1  leading-[1.65] text-base">
                {item.description}
              </p>

              <a
                href={item.href}
                className="mt-10 flex  w-full items-center justify-center rounded-full border border-[#272522] px-4 py-2 text-center text-base font-medium tracking-wide transition-all duration-300 hover:border-[#8d765a] hover:bg-[#8d765a] hover:text-white"
              >
                {item.buttonText}
              </a>
            </article>
          ))}
        </div>

        {/* Explore all collections */}
        <div className="mt-5 flex justify-center">
          <a
            href="/collection"
            className="rounded-full items-center cursor pointer justify-center bg-[#8B755A] px-5 py-3 text-sm xl:px-[30px] xl:py-[15px] xl:text-base font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#c0a783] hover:text-[#26170e] inline-flex">
                
            EXPLORE ALL COLLECTION
          </a>
        </div>
      </div>
    </div>
  );
}
