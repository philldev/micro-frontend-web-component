/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // directory name: 'build directory'
    public: "/",
    page: "/dist/page",
    cart: "/dist/cart",
    productdetail: "/dist/productdetail",
    productlist: "/dist/productlist",
    sveltetest: "/dist/sveltetest",
  },
  plugins: [
    /* ... */
    "@snowpack/plugin-svelte",
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
