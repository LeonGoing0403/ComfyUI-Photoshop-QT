import { resolve, isArray, mergeKeys, isNotEmpty } from '@primeuix/utils';
import { reactive, computed, getCurrentInstance, onMounted, nextTick, mergeProps, watch, toValue } from 'vue';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) ; else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function tryOnMounted(fn) {
  var sync = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  if (getCurrentInstance()) onMounted(fn);else if (sync) fn();else nextTick(fn);
}
var useForm = function useForm() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var states = reactive({});
  var fields = reactive({});
  var valid = computed(function () {
    return Object.values(states).every(function (field) {
      return !field.invalid;
    });
  });
  var getInitialState = function getInitialState(field, initialValue) {
    var _options$initialValue;
    return {
      value: initialValue !== null && initialValue !== void 0 ? initialValue : (_options$initialValue = options.initialValues) === null || _options$initialValue === void 0 ? void 0 : _options$initialValue[field],
      touched: false,
      dirty: false,
      pristine: true,
      valid: true,
      invalid: false,
      error: null,
      errors: []
    };
  };
  var isFieldValidate = function isFieldValidate(field, validateOn) {
    var value = resolve(validateOn, field);
    return value === true || isArray(value) && value.includes(field);
  };
  var validateOn = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(option, defaultValue) {
      var _options$option;
      var results, fieldArr;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            results = {};
            if (!isArray(options[option])) {
              _context.next = 7;
              break;
            }
            _context.next = 4;
            return validate(options[option]);
          case 4:
            results = _context.sent;
            _context.next = 12;
            break;
          case 7:
            _context.t0 = (_options$option = options[option]) !== null && _options$option !== void 0 ? _options$option : defaultValue;
            if (!_context.t0) {
              _context.next = 12;
              break;
            }
            _context.next = 11;
            return validate();
          case 11:
            results = _context.sent;
          case 12:
            fieldArr = Object.keys(fields).filter(function (field) {
              var _fields$field;
              return (_fields$field = fields[field]) === null || _fields$field === void 0 || (_fields$field = _fields$field.options) === null || _fields$field === void 0 ? void 0 : _fields$field[option];
            }) || [];
            _context.t1 = isNotEmpty(fieldArr);
            if (!_context.t1) {
              _context.next = 18;
              break;
            }
            _context.next = 17;
            return validate(fieldArr);
          case 17:
            results = _context.sent;
          case 18:
            return _context.abrupt("return", results);
          case 19:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function validateOn(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();
  var validateFieldOn = function validateFieldOn(field, fieldOptions, option, defaultValue) {
    var _fieldOptions$option, _options$option2;
    ((_fieldOptions$option = fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions[option]) !== null && _fieldOptions$option !== void 0 ? _fieldOptions$option : isFieldValidate(field, (_options$option2 = options[option]) !== null && _options$option2 !== void 0 ? _options$option2 : defaultValue)) && validate(field);
  };
  var defineField = function defineField(field, fieldOptions) {
    var _resolve;
    states[field] || (states[field] = getInitialState(field, fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.initialValue));
    var props = mergeProps((_resolve = resolve(fieldOptions, states[field])) === null || _resolve === void 0 ? void 0 : _resolve.props, resolve(fieldOptions === null || fieldOptions === void 0 ? void 0 : fieldOptions.props, states[field]), {
      name: field,
      onBlur: function onBlur() {
        states[field].touched = true;
        validateFieldOn(field, fieldOptions, 'validateOnBlur');
      },
      onInput: function onInput(event) {
        states[field].value = event.hasOwnProperty('value') ? event.value : event.target.value;
      },
      onChange: function onChange(event) {
        states[field].value = event.hasOwnProperty('value') ? event.value : event.target.type === 'checkbox' || event.target.type === 'radio' ? event.target.checked : event.target.value;
      },
      onInvalid: function onInvalid(errors) {
        var _errors$;
        states[field].invalid = true;
        states[field].errors = errors;
        states[field].error = (_errors$ = errors === null || errors === void 0 ? void 0 : errors[0]) !== null && _errors$ !== void 0 ? _errors$ : null;
      }
    });
    fields[field] = {
      props: props,
      states: states[field],
      options: fieldOptions
    };
    watch(function () {
      return states[field].value;
    }, function (newValue, oldValue) {
      if (states[field].pristine) {
        states[field].pristine = false;
      }
      if (newValue !== oldValue) {
        states[field].dirty = true;
      }
      validateFieldOn(field, fieldOptions, 'validateOnValueUpdate', true);
    });
    return [states[field], props];
  };
  var handleSubmit = function handleSubmit(callback) {
    return /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(event) {
        var results;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return validateOn('validateOnSubmit', true);
            case 2:
              results = _context2.sent;
              return _context2.abrupt("return", callback(_objectSpread({
                originalEvent: event,
                valid: toValue(valid),
                states: toValue(states),
                reset: reset
              }, results)));
            case 4:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      return function (_x3) {
        return _ref2.apply(this, arguments);
      };
    }();
  };
  var validate = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(field) {
      var _yield$options$resolv, _options$resolver, _result, _result$errors;
      var resolverOptions, result, flattenFields, _i, _Object$entries, _Object$entries$_i, fieldName, fieldInst, _fieldInst$options, _result$errors$fieldN, _errors$2, fieldResolver, _yield$fieldResolver, fieldValue, fieldResult, errors;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            resolverOptions = Object.entries(states).reduce(function (acc, _ref4) {
              var _ref5 = _slicedToArray(_ref4, 2),
                key = _ref5[0],
                val = _ref5[1];
              acc.names.push(key);
              acc.values[key] = val.value;
              return acc;
            }, {
              names: [],
              values: {}
            });
            _context3.next = 3;
            return (_options$resolver = options.resolver) === null || _options$resolver === void 0 ? void 0 : _options$resolver.call(options, resolverOptions);
          case 3:
            _context3.t1 = _yield$options$resolv = _context3.sent;
            _context3.t0 = _context3.t1 !== null;
            if (!_context3.t0) {
              _context3.next = 7;
              break;
            }
            _context3.t0 = _yield$options$resolv !== void 0;
          case 7:
            if (!_context3.t0) {
              _context3.next = 11;
              break;
            }
            _context3.t2 = _yield$options$resolv;
            _context3.next = 12;
            break;
          case 11:
            _context3.t2 = {};
          case 12:
            result = _context3.t2;
            (_result$errors = (_result = result).errors) !== null && _result$errors !== void 0 ? _result$errors : _result.errors = {};
            flattenFields = [field].flat();
            _i = 0, _Object$entries = Object.entries(fields);
          case 16:
            if (!(_i < _Object$entries.length)) {
              _context3.next = 44;
              break;
            }
            _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), fieldName = _Object$entries$_i[0], fieldInst = _Object$entries$_i[1];
            if (!(flattenFields.includes(fieldName) || !field)) {
              _context3.next = 41;
              break;
            }
            fieldResolver = (_fieldInst$options = fieldInst.options) === null || _fieldInst$options === void 0 ? void 0 : _fieldInst$options.resolver;
            if (!fieldResolver) {
              _context3.next = 36;
              break;
            }
            fieldValue = fieldInst.states.value;
            _context3.next = 24;
            return fieldResolver({
              values: fieldValue,
              value: fieldValue,
              name: fieldName
            });
          case 24:
            _context3.t4 = _yield$fieldResolver = _context3.sent;
            _context3.t3 = _context3.t4 !== null;
            if (!_context3.t3) {
              _context3.next = 28;
              break;
            }
            _context3.t3 = _yield$fieldResolver !== void 0;
          case 28:
            if (!_context3.t3) {
              _context3.next = 32;
              break;
            }
            _context3.t5 = _yield$fieldResolver;
            _context3.next = 33;
            break;
          case 32:
            _context3.t5 = {};
          case 33:
            fieldResult = _context3.t5;
            isArray(fieldResult.errors) && (fieldResult.errors = _defineProperty({}, fieldName, fieldResult.errors));
            result = mergeKeys(result, fieldResult);
          case 36:
            errors = (_result$errors$fieldN = result.errors[fieldName]) !== null && _result$errors$fieldN !== void 0 ? _result$errors$fieldN : []; //const value = result.values?.[fieldName] ?? states[sField].value;
            states[fieldName].invalid = errors.length > 0;
            states[fieldName].valid = !states[fieldName].invalid;
            states[fieldName].errors = errors;
            states[fieldName].error = (_errors$2 = errors === null || errors === void 0 ? void 0 : errors[0]) !== null && _errors$2 !== void 0 ? _errors$2 : null;
            //states[fieldName].value = value;
          case 41:
            _i++;
            _context3.next = 16;
            break;
          case 44:
            return _context3.abrupt("return", result);
          case 45:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function validate(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  var reset = function reset() {
    Object.keys(states).forEach(function (field) {
      var _fields$field2;
      return fields[field].states = states[field] = getInitialState(field, (_fields$field2 = fields[field]) === null || _fields$field2 === void 0 || (_fields$field2 = _fields$field2.options) === null || _fields$field2 === void 0 ? void 0 : _fields$field2.initialValue);
    });
  };
  var validateOnMounted = function validateOnMounted() {
    validateOn('validateOnMount');
  };
  tryOnMounted(validateOnMounted);
  return {
    defineField: defineField,
    handleSubmit: handleSubmit,
    validate: validate,
    reset: reset,
    valid: valid,
    states: states,
    fields: fields
  };
};

export { useForm };
//# sourceMappingURL=index.mjs.map
