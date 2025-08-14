import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-confirmpopup {\n    position: absolute;\n    margin-top: ".concat(dt('confirmpopup.gutter'), ";\n    top: 0;\n    left: 0;\n    background: ").concat(dt('confirmpopup.background'), ";\n    color: ").concat(dt('confirmpopup.color'), ";\n    border: 1px solid ").concat(dt('confirmpopup.border.color'), ";\n    border-radius: ").concat(dt('confirmpopup.border.radius'), ";\n    box-shadow: ").concat(dt('confirmpopup.shadow'), ";\n}\n\n.p-confirmpopup-content {\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt('confirmpopup.content.padding'), ";\n    gap: ").concat(dt('confirmpopup.content.gap'), ";\n}\n\n.p-confirmpopup-icon {\n    font-size: ").concat(dt('confirmpopup.icon.size'), ";\n    width: ").concat(dt('confirmpopup.icon.size'), ";\n    height: ").concat(dt('confirmpopup.icon.size'), ";\n    color: ").concat(dt('confirmpopup.icon.color'), ";\n}\n\n.p-confirmpopup-footer {\n    display: flex;\n    justify-content: flex-end;\n    gap: ").concat(dt('confirmpopup.footer.gap'), ";\n    padding: ").concat(dt('confirmpopup.footer.padding'), ";\n}\n\n.p-confirmpopup-footer button {\n    width: auto;\n}\n\n.p-confirmpopup-footer button:last-child {\n    margin: 0;\n}\n\n.p-confirmpopup-flipped {\n    margin-block-start: calc(").concat(dt('confirmpopup.gutter'), " * -1);\n    margin-block-end: ").concat(dt('confirmpopup.gutter'), ";\n}\n\n.p-confirmpopup-enter-from {\n    opacity: 0;\n    transform: scaleY(0.8);\n}\n\n.p-confirmpopup-leave-to {\n    opacity: 0;\n}\n\n.p-confirmpopup-enter-active {\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-confirmpopup-leave-active {\n    transition: opacity 0.1s linear;\n}\n\n.p-confirmpopup:after,\n.p-confirmpopup:before {\n    bottom: 100%;\n    left: calc(").concat(dt('confirmpopup.arrow.offset'), " + ").concat(dt('confirmpopup.arrow.left'), ");\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n}\n\n.p-confirmpopup:after {\n    border-width: calc(").concat(dt('confirmpopup.gutter'), " - 2px);\n    margin-left: calc(-1 * (").concat(dt('confirmpopup.gutter'), " - 2px));\n    border-style: solid;\n    border-color: transparent;\n    border-bottom-color: ").concat(dt('confirmpopup.background'), ";\n}\n\n.p-confirmpopup:before {\n    border-width: ").concat(dt('confirmpopup.gutter'), ";\n    margin-left: calc(-1 * ").concat(dt('confirmpopup.gutter'), ");\n    border-style: solid;\n    border-color: transparent;\n    border-bottom-color: ").concat(dt('confirmpopup.border.color'), ";\n}\n\n.p-confirmpopup-flipped:after,\n.p-confirmpopup-flipped:before {\n    bottom: auto;\n    top: 100%;\n}\n\n.p-confirmpopup-flipped:after {\n    border-bottom-color: transparent;\n    border-top-color: ").concat(dt('confirmpopup.background'), ";\n}\n\n.p-confirmpopup-flipped:before {\n    border-bottom-color: transparent;\n    border-top-color: ").concat(dt('confirmpopup.border.color'), ";\n}\n");
};
var classes = {
  root: 'p-confirmpopup p-component',
  content: 'p-confirmpopup-content',
  icon: 'p-confirmpopup-icon',
  message: 'p-confirmpopup-message',
  footer: 'p-confirmpopup-footer',
  pcRejectButton: 'p-confirmpopup-reject-button',
  pcAcceptButton: 'p-confirmpopup-accept-button'
};
var ConfirmPopupStyle = BaseStyle.extend({
  name: 'confirmpopup',
  theme: theme,
  classes: classes
});

export { ConfirmPopupStyle as default };
//# sourceMappingURL=index.mjs.map
