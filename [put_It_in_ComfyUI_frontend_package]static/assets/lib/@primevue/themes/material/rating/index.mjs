var index = {
  root: {
    gap: '0.5rem',
    transitionDuration: '{transition.duration}',
    focusRing: {
      width: '0',
      style: 'none',
      color: 'unset',
      offset: '0',
      shadow: 'none'
    }
  },
  icon: {
    size: '1.125rem',
    color: '{text.muted.color}',
    hoverColor: '{primary.color}',
    activeColor: '{primary.color}'
  },
  css: function css(_ref) {
    var dt = _ref.dt;
    return "\n.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover {\n    background: color-mix(in srgb, ".concat(dt('rating.icon.color'), ", transparent 96%);\n    box-shadow: 0 0 1px 8px color-mix(in srgb, ").concat(dt('rating.icon.color'), ", transparent 96%);\n}\n\n.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option-active:hover {\n    background: color-mix(in srgb, ").concat(dt('rating.icon.active.color'), ", transparent 92%);\n    box-shadow: 0 0 1px 8px color-mix(in srgb, ").concat(dt('rating.icon.active.color'), ", transparent 92%);\n}\n\n.p-rating-option.p-focus-visible {\n    background: color-mix(in srgb, ").concat(dt('rating.icon.active.color'), ", transparent 84%);\n    box-shadow: 0 0 1px 8px color-mix(in srgb, ").concat(dt('rating.icon.active.color'), ", transparent 84%);\n}\n");
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
