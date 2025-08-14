import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  _ref.dt;
  return "\n.p-scrolltop.p-button {\n    position: fixed !important;\n    inset-block-end: 20px;\n    inset-inline-end: 20px;\n}\n\n.p-scrolltop-sticky.p-button {\n    position: sticky !important;\n    display: flex;\n    margin-inline-start: auto;\n}\n\n.p-scrolltop-enter-from {\n    opacity: 0;\n}\n\n.p-scrolltop-enter-active {\n    transition: opacity 0.15s;\n}\n\n.p-scrolltop.p-scrolltop-leave-to {\n    opacity: 0;\n}\n\n.p-scrolltop-leave-active {\n    transition: opacity 0.15s;\n}\n";
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-scrolltop', {
      'p-scrolltop-sticky': props.target !== 'window'
    }];
  },
  icon: 'p-scrolltop-icon'
};
var ScrollTopStyle = BaseStyle.extend({
  name: 'scrolltop',
  theme: theme,
  classes: classes
});

export { ScrollTopStyle as default };
//# sourceMappingURL=index.mjs.map
