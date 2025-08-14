import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-chip {\n    display: inline-flex;\n    align-items: center;\n    background: ".concat(dt('chip.background'), ";\n    color: ").concat(dt('chip.color'), ";\n    border-radius: ").concat(dt('chip.border.radius'), ";\n    padding-block: ").concat(dt('chip.padding.y'), ";\n    padding-inline: ").concat(dt('chip.padding.x'), ";\n    gap: ").concat(dt('chip.gap'), ";\n}\n\n.p-chip-icon {\n    color: ").concat(dt('chip.icon.color'), ";\n    font-size: ").concat(dt('chip.icon.font.size'), ";\n    width: ").concat(dt('chip.icon.size'), ";\n    height: ").concat(dt('chip.icon.size'), ";\n}\n\n.p-chip-image {\n    border-radius: 50%;\n    width: ").concat(dt('chip.image.width'), ";\n    height: ").concat(dt('chip.image.height'), ";\n    margin-inline-start: calc(-1 * ").concat(dt('chip.padding.y'), ");\n}\n\n.p-chip:has(.p-chip-remove-icon) {\n    padding-inline-end: ").concat(dt('chip.padding.y'), ";\n}\n\n.p-chip:has(.p-chip-image) {\n    padding-block-start: calc(").concat(dt('chip.padding.y'), " / 2);\n    padding-block-end: calc(").concat(dt('chip.padding.y'), " / 2);\n}\n\n.p-chip-remove-icon {\n    cursor: pointer;\n    font-size: ").concat(dt('chip.remove.icon.size'), ";\n    width: ").concat(dt('chip.remove.icon.size'), ";\n    height: ").concat(dt('chip.remove.icon.size'), ";\n    color: ").concat(dt('chip.remove.icon.color'), ";\n    border-radius: 50%;\n    transition: outline-color ").concat(dt('chip.transition.duration'), ", box-shadow ").concat(dt('chip.transition.duration'), ";\n    outline-color: transparent;\n}\n\n.p-chip-remove-icon:focus-visible {\n    box-shadow: ").concat(dt('chip.remove.icon.focus.ring.shadow'), ";\n    outline: ").concat(dt('chip.remove.icon.focus.ring.width'), " ").concat(dt('chip.remove.icon.focus.ring.style'), " ").concat(dt('chip.remove.icon.focus.ring.color'), ";\n    outline-offset: ").concat(dt('chip.remove.icon.focus.ring.offset'), ";\n}\n");
};
var classes = {
  root: 'p-chip p-component',
  image: 'p-chip-image',
  icon: 'p-chip-icon',
  label: 'p-chip-label',
  removeIcon: 'p-chip-remove-icon'
};
var ChipStyle = BaseStyle.extend({
  name: 'chip',
  theme: theme,
  classes: classes
});

export { ChipStyle as default };
//# sourceMappingURL=index.mjs.map
