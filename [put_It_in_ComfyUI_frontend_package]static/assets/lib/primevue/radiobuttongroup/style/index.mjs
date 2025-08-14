import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  _ref.dt;
  return "\n.p-radiobutton-group {\n    display: inline-flex;\n}\n";
};
var classes = {
  root: 'p-radiobutton-group p-component'
};
var RadioButtonGroupStyle = BaseStyle.extend({
  name: 'radiobuttongroup',
  theme: theme,
  classes: classes
});

export { RadioButtonGroupStyle as default };
//# sourceMappingURL=index.mjs.map
