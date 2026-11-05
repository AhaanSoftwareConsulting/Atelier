
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const enquiryTypes = [
    "General Questions",
    "Ring",
    "Bespoke Watch",
    "Leather Strap",
    "Existing Order",
];

const enquiryOptions = {
    "General Questions": [
        "Product Information",
        "Pricing & Availability",
        "Customisation",
        "Other",
    ],
    Ring: [
        "Ring Collection",
        "Custom Ring Design",
        "Ring Size & Fitting",
        "Materials & Gemstones",
    ],
    "Bespoke Watch": [
        "Bespoke Watch Design",
        "Watch Customisation",
        "Materials & Movement",
        "Pricing & Availability",
    ],
    "Leather Strap": [
        "Leather Strap Collection",
        "Custom Leather Strap",
        "Strap Size & Fitting",
        "Leather & Colour Options",
    ],
    "Existing Order": [
        "Order Status",
        "Shipping & Delivery",
        "Return & Exchange",
        "Other Order Query",
    ],
};

const ContactSection = () => {
    const [activeTab, setActiveTab] = useState("General Questions");
    const [success, setSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const onSubmit = async (data) => {
        setSuccess(false);

        const formData = {
            ...data,
            enquiryType: activeTab,
        };

        try {
            // Connect this to your backend or email API.
            console.log("Enquiry submitted:", formData);

            setSuccess(true);
            reset();
        } catch (error) {
            console.error("Submission error:", error);
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        setSuccess(false);
        reset();
    };

    const inputClass =
        "w-full border-0 border-b border-[#D9D2C9] bg-transparent py-3 text-sm text-[#927B5F] outline-none transition-colors duration-300 placeholder:text-sm  placeholder:tracking-[0.04em] placeholder:text-[#927B5F] focus:border-[#927B5F]";

    return (
        <section className="w-full bg-[#F5F1E9] overflow-hidden">
            <div className="mx-auto max-w-[1440px] relative px-4 md:px-8 xl:px-[60px] py-[90px]">
                <div className=" grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-[9%]">

                    {/* LEFT GRID */}
                    <div className="flex flex-col items-start">

                        {/* Direct Contact */}
                        <div>
                            <p className="text-base font-normal uppercase tracking-[0.08em] text-[#39342F]">
                                Write to us
                            </p>

                            <h2 className="mt-1 font-heading text-2xl font-semibold uppercase leading-tight text-[#39342F]">
                                Direct Contact
                            </h2>

                            <div className="mt-4 space-y-5 text-base">
                                <div>
                                    <p className=" uppercase tracking-wide text-[#82796D]">
                                        Email
                                    </p>
                                    <a
                                        href="mailto:atelier@example.com"
                                        className="mt-2 inline-block  text-[#292622] transition-colors hover:text-[#927B5F]"
                                    >
                                        atelier@example.com
                                    </a>
                                </div>

                                <div>
                                    <p className=" uppercase tracking-wide text-[#82796D]">
                                        Phone
                                    </p>
                                    <a
                                        href="tel:+911XXXXXXXXX"
                                        className="mt-2 inline-block  text-[#292622] transition-colors hover:text-[#927B5F]"
                                    >
                                        +1 XXX XXX XXXX
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Studio Map */}
                        <div className="mt-7 ">
                            <p className="  text-base font-normal uppercase tracking-[0.08em] text-[#39342F]">
                                Visit
                            </p>

                            <h2 className="mt-1 font-heading  text-2xl  font-semibold uppercase leading-tight text-[#39342F]">
                                The Studio
                            </h2>

                            <a
                                href="#studio-location"
                                aria-label="View studio location"
                                className="relative mt-2 block aspect-[1.9/1] w-[156px] overflow-hidden bg-[#E5E5DF] sm:w-[180px]"
                            >
                                {/* Map roads */}
                                <div className="absolute left-[18%] top-[-25%] h-[150%] w-[2px] rotate-[-17deg] bg-[#F8F7F2]" />
                                <div className="absolute left-[63%] top-[-25%] h-[150%] w-[2px] rotate-[-12deg] bg-[#F8F7F2]" />

                                <div className="absolute left-[-15%] top-[36%] h-[2px] w-[130%] rotate-[18deg] bg-[#F8F7F2]" />
                                <div className="absolute left-[-15%] top-[67%] h-[2px] w-[130%] rotate-[-7deg] bg-[#F8F7F2]" />

                                <div className="absolute left-[18%] top-[-25%] h-[150%] w-[5px] rotate-[-17deg] border-x border-[#D2D2CB]" />
                                <div className="absolute left-[63%] top-[-25%] h-[150%] w-[5px] rotate-[-12deg] border-x border-[#D2D2CB]" />

                                {/* Location marker */}
                                <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                                    <span className="absolute h-[19px] w-[19px] rounded-full border border-[#A78C69]" />
                                    <span className="h-[9px] w-[9px] rounded-full bg-[#987247]" />
                                </div>

                                <span className="absolute bottom-1.5 left-2 text-[5px] uppercase tracking-[0.2em] text-[#99958D]">
                                    Studio Location
                                </span>
                            </a>
                        </div>

                        {/* Social Media */}
                        <div className="mt-7 ">
                            <p className="  text-base font-normal uppercase tracking-[0.08em] text-[#39342F]">
                                Follow
                            </p>

                            <h2 className="mt-1 font-heading  text-2xl  font-semibold uppercase leading-tight text-[#39342F]">
                                Behind the Bench
                            </h2>

                            <div className="mt-8 flex flex-wrap gap-1.5">
                                {[
                                    { name: "Facebook", url: "#" },
                                    { name: "Instagram", url: "#" },
                                    { name: "Twitter", url: "#" },
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="rounded-full border border-[#D8CABC] px-4 py-[7px] text-sm uppercase tracking-wide text-[#806D56] transition-all duration-300 hover:border-[#927B5F] hover:bg-[#927B5F] hover:text-white"
                                    >
                                        {social.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT GRID */}
                    <div className="w-full">

                        {/* Heading */}
                        <div>
                            <h2 className="font-heading text-2xl font-semibold uppercase leading-tight text-[#39342F]">
                                How Can We Help You?
                            </h2>

                            <p className="mt-1 text-base text-[#6F685F]">
                                Share a few details and we'll be in touch.
                            </p>
                        </div>

                        {/* Enquiry Tabs */}
                        <div
                            role="tablist"
                            aria-label="Select enquiry type"
                            className="mt-4 flex flex-wrap items-center gap-1.5"
                        >
                            {enquiryTypes.map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    role="tab"
                                    aria-selected={activeTab === tab}
                                    onClick={() => handleTabChange(tab)}
                                    className={`whitespace-nowrap rounded-md px-[11px] py-[7px] text-base transition-all duration-300 ${activeTab === tab
                                            ? "bg-[#927B5F] text-white"
                                            : "bg-transparent text-[#39342F] hover:bg-[#E9E1D6]"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>

                        {/* Enquiry Form */}
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            noValidate
                            className="mt-7"
                        >
                            {/* First and Last Name */}
                            <div className="grid grid-cols-1 gap-x-5 sm:grid-cols-2">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="FIRST NAME*"
                                        aria-label="First name"
                                        {...register("firstName", {
                                            required: "First name is required",
                                        })}
                                        className={inputClass}
                                    />
                                    {errors.firstName && (
                                        <p className="mt-1 text-[9px] text-red-700">
                                            {errors.firstName.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="text"
                                        placeholder="LAST NAME*"
                                        aria-label="Last name"
                                        {...register("lastName", {
                                            required: "Last name is required",
                                        })}
                                         className={inputClass}
                                    />
                                    {errors.lastName && (
                                        <p className="mt-1 text-[9px] text-red-700">
                                            {errors.lastName.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Email and Phone */}
                            <div className="mt-2 grid grid-cols-1 gap-x-5 sm:grid-cols-2">
                                <div>
                                    <input
                                        type="email"
                                        placeholder="EMAIL ADDRESS*"
                                        aria-label="Email address"
                                        {...register("email", {
                                            required: "Email address is required",
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: "Enter a valid email address",
                                            },
                                        })}
                                         className={inputClass}
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-[9px] text-red-700">
                                            {errors.email.message}
                                        </p>
                                    )}
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        placeholder="PHONE NUMBER*"
                                        aria-label="Phone number"
                                        {...register("phone", {
                                            required: "Phone number is required",
                                            pattern: {
                                                value: /^[+]?[\d\s()-]{7,20}$/,
                                                message: "Enter a valid phone number",
                                            },
                                        })}
                                         className={inputClass}
                                    />
                                    {errors.phone && (
                                        <p className="mt-1 text-[9px] text-red-700">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Order number — existing orders only */}
                            {activeTab === "Existing Order" && (
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        placeholder="ORDER NUMBER"
                                        aria-label="Order number"
                                        {...register("orderNumber", {
                                            required: "Order number is required",
                                        })}
                                        className={inputClass}
                                    />
                                    {errors.orderNumber && (
                                        <p className="mt-1 text-[9px] text-red-700">
                                            {errors.orderNumber.message}
                                        </p>
                                    )}
                                </div>
                            )}

                            {/* Enquiry subject */}
                            <div className="mt-2">
                                <select
                                    aria-label="What is your enquiry about?"
                                    defaultValue=""
                                    {...register("enquiryAbout", {
                                        required: "Please select an enquiry topic",
                                    })}
                                    className={inputClass}
                                >
                                    <option value="" disabled>
                                        WHAT IS YOUR ENQUIRY ABOUT?*
                                    </option>

                                    {enquiryOptions[activeTab].map((option) => (
                                        <option key={option} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </select>

                                {errors.enquiryAbout && (
                                    <p className="mt-1 text-[9px] text-red-700">
                                        {errors.enquiryAbout.message}
                                    </p>
                                )}
                            </div>

                            {/* Message */}
                            <div className="mt-2">
                                <textarea
                                    rows={2}
                                    placeholder="TELL US SOMETHING"
                                    aria-label="Your message"
                                    {...register("message", {
                                        required: "Please tell us something about your enquiry",
                                    })}
                                    className={`${inputClass} min-h-[65px] resize-y`}
                                />

                                {errors.message && (
                                    <p className="mt-1 text-[9px] text-red-700">
                                        {errors.message.message}
                                    </p>
                                )}
                            </div>

                            {/* Submit */}
                            <div className="mt-4 flex flex-wrap items-center gap-3">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="rounded-full bg-[#927B5F] px-5 py-[10px] text-base font-medium uppercase tracking-wide text-white transition-all duration-300 hover:bg-[#705A41] disabled:opacity-60"
                                >
                                    {isSubmitting ? "Sending..." : "Send Enquiry"}
                                </button>

                                {success && (
                                    <p className="text-base text-green-800" role="status">
                                        Thank you! Your enquiry has been received.
                                    </p>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
