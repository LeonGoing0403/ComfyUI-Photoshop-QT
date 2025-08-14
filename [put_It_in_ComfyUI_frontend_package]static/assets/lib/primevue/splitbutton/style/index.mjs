import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-splitbutton {\n    display: inline-flex;\n    position: relative;\n    border-radius: ".concat(dt('splitbutton.border.radius'), ";\n}\n\n.p-splitbutton-button {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n    border-inline-end: 0 none;\n}\n\n.p-splitbutton-button:focus-visible,\n.p-splitbutton-dropdown:focus-visible {\n    z-index: 1;\n}\n\n.p-splitbutton-button:not(:disabled):hover,\n.p-splitbutton-button:not(:disabled):active {\n    border-inline-end: 0 none;\n}\n\n.p-splitbutton-dropdown {\n    border-start-start-radius: 0;\n    border-end-start-radius: 0;\n}\n\n.p-splitbutton .p-menu {\n    min-width: 100%;\n}\n\n.p-splitbutton-fluid {\n    display: flex;\n}\n\n.p-splitbutton-rounded .p-splitbutton-dropdown {\n    border-start-end-radius: ").concat(dt('splitbutton.rounded.border.radius'), ";\n    border-end-end-radius: ").concat(dt('splitbutton.rounded.border.radius'), ";\n}\n\n.p-splitbutton-rounded .p-splitbutton-button {\n    border-start-start-radius: ").concat(dt('splitbutton.rounded.border.radius'), ";\n    border-end-start-radius: ").concat(dt('splitbutton.rounded.border.radius'), ";\n}\n\n.p-splitbutton-raised {\n    box-shadow: ").concat(dt('splitbutton.raised.shadow'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-splitbutton p-component', {
      'p-splitbutton-raised': props.raised,
      'p-splitbutton-rounded': props.rounded,
      'p-splitbutton-fluid': instance.hasFluid
    }];
  },
  pcButton: 'p-splitbutton-button',
  pcDropdown: 'p-splitbutton-dropdown'
};
var SplitButtonStyle = BaseStyle.extend({
  name: 'splitbutton',
  theme: theme,
  classes: classes
});

export { SplitButtonStyle as default };
//# sourceMappingURL=index.mjs.map
