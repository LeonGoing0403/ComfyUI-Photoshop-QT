import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-tooltip {\n    position: absolute;\n    display: none;\n    max-width: ".concat(dt('tooltip.max.width'), ";\n}\n\n.p-tooltip-right,\n.p-tooltip-left {\n    padding: 0 ").concat(dt('tooltip.gutter'), ";\n}\n\n.p-tooltip-top,\n.p-tooltip-bottom {\n    padding: ").concat(dt('tooltip.gutter'), " 0;\n}\n\n.p-tooltip-text {\n    white-space: pre-line;\n    word-break: break-word;\n    background: ").concat(dt('tooltip.background'), ";\n    color: ").concat(dt('tooltip.color'), ";\n    padding: ").concat(dt('tooltip.padding'), ";\n    box-shadow: ").concat(dt('tooltip.shadow'), ";\n    border-radius: ").concat(dt('tooltip.border.radius'), ";\n}\n\n.p-tooltip-arrow {\n    position: absolute;\n    width: 0;\n    height: 0;\n    border-color: transparent;\n    border-style: solid;\n}\n\n.p-tooltip-right .p-tooltip-arrow {\n    margin-top: calc(-1 * ").concat(dt('tooltip.gutter'), ");\n    border-width: ").concat(dt('tooltip.gutter'), " ").concat(dt('tooltip.gutter'), " ").concat(dt('tooltip.gutter'), " 0;\n    border-right-color: ").concat(dt('tooltip.background'), ";\n}\n\n.p-tooltip-left .p-tooltip-arrow {\n    margin-top: calc(-1 * ").concat(dt('tooltip.gutter'), ");\n    border-width: ").concat(dt('tooltip.gutter'), " 0 ").concat(dt('tooltip.gutter'), " ").concat(dt('tooltip.gutter'), ";\n    border-left-color: ").concat(dt('tooltip.background'), ";\n}\n\n.p-tooltip-top .p-tooltip-arrow {\n    margin-left: calc(-1 * ").concat(dt('tooltip.gutter'), ");\n    border-width: ").concat(dt('tooltip.gutter'), " ").concat(dt('tooltip.gutter'), " 0 ").concat(dt('tooltip.gutter'), ";\n    border-top-color: ").concat(dt('tooltip.background'), ";\n    border-bottom-color: ").concat(dt('tooltip.background'), ";\n}\n\n.p-tooltip-bottom .p-tooltip-arrow {\n    margin-left: calc(-1 * ").concat(dt('tooltip.gutter'), ");\n    border-width: 0 ").concat(dt('tooltip.gutter'), " ").concat(dt('tooltip.gutter'), " ").concat(dt('tooltip.gutter'), ";\n    border-top-color: ").concat(dt('tooltip.background'), ";\n    border-bottom-color: ").concat(dt('tooltip.background'), ";\n}\n");
};
var classes = {
  root: 'p-tooltip p-component',
  arrow: 'p-tooltip-arrow',
  text: 'p-tooltip-text'
};
var TooltipStyle = BaseStyle.extend({
  name: 'tooltip-directive',
  theme: theme,
  classes: classes
});

export { TooltipStyle as default };
//# sourceMappingURL=index.mjs.map
