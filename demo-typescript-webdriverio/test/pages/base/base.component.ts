import WebOperations from "./web.operations.ts";

class BaseComponent extends WebOperations {
  private readonly container: ChainablePromiseElement;

  constructor(container: ChainablePromiseElement) {
    super();
    this.container = container;
  }

  public getContainer(): string {
    return this.container;
  }
}

export default BaseComponent;
