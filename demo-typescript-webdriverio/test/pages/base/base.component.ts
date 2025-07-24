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

  public inner$(selector: string): Promise<WebdriverIO.Browser["$"]> {
    return this.getContainer.$(">>>" + selector);
  }
}

export default BaseComponent;
