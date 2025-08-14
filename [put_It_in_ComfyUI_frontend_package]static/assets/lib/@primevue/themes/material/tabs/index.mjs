var index = {
  root: {
    transitionDuration: '{transition.duration}'
  },
  tablist: {
    borderWidth: '0 0 1px 0',
    background: '{content.background}',
    borderColor: '{content.border.color}'
  },
  tab: {
    background: 'transparent',
    hoverBackground: '{content.hover.background}',
    activeBackground: 'transparent',
    borderWidth: '0 0 1px 0',
    borderColor: '{content.border.color}',
    hoverBorderColor: '{content.border.color}',
    activeBorderColor: '{primary.color}',
    color: '{text.color}',
    hoverColor: '{text.color}',
    activeColor: '{primary.color}',
    padding: '1rem 1.25rem',
    fontWeight: '600',
    margin: '0 0 -1px 0',
    gap: '0.5rem',
    focusRing: {
      width: '0',
      style: 'none',
      color: 'unset',
      offset: '0',
      shadow: 'none'
    }
  },
  tabpanel: {
    background: '{content.background}',
    color: '{content.color}',
    padding: '1.25rem 1.25rem 1.25rem 1.25rem',
    focusRing: {
      width: '0',
      style: 'none',
      color: 'unset',
      offset: '0',
      shadow: 'none'
    }
  },
  navButton: {
    background: '{content.background}',
    color: '{text.muted.color}',
    hoverColor: '{text.color}',
    width: '3rem',
    shadow: 'none',
    focusRing: {
      width: '0',
      style: 'none',
      color: 'unset',
      offset: '0',
      shadow: 'none'
    }
  },
  activeBar: {
    height: '2px',
    bottom: '-1px',
    background: '{primary.color}'
  },
  css: function css(_ref) {
    var dt = _ref.dt;
    return "\n\n\n.p-tabs-scrollable .p-tab {\n    flex-grow: 0\n}\n\n.p-tab-active {\n    --p-ripple-background: color-mix(in srgb, ".concat(dt('primary.color'), ", transparent 90%);\n}\n\n.p-tab:not(.p-disabled):focus-visible {\n    background: ").concat(dt('navigation.item.active.background'), ";\n}\n\n.p-tablist-nav-button:focus-visible {\n    background: ").concat(dt('navigation.item.active.background'), ";\n}\n");
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
