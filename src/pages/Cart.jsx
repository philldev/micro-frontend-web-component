import React from 'react';
import appConfig from '../app.config';
import MicroFrontend from '../MicroFrontend';

const Cart = () => {
  return (
    <>
      <MicroFrontend
        url={`${appConfig.teamCheckoutUrl}/dist/checkout/index.js`}
        render={<team-checkout-checkout></team-checkout-checkout>}
      />
    </>
  );
};

export default Cart;
