import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-tree {\n    background: ".concat(dt('tree.background'), ";\n    color: ").concat(dt('tree.color'), ";\n    padding: ").concat(dt('tree.padding'), ";\n}\n\n.p-tree-root-children,\n.p-tree-node-children {\n    display: flex;\n    list-style-type: none;\n    flex-direction: column;\n    margin: 0;\n    gap: ").concat(dt('tree.gap'), ";\n}\n\n.p-tree-root-children {\n    padding: 0;\n    padding-block-start: ").concat(dt('tree.gap'), ";\n}\n\n.p-tree-node-children {\n    padding: 0;\n    padding-block-start: ").concat(dt('tree.gap'), ";\n    padding-inline-start: ").concat(dt('tree.indent'), ";\n}\n\n.p-tree-node {\n    padding: 0;\n    outline: 0 none;\n}\n\n.p-tree-node-content {\n    border-radius: ").concat(dt('tree.node.border.radius'), ";\n    padding: ").concat(dt('tree.node.padding'), ";\n    display: flex;\n    align-items: center;\n    outline-color: transparent;\n    color: ").concat(dt('tree.node.color'), ";\n    gap: ").concat(dt('tree.node.gap'), ";\n    transition: background ").concat(dt('tree.transition.duration'), ", color ").concat(dt('tree.transition.duration'), ", outline-color ").concat(dt('tree.transition.duration'), ", box-shadow ").concat(dt('tree.transition.duration'), ";\n}\n\n.p-tree-node:focus-visible > .p-tree-node-content {\n    box-shadow: ").concat(dt('tree.node.focus.ring.shadow'), ";\n    outline: ").concat(dt('tree.node.focus.ring.width'), " ").concat(dt('tree.node.focus.ring.style'), " ").concat(dt('tree.node.focus.ring.color'), ";\n    outline-offset: ").concat(dt('tree.node.focus.ring.offset'), ";\n}\n\n.p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover {\n    background: ").concat(dt('tree.node.hover.background'), ";\n    color: ").concat(dt('tree.node.hover.color'), ";\n}\n\n.p-tree-node-content.p-tree-node-selectable:not(.p-tree-node-selected):hover .p-tree-node-icon {\n    color: ").concat(dt('tree.node.icon.hover.color'), ";\n}\n\n.p-tree-node-content.p-tree-node-selected {\n    background: ").concat(dt('tree.node.selected.background'), ";\n    color: ").concat(dt('tree.node.selected.color'), ";\n}\n\n.p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button {\n    color: inherit;\n}\n\n.p-tree-node-toggle-button {\n    cursor: pointer;\n    user-select: none;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    flex-shrink: 0;\n    width: ").concat(dt('tree.node.toggle.button.size'), ";\n    height: ").concat(dt('tree.node.toggle.button.size'), ";\n    color: ").concat(dt('tree.node.toggle.button.color'), ";\n    border: 0 none;\n    background: transparent;\n    border-radius: ").concat(dt('tree.node.toggle.button.border.radius'), ";\n    transition: background ").concat(dt('tree.transition.duration'), ", color ").concat(dt('tree.transition.duration'), ", border-color ").concat(dt('tree.transition.duration'), ", outline-color ").concat(dt('tree.transition.duration'), ", box-shadow ").concat(dt('tree.transition.duration'), ";\n    outline-color: transparent;\n    padding: 0;\n}\n\n.p-tree-node-toggle-button:enabled:hover {\n    background: ").concat(dt('tree.node.toggle.button.hover.background'), ";\n    color: ").concat(dt('tree.node.toggle.button.hover.color'), ";\n}\n\n.p-tree-node-content.p-tree-node-selected .p-tree-node-toggle-button:hover {\n    background: ").concat(dt('tree.node.toggle.button.selected.hover.background'), ";\n    color: ").concat(dt('tree.node.toggle.button.selected.hover.color'), ";\n}\n\n.p-tree-root {\n    overflow: auto;\n}\n\n.p-tree-node-selectable {\n    cursor: pointer;\n    user-select: none;\n}\n\n.p-tree-node-leaf > .p-tree-node-content .p-tree-node-toggle-button {\n    visibility: hidden;\n}\n\n.p-tree-node-icon {\n    color: ").concat(dt('tree.node.icon.color'), ";\n    transition: color ").concat(dt('tree.transition.duration'), ";\n}\n\n.p-tree-node-content.p-tree-node-selected .p-tree-node-icon {\n    color: ").concat(dt('tree.node.icon.selected.color'), ";\n}\n\n.p-tree-filter {\n    margin: ").concat(dt('tree.filter.margin'), ";\n}\n\n.p-tree-filter-input {\n    width: 100%;\n}\n\n.p-tree-loading {\n    position: relative;\n    height: 100%;\n}\n\n.p-tree-loading-icon {\n    font-size: ").concat(dt('tree.loading.icon.size'), ";\n    width: ").concat(dt('tree.loading.icon.size'), ";\n    height: ").concat(dt('tree.loading.icon.size'), ";\n}\n\n.p-tree .p-tree-mask {\n    position: absolute;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-tree-flex-scrollable {\n    display: flex;\n    flex: 1;\n    height: 100%;\n    flex-direction: column;\n}\n\n.p-tree-flex-scrollable .p-tree-root {\n    flex: 1;\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-tree p-component', {
      'p-tree-selectable': props.selectionMode != null,
      'p-tree-loading': props.loading,
      'p-tree-flex-scrollable': props.scrollHeight === 'flex'
    }];
  },
  mask: 'p-tree-mask p-overlay-mask',
  loadingIcon: 'p-tree-loading-icon',
  pcFilterContainer: 'p-tree-filter',
  pcFilterInput: 'p-tree-filter-input',
  wrapper: 'p-tree-root',
  //TODO: discuss
  rootChildren: 'p-tree-root-children',
  node: function node(_ref3) {
    var instance = _ref3.instance;
    return ['p-tree-node', {
      'p-tree-node-leaf': instance.leaf
    }];
  },
  nodeContent: function nodeContent(_ref4) {
    var instance = _ref4.instance;
    return ['p-tree-node-content', instance.node.styleClass, {
      'p-tree-node-selectable': instance.selectable,
      'p-tree-node-selected': instance.checkboxMode && instance.$parentInstance.highlightOnSelect ? instance.checked : instance.selected
    }];
  },
  nodeToggleButton: 'p-tree-node-toggle-button',
  nodeToggleIcon: 'p-tree-node-toggle-icon',
  nodeCheckbox: 'p-tree-node-checkbox',
  nodeIcon: 'p-tree-node-icon',
  nodeLabel: 'p-tree-node-label',
  nodeChildren: 'p-tree-node-children'
};
var TreeStyle = BaseStyle.extend({
  name: 'tree',
  theme: theme,
  classes: classes
});

export { TreeStyle as default };
//# sourceMappingURL=index.mjs.map
