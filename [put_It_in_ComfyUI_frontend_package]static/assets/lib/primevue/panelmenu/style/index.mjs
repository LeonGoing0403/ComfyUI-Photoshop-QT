import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-panelmenu {\n    display: flex;\n    flex-direction: column;\n    gap: ".concat(dt('panelmenu.gap'), ";\n}\n\n.p-panelmenu-panel {\n    background: ").concat(dt('panelmenu.panel.background'), ";\n    border-width: ").concat(dt('panelmenu.panel.border.width'), ";\n    border-style: solid;\n    border-color: ").concat(dt('panelmenu.panel.border.color'), ";\n    color: ").concat(dt('panelmenu.panel.color'), ";\n    border-radius: ").concat(dt('panelmenu.panel.border.radius'), ";\n    padding: ").concat(dt('panelmenu.panel.padding'), ";\n}\n\n.p-panelmenu-panel:first-child {\n    border-width: ").concat(dt('panelmenu.panel.first.border.width'), ";\n    border-start-start-radius: ").concat(dt('panelmenu.panel.first.top.border.radius'), ";\n    border-start-end-radius: ").concat(dt('panelmenu.panel.first.top.border.radius'), ";\n}\n\n.p-panelmenu-panel:last-child {\n    border-width: ").concat(dt('panelmenu.panel.last.border.width'), ";\n    border-end-start-radius: ").concat(dt('panelmenu.panel.last.bottom.border.radius'), ";\n    border-end-end-radius: ").concat(dt('panelmenu.panel.last.bottom.border.radius'), ";\n}\n\n.p-panelmenu-header {\n    outline: 0 none;\n}\n\n.p-panelmenu-header-content {\n    border-radius: ").concat(dt('panelmenu.item.border.radius'), ";\n    transition: background ").concat(dt('panelmenu.transition.duration'), ", color ").concat(dt('panelmenu.transition.duration'), ", outline-color ").concat(dt('panelmenu.transition.duration'), ", box-shadow ").concat(dt('panelmenu.transition.duration'), ";\n    outline-color: transparent;\n    color: ").concat(dt('panelmenu.item.color'), ";\n}\n\n.p-panelmenu-header-link {\n    display: flex;\n    gap: ").concat(dt('panelmenu.item.gap'), ";\n    padding: ").concat(dt('panelmenu.item.padding'), ";\n    align-items: center;\n    user-select: none;\n    cursor: pointer;\n    position: relative;\n    text-decoration: none;\n    color: inherit;\n}\n\n.p-panelmenu-header-icon,\n.p-panelmenu-item-icon {\n    color: ").concat(dt('panelmenu.item.icon.color'), ";\n}\n\n.p-panelmenu-submenu-icon {\n    color: ").concat(dt('panelmenu.submenu.icon.color'), ";\n}\n\n.p-panelmenu-submenu-icon:dir(rtl) {\n    transform: rotate(180deg);\n}\n\n.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {\n    background: ").concat(dt('panelmenu.item.focus.background'), ";\n    color: ").concat(dt('panelmenu.item.focus.color'), ";\n}\n\n.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {\n    color: ").concat(dt('panelmenu.item.icon.focus.color'), ";\n}\n\n.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {\n    color: ").concat(dt('panelmenu.submenu.icon.focus.color'), ";\n}\n\n.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {\n    background: ").concat(dt('panelmenu.item.focus.background'), ";\n    color: ").concat(dt('panelmenu.item.focus.color'), ";\n}\n\n.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {\n    color: ").concat(dt('panelmenu.item.icon.focus.color'), ";\n}\n\n.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {\n    color: ").concat(dt('panelmenu.submenu.icon.focus.color'), ";\n}\n\n.p-panelmenu-submenu {\n    margin: 0;\n    padding: 0 0 0 ").concat(dt('panelmenu.submenu.indent'), ";\n    outline: 0;\n    list-style: none;\n}\n\n.p-panelmenu-submenu:dir(rtl) {\n    padding: 0 ").concat(dt('panelmenu.submenu.indent'), " 0 0;\n}\n\n.p-panelmenu-item-link {\n    display: flex;\n    gap: ").concat(dt('panelmenu.item.gap'), ";\n    padding: ").concat(dt('panelmenu.item.padding'), ";\n    align-items: center;\n    user-select: none;\n    cursor: pointer;\n    text-decoration: none;\n    color: inherit;\n    position: relative;\n    overflow: hidden;\n}\n\n.p-panelmenu-item-label {\n    line-height: 1;\n}\n\n.p-panelmenu-item-content {\n    border-radius: ").concat(dt('panelmenu.item.border.radius'), ";\n    transition: background ").concat(dt('panelmenu.transition.duration'), ", color ").concat(dt('panelmenu.transition.duration'), ", outline-color ").concat(dt('panelmenu.transition.duration'), ", box-shadow ").concat(dt('panelmenu.transition.duration'), ";\n    color: ").concat(dt('panelmenu.item.color'), ";\n    outline-color: transparent;\n}\n\n.p-panelmenu-item.p-focus > .p-panelmenu-item-content {\n    background: ").concat(dt('panelmenu.item.focus.background'), ";\n    color: ").concat(dt('panelmenu.item.focus.color'), ";\n}\n\n.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {\n    color: ").concat(dt('panelmenu.item.focus.color'), ";\n}\n\n.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {\n    color: ").concat(dt('panelmenu.submenu.icon.focus.color'), ";\n}\n\n.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {\n    background: ").concat(dt('panelmenu.item.focus.background'), ";\n    color: ").concat(dt('panelmenu.item.focus.color'), ";\n}\n\n.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {\n    color: ").concat(dt('panelmenu.item.icon.focus.color'), ";\n}\n\n.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {\n    color: ").concat(dt('panelmenu.submenu.icon.focus.color'), ";\n}\n");
};
var classes = {
  root: 'p-panelmenu p-component',
  panel: 'p-panelmenu-panel',
  header: function header(_ref2) {
    var instance = _ref2.instance,
      item = _ref2.item;
    return ['p-panelmenu-header', {
      'p-panelmenu-header-active': instance.isItemActive(item) && !!item.items,
      'p-disabled': instance.isItemDisabled(item)
    }];
  },
  headerContent: 'p-panelmenu-header-content',
  headerLink: 'p-panelmenu-header-link',
  headerIcon: 'p-panelmenu-header-icon',
  headerLabel: 'p-panelmenu-header-label',
  contentContainer: 'p-panelmenu-content-container',
  content: 'p-panelmenu-content',
  rootList: 'p-panelmenu-root-list',
  item: function item(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem;
    return ['p-panelmenu-item', {
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-panelmenu-item-content',
  itemLink: 'p-panelmenu-item-link',
  itemIcon: 'p-panelmenu-item-icon',
  itemLabel: 'p-panelmenu-item-label',
  submenuIcon: 'p-panelmenu-submenu-icon',
  submenu: 'p-panelmenu-submenu',
  separator: 'p-menuitem-separator'
};
var PanelMenuStyle = BaseStyle.extend({
  name: 'panelmenu',
  theme: theme,
  classes: classes
});

export { PanelMenuStyle as default };
//# sourceMappingURL=index.mjs.map
