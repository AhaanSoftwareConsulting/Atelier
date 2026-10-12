import React from "react";

/* ------------------------------------------------------------------
   Add this to your index.html <head> (or index.css) once:
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />

   tailwind.config.js -> theme.extend.fontFamily: { inter: ["Inter", "sans-serif"] }

   Replace the image paths below when you upload your images:
   LOGO, AWARDS, IMG_LEFT, IMG_RIGHT

   Breakpoints (Tailwind defaults):
   - below 768px  : mobile  -> everything in 1 column
   - 768px–1279px : tablet  -> 2 columns
   - 1280px+      : desktop -> full row layout (140px gaps)
------------------------------------------------------------------- */

const LOGO = "/images/logo.png"; // 78 x 78
const AWARDS = "/images/awards.png"; // 180 x 51
const IMG_LEFT = "/images/belles-left.jpg"; // 245 x 100
const IMG_RIGHT = "/images/belles-right.jpg"; // 245 x 100

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

const exploreLinks = [
  { label: "Pantry Favorites", href: "/pantry-favorites" },
  { label: "Gift Collections", href: "/gift-collections" },
  { label: "Food & Ingredients", href: "/food-ingredients" },
  { label: "Southern Lifestyle", href: "/southern-lifestyle" },
];

/* ---------- Icons (inline SVG, no extra library needed) ---------- */
const PhoneIcon = () => (
  <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#77895D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.34 1.78.66 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.23a2 2 0 0 1 2.11-.45c.84.32 1.72.54 2.62.66A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#77895D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-10 6L2 7" />
  </svg>
);

const PinIcon = () => (
  <svg className="shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#77895D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4V21H3zM9.75 9.75h3.83v1.54h.05c.53-1 1.84-2.07 3.79-2.07 4.05 0 4.8 2.67 4.8 6.13V21h-4v-4.9c0-1.17-.02-2.67-1.63-2.67-1.63 0-1.88 1.27-1.88 2.59V21h-4z" />
  </svg>
);

const socials = [
  { name: "Facebook", href: "#", Icon: FacebookIcon },
  { name: "Instagram", href: "#", Icon: InstagramIcon },
  { name: "LinkedIn", href: "#", Icon: LinkedinIcon },
];

/* Shared horizontal padding: 20px mobile, 40px tablet, 70px desktop */
const SIDE_PADDING = "px-[20px] md:px-[40px] xl:px-[70px]";

/* ---------- Reusable pieces ---------- */
const Heading = ({ children }) => (
  <h4 className="font-inter text-[16px] font-semibold leading-none text-white">
    {children}
  </h4>
);

const FooterLinks = ({ links }) => (
  <ul className="mt-[28px] flex flex-col gap-[14px]">
    {links.map(({ label, href }) => (
      <li key={label}>
        <a
          href={href}
          className="inline-block font-inter text-[13px] font-normal text-[#A9B8B8] transition-transform duration-300 hover:translate-x-[6px]"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
);

const OutlineText = ({ children }) => (
  <span
    className="select-none whitespace-nowrap font-inter text-[clamp(14px,4.9vw,70px)] font-semibold uppercase leading-none tracking-wide text-transparent"
    style={{ WebkitTextStroke: "1px #FFFFFF" }}
  >
    {children}
  </span>
);

/* ---------- Footer ---------- */
const Footer = () => {
  return (
    <footer className="w-full overflow-x-hidden bg-[#292821]">
      {/* ===== Top section ===== */}
      <div
        className={`mx-auto w-full max-w-[1440px] ${SIDE_PADDING} py-[48px] md:py-[60px] xl:py-[74px]`}
      >
        {/* mobile: 1 col | tablet: 2 cols | desktop: single row with 140px gaps */}
        <div className="grid grid-cols-1 gap-x-[40px] gap-y-[40px] md:grid-cols-2 xl:flex xl:items-start xl:gap-[246px]">
          {/* Column 1: logo, description, awards */}
          <div className="flex min-w-0 flex-col items-start">
            <img
              src={LOGO}
              alt="Belles Pantry logo"
              className="h-[78px] w-[78px] object-contain"
            />
            <p className="mt-[20px] max-w-[190px] font-inter text-[13px] font-normal leading-[1.6] text-[#A9B8B8]">
              Southern flavor. Thoughtful gifts. Made with love. Discover
              Southern-inspired culinary items, pantry favorites,
            </p>
            <img
              src={AWARDS}
              alt="Awards"
              className="mt-[20px] h-[51px] w-[180px] max-w-full object-contain"
            />
          </div>

          {/* Column 2: Quick link */}
          <div className="min-w-0">
            <Heading>Quick link</Heading>
            <FooterLinks links={quickLinks} />
          </div>

          {/* Column 3: Explore */}
          <div className="min-w-0">
            <Heading>Explore</Heading>
            <FooterLinks links={exploreLinks} />
          </div>

          {/* Column 4: Our Office */}
          <div className="min-w-0">
            <Heading>Our Office</Heading>
            <ul className="mt-[28px] flex flex-col gap-[16px]">
              <li className="flex items-center gap-[10px]">
                <PhoneIcon />
                <a
                  href="tel:+13375551234"
                  className="font-inter text-[13px] font-normal text-[#A9B8B8]"
                >
                  (337) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-[10px]">
                <MailIcon />
                <a
                  href="mailto:hello@bellespantry.com"
                  className="break-all font-inter text-[13px] font-normal text-[#A9B8B8]"
                >
                  hello@bellespantry.com
                </a>
              </li>
              <li className="flex items-center gap-[10px]">
                <PinIcon />
                <span className="font-inter text-[13px] font-normal text-[#A9B8B8]">
                  Lafayette, Louisiana
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ===== Border box with images + hollow text ===== */}
      {/* Max width 1440px, dashed top & bottom border (0.86px 0 0.86px 0).
          Everything stays in ONE row on all screens: sizes scale with the
          viewport (vw) and cap at your design values (245px image, 70px text, 50px gap). */}
      <div className="mx-auto w-full max-w-[1440px] border-y-[0.86px] border-dashed border-[#313D3D]">
        <div
          className={`flex w-full flex-nowrap items-center justify-between gap-[8px] ${SIDE_PADDING} py-[16px] md:py-[24px]`}
        >
          {/* Group 1 */}
          <div className="flex min-w-0 items-center gap-[clamp(8px,3.5vw,50px)]">
            <img
              src={IMG_LEFT}
              alt="Belles Pantry jars"
              className="aspect-[245/100] h-auto w-[clamp(60px,17vw,245px)] shrink-0 rounded-[4px] object-cover"
            />
            <OutlineText>Belles</OutlineText>
          </div>

          {/* Group 2 */}
          <div className="flex min-w-0 items-center gap-[clamp(8px,3.5vw,50px)]">
            <img
              src={IMG_RIGHT}
              alt="Belles Pantry sauce"
              className="aspect-[245/100] h-auto w-[clamp(60px,17vw,245px)] shrink-0 rounded-[4px] object-cover"
            />
            <OutlineText>Pantry</OutlineText>
          </div>
        </div>
      </div>

      {/* ===== Bottom bar ===== */}
      <div
        className={`mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[20px] ${SIDE_PADDING} py-[28px] md:grid md:grid-cols-3 md:gap-[16px]`}
      >
        {/* Copyright (left) */}
        <p className="text-center font-inter text-[13px] font-normal text-white md:justify-self-start md:text-left">
          © 2026 <span className="text-white">the Belles Pantry</span>{" "}
          <span className="text-[#A9B8B8]">All right reserved</span>
        </p>

        {/* Social icons (center) */}
        <div className="flex items-center gap-[10px] md:justify-self-center">
          {socials.map(({ name, href, Icon }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white text-[#292821] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#77895D] hover:text-white"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Legal links (right) */}
        <div className="flex items-center justify-center gap-[16px] md:justify-self-end">
          <a
            href="/privacy-policy"
            className="font-inter text-[13px] font-normal text-[#A9B8B8] transition-colors duration-300 hover:text-white"
          >
            Privacy Policy
          </a>
          {/* small vertical divider */}
          <span aria-hidden="true" className="h-[14px] w-px bg-[#313D3D]" />
          <a
            href="/terms"
            className="font-inter text-[13px] font-normal text-[#A9B8B8] transition-colors duration-300 hover:text-white"
          >
            Terms &amp; Condition
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
