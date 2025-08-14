var index = {
  root: {
    background: '{form.field.background}',
    disabledBackground: '{form.field.disabled.background}',
    filledBackground: '{form.field.filled.background}',
    filledHoverBackground: '{form.field.filled.hover.background}',
    filledFocusBackground: '{form.field.filled.focus.background}',
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.hover.border.color}',
    focusBorderColor: '{form.field.focus.border.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    color: '{form.field.color}',
    disabledColor: '{form.field.disabled.color}',
    placeholderColor: '{form.field.placeholder.color}',
    invalidPlaceholderColor: '{form.field.invalid.placeholder.color}',
    shadow: '{form.field.shadow}',
    paddingX: '{form.field.padding.x}',
    paddingY: '{form.field.padding.y}',
    borderRadius: '{form.field.border.radius}',
    focusRing: {
      width: '{form.field.focus.ring.width}',
      style: '{form.field.focus.ring.style}',
      color: '{form.field.focus.ring.color}',
      offset: '{form.field.focus.ring.offset}',
      shadow: '{form.field.focus.ring.shadow}'
    },
    transitionDuration: '{form.field.transition.duration}',
    sm: {
      fontSize: '{form.field.sm.font.size}',
      paddingX: '{form.field.sm.padding.x}',
      paddingY: '{form.field.sm.padding.y}'
    },
    lg: {
      fontSize: '{form.field.lg.font.size}',
      paddingX: '{form.field.lg.padding.x}',
      paddingY: '{form.field.lg.padding.y}'
    }
  },
  dropdown: {
    width: '2.5rem',
    color: '{form.field.icon.color}'
  },
  overlay: {
    background: '{overlay.select.background}',
    borderColor: '{overlay.select.border.color}',
    borderRadius: '{overlay.select.border.radius}',
    color: '{overlay.select.color}',
    shadow: '{overlay.select.shadow}'
  },
  list: {
    padding: '{list.padding}',
    gap: '{list.gap}',
    header: {
      padding: '{list.header.padding}'
    }
  },
  option: {
    focusBackground: '{list.option.focus.background}',
    selectedBackground: '{list.option.selected.background}',
    selectedFocusBackground: '{list.option.selected.focus.background}',
    color: '{list.option.color}',
    focusColor: '{list.option.focus.color}',
    selectedColor: '{list.option.selected.color}',
    selectedFocusColor: '{list.option.selected.focus.color}',
    padding: '{list.option.padding}',
    borderRadius: '{list.option.border.radius}'
  },
  optionGroup: {
    background: '{list.option.group.background}',
    color: '{list.option.group.color}',
    fontWeight: '{list.option.group.font.weight}',
    padding: '{list.option.group.padding}'
  },
  clearIcon: {
    color: '{form.field.icon.color}'
  },
  checkmark: {
    color: '{list.option.color}',
    gutterStart: '-0.375rem',
    gutterEnd: '0.375rem'
  },
  emptyMessage: {
    padding: '{list.option.padding}'
  },
  css: function css(_ref) {
    var dt = _ref.dt;
    return "\n.p-select.p-variant-filled {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: ".concat(dt('select.filled.background'), " no-repeat;\n    background-image: linear-gradient(to bottom, ").concat(dt('select.focus.border.color'), ", ").concat(dt('select.focus.border.color'), "), linear-gradient(to bottom, ").concat(dt('select.border.color'), ", ").concat(dt('select.border.color'), ");\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-select.p-variant-filled:not(.p-disabled):hover {\n    background: ").concat(dt('select.filled.hover.background'), " no-repeat;\n    background-image: linear-gradient(to bottom, ").concat(dt('select.focus.border.color'), ", ").concat(dt('select.focus.border.color'), "), linear-gradient(to bottom, ").concat(dt('select.hover.border.color'), ", ").concat(dt('select.hover.border.color'), ");\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-select.p-variant-filled:not(.p-disabled).p-focus {\n    outline: 0 none;\n    background: ").concat(dt('select.filled.focus.background'), " no-repeat;\n    background-image: linear-gradient(to bottom, ").concat(dt('select.focus.border.color'), ", ").concat(dt('select.focus.border.color'), "), linear-gradient(to bottom, ").concat(dt('select.border.color'), ", ").concat(dt('select.border.color'), ");\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-select.p-variant-filled:not(.p-disabled).p-focus:hover {\n    background-image: linear-gradient(to bottom, ").concat(dt('select.focus.border.color'), ", ").concat(dt('select.focus.border.color'), "), linear-gradient(to bottom, ").concat(dt('select.hover.border.color'), ", ").concat(dt('select.hover.border.color'), ");\n}\n\n.p-select.p-variant-filled.p-invalid {\n    background-image: linear-gradient(to bottom, ").concat(dt('select.invalid.border.color'), ", ").concat(dt('select.invalid.border.color'), "), linear-gradient(to bottom, ").concat(dt('select.invalid.border.color'), ", ").concat(dt('select.invalid.border.color'), ");\n}\n\n.p-select.p-variant-filled.p-invalid:not(.p-disabled).p-focus  {\n    background-image: linear-gradient(to bottom, ").concat(dt('select.invalid.border.color'), ", ").concat(dt('select.invalid.border.color'), "), linear-gradient(to bottom, ").concat(dt('select.invalid.border.color'), ", ").concat(dt('select.invalid.border.color'), ");\n}\n\n.p-select-option {\n    transition: none;\n}\n");
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
