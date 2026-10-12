import React from "react";
import {
  PhoneIcon,
  EnvelopeSimpleIcon,
  MapPinIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react";
import awards from "../../../assets/awards.png";
import logo from "../../../assets/footerlogo.png";
import imgLeft from "../../../assets/marquee2.png";
import imgRight from "../../../assets/marquee1.png";

/* ------------------------------------------------------------------
   Add this to your index.html <head> (or index.css) once:
   <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />

   tailwind.config.js -> theme.extend.fontFamily: { inter: ["Inter", "sans-serif"] }

   Icons: @phosphor-icons/react  (npm i @phosphor-icons/react)

   Breakpoints (Tailwind defaults):
   - below 768px  : mobile  -> everything in 1 column
   - 768px–1279px : tablet  -> 2 columns
   - 1280px+      : desktop -> full row layout
------------------------------------------------------------------- */

const LOGO = logo;
const AWARDS = awards;
const IMG_LEFT = imgLeft;
const IMG_RIGHT = imgRight;

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

/* Social icons (Phosphor). Color is inherited from the link (currentColor),
   so the hover colors keep working. */
const socials = [
  { name: "Facebook", href: "#", Icon: FacebookLogoIcon, weight: "fill" },
  { name: "Instagram", href: "#", Icon: InstagramLogoIcon, weight: "bold" },
  { name: "LinkedIn", href: "#", Icon: LinkedinLogoIcon, weight: "fill" },
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
        {/* mobile: 1 col | tablet: 2 cols | desktop: single row */}
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
                <PhoneIcon
                  size={20}
                  color="#77895D"
                  weight="regular"
                  className="shrink-0"
                />
                <a
                  href="tel:+13375551234"
                  className="font-inter text-[13px] font-normal text-[#A9B8B8]"
                >
                  (337) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-[10px]">
                <EnvelopeSimpleIcon
                  size={20}
                  color="#77895D"
                  weight="regular"
                  className="shrink-0"
                />
                <a
                  href="mailto:hello@bellespantry.com"
                  className="break-all font-inter text-[13px] font-normal text-[#A9B8B8]"
                >
                  hello@bellespantry.com
                </a>
              </li>
              <li className="flex items-center gap-[10px]">
                <MapPinIcon
                  size={20}
                  color="#77895D"
                  weight="regular"
                  className="shrink-0"
                />
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
      <div className={`mx-auto w-full max-w-[1440px] ${SIDE_PADDING}`}>
        <div className="flex w-full flex-nowrap items-center justify-between gap-[8px] border-y-[0.86px] border-dashed border-[#313D3D] py-[16px] md:py-[24px]">
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
          <span className="text-[#A9B8B8]">© 2026</span> the Belles Pantry{" "}
          <span className="text-[#A9B8B8]">All right reserved</span>
        </p>

        {/* Social icons (center) */}
        <div className="flex items-center gap-[10px] md:justify-self-center">
          {socials.map(({ name, href, Icon, weight }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white text-[#292821] transition-all duration-300 hover:-translate-y-[2px] hover:bg-[#77895D] hover:text-white"
            >
              <Icon size={24} weight={weight} />
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
