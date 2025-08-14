import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-orderlist {\n    display: flex;\n    gap: ".concat(dt('orderlist.gap'), ";\n}\n\n.p-orderlist-controls {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: ").concat(dt('orderlist.controls.gap'), ";\n}\n");
};
var classes = {
  root: 'p-orderlist p-component',
  controls: 'p-orderlist-controls'
};
var OrderListStyle = BaseStyle.extend({
  name: 'orderlist',
  theme: theme,
  classes: classes
});

export { OrderListStyle as default };
//# sourceMappingURL=index.mjs.map
