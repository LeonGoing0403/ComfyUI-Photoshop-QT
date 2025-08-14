import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-overlaybadge {\n    position: relative;\n}\n\n.p-overlaybadge .p-badge {\n    position: absolute;\n    inset-block-start: 0;\n    inset-inline-end: 0;\n    transform: translate(50%, -50%);\n    transform-origin: 100% 0;\n    margin: 0;\n    outline-width: ".concat(dt('overlaybadge.outline.width'), ";\n    outline-style: solid;\n    outline-color: ").concat(dt('overlaybadge.outline.color'), ";\n}\n\n.p-overlaybadge .p-badge:dir(rtl) {\n    transform: translate(-50%, -50%);\n}\n");
};
var classes = {
  root: 'p-overlaybadge'
};
var OverlayBadgeStyle = BaseStyle.extend({
  name: 'overlaybadge',
  theme: theme,
  classes: classes
});

export { OverlayBadgeStyle as default };
//# sourceMappingURL=index.mjs.map
