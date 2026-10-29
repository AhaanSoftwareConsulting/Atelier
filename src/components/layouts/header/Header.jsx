
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import logo from "../../../assets/logo.png";

const navItems = [
  { label: "HOME", href: "/" },
  { label: "COLLECTION", href: "/collection" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile drawer whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (href) => {
    if (href === "/") {
      return location.pathname === "/";
    }

    return (
      location.pathname === href ||
      location.pathname.startsWith(`${href}/`)
    );
  };

  const navLinkClass = (href) =>
    `rounded-full px-[15px] py-2.5 text-base font-medium tracking-wide transition-all duration-300 ${
      isActive(href)
        ? "bg-white/15 text-white"
        : "text-white hover:bg-white/10"
    }`;

  return (
    <>
      <header className="absolute inset-x-0 top-5 z-30 px-4 md:px-8 xl:px-[60px]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full bg-transparent lg:bg-[#FFFFFF1A] lg:p-5 lg:backdrop-blur-xl">
          {/* Logo */}
          <Link to="/" className="w-[120px] shrink-0 xl:w-[180px]">
            <img src={logo} alt="Atelier" className="h-auto w-full" />
          </Link>

          {/* Desktop navigation */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-4 lg:flex xl:gap-10"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={navLinkClass(item.href)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            to="/collection"
            className="hidden shrink-0 items-center justify-center rounded-full bg-[#8B755A] px-[30px] py-[15px] text-base font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#c0a783] hover:text-[#26170e] lg:inline-flex"
          >
            EXPLORE COLLECTION
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/15 lg:hidden"
          >
            <ListIcon size={23} weight="regular" />
          </button>
        </div>
      </header>

      {/* Mobile backdrop */}
      <button
        type="button"
        aria-label="Close navigation backdrop"
        onClick={() => setMenuOpen(false)}
        tabIndex={menuOpen ? 0 : -1}
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity duration-300 lg:hidden ${
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
        className={`fixed right-0 top-0 z-50 flex h-dvh w-[min(85%,360px)] flex-col bg-[#302116]/95 p-7 shadow-2xl backdrop-blur-xl transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end pb-6">
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
            className="flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
          >
            <XIcon size={22} weight="regular" />
          </button>
        </div>

        {/* Mobile navigation */}
        <nav className="mt-10 flex flex-col gap-3">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              tabIndex={menuOpen ? 0 : -1}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`rounded-lg px-4 py-4 text-xs tracking-[0.12em] transition-all duration-300 ${
                isActive(item.href)
                  ? "bg-white/15 text-white"
                  : "text-white/80 hover:bg-white/10 hover:pl-6 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/collection"
          tabIndex={menuOpen ? 0 : -1}
          className="mt-8 flex items-center justify-center rounded-full bg-[#8B755A] px-5 py-4 text-xs tracking-wide text-white shadow-sm transition-colors hover:bg-[#c0a783] hover:text-[#26170e]"
        >
          EXPLORE COLLECTION
        </Link>
      </aside>
    </>
  );
}
