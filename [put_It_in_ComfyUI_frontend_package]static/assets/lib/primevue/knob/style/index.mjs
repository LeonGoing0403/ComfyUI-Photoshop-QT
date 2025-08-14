import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-knob-range {\n    fill: none;\n    transition: stroke 0.1s ease-in;\n}\n\n.p-knob-value {\n    animation-name: p-knob-dash-frame;\n    animation-fill-mode: forwards;\n    fill: none;\n}\n\n.p-knob-text {\n    font-size: 1.3rem;\n    text-align: center;\n}\n\n.p-knob svg {\n    border-radius: 50%;\n    outline-color: transparent;\n    transition: background ".concat(dt('knob.transition.duration'), ", color ").concat(dt('knob.transition.duration'), ", outline-color ").concat(dt('knob.transition.duration'), ", box-shadow ").concat(dt('knob.transition.duration'), ";\n}\n\n.p-knob svg:focus-visible {\n    box-shadow: ").concat(dt('knob.focus.ring.shadow'), ";\n    outline: ").concat(dt('knob.focus.ring.width'), " ").concat(dt('knob.focus.ring.style'), " ").concat(dt('knob.focus.ring.color'), ";\n    outline-offset: ").concat(dt('knob.focus.ring.offset'), ";\n}\n\n@keyframes p-knob-dash-frame {\n    100% {\n        stroke-dashoffset: 0;\n    }\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-knob p-component', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  range: 'p-knob-range',
  value: 'p-knob-value',
  text: 'p-knob-text'
};
var KnobStyle = BaseStyle.extend({
  name: 'knob',
  theme: theme,
  classes: classes
});

export { KnobStyle as default };
//# sourceMappingURL=index.mjs.map
