import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-inlinemessage {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: ".concat(dt('inlinemessage.padding'), ";\n    border-radius: ").concat(dt('inlinemessage.border.radius'), ";\n    gap: ").concat(dt('inlinemessage.gap'), ";\n}\n\n.p-inlinemessage-text {\n    font-weight: ").concat(dt('inlinemessage.text.font.weight'), ";\n}\n\n.p-inlinemessage-icon {\n    flex-shrink: 0;\n    font-size: ").concat(dt('inlinemessage.icon.size'), ";\n    width: ").concat(dt('inlinemessage.icon.size'), ";\n    height: ").concat(dt('inlinemessage.icon.size'), ";\n}\n\n.p-inlinemessage-icon-only .p-inlinemessage-text {\n    visibility: hidden;\n    width: 0;\n}\n\n.p-inlinemessage-info {\n    background: ").concat(dt('inlinemessage.info.background'), ";\n    border: 1px solid ").concat(dt('inlinemessage.info.border.color'), ";\n    color: ").concat(dt('inlinemessage.info.color'), ";\n    box-shadow: ").concat(dt('inlinemessage.info.shadow'), ";\n}\n\n.p-inlinemessage-info .p-inlinemessage-icon {\n    color: ").concat(dt('inlinemessage.info.color'), ";\n}\n\n.p-inlinemessage-success {\n    background: ").concat(dt('inlinemessage.success.background'), ";\n    border: 1px solid ").concat(dt('inlinemessage.success.border.color'), ";\n    color: ").concat(dt('inlinemessage.success.color'), ";\n    box-shadow: ").concat(dt('inlinemessage.success.shadow'), ";\n}\n\n.p-inlinemessage-success .p-inlinemessage-icon {\n    color: ").concat(dt('inlinemessage.success.color'), ";\n}\n\n.p-inlinemessage-warn {\n    background: ").concat(dt('inlinemessage.warn.background'), ";\n    border: 1px solid ").concat(dt('inlinemessage.warn.border.color'), ";\n    color: ").concat(dt('inlinemessage.warn.color'), ";\n    box-shadow: ").concat(dt('inlinemessage.warn.shadow'), ";\n}\n\n.p-inlinemessage-warn .p-inlinemessage-icon {\n    color: ").concat(dt('inlinemessage.warn.color'), ";\n}\n\n.p-inlinemessage-error {\n    background: ").concat(dt('inlinemessage.error.background'), ";\n    border: 1px solid ").concat(dt('inlinemessage.error.border.color'), ";\n    color: ").concat(dt('inlinemessage.error.color'), ";\n    box-shadow: ").concat(dt('inlinemessage.error.shadow'), ";\n}\n\n.p-inlinemessage-error .p-inlinemessage-icon {\n    color: ").concat(dt('inlinemessage.error.color'), ";\n}\n\n.p-inlinemessage-secondary {\n    background: ").concat(dt('inlinemessage.secondary.background'), ";\n    border: 1px solid ").concat(dt('inlinemessage.secondary.border.color'), ";\n    color: ").concat(dt('inlinemessage.secondary.color'), ";\n    box-shadow: ").concat(dt('inlinemessage.secondary.shadow'), ";\n}\n\n.p-inlinemessage-secondary .p-inlinemessage-icon {\n    color: ").concat(dt('inlinemessage.secondary.color'), ";\n}\n\n.p-inlinemessage-contrast {\n    background: ").concat(dt('inlinemessage.contrast.background'), ";\n    border: 1px solid ").concat(dt('inlinemessage.contrast.border.color'), ";\n    color: ").concat(dt('inlinemessage.contrast.color'), ";\n    box-shadow: ").concat(dt('inlinemessage.contrast.shadow'), ";\n}\n\n.p-inlinemessage-contrast .p-inlinemessage-icon {\n    color: ").concat(dt('inlinemessage.contrast.color'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props,
      instance = _ref2.instance;
    return ['p-inlinemessage p-component p-inlinemessage-' + props.severity, {
      'p-inlinemessage-icon-only': !instance.$slots["default"]
    }];
  },
  icon: function icon(_ref3) {
    var props = _ref3.props;
    return ['p-inlinemessage-icon', props.icon];
  },
  text: 'p-inlinemessage-text'
};
var InlineMessageStyle = BaseStyle.extend({
  name: 'inlinemessage',
  theme: theme,
  classes: classes
});

export { InlineMessageStyle as default };
//# sourceMappingURL=index.mjs.map
