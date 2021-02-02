import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import "./global.css";
import styles from "./page.module.css";

function Page() {
  return (
    <div className={styles.page}>
      <nav className={styles["nav-wrapper"]}>
        <div className={styles["nav-content"]}>
          <div className={styles["nav-brand"]}>React + Web Component Store</div>
          <team-cart-minicart-component></team-cart-minicart-component>
        </div>
      </nav>
      <div className={styles.container}>
        <div className="">
          <team-product-detail-component></team-product-detail-component>
        </div>
        <div className={styles["product-list"]}>
          <team-product-list-component></team-product-list-component>
        </div>
      </div>
    </div>
  );
}

const PageApp = {
  render: (root, props) => render(<Page {...props} />, root),
  unMount: (root) => unmountComponentAtNode(root),
};

export default PageApp;
