import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-tabview-tablist-container {\n    position: relative;\n}\n\n.p-tabview-scrollable > .p-tabview-tablist-container {\n    overflow: hidden;\n}\n\n.p-tabview-tablist-scroll-container {\n    overflow-x: auto;\n    overflow-y: hidden;\n    scroll-behavior: smooth;\n    scrollbar-width: none;\n    overscroll-behavior: contain auto;\n}\n\n.p-tabview-tablist-scroll-container::-webkit-scrollbar {\n    display: none;\n}\n\n.p-tabview-tablist {\n    display: flex;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n    flex: 1 1 auto;\n    background: ".concat(dt('tabview.tab.list.background'), ";\n    border: 1px solid ").concat(dt('tabview.tab.list.border.color'), ";\n    border-width: 0 0 1px 0;\n    position: relative;\n}\n\n.p-tabview-tab-header {\n    cursor: pointer;\n    user-select: none;\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    position: relative;\n    overflow: hidden;\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    border-color: transparent transparent ").concat(dt('tabview.tab.border.color'), " transparent;\n    color: ").concat(dt('tabview.tab.color'), ";\n    padding: 1rem 1.125rem;\n    font-weight: 600;\n    border-top-right-radius: ").concat(dt('border.radius.md'), ";\n    border-top-left-radius: ").concat(dt('border.radius.md'), ";\n    transition: color ").concat(dt('tabview.transition.duration'), ", outline-color ").concat(dt('tabview.transition.duration'), ";\n    margin: 0 0 -1px 0;\n    outline-color: transparent;\n}\n\n.p-tabview-tablist-item:not(.p-disabled) .p-tabview-tab-header:focus-visible {\n    outline: ").concat(dt('focus.ring.width'), " ").concat(dt('focus.ring.style'), " ").concat(dt('focus.ring.color'), ";\n    outline-offset: -1px;\n}\n\n.p-tabview-tablist-item:not(.p-highlight):not(.p-disabled):hover > .p-tabview-tab-header {\n    color: ").concat(dt('tabview.tab.hover.color'), ";\n}\n\n.p-tabview-tablist-item.p-highlight > .p-tabview-tab-header {\n    color: ").concat(dt('tabview.tab.active.color'), ";\n}\n\n.p-tabview-tab-title {\n    line-height: 1;\n    white-space: nowrap;\n}\n\n.p-tabview-next-button,\n.p-tabview-prev-button {\n    position: absolute;\n    top: 0;\n    margin: 0;\n    padding: 0;\n    z-index: 2;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background: ").concat(dt('tabview.nav.button.background'), ";\n    color: ").concat(dt('tabview.nav.button.color'), ";\n    width: 2.5rem;\n    border-radius: 0;\n    outline-color: transparent;\n    transition: color ").concat(dt('tabview.transition.duration'), ", outline-color ").concat(dt('tabview.transition.duration'), ";\n    box-shadow: ").concat(dt('tabview.nav.button.shadow'), ";\n    border: none;\n    cursor: pointer;\n    user-select: none;\n}\n\n.p-tabview-next-button:focus-visible,\n.p-tabview-prev-button:focus-visible {\n    outline: ").concat(dt('focus.ring.width'), " ").concat(dt('focus.ring.style'), " ").concat(dt('focus.ring.color'), ";\n    outline-offset: ").concat(dt('focus.ring.offset'), ";\n}\n\n.p-tabview-next-button:hover,\n.p-tabview-prev-button:hover {\n    color: ").concat(dt('tabview.nav.button.hover.color'), ";\n}\n\n.p-tabview-prev-button {\n    left: 0;\n}\n\n.p-tabview-next-button {\n    right: 0;\n}\n\n.p-tabview-panels {\n    background: ").concat(dt('tabview.tab.panel.background'), ";\n    color: ").concat(dt('tabview.tab.panel.color'), ";\n    padding: 0.875rem 1.125rem 1.125rem 1.125rem;\n}\n\n.p-tabview-ink-bar {\n    z-index: 1;\n    display: block;\n    position: absolute;\n    bottom: -1px;\n    height: 1px;\n    background: ").concat(dt('tabview.tab.active.border.color'), ";\n    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-tabview p-component', {
      'p-tabview-scrollable': props.scrollable
    }];
  },
  navContainer: 'p-tabview-tablist-container',
  prevButton: 'p-tabview-prev-button',
  navContent: 'p-tabview-tablist-scroll-container',
  nav: 'p-tabview-tablist',
  tab: {
    header: function header(_ref3) {
      var instance = _ref3.instance,
        tab = _ref3.tab,
        index = _ref3.index;
      return ['p-tabview-tablist-item', instance.getTabProp(tab, 'headerClass'), {
        'p-tabview-tablist-item-active': instance.d_activeIndex === index,
        'p-disabled': instance.getTabProp(tab, 'disabled')
      }];
    },
    headerAction: 'p-tabview-tab-header',
    headerTitle: 'p-tabview-tab-title',
    content: function content(_ref4) {
      var instance = _ref4.instance,
        tab = _ref4.tab;
      return ['p-tabview-panel', instance.getTabProp(tab, 'contentClass')];
    }
  },
  inkbar: 'p-tabview-ink-bar',
  nextButton: 'p-tabview-next-button',
  panelContainer: 'p-tabview-panels'
};
var TabViewStyle = BaseStyle.extend({
  name: 'tabview',
  theme: theme,
  classes: classes
});

export { TabViewStyle as default };
//# sourceMappingURL=index.mjs.map
