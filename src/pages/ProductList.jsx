import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import appConfig from '../app.config';
import MicroFrontend from '../MicroFrontend';

const ProductList = () => {
  const history = useHistory();
  useEffect(() => {
    const selectProduct = (e) => {
      const { id } = e.detail;
      if (id) {
        history.push(`/product/${id}`);
      }
    };
    window.addEventListener('select:product', selectProduct, { capture: true });
  }, []);
  return (
    <>
      <MicroFrontend
        url={`${appConfig.teamProductUrl}/dist/product-list/index.js`}
        render={<team-product-product-list></team-product-product-list>}
      />
    </>
  );
};

export default ProductList;
