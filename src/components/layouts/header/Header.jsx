import { useState } from "react";
import logo from "../../../assets/logo.png";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <>
      {/* Header positioned over the hero banner */}
      <header className="absolute left-0 right-0 top-24 z-50 px-4 sm:px-8 lg:px-12 xl:px-[70px] ">
        <nav className="relative mx-auto flex h-[60px] max-w-[1440px] items-center justify-between rounded-full bg-white px-5 shadow-sm sm:h-[73px] sm:pl-[34px] sm:pr-[14px]">

          {/* Desktop left navigation */}
          <div className="hidden items-center gap-5 xl:flex xl:gap-[46px]">
            {leftLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className={`whitespace-nowrap text-base uppercase transition-colors hover:text-[#77895D] ${index === 0
                  ? "border-b border-[#77895D] pb-1 text-[#77895D]"
                  : "text-[#22201d]"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Center logo */}
          <div>
            <a
              href="/"
              aria-label="Belle's Pantry home"
              className="absolute left-5 top-1/2 z-10 flex -translate-y-1/2 flex-col items-center justify-center leading-none xl:left-1/2 xl:h-[145px] xl:w-[145px] xl:-translate-x-1/2 xl:rounded-full xl:border-[5px] xl:border-white xl:bg-[#fffdf8]"
            >
              <img src={logo} alt="" />
            </a>
          </div>
          {/* Desktop right navigation */}
          <div className="hidden items-center gap-5 xl:flex xl:gap-[46px]">
            {rightLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="whitespace-nowrap  text-base uppercase text-[#22201d] transition-colors hover:text-[#77895D]"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="/contact"
              className="inline-flex ms-[90px]  items-center gap-2 rounded-full bg-[#77895D] pl-2.5 py-2 pr-2 text-base text-white transition-colors hover:bg-[#65784e]"
            >
              GET IN TOUCH
              <span className="flex h-10 w-10  items-center justify-center rounded-full bg-white text-lg leading-none text-[#77895D]">
                <ArrowUpRightIcon size={16} />
              </span>
            </a>

          </div>


          {/* Mobile/tablet shop link */}
          <a
            href="/shop"
            className="absolute left-1/2 -translate-x-1/2 text-[10px] font-medium text-[#414b32] xl:hidden"
          >
            SHOP NOW
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="ml-auto flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full hover:bg-[#f5f4ef] xl:hidden"
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
        className={`fixed right-0 top-0 z-[70] flex h-dvh w-[min(85%,360px)] flex-col bg-[#faf9f4] p-6 shadow-2xl transition-transform duration-300 ease-in-out xl:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between border-b border-[#e6e3da] pb-5">
          <a
            href="/"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            className="font-serif text-xl text-[#414b32]"
          >
            BELLE'S <span className="italic text-[#a16c4d]">Pantry</span>
          </a>

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
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
              className="border-b border-[#e6e3da] py-4 text-sm tracking-wide text-[#292a24] transition-colors hover:pl-2 hover:text-[#77895D]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="/contact"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
          className="mt-7 flex items-center justify-between rounded-full bg-[#77895D] py-3 pl-5 pr-2 text-sm text-white"
        >
          GET IN TOUCH
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-[#77895D]">
            ↗
          </span>
        </a>

        <p className="mt-auto pt-8 text-[10px] tracking-widest text-[#888777]">
          SOUTHERN CULINARY ITEMS & GIFTS
        </p>
      </aside>
    </>
  );
}