
import { useState } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import logo from "../../../assets/logo.png";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "COLLECTION", href: "#collection" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [activeItem, setActiveItem] = useState("HOME");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (label) => {
    setActiveItem(label);
    setMenuOpen(false);
  };

  return (
    <>
      <header className="absolute inset-x-0 top-5 z-30 px-4 md:px-8 xl:px-[60px]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full bg-transparent lg:bg-[#FFFFFF1A]  lg:p-5 lg:backdrop-blur-xl ">
          {/* Logo */}
          <a
            href="#home"
            onClick={() => handleNavigation("HOME")}
            className="shrink-0 w-[120px] xl:w-[180px]"
          >
            <img src={logo} alt="" />
          </a>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-4 xl:gap-10 lg:flex"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => handleNavigation(item.label)}
                aria-current={
                  activeItem === item.label ? "page" : undefined
                }
                className={`rounded-lg px-[15px] py-2.5 text-base font-medium tracking-wide  transition-all duration-300 ${
                  activeItem === item.label
                    ? "bg-[#FFFFFF1A] text-white rounded-full"
                    : "text-white hover:bg-[#FFFFFF1A]"
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#collection"
            onClick={() => setMenuOpen(false)}
            className="hidden shrink-0 items-center justify-center rounded-full bg-[#8B755A] px-[30px] py-[15px] text-base font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#c0a783] hover:text-[#26170e] lg:inline-flex"
          >
            EXPLORE COLLECTION
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/15 lg:hidden"
          >
            <ListIcon size={23} strokeWidth={1.5} />
          </button>
        </div>
      </header>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close navigation backdrop"
        onClick={() => setMenuOpen(false)}
        tabIndex={menuOpen ? 0 : -1}
        className={`fixed inset-0 z-40 bg-black/5 transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile off-canvas drawer */}
      <aside
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(85%,360px)] flex-col bg-whie/10 backdrop-blur-xl p-7 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between  pb-6">
          
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white hover:bg-white/10"
          >
            <XIcon size={22} strokeWidth={1.5} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => handleNavigation(item.label)}
              aria-current={
                activeItem === item.label ? "page" : undefined
              }
              className={`rounded-lg px-4 py-4 text-xs tracking-[0.12em] transition-all duration-300 ${
                activeItem === item.label
                  ? "bg-white/15 text-white"
                  : "text-white hover:bg-white/10 hover:pl-6"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#collection"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
          className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#8B755A] px-5 py-4 text-[10px] tracking-wide text-white transition-colors hover:bg-[#c0a783] hover:text-[#26170e] shadow-sm"
        >
          EXPLORE COLLECTION
          
        </a>
      </aside>
    </>
  );
}
