import TimesIcon from '@primevue/icons/times';
import Ripple from 'primevue/ripple';
import BaseComponent from '@primevue/core/basecomponent';
import MessageStyle from 'primevue/message/style';
import { resolveComponent, resolveDirective, openBlock, createBlock, Transition, mergeProps, withCtx, withDirectives, createElementVNode, renderSlot, createElementBlock, normalizeClass, resolveDynamicComponent, createCommentVNode, vShow } from 'vue';

var script$1 = {
  name: 'BaseMessage',
  "extends": BaseComponent,
  props: {
    severity: {
      type: String,
      "default": 'info'
    },
    closable: {
      type: Boolean,
      "default": false
    },
    life: {
      type: Number,
      "default": null
    },
    icon: {
      type: String,
      "default": undefined
    },
    closeIcon: {
      type: String,
      "default": undefined
    },
    closeButtonProps: {
      type: null,
      "default": null
    },
    size: {
      type: String,
      "default": null
    },
    variant: {
      type: String,
      "default": null
    }
  },
  style: MessageStyle,
  provide: function provide() {
    return {
      $pcMessage: this,
      $parentInstance: this
    };
  }
};

var script = {
  name: 'Message',
  "extends": script$1,
  inheritAttrs: false,
  emits: ['close', 'life-end'],
  timeout: null,
  data: function data() {
    return {
      visible: true
    };
  },
  mounted: function mounted() {
    var _this = this;
    if (this.life) {
      setTimeout(function () {
        _this.visible = false;
        _this.$emit('life-end');
      }, this.life);
    }
  },
  methods: {
    close: function close(event) {
      this.visible = false;
      this.$emit('close', event);
    }
  },
  computed: {
    closeAriaLabel: function closeAriaLabel() {
      return this.$primevue.config.locale.aria ? this.$primevue.config.locale.aria.close : undefined;
    }
  },
  directives: {
    ripple: Ripple
  },
  components: {
    TimesIcon: TimesIcon
  }
};

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _hoisted_1 = ["aria-label"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_TimesIcon = resolveComponent("TimesIcon");
  var _directive_ripple = resolveDirective("ripple");
  return openBlock(), createBlock(Transition, mergeProps({
    name: "p-message",
    appear: ""
  }, _ctx.ptmi('transition')), {
    "default": withCtx(function () {
      return [withDirectives(createElementVNode("div", mergeProps({
        "class": _ctx.cx('root'),
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true"
      }, _ctx.ptm('root')), [_ctx.$slots.container ? renderSlot(_ctx.$slots, "container", {
        key: 0,
        closeCallback: $options.close
      }) : (openBlock(), createElementBlock("div", mergeProps({
        key: 1,
        "class": _ctx.cx('content')
      }, _ctx.ptm('content')), [renderSlot(_ctx.$slots, "icon", {
        "class": normalizeClass(_ctx.cx('icon'))
      }, function () {
        return [(openBlock(), createBlock(resolveDynamicComponent(_ctx.icon ? 'span' : null), mergeProps({
          "class": [_ctx.cx('icon'), _ctx.icon]
        }, _ctx.ptm('icon')), null, 16, ["class"]))];
      }), _ctx.$slots["default"] ? (openBlock(), createElementBlock("div", mergeProps({
        key: 0,
        "class": _ctx.cx('text')
      }, _ctx.ptm('text')), [renderSlot(_ctx.$slots, "default")], 16)) : createCommentVNode("", true), _ctx.closable ? withDirectives((openBlock(), createElementBlock("button", mergeProps({
        key: 1,
        "class": _ctx.cx('closeButton'),
        "aria-label": $options.closeAriaLabel,
        type: "button",
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $options.close($event);
        })
      }, _objectSpread(_objectSpread({}, _ctx.closeButtonProps), _ctx.ptm('closeButton'))), [renderSlot(_ctx.$slots, "closeicon", {}, function () {
        return [_ctx.closeIcon ? (openBlock(), createElementBlock("i", mergeProps({
          key: 0,
          "class": [_ctx.cx('closeIcon'), _ctx.closeIcon]
        }, _ctx.ptm('closeIcon')), null, 16)) : (openBlock(), createBlock(_component_TimesIcon, mergeProps({
          key: 1,
          "class": [_ctx.cx('closeIcon'), _ctx.closeIcon]
        }, _ctx.ptm('closeIcon')), null, 16, ["class"]))];
      })], 16, _hoisted_1)), [[_directive_ripple]]) : createCommentVNode("", true)], 16))], 16), [[vShow, $data.visible]])];
    }),
    _: 3
  }, 16);
}

script.render = render;

export { script as default };
//# sourceMappingURL=index.mjs.map
