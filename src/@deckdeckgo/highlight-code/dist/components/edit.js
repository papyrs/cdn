import { HTMLElement, createEvent, h, proxyCustomElement } from '@stencil/core/internal/client';

const editCss = ":host{display:block;position:absolute;inset:auto 0 0 auto}button{width:1.6rem;height:1.6rem;display:flex;justify-content:center;align-items:center;margin:0 16px;border-radius:50%;background:#f4f5f8;color:#000000;border:1px solid transparent;outline:none;box-shadow:0 4px 16px 0 rgba(0, 0, 0, 0.12);isolation:isolate;overflow:hidden;cursor:pointer;transition:transform 0.15s ease-out}button:active{box-shadow:none;transform:translateX(1px) translateY(1px)}";

let Edit = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.__attachShadow();
    this.editCode = createEvent(this, "editCode", 7);
  }
  render() {
    return (h("button", { onClick: () => this.editCode.emit(), "aria-label": this.label || 'Edit code', part: "edit-button" }, h("svg", { xmlns: "http://www.w3.org/2000/svg", height: "24px", viewBox: "0 0 24 24", width: "24px", fill: "currentColor", part: "edit-icon" }, h("path", { d: "M0 0h24v24H0z", fill: "none" }), h("path", { d: "M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" }))));
  }
  static get style() { return editCss; }
};
Edit = /*@__PURE__*/ proxyCustomElement(Edit, [1, "deckgo-highlight-code-edit", {
    "label": [1]
  }]);
function defineCustomElement() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["deckgo-highlight-code-edit"];
  components.forEach(tagName => { switch (tagName) {
    case "deckgo-highlight-code-edit":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, Edit);
      }
      break;
  } });
}

export { Edit as E, defineCustomElement as d };
