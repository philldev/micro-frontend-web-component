import AddToCartApp from "./AddToCart";

export default class AddToCartComponent extends HTMLElement {
  static get observedAttributes() {
    return ["product"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    this.render();
  }
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
