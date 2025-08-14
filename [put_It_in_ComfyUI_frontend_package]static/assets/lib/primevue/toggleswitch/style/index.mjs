import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-toggleswitch {\n    display: inline-block;\n    width: ".concat(dt('toggleswitch.width'), ";\n    height: ").concat(dt('toggleswitch.height'), ";\n}\n\n.p-toggleswitch-input {\n    cursor: pointer;\n    appearance: none;\n    position: absolute;\n    top: 0;\n    inset-inline-start: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n    margin: 0;\n    opacity: 0;\n    z-index: 1;\n    outline: 0 none;\n    border-radius: ").concat(dt('toggleswitch.border.radius'), ";\n}\n\n.p-toggleswitch-slider {\n    cursor: pointer;\n    width: 100%;\n    height: 100%;\n    border-width: ").concat(dt('toggleswitch.border.width'), ";\n    border-style: solid;\n    border-color: ").concat(dt('toggleswitch.border.color'), ";\n    background: ").concat(dt('toggleswitch.background'), ";\n    transition: background ").concat(dt('toggleswitch.transition.duration'), ", color ").concat(dt('toggleswitch.transition.duration'), ", border-color ").concat(dt('toggleswitch.transition.duration'), ", outline-color ").concat(dt('toggleswitch.transition.duration'), ", box-shadow ").concat(dt('toggleswitch.transition.duration'), ";\n    border-radius: ").concat(dt('toggleswitch.border.radius'), ";\n    outline-color: transparent;\n    box-shadow: ").concat(dt('toggleswitch.shadow'), ";\n}\n\n.p-toggleswitch-handle {\n    position: absolute;\n    top: 50%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: ").concat(dt('toggleswitch.handle.background'), ";\n    color: ").concat(dt('toggleswitch.handle.color'), ";\n    width: ").concat(dt('toggleswitch.handle.size'), ";\n    height: ").concat(dt('toggleswitch.handle.size'), ";\n    inset-inline-start: ").concat(dt('toggleswitch.gap'), ";\n    margin-block-start: calc(-1 * calc(").concat(dt('toggleswitch.handle.size'), " / 2));\n    border-radius: ").concat(dt('toggleswitch.handle.border.radius'), ";\n    transition: background ").concat(dt('toggleswitch.transition.duration'), ", color ").concat(dt('toggleswitch.transition.duration'), ", inset-inline-start ").concat(dt('toggleswitch.slide.duration'), ", box-shadow ").concat(dt('toggleswitch.slide.duration'), ";\n}\n\n.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {\n    background: ").concat(dt('toggleswitch.checked.background'), ";\n    border-color: ").concat(dt('toggleswitch.checked.border.color'), ";\n}\n\n.p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {\n    background: ").concat(dt('toggleswitch.handle.checked.background'), ";\n    color: ").concat(dt('toggleswitch.handle.checked.color'), ";\n    inset-inline-start: calc(").concat(dt('toggleswitch.width'), " - calc(").concat(dt('toggleswitch.handle.size'), " + ").concat(dt('toggleswitch.gap'), "));\n}\n\n.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {\n    background: ").concat(dt('toggleswitch.hover.background'), ";\n    border-color: ").concat(dt('toggleswitch.hover.border.color'), ";\n}\n\n.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {\n    background: ").concat(dt('toggleswitch.handle.hover.background'), ";\n    color: ").concat(dt('toggleswitch.handle.hover.color'), ";\n}\n\n.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {\n    background: ").concat(dt('toggleswitch.checked.hover.background'), ";\n    border-color: ").concat(dt('toggleswitch.checked.hover.border.color'), ";\n}\n\n.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {\n    background: ").concat(dt('toggleswitch.handle.checked.hover.background'), ";\n    color: ").concat(dt('toggleswitch.handle.checked.hover.color'), ";\n}\n\n.p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {\n    box-shadow: ").concat(dt('toggleswitch.focus.ring.shadow'), ";\n    outline: ").concat(dt('toggleswitch.focus.ring.width'), " ").concat(dt('toggleswitch.focus.ring.style'), " ").concat(dt('toggleswitch.focus.ring.color'), ";\n    outline-offset: ").concat(dt('toggleswitch.focus.ring.offset'), ";\n}\n\n.p-toggleswitch.p-invalid > .p-toggleswitch-slider {\n    border-color: ").concat(dt('toggleswitch.invalid.border.color'), ";\n}\n\n.p-toggleswitch.p-disabled {\n    opacity: 1;\n}\n\n.p-toggleswitch.p-disabled .p-toggleswitch-slider {\n    background: ").concat(dt('toggleswitch.disabled.background'), ";\n}\n\n.p-toggleswitch.p-disabled .p-toggleswitch-handle {\n    background: ").concat(dt('toggleswitch.handle.disabled.background'), ";\n}\n");
};
var inlineStyles = {
  root: {
    position: 'relative'
  }
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-toggleswitch p-component', {
      'p-toggleswitch-checked': instance.checked,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  input: 'p-toggleswitch-input',
  slider: 'p-toggleswitch-slider',
  handle: 'p-toggleswitch-handle'
};
var ToggleSwitchStyle = BaseStyle.extend({
  name: 'toggleswitch',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { ToggleSwitchStyle as default };
//# sourceMappingURL=index.mjs.map
