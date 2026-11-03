import React from "react";
// TODO: replace with your uploaded images (adjust the paths to where this file sits)
import mainBench from "../../../assets/main-bench.jpg"; // layout: 760 x 480
import handTools from "../../../assets/hand-tools.jpg"; // layout: 536 x 480
import watchAssembly from "../../../assets/watch-assembly.jpg"; // layout: 424 x 466
import stoneSetting from "../../../assets/stone-setting.jpg"; // layout: 424 x 466
import stitching from "../../../assets/stitching.jpg"; // layout: 424 x 466

/* one image tile: image + #0000004D overlay + label at bottom-left */
const Tile = ({ src, label, className = "" }) => (
    <div className={`relative overflow-hidden ${className}`}>
        <img
            src={src}
            alt={label}
            className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0000004D]" />
        <p className="absolute bottom-0 left-0 max-w-full p-5 font-heading text-[22px] font-normal uppercase leading-[1.1] text-white sm:p-6 sm:text-[26px] lg:p-[30px] lg:text-[30px]">
            {label}
        </p>
    </div>
);

const WorkHappens = () => {
    return (
        <section className="w-full overflow-hidden bg-[#EDE7DE] font-body">
            {/* ===== max-width container ===== */}
            <div className="mx-auto w-full max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-[60px] lg:py-[80px]">
                {/* ---- top row: heading (left) + description (right) ---- */}
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-10">
                    <h2 className="text-left font-heading text-[36px] font-normal uppercase leading-[1.1] text-[#272522] sm:text-[48px] md:shrink-0 md:text-[40px] lg:text-[52px] xl:text-[65px]">
                        Where the
                        <br />
                        work happens
                    </h2>

                    <div className="flex w-full max-w-[660px] flex-col gap-4 text-left text-[16px] font-normal leading-normal text-[#272522] md:min-w-0 md:flex-1">
                        <p>
                            Our studio is where design, materials, and attention to detail
                            come together. It is a space for exploring forms, refining
                            finishes, and considering how each element contributes to the
                            finished piece.
                        </p>
                        <p>We believe the process deserves as much care as the result.</p>
                    </div>
                </div>

                {/* ---- image grid ---- */}
                <div className="mt-8 flex flex-col gap-4 sm:gap-5 lg:mt-10 lg:gap-6">
                    {/* row 1: 760 x 480 + 536 x 480 */}
                    <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[760fr_536fr] lg:gap-6">
                        <Tile
                            src={mainBench}
                            label="The main bench"
                            className="aspect-[760/480]"
                        />
                        <Tile
                            src={handTools}
                            label="Hand tools"
                            className="aspect-[4/3] lg:aspect-auto"
                        />
                    </div>

                    {/* row 2: 3 x (424 x 466) */}
                    <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 lg:gap-6">
                        <Tile
                            src={watchAssembly}
                            label="Watch assembly"
                            className="aspect-[424/466]"
                        />
                        <Tile
                            src={stoneSetting}
                            label="Stone setting"
                            className="aspect-[424/466]"
                        />
                        <Tile
                            src={stitching}
                            label="Stitching"
                            className="aspect-[424/466]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkHappens;
