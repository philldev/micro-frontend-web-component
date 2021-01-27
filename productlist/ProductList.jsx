import React, { useEffect, useState } from "react";
import { selectProductEvent } from "../api";
import styles from "./product-list.module.css";
import { render, unmountComponentAtNode } from "react-dom";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    let fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct().finally(() => setLoading(false));
    return () => {};
  }, []);

  if (loading) {
    return <div className={styles.productList}>...loading</div>;
  }

  return (
    <div className={styles.productList}>
      {products.map((item) => (
        <div
          onClick={(e) => {
            window.history.pushState(
              { product: item.id },
              "product",
              `?selected_product=${item.id}`
            );
            e.target.dispatchEvent(selectProductEvent);
            setSelected(item.id);
          }}
          key={item.id}
          className={`${styles.productCard} ${
            item.id === selected ? styles.active : ""
          }`}
        >
          <div className={styles.productImage}>
            <img src={item.image} alt="" />
          </div>
          <div className="">
            <div className={styles.productTitle}>{item.title}</div>
            <div className={styles.productPrice}>$ {item.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

const ProductListApp = {
  render: (root, props) => render(<ProductList {...props} />, root),
  unMount: (root) => unmountComponentAtNode(root),
};

export default ProductListApp;
