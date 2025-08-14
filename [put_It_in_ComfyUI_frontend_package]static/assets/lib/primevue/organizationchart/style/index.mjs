import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-organizationchart-table {\n    border-spacing: 0;\n    border-collapse: separate;\n    margin: 0 auto;\n}\n\n.p-organizationchart-table > tbody > tr > td {\n    text-align: center;\n    vertical-align: top;\n    padding: 0 ".concat(dt('organizationchart.gutter'), ";\n}\n\n.p-organizationchart-node {\n    display: inline-block;\n    position: relative;\n    border: 1px solid ").concat(dt('organizationchart.node.border.color'), ";\n    background: ").concat(dt('organizationchart.node.background'), ";\n    color: ").concat(dt('organizationchart.node.color'), ";\n    padding: ").concat(dt('organizationchart.node.padding'), ";\n    border-radius: ").concat(dt('organizationchart.node.border.radius'), ";\n    transition: background ").concat(dt('organizationchart.transition.duration'), ", border-color ").concat(dt('organizationchart.transition.duration'), ", color ").concat(dt('organizationchart.transition.duration'), ", box-shadow ").concat(dt('organizationchart.transition.duration'), ";\n}\n\n.p-organizationchart-node:has(.p-organizationchart-node-toggle-button) {\n    padding: ").concat(dt('organizationchart.node.toggleable.padding'), ";\n}\n\n.p-organizationchart-node.p-organizationchart-node-selectable:not(.p-organizationchart-node-selected):hover {\n    background: ").concat(dt('organizationchart.node.hover.background'), ";\n    color: ").concat(dt('organizationchart.node.hover.color'), ";\n}\n\n.p-organizationchart-node-selected {\n    background: ").concat(dt('organizationchart.node.selected.background'), ";\n    color: ").concat(dt('organizationchart.node.selected.color'), ";\n}\n\n.p-organizationchart-node-toggle-button {\n    position: absolute;\n    inset-block-end: calc(-1 * calc(").concat(dt('organizationchart.node.toggle.button.size'), " / 2));\n    margin-inline-start: calc(-1 * calc(").concat(dt('organizationchart.node.toggle.button.size'), " / 2));\n    z-index: 2;\n    inset-inline-start: 50%;\n    user-select: none;\n    cursor: pointer;\n    width: ").concat(dt('organizationchart.node.toggle.button.size'), ";\n    height: ").concat(dt('organizationchart.node.toggle.button.size'), ";\n    text-decoration: none;\n    background: ").concat(dt('organizationchart.node.toggle.button.background'), ";\n    color: ").concat(dt('organizationchart.node.toggle.button.color'), ";\n    border-radius: ").concat(dt('organizationchart.node.toggle.button.border.radius'), ";\n    border: 1px solid ").concat(dt('organizationchart.node.toggle.button.border.color'), ";\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    outline-color: transparent;\n    transition: background ").concat(dt('organizationchart.transition.duration'), ", color ").concat(dt('organizationchart.transition.duration'), ", border-color ").concat(dt('organizationchart.transition.duration'), ", outline-color ").concat(dt('organizationchart.transition.duration'), ", box-shadow ").concat(dt('organizationchart.transition.duration'), ";\n}\n\n.p-organizationchart-node-toggle-button:hover {\n    background: ").concat(dt('organizationchart.node.toggle.button.hover.background'), ";\n    color: ").concat(dt('organizationchart.node.toggle.button.hover.color'), ";\n}\n\n.p-organizationchart-node-toggle-button:focus-visible {\n    box-shadow: ").concat(dt('breadcrumb.item.focus.ring.shadow'), ";\n    outline: ").concat(dt('breadcrumb.item.focus.ring.width'), " ").concat(dt('breadcrumb.item.focus.ring.style'), " ").concat(dt('breadcrumb.item.focus.ring.color'), ";\n    outline-offset: ").concat(dt('breadcrumb.item.focus.ring.offset'), ";\n}\n\n.p-organizationchart-node-toggle-button-icon {\n    position: relative;\n    inset-block-start: 1px;\n}\n\n.p-organizationchart-connector-down {\n    margin: 0 auto;\n    height: ").concat(dt('organizationchart.connector.height'), ";\n    width: 1px;\n    background: ").concat(dt('organizationchart.connector.color'), ";\n}\n\n.p-organizationchart-connector-right {\n    border-radius: 0;\n}\n\n.p-organizationchart-connector-left {\n    border-radius: 0;\n    border-inline-end: 1px solid ").concat(dt('organizationchart.connector.color'), ";\n}\n\n.p-organizationchart-connector-top {\n    border-block-start: 1px solid ").concat(dt('organizationchart.connector.color'), ";\n}\n\n.p-organizationchart-node-selectable {\n    cursor: pointer;\n}\n\n.p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-left) {\n    border-inline-end: 0 none;\n}\n\n.p-organizationchart-connectors :nth-last-child(1 of .p-organizationchart-connector-left) {\n    border-start-end-radius: ").concat(dt('organizationchart.connector.border.radius'), ";\n}\n\n.p-organizationchart-connectors :nth-child(1 of .p-organizationchart-connector-right) {\n    border-inline-start: 1px solid ").concat(dt('organizationchart.connector.color'), ";\n    border-start-start-radius: ").concat(dt('organizationchart.connector.border.radius'), ";\n}\n");
};
var classes = {
  root: 'p-organizationchart p-component',
  table: 'p-organizationchart-table',
  node: function node(_ref2) {
    var instance = _ref2.instance;
    return ['p-organizationchart-node', {
      'p-organizationchart-node-selectable': instance.selectable,
      'p-organizationchart-node-selected': instance.selected
    }];
  },
  nodeToggleButton: 'p-organizationchart-node-toggle-button',
  nodeToggleButtonIcon: 'p-organizationchart-node-toggle-button-icon',
  connectors: 'p-organizationchart-connectors',
  connectorDown: 'p-organizationchart-connector-down',
  connectorLeft: function connectorLeft(_ref3) {
    var index = _ref3.index;
    return ['p-organizationchart-connector-left', {
      'p-organizationchart-connector-top': !(index === 0)
    }];
  },
  connectorRight: function connectorRight(_ref4) {
    var props = _ref4.props,
      index = _ref4.index;
    return ['p-organizationchart-connector-right', {
      'p-organizationchart-connector-top': !(index === props.node.children.length - 1)
    }];
  },
  nodeChildren: 'p-organizationchart-node-children'
};
var OrganizationChartStyle = BaseStyle.extend({
  name: 'organizationchart',
  theme: theme,
  classes: classes
});

export { OrganizationChartStyle as default };
//# sourceMappingURL=index.mjs.map
