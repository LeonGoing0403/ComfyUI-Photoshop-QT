import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  _ref.dt;
  return "\n.p-checkbox-group {\n    display: inline-flex;\n}\n";
};
var classes = {
  root: 'p-checkbox-group p-component'
};
var CheckboxGroupStyle = BaseStyle.extend({
  name: 'checkboxgroup',
  theme: theme,
  classes: classes
});

export { CheckboxGroupStyle as default };
//# sourceMappingURL=index.mjs.map
