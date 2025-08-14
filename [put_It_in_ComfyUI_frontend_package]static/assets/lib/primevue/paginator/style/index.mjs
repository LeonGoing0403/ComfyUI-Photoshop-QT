import BaseStyle from '@primevue/core/base/style';

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-paginator {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    background: ".concat(dt('paginator.background'), ";\n    color: ").concat(dt('paginator.color'), ";\n    padding: ").concat(dt('paginator.padding'), ";\n    border-radius: ").concat(dt('paginator.border.radius'), ";\n    gap: ").concat(dt('paginator.gap'), ";\n}\n\n.p-paginator-content {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: wrap;\n    gap: ").concat(dt('paginator.gap'), ";\n}\n\n.p-paginator-content-start {\n    margin-inline-end: auto;\n}\n\n.p-paginator-content-end {\n    margin-inline-start: auto;\n}\n\n.p-paginator-page,\n.p-paginator-next,\n.p-paginator-last,\n.p-paginator-first,\n.p-paginator-prev {\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    line-height: 1;\n    user-select: none;\n    overflow: hidden;\n    position: relative;\n    background: ").concat(dt('paginator.nav.button.background'), ";\n    border: 0 none;\n    color: ").concat(dt('paginator.nav.button.color'), ";\n    min-width: ").concat(dt('paginator.nav.button.width'), ";\n    height: ").concat(dt('paginator.nav.button.height'), ";\n    transition: background ").concat(dt('paginator.transition.duration'), ", color ").concat(dt('paginator.transition.duration'), ", outline-color ").concat(dt('paginator.transition.duration'), ", box-shadow ").concat(dt('paginator.transition.duration'), ";\n    border-radius: ").concat(dt('paginator.nav.button.border.radius'), ";\n    padding: 0;\n    margin: 0;\n}\n\n.p-paginator-page:focus-visible,\n.p-paginator-next:focus-visible,\n.p-paginator-last:focus-visible,\n.p-paginator-first:focus-visible,\n.p-paginator-prev:focus-visible {\n    box-shadow: ").concat(dt('paginator.nav.button.focus.ring.shadow'), ";\n    outline: ").concat(dt('paginator.nav.button.focus.ring.width'), " ").concat(dt('paginator.nav.button.focus.ring.style'), " ").concat(dt('paginator.nav.button.focus.ring.color'), ";\n    outline-offset: ").concat(dt('paginator.nav.button.focus.ring.offset'), ";\n}\n\n.p-paginator-page:not(.p-disabled):not(.p-paginator-page-selected):hover,\n.p-paginator-first:not(.p-disabled):hover,\n.p-paginator-prev:not(.p-disabled):hover,\n.p-paginator-next:not(.p-disabled):hover,\n.p-paginator-last:not(.p-disabled):hover {\n    background: ").concat(dt('paginator.nav.button.hover.background'), ";\n    color: ").concat(dt('paginator.nav.button.hover.color'), ";\n}\n\n.p-paginator-page.p-paginator-page-selected {\n    background: ").concat(dt('paginator.nav.button.selected.background'), ";\n    color: ").concat(dt('paginator.nav.button.selected.color'), ";\n}\n\n.p-paginator-current {\n    color: ").concat(dt('paginator.current.page.report.color'), ";\n}\n\n.p-paginator-pages {\n    display: flex;\n    align-items: center;\n    gap: ").concat(dt('paginator.gap'), ";\n}\n\n.p-paginator-jtp-input .p-inputtext {\n    max-width: ").concat(dt('paginator.jump.to.page.input.max.width'), ";\n}\n\n.p-paginator-first:dir(rtl),\n.p-paginator-prev:dir(rtl),\n.p-paginator-next:dir(rtl),\n.p-paginator-last:dir(rtl) {\n    transform: rotate(180deg);\n}\n");
};
var classes = {
  paginator: function paginator(_ref2) {
    var instance = _ref2.instance,
      key = _ref2.key;
    return ['p-paginator p-component', _defineProperty({
      'p-paginator-default': !instance.hasBreakpoints()
    }, "p-paginator-".concat(key), instance.hasBreakpoints())];
  },
  content: 'p-paginator-content',
  contentStart: 'p-paginator-content-start',
  contentEnd: 'p-paginator-content-end',
  first: function first(_ref4) {
    var instance = _ref4.instance;
    return ['p-paginator-first', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  firstIcon: 'p-paginator-first-icon',
  prev: function prev(_ref5) {
    var instance = _ref5.instance;
    return ['p-paginator-prev', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  prevIcon: 'p-paginator-prev-icon',
  next: function next(_ref6) {
    var instance = _ref6.instance;
    return ['p-paginator-next', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  nextIcon: 'p-paginator-next-icon',
  last: function last(_ref7) {
    var instance = _ref7.instance;
    return ['p-paginator-last', {
      'p-disabled': instance.$attrs.disabled
    }];
  },
  lastIcon: 'p-paginator-last-icon',
  pages: 'p-paginator-pages',
  page: function page(_ref8) {
    var props = _ref8.props,
      pageLink = _ref8.pageLink;
    return ['p-paginator-page', {
      'p-paginator-page-selected': pageLink - 1 === props.page
    }];
  },
  current: 'p-paginator-current',
  pcRowPerPageDropdown: 'p-paginator-rpp-dropdown',
  pcJumpToPageDropdown: 'p-paginator-jtp-dropdown',
  pcJumpToPageInputText: 'p-paginator-jtp-input'
};
var PaginatorStyle = BaseStyle.extend({
  name: 'paginator',
  theme: theme,
  classes: classes
});

export { PaginatorStyle as default };
//# sourceMappingURL=index.mjs.map
