import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-togglebutton {\n    display: inline-flex;\n    cursor: pointer;\n    user-select: none;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    color: ".concat(dt('togglebutton.color'), ";\n    background: ").concat(dt('togglebutton.background'), ";\n    border: 1px solid ").concat(dt('togglebutton.border.color'), ";\n    padding: ").concat(dt('togglebutton.padding'), ";\n    font-size: 1rem;\n    font-family: inherit;\n    font-feature-settings: inherit;\n    transition: background ").concat(dt('togglebutton.transition.duration'), ", color ").concat(dt('togglebutton.transition.duration'), ", border-color ").concat(dt('togglebutton.transition.duration'), ",\n        outline-color ").concat(dt('togglebutton.transition.duration'), ", box-shadow ").concat(dt('togglebutton.transition.duration'), ";\n    border-radius: ").concat(dt('togglebutton.border.radius'), ";\n    outline-color: transparent;\n    font-weight: ").concat(dt('togglebutton.font.weight'), ";\n}\n\n.p-togglebutton-content {\n    position: relative;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: ").concat(dt('togglebutton.gap'), ";\n}\n\n.p-togglebutton-label,\n.p-togglebutton-icon {\n    position: relative;\n    transition: none;\n}\n\n.p-togglebutton::before {\n    content: \"\";\n    background: transparent;\n    transition: background ").concat(dt('togglebutton.transition.duration'), ", color ").concat(dt('togglebutton.transition.duration'), ", border-color ").concat(dt('togglebutton.transition.duration'), ",\n            outline-color ").concat(dt('togglebutton.transition.duration'), ", box-shadow ").concat(dt('togglebutton.transition.duration'), ";\n    position: absolute;\n    inset-inline-start: ").concat(dt('togglebutton.content.left'), ";\n    inset-block-start: ").concat(dt('togglebutton.content.top'), ";\n    width: calc(100% - calc(2 * ").concat(dt('togglebutton.content.left'), "));\n    height: calc(100% - calc(2 * ").concat(dt('togglebutton.content.top'), "));\n    border-radius: ").concat(dt('togglebutton.border.radius'), ";\n}\n\n.p-togglebutton.p-togglebutton-checked::before {\n    background: ").concat(dt('togglebutton.content.checked.background'), ";\n    box-shadow: ").concat(dt('togglebutton.content.checked.shadow'), ";\n}\n\n.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {\n    background: ").concat(dt('togglebutton.hover.background'), ";\n    color: ").concat(dt('togglebutton.hover.color'), ";\n}\n\n.p-togglebutton.p-togglebutton-checked {\n    background: ").concat(dt('togglebutton.checked.background'), ";\n    border-color: ").concat(dt('togglebutton.checked.border.color'), ";\n    color: ").concat(dt('togglebutton.checked.color'), ";\n}\n\n.p-togglebutton:focus-visible {\n    box-shadow: ").concat(dt('togglebutton.focus.ring.shadow'), ";\n    outline: ").concat(dt('togglebutton.focus.ring.width'), " ").concat(dt('togglebutton.focus.ring.style'), " ").concat(dt('togglebutton.focus.ring.color'), ";\n    outline-offset: ").concat(dt('togglebutton.focus.ring.offset'), ";\n}\n\n.p-togglebutton.p-invalid {\n    border-color: ").concat(dt('togglebutton.invalid.border.color'), ";\n}\n\n.p-togglebutton:disabled {\n    opacity: 1;\n    cursor: default;\n    background: ").concat(dt('togglebutton.disabled.background'), ";\n    border-color: ").concat(dt('togglebutton.disabled.border.color'), ";\n    color: ").concat(dt('togglebutton.disabled.color'), ";\n}\n\n.p-togglebutton-icon {\n    color: ").concat(dt('togglebutton.icon.color'), ";\n}\n\n.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {\n    color: ").concat(dt('togglebutton.icon.hover.color'), ";\n}\n\n.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {\n    color: ").concat(dt('togglebutton.icon.checked.color'), ";\n}\n\n.p-togglebutton:disabled .p-togglebutton-icon {\n    color: ").concat(dt('togglebutton.icon.disabled.color'), ";\n}\n\n.p-togglebutton-sm {\n    padding: ").concat(dt('togglebutton.sm.padding'), ";\n    font-size: ").concat(dt('togglebutton.sm.font.size'), ";\n}\n\n.p-togglebutton-lg {\n    padding: ").concat(dt('togglebutton.lg.padding'), ";\n    font-size: ").concat(dt('togglebutton.lg.font.size'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-togglebutton p-component', {
      'p-togglebutton-checked': instance.active,
      'p-invalid': instance.$invalid,
      'p-togglebutton-sm p-inputfield-sm': props.size === 'small',
      'p-togglebutton-lg p-inputfield-lg': props.size === 'large'
    }];
  },
  content: 'p-togglebutton-content',
  icon: 'p-togglebutton-icon',
  label: 'p-togglebutton-label'
};
var ToggleButtonStyle = BaseStyle.extend({
  name: 'togglebutton',
  theme: theme,
  classes: classes
});

export { ToggleButtonStyle as default };
//# sourceMappingURL=index.mjs.map
