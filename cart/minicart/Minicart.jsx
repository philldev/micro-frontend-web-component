import React, { useRef, useState, useEffect } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import styles from "./minicart.module.css";

function Minicart({ id, count }) {
  const [cartItems, setCartItems] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    window.addEventListener("add:to:cart", (e) => {
      if (e.detail.product) {
        setCartItems((prev) => [...prev, e.detail.product]);
      }
    });
    return () => window.removeEventListener("add:to:cart");
  }, []);

  return (
    <div ref={ref} className={styles.cart}>
      <span className={styles.cartCount}>{cartItems.length}</span>
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
    className={styles.cartIcon}
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
    <div className={styles.cartContent}>
      {cartItems.length ? (
        cartItems.map((item) => (
          <div key={item.id} className={styles.cartContentItem}>
            <div className={styles.cartContentImg}>
              <img src={item.image} alt="" />
            </div>
            <div className={styles.cartContentInfo}>
              <div className={styles.cartContentTitle}>{item.title}</div>
              <div className={styles.cartContentPrice}>$ {item.price}</div>
            </div>
          </div>
        ))
      ) : (
        <div className={styles.noProduct}>No product in Cart</div>
      )}
      <button
        className={styles.btnCheckout}
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
