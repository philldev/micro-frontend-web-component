import ProductListApp from "./ProductList";

class WebComponentProductList extends HTMLElement {
  connectedCallback() {
    this._mount();
  }

  disconnectedCallback() {
    this._unmount();
  }

  _mount() {
    ProductListApp.render(this);
  }

  _unmount() {
    ProductListApp.unMount(this);
  }
}

customElements.define("team-product-list-component", WebComponentProductList);
