import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-steps {\n    position: relative;\n}\n\n.p-steps-list {\n    padding: 0;\n    margin: 0;\n    list-style-type: none;\n    display: flex;\n}\n\n.p-steps-item {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    flex: 1 1 auto;\n}\n\n.p-steps-item.p-disabled,\n.p-steps-item.p-disabled * {\n    opacity: 1;\n    pointer-events: auto;\n    user-select: auto;\n    cursor: auto;\n}\n\n.p-steps-item:before {\n    content: \" \";\n    border-top: 2px solid ".concat(dt('steps.separator.background'), ";\n    width: 100%;\n    top: 50%;\n    left: 0;\n    display: block;\n    position: absolute;\n    margin-top: calc(-1rem + 1px);\n}\n\n.p-steps-item:first-child::before {\n    width: calc(50% + 1rem);\n    transform: translateX(100%);\n}\n\n.p-steps-item:last-child::before {\n    width: 50%;\n}\n\n.p-steps-item-link {\n    display: inline-flex;\n    flex-direction: column;\n    align-items: center;\n    overflow: hidden;\n    text-decoration: none;\n    transition: outline-color ").concat(dt('steps.transition.duration'), ", box-shadow ").concat(dt('steps.transition.duration'), ";\n    border-radius: ").concat(dt('steps.item.link.border.radius'), ";\n    outline-color: transparent;\n    gap: ").concat(dt('steps.item.link.gap'), ";\n}\n\n.p-steps-item-link:not(.p-disabled):focus-visible {\n    box-shadow: ").concat(dt('steps.item.link.focus.ring.shadow'), ";\n    outline: ").concat(dt('steps.item.link.focus.ring.width'), " ").concat(dt('steps.item.link.focus.ring.style'), " ").concat(dt('steps.item.link.focus.ring.color'), ";\n    outline-offset: ").concat(dt('steps.item.link.focus.ring.offset'), ";\n}\n\n.p-steps-item-label {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 100%;\n    color: ").concat(dt('steps.item.label.color'), ";\n    display: block;\n    font-weight: ").concat(dt('steps.item.label.font.weight'), ";\n}\n\n.p-steps-item-number {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: ").concat(dt('steps.item.number.color'), ";\n    border: 2px solid ").concat(dt('steps.item.number.border.color'), ";\n    background: ").concat(dt('steps.item.number.background'), ";\n    min-width: ").concat(dt('steps.item.number.size'), ";\n    height: ").concat(dt('steps.item.number.size'), ";\n    line-height: ").concat(dt('steps.item.number.size'), ";\n    font-size: ").concat(dt('steps.item.number.font.size'), ";\n    z-index: 1;\n    border-radius: ").concat(dt('steps.item.number.border.radius'), ";\n    position: relative;\n    font-weight: ").concat(dt('steps.item.number.font.weight'), ";\n}\n\n.p-steps-item-number::after {\n    content: \" \";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border-radius: ").concat(dt('steps.item.number.border.radius'), ";\n    box-shadow: ").concat(dt('steps.item.number.shadow'), ";\n}\n\n.p-steps:not(.p-readonly) .p-steps-item {\n    cursor: pointer;\n}\n\n.p-steps-item-active .p-steps-item-number {\n    background: ").concat(dt('steps.item.number.active.background'), ";\n    border-color: ").concat(dt('steps.item.number.active.border.color'), ";\n    color: ").concat(dt('steps.item.number.active.color'), ";\n}\n\n.p-steps-item-active .p-steps-item-label {\n    color: ").concat(dt('steps.item.label.active.color'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-steps p-component', {
      'p-readonly': props.readonly
    }];
  },
  list: 'p-steps-list',
  item: function item(_ref3) {
    var instance = _ref3.instance,
      _item = _ref3.item,
      index = _ref3.index;
    return ['p-steps-item', {
      'p-steps-item-active': instance.isActive(index),
      'p-disabled': instance.isItemDisabled(_item, index)
    }];
  },
  itemLink: 'p-steps-item-link',
  itemNumber: 'p-steps-item-number',
  itemLabel: 'p-steps-item-label'
};
var StepsStyle = BaseStyle.extend({
  name: 'steps',
  theme: theme,
  classes: classes
});

export { StepsStyle as default };
//# sourceMappingURL=index.mjs.map
