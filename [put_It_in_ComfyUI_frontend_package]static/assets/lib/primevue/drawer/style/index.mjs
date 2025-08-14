import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-drawer {\n    display: flex;\n    flex-direction: column;\n    transform: translate3d(0px, 0px, 0px);\n    position: relative;\n    transition: transform 0.3s;\n    background: ".concat(dt('drawer.background'), ";\n    color: ").concat(dt('drawer.color'), ";\n    border: 1px solid ").concat(dt('drawer.border.color'), ";\n    box-shadow: ").concat(dt('drawer.shadow'), ";\n}\n\n.p-drawer-content {\n    overflow-y: auto;\n    flex-grow: 1;\n    padding: ").concat(dt('drawer.content.padding'), ";\n}\n\n.p-drawer-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-shrink: 0;\n    padding: ").concat(dt('drawer.header.padding'), ";\n}\n\n.p-drawer-footer {\n    padding: ").concat(dt('drawer.footer.padding'), ";\n}\n\n.p-drawer-title {\n    font-weight: ").concat(dt('drawer.title.font.weight'), ";\n    font-size: ").concat(dt('drawer.title.font.size'), ";\n}\n\n.p-drawer-full .p-drawer {\n    transition: none;\n    transform: none;\n    width: 100vw !important;\n    height: 100vh !important;\n    max-height: 100%;\n    top: 0px !important;\n    left: 0px !important;\n    border-width: 1px;\n}\n\n.p-drawer-left .p-drawer-enter-from,\n.p-drawer-left .p-drawer-leave-to {\n    transform: translateX(-100%);\n}\n\n.p-drawer-right .p-drawer-enter-from,\n.p-drawer-right .p-drawer-leave-to {\n    transform: translateX(100%);\n}\n\n.p-drawer-top .p-drawer-enter-from,\n.p-drawer-top .p-drawer-leave-to {\n    transform: translateY(-100%);\n}\n\n.p-drawer-bottom .p-drawer-enter-from,\n.p-drawer-bottom .p-drawer-leave-to {\n    transform: translateY(100%);\n}\n\n.p-drawer-full .p-drawer-enter-from,\n.p-drawer-full .p-drawer-leave-to {\n    opacity: 0;\n}\n\n.p-drawer-full .p-drawer-enter-active,\n.p-drawer-full .p-drawer-leave-active {\n    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\n\n.p-drawer-left .p-drawer {\n    width: 20rem;\n    height: 100%;\n    border-inline-end-width: 1px;\n}\n\n.p-drawer-right .p-drawer {\n    width: 20rem;\n    height: 100%;\n    border-inline-start-width: 1px;\n}\n\n.p-drawer-top .p-drawer {\n    height: 10rem;\n    width: 100%;\n    border-block-end-width: 1px;\n}\n\n.p-drawer-bottom .p-drawer {\n    height: 10rem;\n    width: 100%;\n    border-block-start-width: 1px;\n}\n\n.p-drawer-left .p-drawer-content,\n.p-drawer-right .p-drawer-content,\n.p-drawer-top .p-drawer-content,\n.p-drawer-bottom .p-drawer-content {\n    width: 100%;\n    height: 100%;\n}\n\n.p-drawer-open {\n    display: flex;\n}\n\n.p-drawer-mask:dir(rtl) {\n    flex-direction: row-reverse;\n}\n");
};
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
      justifyContent: position === 'left' ? 'flex-start' : position === 'right' ? 'flex-end' : 'center',
      alignItems: position === 'top' ? 'flex-start' : position === 'bottom' ? 'flex-end' : 'center',
      pointerEvents: modal ? 'auto' : 'none'
    };
  },
  root: {
    pointerEvents: 'auto'
  }
};
var classes = {
  mask: function mask(_ref3) {
    var instance = _ref3.instance,
      props = _ref3.props;
    var positions = ['left', 'right', 'top', 'bottom'];
    var pos = positions.find(function (item) {
      return item === props.position;
    });
    return ['p-drawer-mask', {
      'p-overlay-mask p-overlay-mask-enter': props.modal,
      'p-drawer-open': instance.containerVisible,
      'p-drawer-full': instance.fullScreen
    }, pos ? "p-drawer-".concat(pos) : ''];
  },
  root: function root(_ref4) {
    var instance = _ref4.instance;
    return ['p-drawer p-component', {
      'p-drawer-full': instance.fullScreen
    }];
  },
  header: 'p-drawer-header',
  title: 'p-drawer-title',
  pcCloseButton: 'p-drawer-close-button',
  content: 'p-drawer-content',
  footer: 'p-drawer-footer'
};
var DrawerStyle = BaseStyle.extend({
  name: 'drawer',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { DrawerStyle as default };
//# sourceMappingURL=index.mjs.map
