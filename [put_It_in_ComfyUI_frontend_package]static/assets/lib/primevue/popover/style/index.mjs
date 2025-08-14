import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-popover {\n    margin-block-start: ".concat(dt('popover.gutter'), ";\n    background: ").concat(dt('popover.background'), ";\n    color: ").concat(dt('popover.color'), ";\n    border: 1px solid ").concat(dt('popover.border.color'), ";\n    border-radius: ").concat(dt('popover.border.radius'), ";\n    box-shadow: ").concat(dt('popover.shadow'), ";\n}\n\n.p-popover-content {\n    padding: ").concat(dt('popover.content.padding'), ";\n}\n\n.p-popover-flipped {\n    margin-block-start: calc(").concat(dt('popover.gutter'), " * -1);\n    margin-block-end: ").concat(dt('popover.gutter'), ";\n}\n\n.p-popover-enter-from {\n    opacity: 0;\n    transform: scaleY(0.8);\n}\n\n.p-popover-leave-to {\n    opacity: 0;\n}\n\n.p-popover-enter-active {\n    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-popover-leave-active {\n    transition: opacity 0.1s linear;\n}\n\n.p-popover:after,\n.p-popover:before {\n    bottom: 100%;\n    left: calc(").concat(dt('popover.arrow.offset'), " + ").concat(dt('popover.arrow.left'), ");\n    content: \" \";\n    height: 0;\n    width: 0;\n    position: absolute;\n    pointer-events: none;\n}\n\n.p-popover:after {\n    border-width: calc(").concat(dt('popover.gutter'), " - 2px);\n    margin-left: calc(-1 * (").concat(dt('popover.gutter'), " - 2px));\n    border-style: solid;\n    border-color: transparent;\n    border-bottom-color: ").concat(dt('popover.background'), ";\n}\n\n.p-popover:before {\n    border-width: ").concat(dt('popover.gutter'), ";\n    margin-left: calc(-1 * ").concat(dt('popover.gutter'), ");\n    border-style: solid;\n    border-color: transparent;\n    border-bottom-color: ").concat(dt('popover.border.color'), ";\n}\n\n.p-popover-flipped:after,\n.p-popover-flipped:before {\n    bottom: auto;\n    top: 100%;\n}\n\n.p-popover.p-popover-flipped:after {\n    border-bottom-color: transparent;\n    border-top-color: ").concat(dt('popover.background'), ";\n}\n\n.p-popover.p-popover-flipped:before {\n    border-bottom-color: transparent;\n    border-top-color: ").concat(dt('popover.border.color'), ";\n}\n");
};
var classes = {
  root: 'p-popover p-component',
  content: 'p-popover-content'
};
var PopoverStyle = BaseStyle.extend({
  name: 'popover',
  theme: theme,
  classes: classes
});

export { PopoverStyle as default };
//# sourceMappingURL=index.mjs.map
