import BaseStyle from '@primevue/core/base/style';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-speeddial {\n    position: static;\n    display: flex;\n    gap: ".concat(dt('speeddial.gap'), ";\n}\n\n.p-speeddial-button {\n    z-index: 1;\n}\n\n.p-speeddial-button.p-speeddial-rotate {\n    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, background ").concat(dt('speeddial.transition.duration'), ", color ").concat(dt('speeddial.transition.duration'), ", border-color ").concat(dt('speeddial.transition.duration'), ",\n    box-shadow ").concat(dt('speeddial.transition.duration'), ", outline-color ").concat(dt('speeddial.transition.duration'), ";\n    will-change: transform;\n}\n\n.p-speeddial-list {\n    margin: 0;\n    padding: 0;\n    list-style: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: inset-block-start 0s linear ").concat(dt('speeddial.transition.duration'), ";\n    pointer-events: none;\n    outline: 0 none;\n    z-index: 2;\n    gap: ").concat(dt('speeddial.gap'), ";\n}\n\n.p-speeddial-item {\n    transform: scale(0);\n    opacity: 0;\n    transition: transform 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, opacity 0.8s;\n    will-change: transform;\n}\n\n.p-speeddial-circle .p-speeddial-item,\n.p-speeddial-semi-circle .p-speeddial-item,\n.p-speeddial-quarter-circle .p-speeddial-item {\n    position: absolute;\n}\n\n.p-speeddial-mask {\n    position: absolute;\n    inset-inline-start: 0;\n    inset-block-start: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0;\n    background: ").concat(dt('mask.background'), ";\n    border-radius: 6px;\n    transition: opacity 150ms;\n}\n\n.p-speeddial-mask-visible {\n    pointer-events: none;\n    opacity: 1;\n    transition: opacity 150ms;\n}\n\n.p-speeddial-open .p-speeddial-list {\n    pointer-events: auto;\n}\n\n.p-speeddial-open .p-speeddial-item {\n    transform: scale(1);\n    opacity: 1;\n}\n\n.p-speeddial-open .p-speeddial-rotate {\n    transform: rotate(45deg);\n}\n");
};

/* Direction */
var inlineStyles = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return {
      alignItems: (props.direction === 'up' || props.direction === 'down') && 'center',
      justifyContent: (props.direction === 'left' || props.direction === 'right') && 'center',
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  },
  list: function list(_ref3) {
    var props = _ref3.props;
    return {
      flexDirection: props.direction === 'up' ? 'column-reverse' : props.direction === 'down' ? 'column' : props.direction === 'left' ? 'row-reverse' : props.direction === 'right' ? 'row' : null
    };
  }
};
var classes = {
  root: function root(_ref4) {
    var instance = _ref4.instance,
      props = _ref4.props;
    return ["p-speeddial p-component p-speeddial-".concat(props.type), _defineProperty(_defineProperty(_defineProperty({}, "p-speeddial-direction-".concat(props.direction), props.type !== 'circle'), 'p-speeddial-open', instance.d_visible), 'p-disabled', props.disabled)];
  },
  pcButton: function pcButton(_ref6) {
    var props = _ref6.props;
    return ['p-speeddial-button', {
      'p-speeddial-rotate': props.rotateAnimation && !props.hideIcon
    }];
  },
  list: 'p-speeddial-list',
  item: 'p-speeddial-item',
  action: 'p-speeddial-action',
  actionIcon: 'p-speeddial-action-icon',
  mask: function mask(_ref7) {
    var instance = _ref7.instance;
    return ['p-speeddial-mask', {
      'p-speeddial-mask-visible': instance.d_visible
    }];
  }
};
var SpeedDialStyle = BaseStyle.extend({
  name: 'speeddial',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { SpeedDialStyle as default };
//# sourceMappingURL=index.mjs.map
