# Micro FE Web Components

## Documentation

> This is an experimental implementation of microfrontend using web component.

### Main Project structures

    |_public
      |_ index.html // bootstrapping the app
    |_page
      |_ index.js // React App
    |_productdetail
      |_ index.js // Svelte App
    |_productlist
      |_ index.js // React App
    |_cart
      |_ index.js // React App

### Team Project structures

    |_team
      |_ index.js // each team needs to bootstrap their own app using Web Component Custom element API

https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements

### Styling

- Global styling

  - for global styling like fonts, css var, resets, normalize and etc. can be imported either in container of the app eg. team page or can be initialize in the public index.html

- Team styling
  - to prevent css specificity each team is recommended to use styling framework or tools that provides class prefix for react and for svelte its automatically enabled
