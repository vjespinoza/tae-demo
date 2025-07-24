import WebOperations from "./web.operations.ts";

class BaseComponent extends WebOperations {
  private readonly container: ChainablePromiseElement;

  constructor(container: ChainablePromiseElement) {
    super();
    this.container = container;
  }

  private get getContainer(): ChainablePromiseElement {
    return this.container;
  }

  public async inner$(selector: string) {
    return this.getContainer.$(">>>" + selector) as ChainablePromiseElement;
  }
}

export default BaseComponent;
