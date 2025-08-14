import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-panel {\n    border: 1px solid ".concat(dt('panel.border.color'), ";\n    border-radius: ").concat(dt('panel.border.radius'), ";\n    background: ").concat(dt('panel.background'), ";\n    color: ").concat(dt('panel.color'), ";\n}\n\n.p-panel-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: ").concat(dt('panel.header.padding'), ";\n    background: ").concat(dt('panel.header.background'), ";\n    color: ").concat(dt('panel.header.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('panel.header.border.width'), ";\n    border-color: ").concat(dt('panel.header.border.color'), ";\n    border-radius: ").concat(dt('panel.header.border.radius'), ";\n}\n\n.p-panel-toggleable .p-panel-header {\n    padding: ").concat(dt('panel.toggleable.header.padding'), ";\n}\n\n.p-panel-title {\n    line-height: 1;\n    font-weight: ").concat(dt('panel.title.font.weight'), ";\n}\n\n.p-panel-content {\n    padding: ").concat(dt('panel.content.padding'), ";\n}\n\n.p-panel-footer {\n    padding: ").concat(dt('panel.footer.padding'), ";\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-panel p-component', {
      'p-panel-toggleable': props.toggleable
    }];
  },
  header: 'p-panel-header',
  title: 'p-panel-title',
  headerActions: 'p-panel-header-actions',
  pcToggleButton: 'p-panel-toggle-button',
  contentContainer: 'p-panel-content-container',
  content: 'p-panel-content',
  footer: 'p-panel-footer'
};
var PanelStyle = BaseStyle.extend({
  name: 'panel',
  theme: theme,
  classes: classes
});

export { PanelStyle as default };
//# sourceMappingURL=index.mjs.map
