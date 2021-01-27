import AddToCartApp from "./AddToCart";

export default class AddToCartComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    this.unMount();
  }
  render() {
    AddToCartApp.render(this, {
      product: JSON.parse(this.getAttribute("product")),
    });
  }
  unMount() {
    AddToCartApp.unMount(this);
  }
}
