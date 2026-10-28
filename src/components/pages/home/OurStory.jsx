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
    <section
      id="about"
      className="border-x-2 border-[#332d27] bg-[#eee8df] px-5 py-12 text-[#292622] sm:px-8 sm:py-14 lg:px-8 lg:py-12"
    >
      <div className="mx-auto max-w-[1440px]">
        {/* Introduction */}
        <div className="mb-6 grid grid-cols-1 items-center gap-5 md:grid-cols-2 md:gap-10 lg:gap-16">
          <h2 className="font-serif text-[32px] font-normal uppercase leading-[1.12] tracking-[-0.8px] sm:text-[38px]">
            Discover
            <br />
            Our Story
          </h2>

          <p className="max-w-[430px] text-[11px] leading-[1.8] text-[#48433d] md:justify-self-end md:text-[10px]">
            Discover a considered collection of fine rings, bespoke
            timepieces, and handcrafted leather watch straps. Each
            piece reflects a thoughtful approach to design, refined
            materials, and timeless elegance, created for those who
            appreciate the beauty of every detail.
          </p>
        </div>

        {/* Collection cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-3">
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

              <h3 className="mt-2 font-serif text-[19px] font-normal leading-tight tracking-[-0.3px] sm:text-[17px]">
                {item.title}
              </h3>

              <p className="mt-1 min-h-[34px] text-[11px] leading-[1.65] text-[#575149]">
                {item.description}
              </p>

              <a
                href={item.href}
                className="mt-2 flex min-h-[32px] w-full items-center justify-center rounded-full border border-[#8d857a] px-4 py-2 text-center text-[9px] font-medium tracking-wide transition-all duration-300 hover:border-[#8d765a] hover:bg-[#8d765a] hover:text-white"
              >
                {item.buttonText}
              </a>
            </article>
          ))}
        </div>

        {/* Explore all collections */}
        <div className="mt-5 flex justify-center">
          <a
            href="#collection"
            className="inline-flex min-h-[36px] items-center justify-center rounded-full bg-[#927b5e] px-5 py-2.5 text-[9px] font-medium tracking-wide text-white transition-colors duration-300 hover:bg-[#725b40]"
          >
            EXPLORE ALL COLLECTION
          </a>
        </div>
      </div>
    </section>
  );
}
