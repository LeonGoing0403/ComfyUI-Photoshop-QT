import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-inputchips {\n    display: inline-flex;\n}\n\n.p-inputchips-input {\n    margin: 0;\n    list-style-type: none;\n    cursor: text;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: calc(".concat(dt('inputchips.padding.y'), " / 2) ").concat(dt('inputchips.padding.x'), ";\n    gap: calc(").concat(dt('inputchips.padding.y'), " / 2);\n    color: ").concat(dt('inputchips.color'), ";\n    background: ").concat(dt('inputchips.background'), ";\n    border: 1px solid ").concat(dt('inputchips.border.color'), ";\n    border-radius: ").concat(dt('inputchips.border.radius'), ";\n    width: 100%;\n    transition: background ").concat(dt('inputchips.transition.duration'), ", color ").concat(dt('inputchips.transition.duration'), ", border-color ").concat(dt('inputchips.transition.duration'), ", outline-color ").concat(dt('inputchips.transition.duration'), ", box-shadow ").concat(dt('inputchips.transition.duration'), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt('inputchips.shadow'), ";\n}\n\n.p-inputchips:not(.p-disabled):hover .p-inputchips-input {\n    border-color: ").concat(dt('inputchips.hover.border.color'), ";\n}\n\n.p-inputchips:not(.p-disabled).p-focus .p-inputchips-input {\n    border-color: ").concat(dt('inputchips.focus.border.color'), ";\n    box-shadow: ").concat(dt('inputchips.focus.ring.shadow'), ";\n    outline: ").concat(dt('inputchips.focus.ring.width'), " ").concat(dt('inputchips.focus.ring.style'), " ").concat(dt('inputchips.focus.ring.color'), ";\n    outline-offset: ").concat(dt('inputchips.focus.ring.offset'), ";\n}\n\n.p-inputchips.p-invalid .p-inputchips-input {\n    border-color: ").concat(dt('inputchips.invalid.border.color'), ";\n}\n\n.p-variant-filled.p-inputchips-input {\n    background: ").concat(dt('inputchips.filled.background'), ";\n}\n\n.p-inputchips:not(.p-disabled).p-focus .p-variant-filled.p-inputchips-input  {\n    background: ").concat(dt('inputchips.filled.focus.background'), ";\n}\n\n.p-inputchips.p-disabled .p-inputchips-input {\n    opacity: 1;\n    background: ").concat(dt('inputchips.disabled.background'), ";\n    color: ").concat(dt('inputchips.disabled.color'), ";\n}\n\n.p-inputchips-chip.p-chip {\n    padding-top: calc(").concat(dt('inputchips.padding.y'), " / 2);\n    padding-bottom: calc(").concat(dt('inputchips.padding.y'), " / 2);\n    border-radius: ").concat(dt('inputchips.chip.border.radius'), ";\n    transition: background ").concat(dt('inputchips.transition.duration'), ", color ").concat(dt('inputchips.transition.duration'), ";\n}\n\n.p-inputchips-chip-item.p-focus .p-inputchips-chip {\n    background: ").concat(dt('inputchips.chip.focus.background'), ";\n    color: ").concat(dt('inputchips.chip.focus.color'), ";\n}\n\n.p-inputchips-input:has(.p-inputchips-chip) {\n    padding-left: calc(").concat(dt('inputchips.padding.y'), " / 2);\n    padding-right: calc(").concat(dt('inputchips.padding.y'), " / 2);\n}\n\n.p-inputchips-input-item {\n    flex: 1 1 auto;\n    display: inline-flex;\n    padding-top: calc(").concat(dt('inputchips.padding.y'), " / 2);\n    padding-bottom: calc(").concat(dt('inputchips.padding.y'), " / 2);\n}\n\n.p-inputchips-input-item input {\n    border: 0 none;\n    outline: 0 none;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    box-shadow: none;\n    border-radius: 0;\n    width: 100%;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: inherit;\n}\n\n.p-inputchips-input-item input::placeholder {\n    color: ").concat(dt('inputchips.placeholder.color'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-inputchips p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': props.invalid,
      'p-focus': instance.focused,
      'p-inputwrapper-filled': props.modelValue && props.modelValue.length || instance.inputValue && instance.inputValue.length,
      'p-inputwrapper-focus': instance.focused
    }];
  },
  input: function input(_ref3) {
    var props = _ref3.props,
      instance = _ref3.instance;
    return ['p-inputchips-input', {
      'p-variant-filled': props.variant ? props.variant === 'filled' : instance.$primevue.config.inputStyle === 'filled' || instance.$primevue.config.inputVariant === 'filled'
    }];
  },
  chipItem: function chipItem(_ref4) {
    var state = _ref4.state,
      index = _ref4.index;
    return ['p-inputchips-chip-item', {
      'p-focus': state.focusedIndex === index
    }];
  },
  pcChip: 'p-inputchips-chip',
  chipIcon: 'p-inputchips-chip-icon',
  inputItem: 'p-inputchips-input-item'
};
var InputChipsStyle = BaseStyle.extend({
  name: 'inputchips',
  theme: theme,
  classes: classes
});

export { InputChipsStyle as default };
//# sourceMappingURL=index.mjs.map
