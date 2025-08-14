import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-toolbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n    padding: ".concat(dt('toolbar.padding'), ";\n    background: ").concat(dt('toolbar.background'), ";\n    border: 1px solid ").concat(dt('toolbar.border.color'), ";\n    color: ").concat(dt('toolbar.color'), ";\n    border-radius: ").concat(dt('toolbar.border.radius'), ";\n    gap: ").concat(dt('toolbar.gap'), ";\n}\n\n.p-toolbar-start,\n.p-toolbar-center,\n.p-toolbar-end {\n    display: flex;\n    align-items: center;\n}\n");
};
var classes = {
  root: 'p-toolbar p-component',
  start: 'p-toolbar-start',
  center: 'p-toolbar-center',
  end: 'p-toolbar-end'
};
var ToolbarStyle = BaseStyle.extend({
  name: 'toolbar',
  theme: theme,
  classes: classes
});

export { ToolbarStyle as default };
//# sourceMappingURL=index.mjs.map
