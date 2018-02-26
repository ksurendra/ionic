/*! Built with http://stenciljs.com */
const { h, Context } = window.App;

class Card {
    render() {
        return h("slot", null);
    }
    static get is() { return "ion-card"; }
    static get host() { return { "theme": "card" }; }
    static get properties() { return { "color": { "type": String, "attr": "color" }, "mode": { "type": "Any", "attr": "mode" } }; }
    static get style() { return "ion-card {\n  position: relative;\n  display: block;\n  overflow: hidden;\n}\n\nion-card img {\n  display: block;\n  width: 100%;\n}\n\n.card-ios {\n  margin: 30px 20px;\n  border-radius: 14px;\n  width: calc(100% - 40px);\n  font-family: -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Roboto\", sans-serif;\n  font-size: 14px;\n  color: var(--ion-text-ios-color-step-400, var(--ion-text-color-step-400, #666666));\n  background-color: var(--ion-item-ios-background-color, var(--ion-background-ios-color, var(--ion-background-color, #fff)));\n  box-shadow: 0 16px 42px rgba(0, 0, 0, 0.18);\n  transform: translateZ(0);\n}\n\n.card-ios ion-list {\n  margin-bottom: 0;\n}\n\n.card-ios > .item:last-child,\n.card-ios > .item:last-child .item-inner,\n.card-ios > .item-sliding:last-child .item {\n  border-bottom: 0;\n}\n\n.card-ios .item-ios.item-block .item-inner {\n  border: 0;\n}\n\n.card .note-ios {\n  font-size: 13px;\n}\n\n.card-ios h1 {\n  margin: 0 0 2px;\n  font-size: 24px;\n  font-weight: normal;\n}\n\n.card-ios h2 {\n  margin: 2px 0;\n  font-size: 16px;\n  font-weight: normal;\n}\n\n.card-ios h3,\n.card-ios h4,\n.card-ios h5,\n.card-ios h6 {\n  margin: 2px 0;\n  font-size: 14px;\n  font-weight: normal;\n}\n\n.card-ios p {\n  margin: 0 0 2px;\n  font-size: 14px;\n  color: var(--ion-text-ios-color-step-400, var(--ion-text-color-step-400, #666666));\n}\n\n.card-ios .text-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-primary {\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n  background-color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-primary p {\n  color: var(--ion-color-ios-primary-contrast, var(--ion-color-primary-contrast, #fff));\n}\n\n.card-ios-primary .text-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-primary .text-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-primary .text-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-primary .text-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-primary .text-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-primary .text-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-primary .text-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-primary .text-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-primary .text-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios .text-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-secondary {\n  color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n  background-color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-secondary p {\n  color: var(--ion-color-ios-secondary-contrast, var(--ion-color-secondary-contrast, #fff));\n}\n\n.card-ios-secondary .text-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-secondary .text-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-secondary .text-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-secondary .text-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-secondary .text-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-secondary .text-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-secondary .text-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-secondary .text-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-secondary .text-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios .text-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-tertiary {\n  color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n  background-color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-tertiary p {\n  color: var(--ion-color-ios-tertiary-contrast, var(--ion-color-tertiary-contrast, #fff));\n}\n\n.card-ios-tertiary .text-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-tertiary .text-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-tertiary .text-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-tertiary .text-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-tertiary .text-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-tertiary .text-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-tertiary .text-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-tertiary .text-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-tertiary .text-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios .text-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-success {\n  color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n  background-color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-success p {\n  color: var(--ion-color-ios-success-contrast, var(--ion-color-success-contrast, #fff));\n}\n\n.card-ios-success .text-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-success .text-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-success .text-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-success .text-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-success .text-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-success .text-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-success .text-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-success .text-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-success .text-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios .text-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-warning {\n  color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #000));\n  background-color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-warning p {\n  color: var(--ion-color-ios-warning-contrast, var(--ion-color-warning-contrast, #000));\n}\n\n.card-ios-warning .text-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-warning .text-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-warning .text-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-warning .text-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-warning .text-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-warning .text-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-warning .text-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-warning .text-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-warning .text-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios .text-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-danger {\n  color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n  background-color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-danger p {\n  color: var(--ion-color-ios-danger-contrast, var(--ion-color-danger-contrast, #fff));\n}\n\n.card-ios-danger .text-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-danger .text-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-danger .text-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-danger .text-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-danger .text-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-danger .text-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-danger .text-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-danger .text-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-danger .text-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios .text-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-light {\n  color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n  background-color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-light p {\n  color: var(--ion-color-ios-light-contrast, var(--ion-color-light-contrast, #000));\n}\n\n.card-ios-light .text-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-light .text-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-light .text-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-light .text-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-light .text-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-light .text-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-light .text-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-light .text-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-light .text-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios .text-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-medium {\n  color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #000));\n  background-color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-medium p {\n  color: var(--ion-color-ios-medium-contrast, var(--ion-color-medium-contrast, #000));\n}\n\n.card-ios-medium .text-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-medium .text-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-medium .text-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-medium .text-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-medium .text-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-medium .text-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-medium .text-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-medium .text-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-medium .text-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios .text-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios-dark {\n  color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n  background-color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}\n\n.card-ios-dark p {\n  color: var(--ion-color-ios-dark-contrast, var(--ion-color-dark-contrast, #fff));\n}\n\n.card-ios-dark .text-ios-primary {\n  color: var(--ion-color-ios-primary, var(--ion-color-primary, #488aff));\n}\n\n.card-ios-dark .text-ios-secondary {\n  color: var(--ion-color-ios-secondary, var(--ion-color-secondary, #32db64));\n}\n\n.card-ios-dark .text-ios-tertiary {\n  color: var(--ion-color-ios-tertiary, var(--ion-color-tertiary, #f4a942));\n}\n\n.card-ios-dark .text-ios-success {\n  color: var(--ion-color-ios-success, var(--ion-color-success, #10dc60));\n}\n\n.card-ios-dark .text-ios-warning {\n  color: var(--ion-color-ios-warning, var(--ion-color-warning, #ffce00));\n}\n\n.card-ios-dark .text-ios-danger {\n  color: var(--ion-color-ios-danger, var(--ion-color-danger, #f53d3d));\n}\n\n.card-ios-dark .text-ios-light {\n  color: var(--ion-color-ios-light, var(--ion-color-light, #f4f4f4));\n}\n\n.card-ios-dark .text-ios-medium {\n  color: var(--ion-color-ios-medium, var(--ion-color-medium, #989aa2));\n}\n\n.card-ios-dark .text-ios-dark {\n  color: var(--ion-color-ios-dark, var(--ion-color-dark, #222));\n}"; }
    static get styleMode() { return "ios"; }
}

export { Card as IonCard };