import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-rating {\n    position: relative;\n    display: flex;\n    align-items: center;\n    gap: ".concat(dt('rating.gap'), ";\n}\n\n.p-rating-option {\n    display: inline-flex;\n    align-items: center;\n    cursor: pointer;\n    outline-color: transparent;\n    border-radius: 50%;\n    transition: background ").concat(dt('rating.transition.duration'), ", color ").concat(dt('rating.transition.duration'), ", border-color ").concat(dt('rating.transition.duration'), ", outline-color ").concat(dt('rating.transition.duration'), ", box-shadow ").concat(dt('rating.transition.duration'), ";\n}\n\n.p-rating-option.p-focus-visible {\n    box-shadow: ").concat(dt('rating.focus.ring.shadow'), ";\n    outline: ").concat(dt('rating.focus.ring.width'), " ").concat(dt('rating.focus.ring.style'), " ").concat(dt('rating.focus.ring.color'), ";\n    outline-offset: ").concat(dt('rating.focus.ring.offset'), ";\n}\n\n.p-rating-icon {\n    color: ").concat(dt('rating.icon.color'), ";\n    transition: background ").concat(dt('rating.transition.duration'), ", color ").concat(dt('rating.transition.duration'), ", border-color ").concat(dt('rating.transition.duration'), ", outline-color ").concat(dt('rating.transition.duration'), ", box-shadow ").concat(dt('rating.transition.duration'), ";\n    font-size: ").concat(dt('rating.icon.size'), ";\n    width: ").concat(dt('rating.icon.size'), ";\n    height: ").concat(dt('rating.icon.size'), ";\n}\n\n.p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {\n    color: ").concat(dt('rating.icon.hover.color'), ";\n}\n\n.p-rating-option-active .p-rating-icon {\n    color: ").concat(dt('rating.icon.active.color'), ";\n}\n\n.p-rating-icon.p-invalid { /* @todo */\n    stroke: ").concat(dt('rating.invalid.icon.color'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-rating', {
      'p-readonly': props.readonly,
      'p-disabled': props.disabled
    }];
  },
  option: function option(_ref3) {
    var instance = _ref3.instance,
      value = _ref3.value;
    return ['p-rating-option', {
      'p-rating-option-active': value <= instance.d_value,
      'p-focus-visible': value === instance.focusedOptionIndex && instance.isFocusVisibleItem
    }];
  },
  onIcon: function onIcon(_ref4) {
    var instance = _ref4.instance;
    return ['p-rating-icon p-rating-on-icon', {
      'p-invalid': instance.$invalid
    }];
  },
  offIcon: function offIcon(_ref5) {
    var instance = _ref5.instance;
    return ['p-rating-icon p-rating-off-icon', {
      'p-invalid': instance.$invalid
    }];
  }
};
var RatingStyle = BaseStyle.extend({
  name: 'rating',
  theme: theme,
  classes: classes
});

export { RatingStyle as default };
//# sourceMappingURL=index.mjs.map
