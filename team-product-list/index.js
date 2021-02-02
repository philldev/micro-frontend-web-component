import { LitElement, html } from "lit-element";
import data from "./utils/data";
import styles from "./product-list.styles";

class ProductList extends LitElement {
  static get properties() {
    return {
      data: { type: Array },
      selected: { type: Number },
    };
  }

  constructor() {
    super();
    this.data = data;
    this.selected = null;
  }

  static get styles() {
    return styles;
  }
  render() {
    return html`
      <div class="product-list">
        ${this.data.map(
          (item) => html`
            <div
              @click=${(e) => {
                this.selected = item.id;
                this.dispatchEvent(
                  new CustomEvent("select:product", {
                    bubbles: true,
                    detail: item,
                  })
                );
              }}
              class="product-card ${this.selected === item.id ? "active" : ""}"
            >
              <div class="product-image">
                <img src=${item.image} alt=${item.title} />
              </div>
              <div class="">
                <div class="product-title">${item.title}</div>
                <div class="product-price">${item.price}</div>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }
}
customElements.define("team-product-list-component", ProductList);
