import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-tabmenu {\n    overflow-x: auto;\n}\n\n.p-tabmenu-tablist {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    background: ".concat(dt('tabmenu.tablist.background'), ";\n    border-style: solid;\n    border-color: ").concat(dt('tabmenu.tablist.border.color'), ";\n    border-width: ").concat(dt('tabmenu.tablist.border.width'), ";\n    position: relative;\n}\n\n.p-tabmenu-item-link {\n    cursor: pointer;\n    user-select: none;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    position: relative;\n    overflow: hidden;\n    background: ").concat(dt('tabmenu.item.background'), ";\n    border-style: solid;\n    border-width: ").concat(dt('tabmenu.item.border.width'), ";\n    border-color: ").concat(dt('tabmenu.item.border.color'), ";\n    color: ").concat(dt('tabmenu.item.color'), ";\n    padding: ").concat(dt('tabmenu.item.padding'), ";\n    font-weight: ").concat(dt('tabmenu.item.font.weight'), ";\n    transition: background ").concat(dt('tabmenu.transition.duration'), ", border-color ").concat(dt('tabmenu.transition.duration'), ", color ").concat(dt('tabmenu.transition.duration'), ", outline-color ").concat(dt('tabmenu.transition.duration'), ", box-shadow ").concat(dt('tabmenu.transition.duration'), ";\n    margin: ").concat(dt('tabmenu.item.margin'), ";\n    outline-color: transparent;\n    gap: ").concat(dt('tabmenu.item.gap'), ";\n}\n\n.p-tabmenu-item-link:focus-visible {\n    z-index: 1;\n    box-shadow: ").concat(dt('tabmenu.item.focus.ring.shadow'), ";\n    outline: ").concat(dt('tabmenu.item.focus.ring.width'), " ").concat(dt('tabmenu.item.focus.ring.style'), " ").concat(dt('tabmenu.item.focus.ring.color'), ";\n    outline-offset: ").concat(dt('tabmenu.item.focus.ring.offset'), ";\n}\n\n.p-tabmenu-item-icon {\n    color: ").concat(dt('tabmenu.item.icon.color'), ";\n    transition: background ").concat(dt('tabmenu.transition.duration'), ", border-color ").concat(dt('tabmenu.transition.duration'), ", color ").concat(dt('tabmenu.transition.duration'), ", outline-color ").concat(dt('tabmenu.transition.duration'), ", box-shadow ").concat(dt('tabmenu.transition.duration'), ";\n}\n\n.p-tabmenu-item-label {\n    line-height: 1;\n}\n\n.p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-link {\n    background: ").concat(dt('tabmenu.item.hover.background'), ";\n    border-color: ").concat(dt('tabmenu.item.hover.border.color'), ";\n    color: ").concat(dt('tabmenu.item.hover.color'), ";\n}\n\n.p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-icon {\n    color: ").concat(dt('tabmenu.item.icon.hover.color'), ";\n}\n\n.p-tabmenu-item-active .p-tabmenu-item-link {\n    background: ").concat(dt('tabmenu.item.active.background'), ";\n    border-color: ").concat(dt('tabmenu.item.active.border.color'), ";\n    color: ").concat(dt('tabmenu.item.active.color'), ";\n}\n\n.p-tabmenu-item-active .p-tabmenu-item-icon {\n    color: ").concat(dt('tabmenu.item.icon.active.color'), ";\n}\n\n.p-tabmenu-active-bar {\n    z-index: 1;\n    display: block;\n    position: absolute;\n    bottom: ").concat(dt('tabmenu.active.bar.bottom'), ";\n    height: ").concat(dt('tabmenu.active.bar.height'), ";\n    background: ").concat(dt('tabmenu.active.bar.background'), ";\n    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);\n}\n\n.p-tabmenu::-webkit-scrollbar {\n    display: none;\n}\n");
};
var classes = {
  root: 'p-tabmenu p-component',
  tablist: 'p-tabmenu-tablist',
  item: function item(_ref2) {
    var instance = _ref2.instance,
      index = _ref2.index,
      _item = _ref2.item;
    return ['p-tabmenu-item', {
      'p-tabmenu-item-active': instance.d_activeIndex === index,
      'p-disabled': instance.disabled(_item)
    }];
  },
  itemLink: 'p-tabmenu-item-link',
  itemIcon: 'p-tabmenu-item-icon',
  itemLabel: 'p-tabmenu-item-label',
  activeBar: 'p-tabmenu-active-bar'
};
var TabMenuStyle = BaseStyle.extend({
  name: 'tabmenu',
  theme: theme,
  classes: classes
});

export { TabMenuStyle as default };
//# sourceMappingURL=index.mjs.map
