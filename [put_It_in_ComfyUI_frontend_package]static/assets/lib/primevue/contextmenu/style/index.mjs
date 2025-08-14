import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-contextmenu {\n    background: ".concat(dt('contextmenu.background'), ";\n    color: ").concat(dt('contextmenu.color'), ";\n    border: 1px solid ").concat(dt('contextmenu.border.color'), ";\n    border-radius: ").concat(dt('contextmenu.border.radius'), ";\n    box-shadow: ").concat(dt('contextmenu.shadow'), ";\n    min-width: 12.5rem;\n}\n\n.p-contextmenu-root-list,\n.p-contextmenu-submenu {\n    margin: 0;\n    padding: ").concat(dt('contextmenu.list.padding'), ";\n    list-style: none;\n    outline: 0 none;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('contextmenu.list.gap'), ";\n}\n\n.p-contextmenu-submenu {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    min-width: 100%;\n    z-index: 1;\n    background: ").concat(dt('contextmenu.background'), ";\n    color: ").concat(dt('contextmenu.color'), ";\n    border: 1px solid ").concat(dt('contextmenu.border.color'), ";\n    border-radius: ").concat(dt('contextmenu.border.radius'), ";\n    box-shadow: ").concat(dt('contextmenu.shadow'), ";\n}\n\n.p-contextmenu-item {\n    position: relative;\n}\n\n.p-contextmenu-item-content {\n    transition: background ").concat(dt('contextmenu.transition.duration'), ", color ").concat(dt('contextmenu.transition.duration'), ";\n    border-radius: ").concat(dt('contextmenu.item.border.radius'), ";\n    color: ").concat(dt('contextmenu.item.color'), ";\n}\n\n.p-contextmenu-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: ").concat(dt('contextmenu.item.padding'), ";\n    gap: ").concat(dt('contextmenu.item.gap'), ";\n    user-select: none;\n}\n\n.p-contextmenu-item-label {\n    line-height: 1;\n}\n\n.p-contextmenu-item-icon {\n    color: ").concat(dt('contextmenu.item.icon.color'), ";\n}\n\n.p-contextmenu-submenu-icon {\n    color: ").concat(dt('contextmenu.submenu.icon.color'), ";\n    margin-left: auto;\n    font-size: ").concat(dt('contextmenu.submenu.icon.size'), ";\n    width: ").concat(dt('contextmenu.submenu.icon.size'), ";\n    height: ").concat(dt('contextmenu.submenu.icon.size'), ";\n}\n\n.p-contextmenu-submenu-icon:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-contextmenu-item.p-focus > .p-contextmenu-item-content {\n    color: ").concat(dt('contextmenu.item.focus.color'), ";\n    background: ").concat(dt('contextmenu.item.focus.background'), ";\n}\n\n.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {\n    color: ").concat(dt('contextmenu.item.icon.focus.color'), ";\n}\n\n.p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {\n    color: ").concat(dt('contextmenu.submenu.icon.focus.color'), ";\n}\n\n.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {\n    color: ").concat(dt('contextmenu.item.focus.color'), ";\n    background: ").concat(dt('contextmenu.item.focus.background'), ";\n}\n\n.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {\n    color: ").concat(dt('contextmenu.item.icon.focus.color'), ";\n}\n\n.p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {\n    color: ").concat(dt('contextmenu.submenu.icon.focus.color'), ";\n}\n\n.p-contextmenu-item-active > .p-contextmenu-item-content {\n    color: ").concat(dt('contextmenu.item.active.color'), ";\n    background: ").concat(dt('contextmenu.item.active.background'), ";\n}\n\n.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {\n    color: ").concat(dt('contextmenu.item.icon.active.color'), ";\n}\n\n.p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {\n    color: ").concat(dt('contextmenu.submenu.icon.active.color'), ";\n}\n\n.p-contextmenu-separator {\n    border-block-start: 1px solid ").concat(dt('contextmenu.separator.border.color'), ";\n}\n\n.p-contextmenu-enter-from,\n.p-contextmenu-leave-active {\n    opacity: 0;\n}\n\n.p-contextmenu-enter-active {\n    transition: opacity 250ms;\n}\n\n.p-contextmenu-mobile .p-contextmenu-submenu {\n    position: static;\n    box-shadow: none;\n    border: 0 none;\n    padding-inline-start: ").concat(dt('tieredmenu.submenu.mobile.indent'), ";\n    padding-inline-end: 0;\n}\n\n.p-contextmenu-mobile .p-contextmenu-submenu-icon {\n    transition: transform 0.2s;\n    transform: rotate(90deg);\n}\n\n.p-contextmenu-mobile .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {\n    transform: rotate(-90deg);\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-contextmenu p-component', {
      'p-contextmenu-mobile': instance.queryMatches
    }];
  },
  rootList: 'p-contextmenu-root-list',
  item: function item(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-contextmenu-item', {
      'p-contextmenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-contextmenu-item-content',
  itemLink: 'p-contextmenu-item-link',
  itemIcon: 'p-contextmenu-item-icon',
  itemLabel: 'p-contextmenu-item-label',
  submenuIcon: 'p-contextmenu-submenu-icon',
  submenu: 'p-contextmenu-submenu',
  separator: 'p-contextmenu-separator'
};
var ContextMenuStyle = BaseStyle.extend({
  name: 'contextmenu',
  theme: theme,
  classes: classes
});

export { ContextMenuStyle as default };
//# sourceMappingURL=index.mjs.map
