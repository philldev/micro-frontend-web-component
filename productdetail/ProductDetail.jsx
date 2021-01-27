import React, { useEffect, useRef, useState } from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { elements } from "../api";
import styles from "./product-detail.module.css";

function ProductDetail({ id = 1 }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let fetchProduct = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct().finally(() => setLoading(false));
    return () => {};
  }, [id]);

  // const ref = useRef(null);

  // useEffect(() => {
  //   ref.current.addEventListener();
  // });

  if (loading) {
    return <div className={styles.productDetail}>loading...</div>;
  }

  return (
    <div className={styles.productDetail}>
      {product ? (
        <>
          <div className={styles.productDetailImage}>
            <img src={product.image} alt="" />
          </div>
          <div className={styles.productDetailTitle}>{product.title}</div>
          <div className={styles.productDetailDesc}>{product.description}</div>
          <div className={styles.productDetailPrice}>$ {product.price}</div>
          <elements.addtocart
            product={JSON.stringify(product)}
          ></elements.addtocart>
        </>
      ) : (
        <div className="">Please Select a Product!</div>
      )}
    </div>
  );
}

const App = {
  render: (root, props) => render(<ProductDetail {...props} />, root),
  unMount: (root) => {
    unmountComponentAtNode(root);
  },
};

export default App;
