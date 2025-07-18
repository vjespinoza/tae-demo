import BaseComponent from "../base/base.component.ts";

class ProductCard extends BaseComponent {
  constructor(container: ChainablePromiseElement) {
    super(container);
  }

  private get productImage() {
    return $('[data-testid="product-card-image"]');
  }

  private get productTitle() {
    return $('[data-testid="product-card-title"]');
  }

  private get productOriginalPrice() {
    return $('[data-testid="product-card-original-price"]');
  }

  private get productFinalPrice() {
    return $('[data-testid="product-card-final-price"]');
  }

  private get productStockLabel() {
    return $('[data-testid="product-card-stock"]');
  }

  private get productDecreaseQuantityButton() {
    return $('[data-testid="product-card-decrease"]');
  }

  private get productIncreaseQuantityButton() {
    return $('[data-testid="product-card-increase"]');
  }

  private get productQuantityInput() {
    return $('[data-testid="product-card-quantity"]');
  }

  private get productAddToCartButton() {
    return $('button[aria-label="Add to cart"]');
  }

  public async getProductTitle(): Promise<string> {
    return await this.getText(this.productTitle);
  }

  public async isProductImageVisible(): Promise<boolean> {
    return await this.isVisible(this.productImage);
  }

  public async isOriginalPriceVisible(): Promise<boolean> {
    return await this.isVisible(this.productOriginalPrice);
  }

  public async isFinalPriceVisible(): Promise<boolean> {
    return await this.isVisible(this.productFinalPrice);
  }

  public async getFinalPrice(): Promise<string> {
    return await this.getText(this.productFinalPrice);
  }

  public async getProductAvailability(): Promise<string> {
    return await this.getText(this.productStockLabel);
  }

  public async increaseQuantity(quantity: number): Promise<void> {
    for (let i = 0; i < quantity; i++) {
      await this.click(this.productIncreaseQuantityButton);
    }
  }

  public async decreaseQuantity(quantity: number): Promise<void> {
    for (let i = 0; i < quantity; i++) {
      await this.click(this.productDecreaseQuantityButton);
    }
  }

  public async setQuantity(quantity: number): Promise<void> {
    await this.type(this.productQuantityInput, quantity.toString());
  }

  public async addToCart(): Promise<void> {
    await this.click(this.productAddToCartButton);
  }
}

export default ProductCard;
