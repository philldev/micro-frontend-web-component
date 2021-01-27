import { elements } from "../api";
import AddToCartComponent from "./add-to-cart";
import MinicartComponent from "./minicart";

customElements.define(elements.minicart, MinicartComponent);
customElements.define(elements.addtocart, AddToCartComponent);
