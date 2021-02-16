import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import { Link, Route, Switch } from 'react-router-dom';

import ProductList from './pages/ProductList';
import Cart from './pages/Cart';
import Product from './pages/Product';
import MicroFrontend from './MicroFrontend';

import appConfig from './app.config';

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/cart">
                <MicroFrontend
                  url={`${appConfig.teamCheckoutUrl}/dist/minicart/index.js`}
                  render={<team-checkout-minicart></team-checkout-minicart>}
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/product/:id">
            <Product />
          </Route>
        </Switch>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default App;
