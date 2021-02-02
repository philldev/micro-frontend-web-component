import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import styles from "./add-to-cart.module.css";

function AddToCart({ product }) {
  return (
    <div className={styles["add-to-cart"]}>
      <button
        onClick={(e) => {
          e.target.dispatchEvent(
            new CustomEvent("add:to:cart", {
              detail: {
                product,
              },
              bubbles: true,
            })
          );
        }}
        className={styles["addtocart-btn"]}
        type="submit"
      >
        Add To cart
      </button>
    </div>
  );
}

const AddToCartApp = {
  render: (root, props) => render(<AddToCart {...props} />, root),
  unMount: (root) => unmountComponentAtNode(root),
};

export default AddToCartApp;
