import { render, unmountComponentAtNode } from "react-dom";
import React, { useRef } from "react";
import styles from "./page.module.css";
import { elements } from "../api";

function Page() {
  return (
    <div className={styles.page}>
      <nav className={styles.navWrapper}>
        <div className={styles.navContent}>
          <div className={styles.navBrand}>React + Web Component Store</div>
          <minicart-component></minicart-component>
        </div>
      </nav>
      <div className={styles.container}>
        <div className="">
          <product-detail-component></product-detail-component>
        </div>
        <div className={styles.productList}>
          <productlist-component></productlist-component>
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
