import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-dialog {\n    max-height: 90%;\n    transform: scale(1);\n    border-radius: ".concat(dt('dialog.border.radius'), ";\n    box-shadow: ").concat(dt('dialog.shadow'), ";\n    background: ").concat(dt('dialog.background'), ";\n    border: 1px solid ").concat(dt('dialog.border.color'), ";\n    color: ").concat(dt('dialog.color'), ";\n}\n\n.p-dialog-content {\n    overflow-y: auto;\n    padding: ").concat(dt('dialog.content.padding'), ";\n}\n\n.p-dialog-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-shrink: 0;\n    padding: ").concat(dt('dialog.header.padding'), ";\n}\n\n.p-dialog-title {\n    font-weight: ").concat(dt('dialog.title.font.weight'), ";\n    font-size: ").concat(dt('dialog.title.font.size'), ";\n}\n\n.p-dialog-footer {\n    flex-shrink: 0;\n    padding: ").concat(dt('dialog.footer.padding'), ";\n    display: flex;\n    justify-content: flex-end;\n    gap: ").concat(dt('dialog.footer.gap'), ";\n}\n\n.p-dialog-header-actions {\n    display: flex;\n    align-items: center;\n    gap: ").concat(dt('dialog.header.gap'), ";\n}\n\n.p-dialog-enter-active {\n    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-dialog-leave-active {\n    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.p-dialog-enter-from,\n.p-dialog-leave-to {\n    opacity: 0;\n    transform: scale(0.7);\n}\n\n.p-dialog-top .p-dialog,\n.p-dialog-bottom .p-dialog,\n.p-dialog-left .p-dialog,\n.p-dialog-right .p-dialog,\n.p-dialog-topleft .p-dialog,\n.p-dialog-topright .p-dialog,\n.p-dialog-bottomleft .p-dialog,\n.p-dialog-bottomright .p-dialog {\n    margin: 0.75rem;\n    transform: translate3d(0px, 0px, 0px);\n}\n\n.p-dialog-top .p-dialog-enter-active,\n.p-dialog-top .p-dialog-leave-active,\n.p-dialog-bottom .p-dialog-enter-active,\n.p-dialog-bottom .p-dialog-leave-active,\n.p-dialog-left .p-dialog-enter-active,\n.p-dialog-left .p-dialog-leave-active,\n.p-dialog-right .p-dialog-enter-active,\n.p-dialog-right .p-dialog-leave-active,\n.p-dialog-topleft .p-dialog-enter-active,\n.p-dialog-topleft .p-dialog-leave-active,\n.p-dialog-topright .p-dialog-enter-active,\n.p-dialog-topright .p-dialog-leave-active,\n.p-dialog-bottomleft .p-dialog-enter-active,\n.p-dialog-bottomleft .p-dialog-leave-active,\n.p-dialog-bottomright .p-dialog-enter-active,\n.p-dialog-bottomright .p-dialog-leave-active {\n    transition: all 0.3s ease-out;\n}\n\n.p-dialog-top .p-dialog-enter-from,\n.p-dialog-top .p-dialog-leave-to {\n    transform: translate3d(0px, -100%, 0px);\n}\n\n.p-dialog-bottom .p-dialog-enter-from,\n.p-dialog-bottom .p-dialog-leave-to {\n    transform: translate3d(0px, 100%, 0px);\n}\n\n.p-dialog-left .p-dialog-enter-from,\n.p-dialog-left .p-dialog-leave-to,\n.p-dialog-topleft .p-dialog-enter-from,\n.p-dialog-topleft .p-dialog-leave-to,\n.p-dialog-bottomleft .p-dialog-enter-from,\n.p-dialog-bottomleft .p-dialog-leave-to {\n    transform: translate3d(-100%, 0px, 0px);\n}\n\n.p-dialog-right .p-dialog-enter-from,\n.p-dialog-right .p-dialog-leave-to,\n.p-dialog-topright .p-dialog-enter-from,\n.p-dialog-topright .p-dialog-leave-to,\n.p-dialog-bottomright .p-dialog-enter-from,\n.p-dialog-bottomright .p-dialog-leave-to {\n    transform: translate3d(100%, 0px, 0px);\n}\n\n.p-dialog-left:dir(rtl) .p-dialog-enter-from,\n.p-dialog-left:dir(rtl) .p-dialog-leave-to,\n.p-dialog-topleft:dir(rtl) .p-dialog-enter-from,\n.p-dialog-topleft:dir(rtl) .p-dialog-leave-to,\n.p-dialog-bottomleft:dir(rtl) .p-dialog-enter-from,\n.p-dialog-bottomleft:dir(rtl) .p-dialog-leave-to {\n    transform: translate3d(100%, 0px, 0px);\n}\n\n.p-dialog-right:dir(rtl) .p-dialog-enter-from,\n.p-dialog-right:dir(rtl) .p-dialog-leave-to,\n.p-dialog-topright:dir(rtl) .p-dialog-enter-from,\n.p-dialog-topright:dir(rtl) .p-dialog-leave-to,\n.p-dialog-bottomright:dir(rtl) .p-dialog-enter-from,\n.p-dialog-bottomright:dir(rtl) .p-dialog-leave-to {\n    transform: translate3d(-100%, 0px, 0px);\n}\n\n.p-dialog-maximized {\n    width: 100vw !important;\n    height: 100vh !important;\n    top: 0px !important;\n    left: 0px !important;\n    max-height: 100%;\n    height: 100%;\n    border-radius: 0;\n}\n\n.p-dialog-maximized .p-dialog-content {\n    flex-grow: 1;\n}\n");
};

/* Position */
var inlineStyles = {
  mask: function mask(_ref2) {
    var position = _ref2.position,
      modal = _ref2.modal;
    return {
      position: 'fixed',
      height: '100%',
      width: '100%',
      left: 0,
      top: 0,
      display: 'flex',
      justifyContent: position === 'left' || position === 'topleft' || position === 'bottomleft' ? 'flex-start' : position === 'right' || position === 'topright' || position === 'bottomright' ? 'flex-end' : 'center',
      alignItems: position === 'top' || position === 'topleft' || position === 'topright' ? 'flex-start' : position === 'bottom' || position === 'bottomleft' || position === 'bottomright' ? 'flex-end' : 'center',
      pointerEvents: modal ? 'auto' : 'none'
    };
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    pointerEvents: 'auto'
  }
};
var classes = {
  mask: function mask(_ref3) {
    var props = _ref3.props;
    var positions = ['left', 'right', 'top', 'topleft', 'topright', 'bottom', 'bottomleft', 'bottomright'];
    var pos = positions.find(function (item) {
      return item === props.position;
    });
    return ['p-dialog-mask', {
      'p-overlay-mask p-overlay-mask-enter': props.modal
    }, pos ? "p-dialog-".concat(pos) : ''];
  },
  root: function root(_ref4) {
    var props = _ref4.props,
      instance = _ref4.instance;
    return ['p-dialog p-component', {
      'p-dialog-maximized': props.maximizable && instance.maximized
    }];
  },
  header: 'p-dialog-header',
  title: 'p-dialog-title',
  headerActions: 'p-dialog-header-actions',
  pcMaximizeButton: 'p-dialog-maximize-button',
  pcCloseButton: 'p-dialog-close-button',
  content: 'p-dialog-content',
  footer: 'p-dialog-footer'
};
var DialogStyle = BaseStyle.extend({
  name: 'dialog',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { DialogStyle as default };
//# sourceMappingURL=index.mjs.map
