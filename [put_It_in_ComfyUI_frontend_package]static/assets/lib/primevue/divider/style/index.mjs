import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-divider-horizontal {\n    display: flex;\n    width: 100%;\n    position: relative;\n    align-items: center;\n    margin: ".concat(dt('divider.horizontal.margin'), ";\n    padding: ").concat(dt('divider.horizontal.padding'), ";\n}\n\n.p-divider-horizontal:before {\n    position: absolute;\n    display: block;\n    inset-block-start: 50%;\n    inset-inline-start: 0;\n    width: 100%;\n    content: \"\";\n    border-block-start: 1px solid ").concat(dt('divider.border.color'), ";\n}\n\n.p-divider-horizontal .p-divider-content {\n    padding: ").concat(dt('divider.horizontal.content.padding'), ";\n}\n\n.p-divider-vertical {\n    min-height: 100%;\n    display: flex;\n    position: relative;\n    justify-content: center;\n    margin: ").concat(dt('divider.vertical.margin'), ";\n    padding: ").concat(dt('divider.vertical.padding'), ";\n}\n\n.p-divider-vertical:before {\n    position: absolute;\n    display: block;\n    inset-block-start: 0;\n    inset-inline-start: 50%;\n    height: 100%;\n    content: \"\";\n    border-inline-start: 1px solid ").concat(dt('divider.border.color'), ";\n}\n\n.p-divider.p-divider-vertical .p-divider-content {\n    padding: ").concat(dt('divider.vertical.content.padding'), ";\n}\n\n.p-divider-content {\n    z-index: 1;\n    background: ").concat(dt('divider.content.background'), ";\n    color: ").concat(dt('divider.content.color'), ";\n}\n\n.p-divider-solid.p-divider-horizontal:before {\n    border-block-start-style: solid;\n}\n\n.p-divider-solid.p-divider-vertical:before {\n    border-inline-start-style: solid;\n}\n\n.p-divider-dashed.p-divider-horizontal:before {\n    border-block-start-style: dashed;\n}\n\n.p-divider-dashed.p-divider-vertical:before {\n    border-inline-start-style: dashed;\n}\n\n.p-divider-dotted.p-divider-horizontal:before {\n    border-block-start-style: dotted;\n}\n\n.p-divider-dotted.p-divider-vertical:before {\n    border-inline-start-style: dotted;\n}\n\n.p-divider-left:dir(rtl),\n.p-divider-right:dir(rtl) {\n    flex-direction: row-reverse;\n}\n");
};

/* Position */
var inlineStyles = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return {
      justifyContent: props.layout === 'horizontal' ? props.align === 'center' || props.align === null ? 'center' : props.align === 'left' ? 'flex-start' : props.align === 'right' ? 'flex-end' : null : null,
      alignItems: props.layout === 'vertical' ? props.align === 'center' || props.align === null ? 'center' : props.align === 'top' ? 'flex-start' : props.align === 'bottom' ? 'flex-end' : null : null
    };
  }
};
var classes = {
  root: function root(_ref3) {
    var props = _ref3.props;
    return ['p-divider p-component', 'p-divider-' + props.layout, 'p-divider-' + props.type, {
      'p-divider-left': props.layout === 'horizontal' && (!props.align || props.align === 'left')
    }, {
      'p-divider-center': props.layout === 'horizontal' && props.align === 'center'
    }, {
      'p-divider-right': props.layout === 'horizontal' && props.align === 'right'
    }, {
      'p-divider-top': props.layout === 'vertical' && props.align === 'top'
    }, {
      'p-divider-center': props.layout === 'vertical' && (!props.align || props.align === 'center')
    }, {
      'p-divider-bottom': props.layout === 'vertical' && props.align === 'bottom'
    }];
  },
  content: 'p-divider-content'
};
var DividerStyle = BaseStyle.extend({
  name: 'divider',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { DividerStyle as default };
//# sourceMappingURL=index.mjs.map
