import React, { useRef, useState, useEffect } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import styles from "./minicart.module.css";

function Minicart() {
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (e) => {
    const product = e.detail.product;
    if (product) {
      setCartItems((prev) => {
        if (prev.find((item) => item.id === product.id)) {
          return prev.map((item) => {
            if (item.id === product.id) {
              return {
                ...product,
                qty: item.qty + 1,
              };
            } else {
              return item;
            }
          });
        } else {
          return [...prev, { ...product, qty: 1 }];
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener("add:to:cart", addToCart);
    return () => window.removeEventListener("add:to:cart", addToCart);
  }, []);

  return (
    <div className={styles.cart}>
      <span className={styles["cart-count"]}>{cartItems.length}</span>
      <CartIcon />
      <CartContent cartItems={cartItems} />
    </div>
  );
}

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    className={styles["cart-icon"]}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
    />
  </svg>
);

const CartContent = ({ cartItems = [] }) => {
  return (
    <div className={styles["cart-content"]}>
      {cartItems.length ? (
        cartItems.map((item) => (
          <div key={item.id} className={styles["cart-content-item"]}>
            <div className={styles["cart-content-img"]}>
              <img src={item.image} alt="" />
            </div>
            <div className={styles["cart-content-info"]}>
              <div className={styles["cart-content-title"]}>{item.title}</div>
              <div className={styles["cart-content-qty"]}>qty : {item.qty}</div>
              <div className={styles["cart-content-price"]}>$ {item.price}</div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles["no-product"]}>No product in Cart</div>
      )}
      <button
        className={styles["btn-checkout"]}
        disabled={!cartItems.length ? true : false}
      >
        Go to checkout
      </button>
    </div>
  );
};

const MinicartApp = {
  render: (root, props) => render(<Minicart {...props} />, root),
  unMount: (root) => unmountComponentAtNode(root),
};

export default MinicartApp;
