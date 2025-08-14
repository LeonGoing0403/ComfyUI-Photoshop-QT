import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-radiobutton {\n    position: relative;\n    display: inline-flex;\n    user-select: none;\n    vertical-align: bottom;\n    width: ".concat(dt('radiobutton.width'), ";\n    height: ").concat(dt('radiobutton.height'), ";\n}\n\n.p-radiobutton-input {\n    cursor: pointer;\n    appearance: none;\n    position: absolute;\n    top: 0;\n    inset-inline-start: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    z-index: 1;\n    outline: 0 none;\n    border: 1px solid transparent;\n    border-radius: 50%;\n}\n\n.p-radiobutton-box {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 50%;\n    border: 1px solid ").concat(dt('radiobutton.border.color'), ";\n    background: ").concat(dt('radiobutton.background'), ";\n    width: ").concat(dt('radiobutton.width'), ";\n    height: ").concat(dt('radiobutton.height'), ";\n    transition: background ").concat(dt('radiobutton.transition.duration'), ", color ").concat(dt('radiobutton.transition.duration'), ", border-color ").concat(dt('radiobutton.transition.duration'), ", box-shadow ").concat(dt('radiobutton.transition.duration'), ", outline-color ").concat(dt('radiobutton.transition.duration'), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt('radiobutton.shadow'), ";\n}\n\n.p-radiobutton-icon {\n    transition-duration: ").concat(dt('radiobutton.transition.duration'), ";\n    background: transparent;\n    font-size: ").concat(dt('radiobutton.icon.size'), ";\n    width: ").concat(dt('radiobutton.icon.size'), ";\n    height: ").concat(dt('radiobutton.icon.size'), ";\n    border-radius: 50%;\n    backface-visibility: hidden;\n    transform: translateZ(0) scale(0.1);\n}\n\n.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {\n    border-color: ").concat(dt('radiobutton.hover.border.color'), ";\n}\n\n.p-radiobutton-checked .p-radiobutton-box {\n    border-color: ").concat(dt('radiobutton.checked.border.color'), ";\n    background: ").concat(dt('radiobutton.checked.background'), ";\n}\n\n.p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {\n    background: ").concat(dt('radiobutton.icon.checked.color'), ";\n    transform: translateZ(0) scale(1, 1);\n    visibility: visible;\n}\n\n.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) .p-radiobutton-box {\n    border-color: ").concat(dt('radiobutton.checked.hover.border.color'), ";\n    background: ").concat(dt('radiobutton.checked.hover.background'), ";\n}\n\n.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box .p-radiobutton-icon {\n    background: ").concat(dt('radiobutton.icon.checked.hover.color'), ";\n}\n\n.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {\n    border-color: ").concat(dt('radiobutton.focus.border.color'), ";\n    box-shadow: ").concat(dt('radiobutton.focus.ring.shadow'), ";\n    outline: ").concat(dt('radiobutton.focus.ring.width'), " ").concat(dt('radiobutton.focus.ring.style'), " ").concat(dt('radiobutton.focus.ring.color'), ";\n    outline-offset: ").concat(dt('radiobutton.focus.ring.offset'), ";\n}\n\n.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) .p-radiobutton-box {\n    border-color: ").concat(dt('radiobutton.checked.focus.border.color'), ";\n}\n\n.p-radiobutton.p-invalid > .p-radiobutton-box {\n    border-color: ").concat(dt('radiobutton.invalid.border.color'), ";\n}\n\n.p-radiobutton.p-variant-filled .p-radiobutton-box {\n    background: ").concat(dt('radiobutton.filled.background'), ";\n}\n\n.p-radiobutton.p-variant-filled.p-radiobutton-checked .p-radiobutton-box {\n    background: ").concat(dt('radiobutton.checked.background'), ";\n}\n\n.p-radiobutton.p-variant-filled:not(.p-disabled):has(.p-radiobutton-input:hover).p-radiobutton-checked .p-radiobutton-box {\n    background: ").concat(dt('radiobutton.checked.hover.background'), ";\n}\n\n.p-radiobutton.p-disabled {\n    opacity: 1;\n}\n\n.p-radiobutton.p-disabled .p-radiobutton-box {\n    background: ").concat(dt('radiobutton.disabled.background'), ";\n    border-color: ").concat(dt('radiobutton.checked.disabled.border.color'), ";\n}\n\n.p-radiobutton-checked.p-disabled .p-radiobutton-box .p-radiobutton-icon {\n    background: ").concat(dt('radiobutton.icon.disabled.color'), ";\n}\n\n.p-radiobutton-sm,\n.p-radiobutton-sm .p-radiobutton-box {\n    width: ").concat(dt('radiobutton.sm.width'), ";\n    height: ").concat(dt('radiobutton.sm.height'), ";\n}\n\n.p-radiobutton-sm .p-radiobutton-icon {\n    font-size: ").concat(dt('radiobutton.icon.sm.size'), ";\n    width: ").concat(dt('radiobutton.icon.sm.size'), ";\n    height: ").concat(dt('radiobutton.icon.sm.size'), ";\n}\n\n.p-radiobutton-lg,\n.p-radiobutton-lg .p-radiobutton-box {\n    width: ").concat(dt('radiobutton.lg.width'), ";\n    height: ").concat(dt('radiobutton.lg.height'), ";\n}\n\n.p-radiobutton-lg .p-radiobutton-icon {\n    font-size: ").concat(dt('radiobutton.icon.lg.size'), ";\n    width: ").concat(dt('radiobutton.icon.lg.size'), ";\n    height: ").concat(dt('radiobutton.icon.lg.size'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-radiobutton p-component', {
      'p-radiobutton-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$pcRadioButtonGroup ? instance.$pcRadioButtonGroup.$invalid : instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-radiobutton-sm p-inputfield-sm': props.size === 'small',
      'p-radiobutton-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  box: 'p-radiobutton-box',
  input: 'p-radiobutton-input',
  icon: 'p-radiobutton-icon'
};
var RadioButtonStyle = BaseStyle.extend({
  name: 'radiobutton',
  theme: theme,
  classes: classes
});

export { RadioButtonStyle as default };
//# sourceMappingURL=index.mjs.map
