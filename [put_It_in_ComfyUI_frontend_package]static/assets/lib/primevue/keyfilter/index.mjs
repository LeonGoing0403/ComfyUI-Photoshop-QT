import { isAttributeEquals } from '@primeuix/utils/dom';
import BaseDirective from '@primevue/core/basedirective';
import KeyFilterStyle from 'primevue/keyfilter/style';

var BaseKeyFilter = BaseDirective.extend({
  style: KeyFilterStyle
});

function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var KeyFilter = BaseKeyFilter.extend('keyfilter', {
  beforeMount: function beforeMount(el, options) {
    var target = this.getTarget(el);
    if (!target) return;
    target.$_pkeyfilterModifier = this.getModifiers(options);
    if (_typeof(options.value)) {
      var _options$value, _options$value2;
      target.$_pkeyfilterPattern = ((_options$value = options.value) === null || _options$value === void 0 ? void 0 : _options$value.pattern) || options.value;
      target.$_pkeyfilterValidateOnly = ((_options$value2 = options.value) === null || _options$value2 === void 0 ? void 0 : _options$value2.validateOnly) || false;
    }
    this.bindEvents(target);
    target.setAttribute('data-pd-keyfilter', true);
  },
  updated: function updated(el, options) {
    var target = this.getTarget(el);
    if (!target) return;
    target.$_pkeyfilterModifier = this.getModifiers(options);
    this.unbindEvents(el, options);
    if (_typeof(options.value)) {
      var _options$value3, _options$value4;
      target.$_pkeyfilterPattern = ((_options$value3 = options.value) === null || _options$value3 === void 0 ? void 0 : _options$value3.pattern) || options.value;
      target.$_pkeyfilterValidateOnly = ((_options$value4 = options.value) === null || _options$value4 === void 0 ? void 0 : _options$value4.validateOnly) || false;
    }
    this.bindEvents(target);
  },
  unmounted: function unmounted(el, options) {
    this.unbindEvents(el, options);
  },
  DEFAULT_PATTERNS: {
    pint: /[\d]/,
    "int": /[\d\-]/,
    pnum: /[\d\.]/,
    money: /[\d\.\s,]/,
    num: /[\d\-\.]/,
    hex: /[0-9a-f]/i,
    email: /[a-z0-9_\.\-@]/i,
    alpha: /[a-z_]/i,
    alphanum: /[a-z0-9_]/i
  },
  methods: {
    getTarget: function getTarget(el) {
      return isAttributeEquals(el, 'data-pc-name', 'inputtext') || isAttributeEquals(el, 'data-pc-name', 'textarea') ? el : null;
    },
    getModifiers: function getModifiers(options) {
      if (options.modifiers && Object.keys(options.modifiers).length) {
        return Object.keys(options.modifiers)[Object.keys.length - 1];
      }
      return '';
    },
    getRegex: function getRegex(target) {
      return target.$_pkeyfilterPattern ? target.$_pkeyfilterPattern : target.$_pkeyfilterModifier ? this.DEFAULT_PATTERNS[target.$_pkeyfilterModifier] : /./;
    },
    bindEvents: function bindEvents(el) {
      var _this = this;
      el.$_keyfilterKeydownEvent = function (event) {
        return _this.onKeydown(event, el);
      };
      el.$_keyfilterPasteEvent = function (event) {
        return _this.onPaste(event, el);
      };
      el.addEventListener('keypress', el.$_keyfilterKeydownEvent);
      el.addEventListener('paste', el.$_keyfilterPasteEvent);
    },
    unbindEvents: function unbindEvents(el) {
      el.removeEventListener('keypress', el.$_keyfilterKeydownEvent);
      el.removeEventListener('paste', el.$_keyfilterPasteEvent);
      el.$_keyfilterKeydownEvent = null;
      el.$_keyfilterPasteEvent = null;
    },
    onKeydown: function onKeydown(event, target) {
      if (event.ctrlKey || event.altKey || event.metaKey || event.key === 'Tab') {
        return;
      }
      var regex = this.getRegex(target);
      if (regex === '') {
        return;
      }
      var testKey = "".concat(event.key);
      if (target.$_pkeyfilterValidateOnly) {
        testKey = "".concat(event.target.value).concat(event.key);
      }
      if (!regex.test(testKey)) {
        // runs before @update:modelValue emit
        event.preventDefault();
      }
    },
    onPaste: function onPaste(event, target) {
      var regex = this.getRegex(target);
      if (regex === '') {
        return;
      }
      var clipboard = event.clipboardData.getData('text');
      var testKey = '';

      // loop over each letter pasted and if any fail prevent the paste
      _toConsumableArray(clipboard).forEach(function (c) {
        if (target.$_pkeyfilterValidateOnly) {
          testKey += c;
        } else {
          testKey = c;
        }
        if (!regex.test(testKey)) {
          event.preventDefault();
          return false;
        }
      });
    }
  }
});

export { KeyFilter as default };
//# sourceMappingURL=index.mjs.map
