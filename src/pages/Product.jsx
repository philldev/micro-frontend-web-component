import React from 'react';
import { useParams } from 'react-router-dom';
import appConfig from '../app.config';
import MicroFrontend from '../MicroFrontend';

const Product = () => {
  const { id } = useParams();
  return (
    <>
      <MicroFrontend
        url={`${appConfig.teamProductUrl}/dist/product-details/index.js`}
        render={
          <team-product-product-detail
            product-id={id}
          ></team-product-product-detail>
        }
      />
    </>
  );
};

export default Product;
