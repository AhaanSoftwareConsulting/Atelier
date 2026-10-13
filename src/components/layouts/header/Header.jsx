import { useState } from "react";
import logo from "../../../assets/logo.png";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { Link, useLocation } from "react-router-dom";

const leftLinks = [
  { name: "HOME", href: "/" },
  { name: "ABOUT US", href: "/about" },
  { name: "SERVICES", href: "/services" },
  { name: "CONTACT US", href: "/contact" },
];

const rightLinks = [
  { name: "SHOP NOW", href: "/shop" },
  { name: "FAQ", href: "/faq" },
];

export default function Header() {

  const { pathname } = useLocation();

const isActive = (href) => pathname === href;
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <>
      {/* Header positioned over the hero banner */}
      <header className="absolute left-0 right-0 top-24 z-50 px-4 sm:px-8 lg:px-12 xl:px-[70px] ">
        <nav className="relative mx-auto flex h-[60px] max-w-[1440px] items-center justify-between rounded-full bg-transparent lg:bg-white px-5 md:shadow-sm sm:h-[73px] sm:pl-[34px] sm:pr-[14px]">

          {/* Desktop left navigation */}
          <div className="items-center  lg:flex gap-5 xl:gap-[46px]">
            {leftLinks.map((link, index) => (
              <Link
  key={link.name}
  to={link.href}
  aria-current={isActive(link.href) ? "page" : undefined}
  className={`whitespace-nowrap border-b pb-1 text-xs xl:text-base uppercase transition-colors duration-200 ${
    isActive(link.href)
      ? "border-[#77895D] text-[#77895D]"
      : "border-transparent text-[#22201d] hover:text-[#77895D]"
  }`}
>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Center logo */}
          <div>
            <a
              href="/"
              aria-label="Belle's Pantry home"
              className="absolute left-5 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center justify-center leading-none lg:left-1/2  w-20 h-20 lg:h-[145px] lg:w-[145px] lg:-translate-x-1/2 lg:rounded-full lg:border-[5px] lg:border-white lg:bg-[#fffdf8]"
            >
              <img src={logo} alt="" />
            </a>
          </div>
          {/* Desktop right navigation */}
          <div className=" items-center lg:flex gap-5 xl:gap-[46px]">
            {rightLinks.map((link) => (
               <Link
  key={link.name}
  to={link.href}
  aria-current={isActive(link.href) ? "page" : undefined}
  className={`whitespace-nowrap border-b pb-1 text-xs xl:text-base uppercase transition-colors duration-200 ${
    isActive(link.href)
      ? "border-[#77895D] text-[#77895D]"
      : "border-transparent text-[#22201d] hover:text-[#77895D]"
  }`}
>
                {link.name}
              </Link>
            ))}
            
            <a
              href="/contact"
              className="inline-flex ms-5 xl:ms-[90px]  items-center gap-2 rounded-full bg-[#77895D] pl-2.5 py-2 pr-2 text-base text-white transition-colors hover:bg-[#65784e]"
            >
              GET IN TOUCH
              <span className="flex w-6 h-6 md:h-8 md:w-8  items-center justify-center rounded-full bg-white text-lg leading-none text-[#77895D]">
                <ArrowUpRightIcon size={16} />
              </span>
            </a>

          </div>


          

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full hover:bg-[#f5f4ef] lg:hidden"
          >
            <span className="h-px w-5 bg-[#414b32]" />
            <span className="h-px w-5 bg-[#414b32]" />
            <span className="h-px w-5 bg-[#414b32]" />
          </button>
        </nav>
      </header>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close navigation menu"
        tabIndex={menuOpen ? 0 : -1}
        onClick={closeMenu}
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 xl:hidden ${menuOpen
          ? "visible opacity-100"
          : "invisible pointer-events-none opacity-0"
          }`}
      />

      {/* Off-canvas drawer */}
      <aside
        id="mobile-menu"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[min(85%,360px)] flex-col bg-[#F7F2E8] p-6 shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between  pb-5">
          

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl hover:bg-[#ecebe3]"
          >
            ×
          </button>
        </div>

        <div className="mt-7 flex flex-col">
          {allLinks.map((link) => (
            
             <Link
  key={link.name}
  to={link.href} 
  onClick={closeMenu}
  tabIndex={menuOpen ? 0 : -1}
  aria-current={isActive(link.href) ? "page" : undefined}
  className={` className="border-b border-[#e6e3da] py-4 text-sm tracking-wide  transition-colors" ${
    isActive(link.href)
      ? "border-[#77895D] text-[#77895D]"
      : "border-transparent text-[#22201d] hover:text-[#77895D]"
  }`}
>
                {link.name}
              </Link>
          ))}
        </div>

        <a
          href="/contact"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
          className="mt-7 group mt-6 inline-flex w-fit items-center gap-3 rounded-full bg-[#77895D] py-2 md:py-2.5 pl-4 pr-2.5 font-inter text-[10px] font-medium uppercase text-white transition-colors duration-300 hover:bg-[#5E432D] sm:gap-4 sm:pl-5 sm:text-sm"
        >
          GET IN TOUCH
          <span className="flex w-6 h-6 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#77895D]">
            <ArrowUpRightIcon
                            size={16}
                            weight="bold"
                            className="transition-transform duration-300 group-hover:rotate-90"
                          />
          </span>
        </a>

        <p className="mt-auto pt-8 text-[10px] tracking-widest text-[#888777]">
          SOUTHERN CULINARY ITEMS & GIFTS
        </p>
      </aside>
    </>
  );
}