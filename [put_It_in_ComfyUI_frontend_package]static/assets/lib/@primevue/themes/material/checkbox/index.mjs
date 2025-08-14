var index = {
  root: {
    borderRadius: '{border.radius.xs}',
    width: '18px',
    height: '18px',
    background: '{form.field.background}',
    checkedBackground: '{primary.color}',
    checkedHoverBackground: '{primary.color}',
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
      width: '14px',
      height: '14px'
    },
    lg: {
      width: '22px',
      height: '22px'
    }
  },
  icon: {
    size: '0.875rem',
    color: '{form.field.color}',
    checkedColor: '{primary.contrast.color}',
    checkedHoverColor: '{primary.contrast.color}',
    disabledColor: '{form.field.disabled.color}',
    sm: {
      size: '0.75rem'
    },
    lg: {
      size: '1rem'
    }
  },
  css: function css(_ref) {
    var dt = _ref.dt;
    return "\n.p-checkbox {\n    border-radius: 50%;\n    transition: box-shadow ".concat(dt('checkbox.transition.duration'), ";\n}\n\n.p-checkbox-box {\n    border-width: 2px;\n}\n\n.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, ").concat(dt('text.color'), ", transparent 96%);\n}\n\n.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, ").concat(dt('text.color'), ", transparent 88%);\n}\n\n.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, ").concat(dt('checkbox.checked.background'), ", transparent 92%);\n}\n\n.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, ").concat(dt('checkbox.checked.background'), ", transparent 84%);\n}\n\n.p-checkbox-checked .p-checkbox-box:before  {\n    content: \"\";\n    position: absolute;\n    top: var(--p-md-check-icon-t);\n    left: 2px;\n    border-right: 2px solid transparent;\n    border-bottom: 2px solid transparent;\n    transform: rotate(45deg);\n    transform-origin: 0% 100%;\n    animation: p-md-check 125ms 50ms linear forwards;\n}\n\n.p-checkbox-checked .p-checkbox-icon {\n    display: none;\n}\n\n.p-checkbox {\n    --p-md-check-icon-t: 10px;\n    --p-md-check-icon-w: 6px;\n    --p-md-check-icon-h: 12px;\n}\n\n.p-checkbox-sm {\n    --p-md-check-icon-t: 8px;\n    --p-md-check-icon-w: 4px;\n    --p-md-check-icon-h: 10px;\n}\n\n.p-checkbox-lg {\n    --p-md-check-icon-t: 12px;\n    --p-md-check-icon-w: 8px;\n    --p-md-check-icon-h: 16px;\n}\n\n@keyframes p-md-check {\n    0%{\n      width: 0;\n      height: 0;\n      border-color: ").concat(dt('checkbox.icon.checked.color'), ";\n      transform: translate3d(0,0,0) rotate(45deg);\n    }\n    33%{\n      width: var(--p-md-check-icon-w);\n      height: 0;\n      transform: translate3d(0,0,0) rotate(45deg);\n    }\n    100%{\n      width: var(--p-md-check-icon-w);\n      height: var(--p-md-check-icon-h);\n      border-color: ").concat(dt('checkbox.icon.checked.color'), ";\n      transform: translate3d(0,calc(-1 * var(--p-md-check-icon-h)),0) rotate(45deg);\n    }\n}\n");
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
