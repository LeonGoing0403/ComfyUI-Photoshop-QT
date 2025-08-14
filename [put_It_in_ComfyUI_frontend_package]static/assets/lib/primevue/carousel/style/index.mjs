import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-carousel {\n    display: flex;\n    flex-direction: column;\n}\n\n.p-carousel-content-container {\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n}\n\n.p-carousel-content {\n    display: flex;\n    flex-direction: row;\n    gap: ".concat(dt('carousel.content.gap'), ";\n}\n\n.p-carousel-content:dir(rtl) {\n    flex-direction: row-reverse;\n}\n\n.p-carousel-viewport {\n    overflow: hidden;\n    width: 100%;\n}\n\n.p-carousel-item-list {\n    display: flex;\n    flex-direction: row;\n}\n\n.p-carousel-item-list:dir(rtl) {\n    flex-direction: row-reverse;\n}\n\n.p-carousel-prev-button,\n.p-carousel-next-button {\n    align-self: center;\n    flex-shrink: 0;\n}\n\n.p-carousel-indicator-list {\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    flex-wrap: wrap;\n    padding: ").concat(dt('carousel.indicator.list.padding'), ";\n    gap: ").concat(dt('carousel.indicator.list.gap'), ";\n    margin: 0;\n    list-style: none;\n}\n\n.p-carousel-indicator-button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: ").concat(dt('carousel.indicator.background'), ";\n    width: ").concat(dt('carousel.indicator.width'), ";\n    height: ").concat(dt('carousel.indicator.height'), ";\n    border: 0 none;\n    transition: background ").concat(dt('carousel.transition.duration'), ", color ").concat(dt('carousel.transition.duration'), ", outline-color ").concat(dt('carousel.transition.duration'), ", box-shadow ").concat(dt('carousel.transition.duration'), ";\n    outline-color: transparent;\n    border-radius: ").concat(dt('carousel.indicator.border.radius'), ";\n    padding: 0;\n    margin: 0;\n    user-select: none;\n    cursor: pointer;\n}\n\n.p-carousel-indicator-button:focus-visible {\n    box-shadow: ").concat(dt('carousel.indicator.focus.ring.shadow'), ";\n    outline: ").concat(dt('carousel.indicator.focus.ring.width'), " ").concat(dt('carousel.indicator.focus.ring.style'), " ").concat(dt('carousel.indicator.focus.ring.color'), ";\n    outline-offset: ").concat(dt('carousel.indicator.focus.ring.offset'), ";\n}\n\n.p-carousel-indicator-button:hover {\n    background: ").concat(dt('carousel.indicator.hover.background'), ";\n}\n\n.p-carousel-indicator-active .p-carousel-indicator-button {\n    background: ").concat(dt('carousel.indicator.active.background'), ";\n}\n\n.p-carousel-vertical .p-carousel-content {\n    flex-direction: column;\n}\n\n.p-carousel-vertical .p-carousel-item-list {\n    flex-direction: column;\n    height: 100%;\n}\n\n.p-items-hidden .p-carousel-item {\n    visibility: hidden;\n}\n\n.p-items-hidden .p-carousel-item.p-carousel-item-active {\n    visibility: visible;\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance;
    return ['p-carousel p-component', {
      'p-carousel-vertical': instance.isVertical(),
      'p-carousel-horizontal': !instance.isVertical()
    }];
  },
  header: 'p-carousel-header',
  contentContainer: 'p-carousel-content-container',
  content: 'p-carousel-content',
  pcPrevButton: function pcPrevButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-carousel-prev-button', {
      'p-disabled': instance.backwardIsDisabled
    }];
  },
  viewport: 'p-carousel-viewport',
  itemList: 'p-carousel-item-list',
  itemClone: function itemClone(_ref4) {
    var index = _ref4.index,
      value = _ref4.value,
      totalShiftedItems = _ref4.totalShiftedItems,
      d_numVisible = _ref4.d_numVisible;
    return ['p-carousel-item p-carousel-item-clone', {
      'p-carousel-item-active': totalShiftedItems * -1 === value.length + d_numVisible,
      'p-carousel-item-start': index === 0,
      'p-carousel-item-end': value.slice(-1 * d_numVisible).length - 1 === index
    }];
  },
  item: function item(_ref5) {
    var instance = _ref5.instance,
      index = _ref5.index;
    return ['p-carousel-item', {
      'p-carousel-item-active': instance.firstIndex() <= index && instance.lastIndex() >= index,
      'p-carousel-item-start': instance.firstIndex() === index,
      'p-carousel-item-end': instance.lastIndex() === index
    }];
  },
  pcNextButton: function pcNextButton(_ref6) {
    var instance = _ref6.instance;
    return ['p-carousel-next-button', {
      'p-disabled': instance.forwardIsDisabled
    }];
  },
  indicatorList: 'p-carousel-indicator-list',
  indicator: function indicator(_ref7) {
    var instance = _ref7.instance,
      index = _ref7.index;
    return ['p-carousel-indicator', {
      'p-carousel-indicator-active': instance.d_page === index
    }];
  },
  indicatorButton: 'p-carousel-indicator-button',
  footer: 'p-carousel-footer'
};
var CarouselStyle = BaseStyle.extend({
  name: 'carousel',
  theme: theme,
  classes: classes
});

export { CarouselStyle as default };
//# sourceMappingURL=index.mjs.map
