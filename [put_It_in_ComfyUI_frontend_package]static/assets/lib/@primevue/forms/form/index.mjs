import { omit } from '@primeuix/utils';
import { useForm } from '@primevue/forms/useform';
import BaseComponent from '@primevue/core/basecomponent';
import FormStyle from '@primevue/forms/form/style';
import { openBlock, createElementBlock, mergeProps, withModifiers, renderSlot } from 'vue';

var script$1 = {
  name: 'BaseForm',
  "extends": BaseComponent,
  style: FormStyle,
  props: {
    resolver: {
      type: Function,
      "default": null
    },
    initialValues: {
      type: Object,
      "default": null
    },
    validateOnValueUpdate: {
      type: [Boolean, Array],
      "default": true
    },
    validateOnBlur: {
      type: [Boolean, Array],
      "default": false
    },
    validateOnMount: {
      type: [Boolean, Array],
      "default": false
    },
    validateOnSubmit: {
      type: [Boolean, Array],
      "default": true
    }
  },
  provide: function provide() {
    return {
      $pcForm: this,
      $parentInstance: this
    };
  }
};

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var script = {
  name: 'Form',
  "extends": script$1,
  inheritAttrs: false,
  emits: ['submit'],
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var $form = useForm(props);
    var register = function register(field, options) {
      var _$form$defineField = $form.defineField(field, options),
        _$form$defineField2 = _slicedToArray(_$form$defineField, 2),
        fieldProps = _$form$defineField2[1];
      return fieldProps;
    };
    var onSubmit = $form.handleSubmit(function (e) {
      emit('submit', e);
    });
    return _objectSpread({
      register: register,
      onSubmit: onSubmit
    }, omit($form, ['handleSubmit']));
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("form", mergeProps({
    onSubmit: _cache[0] || (_cache[0] = withModifiers(function () {
      return $setup.onSubmit && $setup.onSubmit.apply($setup, arguments);
    }, ["prevent"])),
    "class": _ctx.cx('root')
  }, _ctx.ptmi('root')), [renderSlot(_ctx.$slots, "default", mergeProps({
    register: $setup.register,
    valid: _ctx.valid,
    reset: _ctx.reset
  }, _ctx.states))], 16);
}

script.render = render;

export { script as default };
//# sourceMappingURL=index.mjs.map
