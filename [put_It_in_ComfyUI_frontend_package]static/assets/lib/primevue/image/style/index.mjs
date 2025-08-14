import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-image-mask {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-image-preview {\n    position: relative;\n    display: inline-flex;\n    line-height: 0;\n}\n\n.p-image-preview-mask {\n    position: absolute;\n    inset-inline-start: 0;\n    inset-block-start: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0;\n    transition: opacity 0.3s;\n    border: 0 none;\n    padding: 0;\n    cursor: pointer;\n    background: transparent;\n    color: ".concat(dt('image.preview.mask.color'), ";\n    transition: background ").concat(dt('image.transition.duration'), ";\n}\n\n.p-image-preview:hover > .p-image-preview-mask {\n    opacity: 1;\n    cursor: pointer;\n    background: ").concat(dt('image.preview.mask.background'), ";\n}\n\n.p-image-preview-icon {\n    font-size: ").concat(dt('image.preview.icon.size'), ";\n    width: ").concat(dt('image.preview.icon.size'), ";\n    height: ").concat(dt('image.preview.icon.size'), ";\n}\n\n.p-image-toolbar {\n    position: absolute;\n    inset-block-start: ").concat(dt('image.toolbar.position.top'), ";\n    inset-inline-end: ").concat(dt('image.toolbar.position.right'), ";\n    inset-inline-start: ").concat(dt('image.toolbar.position.left'), ";\n    inset-block-end: ").concat(dt('image.toolbar.position.bottom'), ";\n    display: flex;\n    z-index: 1;\n    padding: ").concat(dt('image.toolbar.padding'), ";\n    background: ").concat(dt('image.toolbar.background'), ";\n    backdrop-filter: blur(").concat(dt('image.toolbar.blur'), ");\n    border-color: ").concat(dt('image.toolbar.border.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('image.toolbar.border.width'), ";\n    border-radius: ").concat(dt('image.toolbar.border.radius'), ";\n    gap: ").concat(dt('image.toolbar.gap'), ";\n}\n\n.p-image-action {\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    color: ").concat(dt('image.action.color'), ";\n    background: transparent;\n    width: ").concat(dt('image.action.size'), ";\n    height: ").concat(dt('image.action.size'), ";\n    margin: 0;\n    padding: 0;\n    border: 0 none;\n    cursor: pointer;\n    user-select: none;\n    border-radius: ").concat(dt('image.action.border.radius'), ";\n    outline-color: transparent;\n    transition: background ").concat(dt('image.transition.duration'), ", color ").concat(dt('image.transition.duration'), ", outline-color ").concat(dt('image.transition.duration'), ", box-shadow ").concat(dt('image.transition.duration'), ";\n}\n\n.p-image-action:hover {\n    color: ").concat(dt('image.action.hover.color'), ";\n    background: ").concat(dt('image.action.hover.background'), ";\n}\n\n.p-image-action:focus-visible {\n    box-shadow: ").concat(dt('image.action.focus.ring.shadow'), ";\n    outline: ").concat(dt('image.action.focus.ring.width'), " ").concat(dt('image.action.focus.ring.style'), " ").concat(dt('image.action.focus.ring.color'), ";\n    outline-offset: ").concat(dt('image.action.focus.ring.offset'), ";\n}\n\n.p-image-action .p-icon {\n    font-size: ").concat(dt('image.action.icon.size'), ";\n    width: ").concat(dt('image.action.icon.size'), ";\n    height: ").concat(dt('image.action.icon.size'), ";\n}\n\n.p-image-action.p-disabled {\n    pointer-events: auto;\n}\n\n.p-image-original {\n    transition: transform 0.15s;\n    max-width: 100vw;\n    max-height: 100vh;\n}\n\n.p-image-original-enter-active {\n    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-image-original-leave-active {\n    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.p-image-original-enter-from,\n.p-image-original-leave-to {\n    opacity: 0;\n    transform: scale(0.7);\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-image p-component', {
      'p-image-preview': props.preview
    }];
  },
  previewMask: 'p-image-preview-mask',
  previewIcon: 'p-image-preview-icon',
  mask: 'p-image-mask p-overlay-mask p-overlay-mask-enter',
  toolbar: 'p-image-toolbar',
  rotateRightButton: 'p-image-action p-image-rotate-right-button',
  rotateLeftButton: 'p-image-action p-image-rotate-left-button',
  zoomOutButton: function zoomOutButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-image-action p-image-zoom-out-button', {
      'p-disabled': instance.isZoomOutDisabled
    }];
  },
  zoomInButton: function zoomInButton(_ref4) {
    var instance = _ref4.instance;
    return ['p-image-action p-image-zoom-in-button', {
      'p-disabled': instance.isZoomInDisabled
    }];
  },
  closeButton: 'p-image-action p-image-close-button',
  original: 'p-image-original'
};
var ImageStyle = BaseStyle.extend({
  name: 'image',
  theme: theme,
  classes: classes
});

export { ImageStyle as default };
//# sourceMappingURL=index.mjs.map
