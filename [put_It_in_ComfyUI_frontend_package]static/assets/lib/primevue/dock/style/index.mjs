import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-dock {\n    position: absolute;\n    z-index: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    pointer-events: none;\n}\n\n.p-dock-list-container {\n    display: flex;\n    pointer-events: auto;\n    background: ".concat(dt('dock.background'), ";\n    border: 1px solid ").concat(dt('dock.border.color'), ";\n    padding: ").concat(dt('dock.padding'), ";\n    border-radius: ").concat(dt('dock.border.radius'), ";\n}\n\n.p-dock-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    outline: 0 none;\n}\n\n.p-dock-item {\n    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n    will-change: transform;\n    padding: ").concat(dt('dock.item.padding'), ";\n    border-radius: ").concat(dt('dock.item.border.radius'), ";\n}\n\n.p-dock-item.p-focus {\n    box-shadow: ").concat(dt('dock.item.focus.ring.shadow'), ";\n    outline: ").concat(dt('dock.item.focus.ring.width'), " ").concat(dt('dock.item.focus.ring.style'), " ").concat(dt('dock.item.focus.ring.color'), ";\n    outline-offset: ").concat(dt('dock.item.focus.ring.offset'), ";\n}\n\n.p-dock-item-link {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    overflow: hidden;\n    cursor: default;\n    width: ").concat(dt('dock.item.size'), ";\n    height: ").concat(dt('dock.item.size'), ";\n}\n\n.p-dock-top {\n    left: 0;\n    top: 0;\n    width: 100%;\n}\n\n.p-dock-bottom {\n    left: 0;\n    bottom: 0;\n    width: 100%;\n}\n\n.p-dock-right {\n    right: 0;\n    top: 0;\n    height: 100%;\n}\n\n.p-dock-right .p-dock-list {\n    flex-direction: column;\n}\n\n.p-dock-left {\n    left: 0;\n    top: 0;\n    height: 100%;\n}\n\n.p-dock-left .p-dock-list {\n    flex-direction: column;\n}\n\n.p-dock-mobile.p-dock-top .p-dock-list-container,\n.p-dock-mobile.p-dock-bottom .p-dock-list-container {\n    overflow-x: auto;\n    width: 100%;\n}\n\n.p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,\n.p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {\n    margin: 0 auto;\n}\n\n.p-dock-mobile.p-dock-left .p-dock-list-container,\n.p-dock-mobile.p-dock-right .p-dock-list-container {\n    overflow-y: auto;\n    height: 100%;\n}\n\n.p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,\n.p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {\n    margin: auto 0;\n}\n\n.p-dock-mobile .p-dock-list .p-dock-item {\n    transform: none;\n    margin: 0;\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-dock p-component', "p-dock-".concat(props.position), {
      'p-dock-mobile': instance.queryMatches
    }];
  },
  listContainer: 'p-dock-list-container',
  list: 'p-dock-list',
  item: function item(_ref3) {
    var instance = _ref3.instance,
      processedItem = _ref3.processedItem,
      id = _ref3.id;
    return ['p-dock-item', {
      'p-focus': instance.isItemActive(id),
      'p-disabled': instance.disabled(processedItem)
    }];
  },
  itemContent: 'p-dock-item-content',
  itemLink: 'p-dock-item-link',
  itemIcon: 'p-dock-item-icon'
};
var DockStyle = BaseStyle.extend({
  name: 'dock',
  theme: theme,
  classes: classes
});

export { DockStyle as default };
//# sourceMappingURL=index.mjs.map
