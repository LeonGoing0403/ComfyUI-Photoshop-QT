import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-virtualscroller-loader {\n    background: ".concat(dt('virtualscroller.loader.mask.background'), ";\n    color: ").concat(dt('virtualscroller.loader.mask.color'), ";\n}\n\n.p-virtualscroller-loading-icon {\n    font-size: ").concat(dt('virtualscroller.loader.icon.size'), ";\n    width: ").concat(dt('virtualscroller.loader.icon.size'), ";\n    height: ").concat(dt('virtualscroller.loader.icon.size'), ";\n}\n");
};
var css = "\n.p-virtualscroller {\n    position: relative;\n    overflow: auto;\n    contain: strict;\n    transform: translateZ(0);\n    will-change: scroll-position;\n    outline: 0 none;\n}\n\n.p-virtualscroller-content {\n    position: absolute;\n    top: 0;\n    left: 0;\n    min-height: 100%;\n    min-width: 100%;\n    will-change: transform;\n}\n\n.p-virtualscroller-spacer {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 1px;\n    width: 1px;\n    transform-origin: 0 0;\n    pointer-events: none;\n}\n\n.p-virtualscroller-loader {\n    position: sticky;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.p-virtualscroller-loader-mask {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-virtualscroller-horizontal > .p-virtualscroller-content {\n    display: flex;\n}\n\n.p-virtualscroller-inline .p-virtualscroller-content {\n    position: static;\n}\n";
var VirtualScrollerStyle = BaseStyle.extend({
  name: 'virtualscroller',
  css: css,
  theme: theme
});

export { VirtualScrollerStyle as default };
//# sourceMappingURL=index.mjs.map
