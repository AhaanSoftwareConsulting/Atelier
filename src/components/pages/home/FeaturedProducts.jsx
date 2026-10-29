
import { useState, useEffect, useRef, useCallback } from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const API_URL =
    "https://soumi.ahaanmedia.com/wp-json/wc/store/v1/products?featured=true&per_page=12";

function stripHtml(html = "") {
    return html
        .replace(/<[^>]*>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#39;|&apos;/g, "'")
        .replace(/\s+/g, " ")
        .trim();
}

export default function FeaturedProducts() {
    const [products, setProducts] = useState([]);
    const [index, setIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);
    const [cardStep, setCardStep] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [paused, setPaused] = useState(false);
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const cardRef = useRef(null);
    const touchStartX = useRef(0);

    // Fetch featured products from WooCommerce.
    useEffect(() => {
        const controller = new AbortController();

        async function fetchProducts() {
            try {
                const response = await fetch(API_URL, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error(`Request failed: ${response.status}`);
                }

                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error("Invalid WooCommerce response");
                }

                const featured = data.filter(
                    (product) => product.images?.[0]?.src
                );

                setProducts(featured);
                setIndex(featured.length);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error("Featured products:", err);
                    setError("Unable to load featured products.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        }

        fetchProducts();
        return () => controller.abort();
    }, []);

    // Measure the card width and responsive number of visible products.
    useEffect(() => {
        const measure = () => {
            const width = window.innerWidth;
            setVisibleCount(width >= 1024 ? 4 : width >= 640 ? 2 : 1);

            if (cardRef.current) {
                setCardStep(
                    cardRef.current.getBoundingClientRect().width + 12
                );
            }
        };

        measure();

        const observer = new ResizeObserver(measure);
        if (cardRef.current) observer.observe(cardRef.current);

        window.addEventListener("resize", measure);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", measure);
        };
    }, [products.length]);

    const canSlide = products.length > visibleCount;

    const nextSlide = useCallback(() => {
        if (!canSlide) return;
        setTransitionEnabled(true);
        setIndex((current) => current + 1);
    }, [canSlide]);

    const previousSlide = useCallback(() => {
        if (!canSlide) return;
        setTransitionEnabled(true);
        setIndex((current) => current - 1);
    }, [canSlide]);

    // Jump between cloned slides without showing a visual reset.
    const handleTransitionEnd = () => {
        const count = products.length;
        if (!count || !canSlide) return;

        if (index >= count * 2) {
            setTransitionEnabled(false);
            setIndex((current) => current - count);
        } else if (index < count) {
            setTransitionEnabled(false);
            setIndex((current) => current + count);
        }
    };

    useEffect(() => {
        if (transitionEnabled) return;

        const frame = requestAnimationFrame(() => {
            requestAnimationFrame(() => setTransitionEnabled(true));
        });

        return () => cancelAnimationFrame(frame);
    }, [transitionEnabled]);

    // Automatic infinite movement.
    useEffect(() => {
        if (paused || loading || !canSlide) return;

        const timer = window.setInterval(() => {
            setTransitionEnabled(true);
            setIndex((current) => current + 1);
        }, 4000);

        return () => window.clearInterval(timer);
    }, [paused, loading, canSlide]);

    // Clone three sets for a continuous track.
    const slides =
        products.length > 0
            ? [...products, ...products, ...products]
            : [];

    return (
        <div aria-label="Featured products" className="relative mx-auto max-w-[1440px] px-4 md:px-8 xl:px-[60px] py-[90px]">
            <h2 className="mb-6 text-center font-heading text-3xl md:text-5xl font-normal uppercase leading-[1.12] tracking-[-0.8px] xl:text-[65px]">
                Featured Products
            </h2>

            {loading ? (
                <p className="py-16 text-center font-heading text-lg">
                    Discovttion...
                </p>
            ) : error ? (
                <p role="alert" className="py-12 text-center text-sm">
                    {error}
                </p>
            ) : products.length === 0 ? (
                <p className="py-12 text-center text-sm">
                    No featured products are available right now.
                </p>
            ) : (
                <div
                    className="relative"
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
                            delta > 0 ? nextSlide() : previousSlide();
                        }
                    }}
                >
                    <div className="overflow-hidden">
                        <div
                            className="flex gap-3"
                            style={{
                                transform: `translateX(-${index * cardStep}px)`,
                                transition: transitionEnabled
                                    ? "transform 500ms ease-in-out"
                                    : "none",
                            }}
                            onTransitionEnd={handleTransitionEnd}
                        >
                            {slides.map((product, slideIndex) => {
                                const isVisible =
                                    slideIndex >= index &&
                                    slideIndex < index + visibleCount;

                                return (
                                    <article
                                        key={`${product.id}-${slideIndex}`}
                                        ref={slideIndex === 0 ? cardRef : null}
                                        aria-hidden={!isVisible}
                                        className="min-w-0 shrink-0 basis-full sm:basis-[calc((100%-12px)/2)] lg:basis-[calc((100%-36px)/4)]"
                                    >
                                        <a
                                            href={product.permalink}
                                            tabIndex={isVisible ? 0 : -1}
                                            aria-label={`View ${product.name}`}
                                            className="group block aspect-square overflow-hidden bg-[#e7ddce]"
                                        >
                                            <img
                                                src={product.images[0].src}
                                                alt={product.images[0].alt || product.name}
                                                loading={slideIndex < 4 ? "eager" : "lazy"}
                                                draggable="false"
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                            />
                                        </a>

                                        <h3 className="mt-2 truncate font-heading text-2xl font-normal leading-normal">
                                            {product.name}
                                        </h3>

                                        <p className="mt- overflow-hidden text-base leading-[1.6] text-[#272522] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                                            {stripHtml(
                                                product.description ||
                                                
                                                ""
                                            ) || "Discover the details of this piece."}
                                        </p>

                                        <p className="mt-1 truncate text-sm text-[#272522]/70">
                                            {stripHtml(
                                                product.short_description ||
                                                ""
                                            ) || "Discover the details of this piece."}
                                        </p>

                                        <a
                                            href={product.permalink}
                                            tabIndex={isVisible ? 0 : -1}
                                            className="mt-5 flex  w-full items-center justify-center rounded-full border border-[#272522] px-2 py-2 text-center text-base font-medium tracking-wide transition-colors duration-300 hover:border-[#8d765a] hover:bg-[#8d765a] hover:text-white"
                                        >
                                            DISCOVER PIECE
                                        </a>
                                    </article>
                                );
                            })}
                        </div>
                    </div>

                    {canSlide && (
                        <>
                            <button
                                type="button"
                                onClick={previousSlide}
                                aria-label="Previous products"
                                className="absolute left-0 top-[48%] z-10 flex h-7 w-6 -translate-y-1/2 items-center justify-center rounded-r bg-[#8B755A] text-white transition-colors hover:bg-[#6f5b42]"
                            >
                                <CaretLeft size={18} weight="regular" />
                            </button>

                            <button
                                type="button"
                                onClick={nextSlide}
                                aria-label="Next products"
                                className="absolute right-0 top-[48%] z-10 flex h-7 w-6 -translate-y-1/2 items-center justify-center rounded-l bg-[#8B755A] text-white transition-colors hover:bg-[#6f5b42]"
                            >
                                <CaretRight size={18} weight="regular" />
                            </button>
                        </>
                    )}
                </div>
            )}
        </div>

    );
}
