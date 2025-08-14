import { isNotEmpty } from '@primeuix/utils/object';
import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-autocomplete {\n    display: inline-flex;\n}\n\n.p-autocomplete-loader {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n    inset-inline-end: ".concat(dt('autocomplete.padding.x'), ";\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-loader {\n    inset-inline-end: calc(").concat(dt('autocomplete.dropdown.width'), " + ").concat(dt('autocomplete.padding.x'), ");\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input,\n.p-autocomplete:has(.p-autocomplete-dropdown) .p-autocomplete-input-multiple {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n}\n\n.p-autocomplete-dropdown {\n    cursor: pointer;\n    display: inline-flex;\n    user-select: none;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    width: ").concat(dt('autocomplete.dropdown.width'), ";\n    border-start-end-radius: ").concat(dt('autocomplete.dropdown.border.radius'), ";\n    border-end-end-radius: ").concat(dt('autocomplete.dropdown.border.radius'), ";\n    background: ").concat(dt('autocomplete.dropdown.background'), ";\n    border: 1px solid ").concat(dt('autocomplete.dropdown.border.color'), ";\n    border-inline-start: 0 none;\n    color: ").concat(dt('autocomplete.dropdown.color'), ";\n    transition: background ").concat(dt('autocomplete.transition.duration'), ", color ").concat(dt('autocomplete.transition.duration'), ", border-color ").concat(dt('autocomplete.transition.duration'), ", outline-color ").concat(dt('autocomplete.transition.duration'), ", box-shadow ").concat(dt('autocomplete.transition.duration'), ";\n    outline-color: transparent;\n}\n\n.p-autocomplete-dropdown:not(:disabled):hover {\n    background: ").concat(dt('autocomplete.dropdown.hover.background'), ";\n    border-color: ").concat(dt('autocomplete.dropdown.hover.border.color'), ";\n    color: ").concat(dt('autocomplete.dropdown.hover.color'), ";\n}\n\n.p-autocomplete-dropdown:not(:disabled):active {\n    background: ").concat(dt('autocomplete.dropdown.active.background'), ";\n    border-color: ").concat(dt('autocomplete.dropdown.active.border.color'), ";\n    color: ").concat(dt('autocomplete.dropdown.active.color'), ";\n}\n\n.p-autocomplete-dropdown:focus-visible {\n    box-shadow: ").concat(dt('autocomplete.dropdown.focus.ring.shadow'), ";\n    outline: ").concat(dt('autocomplete.dropdown.focus.ring.width'), " ").concat(dt('autocomplete.dropdown.focus.ring.style'), " ").concat(dt('autocomplete.dropdown.focus.ring.color'), ";\n    outline-offset: ").concat(dt('autocomplete.dropdown.focus.ring.offset'), ";\n}\n\n.p-autocomplete .p-autocomplete-overlay {\n    min-width: 100%;\n}\n\n.p-autocomplete-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ").concat(dt('autocomplete.overlay.background'), ";\n    color: ").concat(dt('autocomplete.overlay.color'), ";\n    border: 1px solid ").concat(dt('autocomplete.overlay.border.color'), ";\n    border-radius: ").concat(dt('autocomplete.overlay.border.radius'), ";\n    box-shadow: ").concat(dt('autocomplete.overlay.shadow'), ";\n}\n\n.p-autocomplete-list-container {\n    overflow: auto;\n}\n\n.p-autocomplete-list {\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('autocomplete.list.gap'), ";\n    padding: ").concat(dt('autocomplete.list.padding'), ";\n}\n\n.p-autocomplete-option {\n    cursor: pointer;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt('autocomplete.option.padding'), ";\n    border: 0 none;\n    color: ").concat(dt('autocomplete.option.color'), ";\n    background: transparent;\n    transition: background ").concat(dt('autocomplete.transition.duration'), ", color ").concat(dt('autocomplete.transition.duration'), ", border-color ").concat(dt('autocomplete.transition.duration'), ";\n    border-radius: ").concat(dt('autocomplete.option.border.radius'), ";\n}\n\n.p-autocomplete-option:not(.p-autocomplete-option-selected):not(.p-disabled).p-focus {\n    background: ").concat(dt('autocomplete.option.focus.background'), ";\n    color: ").concat(dt('autocomplete.option.focus.color'), ";\n}\n\n.p-autocomplete-option-selected {\n    background: ").concat(dt('autocomplete.option.selected.background'), ";\n    color: ").concat(dt('autocomplete.option.selected.color'), ";\n}\n\n.p-autocomplete-option-selected.p-focus {\n    background: ").concat(dt('autocomplete.option.selected.focus.background'), ";\n    color: ").concat(dt('autocomplete.option.selected.focus.color'), ";\n}\n\n.p-autocomplete-option-group {\n    margin: 0;\n    padding: ").concat(dt('autocomplete.option.group.padding'), ";\n    color: ").concat(dt('autocomplete.option.group.color'), ";\n    background: ").concat(dt('autocomplete.option.group.background'), ";\n    font-weight: ").concat(dt('autocomplete.option.group.font.weight'), ";\n}\n\n.p-autocomplete-input-multiple {\n    margin: 0;\n    list-style-type: none;\n    cursor: text;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    padding: calc(").concat(dt('autocomplete.padding.y'), " / 2) ").concat(dt('autocomplete.padding.x'), ";\n    gap: calc(").concat(dt('autocomplete.padding.y'), " / 2);\n    color: ").concat(dt('autocomplete.color'), ";\n    background: ").concat(dt('autocomplete.background'), ";\n    border: 1px solid ").concat(dt('autocomplete.border.color'), ";\n    border-radius: ").concat(dt('autocomplete.border.radius'), ";\n    width: 100%;\n    transition: background ").concat(dt('autocomplete.transition.duration'), ", color ").concat(dt('autocomplete.transition.duration'), ", border-color ").concat(dt('autocomplete.transition.duration'), ", outline-color ").concat(dt('autocomplete.transition.duration'), ", box-shadow ").concat(dt('autocomplete.transition.duration'), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt('autocomplete.shadow'), ";\n}\n\n.p-autocomplete:not(.p-disabled):hover .p-autocomplete-input-multiple {\n    border-color: ").concat(dt('autocomplete.hover.border.color'), ";\n}\n\n.p-autocomplete:not(.p-disabled).p-focus .p-autocomplete-input-multiple {\n    border-color: ").concat(dt('autocomplete.focus.border.color'), ";\n    box-shadow: ").concat(dt('autocomplete.focus.ring.shadow'), ";\n    outline: ").concat(dt('autocomplete.focus.ring.width'), " ").concat(dt('autocomplete.focus.ring.style'), " ").concat(dt('autocomplete.focus.ring.color'), ";\n    outline-offset: ").concat(dt('autocomplete.focus.ring.offset'), ";\n}\n\n.p-autocomplete.p-invalid .p-autocomplete-input-multiple {\n    border-color: ").concat(dt('autocomplete.invalid.border.color'), ";\n}\n\n.p-variant-filled.p-autocomplete-input-multiple {\n    background: ").concat(dt('autocomplete.filled.background'), ";\n}\n\n.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {\n    background: ").concat(dt('autocomplete.filled.hover.background'), ";\n}\n\n.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple  {\n    background: ").concat(dt('autocomplete.filled.focus.background'), ";\n}\n\n.p-autocomplete.p-disabled .p-autocomplete-input-multiple {\n    opacity: 1;\n    background: ").concat(dt('autocomplete.disabled.background'), ";\n    color: ").concat(dt('autocomplete.disabled.color'), ";\n}\n\n.p-autocomplete-chip.p-chip {\n    padding-block-start: calc(").concat(dt('autocomplete.padding.y'), " / 2);\n    padding-block-end: calc(").concat(dt('autocomplete.padding.y'), " / 2);\n    border-radius: ").concat(dt('autocomplete.chip.border.radius'), ";\n}\n\n.p-autocomplete-input-multiple:has(.p-autocomplete-chip) {\n    padding-inline-start: calc(").concat(dt('autocomplete.padding.y'), " / 2);\n    padding-inline-end: calc(").concat(dt('autocomplete.padding.y'), " / 2);\n}\n\n.p-autocomplete-chip-item.p-focus .p-autocomplete-chip {\n    background: ").concat(dt('autocomplete.chip.focus.background'), ";\n    color: ").concat(dt('autocomplete.chip.focus.color'), ";\n}\n\n.p-autocomplete-input-chip {\n    flex: 1 1 auto;\n    display: inline-flex;\n    padding-block-start: calc(").concat(dt('autocomplete.padding.y'), " / 2);\n    padding-block-end: calc(").concat(dt('autocomplete.padding.y'), " / 2);\n}\n\n.p-autocomplete-input-chip input {\n    border: 0 none;\n    outline: 0 none;\n    background: transparent;\n    margin: 0;\n    padding: 0;\n    box-shadow: none;\n    border-radius: 0;\n    width: 100%;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    font-size: 1rem;\n    color: inherit;\n}\n\n.p-autocomplete-input-chip input::placeholder {\n    color: ").concat(dt('autocomplete.placeholder.color'), ";\n}\n\n.p-autocomplete.p-invalid .p-autocomplete-input-chip input::placeholder {\n    color: ").concat(dt('autocomplete.invalid.placeholder.color'), ";\n}\n\n.p-autocomplete-empty-message {\n    padding: ").concat(dt('autocomplete.empty.message.padding'), ";\n}\n\n.p-autocomplete-fluid {\n    display: flex;\n}\n\n.p-autocomplete-fluid:has(.p-autocomplete-dropdown) .p-autocomplete-input {\n    width: 1%;\n}\n\n.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown {\n    width: ").concat(dt('autocomplete.dropdown.sm.width'), ";\n}\n\n.p-autocomplete:has(.p-inputtext-sm) .p-autocomplete-dropdown .p-icon {\n    font-size: ").concat(dt('form.field.sm.font.size'), ";\n    width: ").concat(dt('form.field.sm.font.size'), ";\n    height: ").concat(dt('form.field.sm.font.size'), ";\n}\n\n.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown {\n    width: ").concat(dt('autocomplete.dropdown.lg.width'), ";\n}\n\n.p-autocomplete:has(.p-inputtext-lg) .p-autocomplete-dropdown .p-icon {\n    font-size: ").concat(dt('form.field.lg.font.size'), ";\n    width: ").concat(dt('form.field.lg.font.size'), ";\n    height: ").concat(dt('form.field.lg.font.size'), ";\n}\n");
};
var inlineStyles = {
  root: {
    position: 'relative'
  }
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-autocomplete p-component p-inputwrapper', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled || isNotEmpty(instance.inputValue),
      'p-inputwrapper-focus': instance.focused,
      'p-autocomplete-open': instance.overlayVisible,
      'p-autocomplete-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-autocomplete-input',
  inputMultiple: function inputMultiple(_ref3) {
    _ref3.props;
      var instance = _ref3.instance;
    return ['p-autocomplete-input-multiple', {
      'p-variant-filled': instance.$variant === 'filled'
    }];
  },
  chipItem: function chipItem(_ref4) {
    var instance = _ref4.instance,
      i = _ref4.i;
    return ['p-autocomplete-chip-item', {
      'p-focus': instance.focusedMultipleOptionIndex === i
    }];
  },
  pcChip: 'p-autocomplete-chip',
  chipIcon: 'p-autocomplete-chip-icon',
  inputChip: 'p-autocomplete-input-chip',
  loader: 'p-autocomplete-loader',
  dropdown: 'p-autocomplete-dropdown',
  overlay: 'p-autocomplete-overlay p-component',
  listContainer: 'p-autocomplete-list-container',
  list: 'p-autocomplete-list',
  optionGroup: 'p-autocomplete-option-group',
  option: function option(_ref5) {
    var instance = _ref5.instance,
      _option = _ref5.option,
      i = _ref5.i,
      getItemOptions = _ref5.getItemOptions;
    return ['p-autocomplete-option', {
      'p-autocomplete-option-selected': instance.isSelected(_option),
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(i, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: 'p-autocomplete-empty-message'
};
var AutoCompleteStyle = BaseStyle.extend({
  name: 'autocomplete',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { AutoCompleteStyle as default };
//# sourceMappingURL=index.mjs.map
