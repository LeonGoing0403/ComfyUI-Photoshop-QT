import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-fieldset {\n    background: ".concat(dt('fieldset.background'), ";\n    border: 1px solid ").concat(dt('fieldset.border.color'), ";\n    border-radius: ").concat(dt('fieldset.border.radius'), ";\n    color: ").concat(dt('fieldset.color'), ";\n    padding: ").concat(dt('fieldset.padding'), ";\n    margin: 0;\n}\n\n.p-fieldset-legend {\n    background: ").concat(dt('fieldset.legend.background'), ";\n    border-radius: ").concat(dt('fieldset.legend.border.radius'), ";\n    border-width: ").concat(dt('fieldset.legend.border.width'), ";\n    border-style: solid;\n    border-color: ").concat(dt('fieldset.legend.border.color'), ";\n    padding: ").concat(dt('fieldset.legend.padding'), ";\n    transition: background ").concat(dt('fieldset.transition.duration'), ", color ").concat(dt('fieldset.transition.duration'), ", outline-color ").concat(dt('fieldset.transition.duration'), ", box-shadow ").concat(dt('fieldset.transition.duration'), ";\n}\n\n.p-fieldset-toggleable > .p-fieldset-legend {\n    padding: 0;\n}\n\n.p-fieldset-toggle-button {\n    cursor: pointer;\n    user-select: none;\n    overflow: hidden;\n    position: relative;\n    text-decoration: none;\n    display: flex;\n    gap: ").concat(dt('fieldset.legend.gap'), ";\n    align-items: center;\n    justify-content: center;\n    padding: ").concat(dt('fieldset.legend.padding'), ";\n    background: transparent;\n    border: 0 none;\n    border-radius: ").concat(dt('fieldset.legend.border.radius'), ";\n    transition: background ").concat(dt('fieldset.transition.duration'), ", color ").concat(dt('fieldset.transition.duration'), ", outline-color ").concat(dt('fieldset.transition.duration'), ", box-shadow ").concat(dt('fieldset.transition.duration'), ";\n    outline-color: transparent;\n}\n\n.p-fieldset-legend-label {\n    font-weight: ").concat(dt('fieldset.legend.font.weight'), ";\n}\n\n.p-fieldset-toggle-button:focus-visible {\n    box-shadow: ").concat(dt('fieldset.legend.focus.ring.shadow'), ";\n    outline: ").concat(dt('fieldset.legend.focus.ring.width'), " ").concat(dt('fieldset.legend.focus.ring.style'), " ").concat(dt('fieldset.legend.focus.ring.color'), ";\n    outline-offset: ").concat(dt('fieldset.legend.focus.ring.offset'), ";\n}\n\n.p-fieldset-toggleable > .p-fieldset-legend:hover {\n    color: ").concat(dt('fieldset.legend.hover.color'), ";\n    background: ").concat(dt('fieldset.legend.hover.background'), ";\n}\n\n.p-fieldset-toggle-icon {\n    color: ").concat(dt('fieldset.toggle.icon.color'), ";\n    transition: color ").concat(dt('fieldset.transition.duration'), ";\n}\n\n.p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {\n    color: ").concat(dt('fieldset.toggle.icon.hover.color'), ";\n}\n\n.p-fieldset .p-fieldset-content {\n    padding: ").concat(dt('fieldset.content.padding'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-fieldset p-component', {
      'p-fieldset-toggleable': props.toggleable
    }];
  },
  legend: 'p-fieldset-legend',
  legendLabel: 'p-fieldset-legend-label',
  toggleButton: 'p-fieldset-toggle-button',
  toggleIcon: 'p-fieldset-toggle-icon',
  contentContainer: 'p-fieldset-content-container',
  content: 'p-fieldset-content'
};
var FieldsetStyle = BaseStyle.extend({
  name: 'fieldset',
  theme: theme,
  classes: classes
});

export { FieldsetStyle as default };
//# sourceMappingURL=index.mjs.map
