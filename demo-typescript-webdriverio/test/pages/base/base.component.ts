import WebOperations from "./web.operations.ts";

class BaseComponent extends WebOperations {
  private readonly container;

  constructor(container: string) {
    super();
    this.container = container;
  }

  public getContainer(): string {
    return this.container;
  }
}

export default BaseComponent;
