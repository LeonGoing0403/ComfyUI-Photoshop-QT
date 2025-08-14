var index = {
  root: {
    transitionDuration: '{transition.duration}'
  },
  track: {
    background: '{content.border.color}',
    borderRadius: '{border.radius.xs}',
    size: '2px'
  },
  range: {
    background: '{primary.color}'
  },
  handle: {
    width: '18px',
    height: '18px',
    borderRadius: '50%',
    background: '{primary.color}',
    hoverBackground: '{primary.color}',
    content: {
      borderRadius: '50%',
      contentBackground: '{primary.color}',
      hoverBackground: '{primary.color}',
      width: '18px',
      height: '18px',
      shadow: '0px 2px 1px -1px rgba(0, 0, 0, .2), 0px 1px 1px 0px rgba(0, 0, 0, .14), 0px 1px 3px 0px rgba(0, 0, 0, .12)'
    },
    focusRing: {
      width: '0',
      style: 'none',
      color: 'unset',
      offset: '0',
      shadow: 'none'
    }
  },
  css: function css(_ref) {
    var dt = _ref.dt;
    return "\n.p-slider-handle {\n    transition: box-shadow ".concat(dt('slider.transition.duration'), ";\n}\n\n.p-slider:not(.p-disabled) .p-slider-handle:hover {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, ").concat(dt('slider.handle.background'), ", transparent 92%);\n}\n\n.p-slider-handle:focus-visible,\n.p-slider:not(.p-disabled) .p-slider-handle:focus:hover {\n    box-shadow: 0 0 1px 10px color-mix(in srgb, ").concat(dt('slider.handle.background'), ", transparent 84%);\n}\n");
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
