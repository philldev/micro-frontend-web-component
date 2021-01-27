export const elements = {
  minicart: "minicart-component",
  productDetail: "product-detail-component",
  addtocart: "addtocart-component",
  productlist: "productlist-component",
};

export const SELECT_PRODUCT = "change:product";
export const selectProductEvent = new CustomEvent(SELECT_PRODUCT, {
  bubbles: true,
});
export const ADD_TO_CART = "add:to:cart";
export const addToCartEvent = new CustomEvent("add:to:cart", { bubbles: true });
