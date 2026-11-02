
const API_BASE =
  "https://soumi.ahaanmedia.com/wp-json/wc/store/v1";

// Generic WooCommerce category API
export const fetchProductsByCategory = async (categorySlug) => {
  try {
    const response = await fetch(
      `${API_BASE}/products?category=${categorySlug}&per_page=100`
    );

    if (!response.ok) {
      throw new Error(`WooCommerce API Error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error("WooCommerce API Error:", error);
    throw error;
  }
};

// Rings API
export const fetchRings = () =>
  fetchProductsByCategory("rings");

// Bespoke Watches API
export const fetchBespokeWatches = () =>
  fetchProductsByCategory("bespoke-watches");

// Leather Straps API
export const fetchLeatherStraps = () =>
  fetchProductsByCategory("leather-straps");

// Reusable helper to clean product descriptions
export const cleanDescription = (html = "") => {
  return html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
};

// Format WooCommerce product price
export const formatProductPrice = (product) => {
  const prices = product.prices;

  if (!prices) return "";

  const currency = prices.currency_symbol || "₹";
  const minorUnit = Number(prices.currency_minor_unit ?? 2);
  const divisor = Math.pow(10, minorUnit);

  const priceValue = prices.price_range?.min_price
    ? prices.price_range.min_price
    : prices.price;

  const amount = Number(priceValue) / divisor;

  return `${currency}${amount.toLocaleString("en-IN", {
    minimumFractionDigits: 0,
    maximumFractionDigits: minorUnit,
  })}`;
};
