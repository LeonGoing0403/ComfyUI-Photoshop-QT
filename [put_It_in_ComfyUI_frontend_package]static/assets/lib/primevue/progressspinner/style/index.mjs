import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-progressspinner {\n    position: relative;\n    margin: 0 auto;\n    width: 100px;\n    height: 100px;\n    display: inline-block;\n}\n\n.p-progressspinner::before {\n    content: \"\";\n    display: block;\n    padding-top: 100%;\n}\n\n.p-progressspinner-spin {\n    height: 100%;\n    transform-origin: center center;\n    width: 100%;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    animation: p-progressspinner-rotate 2s linear infinite;\n}\n\n.p-progressspinner-circle {\n    stroke-dasharray: 89, 200;\n    stroke-dashoffset: 0;\n    stroke: ".concat(dt('progressspinner.color.1'), ";\n    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;\n    stroke-linecap: round;\n}\n\n@keyframes p-progressspinner-rotate {\n    100% {\n        transform: rotate(360deg);\n    }\n}\n@keyframes p-progressspinner-dash {\n    0% {\n        stroke-dasharray: 1, 200;\n        stroke-dashoffset: 0;\n    }\n    50% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -35px;\n    }\n    100% {\n        stroke-dasharray: 89, 200;\n        stroke-dashoffset: -124px;\n    }\n}\n@keyframes p-progressspinner-color {\n    100%,\n    0% {\n        stroke: ").concat(dt('progressspinner.color.1'), ";\n    }\n    40% {\n        stroke: ").concat(dt('progressspinner.color.2'), ";\n    }\n    66% {\n        stroke: ").concat(dt('progressspinner.color.3'), ";\n    }\n    80%,\n    90% {\n        stroke: ").concat(dt('progressspinner.color.4'), ";\n    }\n}\n");
};
var classes = {
  root: 'p-progressspinner',
  spin: 'p-progressspinner-spin',
  circle: 'p-progressspinner-circle'
};
var ProgressSpinnerStyle = BaseStyle.extend({
  name: 'progressspinner',
  theme: theme,
  classes: classes
});

export { ProgressSpinnerStyle as default };
//# sourceMappingURL=index.mjs.map
