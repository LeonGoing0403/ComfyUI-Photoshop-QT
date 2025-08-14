import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-skeleton {\n    overflow: hidden;\n    background: ".concat(dt('skeleton.background'), ";\n    border-radius: ").concat(dt('skeleton.border.radius'), ";\n}\n\n.p-skeleton::after {\n    content: \"\";\n    animation: p-skeleton-animation 1.2s infinite;\n    height: 100%;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n    transform: translateX(-100%);\n    z-index: 1;\n    background: linear-gradient(90deg, rgba(255, 255, 255, 0), ").concat(dt('skeleton.animation.background'), ", rgba(255, 255, 255, 0));\n}\n\n[dir='rtl'] .p-skeleton::after {\n    animation-name: p-skeleton-animation-rtl;\n}\n\n.p-skeleton-circle {\n    border-radius: 50%;\n}\n\n.p-skeleton-animation-none::after {\n    animation: none;\n}\n\n@keyframes p-skeleton-animation {\n    from {\n        transform: translateX(-100%);\n    }\n    to {\n        transform: translateX(100%);\n    }\n}\n\n@keyframes p-skeleton-animation-rtl {\n    from {\n        transform: translateX(100%);\n    }\n    to {\n        transform: translateX(-100%);\n    }\n}\n");
};
var inlineStyles = {
  root: {
    position: 'relative'
  }
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-skeleton p-component', {
      'p-skeleton-circle': props.shape === 'circle',
      'p-skeleton-animation-none': props.animation === 'none'
    }];
  }
};
var SkeletonStyle = BaseStyle.extend({
  name: 'skeleton',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { SkeletonStyle as default };
//# sourceMappingURL=index.mjs.map
