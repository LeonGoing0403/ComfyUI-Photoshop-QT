import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-colorpicker {\n    display: inline-block;\n    position: relative;\n}\n\n.p-colorpicker-dragging {\n    cursor: pointer;\n}\n\n.p-colorpicker-preview {\n    width: ".concat(dt('colorpicker.preview.width'), ";\n    height: ").concat(dt('colorpicker.preview.height'), ";\n    padding: 0;\n    border: 0 none;\n    border-radius: ").concat(dt('colorpicker.preview.border.radius'), ";\n    transition: background ").concat(dt('colorpicker.transition.duration'), ", color ").concat(dt('colorpicker.transition.duration'), ", border-color ").concat(dt('colorpicker.transition.duration'), ", outline-color ").concat(dt('colorpicker.transition.duration'), ", box-shadow ").concat(dt('colorpicker.transition.duration'), ";\n    outline-color: transparent;\n    cursor: pointer;\n}\n\n.p-colorpicker-preview:enabled:focus-visible {\n    border-color: ").concat(dt('colorpicker.preview.focus.border.color'), ";\n    box-shadow: ").concat(dt('colorpicker.preview.focus.ring.shadow'), ";\n    outline: ").concat(dt('colorpicker.preview.focus.ring.width'), " ").concat(dt('colorpicker.preview.focus.ring.style'), " ").concat(dt('colorpicker.preview.focus.ring.color'), ";\n    outline-offset: ").concat(dt('colorpicker.preview.focus.ring.offset'), ";\n}\n\n.p-colorpicker-panel {\n    background: ").concat(dt('colorpicker.panel.background'), ";\n    border: 1px solid ").concat(dt('colorpicker.panel.border.color'), ";\n    border-radius: ").concat(dt('colorpicker.panel.border.radius'), ";\n    box-shadow: ").concat(dt('colorpicker.panel.shadow'), ";\n    width: 193px;\n    height: 166px;\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n\n.p-colorpicker-panel-inline {\n    box-shadow: none;\n    position: static;\n}\n\n.p-colorpicker-content {\n    position: relative;\n}\n\n.p-colorpicker-color-selector {\n    width: 150px;\n    height: 150px;\n    inset-block-start: 8px;\n    inset-inline-start: 8px;\n    position: absolute;\n}\n\n.p-colorpicker-color-background {\n    width: 100%;\n    height: 100%;\n    background: linear-gradient(to top, #000 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);\n}\n\n.p-colorpicker-color-handle {\n    position: absolute;\n    inset-block-start: 0px;\n    inset-inline-start: 150px;\n    border-radius: 100%;\n    width: 10px;\n    height: 10px;\n    border-width: 1px;\n    border-style: solid;\n    margin: -5px 0 0 -5px;\n    cursor: pointer;\n    opacity: 0.85;\n    border-color: ").concat(dt('colorpicker.handle.color'), ";\n}\n\n.p-colorpicker-hue {\n    width: 17px;\n    height: 150px;\n    inset-block-start: 8px;\n    inset-inline-start: 167px;\n    position: absolute;\n    opacity: 0.85;\n    background: linear-gradient(0deg,\n        red 0,\n        #ff0 17%,\n        #0f0 33%,\n        #0ff 50%,\n        #00f 67%,\n        #f0f 83%,\n        red);\n}\n\n.p-colorpicker-hue-handle {\n    position: absolute;\n    inset-block-start: 150px;\n    inset-inline-start: 0px;\n    width: 21px;\n    margin-inline-start: -2px;\n    margin-block-start: -5px;\n    height: 10px;\n    border-width: 2px;\n    border-style: solid;\n    opacity: 0.85;\n    cursor: pointer;\n    border-color: ").concat(dt('colorpicker.handle.color'), ";\n}\n");
};
var classes = {
  root: 'p-colorpicker p-component',
  preview: function preview(_ref2) {
    var props = _ref2.props;
    return ['p-colorpicker-preview', {
      'p-disabled': props.disabled
    }];
  },
  panel: function panel(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    return ['p-colorpicker-panel', {
      'p-colorpicker-panel-inline': props.inline,
      'p-disabled': props.disabled,
      'p-invalid': instance.$invalid
    }];
  },
  colorSelector: 'p-colorpicker-color-selector',
  colorBackground: 'p-colorpicker-color-background',
  colorHandle: 'p-colorpicker-color-handle',
  hue: 'p-colorpicker-hue',
  hueHandle: 'p-colorpicker-hue-handle'
};
var ColorPickerStyle = BaseStyle.extend({
  name: 'colorpicker',
  theme: theme,
  classes: classes
});

export { ColorPickerStyle as default };
//# sourceMappingURL=index.mjs.map
