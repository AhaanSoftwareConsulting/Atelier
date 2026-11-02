
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";

import { CaretLeft, CaretRight } from "@phosphor-icons/react";

import {
  fetchProductsByCategory,
  cleanDescription,
  formatProductPrice,
} from "../../../api/WooCommerceApi";

const BespokeWatches = ({id}) => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [paused, setPaused] = useState(false);
  const [animate, setAnimate] = useState(true);

  const cardRef = useRef(null);
  const touchStartX = useRef(0);

  // Fetch BespokeWatches category products
  useEffect(() => {
    let mounted = true;

    const getBespokeWatches = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await fetchProductsByCategory("bespoke-watches");

        if (mounted) {
          setProducts(data);
          setIndex(data.length);
        }
      } catch (err) {
        if (mounted) {
          setError("Unable to load BespokeWatches. Please try again.");
        }
      } finally {
        if (mounted) setLoading(false);
      }
    };

    getBespokeWatches();

    return () => {
      mounted = false;
    };
  }, []);

  // Responsive slider measurements
  useEffect(() => {
    const updateSlider = () => {
      const width = window.innerWidth;

      setVisibleCount(
        width >= 1024 ? 3 : width >= 640 ? 2 : 1
      );

      if (cardRef.current) {
        const width = cardRef.current.getBoundingClientRect().width;
        setCardStep(width + 24);
      }
    };

    updateSlider();

    const observer = new ResizeObserver(updateSlider);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    window.addEventListener("resize", updateSlider);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateSlider);
    };
  }, [products.length]);

  // Infinite slider navigation
  const canSlide = products.length > visibleCount;

  const nextSlide = useCallback(() => {
    if (!canSlide) return;

    setAnimate(true);
    setIndex((prev) => prev + 1);
  }, [canSlide]);

  const prevSlide = useCallback(() => {
    if (!canSlide) return;

    setAnimate(true);
    setIndex((prev) => prev - 1);
  }, [canSlide]);

  // Seamless loop reset
  const handleTransitionEnd = (event) => {
    if (event.propertyName !== "transform") return;

    const count = products.length;

    if (!canSlide || !count) return;

    if (index >= count * 2) {
      setAnimate(false);
      setIndex((prev) => prev - count);
    } else if (index < count) {
      setAnimate(false);
      setIndex((prev) => prev + count);
    }
  };

  // Re-enable transition after invisible reset
  useEffect(() => {
    if (animate) return;

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimate(true));
    });

    return () => cancelAnimationFrame(frame);
  }, [animate]);

  // Automatic slider
  useEffect(() => {
    if (paused || loading || !canSlide) return;

    const timer = setInterval(() => {
      setAnimate(true);
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused, loading, canSlide]);

  // Duplicate products for infinite looping
  const slides =
    products.length > 0
      ? [...products, ...products, ...products]
      : [];
  return (
    <section id={id} className="w-full overflow-hidden bg-[#F5F1EA] ">
      {/* ===== max-width container ===== */}
      <div className="relative mx-auto w-full max-w-[1440px]  px-4 md:px-8 xl:px-[60px] py-[90px]">
        {/* ---- top row: heading (left) + description (right) ---- */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-10">
          <h2 className="text-left font-heading text-[36px] font-normal uppercase leading-[1.1] text-[#272522] sm:text-[52px] xl:text-[65px]">
            Bespoke Watches
          </h2>

          <p className="max-w-[360px] text-left text-[16px] font-normal leading-normal text-[#272522] md:shrink-0">
            Choose a case, dial and finish. We build and regulate each watch
            before it ships.
          </p>
        </div>

        {/* BespokeWatches slider */}
        <div
          className="relative mt-8 lg:mt-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(event) => {
            if (!event.currentTarget.contains(event.relatedTarget)) {
              setPaused(false);
            }
          }}
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0].clientX;
          }}
          onTouchEnd={(event) => {
            const delta =
              touchStartX.current - event.changedTouches[0].clientX;

            if (Math.abs(delta) > 45) {
              delta > 0 ? nextSlide() : prevSlide();
            }
          }}
        >
          {loading ? (
            <p className="py-16 text-center text-sm text-[#82796d]">
              Loading BespokeWatches...
            </p>
          ) : error ? (
            <p className="py-12 text-center text-sm text-[#82796d]">
              {error}
            </p>
          ) : products.length === 0 ? (
            <p className="py-12 text-center text-sm text-[#82796d]">
              No products found in the BespokeWatches category.
            </p>
          ) : (
            <>
              {/* Slider track */}
              <div className="overflow-hidden">
                <div
                  className="flex gap-6"
                  style={{
                    transform: `translateX(-${index * cardStep}px)`,
                    transition: animate
                      ? "transform 500ms ease-in-out"
                      : "none",
                  }}
                  onTransitionEnd={handleTransitionEnd}
                >
                  {slides.map((product, slideIndex) => {
                    const isVisible =
                      slideIndex >= index &&
                      slideIndex < index + visibleCount;

                    const description = cleanDescription(
                      product.short_description ||
                      product.description ||
                      ""
                    );

                    return (
                      <article
                        key={`${product.id}-${slideIndex}`}
                        ref={slideIndex === 0 ? cardRef : null}
                        aria-hidden={!isVisible}
                        className="min-w-0 shrink-0 basis-full sm:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-48px)/3)]"
                      >
                        {/* Product image */}
                        <a
                          href={product.permalink}
                          tabIndex={isVisible ? 0 : -1}
                          aria-label={`View ${product.name}`}
                          className="group block aspect-[1.5/1] overflow-hidden bg-[#DED4C7]"
                        >
                          <img
                            src={product.images?.[0]?.src}
                            alt={
                              product.images?.[0]?.alt || product.name
                            }
                            loading={slideIndex < 4 ? "eager" : "lazy"}
                            draggable="false"
                            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          />
                        </a>

                        {/* Product title + price */}
                        <div className="mt-3 flex items-center justify-between gap-2">
                          <h3 className="min-w-0 truncate font-heading text-[16px] font-normal text-[#292622] sm:text-[18px]">
                            {product.name}
                          </h3>

                          <span className="shrink-0 text-[11px] font-semibold italic text-[#947653] sm:text-[12px]">
                            From {formatProductPrice(product)}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="mt-2 min-h-[20px] truncate text-[11px] leading-relaxed text-[#575149] sm:text-[12px]">
                          {description ||
                            "Discover the details of this handcrafted piece."}
                        </p>

                        {/* Buttons */}
                        <div className="mt-3 flex items-center gap-2 sm:gap-5">
                          <a
                            href={product.permalink}
                            tabIndex={isVisible ? 0 : -1}
                            className="flex  flex-1 items-center justify-center rounded-full border border-[#8D857A] px-12 py-5  font-medium tracking-wide text-[#292622] transition-all duration-300 hover:border-[#8B755A] hover:bg-[#8B755A] hover:text-white text-sm sm:text-base"
                          >
                            BUY NOW
                          </a>

                          <a
                            href={`${product.permalink}#customize`}
                            tabIndex={isVisible ? 0 : -1}
                            className="shrink-0  text-[#947653] underline underline-offset-4 transition-colors hover:text-[#493622] text-sm sm:text-base py-4"
                          >
                            Customize Now
                          </a>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>

              {/* Navigation arrows */}
              {canSlide && (
                <>
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous BespokeWatches"
                    className="absolute left-0 top-[48%] z-10 flex h-7 w-6 -translate-y-1/2 items-center justify-center rounded-r bg-[#8B755A] text-white transition-colors hover:bg-[#6f5b42]"
                  >
                    <CaretLeft size={18} weight="regular" />
                  </button>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next BespokeWatches"
                    className="absolute right-0 top-[48%] z-10 flex h-7 w-6 -translate-y-1/2 items-center justify-center rounded-l bg-[#8B755A] text-white transition-colors hover:bg-[#6f5b42]"
                  >
                    <CaretRight size={18} weight="regular" />
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BespokeWatches;
