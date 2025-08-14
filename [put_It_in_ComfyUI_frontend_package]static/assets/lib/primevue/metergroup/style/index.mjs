import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-metergroup {\n    display: flex;\n    gap: ".concat(dt('metergroup.gap'), ";\n}\n\n.p-metergroup-meters {\n    display: flex;\n    background: ").concat(dt('metergroup.meters.background'), ";\n    border-radius: ").concat(dt('metergroup.border.radius'), ";\n}\n\n.p-metergroup-label-list {\n    display: flex;\n    flex-wrap: wrap;\n    margin: 0;\n    padding: 0;\n    list-style-type: none;\n}\n\n.p-metergroup-label {\n    display: inline-flex;\n    align-items: center;\n    gap: ").concat(dt('metergroup.label.gap'), ";\n}\n\n.p-metergroup-label-marker {\n    display: inline-flex;\n    width: ").concat(dt('metergroup.label.marker.size'), ";\n    height: ").concat(dt('metergroup.label.marker.size'), ";\n    border-radius: 100%;\n}\n\n.p-metergroup-label-icon {\n    font-size: ").concat(dt('metergroup.label.icon.size'), ";\n    width: ").concat(dt('metergroup.label.icon.size'), ";\n    height: ").concat(dt('metergroup.label.icon.size'), ";\n}\n\n.p-metergroup-horizontal {\n    flex-direction: column;\n}\n\n.p-metergroup-label-list-horizontal {\n    gap: ").concat(dt('metergroup.label.list.horizontal.gap'), ";\n}\n\n.p-metergroup-horizontal .p-metergroup-meters {\n    height: ").concat(dt('metergroup.meters.size'), ";\n}\n\n.p-metergroup-horizontal .p-metergroup-meter:first-of-type {\n    border-start-start-radius: ").concat(dt('metergroup.border.radius'), ";\n    border-end-start-radius: ").concat(dt('metergroup.border.radius'), ";\n}\n\n.p-metergroup-horizontal .p-metergroup-meter:last-of-type {\n    border-start-end-radius: ").concat(dt('metergroup.border.radius'), ";\n    border-end-end-radius: ").concat(dt('metergroup.border.radius'), ";\n}\n\n.p-metergroup-vertical {\n    flex-direction: row;\n}\n\n.p-metergroup-label-list-vertical {\n    flex-direction: column;\n    gap: ").concat(dt('metergroup.label.list.vertical.gap'), ";\n}\n\n.p-metergroup-vertical .p-metergroup-meters {\n    flex-direction: column;\n    width: ").concat(dt('metergroup.meters.size'), ";\n    height: 100%;\n}\n\n.p-metergroup-vertical .p-metergroup-label-list {\n    align-items: flex-start;\n}\n\n.p-metergroup-vertical .p-metergroup-meter:first-of-type {\n    border-start-start-radius: ").concat(dt('metergroup.border.radius'), ";\n    border-start-end-radius: ").concat(dt('metergroup.border.radius'), ";\n}\n\n.p-metergroup-vertical .p-metergroup-meter:last-of-type {\n    border-end-start-radius: ").concat(dt('metergroup.border.radius'), ";\n    border-end-end-radius: ").concat(dt('metergroup.border.radius'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-metergroup p-component', {
      'p-metergroup-horizontal': props.orientation === 'horizontal',
      'p-metergroup-vertical': props.orientation === 'vertical'
    }];
  },
  meters: 'p-metergroup-meters',
  meter: 'p-metergroup-meter',
  labelList: function labelList(_ref3) {
    var props = _ref3.props;
    return ['p-metergroup-label-list', {
      'p-metergroup-label-list-vertical': props.labelOrientation === 'vertical',
      'p-metergroup-label-list-horizontal': props.labelOrientation === 'horizontal'
    }];
  },
  label: 'p-metergroup-label',
  labelIcon: 'p-metergroup-label-icon',
  labelMarker: 'p-metergroup-label-marker',
  labelText: 'p-metergroup-label-text'
};
var MeterGroupStyle = BaseStyle.extend({
  name: 'metergroup',
  theme: theme,
  classes: classes
});

export { MeterGroupStyle as default };
//# sourceMappingURL=index.mjs.map
