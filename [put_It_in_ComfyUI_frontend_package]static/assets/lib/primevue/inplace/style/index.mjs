import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-inplace-display {\n    display: inline-block;\n    cursor: pointer;\n    border: 1px solid transparent;\n    padding: ".concat(dt('inplace.padding'), ";\n    border-radius: ").concat(dt('inplace.border.radius'), ";\n    transition: background ").concat(dt('inplace.transition.duration'), ", color ").concat(dt('inplace.transition.duration'), ", outline-color ").concat(dt('inplace.transition.duration'), ", box-shadow ").concat(dt('inplace.transition.duration'), ";\n    outline-color: transparent;\n}\n\n.p-inplace-display:not(.p-disabled):hover {\n    background: ").concat(dt('inplace.display.hover.background'), ";\n    color: ").concat(dt('inplace.display.hover.color'), ";\n}\n\n.p-inplace-display:focus-visible {\n    box-shadow: ").concat(dt('inplace.focus.ring.shadow'), ";\n    outline: ").concat(dt('inplace.focus.ring.width'), " ").concat(dt('inplace.focus.ring.style'), " ").concat(dt('inplace.focus.ring.color'), ";\n    outline-offset: ").concat(dt('inplace.focus.ring.offset'), ";\n}\n\n.p-inplace-content {\n    display: block;\n}\n");
};
var classes = {
  root: 'p-inplace p-component',
  display: function display(_ref2) {
    var props = _ref2.props;
    return ['p-inplace-display', {
      'p-disabled': props.disabled
    }];
  },
  content: 'p-inplace-content'
};
var InplaceStyle = BaseStyle.extend({
  name: 'inplace',
  theme: theme,
  classes: classes
});

export { InplaceStyle as default };
//# sourceMappingURL=index.mjs.map
