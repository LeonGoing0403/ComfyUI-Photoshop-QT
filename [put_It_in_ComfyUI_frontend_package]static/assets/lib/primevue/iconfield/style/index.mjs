import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-iconfield {\n    position: relative;\n}\n\n.p-inputicon {\n    position: absolute;\n    top: 50%;\n    margin-top: calc(-1 * (".concat(dt('icon.size'), " / 2));\n    color: ").concat(dt('iconfield.icon.color'), ";\n    line-height: 1;\n}\n\n.p-iconfield .p-inputicon:first-child {\n    inset-inline-start: ").concat(dt('form.field.padding.x'), ";\n}\n\n.p-iconfield .p-inputicon:last-child {\n    inset-inline-end: ").concat(dt('form.field.padding.x'), ";\n}\n\n.p-iconfield .p-inputtext:not(:first-child) {\n    padding-inline-start: calc((").concat(dt('form.field.padding.x'), " * 2) + ").concat(dt('icon.size'), ");\n}\n\n.p-iconfield .p-inputtext:not(:last-child) {\n    padding-inline-end: calc((").concat(dt('form.field.padding.x'), " * 2) + ").concat(dt('icon.size'), ");\n}\n\n.p-iconfield:has(.p-inputfield-sm) .p-inputicon {\n    font-size: ").concat(dt('form.field.sm.font.size'), ";\n    width: ").concat(dt('form.field.sm.font.size'), ";\n    height: ").concat(dt('form.field.sm.font.size'), ";\n    margin-top: calc(-1 * (").concat(dt('form.field.sm.font.size'), " / 2));\n}\n\n.p-iconfield:has(.p-inputfield-lg) .p-inputicon {\n    font-size: ").concat(dt('form.field.lg.font.size'), ";\n    width: ").concat(dt('form.field.lg.font.size'), ";\n    height: ").concat(dt('form.field.lg.font.size'), ";\n    margin-top: calc(-1 * (").concat(dt('form.field.lg.font.size'), " / 2));\n}\n");
};
var classes = {
  root: 'p-iconfield'
};
var IconFieldStyle = BaseStyle.extend({
  name: 'iconfield',
  theme: theme,
  classes: classes
});

export { IconFieldStyle as default };
//# sourceMappingURL=index.mjs.map
