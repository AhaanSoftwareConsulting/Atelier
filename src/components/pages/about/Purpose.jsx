import React, { useEffect, useState } from "react";
// TODO: replace with your uploaded image and video (adjust the paths to where this file sits)
import purposeImage from "../../../assets/purpose.png"; // layout: 1320 x 775
const videoSrc = "/videos/purpose.mp4";

const Purpose = () => {
  const [open, setOpen] = useState(false);

  // close the video popup with the Escape key, and lock page scroll while it is open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section className="w-full overflow-hidden bg-[#F5F1EA] font-body">
      {/* ===== max-width container ===== */}
      <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-[60px] lg:py-[80px]">
        {/* ---- heading + subtext (centered) ---- */}
        <div className="text-center text-[#272522]">
          <h2 className="font-heading text-[32px] font-normal uppercase leading-[1.1] sm:text-[48px] xl:text-[65px]">
            Every detail has a purpose.
          </h2>
          <p className="mx-auto mt-4 max-w-[810px] text-[16px] font-normal leading-normal">
            Look closer at the materials, the process, and the finishing touches
            that give each piece its character.
          </p>
        </div>

        {/* ---- image (1320 x 775 at full size) + video button ---- */}
        <div className="relative mt-8 lg:mt-10">
          <div className="aspect-[1320/775] w-full overflow-hidden">
            <img
              src={purposeImage}
              alt="Watchmaker inspecting a pocket watch"
              className="h-full w-full object-cover"
            />
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Play video"
            className="group absolute bottom-7 right-7 flex size-14 cursor-pointer items-center justify-center sm:bottom-10 sm:right-10 sm:size-[72px] lg:bottom-12 lg:right-12"
          >
            {/* ripple rings: #FFFFFF -> #FFFFFF1A, expanding outward */}
            <span className="pointer-events-none absolute inset-0 animate-ripple rounded-full motion-reduce:hidden" />
            <span className="pointer-events-none absolute inset-0 animate-ripple rounded-full [animation-delay:0.8s] motion-reduce:hidden" />
            <span className="pointer-events-none absolute inset-0 animate-ripple rounded-full [animation-delay:1.6s] motion-reduce:hidden" />

            {/* button */}
            <span className="relative flex size-full items-center justify-center rounded-full bg-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-active:scale-95">
              <svg
                viewBox="0 0 24 24"
                className="ml-1 size-6 fill-[#8B755A] sm:size-7"
                aria-hidden="true"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* ===== video popup ===== */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-4 sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1100px]"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close video"
              className="absolute -top-10 right-0 cursor-pointer text-[16px] font-medium uppercase text-white transition-opacity hover:opacity-70"
            >
              Close ✕
            </button>
            <video
              src={videoSrc}
              controls
              autoPlay
              className="aspect-video w-full bg-black"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Purpose;
