import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-slider {\n    position: relative;\n    background: ".concat(dt('slider.track.background'), ";\n    border-radius: ").concat(dt('slider.track.border.radius'), ";\n}\n\n.p-slider-handle {\n    cursor: grab;\n    touch-action: none;\n    user-select: none;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: ").concat(dt('slider.handle.height'), ";\n    width: ").concat(dt('slider.handle.width'), ";\n    background: ").concat(dt('slider.handle.background'), ";\n    border-radius: ").concat(dt('slider.handle.border.radius'), ";\n    transition: background ").concat(dt('slider.transition.duration'), ", color ").concat(dt('slider.transition.duration'), ", border-color ").concat(dt('slider.transition.duration'), ", box-shadow ").concat(dt('slider.transition.duration'), ", outline-color ").concat(dt('slider.transition.duration'), ";\n    outline-color: transparent;\n}\n\n.p-slider-handle::before {\n    content: \"\";\n    width: ").concat(dt('slider.handle.content.width'), ";\n    height: ").concat(dt('slider.handle.content.height'), ";\n    display: block;\n    background: ").concat(dt('slider.handle.content.background'), ";\n    border-radius: ").concat(dt('slider.handle.content.border.radius'), ";\n    box-shadow: ").concat(dt('slider.handle.content.shadow'), ";\n    transition: background ").concat(dt('slider.transition.duration'), ";\n}\n\n.p-slider:not(.p-disabled) .p-slider-handle:hover {\n    background: ").concat(dt('slider.handle.hover.background'), ";\n}\n\n.p-slider:not(.p-disabled) .p-slider-handle:hover::before {\n    background: ").concat(dt('slider.handle.content.hover.background'), ";\n}\n\n.p-slider-handle:focus-visible {\n    box-shadow: ").concat(dt('slider.handle.focus.ring.shadow'), ";\n    outline: ").concat(dt('slider.handle.focus.ring.width'), " ").concat(dt('slider.handle.focus.ring.style'), " ").concat(dt('slider.handle.focus.ring.color'), ";\n    outline-offset: ").concat(dt('slider.handle.focus.ring.offset'), ";\n}\n\n.p-slider-range {\n    display: block;\n    background: ").concat(dt('slider.range.background'), ";\n    border-radius: ").concat(dt('slider.border.radius'), ";\n}\n\n.p-slider.p-slider-horizontal {\n    height: ").concat(dt('slider.track.size'), ";\n}\n\n.p-slider-horizontal .p-slider-range {\n    inset-block-start: 0;\n    inset-inline-start: 0;\n    height: 100%;\n}\n\n.p-slider-horizontal .p-slider-handle {\n    inset-block-start: 50%;\n    margin-block-start: calc(-1 * calc(").concat(dt('slider.handle.height'), " / 2));\n    margin-inline-start: calc(-1 * calc(").concat(dt('slider.handle.width'), " / 2));\n}\n\n.p-slider-vertical {\n    min-height: 100px;\n    width: ").concat(dt('slider.track.size'), ";\n}\n\n.p-slider-vertical .p-slider-handle {\n    inset-inline-start: 50%;\n    margin-inline-start: calc(-1 * calc(").concat(dt('slider.handle.width'), " / 2));\n    margin-block-end: calc(-1 * calc(").concat(dt('slider.handle.height'), " / 2));\n}\n\n.p-slider-vertical .p-slider-range {\n    inset-block-end: 0;\n    inset-inline-start: 0;\n    width: 100%;\n}\n");
};
var inlineStyles = {
  handle: {
    position: 'absolute'
  },
  range: {
    position: 'absolute'
  }
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-slider p-component', {
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid,
      'p-slider-horizontal': props.orientation === 'horizontal',
      'p-slider-vertical': props.orientation === 'vertical'
    }];
  },
  range: 'p-slider-range',
  handle: 'p-slider-handle'
};
var SliderStyle = BaseStyle.extend({
  name: 'slider',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { SliderStyle as default };
//# sourceMappingURL=index.mjs.map
