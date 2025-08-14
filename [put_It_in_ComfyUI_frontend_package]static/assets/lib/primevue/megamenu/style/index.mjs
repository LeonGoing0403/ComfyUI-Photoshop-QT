import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-megamenu {\n    position: relative;\n    display: flex;\n    align-items: center;\n    background: ".concat(dt('megamenu.background'), ";\n    border: 1px solid ").concat(dt('megamenu.border.color'), ";\n    border-radius: ").concat(dt('megamenu.border.radius'), ";\n    color: ").concat(dt('megamenu.color'), ";\n    gap: ").concat(dt('megamenu.gap'), ";\n}\n\n.p-megamenu-start,\n.p-megamenu-end {\n    display: flex;\n    align-items: center;\n}\n\n.p-megamenu-root-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    outline: 0 none;\n    align-items: center;\n    display: flex;\n    flex-wrap: wrap;\n    gap: ").concat(dt('megamenu.gap'), ";\n}\n\n.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {\n    border-radius: ").concat(dt('megamenu.base.item.border.radius'), ";\n}\n\n.p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {\n    padding: ").concat(dt('megamenu.base.item.padding'), ";\n}\n\n.p-megamenu-item-content {\n    transition: background ").concat(dt('megamenu.transition.duration'), ", color ").concat(dt('megamenu.transition.duration'), ";\n    border-radius: ").concat(dt('megamenu.item.border.radius'), ";\n    color: ").concat(dt('megamenu.item.color'), ";\n}\n\n.p-megamenu-item-link {\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    overflow: hidden;\n    position: relative;\n    color: inherit;\n    padding: ").concat(dt('megamenu.item.padding'), ";\n    gap: ").concat(dt('megamenu.item.gap'), ";\n    user-select: none;\n    outline: 0 none;\n}\n\n.p-megamenu-item-label {\n    line-height: 1;\n}\n\n.p-megamenu-item-icon {\n    color: ").concat(dt('megamenu.item.icon.color'), ";\n}\n\n.p-megamenu-submenu-icon {\n    color: ").concat(dt('megamenu.submenu.icon.color'), ";\n    font-size: ").concat(dt('megamenu.submenu.icon.size'), ";\n    width: ").concat(dt('megamenu.submenu.icon.size'), ";\n    height: ").concat(dt('megamenu.submenu.icon.size'), ";\n}\n\n.p-megamenu-item.p-focus > .p-megamenu-item-content {\n    color: ").concat(dt('megamenu.item.focus.color'), ";\n    background: ").concat(dt('megamenu.item.focus.background'), ";\n}\n\n.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {\n    color: ").concat(dt('megamenu.item.icon.focus.color'), ";\n}\n\n.p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {\n    color: ").concat(dt('megamenu.submenu.icon.focus.color'), ";\n}\n\n.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {\n    color: ").concat(dt('megamenu.item.focus.color'), ";\n    background: ").concat(dt('megamenu.item.focus.background'), ";\n}\n\n.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {\n    color: ").concat(dt('megamenu.item.icon.focus.color'), ";\n}\n\n.p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {\n    color: ").concat(dt('megamenu.submenu.icon.focus.color'), ";\n}\n\n.p-megamenu-item-active > .p-megamenu-item-content {\n    color: ").concat(dt('megamenu.item.active.color'), ";\n    background: ").concat(dt('megamenu.item.active.background'), ";\n}\n\n.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {\n    color: ").concat(dt('megamenu.item.icon.active.color'), ";\n}\n\n.p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {\n    color: ").concat(dt('megamenu.submenu.icon.active.color'), ";\n}\n\n.p-megamenu-overlay {\n    display: none;\n    position: absolute;\n    width: auto;\n    z-index: 1;\n    left: 0;\n    min-width: 100%;\n    padding: ").concat(dt('megamenu.overlay.padding'), ";\n    background: ").concat(dt('megamenu.overlay.background'), ";\n    color: ").concat(dt('megamenu.overlay.color'), ";\n    border: 1px solid ").concat(dt('megamenu.overlay.border.color'), ";\n    border-radius: ").concat(dt('megamenu.overlay.border.radius'), ";\n    box-shadow: ").concat(dt('megamenu.overlay.shadow'), ";\n}\n\n.p-megamenu-overlay:dir(rtl) {\n    left: auto;\n    right: 0;\n}\n\n.p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {\n    display: block;\n}\n\n.p-megamenu-submenu {\n    margin: 0;\n    list-style: none;\n    padding: ").concat(dt('megamenu.submenu.padding'), ";\n    min-width: 12.5rem;\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('megamenu.submenu.gap'), "\n}\n\n.p-megamenu-submenu-label {\n    padding: ").concat(dt('megamenu.submenu.label.padding'), ";\n    color: ").concat(dt('megamenu.submenu.label.color'), ";\n    font-weight: ").concat(dt('megamenu.submenu.label.font.weight'), ";\n    background: ").concat(dt('megamenu.submenu.label.background'), ";\n}\n\n.p-megamenu-separator {\n    border-block-start: 1px solid ").concat(dt('megamenu.separator.border.color'), ";\n}\n\n.p-megamenu-horizontal {\n    align-items: center;\n    padding: ").concat(dt('megamenu.horizontal.orientation.padding'), ";\n}\n\n.p-megamenu-horizontal .p-megamenu-root-list {\n    display: flex;\n    align-items: center;\n    flex-wrap: wrap;\n    gap: ").concat(dt('megamenu.horizontal.orientation.gap'), ";\n}\n\n.p-megamenu-horizontal .p-megamenu-end {\n    margin-left: auto;\n    align-self: center;\n}\n\n.p-megamenu-horizontal .p-megamenu-end:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-megamenu-vertical {\n    display: inline-flex;\n    min-width: 12.5rem;\n    flex-direction: column;\n    align-items: stretch;\n    padding: ").concat(dt('megamenu.vertical.orientation.padding'), ";\n}\n\n.p-megamenu-vertical .p-megamenu-root-list {\n    align-items: stretch;\n    flex-direction: column;\n    gap: ").concat(dt('megamenu.vertical.orientation.gap'), ";\n}\n\n.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {\n    left: 100%;\n    top: 0;\n}\n\n.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {\n    left: auto;\n    right: 100%;\n}\n\n.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {\n    margin-left: auto;\n}\n\n.p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n    transform: rotate(180deg);\n}\n\n.p-megamenu-grid {\n    display: flex;\n}\n\n.p-megamenu-col-2,\n.p-megamenu-col-3,\n.p-megamenu-col-4,\n.p-megamenu-col-6,\n.p-megamenu-col-12 {\n    flex: 0 0 auto;\n    padding: ").concat(dt('megamenu.overlay.gap'), ";\n}\n\n.p-megamenu-col-2 {\n    width: 16.6667%;\n}\n\n.p-megamenu-col-3 {\n    width: 25%;\n}\n\n.p-megamenu-col-4 {\n    width: 33.3333%;\n}\n\n.p-megamenu-col-6 {\n    width: 50%;\n}\n\n.p-megamenu-col-12 {\n    width: 100%;\n}\n\n.p-megamenu-button {\n    display: none;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    width: ").concat(dt('megamenu.mobile.button.size'), ";\n    height: ").concat(dt('megamenu.mobile.button.size'), ";\n    position: relative;\n    color: ").concat(dt('megamenu.mobile.button.color'), ";\n    border: 0 none;\n    background: transparent;\n    border-radius: ").concat(dt('megamenu.mobile.button.border.radius'), ";\n    transition: background ").concat(dt('megamenu.transition.duration'), ", color ").concat(dt('megamenu.transition.duration'), ", outline-color ").concat(dt('megamenu.transition.duration'), ", box-shadow ").concat(dt('megamenu.transition.duration'), ";\n    outline-color: transparent;\n}\n\n.p-megamenu-button:hover {\n    color: ").concat(dt('megamenu.mobile.button.hover.color'), ";\n    background: ").concat(dt('megamenu.mobile.button.hover.background'), ";\n}\n\n.p-megamenu-button:focus-visible {\n    box-shadow: ").concat(dt('megamenu.mobile.button.focus.ring.shadow'), ";\n    outline: ").concat(dt('megamenu.mobile.button.focus.ring.width'), " ").concat(dt('megamenu.mobile.button.focus.ring.style'), " ").concat(dt('megamenu.mobile.button.focus.ring.color'), ";\n    outline-offset: ").concat(dt('megamenu.mobile.button.focus.ring.offset'), ";\n}\n\n.p-megamenu-mobile {\n    display: flex;\n}\n\n.p-megamenu-mobile .p-megamenu-button {\n    display: flex;\n}\n\n.p-megamenu-mobile .p-megamenu-root-list {\n    position: absolute;\n    display: none;\n    flex-direction: column;\n    top: 100%;\n    left: 0;\n    z-index: 1;\n    width: 100%;\n    padding: ").concat(dt('megamenu.submenu.padding'), ";\n    gap: ").concat(dt('megamenu.submenu.gap'), ";\n    background: ").concat(dt('megamenu.overlay.background'), ";\n    border: 1px solid ").concat(dt('megamenu.overlay.border.color'), ";\n    box-shadow: ").concat(dt('megamenu.overlay.shadow'), ";\n}\n\n.p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {\n    left: auto;\n    right: 0;\n}\n\n.p-megamenu-mobile-active .p-megamenu-root-list {\n    display: block;\n}\n\n.p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {\n    width: 100%;\n    position: static;\n}\n\n.p-megamenu-mobile .p-megamenu-overlay {\n    position: static;\n    border: 0 none;\n    border-radius: 0;\n    box-shadow: none;\n}\n\n.p-megamenu-mobile .p-megamenu-grid {\n    flex-wrap: wrap;\n    overflow: auto;\n    max-height: 90%;\n}\n\n.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {\n    margin-left: auto;\n    transition: transform 0.2s;\n}\n\n.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {\n    margin-left: 0;\n    margin-right: auto;\n}\n\n.p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {\n    transform: rotate(-180deg);\n}\n");
};
var inlineStyles = {
  rootList: function rootList(_ref2) {
    var props = _ref2.props;
    return {
      'max-height': props.scrollHeight,
      overflow: 'auto'
    };
  }
};
var classes = {
  root: function root(_ref3) {
    var instance = _ref3.instance;
    return ['p-megamenu p-component', {
      'p-megamenu-mobile': instance.queryMatches,
      'p-megamenu-mobile-active': instance.mobileActive,
      'p-megamenu-horizontal': instance.horizontal,
      'p-megamenu-vertical': instance.vertical
    }];
  },
  start: 'p-megamenu-start',
  button: 'p-megamenu-button',
  rootList: 'p-megamenu-root-list',
  submenuLabel: function submenuLabel(_ref4) {
    var instance = _ref4.instance,
      processedItem = _ref4.processedItem;
    return ['p-megamenu-submenu-label', {
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  item: function item(_ref5) {
    var instance = _ref5.instance,
      processedItem = _ref5.processedItem;
    return ['p-megamenu-item', {
      'p-megamenu-item-active': instance.isItemActive(processedItem),
      'p-focus': instance.isItemFocused(processedItem),
      'p-disabled': instance.isItemDisabled(processedItem)
    }];
  },
  itemContent: 'p-megamenu-item-content',
  itemLink: 'p-megamenu-item-link',
  itemIcon: 'p-megamenu-item-icon',
  itemLabel: 'p-megamenu-item-label',
  submenuIcon: 'p-megamenu-submenu-icon',
  overlay: 'p-megamenu-overlay',
  grid: 'p-megamenu-grid',
  column: function column(_ref6) {
    var instance = _ref6.instance,
      processedItem = _ref6.processedItem;
    var length = instance.isItemGroup(processedItem) ? processedItem.items.length : 0;
    var columnClass;
    if (instance.$parentInstance.queryMatches) columnClass = 'p-megamenu-col-12';else {
      switch (length) {
        case 2:
          columnClass = 'p-megamenu-col-6';
          break;
        case 3:
          columnClass = 'p-megamenu-col-4';
          break;
        case 4:
          columnClass = 'p-megamenu-col-3';
          break;
        case 6:
          columnClass = 'p-megamenu-col-2';
          break;
        default:
          columnClass = 'p-megamenu-col-12';
          break;
      }
    }
    return columnClass;
  },
  submenu: 'p-megamenu-submenu',
  separator: 'p-megamenu-separator',
  end: 'p-megamenu-end'
};
var MegaMenuStyle = BaseStyle.extend({
  name: 'megamenu',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { MegaMenuStyle as default };
//# sourceMappingURL=index.mjs.map
