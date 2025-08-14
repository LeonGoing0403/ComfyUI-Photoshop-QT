import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-progressbar {\n    position: relative;\n    overflow: hidden;\n    height: ".concat(dt('progressbar.height'), ";\n    background: ").concat(dt('progressbar.background'), ";\n    border-radius: ").concat(dt('progressbar.border.radius'), ";\n}\n\n.p-progressbar-value {\n    margin: 0;\n    background: ").concat(dt('progressbar.value.background'), ";\n}\n\n.p-progressbar-label {\n    color: ").concat(dt('progressbar.label.color'), ";\n    font-size: ").concat(dt('progressbar.label.font.size'), ";\n    font-weight: ").concat(dt('progressbar.label.font.weight'), ";\n}\n\n.p-progressbar-determinate .p-progressbar-value {\n    height: 100%;\n    width: 0%;\n    position: absolute;\n    display: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    transition: width 1s ease-in-out;\n}\n\n.p-progressbar-determinate .p-progressbar-label {\n    display: inline-flex;\n}\n\n.p-progressbar-indeterminate .p-progressbar-value::before {\n    content: \"\";\n    position: absolute;\n    background: inherit;\n    inset-block-start: 0;\n    inset-inline-start: 0;\n    inset-block-end: 0;\n    will-change: inset-inline-start, inset-inline-end;\n    animation: p-progressbar-indeterminate-anim 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;\n}\n\n.p-progressbar-indeterminate .p-progressbar-value::after {\n    content: \"\";\n    position: absolute;\n    background: inherit;\n    inset-block-start: 0;\n    inset-inline-start: 0;\n    inset-block-end: 0;\n    will-change: inset-inline-start, inset-inline-end;\n    animation: p-progressbar-indeterminate-anim-short 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) infinite;\n    animation-delay: 1.15s;\n}\n\n@keyframes p-progressbar-indeterminate-anim {\n    0% {\n        inset-inline-start: -35%;\n        inset-inline-end: 100%;\n    }\n    60% {\n        inset-inline-start: 100%;\n        inset-inline-end: -90%;\n    }\n    100% {\n        inset-inline-start: 100%;\n        inset-inline-end: -90%;\n    }\n}\n@-webkit-keyframes p-progressbar-indeterminate-anim {\n    0% {\n        inset-inline-start: -35%;\n        inset-inline-end: 100%;\n    }\n    60% {\n        inset-inline-start: 100%;\n        inset-inline-end: -90%;\n    }\n    100% {\n        inset-inline-start: 100%;\n        inset-inline-end: -90%;\n    }\n}\n\n@keyframes p-progressbar-indeterminate-anim-short {\n    0% {\n        inset-inline-start: -200%;\n        inset-inline-end: 100%;\n    }\n    60% {\n        inset-inline-start: 107%;\n        inset-inline-end: -8%;\n    }\n    100% {\n        inset-inline-start: 107%;\n        inset-inline-end: -8%;\n    }\n}\n@-webkit-keyframes p-progressbar-indeterminate-anim-short {\n    0% {\n        inset-inline-start: -200%;\n        inset-inline-end: 100%;\n    }\n    60% {\n        inset-inline-start: 107%;\n        inset-inline-end: -8%;\n    }\n    100% {\n        inset-inline-start: 107%;\n        inset-inline-end: -8%;\n    }\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-progressbar p-component', {
      'p-progressbar-determinate': instance.determinate,
      'p-progressbar-indeterminate': instance.indeterminate
    }];
  },
  value: 'p-progressbar-value',
  label: 'p-progressbar-label'
};
var ProgressBarStyle = BaseStyle.extend({
  name: 'progressbar',
  theme: theme,
  classes: classes
});

export { ProgressBarStyle as default };
//# sourceMappingURL=index.mjs.map
