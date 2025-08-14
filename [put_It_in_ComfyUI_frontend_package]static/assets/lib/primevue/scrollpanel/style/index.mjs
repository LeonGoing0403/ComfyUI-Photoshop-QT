import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-scrollpanel-content-container {\n    overflow: hidden;\n    width: 100%;\n    height: 100%;\n    position: relative;\n    z-index: 1;\n    float: left;\n}\n\n.p-scrollpanel-content {\n    height: calc(100% + calc(2 * ".concat(dt('scrollpanel.bar.size'), "));\n    width: calc(100% + calc(2 * ").concat(dt('scrollpanel.bar.size'), "));\n    padding-inline: 0 calc(2 * ").concat(dt('scrollpanel.bar.size'), ");\n    padding-block: 0 calc(2 * ").concat(dt('scrollpanel.bar.size'), ");\n    position: relative;\n    overflow: auto;\n    box-sizing: border-box;\n    scrollbar-width: none;\n}\n\n.p-scrollpanel-content::-webkit-scrollbar {\n    display: none;\n}\n\n.p-scrollpanel-bar {\n    position: relative;\n    border-radius: ").concat(dt('scrollpanel.bar.border.radius'), ";\n    z-index: 2;\n    cursor: pointer;\n    opacity: 0;\n    outline-color: transparent;\n    background: ").concat(dt('scrollpanel.bar.background'), ";\n    border: 0 none;\n    transition: outline-color ").concat(dt('scrollpanel.transition.duration'), ", opacity ").concat(dt('scrollpanel.transition.duration'), ";\n}\n\n.p-scrollpanel-bar:focus-visible {\n    box-shadow: ").concat(dt('scrollpanel.bar.focus.ring.shadow'), ";\n    outline: ").concat(dt('scrollpanel.barfocus.ring.width'), " ").concat(dt('scrollpanel.bar.focus.ring.style'), " ").concat(dt('scrollpanel.bar.focus.ring.color'), ";\n    outline-offset: ").concat(dt('scrollpanel.barfocus.ring.offset'), ";\n}\n\n.p-scrollpanel-bar-y {\n    width: ").concat(dt('scrollpanel.bar.size'), ";\n    inset-block-start: 0;\n}\n\n.p-scrollpanel-bar-x {\n    height: ").concat(dt('scrollpanel.bar.size'), ";\n    inset-block-end: 0;\n}\n\n.p-scrollpanel-hidden {\n    visibility: hidden;\n}\n\n.p-scrollpanel:hover .p-scrollpanel-bar,\n.p-scrollpanel:active .p-scrollpanel-bar {\n    opacity: 1;\n}\n\n.p-scrollpanel-grabbed {\n    user-select: none;\n}\n");
};
var classes = {
  root: 'p-scrollpanel p-component',
  contentContainer: 'p-scrollpanel-content-container',
  content: 'p-scrollpanel-content',
  barX: 'p-scrollpanel-bar p-scrollpanel-bar-x',
  barY: 'p-scrollpanel-bar p-scrollpanel-bar-y'
};
var ScrollPanelStyle = BaseStyle.extend({
  name: 'scrollpanel',
  theme: theme,
  classes: classes
});

export { ScrollPanelStyle as default };
//# sourceMappingURL=index.mjs.map
