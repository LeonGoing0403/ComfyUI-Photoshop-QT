import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  _ref.dt;
  return "\n.p-buttongroup {\n    display: inline-flex;\n}\n\n.p-buttongroup .p-button {\n    margin: 0;\n}\n\n.p-buttongroup .p-button:not(:last-child),\n.p-buttongroup .p-button:not(:last-child):hover {\n    border-inline-end: 0 none;\n}\n\n.p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {\n    border-radius: 0;\n}\n\n.p-buttongroup .p-button:first-of-type:not(:only-of-type) {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n}\n\n.p-buttongroup .p-button:last-of-type:not(:only-of-type) {\n    border-start-start-radius: 0;\n    border-end-start-radius: 0;\n}\n\n.p-buttongroup .p-button:focus {\n    position: relative;\n    z-index: 1;\n}\n";
};
var classes = {
  root: 'p-buttongroup p-component'
};
var ButtonGroupStyle = BaseStyle.extend({
  name: 'buttongroup',
  theme: theme,
  classes: classes
});

export { ButtonGroupStyle as default };
//# sourceMappingURL=index.mjs.map
