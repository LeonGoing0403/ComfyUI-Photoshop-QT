import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-multiselect {\n    display: inline-flex;\n    cursor: pointer;\n    position: relative;\n    user-select: none;\n    background: ".concat(dt('multiselect.background'), ";\n    border: 1px solid ").concat(dt('multiselect.border.color'), ";\n    transition: background ").concat(dt('multiselect.transition.duration'), ", color ").concat(dt('multiselect.transition.duration'), ", border-color ").concat(dt('multiselect.transition.duration'), ", outline-color ").concat(dt('multiselect.transition.duration'), ", box-shadow ").concat(dt('multiselect.transition.duration'), ";\n    border-radius: ").concat(dt('multiselect.border.radius'), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt('multiselect.shadow'), ";\n}\n\n.p-multiselect:not(.p-disabled):hover {\n    border-color: ").concat(dt('multiselect.hover.border.color'), ";\n}\n\n.p-multiselect:not(.p-disabled).p-focus {\n    border-color: ").concat(dt('multiselect.focus.border.color'), ";\n    box-shadow: ").concat(dt('multiselect.focus.ring.shadow'), ";\n    outline: ").concat(dt('multiselect.focus.ring.width'), " ").concat(dt('multiselect.focus.ring.style'), " ").concat(dt('multiselect.focus.ring.color'), ";\n    outline-offset: ").concat(dt('multiselect.focus.ring.offset'), ";\n}\n\n.p-multiselect.p-variant-filled {\n    background: ").concat(dt('multiselect.filled.background'), ";\n}\n\n.p-multiselect.p-variant-filled:not(.p-disabled):hover {\n    background: ").concat(dt('multiselect.filled.hover.background'), ";\n}\n\n.p-multiselect.p-variant-filled.p-focus {\n    background: ").concat(dt('multiselect.filled.focus.background'), ";\n}\n\n.p-multiselect.p-invalid {\n    border-color: ").concat(dt('multiselect.invalid.border.color'), ";\n}\n\n.p-multiselect.p-disabled {\n    opacity: 1;\n    background: ").concat(dt('multiselect.disabled.background'), ";\n}\n\n.p-multiselect-dropdown {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    background: transparent;\n    color: ").concat(dt('multiselect.dropdown.color'), ";\n    width: ").concat(dt('multiselect.dropdown.width'), ";\n    border-start-end-radius: ").concat(dt('multiselect.border.radius'), ";\n    border-end-end-radius: ").concat(dt('multiselect.border.radius'), ";\n}\n\n.p-multiselect-clear-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n    color: ").concat(dt('multiselect.clear.icon.color'), ";\n    inset-inline-end: ").concat(dt('multiselect.dropdown.width'), ";\n}\n\n.p-multiselect-label-container {\n    overflow: hidden;\n    flex: 1 1 auto;\n    cursor: pointer;\n}\n\n.p-multiselect-label {\n    display: flex;\n    align-items: center;\n    gap: calc(").concat(dt('multiselect.padding.y'), " / 2);\n    white-space: nowrap;\n    cursor: pointer;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: ").concat(dt('multiselect.padding.y'), " ").concat(dt('multiselect.padding.x'), ";\n    color: ").concat(dt('multiselect.color'), ";\n}\n\n.p-multiselect-label.p-placeholder {\n    color: ").concat(dt('multiselect.placeholder.color'), ";\n}\n\n.p-multiselect.p-invalid .p-multiselect-label.p-placeholder {\n    color: ").concat(dt('multiselect.invalid.placeholder.color'), ";\n}\n\n.p-multiselect.p-disabled .p-multiselect-label {\n    color: ").concat(dt('multiselect.disabled.color'), ";\n}\n\n.p-multiselect-label-empty {\n    overflow: hidden;\n    visibility: hidden;\n}\n\n.p-multiselect .p-multiselect-overlay {\n    min-width: 100%;\n}\n\n.p-multiselect-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ").concat(dt('multiselect.overlay.background'), ";\n    color: ").concat(dt('multiselect.overlay.color'), ";\n    border: 1px solid ").concat(dt('multiselect.overlay.border.color'), ";\n    border-radius: ").concat(dt('multiselect.overlay.border.radius'), ";\n    box-shadow: ").concat(dt('multiselect.overlay.shadow'), ";\n}\n\n.p-multiselect-header {\n    display: flex;\n    align-items: center;\n    padding: ").concat(dt('multiselect.list.header.padding'), ";\n}\n\n.p-multiselect-header .p-checkbox {\n    margin-inline-end: ").concat(dt('multiselect.option.gap'), ";\n}\n\n.p-multiselect-filter-container {\n    flex: 1 1 auto;\n}\n\n.p-multiselect-filter {\n    width: 100%;\n}\n\n.p-multiselect-list-container {\n    overflow: auto;\n}\n\n.p-multiselect-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    padding: ").concat(dt('multiselect.list.padding'), ";\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('multiselect.list.gap'), ";\n}\n\n.p-multiselect-option {\n    cursor: pointer;\n    font-weight: normal;\n    white-space: nowrap;\n    position: relative;\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    gap: ").concat(dt('multiselect.option.gap'), ";\n    padding: ").concat(dt('multiselect.option.padding'), ";\n    border: 0 none;\n    color: ").concat(dt('multiselect.option.color'), ";\n    background: transparent;\n    transition: background ").concat(dt('multiselect.transition.duration'), ", color ").concat(dt('multiselect.transition.duration'), ", border-color ").concat(dt('multiselect.transition.duration'), ", box-shadow ").concat(dt('multiselect.transition.duration'), ", outline-color ").concat(dt('multiselect.transition.duration'), ";\n    border-radius: ").concat(dt('multiselect.option.border.radius'), ";\n}\n\n.p-multiselect-option:not(.p-multiselect-option-selected):not(.p-disabled).p-focus {\n    background: ").concat(dt('multiselect.option.focus.background'), ";\n    color: ").concat(dt('multiselect.option.focus.color'), ";\n}\n\n.p-multiselect-option.p-multiselect-option-selected {\n    background: ").concat(dt('multiselect.option.selected.background'), ";\n    color: ").concat(dt('multiselect.option.selected.color'), ";\n}\n\n.p-multiselect-option.p-multiselect-option-selected.p-focus {\n    background: ").concat(dt('multiselect.option.selected.focus.background'), ";\n    color: ").concat(dt('multiselect.option.selected.focus.color'), ";\n}\n\n.p-multiselect-option-group {\n    cursor: auto;\n    margin: 0;\n    padding: ").concat(dt('multiselect.option.group.padding'), ";\n    background: ").concat(dt('multiselect.option.group.background'), ";\n    color: ").concat(dt('multiselect.option.group.color'), ";\n    font-weight: ").concat(dt('multiselect.option.group.font.weight'), ";\n}\n\n.p-multiselect-empty-message {\n    padding: ").concat(dt('multiselect.empty.message.padding'), ";\n}\n\n.p-multiselect-label .p-chip {\n    padding-block-start: calc(").concat(dt('multiselect.padding.y'), " / 2);\n    padding-block-end: calc(").concat(dt('multiselect.padding.y'), " / 2);\n    border-radius: ").concat(dt('multiselect.chip.border.radius'), ";\n}\n\n.p-multiselect-label:has(.p-chip) {\n    padding: calc(").concat(dt('multiselect.padding.y'), " / 2) calc(").concat(dt('multiselect.padding.x'), " / 2);\n}\n\n.p-multiselect-fluid {\n    display: flex;\n    width: 100%;\n}\n\n.p-multiselect-sm .p-multiselect-label {\n    font-size: ").concat(dt('multiselect.sm.font.size'), ";\n    padding-block: ").concat(dt('multiselect.sm.padding.y'), ";\n    padding-inline: ").concat(dt('multiselect.sm.padding.x'), ";\n}\n\n.p-multiselect-sm .p-multiselect-dropdown .p-icon {\n    font-size: ").concat(dt('multiselect.sm.font.size'), ";\n    width: ").concat(dt('multiselect.sm.font.size'), ";\n    height: ").concat(dt('multiselect.sm.font.size'), ";\n}\n\n.p-multiselect-lg .p-multiselect-label {\n    font-size: ").concat(dt('multiselect.lg.font.size'), ";\n    padding-block: ").concat(dt('multiselect.lg.padding.y'), ";\n    padding-inline: ").concat(dt('multiselect.lg.padding.x'), ";\n}\n\n.p-multiselect-lg .p-multiselect-dropdown .p-icon {\n    font-size: ").concat(dt('multiselect.lg.font.size'), ";\n    width: ").concat(dt('multiselect.lg.font.size'), ";\n    height: ").concat(dt('multiselect.lg.font.size'), ";\n}\n");
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
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-multiselect p-component p-inputwrapper', {
      'p-multiselect-display-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-variant-filled': instance.$variant === 'filled',
      'p-focus': instance.focused,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-multiselect-open': instance.overlayVisible,
      'p-multiselect-fluid': instance.$fluid,
      'p-multiselect-sm p-inputfield-sm': props.size === 'small',
      'p-multiselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  labelContainer: 'p-multiselect-label-container',
  label: function label(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props;
    return ['p-multiselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-multiselect-label-empty': !props.placeholder && (!props.modelValue || props.modelValue.length === 0)
    }];
  },
  clearIcon: 'p-multiselect-clear-icon',
  chipItem: 'p-multiselect-chip-item',
  pcChip: 'p-multiselect-chip',
  chipIcon: 'p-multiselect-chip-icon',
  dropdown: 'p-multiselect-dropdown',
  loadingIcon: 'p-multiselect-loading-icon',
  dropdownIcon: 'p-multiselect-dropdown-icon',
  overlay: 'p-multiselect-overlay p-component',
  header: 'p-multiselect-header',
  pcFilterContainer: 'p-multiselect-filter-container',
  pcFilter: 'p-multiselect-filter',
  listContainer: 'p-multiselect-list-container',
  list: 'p-multiselect-list',
  optionGroup: 'p-multiselect-option-group',
  option: function option(_ref5) {
    var instance = _ref5.instance,
      _option = _ref5.option,
      index = _ref5.index,
      getItemOptions = _ref5.getItemOptions,
      props = _ref5.props;
    return ['p-multiselect-option', {
      'p-multiselect-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  emptyMessage: 'p-multiselect-empty-message'
};
var MultiSelectStyle = BaseStyle.extend({
  name: 'multiselect',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { MultiSelectStyle as default };
//# sourceMappingURL=index.mjs.map
