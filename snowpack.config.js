/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // directory name: 'build directory'
    public: "/",
    "team-page": "/dist/page",
    "team-cart": "/dist/cart",
    "team-product-details": "/dist/product-detail",
    "team-product-list": "/dist/product-list",
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
    minify: true,
    target: "es2018",
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
