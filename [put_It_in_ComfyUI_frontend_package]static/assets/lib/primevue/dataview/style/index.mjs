import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-dataview {\n    border-color: ".concat(dt('dataview.border.color'), ";\n    border-width: ").concat(dt('dataview.border.width'), ";\n    border-style: solid;\n    border-radius: ").concat(dt('dataview.border.radius'), ";\n    padding: ").concat(dt('dataview.padding'), ";\n}\n\n.p-dataview-header {\n    background: ").concat(dt('dataview.header.background'), ";\n    color: ").concat(dt('dataview.header.color'), ";\n    border-color: ").concat(dt('dataview.header.border.color'), ";\n    border-width: ").concat(dt('dataview.header.border.width'), ";\n    border-style: solid;\n    padding: ").concat(dt('dataview.header.padding'), ";\n    border-radius: ").concat(dt('dataview.header.border.radius'), ";\n}\n\n.p-dataview-content {\n    background: ").concat(dt('dataview.content.background'), ";\n    border-color: ").concat(dt('dataview.content.border.color'), ";\n    border-width: ").concat(dt('dataview.content.border.width'), ";\n    border-style: solid;\n    color: ").concat(dt('dataview.content.color'), ";\n    padding: ").concat(dt('dataview.content.padding'), ";\n    border-radius: ").concat(dt('dataview.content.border.radius'), ";\n}\n\n.p-dataview-footer {\n    background: ").concat(dt('dataview.footer.background'), ";\n    color: ").concat(dt('dataview.footer.color'), ";\n    border-color: ").concat(dt('dataview.footer.border.color'), ";\n    border-width: ").concat(dt('dataview.footer.border.width'), ";\n    border-style: solid;\n    padding: ").concat(dt('dataview.footer.padding'), ";\n    border-radius: ").concat(dt('dataview.footer.border.radius'), ";\n}\n\n.p-dataview-paginator-top {\n    border-width: ").concat(dt('dataview.paginator.top.border.width'), ";\n    border-color: ").concat(dt('dataview.paginator.top.border.color'), ";\n    border-style: solid;\n}\n\n.p-dataview-paginator-bottom {\n    border-width: ").concat(dt('dataview.paginator.bottom.border.width'), ";\n    border-color: ").concat(dt('dataview.paginator.bottom.border.color'), ";\n    border-style: solid;\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-dataview p-component', {
      'p-dataview-list': props.layout === 'list',
      'p-dataview-grid': props.layout === 'grid'
    }];
  },
  header: 'p-dataview-header',
  pcPaginator: function pcPaginator(_ref3) {
    var position = _ref3.position;
    return 'p-dataview-paginator-' + position;
  },
  content: 'p-dataview-content',
  emptyMessage: 'p-dataview-empty-message',
  // TODO: remove?
  footer: 'p-dataview-footer'
};
var DataViewStyle = BaseStyle.extend({
  name: 'dataview',
  theme: theme,
  classes: classes
});

export { DataViewStyle as default };
//# sourceMappingURL=index.mjs.map
