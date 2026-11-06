
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

// Normalize colour values from WooCommerce.
const normalizeColor = (color) => {
  if (typeof color === "string") return color.trim();

  if (color && typeof color === "object") {
    return (
      color.name ||
      color.option ||
      color.value ||
      color.slug ||
      ""
    ).toString().trim();
  }

  return "";
};

// Find the colour attribute dynamically.
const getColorAttribute = (product) => {
  return product.attributes?.find((attribute) => {
    const name = (attribute.name || "").trim().toLowerCase();
    const taxonomy = (attribute.taxonomy || "").trim().toLowerCase();

    return (
      name === "color" ||
      name === "colour" ||
      taxonomy.includes("color") ||
      taxonomy.includes("colour")
    );
  });
};

// Extract colours from both simple and variable products.
const getProductColors = (product) => {
  const colorAttribute = getColorAttribute(product);

  let rawColors = [];

  if (colorAttribute) {
    const terms =
      colorAttribute.terms ??
      colorAttribute.options ??
      colorAttribute.value ??
      [];

    if (typeof terms === "string") {
      rawColors = terms.split("|");
    } else if (Array.isArray(terms)) {
      rawColors = terms;
    }
  }

  // If the parent attribute has no terms, read variation attributes.
  if (rawColors.length === 0 && product.type === "variable") {
    product.variations?.forEach((variation) => {
      variation.attributes?.forEach((attribute) => {
        const name = (attribute.name || "").toLowerCase();

        if (
          name.includes("color") ||
          name.includes("colour")
        ) {
          rawColors.push(attribute.option || attribute.value || "");
        }
      });
    });
  }

  return [...new Set(rawColors.map(normalizeColor).filter(Boolean))];
};

// Normalize values so "Forest Suede" and "forest-suede"
// can match each other.
const normalizeColorValue = (value) => {
  return normalizeColor(value)
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
};

// Get variation attributes from different WooCommerce response shapes.
const getVariationAttributes = (variation) => {
  const attributes =
    variation?.attributes ||
    variation?.attributes_data ||
    [];

  if (Array.isArray(attributes)) {
    return attributes;
  }

  if (attributes && typeof attributes === "object") {
    return Object.entries(attributes).map(([name, value]) => ({
      name,
      value,
    }));
  }

  return [];
};


// Find the variation matching the selected colour.
const getSelectedVariation = (product, selectedColor) => {
  if (!selectedColor || product.type !== "variable") {
    return null;
  }

  const selectedValue = normalizeColorValue(selectedColor);

  return (
    product.variations?.find((variation) => {
      const variationAttributes =
        getVariationAttributes(variation);

      return variationAttributes.some((attribute) => {
        const attributeName = (
          attribute.name ||
          attribute.taxonomy ||
          attribute.slug ||
          ""
        ).toLowerCase();

        const isColorAttribute =
          attributeName.includes("color") ||
          attributeName.includes("colour");

        if (!isColorAttribute) return false;

        const variationColor =
          attribute.option ??
          attribute.value ??
          attribute.slug ??
          attribute.name;

        return (
          normalizeColorValue(variationColor) === selectedValue
        );
      });
    }) || null
  );
};


// Extract the image belonging to the selected variation.
const getVariationImage = (variation) => {
  return (
    variation?.images?.[0]?.src ||
    variation?.image?.src ||
    variation?.images?.[0]?.thumbnail ||
    null
  );
};

const BespokeStrapsSlider = () => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);
  const [cardStep, setCardStep] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [paused, setPaused] = useState(false);
  const [animate, setAnimate] = useState(true);

  const [selectedColors, setSelectedColors] = useState({});

  const cardRef = useRef(null);
  const touchStartX = useRef(0);

  // Fetch products dynamically from WooCommerce Store API.
  useEffect(() => {
    let mounted = true;


    const getBespokeStraps = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await fetchProductsByCategory("leather-straps");

        // Collect all variation IDs from variable products.
        const variationIds = [
          ...new Set(
            data.flatMap((product) =>
              product.type === "variable"
                ? (product.variations || []).map(
                  (variation) => variation.id
                )
                : []
            )
          ),
        ];

        let variationDetails = {};

        // Fetch variation records, including their images.
        if (variationIds.length > 0 && data.length > 0) {
          const origin = new URL(data[0].permalink).origin;

          const variationUrl = new URL(
            "/wp-json/wc/store/v1/products",
            origin
          );

          variationUrl.searchParams.set("type", "variation");
          variationUrl.searchParams.set(
            "include",
            variationIds.join(",")
          );
          variationUrl.searchParams.set(
            "per_page",
            String(variationIds.length)
          );

          const response = await fetch(variationUrl);

          if (!response.ok) {
            throw new Error("Unable to fetch variation images");
          }

          const variations = await response.json();

          variationDetails = Object.fromEntries(
            variations.map((variation) => [
              variation.id,
              variation,
            ])
          );
        }

        // Merge variation image data into the parent products.
        const updatedProducts = data.map((product) => ({
          ...product,
          variations: (product.variations || []).map(
            (variation) => ({
              ...variation,
              ...(variationDetails[variation.id] || {}),
              attributes:
                variation.attributes ||
                variationDetails[variation.id]?.attributes ||
                [],
            })
          ),
        }));

        setProducts(updatedProducts);
        setIndex(updatedProducts.length);
      } catch (err) {
        console.error("Bespoke Straps API Error:", err);
        setError("Unable to load Bespoke Straps. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getBespokeStraps();


    return () => {
      mounted = false;
    };
  }, []);

  // Responsive slider measurements.
  useEffect(() => {
    const updateSlider = () => {
      const width = window.innerWidth;

      setVisibleCount(
        width >= 1024 ? 3 : width >= 640 ? 2 : 1
      );

      if (cardRef.current) {
        const cardWidth = cardRef.current.getBoundingClientRect().width;
        setCardStep(cardWidth + 24);
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

  // Infinite slider navigation.
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

  // Seamless loop reset.
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

  // Re-enable transition after invisible reset.
  useEffect(() => {
    if (animate) return;

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setAnimate(true));
    });

    return () => cancelAnimationFrame(frame);
  }, [animate]);

  // Automatic slider.
  useEffect(() => {
    if (paused || loading || !canSlide) return;

    const timer = setInterval(() => {
      setAnimate(true);
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(timer);
  }, [paused, loading, canSlide]);

  // Duplicate products for infinite looping.
  const slides =
    products.length > 0
      ? [...products, ...products, ...products]
      : [];

  return (
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
          Loading Bespoke Straps...
        </p>
      ) : error ? (
        <p className="py-12 text-center text-sm text-[#82796d]">
          {error}
        </p>
      ) : products.length === 0 ? (
        <p className="py-12 text-center text-sm text-[#82796d]">
          No products found in the Bespoke Straps category.
        </p>
      ) : (
        <>
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

                const colors = getProductColors(product);


                const selectedColor =
                  selectedColors[product.id] || colors[0];

                const selectedVariation = getSelectedVariation(
                  product,
                  selectedColor
                );

                const variationImage = getVariationImage(
                  selectedVariation
                );

                const productImage =
                  variationImage ||
                  product.images?.[0]?.src ||
                  "";

                const productImageAlt =
                  selectedVariation?.image?.alt ||
                  product.images?.[0]?.alt ||
                  product.name;
                

                return (
                  <article
                    key={`${product.id}-${slideIndex}`}
                    ref={slideIndex === 0 ? cardRef : null}
                    aria-hidden={!isVisible}
                    className="min-w-0 shrink-0 basis-full sm:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-48px)/3)] xl:basis-[calc((100%-72px)/4)]"
                  >
                    {/* Product image */}
                    <a
                      href={product.permalink}
                      tabIndex={isVisible ? 0 : -1}
                      aria-label={`View ${product.name}`}
                      className="group block aspect-[1.01/1] overflow-hidden bg-[#DED4C7]"
                    >
                      <img
                        src={productImage}
                        alt={productImageAlt}
                        loading={slideIndex < 4 ? "eager" : "lazy"}
                        draggable="false"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    </a>

                    {/* Product title + price */}
                    <div className="mt-3 flex items-center justify-between">
                      <h3 className="min-w-0 truncate font-heading text-base font-normal text-[#292622] sm:text-xl">
                        {product.name}
                      </h3>

                      <span className="shrink-0 text-sm font-semibold italic text-[#947653] sm:text-base me-2.5">
                        From {formatProductPrice(product)}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="mt-2  truncate text-sm leading-relaxed text-[#575149] sm:text-base">
                      {description ||
                        "Discover the details of this handcrafted piece."}
                    </p>

                    {/* Leather colour swatches */}
                    {colors.length > 0 && (
                      <div className="mt-2 flex min-h-[20px] items-center gap-1.5">
                        <div className="flex items-center gap-1.5">
                          {colors.map((color, colorIndex) => {
                            const isSelected = selectedColor === color;

                            const isHex =
                              /^#([0-9A-F]{3}){1,2}$/i.test(color);

                            return (
                              <button
                                key={`${product.id}-${color}-${colorIndex}`}
                                type="button"
                                title={color}
                                aria-label={`Select leather colour ${color}`}
                                aria-pressed={isSelected}
                                tabIndex={isVisible ? 0 : -1}
                                onClick={() =>
                                  setSelectedColors((prev) => ({
                                    ...prev,
                                    [product.id]: color,
                                  }))
                                }
                                className={`h-4 w-4 shrink-0 rounded-full transition-all duration-200 ${isSelected
                                  ? "ring-1 ring-[#8B755A] ring-offset-1"
                                  : "border border-black/10 hover:ring-1 hover:ring-[#8B755A]"
                                  }`}
                                style={{
                                  backgroundColor: isHex ? color : undefined,
                                }}
                              >
                                {!isHex && (
                                  <span className="block h-full w-full rounded-full bg-[#B79C8A]" />
                                )}
                              </button>
                            );
                          })}
                        </div>

                        <span className="ml-1 text-base italic text-[#82796d]">
                          {colors.length}{" "}
                          {colors.length === 1 ? "leather" : "leathers"}
                        </span>
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="mt-3 flex items-center gap-2 sm:gap-3">
                      <a
                        href={product.permalink}
                        tabIndex={isVisible ? 0 : -1}
                        className="flex  flex-1 items-center justify-center rounded-full border border-[#8D857A] p-4 xl:px-12 xl:py-5  font-medium tracking-wide text-[#292622] transition-all duration-300 hover:border-[#8B755A] hover:bg-[#8B755A] hover:text-white text-sm sm:text-base"
                      >
                        BUY NOW
                      </a>

                      <a
                        href={`${product.permalink}#customize`}
                        tabIndex={isVisible ? 0 : -1}
                        className="shrink-0 text-sm text-[#947653] underline underline-offset-4 transition-colors hover:text-[#493622] xl:text-base"
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
                aria-label="Previous Bespoke Straps"
                className="absolute left-0 top-[48%] z-10 flex h-7 w-6 -translate-y-1/2 items-center justify-center rounded-r bg-[#8B755A] text-white transition-colors hover:bg-[#6f5b42]"
              >
                <CaretLeft size={18} weight="regular" />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Bespoke Straps"
                className="absolute right-0 top-[48%] z-10 flex h-7 w-6 -translate-y-1/2 items-center justify-center rounded-l bg-[#8B755A] text-white transition-colors hover:bg-[#6f5b42]"
              >
                <CaretRight size={18} weight="regular" />
              </button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default BespokeStrapsSlider;
