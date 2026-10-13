import { useForm } from "react-hook-form";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  ArrowUpRightIcon,
} from "@phosphor-icons/react";

import contactImage from "../../../../assets/contact.png";

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Contact form data:", data);

    // Connect your API here.
    reset();
  };

  return (
    <section className="w-full bg-white px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
      <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-12">

        {/* LEFT COLUMN: Contact information + promotional image */}
        <div className="flex min-w-0 flex-col gap-3">

          {/* Contact information card */}
          <div className="bg-[#F4F7F4] px-6 py-5 shadow-sm sm:px-7 sm:py-6">
            <h2 className="font-heading text-xl font-normal text-[#25251f]">
              CONTACT INFO
            </h2>

            {/* Address */}
            <div className="mt-4">
              <p className="font-highlight text-sm text-[#D99A5B]">
                Address
              </p>
              <p className="mt-1 text-xs leading-[1.7] text-[#6E6E73] sm:text-sm">
                BHANDARI CHOWK, GOLE BAZAR,
                <br />
                KHARAGPUR–721301
              </p>
            </div>

            {/* Phone */}
            <div className="mt-4">
              <p className="font-highlight text-sm text-[#D99A5B]">
                Phone
              </p>
              <p className="mt-1 text-xs leading-[1.7] text-[#6E6E73] sm:text-sm">
                7596996998
                <br />
                9163208826
              </p>
            </div>

            {/* Email */}
            <div className="mt-4">
              <p className="font-highlight text-sm text-[#D99A5B]">
                Email
              </p>
              <a
                href="mailto:hotelvinayak111@gmail.com"
                className="mt-1 block break-all text-xs text-[#6E6E73] hover:text-[#77895D] sm:text-sm"
              >
                hotelvinayak111@gmail.com
              </a>
            </div>

            {/* Social media */}
            <div className="mt-4">
              <p className="font-highlight text-sm text-[#D99A5B]">
                Social Media
              </p>

              <div className="mt-2 flex items-center gap-4 text-[#6E6E73]">
                <a href="#" aria-label="Facebook" className="transition-colors hover:text-[#77895D]">
                  <FacebookLogo size={17} />
                </a>
                <a href="#" aria-label="Instagram" className="transition-colors hover:text-[#77895D]">
                  <InstagramLogo size={17} />
                </a>
                <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-[#77895D]">
                  <LinkedinLogo size={17} />
                </a>
                <a href="#" aria-label="X" className="transition-colors hover:text-[#77895D]">
                  <XLogo size={17} />
                </a>
              </div>
            </div>
          </div>

          {/* Promotional image with text overlay */}
          <a
            href="/offers"
            className="group relative block min-h-[180px] overflow-hidden sm:min-h-[210px]"
          >
            <img
              src={contactImage}
              alt="Discover our special offers"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45 transition-colors duration-300 group-hover:bg-black/35" />

            {/* Centered promotional text */}
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <h3 className="font-heading text-2xl leading-tight text-white sm:text-3xl">
                Unlock Your{" "}
                <span className="text-[#E5A45D]">20%</span>
                <br />
                Savings Today
              </h3>
            </div>
          </a>
        </div>

        {/* RIGHT COLUMN: Contact form */}
        <div className="min-w-0 md:pt-1">
          <h1 className="font-heading text-3xl font-normal leading-tight text-[#171717] sm:text-4xl">
            CONTACT US
          </h1>

          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="mt-7"
          >
            {/* First name + Last name */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-1 block text-[11px] text-[#22201d]"
                >
                  First Name*
                </label>
                <input
                  id="firstName"
                  type="text"
                  placeholder="Enter Your First Name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  className="h-9 w-full min-w-0 border border-[#EAEAEA] bg-white px-2 text-xs outline-none transition focus:border-[#77895D]"
                />
                {errors.firstName && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-1 block text-[11px] text-[#22201d]"
                >
                  Last Name*
                </label>
                <input
                  id="lastName"
                  type="text"
                  placeholder="Enter Your Last Name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  className="h-9 w-full min-w-0 border border-[#EAEAEA] bg-white px-2 text-xs outline-none transition focus:border-[#77895D]"
                />
                {errors.lastName && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Phone + Email */}
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1 block text-[11px] text-[#22201d]"
                >
                  Phone*
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter Your phone Number"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9+\-()\s]{7,20}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                  className="h-9 w-full min-w-0 border border-[#EAEAEA] bg-white px-2 text-xs outline-none transition focus:border-[#77895D]"
                />
                {errors.phone && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-[11px] text-[#22201d]"
                >
                  Email Id*
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email ID"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                  className="h-9 w-full min-w-0 border border-[#EAEAEA] bg-white px-2 text-xs outline-none transition focus:border-[#77895D]"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div className="mt-4">
              <label
                htmlFor="message"
                className="mb-1 block text-[11px] text-[#22201d]"
              >
                Massage
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Enter Your Massage"
                {...register("message")}
                className="w-full resize-y border border-[#EAEAEA] bg-white px-2 py-2 text-xs outline-none transition focus:border-[#77895D]"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-[#77895D] py-1.5 pl-3 pr-1.5 text-[10px] font-medium uppercase text-white transition-colors hover:bg-[#65784e] disabled:cursor-not-allowed disabled:opacity-60"
            >
              SUBMIT NOW

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#77895D]">
                <ArrowUpRightIcon
                  size={14}
                  weight="bold"
                  className="transition-transform duration-300 group-hover:rotate-45"
                />
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
