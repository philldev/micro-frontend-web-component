import App from "./App.svelte";

let app = (root) =>
  new App({
    target: root,
  });

const svelteApp = {
  render: (root) => app(root),
  unMount: () => app.$destroy(),
};

export default svelteApp;
