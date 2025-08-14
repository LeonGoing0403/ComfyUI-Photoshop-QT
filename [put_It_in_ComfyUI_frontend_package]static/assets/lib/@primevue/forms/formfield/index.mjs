import BaseComponent from '@primevue/core/basecomponent';
import FormFieldStyle from '@primevue/forms/formfield/style';
import { openBlock, createBlock, resolveDynamicComponent, mergeProps, withCtx, renderSlot } from 'vue';

var script$1 = {
  name: 'BaseFormField',
  "extends": BaseComponent,
  style: FormFieldStyle,
  props: {
    name: {
      type: String,
      "default": undefined
    },
    resolver: {
      type: Function,
      "default": undefined
    },
    initialValue: {
      type: null,
      "default": undefined
    },
    validateOnValueUpdate: {
      type: Boolean,
      "default": undefined
    },
    validateOnBlur: {
      type: Boolean,
      "default": undefined
    },
    validateOnMount: {
      type: Boolean,
      "default": undefined
    },
    validateOnSubmit: {
      type: Boolean,
      "default": undefined
    },
    as: {
      type: [String, Object],
      "default": 'DIV'
    },
    asChild: {
      type: Boolean,
      "default": false
    }
  },
  provide: function provide() {
    return {
      $pcFormField: this,
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
var script = {
  name: 'FormField',
  "extends": script$1,
  inheritAttrs: false,
  inject: {
    $pcForm: {
      "default": undefined
    }
  },
  watch: {
    formControl: {
      immediate: true,
      handler: function handler(newValue) {
        var _this$$pcForm, _this$$pcForm$registe;
        (_this$$pcForm = this.$pcForm) === null || _this$$pcForm === void 0 || (_this$$pcForm$registe = _this$$pcForm.register) === null || _this$$pcForm$registe === void 0 || _this$$pcForm$registe.call(_this$$pcForm, this.name, newValue);
      }
    }
  },
  computed: {
    formControl: function formControl() {
      return {
        name: this.name,
        resolver: this.resolver,
        initialValue: this.initialValue,
        validateOnValueUpdate: this.validateOnValueUpdate,
        validateOnBlur: this.validateOnBlur,
        validateOnMount: this.validateOnMount,
        validateOnSubmit: this.validateOnSubmit
      };
    },
    field: function field() {
      var _this$$pcForm2;
      return ((_this$$pcForm2 = this.$pcForm) === null || _this$$pcForm2 === void 0 || (_this$$pcForm2 = _this$$pcForm2.fields) === null || _this$$pcForm2 === void 0 ? void 0 : _this$$pcForm2[this.name]) || {};
    },
    fieldAttrs: function fieldAttrs() {
      return _objectSpread(_objectSpread({}, this.field.props), this.field.states);
    }
  }
};

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "class": _ctx.cx('root')
  }, _ctx.ptmi('root')), {
    "default": withCtx(function () {
      return [renderSlot(_ctx.$slots, "default", mergeProps({
        props: $options.field.props
      }, $options.fieldAttrs))];
    }),
    _: 3
  }, 16, ["class"])) : renderSlot(_ctx.$slots, "default", mergeProps({
    key: 1,
    "class": _ctx.cx('root'),
    props: $options.field.props
  }, $options.fieldAttrs));
}

script.render = render;

export { script as default };
//# sourceMappingURL=index.mjs.map
