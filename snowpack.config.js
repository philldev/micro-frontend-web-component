/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // directory name: 'build directory'
    public: "/",
    page: "/dist/page",
    cart: "/dist/cart",
    productdetail: "/dist/productdetail",
    productlist: "/dist/productlist",
  },
  plugins: [
    /* ... */
    "@snowpack/plugin-svelte",
    ["@snowpack/plugin-webpack"],
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
