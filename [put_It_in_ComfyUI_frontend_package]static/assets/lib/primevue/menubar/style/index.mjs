import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-menubar {\n    display: flex;\n    align-items: center;\n    background: ".concat(dt('menubar.background'), ";\n    border: 1px solid ").concat(dt('menubar.border.color'), ";\n    border-radius: ").concat(dt('menubar.border.radius'), ";\n    color: ").concat(dt('menubar.color'), ";\n    padding: ").concat(dt('menubar.padding'), ";\n    gap: ").concat(dt('menubar.gap'), ";\n}\n\n.p-menubar-start,\n.p-megamenu-end {\n    display: flex;\n    align-items: center;\n}\n\n.p-menubar-root-list,\n.p-menubar-submenu {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    outline: 0 none;\n}\n\n.p-menubar-root-list {\n    align-items: center;\n    flex-wrap: wrap;\n    gap: ").concat(dt('menubar.gap'), ";\n}\n\n.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {\n    border-radius: ").concat(dt('menubar.base.item.border.radius'), ";\n}\n\n.p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {\n    padding: ").concat(dt('menubar.base.item.padding'), ";\n}\n\n.p-menubar-item-content {\n    transition: background ").concat(dt('menubar.transition.duration'), ", color ").concat(dt('menubar.transition.duration'), ";\n    border-radius: ").concat(dt('menubar.item.border.radius'), ";\n    color: ").concat(dt('menubar.item.color'), ";\n}\n\n.p-menubar-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: ").concat(dt('menubar.item.padding'), ";\n    gap: ").concat(dt('menubar.item.gap'), ";\n    user-select: none;\n    outline: 0 none;\n}\n\n.p-menubar-item-label {\n    line-height: 1;\n}\n\n.p-menubar-item-icon {\n    color: ").concat(dt('menubar.item.icon.color'), ";\n}\n\n.p-menubar-submenu-icon {\n    color: ").concat(dt('menubar.submenu.icon.color'), ";\n    margin-left: auto;\n    font-size: ").concat(dt('menubar.submenu.icon.size'), ";\n    width: ").concat(dt('menubar.submenu.icon.size'), ";\n    height: ").concat(dt('menubar.submenu.icon.size'), ";\n}\n\n.p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content {\n    color: ").concat(dt('menubar.item.focus.color'), ";\n    background: ").concat(dt('menubar.item.focus.background'), ";\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {\n    color: ").concat(dt('menubar.item.icon.focus.color'), ";\n}\n\n.p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {\n    color: ").concat(dt('menubar.submenu.icon.focus.color'), ";\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {\n    color: ").concat(dt('menubar.item.focus.color'), ";\n    background: ").concat(dt('menubar.item.focus.background'), ";\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {\n    color: ").concat(dt('menubar.item.icon.focus.color'), ";\n}\n\n.p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {\n    color: ").concat(dt('menubar.submenu.icon.focus.color'), ";\n}\n\n.p-menubar-item-active > .p-menubar-item-content {\n    color: ").concat(dt('menubar.item.active.color'), ";\n    background: ").concat(dt('menubar.item.active.background'), ";\n}\n\n.p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {\n    color: ").concat(dt('menubar.item.icon.active.color'), ";\n}\n\n.p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    color: ").concat(dt('menubar.submenu.icon.active.color'), ";\n}\n\n.p-menubar-submenu {\n    display: none;\n    position: absolute;\n    min-width: 12.5rem;\n    z-index: 1;\n    background: ").concat(dt('menubar.submenu.background'), ";\n    border: 1px solid ").concat(dt('menubar.submenu.border.color'), ";\n    border-radius: ").concat(dt('menubar.submenu.border.radius'), ";\n    box-shadow: ").concat(dt('menubar.submenu.shadow'), ";\n    color: ").concat(dt('menubar.submenu.color'), ";\n    flex-direction: column;\n    padding: ").concat(dt('menubar.submenu.padding'), ";\n    gap: ").concat(dt('menubar.submenu.gap'), ";\n}\n\n.p-menubar-submenu .p-menubar-separator {\n    border-block-start: 1px solid ").concat(dt('menubar.separator.border.color'), ";\n}\n\n.p-menubar-submenu .p-menubar-item {\n    position: relative;\n}\n\n.p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {\n    display: block;\n    left: 100%;\n    top: 0;\n}\n\n.p-menubar-end {\n    margin-left: auto;\n    align-self: center;\n}\n\n.p-menubar-end:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-menubar-button {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    width: ").concat(dt('menubar.mobile.button.size'), ";\n    height: ").concat(dt('menubar.mobile.button.size'), ";\n    position: relative;\n    color: ").concat(dt('menubar.mobile.button.color'), ";\n    border: 0 none;\n    background: transparent;\n    border-radius: ").concat(dt('menubar.mobile.button.border.radius'), ";\n    transition: background ").concat(dt('menubar.transition.duration'), ", color ").concat(dt('menubar.transition.duration'), ", outline-color ").concat(dt('menubar.transition.duration'), ";\n    outline-color: transparent;\n}\n\n.p-menubar-button:hover {\n    color: ").concat(dt('menubar.mobile.button.hover.color'), ";\n    background: ").concat(dt('menubar.mobile.button.hover.background'), ";\n}\n\n.p-menubar-button:focus-visible {\n    box-shadow: ").concat(dt('menubar.mobile.button.focus.ring.shadow'), ";\n    outline: ").concat(dt('menubar.mobile.button.focus.ring.width'), " ").concat(dt('menubar.mobile.button.focus.ring.style'), " ").concat(dt('menubar.mobile.button.focus.ring.color'), ";\n    outline-offset: ").concat(dt('menubar.mobile.button.focus.ring.offset'), ";\n}\n\n.p-menubar-mobile {\n    position: relative;\n}\n\n.p-menubar-mobile .p-menubar-button {\n    display: flex;\n}\n\n.p-menubar-mobile .p-menubar-root-list {\n    position: absolute;\n    display: none;\n    width: 100%;\n    flex-direction: column;\n    top: 100%;\n    left: 0;\n    z-index: 1;\n    padding: ").concat(dt('menubar.submenu.padding'), ";\n    background: ").concat(dt('menubar.submenu.background'), ";\n    border: 1px solid ").concat(dt('menubar.submenu.border.color'), ";\n    box-shadow: ").concat(dt('menubar.submenu.shadow'), ";\n    border-radius: ").concat(dt('menubar.submenu.border.radius'), ";\n    gap: ").concat(dt('menubar.submenu.gap'), ";\n}\n\n.p-menubar-mobile .p-menubar-root-list:dir(rtl) {\n    left: auto;\n    right: 0;\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {\n    padding: ").concat(dt('menubar.item.padding'), ";\n}\n\n.p-menubar-mobile-active .p-menubar-root-list {\n    display: flex;\n}\n\n.p-menubar-mobile .p-menubar-root-list .p-menubar-item {\n    width: 100%;\n    position: static;\n}\n\n.p-menubar-mobile .p-menubar-root-list .p-menubar-separator {\n    border-block-start: 1px solid ").concat(dt('menubar.separator.border.color'), ";\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {\n    margin-left: auto;\n    transition: transform 0.2s;\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),\n.p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    transform: rotate(-180deg);\n}\n\n.p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {\n    transition: transform 0.2s;\n    transform: rotate(90deg);\n}\n\n.p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {\n    transform: rotate(-90deg);\n}\n\n.p-menubar-mobile .p-menubar-submenu {\n    width: 100%;\n    position: static;\n    box-shadow: none;\n    border: 0 none;\n    padding-inline-start: ").concat(dt('menubar.submenu.mobile.indent'), ";\n    padding-inline-end: 0;\n}\n");
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
    var instance = _ref3.instance;
    return ['p-menubar p-component', {
      'p-menubar-mobile': instance.queryMatches,
      'p-menubar-mobile-active': instance.mobileActive
    }];
  },
  start: 'p-menubar-start',
  button: 'p-menubar-button',
  rootList: 'p-menubar-root-list',
  item: function item(_ref4) {
    var instance = _ref4.instance,
      processedItem = _ref4.processedItem;
    return ['p-menubar-item', {
      'p-menubar-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-menubar-item-content',
  itemLink: 'p-menubar-item-link',
  itemIcon: 'p-menubar-item-icon',
  itemLabel: 'p-menubar-item-label',
  submenuIcon: 'p-menubar-submenu-icon',
  submenu: 'p-menubar-submenu',
  separator: 'p-menubar-separator',
  end: 'p-menubar-end'
};
var MenubarStyle = BaseStyle.extend({
  name: 'menubar',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { MenubarStyle as default };
//# sourceMappingURL=index.mjs.map
