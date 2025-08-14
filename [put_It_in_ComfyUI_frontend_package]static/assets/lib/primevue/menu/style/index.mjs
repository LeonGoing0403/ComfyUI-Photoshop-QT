import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-menu {\n    background: ".concat(dt('menu.background'), ";\n    color: ").concat(dt('menu.color'), ";\n    border: 1px solid ").concat(dt('menu.border.color'), ";\n    border-radius: ").concat(dt('menu.border.radius'), ";\n    min-width: 12.5rem;\n}\n\n.p-menu-list {\n    margin: 0;\n    padding: ").concat(dt('menu.list.padding'), ";\n    outline: 0 none;\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('menu.list.gap'), ";\n}\n\n.p-menu-item-content {\n    transition: background ").concat(dt('menu.transition.duration'), ", color ").concat(dt('menu.transition.duration'), ";\n    border-radius: ").concat(dt('menu.item.border.radius'), ";\n    color: ").concat(dt('menu.item.color'), ";\n}\n\n.p-menu-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: ").concat(dt('menu.item.padding'), ";\n    gap: ").concat(dt('menu.item.gap'), ";\n    user-select: none;\n    outline: 0 none;\n}\n\n.p-menu-item-label {\n    line-height: 1;\n}\n\n.p-menu-item-icon {\n    color: ").concat(dt('menu.item.icon.color'), ";\n}\n\n.p-menu-item.p-focus .p-menu-item-content {\n    color: ").concat(dt('menu.item.focus.color'), ";\n    background: ").concat(dt('menu.item.focus.background'), ";\n}\n\n.p-menu-item.p-focus .p-menu-item-icon {\n    color: ").concat(dt('menu.item.icon.focus.color'), ";\n}\n\n.p-menu-item:not(.p-disabled) .p-menu-item-content:hover {\n    color: ").concat(dt('menu.item.focus.color'), ";\n    background: ").concat(dt('menu.item.focus.background'), ";\n}\n\n.p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {\n    color: ").concat(dt('menu.item.icon.focus.color'), ";\n}\n\n.p-menu-overlay {\n    box-shadow: ").concat(dt('menu.shadow'), ";\n}\n\n.p-menu-submenu-label {\n    background: ").concat(dt('menu.submenu.label.background'), ";\n    padding: ").concat(dt('menu.submenu.label.padding'), ";\n    color: ").concat(dt('menu.submenu.label.color'), ";\n    font-weight: ").concat(dt('menu.submenu.label.font.weight'), ";\n}\n\n.p-menu-separator {\n    border-block-start: 1px solid ").concat(dt('menu.separator.border.color'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-menu p-component', {
      'p-menu-overlay': props.popup
    }];
  },
  start: 'p-menu-start',
  list: 'p-menu-list',
  submenuLabel: 'p-menu-submenu-label',
  separator: 'p-menu-separator',
  end: 'p-menu-end',
  item: function item(_ref3) {
    var instance = _ref3.instance;
    return ['p-menu-item', {
      'p-focus': instance.id === instance.focusedOptionId,
      'p-disabled': instance.disabled()
    }];
  },
  itemContent: 'p-menu-item-content',
  itemLink: 'p-menu-item-link',
  itemIcon: 'p-menu-item-icon',
  itemLabel: 'p-menu-item-label'
};
var MenuStyle = BaseStyle.extend({
  name: 'menu',
  theme: theme,
  classes: classes
});

export { MenuStyle as default };
//# sourceMappingURL=index.mjs.map
