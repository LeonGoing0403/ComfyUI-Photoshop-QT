import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-blockui {\n    position: relative;\n}\n\n.p-blockui-mask {\n    border-radius: ".concat(dt('blockui.border.radius'), ";\n}\n\n.p-blockui-mask.p-overlay-mask {\n    position: absolute;\n}\n\n.p-blockui-mask-document.p-overlay-mask {\n    position: fixed;\n}\n");
};
var classes = {
  root: 'p-blockui'
};
var BlockUIStyle = BaseStyle.extend({
  name: 'blockui',
  theme: theme,
  classes: classes
});

export { BlockUIStyle as default };
//# sourceMappingURL=index.mjs.map
