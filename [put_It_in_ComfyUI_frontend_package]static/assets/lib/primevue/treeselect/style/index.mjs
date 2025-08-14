import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-treeselect {\n    display: inline-flex;\n    cursor: pointer;\n    position: relative;\n    user-select: none;\n    background: ".concat(dt('treeselect.background'), ";\n    border: 1px solid ").concat(dt('treeselect.border.color'), ";\n    transition: background ").concat(dt('treeselect.transition.duration'), ", color ").concat(dt('treeselect.transition.duration'), ", border-color ").concat(dt('treeselect.transition.duration'), ", outline-color ").concat(dt('treeselect.transition.duration'), ", box-shadow ").concat(dt('treeselect.transition.duration'), ";\n    border-radius: ").concat(dt('treeselect.border.radius'), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt('treeselect.shadow'), ";\n}\n\n.p-treeselect:not(.p-disabled):hover {\n    border-color: ").concat(dt('treeselect.hover.border.color'), ";\n}\n\n.p-treeselect:not(.p-disabled).p-focus {\n    border-color: ").concat(dt('treeselect.focus.border.color'), ";\n    box-shadow: ").concat(dt('treeselect.focus.ring.shadow'), ";\n    outline: ").concat(dt('treeselect.focus.ring.width'), " ").concat(dt('treeselect.focus.ring.style'), " ").concat(dt('treeselect.focus.ring.color'), ";\n    outline-offset: ").concat(dt('treeselect.focus.ring.offset'), ";\n}\n\n.p-treeselect.p-variant-filled {\n    background: ").concat(dt('treeselect.filled.background'), ";\n}\n\n.p-treeselect.p-variant-filled:not(.p-disabled):hover {\n    background: ").concat(dt('treeselect.filled.hover.background'), ";\n}\n\n.p-treeselect.p-variant-filled.p-focus {\n    background: ").concat(dt('treeselect.filled.focus.background'), ";\n}\n\n.p-treeselect.p-invalid {\n    border-color: ").concat(dt('treeselect.invalid.border.color'), ";\n}\n\n.p-treeselect.p-disabled {\n    opacity: 1;\n    background: ").concat(dt('treeselect.disabled.background'), ";\n}\n\n.p-treeselect-clear-icon {\n    position: absolute;\n    top: 50%;\n    margin-top: -0.5rem;\n    color: ").concat(dt('treeselect.clear.icon.color'), ";\n    inset-inline-end: ").concat(dt('treeselect.dropdown.width'), ";\n}\n\n.p-treeselect-dropdown {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-shrink: 0;\n    background: transparent;\n    color: ").concat(dt('treeselect.dropdown.color'), ";\n    width: ").concat(dt('treeselect.dropdown.width'), ";\n    border-start-end-radius: ").concat(dt('border.radius.md'), ";\n    border-end-end-radius: ").concat(dt('border.radius.md'), ";\n}\n\n.p-treeselect-label-container {\n    overflow: hidden;\n    flex: 1 1 auto;\n    cursor: pointer;\n}\n\n.p-treeselect-label {\n    display: flex;\n    align-items: center;\n    gap: calc(").concat(dt('treeselect.padding.y'), " / 2);\n    white-space: nowrap;\n    cursor: pointer;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    padding: ").concat(dt('treeselect.padding.y'), " ").concat(dt('treeselect.padding.x'), ";\n    color: ").concat(dt('treeselect.color'), ";\n}\n\n.p-treeselect-label.p-placeholder {\n    color: ").concat(dt('treeselect.placeholder.color'), ";\n}\n\n.p-treeselect.p-invalid .p-treeselect-label.p-placeholder {\n    color: ").concat(dt('treeselect.invalid.placeholder.color'), ";\n}\n\n.p-treeselect.p-disabled .p-treeselect-label {\n    color: ").concat(dt('treeselect.disabled.color'), ";\n}\n\n.p-treeselect-label-empty {\n    overflow: hidden;\n    visibility: hidden;\n}\n\n.p-treeselect .p-treeselect-overlay {\n    min-width: 100%;\n}\n\n.p-treeselect-overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: ").concat(dt('treeselect.overlay.background'), ";\n    color: ").concat(dt('treeselect.overlay.color'), ";\n    border: 1px solid ").concat(dt('treeselect.overlay.border.color'), ";\n    border-radius: ").concat(dt('treeselect.overlay.border.radius'), ";\n    box-shadow: ").concat(dt('treeselect.overlay.shadow'), ";\n    overflow: hidden;\n}\n\n.p-treeselect-tree-container {\n    overflow: auto;\n}\n\n.p-treeselect-empty-message {\n    padding: ").concat(dt('treeselect.empty.message.padding'), ";\n    background: transparent;\n}\n\n.p-treeselect-fluid {\n    display: flex;\n}\n\n.p-treeselect-overlay .p-tree {\n    padding: ").concat(dt('treeselect.tree.padding'), ";\n}\n\n.p-treeselect-overlay .p-tree-loading {\n    min-height: 3rem;\n}\n\n.p-treeselect-label .p-chip {\n    padding-block-start: calc(").concat(dt('treeselect.padding.y'), " / 2);\n    padding-block-end: calc(").concat(dt('treeselect.padding.y'), " / 2);\n    border-radius: ").concat(dt('treeselect.chip.border.radius'), ";\n}\n\n.p-treeselect-label:has(.p-chip) {\n    padding: calc(").concat(dt('treeselect.padding.y'), " / 2) calc(").concat(dt('treeselect.padding.x'), " / 2);\n}\n\n.p-treeselect-sm .p-treeselect-label {\n    font-size: ").concat(dt('treeselect.sm.font.size'), ";\n    padding-block: ").concat(dt('treeselect.sm.padding.y'), ";\n    padding-inline: ").concat(dt('treeselect.sm.padding.x'), ";\n}\n\n.p-treeselect-sm .p-treeselect-dropdown .p-icon {\n    font-size: ").concat(dt('treeselect.sm.font.size'), ";\n    width: ").concat(dt('treeselect.sm.font.size'), ";\n    height: ").concat(dt('treeselect.sm.font.size'), ";\n}\n\n.p-treeselect-lg .p-treeselect-label {\n    font-size: ").concat(dt('treeselect.lg.font.size'), ";\n    padding-block: ").concat(dt('treeselect.lg.padding.y'), ";\n    padding-inline: ").concat(dt('treeselect.lg.padding.x'), ";\n}\n\n.p-treeselect-lg .p-treeselect-dropdown .p-icon {\n    font-size: ").concat(dt('treeselect.lg.font.size'), ";\n    width: ").concat(dt('treeselect.lg.font.size'), ";\n    height: ").concat(dt('treeselect.lg.font.size'), ";\n}\n");
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
    return ['p-treeselect p-component p-inputwrapper', {
      'p-treeselect-display-chip': props.display === 'chip',
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-focus': instance.focused,
      'p-variant-filled': instance.$variant === 'filled',
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': instance.focused || instance.overlayVisible,
      'p-treeselect-open': instance.overlayVisible,
      'p-treeselect-fluid': instance.$fluid,
      'p-treeselect-sm p-inputfield-sm': props.size === 'small',
      'p-treeselect-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  labelContainer: 'p-treeselect-label-container',
  label: function label(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props;
    return ['p-treeselect-label', {
      'p-placeholder': instance.label === props.placeholder,
      'p-treeselect-label-empty': !props.placeholder && instance.emptyValue
    }];
  },
  clearIcon: 'p-treeselect-clear-icon',
  chip: 'p-treeselect-chip-item',
  pcChip: 'p-treeselect-chip',
  dropdown: 'p-treeselect-dropdown',
  dropdownIcon: 'p-treeselect-dropdown-icon',
  panel: 'p-treeselect-overlay p-component',
  treeContainer: 'p-treeselect-tree-container',
  emptyMessage: 'p-treeselect-empty-message'
};
var TreeSelectStyle = BaseStyle.extend({
  name: 'treeselect',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { TreeSelectStyle as default };
//# sourceMappingURL=index.mjs.map
