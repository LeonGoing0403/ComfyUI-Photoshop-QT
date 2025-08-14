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
    transitionDuration: '{form.field.transition.duration}'
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
    gap: '{list.gap}'
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
  dropdown: {
    width: '3rem',
    sm: {
      width: '2.5rem'
    },
    lg: {
      width: '3.5rem'
    },
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.border.color}',
    activeBorderColor: '{form.field.border.color}',
    borderRadius: '{form.field.border.radius}',
    focusRing: {
      width: '0',
      style: 'none',
      color: 'unset',
      offset: '0',
      shadow: 'none'
    }
  },
  chip: {
    borderRadius: '{border.radius.sm}'
  },
  emptyMessage: {
    padding: '{list.option.padding}'
  },
  colorScheme: {
    light: {
      chip: {
        focusBackground: '{surface.300}',
        focusColor: '{surface.950}'
      },
      dropdown: {
        background: '{surface.100}',
        hoverBackground: '{surface.200}',
        activeBackground: '{surface.300}',
        color: '{surface.600}',
        hoverColor: '{surface.700}',
        activeColor: '{surface.800}'
      }
    },
    dark: {
      chip: {
        focusBackground: '{surface.600}',
        focusColor: '{surface.0}'
      },
      dropdown: {
        background: '{surface.800}',
        hoverBackground: '{surface.700}',
        activeBackground: '{surface.600}',
        color: '{surface.300}',
        hoverColor: '{surface.200}',
        activeColor: '{surface.100}'
      }
    }
  },
  css: function css(_ref) {
    var dt = _ref.dt;
    return "\n.p-autocomplete-dropdown:focus-visible {\n    background: ".concat(dt('autocomplete.dropdown.hover.background'), ";\n    border-color: ").concat(dt('autocomplete.dropdown.hover.border.color'), ";\n    color: ").concat(dt('autocomplete.dropdown.hover.color'), ";\n}\n\n.p-variant-filled.p-autocomplete-input-multiple {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n    border: 1px solid transparent;\n    background: ").concat(dt('autocomplete.filled.background'), " no-repeat;\n    background-image: linear-gradient(to bottom, ").concat(dt('autocomplete.focus.border.color'), ", ").concat(dt('autocomplete.focus.border.color'), "), linear-gradient(to bottom, ").concat(dt('autocomplete.border.color'), ", ").concat(dt('autocomplete.border.color'), ");\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    transition: background-size 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);\n}\n\n.p-autocomplete:not(.p-disabled):hover .p-variant-filled.p-autocomplete-input-multiple {\n    background: ").concat(dt('autocomplete.filled.hover.background'), " no-repeat;\n    background-image: linear-gradient(to bottom, ").concat(dt('autocomplete.focus.border.color'), ", ").concat(dt('autocomplete.focus.border.color'), "), linear-gradient(to bottom, ").concat(dt('autocomplete.hover.border.color'), ", ").concat(dt('autocomplete.hover.border.color'), ");\n    background-size: 0 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-autocomplete:not(.p-disabled).p-focus .p-variant-filled.p-autocomplete-input-multiple {\n    outline: 0 none;\n    background: ").concat(dt('autocomplete.filled.focus.background'), " no-repeat;\n    background-image: linear-gradient(to bottom, ").concat(dt('autocomplete.focus.border.color'), ", ").concat(dt('autocomplete.focus.border.color'), "), linear-gradient(to bottom, ").concat(dt('autocomplete.border.color'), ", ").concat(dt('autocomplete.border.color'), ");\n    background-size: 100% 2px, 100% 1px;\n    background-position: 50% 100%, 50% 100%;\n    background-origin: border-box;\n    border-color: transparent;\n}\n\n.p-autocomplete:not(.p-disabled).p-focus:hover .p-variant-filled.p-autocomplete-input-multiple {\n    background-image: linear-gradient(to bottom, ").concat(dt('autocomplete.focus.border.color'), ", ").concat(dt('autocomplete.focus.border.color'), "), linear-gradient(to bottom, ").concat(dt('autocomplete.hover.border.color'), ", ").concat(dt('autocomplete.hover.border.color'), ");\n}\n\n.p-autocomplete.p-invalid .p-autocomplete-input-multiple {\n    background-image: linear-gradient(to bottom, ").concat(dt('autocomplete.invalid.border.color'), ", ").concat(dt('autocomplete.invalid.border.color'), "), linear-gradient(to bottom, ").concat(dt('autocomplete.invalid.border.color'), ", ").concat(dt('autocomplete.invalid.border.color'), ");\n}\n\n.p-autocomplete.p-invalid.p-focus .p-autocomplete-input-multiple  {\n    background-image: linear-gradient(to bottom, ").concat(dt('autocomplete.invalid.border.color'), ", ").concat(dt('autocomplete.invalid.border.color'), "), linear-gradient(to bottom, ").concat(dt('autocomplete.invalid.border.color'), ", ").concat(dt('autocomplete.invalid.border.color'), ");\n}\n\n.p-autocomplete-option {\n    transition: none;\n}\n");
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
