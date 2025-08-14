import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-breadcrumb {\n    background: ".concat(dt('breadcrumb.background'), ";\n    padding: ").concat(dt('breadcrumb.padding'), ";\n    overflow-x: auto;\n}\n\n.p-breadcrumb-list {\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n    gap: ").concat(dt('breadcrumb.gap'), ";\n}\n\n.p-breadcrumb-separator {\n    display: flex;\n    align-items: center;\n    color: ").concat(dt('breadcrumb.separator.color'), ";\n}\n\n.p-breadcrumb-separator-icon:dir(rtl) {\n    transform: rotate(180deg);\n}\n\n.p-breadcrumb::-webkit-scrollbar {\n    display: none;\n}\n\n.p-breadcrumb-item-link {\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n    gap: ").concat(dt('breadcrumb.item.gap'), ";\n    transition: background ").concat(dt('breadcrumb.transition.duration'), ", color ").concat(dt('breadcrumb.transition.duration'), ", outline-color ").concat(dt('breadcrumb.transition.duration'), ", box-shadow ").concat(dt('breadcrumb.transition.duration'), ";\n    border-radius: ").concat(dt('breadcrumb.item.border.radius'), ";\n    outline-color: transparent;\n    color: ").concat(dt('breadcrumb.item.color'), ";\n}\n\n.p-breadcrumb-item-link:focus-visible {\n    box-shadow: ").concat(dt('breadcrumb.item.focus.ring.shadow'), ";\n    outline: ").concat(dt('breadcrumb.item.focus.ring.width'), " ").concat(dt('breadcrumb.item.focus.ring.style'), " ").concat(dt('breadcrumb.item.focus.ring.color'), ";\n    outline-offset: ").concat(dt('breadcrumb.item.focus.ring.offset'), ";\n}\n\n.p-breadcrumb-item-link:hover .p-breadcrumb-item-label {\n    color: ").concat(dt('breadcrumb.item.hover.color'), ";\n}\n\n.p-breadcrumb-item-label {\n    transition: inherit;\n}\n\n.p-breadcrumb-item-icon {\n    color: ").concat(dt('breadcrumb.item.icon.color'), ";\n    transition: inherit;\n}\n\n.p-breadcrumb-item-link:hover .p-breadcrumb-item-icon {\n    color: ").concat(dt('breadcrumb.item.icon.hover.color'), ";\n}\n");
};
var classes = {
  root: 'p-breadcrumb p-component',
  list: 'p-breadcrumb-list',
  homeItem: 'p-breadcrumb-home-item',
  separator: 'p-breadcrumb-separator',
  separatorIcon: 'p-breadcrumb-separator-icon',
  item: function item(_ref2) {
    var instance = _ref2.instance;
    return ['p-breadcrumb-item', {
      'p-disabled': instance.disabled()
    }];
  },
  itemLink: 'p-breadcrumb-item-link',
  itemIcon: 'p-breadcrumb-item-icon',
  itemLabel: 'p-breadcrumb-item-label'
};
var BreadcrumbStyle = BaseStyle.extend({
  name: 'breadcrumb',
  theme: theme,
  classes: classes
});

export { BreadcrumbStyle as default };
//# sourceMappingURL=index.mjs.map
