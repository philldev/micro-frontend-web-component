import svelteApp from "./app";

class WebComponentWithSvelte extends HTMLElement {
  connectedCallback() {
    this._mount();
  }

  disconnectedCallback() {
    this._unmount();
  }

  _mount() {
    svelteApp.render(this);
  }

  _unmount() {
    svelteApp.unMount();
  }
}

customElements.define("team-product-detail-component", WebComponentWithSvelte);
