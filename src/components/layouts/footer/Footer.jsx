import { useEffect, useRef, useState } from "react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Collection", href: "#" },
  { label: "Contact", href: "#" },
];

const products = [
  { label: "Signature Rings", href: "#" },
  { label: "Bespoke Watches", href: "#" },
  { label: "Leather Watch Straps", href: "#" },
];

const social = [
  { label: "Facebook", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
];

const topics = ["Sizing", "Materials", "Bespoke piece", "Other"];

/* ---------- small helpers ---------- */

const labelCls =
  "block text-[14px] font-medium uppercase tracking-wide text-[#8B755A]";
const fieldCls =
  "w-full bg-transparent border-0 border-b border-solid border-b-[#FFFFFF80] " +
  "pt-3 pb-2 text-[16px] text-white outline-none transition-colors " +
  "focus:border-b-white";

const menuLink =
  "group relative inline-block text-[16px] font-medium uppercase transition-all duration-300 " +
  "hover:translate-x-1";
const underline =
  "absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current " +
  "transition-transform duration-300 group-hover:scale-x-100";

function Field({ label, id, children }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={labelCls}>
        {label}
      </label>
      {children}
    </div>
  );
}

function MenuColumn({ title, items, linkColor, hoverColor }) {
  return (
    <div>
      <h4 className="text-[20px] font-normal text-[#6B655B]">{title}</h4>
      <ul className="mt-6 flex flex-col gap-5">
        {items.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`${menuLink} ${linkColor} ${hoverColor}`}
            >
              {item.label}
              <span className={underline} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* animates the divider from 0 to full width when it scrolls into view */
function AnimatedDivider() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`h-px w-full origin-left bg-[#FFFFFF80] transition-transform duration-1000 ease-out ${visible ? "scale-x-100" : "scale-x-0"
        }`}
    />
  );
}

/* ---------- footer ---------- */

export default function Footer() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    topic: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form); // TODO: send to your API
  };

  return (
    <footer className="w-full overflow-hidden bg-[#272522] font-body text-white">
      {/* max-width container */}
      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-[60px]">
        {/* ===== top: form + menus ===== */}
        <div className="grid grid-cols-1 gap-14 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-16 lg:pt-16 xl:gap-24">
          {/* ---- left: heading + form ---- */}
          <div className="max-w-[660px]">
            <h2 className="font-heading text-[32px] font-normal uppercase leading-[1.1] text-white sm:text-[40px] lg:text-[50px]">
              Find the piece
              <br />
              that feels like yours.
            </h2>

            <p className="mt-5 max-w-[640px] text-[16px] font-normal leading-normal text-white">
              Questions about sizing, materials or a bespoke piece? Send a note
              and we will reply within two working days.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-10 flex flex-col gap-8"
              noValidate
            >
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
                <Field label="First Name*" id="firstName">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className={fieldCls}
                  />
                </Field>
                <Field label="Last Name*" id="lastName">
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className={fieldCls}
                  />
                </Field>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
                <Field label="Email Address*" id="email">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={fieldCls}
                  />
                </Field>
                <Field label="Phone Number*" id="phone">
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    className={fieldCls}
                  />
                </Field>
              </div>

              <Field label="Topic*" id="topic">
                <div className="relative">
                  <select
                    id="topic"
                    name="topic"
                    required
                    value={form.topic}
                    onChange={handleChange}
                    className={`${fieldCls} cursor-pointer appearance-none pr-6`}
                  >
                    <option value="" className="bg-[#272522]" />
                    {topics.map((t) => (
                      <option key={t} value={t} className="bg-[#272522]">
                        {t}
                      </option>
                    ))}
                  </select>
                  <svg
                    className="pointer-events-none absolute right-0 top-1/2 h-4 w-4 -translate-y-1/4 text-[#FFFFFF80]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </Field>

              <Field label="Tell us something" id="message">
                <textarea
                  id="message"
                  name="message"
                  rows={2}
                  value={form.message}
                  onChange={handleChange}
                  className={`${fieldCls} resize-none`}
                />
              </Field>

              <button
                type="submit"
                className="cursor-pointer mt-2 w-full self-start rounded-full bg-[#8B755A] px-8 py-3.5 text-[16px] font-medium uppercase text-white transition-all duration-300 hover:bg-[#A08868] hover:shadow-lg active:scale-95 sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* ---- right: menus (2 columns) ---- */}
          <div className="grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:pl-4 lg:pt-1 xl:pl-10">
            <MenuColumn
              title="Quick Links"
              items={quickLinks}
              linkColor="text-[#F4F1EA]"
              hoverColor="hover:text-[#8B755A]"
            />

            {/* contact us */}
            <div>
              <h4 className="text-[20px] font-normal text-[#6B655B]">
                Contact Us
              </h4>
              <div className="mt-6 flex flex-col gap-5">
                <a
                  href="tel:+XXXXXXXXXXX"
                  className="w-fit text-[16px] font-medium text-[#F4F1EA] transition-colors duration-300 hover:text-[#8B755A]"
                >
                  +1 XXX XXX XXXX
                </a>
                <a
                  href="mailto:atelier@example.com"
                  className="w-fit break-all text-[16px] font-medium text-[#F4F1EA] transition-colors duration-300 hover:text-[#8B755A]"
                >
                  atelier@example.com
                </a>
                <p className="max-w-[260px] text-[16px] font-medium leading-relaxed text-[#F4F1EA]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <MenuColumn
              title="Products"
              items={products}
              linkColor="text-[#F4F1EA]"
              hoverColor="hover:text-[#8B755A]"
            />

            <MenuColumn
              title="Follow Us"
              items={social}
              linkColor="text-[#8B755A]"
              hoverColor="hover:text-white"
            />
          </div>
        </div>

        {/* ===== divider ===== */}
        <div className="mt-14 lg:mt-16">
          <AnimatedDivider />
        </div>

        {/* ===== copyright row ===== */}
        <div className="flex flex-col items-start justify-between gap-3 py-6 sm:flex-row sm:items-center">
          <p className="text-[14px] font-normal uppercase text-[#F4F1EA] sm:text-[16px]">
            © 2026 Atelier. All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[14px] font-normal text-[#F4F1EA] sm:text-[16px]">
            <a href="/terms" className="transition-colors duration-300 hover:text-[#8B755A]">
              T&amp;C
            </a>
            <span aria-hidden="true" className="h-4 w-px bg-[#F4F1EA]" />
            <a href="/privacy" className="transition-colors duration-300 hover:text-[#8B755A]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>

      {/* ===== big ATELIER wordmark (scales with viewport, never overflows) ===== */}
      <div className="mx-auto w-full max-w-[1440px] overflow-hidden">
        <svg
          viewBox="0 0 1440 220"
          className="block h-auto w-full select-none"
          aria-hidden="true"
          preserveAspectRatio="xMidYMid meet"
        >
          <text
            x="0"
            y="215"
            textLength="1440"
            lengthAdjust="spacingAndGlyphs"
            className="fill-[#8B755A] font-heading"
            style={{ fontSize: 300, fontWeight: 400 }}
          >
            ATELIER
          </text>
        </svg>
      </div>
    </footer>
  );
}
