import { render, unmountComponentAtNode } from "react-dom";
import React, { useRef } from "react";
import styles from "./page.module.css";

function Page() {
  return (
    <div className={styles.page}>
      <nav className={styles.navWrapper}>
        <div className={styles.navContent}>
          <div className={styles.navBrand}>React + Web Component Store</div>
          <team-cart-minicart-component></team-cart-minicart-component>
        </div>
      </nav>
      <div className={styles.container}>
        <div className="">
          <team-product-detail-component></team-product-detail-component>
        </div>
        <div className={styles.productList}>
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
