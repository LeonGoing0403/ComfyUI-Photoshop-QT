var index = {
  root: {
    gap: '0',
    transitionDuration: '{transition.duration}'
  },
  panel: {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    borderWidth: '0',
    color: '{content.color}',
    padding: '0',
    borderRadius: '0',
    first: {
      borderWidth: '0',
      topBorderRadius: '{content.border.radius}'
    },
    last: {
      borderWidth: '0',
      bottomBorderRadius: '{content.border.radius}'
    }
  },
  item: {
    focusBackground: '{navigation.item.focus.background}',
    color: '{navigation.item.color}',
    focusColor: '{navigation.item.focus.color}',
    gap: '0.5rem',
    padding: '{navigation.item.padding}',
    borderRadius: '{content.border.radius}',
    icon: {
      color: '{navigation.item.icon.color}',
      focusColor: '{navigation.item.icon.focus.color}'
    }
  },
  submenu: {
    indent: '1rem'
  },
  submenuIcon: {
    color: '{navigation.submenu.icon.color}',
    focusColor: '{navigation.submenu.icon.focus.color}'
  },
  css: function css(_ref) {
    var dt = _ref.dt;
    return "\n.p-panelmenu-panel {\n    box-shadow: 0 0 0 1px ".concat(dt('panelmenu.panel.border.color'), ";\n    transition: margin ").concat(dt('panelmenu.transition.duration'), ";\n}\n\n.p-panelmenu-panel:has(.p-panelmenu-header-active) {\n    margin: 1rem 0;\n}\n\n.p-panelmenu-panel:first-child {\n    border-top-left-radius: ").concat(dt('content.border.radius'), ";\n    border-top-right-radius: ").concat(dt('content.border.radius'), ";\n    margin-top: 0;\n}\n\n.p-panelmenu-panel:last-child {\n    border-bottom-left-radius: ").concat(dt('content.border.radius'), ";\n    border-bottom-right-radius: ").concat(dt('content.border.radius'), ";\n    margin-bottom: 0;\n}\n\n.p-accordionpanel:not(.p-disabled) .p-accordionheader:focus-visible {\n    background: ").concat(dt('navigation.item.active.background'), ";\n}\n");
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
