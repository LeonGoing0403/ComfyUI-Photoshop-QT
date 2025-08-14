import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-splitter {\n    display: flex;\n    flex-wrap: nowrap;\n    border: 1px solid ".concat(dt('splitter.border.color'), ";\n    background: ").concat(dt('splitter.background'), ";\n    border-radius: ").concat(dt('border.radius.md'), ";\n    color: ").concat(dt('splitter.color'), ";\n}\n\n.p-splitter-vertical {\n    flex-direction: column;\n}\n\n.p-splitter-gutter {\n    flex-grow: 0;\n    flex-shrink: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n    background: ").concat(dt('splitter.gutter.background'), ";\n}\n\n.p-splitter-gutter-handle {\n    border-radius: ").concat(dt('splitter.handle.border.radius'), ";\n    background: ").concat(dt('splitter.handle.background'), ";\n    transition: outline-color ").concat(dt('splitter.transition.duration'), ", box-shadow ").concat(dt('splitter.transition.duration'), ";\n    outline-color: transparent;\n}\n\n.p-splitter-gutter-handle:focus-visible {\n    box-shadow: ").concat(dt('splitter.handle.focus.ring.shadow'), ";\n    outline: ").concat(dt('splitter.handle.focus.ring.width'), " ").concat(dt('splitter.handle.focus.ring.style'), " ").concat(dt('splitter.handle.focus.ring.color'), ";\n    outline-offset: ").concat(dt('splitter.handle.focus.ring.offset'), ";\n}\n\n.p-splitter-horizontal.p-splitter-resizing {\n    cursor: col-resize;\n    user-select: none;\n}\n\n.p-splitter-vertical.p-splitter-resizing {\n    cursor: row-resize;\n    user-select: none;\n}\n\n.p-splitter-horizontal > .p-splitter-gutter > .p-splitter-gutter-handle {\n    height: ").concat(dt('splitter.handle.size'), ";\n    width: 100%;\n}\n\n.p-splitter-vertical > .p-splitter-gutter > .p-splitter-gutter-handle {\n    width: ").concat(dt('splitter.handle.size'), ";\n    height: 100%;\n}\n\n.p-splitter-horizontal > .p-splitter-gutter {\n    cursor: col-resize;\n}\n\n.p-splitter-vertical > .p-splitter-gutter {\n    cursor: row-resize;\n}\n\n.p-splitterpanel {\n    flex-grow: 1;\n    overflow: hidden;\n}\n\n.p-splitterpanel-nested {\n    display: flex;\n}\n\n.p-splitterpanel .p-splitter {\n    flex-grow: 1;\n    border: 0 none;\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-splitter p-component', 'p-splitter-' + props.layout];
  },
  gutter: 'p-splitter-gutter',
  gutterHandle: 'p-splitter-gutter-handle'
};
var inlineStyles = {
  root: function root(_ref3) {
    var props = _ref3.props;
    return [{
      display: 'flex',
      'flex-wrap': 'nowrap'
    }, props.layout === 'vertical' ? {
      'flex-direction': 'column'
    } : ''];
  }
};
var SplitterStyle = BaseStyle.extend({
  name: 'splitter',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { SplitterStyle as default };
//# sourceMappingURL=index.mjs.map
