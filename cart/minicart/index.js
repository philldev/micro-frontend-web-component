import MinicarApp from "./Minicart";

export default class MinicartComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  disconnectedCallback() {
    this.unMount();
  }
  render() {
    MinicarApp.render(this, {});
  }
  unMount() {
    MinicarApp.unMount(this);
  }
}
