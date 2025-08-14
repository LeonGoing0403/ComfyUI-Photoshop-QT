import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-galleria {\n    overflow: hidden;\n    border-style: solid;\n    border-width: ".concat(dt('galleria.border.width'), ";\n    border-color: ").concat(dt('galleria.border.color'), ";\n    border-radius: ").concat(dt('galleria.border.radius'), ";\n}\n\n.p-galleria-content {\n    display: flex;\n    flex-direction: column;\n}\n\n.p-galleria-items-container {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n}\n\n.p-galleria-items {\n    position: relative;\n    display: flex;\n    height: 100%;\n}\n\n.p-galleria-nav-button {\n    position: absolute !important;\n    top: 50%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    background: ").concat(dt('galleria.nav.button.background'), ";\n    color: ").concat(dt('galleria.nav.button.color'), ";\n    width: ").concat(dt('galleria.nav.button.size'), ";\n    height: ").concat(dt('galleria.nav.button.size'), ";\n    transition: background ").concat(dt('galleria.transition.duration'), ", color ").concat(dt('galleria.transition.duration'), ", outline-color ").concat(dt('galleria.transition.duration'), ", box-shadow ").concat(dt('galleria.transition.duration'), ";\n    margin: calc(-1 * calc(").concat(dt('galleria.nav.button.size'), ") / 2) ").concat(dt('galleria.nav.button.gutter'), " 0 ").concat(dt('galleria.nav.button.gutter'), ";\n    padding: 0;\n    user-select: none;\n    border: 0 none;\n    cursor: pointer;\n    outline-color: transparent;\n}\n\n.p-galleria-nav-button:not(.p-disabled):hover {\n    background: ").concat(dt('galleria.nav.button.hover.background'), ";\n    color: ").concat(dt('galleria.nav.button.hover.color'), ";\n}\n\n.p-galleria-nav-button:not(.p-disabled):focus-visible {\n    box-shadow: ").concat(dt('galleria.nav.button.focus.ring.shadow'), ";\n    outline: ").concat(dt('galleria.nav.button.focus.ring.width'), " ").concat(dt('galleria.nav.button.focus.ring.style'), " ").concat(dt('galleria.nav.button.focus.ring.color'), ";\n    outline-offset: ").concat(dt('galleria.nav.button.focus.ring.offset'), ";\n}\n\n.p-galleria-next-icon,\n.p-galleria-prev-icon {\n    font-size: ").concat(dt('galleria.nav.icon.size'), ";\n    width: ").concat(dt('galleria.nav.icon.size'), ";\n    height: ").concat(dt('galleria.nav.icon.size'), ";\n}\n\n.p-galleria-prev-button {\n    border-radius: ").concat(dt('galleria.nav.button.prev.border.radius'), ";\n    left: 0;\n}\n\n.p-galleria-next-button {\n    border-radius: ").concat(dt('galleria.nav.button.next.border.radius'), ";\n    right: 0;\n}\n\n.p-galleria-prev-button:dir(rtl) {\n    left: auto;\n    right: 0;\n    transform: rotate(180deg);\n}\n\n.p-galleria-next-button:dir(rtl) {\n    right: auto;\n    left: 0;\n    transform: rotate(180deg);\n}\n\n.p-galleria-item {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n}\n\n.p-galleria-hover-navigators .p-galleria-nav-button {\n    pointer-events: none;\n    opacity: 0;\n    transition: opacity ").concat(dt('galleria.transition.duration'), " ease-in-out;\n}\n\n.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {\n    pointer-events: all;\n    opacity: 1;\n}\n\n.p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {\n    pointer-events: none;\n}\n\n.p-galleria-caption {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background: ").concat(dt('galleria.caption.background'), ";\n    color: ").concat(dt('galleria.caption.color'), ";\n    padding: ").concat(dt('galleria.caption.padding'), ";\n}\n\n.p-galleria-thumbnails {\n    display: flex;\n    flex-direction: column;\n    overflow: auto;\n    flex-shrink: 0;\n}\n\n.p-galleria-thumbnail-nav-button {\n    align-self: center;\n    flex: 0 0 auto;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    position: relative;\n    margin: 0 ").concat(dt('galleria.thumbnail.nav.button.gutter'), ";\n    padding: 0;\n    border: none;\n    user-select: none;\n    cursor: pointer;\n    background: transparent;\n    color: ").concat(dt('galleria.thumbnail.nav.button.color'), ";\n    width: ").concat(dt('galleria.thumbnail.nav.button.size'), ";\n    height: ").concat(dt('galleria.thumbnail.nav.button.size'), ";\n    transition: background ").concat(dt('galleria.transition.duration'), ", color ").concat(dt('galleria.transition.duration'), ", outline-color ").concat(dt('galleria.transition.duration'), ";\n    outline-color: transparent;\n    border-radius: ").concat(dt('galleria.thumbnail.nav.button.border.radius'), ";\n}\n\n.p-galleria-thumbnail-nav-button:hover {\n    background: ").concat(dt('galleria.thumbnail.nav.button.hover.background'), ";\n    color: ").concat(dt('galleria.thumbnail.nav.button.hover.color'), ";\n}\n\n.p-galleria-thumbnail-nav-button:focus-visible {\n    box-shadow: ").concat(dt('galleria.thumbnail.nav.button.focus.ring.shadow'), ";\n    outline: ").concat(dt('galleria.thumbnail.nav.button.focus.ring.width'), " ").concat(dt('galleria.thumbnail.nav.button.focus.ring.style'), " ").concat(dt('galleria.thumbnail.nav.button.focus.ring.color'), ";\n    outline-offset: ").concat(dt('galleria.thumbnail.nav.button.focus.ring.offset'), ";\n}\n\n.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,\n.p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {\n    font-size: ").concat(dt('galleria.thumbnail.nav.button.icon.size'), ";\n    width: ").concat(dt('galleria.thumbnail.nav.button.icon.size'), ";\n    height: ").concat(dt('galleria.thumbnail.nav.button.icon.size'), ";\n}\n\n.p-galleria-thumbnails-content {\n    display: flex;\n    flex-direction: row;\n    background: ").concat(dt('galleria.thumbnails.content.background'), ";\n    padding: ").concat(dt('galleria.thumbnails.content.padding'), ";\n}\n\n.p-galleria-thumbnails-viewport {\n    overflow: hidden;\n    width: 100%;\n}\n\n.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),\n.p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {\n    transform: rotate(180deg);\n}\n\n.p-galleria-thumbnail-items {\n    display: flex;\n}\n\n.p-galleria-thumbnail-item {\n    overflow: auto;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    opacity: 0.5;\n}\n\n.p-galleria-thumbnail {\n    outline-color: transparent;\n}\n\n.p-galleria-thumbnail-item:hover {\n    opacity: 1;\n    transition: opacity 0.3s;\n}\n\n.p-galleria-thumbnail-item-current {\n    opacity: 1;\n}\n\n.p-galleria-thumbnails-left .p-galleria-content,\n.p-galleria-thumbnails-right .p-galleria-content {\n    flex-direction: row;\n}\n\n.p-galleria-thumbnails-left .p-galleria-items-container,\n.p-galleria-thumbnails-right .p-galleria-items-container {\n    flex-direction: row;\n}\n\n.p-galleria-thumbnails-left .p-galleria-items-container,\n.p-galleria-thumbnails-top .p-galleria-items-container {\n    order: 2;\n}\n\n.p-galleria-thumbnails-left .p-galleria-thumbnails,\n.p-galleria-thumbnails-top .p-galleria-thumbnails {\n    order: 1;\n}\n\n.p-galleria-thumbnails-left .p-galleria-thumbnails-content,\n.p-galleria-thumbnails-right .p-galleria-thumbnails-content {\n    flex-direction: column;\n    flex-grow: 1;\n}\n\n.p-galleria-thumbnails-left .p-galleria-thumbnail-items,\n.p-galleria-thumbnails-right .p-galleria-thumbnail-items {\n    flex-direction: column;\n    height: 100%;\n}\n\n.p-galleria-indicator-list {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: ").concat(dt('galleria.indicator.list.padding'), ";\n    gap: ").concat(dt('galleria.indicator.list.gap'), ";\n    margin: 0;\n    list-style: none;\n}\n\n.p-galleria-indicator-button {\n    display: inline-flex;\n    align-items: center;\n    background: ").concat(dt('galleria.indicator.button.background'), ";\n    width: ").concat(dt('galleria.indicator.button.width'), ";\n    height: ").concat(dt('galleria.indicator.button.height'), ";\n    transition: background ").concat(dt('galleria.transition.duration'), ", color ").concat(dt('galleria.transition.duration'), ", outline-color ").concat(dt('galleria.transition.duration'), ", box-shadow ").concat(dt('galleria.transition.duration'), ";\n    outline-color: transparent;\n    border-radius: ").concat(dt('galleria.indicator.button.border.radius'), ";\n    margin: 0;\n    padding: 0;\n    border: none;\n    user-select: none;\n    cursor: pointer;\n}\n\n.p-galleria-indicator-button:hover {\n    background: ").concat(dt('galleria.indicator.button.hover.background'), ";\n}\n\n.p-galleria-indicator-button:focus-visible {\n    box-shadow: ").concat(dt('galleria.indicator.button.focus.ring.shadow'), ";\n    outline: ").concat(dt('galleria.indicator.button.focus.ring.width'), " ").concat(dt('galleria.indicator.button.focus.ring.style'), " ").concat(dt('galleria.indicator.button.focus.ring.color'), ";\n    outline-offset: ").concat(dt('galleria.indicator.button.focus.ring.offset'), ";\n}\n\n.p-galleria-indicator-active .p-galleria-indicator-button {\n    background: ").concat(dt('galleria.indicator.button.active.background'), ";\n}\n\n.p-galleria-indicators-left .p-galleria-items-container,\n.p-galleria-indicators-right .p-galleria-items-container {\n    flex-direction: row;\n    align-items: center;\n}\n\n.p-galleria-indicators-left .p-galleria-items,\n.p-galleria-indicators-top .p-galleria-items {\n    order: 2;\n}\n\n.p-galleria-indicators-left .p-galleria-indicator-list,\n.p-galleria-indicators-top .p-galleria-indicator-list {\n    order: 1;\n}\n\n.p-galleria-indicators-left .p-galleria-indicator-list,\n.p-galleria-indicators-right .p-galleria-indicator-list {\n    flex-direction: column;\n}\n\n.p-galleria-inset-indicators .p-galleria-indicator-list {\n    position: absolute;\n    display: flex;\n    z-index: 1;\n    background: ").concat(dt('galleria.inset.indicator.list.background'), ";\n}\n\n.p-galleria-inset-indicators .p-galleria-indicator-button {\n    background: ").concat(dt('galleria.inset.indicator.button.background'), ";\n}\n\n.p-galleria-inset-indicators .p-galleria-indicator-button:hover {\n    background: ").concat(dt('galleria.inset.indicator.button.hover.background'), ";\n}\n\n.p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {\n    background: ").concat(dt('galleria.inset.indicator.button.active.background'), ";\n}\n\n.p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {\n    top: 0;\n    left: 0;\n    width: 100%;\n    align-items: flex-start;\n}\n\n.p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {\n    right: 0;\n    top: 0;\n    height: 100%;\n    align-items: flex-end;\n}\n\n.p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    align-items: flex-end;\n}\n\n.p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {\n    left: 0;\n    top: 0;\n    height: 100%;\n    align-items: flex-start;\n}\n\n.p-galleria-mask {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.p-galleria-close-button {\n    position: absolute !important;\n    top: 0;\n    right: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n    margin: ").concat(dt('galleria.close.button.gutter'), ";\n    background: ").concat(dt('galleria.close.button.background'), ";\n    color: ").concat(dt('galleria.close.button.color'), ";\n    width: ").concat(dt('galleria.close.button.size'), ";\n    height: ").concat(dt('galleria.close.button.size'), ";\n    padding: 0;\n    border: none;\n    user-select: none;\n    cursor: pointer;\n    border-radius: ").concat(dt('galleria.close.button.border.radius'), ";\n    outline-color: transparent;\n    transition: background ").concat(dt('galleria.transition.duration'), ", color ").concat(dt('galleria.transition.duration'), ", outline-color ").concat(dt('galleria.transition.duration'), ";\n}\n\n.p-galleria-close-icon {\n    font-size: ").concat(dt('galleria.close.button.icon.size'), ";\n    width: ").concat(dt('galleria.close.button.icon.size'), ";\n    height: ").concat(dt('galleria.close.button.icon.size'), ";\n}\n\n.p-galleria-close-button:hover {\n    background: ").concat(dt('galleria.close.button.hover.background'), ";\n    color: ").concat(dt('galleria.close.button.hover.color'), ";\n}\n\n.p-galleria-close-button:focus-visible {\n    box-shadow: ").concat(dt('galleria.close.button.focus.ring.shadow'), ";\n    outline: ").concat(dt('galleria.close.button.focus.ring.width'), " ").concat(dt('galleria.close.button.focus.ring.style'), " ").concat(dt('galleria.close.button.focus.ring.color'), ";\n    outline-offset: ").concat(dt('galleria.close.button.focus.ring.offset'), ";\n}\n\n.p-galleria-mask .p-galleria-nav-button {\n    position: fixed;\n    top: 50%;\n}\n\n.p-galleria-enter-active {\n    transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.p-galleria-leave-active {\n    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.p-galleria-enter-from,\n.p-galleria-leave-to {\n    opacity: 0;\n    transform: scale(0.7);\n}\n\n.p-galleria-enter-active .p-galleria-nav-button {\n    opacity: 0;\n}\n\n.p-items-hidden .p-galleria-thumbnail-item {\n    visibility: hidden;\n}\n\n.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {\n    visibility: visible;\n}\n");
};
var classes = {
  mask: 'p-galleria-mask p-overlay-mask p-overlay-mask-enter',
  root: function root(_ref2) {
    var instance = _ref2.instance;
    var thumbnailsPosClass = instance.$attrs.showThumbnails && instance.getPositionClass('p-galleria-thumbnails', instance.$attrs.thumbnailsPosition);
    var indicatorPosClass = instance.$attrs.showIndicators && instance.getPositionClass('p-galleria-indicators', instance.$attrs.indicatorsPosition);
    return ['p-galleria p-component', {
      'p-galleria-fullscreen': instance.$attrs.fullScreen,
      'p-galleria-inset-indicators': instance.$attrs.showIndicatorsOnItem,
      'p-galleria-hover-navigators': instance.$attrs.showItemNavigatorsOnHover && !instance.$attrs.fullScreen
    }, thumbnailsPosClass, indicatorPosClass];
  },
  closeButton: 'p-galleria-close-button',
  closeIcon: 'p-galleria-close-icon',
  header: 'p-galleria-header',
  content: 'p-galleria-content',
  footer: 'p-galleria-footer',
  itemsContainer: 'p-galleria-items-container',
  items: 'p-galleria-items',
  prevButton: function prevButton(_ref3) {
    var instance = _ref3.instance;
    return ['p-galleria-prev-button p-galleria-nav-button', {
      'p-disabled': instance.isNavBackwardDisabled()
    }];
  },
  prevIcon: 'p-galleria-prev-icon',
  item: 'p-galleria-item',
  nextButton: function nextButton(_ref4) {
    var instance = _ref4.instance;
    return ['p-galleria-next-button p-galleria-nav-button', {
      'p-disabled': instance.isNavForwardDisabled()
    }];
  },
  nextIcon: 'p-galleria-next-icon',
  caption: 'p-galleria-caption',
  indicatorList: 'p-galleria-indicator-list',
  indicator: function indicator(_ref5) {
    var instance = _ref5.instance,
      index = _ref5.index;
    return ['p-galleria-indicator', {
      'p-galleria-indicator-active': instance.isIndicatorItemActive(index)
    }];
  },
  indicatorButton: 'p-galleria-indicator-button',
  thumbnails: 'p-galleria-thumbnails',
  thumbnailContent: 'p-galleria-thumbnails-content',
  thumbnailPrevButton: function thumbnailPrevButton(_ref6) {
    var instance = _ref6.instance;
    return ['p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button', {
      'p-disabled': instance.isNavBackwardDisabled()
    }];
  },
  thumbnailPrevIcon: 'p-galleria-thumbnail-prev-icon',
  thumbnailsViewport: 'p-galleria-thumbnails-viewport',
  thumbnailItems: 'p-galleria-thumbnail-items',
  thumbnailItem: function thumbnailItem(_ref7) {
    var instance = _ref7.instance,
      index = _ref7.index,
      activeIndex = _ref7.activeIndex;
    return ['p-galleria-thumbnail-item', {
      'p-galleria-thumbnail-item-current': activeIndex === index,
      'p-galleria-thumbnail-item-active': instance.isItemActive(index),
      'p-galleria-thumbnail-item-start': instance.firstItemAciveIndex() === index,
      'p-galleria-thumbnail-item-end': instance.lastItemActiveIndex() === index
    }];
  },
  thumbnail: 'p-galleria-thumbnail',
  thumbnailNextButton: function thumbnailNextButton(_ref8) {
    var instance = _ref8.instance;
    return ['p-galleria-thumbnail-next-button p-galleria-thumbnail-nav-button', {
      'p-disabled': instance.isNavForwardDisabled()
    }];
  },
  thumbnailNextIcon: 'p-galleria-thumbnail-next-icon'
};
var GalleriaStyle = BaseStyle.extend({
  name: 'galleria',
  theme: theme,
  classes: classes
});

export { GalleriaStyle as default };
//# sourceMappingURL=index.mjs.map
