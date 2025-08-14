var index = {
  root: {
    width: '20px',
    height: '20px',
    background: '{form.field.background}',
    checkedBackground: '{primary.contrast.color}',
    checkedHoverBackground: '{primary.contrast.color}',
    disabledBackground: '{form.field.disabled.background}',
    filledBackground: '{form.field.filled.background}',
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.hover.border.color}',
    focusBorderColor: '{form.field.focus.border.color}',
    checkedBorderColor: '{primary.color}',
    checkedHoverBorderColor: '{primary.color}',
    checkedFocusBorderColor: '{primary.color}',
    checkedDisabledBorderColor: '{form.field.border.color}',
    invalidBorderColor: '{form.field.invalid.border.color}',
    shadow: '{form.field.shadow}',
    focusRing: {
      width: '0',
      style: 'none',
      color: 'unset',
      offset: '0',
      shadow: 'none'
    },
    transitionDuration: '{form.field.transition.duration}',
    sm: {
      width: '16px',
      height: '16px'
    },
    lg: {
      width: '24px',
      height: '24px'
    }
  },
  icon: {
    size: '10px',
    checkedColor: '{primary.color}',
    checkedHoverColor: '{primary.color}',
    disabledColor: '{form.field.disabled.color}',
    sm: {
      size: '8px'
    },
    lg: {
      size: '12px'
    }
  },
  css: function css(_ref) {
    var dt = _ref.dt;
    return "\n.p-radiobutton {\n    border-radius: 50%;\n    transition: box-shadow ".concat(dt('radiobutton.transition.duration'), ";\n}\n\n.p-radiobutton-box {\n    border-width: 2px;\n}\n\n.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:hover) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, ").concat(dt('text.color'), ", transparent 96%);\n}\n\n.p-radiobutton:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, ").concat(dt('text.color'), ", transparent 88%);\n}\n\n.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:hover) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, ").concat(dt('radiobutton.checked.border.color'), ", transparent 92%);\n}\n\n.p-radiobutton-checked:not(.p-disabled):has(.p-radiobutton-input:focus-visible) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, ").concat(dt('radiobutton.checked.border.color'), ", transparent 84%);\n}\n");
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
