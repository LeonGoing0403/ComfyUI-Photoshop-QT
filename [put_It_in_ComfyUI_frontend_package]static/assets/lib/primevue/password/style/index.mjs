import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-password {\n    display: inline-flex;\n    position: relative;\n}\n\n.p-password .p-password-overlay {\n    min-width: 100%;\n}\n\n.p-password-meter {\n    height: ".concat(dt('password.meter.height'), ";\n    background: ").concat(dt('password.meter.background'), ";\n    border-radius: ").concat(dt('password.meter.border.radius'), ";\n}\n\n.p-password-meter-label {\n    height: 100%;\n    width: 0;\n    transition: width 1s ease-in-out;\n    border-radius: ").concat(dt('password.meter.border.radius'), ";\n}\n\n.p-password-meter-weak {\n    background: ").concat(dt('password.strength.weak.background'), ";\n}\n\n.p-password-meter-medium {\n    background: ").concat(dt('password.strength.medium.background'), ";\n}\n\n.p-password-meter-strong {\n    background: ").concat(dt('password.strength.strong.background'), ";\n}\n\n.p-password-fluid {\n    display: flex;\n}\n\n.p-password-fluid .p-password-input {\n    width: 100%;\n}\n\n.p-password-input::-ms-reveal,\n.p-password-input::-ms-clear {\n    display: none;\n}\n\n.p-password-overlay {\n    padding: ").concat(dt('password.overlay.padding'), ";\n    background: ").concat(dt('password.overlay.background'), ";\n    color: ").concat(dt('password.overlay.color'), ";\n    border: 1px solid ").concat(dt('password.overlay.border.color'), ";\n    box-shadow: ").concat(dt('password.overlay.shadow'), ";\n    border-radius: ").concat(dt('password.overlay.border.radius'), ";\n}\n\n.p-password-content {\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('password.content.gap'), ";\n}\n\n.p-password-toggle-mask-icon {\n    inset-inline-end: ").concat(dt('form.field.padding.x'), ";\n    color: ").concat(dt('password.icon.color'), ";\n    position: absolute;\n    top: 50%;\n    margin-top: calc(-1 * calc(").concat(dt('icon.size'), " / 2));\n    width: ").concat(dt('icon.size'), ";\n    height: ").concat(dt('icon.size'), ";\n}\n\n.p-password:has(.p-password-toggle-mask-icon) .p-password-input {\n    padding-inline-end: calc((").concat(dt('form.field.padding.x'), " * 2) + ").concat(dt('icon.size'), ");\n}\n");
};
var inlineStyles = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes = {
  root: function root(_ref3) {
    var instance = _ref3.instance;
    return ['p-password p-component p-inputwrapper', {
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused,
      'p-password-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-password-input',
  maskIcon: 'p-password-toggle-mask-icon p-password-mask-icon',
  unmaskIcon: 'p-password-toggle-mask-icon p-password-unmask-icon',
  overlay: 'p-password-overlay p-component',
  content: 'p-password-content',
  meter: 'p-password-meter',
  meterLabel: function meterLabel(_ref4) {
    var instance = _ref4.instance;
    return "p-password-meter-label ".concat(instance.meter ? 'p-password-meter-' + instance.meter.strength : '');
  },
  meterText: 'p-password-meter-text'
};
var PasswordStyle = BaseStyle.extend({
  name: 'password',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { PasswordStyle as default };
//# sourceMappingURL=index.mjs.map
