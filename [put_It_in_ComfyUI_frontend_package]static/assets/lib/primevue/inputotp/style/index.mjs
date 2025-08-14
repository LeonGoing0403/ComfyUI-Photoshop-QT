import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputotp {\n    display: flex;\n    align-items: center;\n    gap: ".concat(dt('inputotp.gap'), ";\n}\n\n.p-inputotp-input {\n    text-align: center;\n    width: ").concat(dt('inputotp.input.width'), ";\n}\n\n.p-inputotp-input.p-inputtext-sm {\n    text-align: center;\n    width: ").concat(dt('inputotp.input.sm.width'), ";\n}\n\n.p-inputotp-input.p-inputtext-lg {\n    text-align: center;\n    width: ").concat(dt('inputotp.input.lg.width'), ";\n}\n");
};
var classes = {
  root: 'p-inputotp p-component',
  pcInputText: 'p-inputotp-input'
};
var InputOtpStyle = BaseStyle.extend({
  name: 'inputotp',
  theme: theme,
  classes: classes
});

export { InputOtpStyle as default };
//# sourceMappingURL=index.mjs.map
