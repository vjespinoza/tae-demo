import { getCurrencyAsNumber } from "./common.ts";
import ProductCard from "../pages/components/product-card.ts";

const handleEveryPromise = async (promises: Promise<boolean>[]) => {
  const results = await Promise.all(promises);
  return results.every((result) => result);
};

export const checkFilteredProductsPriceRange = async (
  productCards: ProductCard[],
  minPrice: string,
  maxPrice: string,
) => {
  const priceRangeChecks = productCards.map(async (product: ProductCard) => {
    return (
      getCurrencyAsNumber(await product.getFinalPrice()) >=
        parseInt(minPrice) &&
      getCurrencyAsNumber(await product.getFinalPrice()) <= parseInt(maxPrice)
    );
  });

  return handleEveryPromise(priceRangeChecks);
};

export const checkFilteredProductsAvailability = async (
  productCards: ProductCard[],
  availability: string,
) => {
  const availabilityChecks = productCards.map(
    async (product: ProductCard) =>
      (await product.getProductAvailability()) === availability,
  );

  return handleEveryPromise(availabilityChecks);
};
