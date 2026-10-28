import React, { useState } from 'react';
import leftArrow from '../../../assets/leftArrow.png';
import rightArrow from '../../../assets/rightArrow.png';
import slide1 from '../../../assets/slide1.jpg';
import slide2 from '../../../assets/slide2.jpg';
import slide3 from '../../../assets/slide3.jpg';

const galleryImages = [
    {
        id: 1,
        title: "Cozy Dining Interior",
        image: slide1
    },
    {
        id: 2,
        title: "Traditional Street Food Prep",
        image: slide2
    },
    
    {
        id: 3,
        title: "Ambience & Lighting",
        image: slide3
    }
];

const ArtSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
        );
    };

    const handleNext = () => {
        setCurrentIndex(
            (prev) => (prev + 1) % galleryImages.length
        );
    };

    const prevIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;

    const nextIndex =
        (currentIndex + 1) % galleryImages.length;

    return (
        <section className="overflow-hidden px-4 md:px-8 xl:px-[60px] py-[90px]">
            <div className="mx-auto max-w-[1440px] text-center">

                {/* Section heading */}
                <h2 className="mb-6 font-heading text-3xl font-normal leading-tight text-[272522]   sm:text-[46px] lg:text-[55px] xl:text-[75px]">
                    THE ART OF <br className='hidden lg:block'/> THE EXTRAORDINARY
                </h2>

                {/* Gallery button */}
                <a
                    href="#collection"

                    className="mt-5 xl:mt-10 rounded-full items-center cursor pointer justify-center bg-[#8B755A] px-5 py-3 text-sm xl:px-[30px] xl:py-[15px] xl:text-base font-medium tracking-wide text-white transition-all duration-300 hover:bg-[#c0a783] hover:text-[#26170e] inline-flex"
                >
                    NEW THE FULL COLLECTION
                </a>

                {/* Image carousel */}
                <div className="relative mx-auto mt-[45px] flex gap-4 min-h-[260px] w-full max-w-[1280px] items-center justify-center overflow-hidden lg:min-h-[400px] xl:min-h-[516px]">

                    {/* Previous image: full-size landscape, tilted left */}
                    <div
                        className="pointer-events-none absolute -left-[5%] w-[15%] xl:left-[-16%] top-1/2 z-10 hidden xl:w-[30%] -translate-y-1/2 -rotate-[15deg] overflow-hidden grayscale-[80%] sepia-[25%] contrast-[85%] opacity-35 transition-all duration-700 ease-in-out sm:block sm:h-[200px] lg:h-[325px]"
                        aria-hidden="true"
                    >
                        <img
                            src={galleryImages[prevIndex].image}
                            alt=""
                            className="h-full w-full object-cover"
                            draggable="false"
                        />
                    </div>

                    {/* Active center image */}
                    <div
                        key={galleryImages[currentIndex].id}
                        className="relative z-20 h-[240px] w-[95%] sm:w-[68%] xl:w-[80%] max-w-[800px] overflow-hidden lg:h-[400px] xl:h-[516px]"
                    >
                        <img
                            src={galleryImages[currentIndex].image}
                            alt={galleryImages[currentIndex].title}
                            className="h-full w-full animate-[galleryFadeIn_500ms_ease-in-out] object-cover object-center"
                            draggable="false"
                        />
                    </div>

                    {/* Next image: full-size landscape, tilted right */}
                    <div
                        className="pointer-events-none absolute -right-[5%] w-[15%]  top-1/2 z-10 hidden xl:right-[-16%] top-1/2 z-10 hidden xl:w-[30%] -translate-y-1/2 rotate-[15deg] overflow-hidden grayscale-[80%] sepia-[25%] contrast-[85%] opacity-35 transition-all duration-700 ease-in-out sm:block sm:h-[200px] lg:h-[325px]"
                        aria-hidden="true"
                    >
                        <img
                            src={galleryImages[nextIndex].image}
                            alt=""
                            className="h-full w-full object-cover"
                            draggable="false"
                        />
                    </div>
                </div>

                {/* Reference-style navigation */}
                <div className="relative mx-auto gap-6 lg:gap-16 mt-7 flex items-center justify-center sm:mt-8">

                    <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous slide"
                        className="relative z-10  items-center  cursor-pointer"
                    >
                        <img
                            src={leftArrow}
                            alt=""
                            className="h-[80%] w-[80%] lg:h-full lg:w-full object-contain"
                            draggable="false"
                        />
                    </button>



                    <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next slide"
                        className="relative z-10  items-center cursor-pointer"
                    >
                        <img
                            src={rightArrow}
                            alt=""
                            className="h-[80%] w-[80%] lg:h-full lg:w-full object-contain"
                            draggable="false"
                        />
                    </button>
                </div>

            </div>


        </section>
    );
};

export default ArtSlider;

