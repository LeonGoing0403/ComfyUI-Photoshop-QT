import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputnumber {\n    display: inline-flex;\n    position: relative;\n}\n\n.p-inputnumber-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 auto;\n    cursor: pointer;\n    background: ".concat(dt('inputnumber.button.background'), ";\n    color: ").concat(dt('inputnumber.button.color'), ";\n    width: ").concat(dt('inputnumber.button.width'), ";\n    transition: background ").concat(dt('inputnumber.transition.duration'), ", color ").concat(dt('inputnumber.transition.duration'), ", border-color ").concat(dt('inputnumber.transition.duration'), ", outline-color ").concat(dt('inputnumber.transition.duration'), ";\n}\n\n.p-inputnumber-button:hover {\n    background: ").concat(dt('inputnumber.button.hover.background'), ";\n    color: ").concat(dt('inputnumber.button.hover.color'), ";\n}\n\n.p-inputnumber-button:active {\n    background: ").concat(dt('inputnumber.button.active.background'), ";\n    color: ").concat(dt('inputnumber.button.active.color'), ";\n}\n\n.p-inputnumber-stacked .p-inputnumber-button {\n    position: relative;\n    border: 0 none;\n}\n\n.p-inputnumber-stacked .p-inputnumber-button-group {\n    display: flex;\n    flex-direction: column;\n    position: absolute;\n    inset-block-start: 1px;\n    inset-inline-end: 1px;\n    height: calc(100% - 2px);\n    z-index: 1;\n}\n\n.p-inputnumber-stacked .p-inputnumber-increment-button {\n    padding: 0;\n    border-start-end-radius: calc(").concat(dt('inputnumber.button.border.radius'), " - 1px);\n}\n\n.p-inputnumber-stacked .p-inputnumber-decrement-button {\n    padding: 0;\n    border-end-end-radius: calc(").concat(dt('inputnumber.button.border.radius'), " - 1px);\n}\n\n.p-inputnumber-stacked .p-inputnumber-button {\n    flex: 1 1 auto;\n    border: 0 none;\n}\n\n.p-inputnumber-horizontal .p-inputnumber-button {\n    border: 1px solid ").concat(dt('inputnumber.button.border.color'), ";\n}\n\n.p-inputnumber-horizontal .p-inputnumber-button:hover {\n    border-color: ").concat(dt('inputnumber.button.hover.border.color'), ";\n}\n\n.p-inputnumber-horizontal .p-inputnumber-button:active {\n    border-color: ").concat(dt('inputnumber.button.active.border.color'), ";\n}\n\n.p-inputnumber-horizontal .p-inputnumber-increment-button {\n    order: 3;\n    border-start-end-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    border-end-end-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    border-inline-start: 0 none;\n}\n\n.p-inputnumber-horizontal .p-inputnumber-input {\n    order: 2;\n    border-radius: 0;\n}\n\n.p-inputnumber-horizontal .p-inputnumber-decrement-button {\n    order: 1;\n    border-start-start-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    border-end-start-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    border-inline-end: 0 none;\n}\n\n.p-floatlabel:has(.p-inputnumber-horizontal) label {\n    margin-inline-start: ").concat(dt('inputnumber.button.width'), ";\n}\n\n.p-inputnumber-vertical {\n    flex-direction: column;\n}\n\n.p-inputnumber-vertical .p-inputnumber-button {\n    border: 1px solid ").concat(dt('inputnumber.button.border.color'), ";\n    padding: ").concat(dt('inputnumber.button.vertical.padding'), ";\n}\n\n.p-inputnumber-vertical .p-inputnumber-button:hover {\n    border-color: ").concat(dt('inputnumber.button.hover.border.color'), ";\n}\n\n.p-inputnumber-vertical .p-inputnumber-button:active {\n    border-color: ").concat(dt('inputnumber.button.active.border.color'), ";\n}\n\n.p-inputnumber-vertical .p-inputnumber-increment-button {\n    order: 1;\n    border-start-start-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    border-start-end-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    width: 100%;\n    border-block-end: 0 none;\n}\n\n.p-inputnumber-vertical .p-inputnumber-input {\n    order: 2;\n    border-radius: 0;\n    text-align: center;\n}\n\n.p-inputnumber-vertical .p-inputnumber-decrement-button {\n    order: 3;\n    border-end-start-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    border-end-end-radius: ").concat(dt('inputnumber.button.border.radius'), ";\n    width: 100%;\n    border-block-start: 0 none;\n}\n\n.p-inputnumber-input {\n    flex: 1 1 auto;\n}\n\n.p-inputnumber-fluid {\n    width: 100%;\n}\n\n.p-inputnumber-fluid .p-inputnumber-input {\n    width: 1%;\n}\n\n.p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {\n    width: 100%;\n}\n\n.p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {\n    font-size: ").concat(dt('form.field.sm.font.size'), ";\n    width: ").concat(dt('form.field.sm.font.size'), ";\n    height: ").concat(dt('form.field.sm.font.size'), ";\n}\n\n.p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {\n    font-size: ").concat(dt('form.field.lg.font.size'), ";\n    width: ").concat(dt('form.field.lg.font.size'), ";\n    height: ").concat(dt('form.field.lg.font.size'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-inputnumber p-component p-inputwrapper', {
      'p-inputwrapper-filled': instance.$filled || props.allowEmpty === false,
      'p-inputwrapper-focus': instance.focused,
      'p-inputnumber-stacked': props.showButtons && props.buttonLayout === 'stacked',
      'p-inputnumber-horizontal': props.showButtons && props.buttonLayout === 'horizontal',
      'p-inputnumber-vertical': props.showButtons && props.buttonLayout === 'vertical',
      'p-inputnumber-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-inputnumber-input',
  buttonGroup: 'p-inputnumber-button-group',
  incrementButton: function incrementButton(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-inputnumber-button p-inputnumber-increment-button', {
      'p-disabled': props.showButtons && props.max !== null && instance.maxBoundry()
    }];
  },
  decrementButton: function decrementButton(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props;
    return ['p-inputnumber-button p-inputnumber-decrement-button', {
      'p-disabled': props.showButtons && props.min !== null && instance.minBoundry()
    }];
  }
};
var InputNumberStyle = BaseStyle.extend({
  name: 'inputnumber',
  theme: theme,
  classes: classes
});

export { InputNumberStyle as default };
//# sourceMappingURL=index.mjs.map
