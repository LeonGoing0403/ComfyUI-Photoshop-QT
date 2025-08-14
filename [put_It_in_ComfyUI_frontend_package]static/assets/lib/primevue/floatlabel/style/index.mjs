import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-floatlabel {\n    display: block;\n    position: relative;\n}\n\n.p-floatlabel label {\n    position: absolute;\n    pointer-events: none;\n    top: 50%;\n    transform: translateY(-50%);\n    transition-property: all;\n    transition-timing-function: ease;\n    line-height: 1;\n    font-weight: ".concat(dt('floatlabel.font.weight'), ";\n    inset-inline-start: ").concat(dt('floatlabel.position.x'), ";\n    color: ").concat(dt('floatlabel.color'), ";\n    transition-duration: ").concat(dt('floatlabel.transition.duration'), ";\n}\n\n.p-floatlabel:has(.p-textarea) label {\n    top: ").concat(dt('floatlabel.position.y'), ";\n    transform: translateY(0);\n}\n\n.p-floatlabel:has(.p-inputicon:first-child) label {\n    inset-inline-start: calc((").concat(dt('form.field.padding.x'), " * 2) + ").concat(dt('icon.size'), ");\n}\n\n.p-floatlabel:has(.p-invalid) label {\n    color: ").concat(dt('floatlabel.invalid.color'), ";\n}\n\n.p-floatlabel:has(input:focus) label,\n.p-floatlabel:has(input.p-filled) label,\n.p-floatlabel:has(input:-webkit-autofill) label,\n.p-floatlabel:has(textarea:focus) label,\n.p-floatlabel:has(textarea.p-filled) label,\n.p-floatlabel:has(.p-inputwrapper-focus) label,\n.p-floatlabel:has(.p-inputwrapper-filled) label {\n    top: ").concat(dt('floatlabel.over.active.top'), ";\n    transform: translateY(0);\n    font-size: ").concat(dt('floatlabel.active.font.size'), ";\n    font-weight: ").concat(dt('floatlabel.label.active.font.weight'), ";\n}\n\n.p-floatlabel:has(input.p-filled) label,\n.p-floatlabel:has(textarea.p-filled) label,\n.p-floatlabel:has(.p-inputwrapper-filled) label {\n    color: ").concat(dt('floatlabel.active.color'), ";\n}\n\n.p-floatlabel:has(input:focus) label,\n.p-floatlabel:has(input:-webkit-autofill) label,\n.p-floatlabel:has(textarea:focus) label,\n.p-floatlabel:has(.p-inputwrapper-focus) label {\n    color: ").concat(dt('floatlabel.focus.color'), ";\n}\n\n.p-floatlabel-in .p-inputtext,\n.p-floatlabel-in .p-textarea,\n.p-floatlabel-in .p-select-label,\n.p-floatlabel-in .p-multiselect-label,\n.p-floatlabel-in .p-autocomplete-input-multiple,\n.p-floatlabel-in .p-cascadeselect-label,\n.p-floatlabel-in .p-treeselect-label {\n    padding-block-start: ").concat(dt('floatlabel.in.input.padding.top'), ";\n    padding-block-end: ").concat(dt('floatlabel.in.input.padding.bottom'), ";\n}\n\n.p-floatlabel-in:has(input:focus) label,\n.p-floatlabel-in:has(input.p-filled) label,\n.p-floatlabel-in:has(input:-webkit-autofill) label,\n.p-floatlabel-in:has(textarea:focus) label,\n.p-floatlabel-in:has(textarea.p-filled) label,\n.p-floatlabel-in:has(.p-inputwrapper-focus) label,\n.p-floatlabel-in:has(.p-inputwrapper-filled) label {\n    top: ").concat(dt('floatlabel.in.active.top'), ";\n}\n\n.p-floatlabel-on:has(input:focus) label,\n.p-floatlabel-on:has(input.p-filled) label,\n.p-floatlabel-on:has(input:-webkit-autofill) label,\n.p-floatlabel-on:has(textarea:focus) label,\n.p-floatlabel-on:has(textarea.p-filled) label,\n.p-floatlabel-on:has(.p-inputwrapper-focus) label,\n.p-floatlabel-on:has(.p-inputwrapper-filled) label {\n    top: 0;\n    transform: translateY(-50%);\n    border-radius: ").concat(dt('floatlabel.on.border.radius'), ";\n    background: ").concat(dt('floatlabel.on.active.background'), ";\n    padding: ").concat(dt('floatlabel.on.active.padding'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    _ref2.instance;
      var props = _ref2.props;
    return ['p-floatlabel', {
      'p-floatlabel-over': props.variant === 'over',
      'p-floatlabel-on': props.variant === 'on',
      'p-floatlabel-in': props.variant === 'in'
    }];
  }
};
var FloatLabelStyle = BaseStyle.extend({
  name: 'floatlabel',
  theme: theme,
  classes: classes
});

export { FloatLabelStyle as default };
//# sourceMappingURL=index.mjs.map
