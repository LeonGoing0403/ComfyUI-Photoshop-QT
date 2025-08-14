import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputtext {\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: ".concat(dt('inputtext.color'), ";\n    background: ").concat(dt('inputtext.background'), ";\n    padding-block: ").concat(dt('inputtext.padding.y'), ";\n    padding-inline: ").concat(dt('inputtext.padding.x'), ";\n    border: 1px solid ").concat(dt('inputtext.border.color'), ";\n    transition: background ").concat(dt('inputtext.transition.duration'), ", color ").concat(dt('inputtext.transition.duration'), ", border-color ").concat(dt('inputtext.transition.duration'), ", outline-color ").concat(dt('inputtext.transition.duration'), ", box-shadow ").concat(dt('inputtext.transition.duration'), ";\n    appearance: none;\n    border-radius: ").concat(dt('inputtext.border.radius'), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt('inputtext.shadow'), ";\n}\n\n.p-inputtext:enabled:hover {\n    border-color: ").concat(dt('inputtext.hover.border.color'), ";\n}\n\n.p-inputtext:enabled:focus {\n    border-color: ").concat(dt('inputtext.focus.border.color'), ";\n    box-shadow: ").concat(dt('inputtext.focus.ring.shadow'), ";\n    outline: ").concat(dt('inputtext.focus.ring.width'), " ").concat(dt('inputtext.focus.ring.style'), " ").concat(dt('inputtext.focus.ring.color'), ";\n    outline-offset: ").concat(dt('inputtext.focus.ring.offset'), ";\n}\n\n.p-inputtext.p-invalid {\n    border-color: ").concat(dt('inputtext.invalid.border.color'), ";\n}\n\n.p-inputtext.p-variant-filled {\n    background: ").concat(dt('inputtext.filled.background'), ";\n}\n\n.p-inputtext.p-variant-filled:enabled:hover {\n    background: ").concat(dt('inputtext.filled.hover.background'), ";\n}\n\n.p-inputtext.p-variant-filled:enabled:focus {\n    background: ").concat(dt('inputtext.filled.focus.background'), ";\n}\n\n.p-inputtext:disabled {\n    opacity: 1;\n    background: ").concat(dt('inputtext.disabled.background'), ";\n    color: ").concat(dt('inputtext.disabled.color'), ";\n}\n\n.p-inputtext::placeholder {\n    color: ").concat(dt('inputtext.placeholder.color'), ";\n}\n\n.p-inputtext.p-invalid::placeholder {\n    color: ").concat(dt('inputtext.invalid.placeholder.color'), ";\n}\n\n.p-inputtext-sm {\n    font-size: ").concat(dt('inputtext.sm.font.size'), ";\n    padding-block: ").concat(dt('inputtext.sm.padding.y'), ";\n    padding-inline: ").concat(dt('inputtext.sm.padding.x'), ";\n}\n\n.p-inputtext-lg {\n    font-size: ").concat(dt('inputtext.lg.font.size'), ";\n    padding-block: ").concat(dt('inputtext.lg.padding.y'), ";\n    padding-inline: ").concat(dt('inputtext.lg.padding.x'), ";\n}\n\n.p-inputtext-fluid {\n    width: 100%;\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-inputtext p-component', {
      'p-filled': instance.$filled,
      'p-inputtext-sm p-inputfield-sm': props.size === 'small',
      'p-inputtext-lg p-inputfield-lg': props.size === 'large',
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-inputtext-fluid': instance.$fluid
    }];
  }
};
var InputTextStyle = BaseStyle.extend({
  name: 'inputtext',
  theme: theme,
  classes: classes
});

export { InputTextStyle as default };
//# sourceMappingURL=index.mjs.map
