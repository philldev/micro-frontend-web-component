import PageApp from "./Page";

class PageComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    this.unMount();
  }
  render() {
    PageApp.render(this, {});
  }
  unMount() {
    PageApp.unMount(this);
  }
}

customElements.define("page-component", PageComponent);
