import { elements, SELECT_PRODUCT } from "../api";
import App from "./ProductDetail";

class WebComponentProductDetail extends HTMLElement {
  selectedProduct = "1";

  connectedCallback() {
    if (getParams("selected_product")) {
      this.selectedProduct = getParams("selected_product");
    }
    this._render();
    window.addEventListener(SELECT_PRODUCT, this._selectProduct.bind(this));
  }

  disconnectedCallback() {
    this._unmount();
    window.removeEventListener(SELECT_PRODUCT, this._refresh.bind(this));
  }

  _render() {
    App.render(this, {
      id: this.selectedProduct,
    });
  }

  _unmount() {
    App.unMount(this);
  }

  _refresh() {
    this._render();
  }

  _selectProduct() {
    this.selectedProduct = getParams("selected_product");
    this._refresh();
  }

  log(...args) {
    console.log(...args);
  }
}

function getParams(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param) ? urlParams.get(param) : null;
}

customElements.define(elements.productDetail, WebComponentProductDetail);
