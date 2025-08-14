import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-tieredmenu {\n    background: ".concat(dt('tieredmenu.background'), ";\n    color: ").concat(dt('tieredmenu.color'), ";\n    border: 1px solid ").concat(dt('tieredmenu.border.color'), ";\n    border-radius: ").concat(dt('tieredmenu.border.radius'), ";\n    min-width: 12.5rem;\n}\n\n.p-tieredmenu-root-list,\n.p-tieredmenu-submenu {\n    margin: 0;\n    padding: ").concat(dt('tieredmenu.list.padding'), ";\n    list-style: none;\n    outline: 0 none;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('tieredmenu.list.gap'), ";\n}\n\n.p-tieredmenu-submenu {\n    position: absolute;\n    min-width: 100%;\n    z-index: 1;\n    background: ").concat(dt('tieredmenu.background'), ";\n    color: ").concat(dt('tieredmenu.color'), ";\n    border: 1px solid ").concat(dt('tieredmenu.border.color'), ";\n    border-radius: ").concat(dt('tieredmenu.border.radius'), ";\n    box-shadow: ").concat(dt('tieredmenu.shadow'), ";\n}\n\n.p-tieredmenu-item {\n    position: relative;\n}\n\n.p-tieredmenu-item-content {\n    transition: background ").concat(dt('tieredmenu.transition.duration'), ", color ").concat(dt('tieredmenu.transition.duration'), ";\n    border-radius: ").concat(dt('tieredmenu.item.border.radius'), ";\n    color: ").concat(dt('tieredmenu.item.color'), ";\n}\n\n.p-tieredmenu-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: ").concat(dt('tieredmenu.item.padding'), ";\n    gap: ").concat(dt('tieredmenu.item.gap'), ";\n    user-select: none;\n    outline: 0 none;\n}\n\n.p-tieredmenu-item-label {\n    line-height: 1;\n}\n\n.p-tieredmenu-item-icon {\n    color: ").concat(dt('tieredmenu.item.icon.color'), ";\n}\n\n.p-tieredmenu-submenu-icon {\n    color: ").concat(dt('tieredmenu.submenu.icon.color'), ";\n    margin-left: auto;\n    font-size: ").concat(dt('tieredmenu.submenu.icon.size'), ";\n    width: ").concat(dt('tieredmenu.submenu.icon.size'), ";\n    height: ").concat(dt('tieredmenu.submenu.icon.size'), ";\n}\n\n.p-tieredmenu-submenu-icon:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {\n    color: ").concat(dt('tieredmenu.item.focus.color'), ";\n    background: ").concat(dt('tieredmenu.item.focus.background'), ";\n}\n\n.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {\n    color: ").concat(dt('tieredmenu.item.icon.focus.color'), ";\n}\n\n.p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n    color: ").concat(dt('tieredmenu.submenu.icon.focus.color'), ";\n}\n\n.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {\n    color: ").concat(dt('tieredmenu.item.focus.color'), ";\n    background: ").concat(dt('tieredmenu.item.focus.background'), ";\n}\n\n.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {\n    color: ").concat(dt('tieredmenu.item.icon.focus.color'), ";\n}\n\n.p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {\n    color: ").concat(dt('tieredmenu.submenu.icon.focus.color'), ";\n}\n\n.p-tieredmenu-item-active > .p-tieredmenu-item-content {\n    color: ").concat(dt('tieredmenu.item.active.color'), ";\n    background: ").concat(dt('tieredmenu.item.active.background'), ";\n}\n\n.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {\n    color: ").concat(dt('tieredmenu.item.icon.active.color'), ";\n}\n\n.p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n    color: ").concat(dt('tieredmenu.submenu.icon.active.color'), ";\n}\n\n.p-tieredmenu-separator {\n    border-block-start: 1px solid ").concat(dt('tieredmenu.separator.border.color'), ";\n}\n\n.p-tieredmenu-overlay {\n    box-shadow: ").concat(dt('tieredmenu.shadow'), ";\n}\n\n.p-tieredmenu-enter-from,\n.p-tieredmenu-leave-active {\n    opacity: 0;\n}\n\n.p-tieredmenu-enter-active {\n    transition: opacity 250ms;\n}\n\n.p-tieredmenu-mobile .p-tieredmenu-submenu {\n    position: static;\n    box-shadow: none;\n    border: 0 none;\n    padding-inline-start: ").concat(dt('tieredmenu.submenu.mobile.indent'), ";\n    padding-inline-end: 0;\n}\n\n.p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {\n    padding-inline-start: 0;\n    padding-inline-end: ").concat(dt('tieredmenu.submenu.mobile.indent'), ";\n}\n\n.p-tieredmenu-mobile .p-tieredmenu-submenu-icon {\n    transition: transform 0.2s;\n    transform: rotate(90deg);\n}\n\n.p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {\n    transform: rotate(-90deg);\n}\n");
};
var inlineStyles = {
  submenu: function submenu(_ref2) {
    var instance = _ref2.instance,
      processedItem = _ref2.processedItem;
    return {
      display: instance.isItemActive(processedItem) ? 'flex' : 'none'
    };
  }
};
var classes = {
  root: function root(_ref3) {
    var props = _ref3.props,
      instance = _ref3.instance;
    return ['p-tieredmenu p-component', {
      'p-tieredmenu-overlay': props.popup,
      'p-tieredmenu-mobile': instance.queryMatches
    }];
  },
  start: 'p-tieredmenu-start',
  rootList: 'p-tieredmenu-root-list',
  item: function item(_ref4) {
    var instance = _ref4.instance,
      processedItem = _ref4.processedItem;
    return ['p-tieredmenu-item', {
      'p-tieredmenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-tieredmenu-item-content',
  itemLink: 'p-tieredmenu-item-link',
  itemIcon: 'p-tieredmenu-item-icon',
  itemLabel: 'p-tieredmenu-item-label',
  submenuIcon: 'p-tieredmenu-submenu-icon',
  submenu: 'p-tieredmenu-submenu',
  separator: 'p-tieredmenu-separator',
  end: 'p-tieredmenu-end'
};
var TieredMenuStyle = BaseStyle.extend({
  name: 'tieredmenu',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { TieredMenuStyle as default };
//# sourceMappingURL=index.mjs.map
