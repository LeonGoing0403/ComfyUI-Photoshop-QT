import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-avatar {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    width: ".concat(dt('avatar.width'), ";\n    height: ").concat(dt('avatar.height'), ";\n    font-size: ").concat(dt('avatar.font.size'), ";\n    background: ").concat(dt('avatar.background'), ";\n    color: ").concat(dt('avatar.color'), ";\n    border-radius: ").concat(dt('avatar.border.radius'), ";\n}\n\n.p-avatar-image {\n    background: transparent;\n}\n\n.p-avatar-circle {\n    border-radius: 50%;\n}\n\n.p-avatar-circle img {\n    border-radius: 50%;\n}\n\n.p-avatar-icon {\n    font-size: ").concat(dt('avatar.icon.size'), ";\n    width: ").concat(dt('avatar.icon.size'), ";\n    height: ").concat(dt('avatar.icon.size'), ";\n}\n\n.p-avatar img {\n    width: 100%;\n    height: 100%;\n}\n\n.p-avatar-lg {\n    width: ").concat(dt('avatar.lg.width'), ";\n    height: ").concat(dt('avatar.lg.width'), ";\n    font-size: ").concat(dt('avatar.lg.font.size'), ";\n}\n\n.p-avatar-lg .p-avatar-icon {\n    font-size: ").concat(dt('avatar.lg.icon.size'), ";\n    width: ").concat(dt('avatar.lg.icon.size'), ";\n    height: ").concat(dt('avatar.lg.icon.size'), ";\n}\n\n.p-avatar-xl {\n    width: ").concat(dt('avatar.xl.width'), ";\n    height: ").concat(dt('avatar.xl.width'), ";\n    font-size: ").concat(dt('avatar.xl.font.size'), ";\n}\n\n.p-avatar-xl .p-avatar-icon {\n    font-size: ").concat(dt('avatar.xl.icon.size'), ";\n    width: ").concat(dt('avatar.xl.icon.size'), ";\n    height: ").concat(dt('avatar.xl.icon.size'), ";\n}\n\n.p-avatar-group {\n    display: flex;\n    align-items: center;\n}\n\n.p-avatar-group .p-avatar + .p-avatar {\n    margin-inline-start: ").concat(dt('avatar.group.offset'), ";\n}\n\n.p-avatar-group .p-avatar {\n    border: 2px solid ").concat(dt('avatar.group.border.color'), ";\n}\n\n.p-avatar-group .p-avatar-lg + .p-avatar-lg {\n    margin-inline-start: ").concat(dt('avatar.lg.group.offset'), ";\n}\n\n.p-avatar-group .p-avatar-xl + .p-avatar-xl {\n    margin-inline-start: ").concat(dt('avatar.xl.group.offset'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-avatar p-component', {
      'p-avatar-image': props.image != null,
      'p-avatar-circle': props.shape === 'circle',
      'p-avatar-lg': props.size === 'large',
      'p-avatar-xl': props.size === 'xlarge'
    }];
  },
  label: 'p-avatar-label',
  icon: 'p-avatar-icon'
};
var AvatarStyle = BaseStyle.extend({
  name: 'avatar',
  theme: theme,
  classes: classes
});

export { AvatarStyle as default };
//# sourceMappingURL=index.mjs.map
