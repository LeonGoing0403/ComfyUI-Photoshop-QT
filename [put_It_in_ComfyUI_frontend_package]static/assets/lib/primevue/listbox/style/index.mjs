import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-listbox {\n    background: ".concat(dt('listbox.background'), ";\n    color: ").concat(dt('listbox.color'), ";\n    border: 1px solid ").concat(dt('listbox.border.color'), ";\n    border-radius: ").concat(dt('listbox.border.radius'), ";\n    transition: background ").concat(dt('listbox.transition.duration'), ", color ").concat(dt('listbox.transition.duration'), ", border-color ").concat(dt('listbox.transition.duration'), ",\n            box-shadow ").concat(dt('listbox.transition.duration'), ", outline-color ").concat(dt('listbox.transition.duration'), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt('listbox.shadow'), ";\n}\n\n.p-listbox.p-disabled {\n    opacity: 1;\n    background: ").concat(dt('listbox.disabled.background'), ";\n    color: ").concat(dt('listbox.disabled.color'), ";\n}\n\n.p-listbox.p-disabled .p-listbox-option {\n    color: ").concat(dt('listbox.disabled.color'), ";\n}\n\n.p-listbox.p-invalid {\n    border-color: ").concat(dt('listbox.invalid.border.color'), ";\n}\n\n.p-listbox-header {\n    padding: ").concat(dt('listbox.list.header.padding'), ";\n}\n\n.p-listbox-filter {\n    width: 100%;\n}\n\n.p-listbox-list-container {\n    overflow: auto;\n}\n\n.p-listbox-list {\n    list-style-type: none;\n    margin: 0;\n    padding: ").concat(dt('listbox.list.padding'), ";\n    outline: 0 none;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('listbox.list.gap'), ";\n}\n\n.p-listbox-option {\n    display: flex;\n    align-items: center;\n    cursor: pointer;\n    position: relative;\n    overflow: hidden;\n    padding: ").concat(dt('listbox.option.padding'), ";\n    border: 0 none;\n    border-radius: ").concat(dt('listbox.option.border.radius'), ";\n    color: ").concat(dt('listbox.option.color'), ";\n    transition: background ").concat(dt('listbox.transition.duration'), ", color ").concat(dt('listbox.transition.duration'), ", border-color ").concat(dt('listbox.transition.duration'), ",\n            box-shadow ").concat(dt('listbox.transition.duration'), ", outline-color ").concat(dt('listbox.transition.duration'), ";\n}\n\n.p-listbox-striped li:nth-child(even of .p-listbox-option) {\n    background: ").concat(dt('listbox.option.striped.background'), ";\n}\n\n.p-listbox .p-listbox-list .p-listbox-option.p-listbox-option-selected {\n    background: ").concat(dt('listbox.option.selected.background'), ";\n    color: ").concat(dt('listbox.option.selected.color'), ";\n}\n\n.p-listbox:not(.p-disabled) .p-listbox-option.p-listbox-option-selected.p-focus {\n    background: ").concat(dt('listbox.option.selected.focus.background'), ";\n    color: ").concat(dt('listbox.option.selected.focus.color'), ";\n}\n\n.p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled).p-focus {\n    background: ").concat(dt('listbox.option.focus.background'), ";\n    color: ").concat(dt('listbox.option.focus.color'), ";\n}\n\n.p-listbox:not(.p-disabled) .p-listbox-option:not(.p-listbox-option-selected):not(.p-disabled):hover {\n    background: ").concat(dt('listbox.option.focus.background'), ";\n    color: ").concat(dt('listbox.option.focus.color'), ";\n}\n\n.p-listbox-option-check-icon {\n    position: relative;\n    margin-inline-start: ").concat(dt('listbox.checkmark.gutter.start'), ";\n    margin-inline-end: ").concat(dt('listbox.checkmark.gutter.end'), ";\n    color: ").concat(dt('listbox.checkmark.color'), ";\n}\n\n.p-listbox-option-group {\n    margin: 0;\n    padding: ").concat(dt('listbox.option.group.padding'), ";\n    color: ").concat(dt('listbox.option.group.color'), ";\n    background: ").concat(dt('listbox.option.group.background'), ";\n    font-weight: ").concat(dt('listbox.option.group.font.weight'), ";\n}\n\n.p-listbox-empty-message {\n    padding: ").concat(dt('listbox.empty.message.padding'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-listbox p-component', {
      'p-listbox-striped': props.striped,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  header: 'p-listbox-header',
  pcFilter: 'p-listbox-filter',
  listContainer: 'p-listbox-list-container',
  list: 'p-listbox-list',
  optionGroup: 'p-listbox-option-group',
  option: function option(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props,
      _option = _ref3.option,
      index = _ref3.index,
      getItemOptions = _ref3.getItemOptions;
    return ['p-listbox-option', {
      'p-listbox-option-selected': instance.isSelected(_option) && props.highlightOnSelect,
      'p-focus': instance.focusedOptionIndex === instance.getOptionIndex(index, getItemOptions),
      'p-disabled': instance.isOptionDisabled(_option)
    }];
  },
  optionCheckIcon: 'p-listbox-option-check-icon',
  optionBlankIcon: 'p-listbox-option-blank-icon',
  emptyMessage: 'p-listbox-empty-message'
};
var ListboxStyle = BaseStyle.extend({
  name: 'listbox',
  theme: theme,
  classes: classes
});

export { ListboxStyle as default };
//# sourceMappingURL=index.mjs.map
