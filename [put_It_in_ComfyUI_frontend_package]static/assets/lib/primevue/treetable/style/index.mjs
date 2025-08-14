import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-treetable {\n    position: relative;\n}\n\n.p-treetable-table {\n    border-spacing: 0;\n    border-collapse: separate;\n    width: 100%;\n}\n\n.p-treetable-scrollable > .p-treetable-table-container {\n    position: relative;\n}\n\n.p-treetable-scrollable-table > .p-treetable-thead {\n    inset-block-start: 0;\n    z-index: 1;\n}\n\n.p-treetable-scrollable-table > .p-treetable-frozen-tbody {\n    position: sticky;\n    z-index: 1;\n}\n\n.p-treetable-scrollable-table > .p-treetable-tfoot {\n    inset-block-end: 0;\n    z-index: 1;\n}\n\n.p-treetable-scrollable .p-treetable-frozen-column {\n    position: sticky;\n    background: ".concat(dt('treetable.header.cell.background'), ";\n}\n\n.p-treetable-scrollable th.p-treetable-frozen-column {\n    z-index: 1;\n}\n\n.p-treetable-scrollable > .p-treetable-table-container > .p-treetable-table > .p-treetable-thead {\n    background: ").concat(dt('treetable.header.cell.background'), ";\n}\n\n.p-treetable-scrollable > .p-treetable-table-container > .p-treetable-table > .p-treetable-tfoot {\n    background: ").concat(dt('treetable.footer.cell.background'), ";\n}\n\n.p-treetable-flex-scrollable {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.p-treetable-flex-scrollable > .p-treetable-table-container {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    height: 100%;\n}\n\n.p-treetable-scrollable-table > .p-treetable-tbody > .p-treetable-row-group-header {\n    position: sticky;\n    z-index: 1;\n}\n\n.p-treetable-resizable-table > .p-treetable-thead > tr > th,\n.p-treetable-resizable-table > .p-treetable-tfoot > tr > td,\n.p-treetable-resizable-table > .p-treetable-tbody > tr > td {\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.p-treetable-resizable-table > .p-treetable-thead > tr > th.p-treetable-resizable-column:not(.p-treetable-frozen-column) {\n    background-clip: padding-box;\n    position: relative;\n}\n\n.p-treetable-resizable-table-fit > .p-treetable-thead > tr > th.p-treetable-resizable-column:last-child .p-treetable-column-resizer {\n    display: none;\n}\n\n.p-treetable-column-resizer {\n    display: block;\n    position: absolute;\n    inset-block-start: 0;\n    inset-inline-end: 0;\n    margin: 0;\n    width: ").concat(dt('treetable.column.resizer.width'), ";\n    height: 100%;\n    padding: 0;\n    cursor: col-resize;\n    border: 1px solid transparent;\n}\n\n.p-treetable-column-header-content {\n    display: flex;\n    align-items: center;\n    gap: ").concat(dt('treetable.header.cell.gap'), ";\n}\n\n.p-treetable-column-resize-indicator {\n    width: ").concat(dt('treetable.resize.indicator.width'), ";\n    position: absolute;\n    z-index: 10;\n    display: none;\n    background: ").concat(dt('treetable.resize.indicator.color'), ";\n}\n\n.p-treetable-mask {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 2;\n}\n\n.p-treetable-paginator-top {\n    border-color: ").concat(dt('treetable.paginator.top.border.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('treetable.paginator.top.border.width'), ";\n}\n\n.p-treetable-paginator-bottom {\n    border-color: ").concat(dt('treetable.paginator.bottom.border.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('treetable.paginator.bottom.border.width'), ";\n}\n\n.p-treetable-header {\n    background: ").concat(dt('treetable.header.background'), ";\n    color: ").concat(dt('treetable.header.color'), ";\n    border-color: ").concat(dt('treetable.header.border.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('treetable.header.border.width'), ";\n    padding: ").concat(dt('treetable.header.padding'), ";\n}\n\n.p-treetable-footer {\n    background: ").concat(dt('treetable.footer.background'), ";\n    color: ").concat(dt('treetable.footer.color'), ";\n    border-color: ").concat(dt('treetable.footer.border.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('treetable.footer.border.width'), ";\n    padding: ").concat(dt('treetable.footer.padding'), ";\n}\n\n.p-treetable-header-cell {\n    padding: ").concat(dt('treetable.header.cell.padding'), ";\n    background: ").concat(dt('treetable.header.cell.background'), ";\n    border-color: ").concat(dt('treetable.header.cell.border.color'), ";\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    color: ").concat(dt('treetable.header.cell.color'), ";\n    font-weight: normal;\n    text-align: start;\n    transition: background ").concat(dt('treetable.transition.duration'), ", color ").concat(dt('treetable.transition.duration'), ", border-color ").concat(dt('treetable.transition.duration'), ",\n            outline-color ").concat(dt('treetable.transition.duration'), ", box-shadow ").concat(dt('treetable.transition.duration'), ";\n}\n\n.p-treetable-column-title {\n    font-weight: ").concat(dt('treetable.column.title.font.weight'), ";\n}\n\n.p-treetable-tbody > tr {\n    outline-color: transparent;\n    background: ").concat(dt('treetable.row.background'), ";\n    color: ").concat(dt('treetable.row.color'), ";\n    transition: background ").concat(dt('treetable.transition.duration'), ", color ").concat(dt('treetable.transition.duration'), ", border-color ").concat(dt('treetable.transition.duration'), ",\n            outline-color ").concat(dt('treetable.transition.duration'), ", box-shadow ").concat(dt('treetable.transition.duration'), ";\n}\n\n.p-treetable-tbody > tr > td {\n    text-align: start;\n    border-color: ").concat(dt('treetable.body.cell.border.color'), ";\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    padding: ").concat(dt('treetable.body.cell.padding'), ";\n}\n\n.p-treetable-hoverable .p-treetable-tbody > tr:not(.p-treetable-row-selected):hover {\n    background: ").concat(dt('treetable.row.hover.background'), ";\n    color: ").concat(dt('treetable.row.hover.color'), ";\n}\n\n.p-treetable-tbody > tr.p-treetable-row-selected {\n    background: ").concat(dt('treetable.row.selected.background'), ";\n    color: ").concat(dt('treetable.row.selected.color'), ";\n}\n\n.p-treetable-tbody > tr:has(+ .p-treetable-row-selected) > td {\n    border-block-end-color: ").concat(dt('treetable.body.cell.selected.border.color'), ";\n}\n\n.p-treetable-tbody > tr.p-treetable-row-selected > td {\n    border-block-end-color: ").concat(dt('treetable.body.cell.selected.border.color'), ";\n}\n\n.p-treetable-tbody > tr:focus-visible,\n.p-treetable-tbody > tr.p-treetable-contextmenu-row-selected {\n    box-shadow: ").concat(dt('treetable.row.focus.ring.shadow'), ";\n    outline: ").concat(dt('treetable.row.focus.ring.width'), " ").concat(dt('treetable.row.focus.ring.style'), " ").concat(dt('treetable.row.focus.ring.color'), ";\n    outline-offset: ").concat(dt('treetable.row.focus.ring.offset'), ";\n}\n\n.p-treetable-tfoot > tr > td {\n    text-align: start;\n    padding: ").concat(dt('treetable.footer.cell.padding'), ";\n    border-color: ").concat(dt('treetable.footer.cell.border.color'), ";\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    color: ").concat(dt('treetable.footer.cell.color'), ";\n    background: ").concat(dt('treetable.footer.cell.background'), ";\n}\n\n.p-treetable-column-footer {\n    font-weight: ").concat(dt('treetable.column.footer.font.weight'), ";\n}\n\n.p-treetable-sortable-column {\n    cursor: pointer;\n    user-select: none;\n    outline-color: transparent;\n}\n\n.p-treetable-column-title,\n.p-treetable-sort-icon,\n.p-treetable-sort-badge {\n    vertical-align: middle;\n}\n\n.p-treetable-sort-icon {\n    color: ").concat(dt('treetable.sort.icon.color'), ";\n    font-size: ").concat(dt('treetable.sort.icon.size'), ";\n    width: ").concat(dt('treetable.sort.icon.size'), ";\n    height: ").concat(dt('treetable.sort.icon.size'), ";\n    transition: color ").concat(dt('treetable.transition.duration'), ";\n}\n\n.p-treetable-sortable-column:not(.p-treetable-column-sorted):hover {\n    background: ").concat(dt('treetable.header.cell.hover.background'), ";\n    color: ").concat(dt('treetable.header.cell.hover.color'), ";\n}\n\n.p-treetable-sortable-column:not(.p-treetable-column-sorted):hover .p-treetable-sort-icon {\n    color: ").concat(dt('treetable.sort.icon.hover.color'), ";\n}\n\n.p-treetable-column-sorted {\n    background: ").concat(dt('treetable.header.cell.selected.background'), ";\n    color: ").concat(dt('treetable.header.cell.selected.color'), ";\n}\n\n.p-treetable-column-sorted .p-treetable-sort-icon {\n    color: ").concat(dt('treetable.header.cell.selected.color'), ";\n}\n\n.p-treetable-sortable-column:focus-visible {\n    box-shadow: ").concat(dt('treetable.header.cell.focus.ring.shadow'), ";\n    outline: ").concat(dt('treetable.header.cell.focus.ring.width'), " ").concat(dt('treetable.header.cell.focus.ring.style'), " ").concat(dt('treetable.header.cell.focus.ring.color'), ";\n    outline-offset: ").concat(dt('treetable.header.cell.focus.ring.offset'), ";\n}\n\n.p-treetable-hoverable .p-treetable-selectable-row {\n    cursor: pointer;\n}\n\n.p-treetable-loading-icon {\n    font-size: ").concat(dt('treetable.loading.icon.size'), ";\n    width: ").concat(dt('treetable.loading.icon.size'), ";\n    height: ").concat(dt('treetable.loading.icon.size'), ";\n}\n\n.p-treetable-gridlines .p-treetable-header {\n    border-width: 1px 1px 0 1px;\n}\n\n.p-treetable-gridlines .p-treetable-footer {\n    border-width: 0 1px 1px 1px;\n}\n\n.p-treetable-gridlines .p-treetable-paginator-top {\n    border-width: 1px 1px 0 1px;\n}\n\n.p-treetable-gridlines .p-treetable-paginator-bottom {\n    border-width: 0 1px 1px 1px;\n}\n\n.p-treetable-gridlines .p-treetable-thead > tr > th {\n    border-width: 1px 0 1px 1px;\n}\n\n.p-treetable-gridlines .p-treetable-thead > tr > th:last-child {\n    border-width: 1px;\n}\n\n.p-treetable-gridlines .p-treetable-tbody > tr > td {\n    border-width: 1px 0 0 1px;\n}\n\n.p-treetable-gridlines .p-treetable-tbody > tr > td:last-child {\n    border-width: 1px 1px 0 1px;\n}\n\n.p-treetable-gridlines .p-treetable-tbody > tr:last-child > td {\n    border-width: 1px 0 1px 1px;\n}\n\n.p-treetable-gridlines .p-treetable-tbody > tr:last-child > td:last-child {\n    border-width: 1px;\n}\n\n.p-treetable-gridlines .p-treetable-tfoot > tr > td {\n    border-width: 1px 0 1px 1px;\n}\n\n.p-treetable-gridlines .p-treetable-tfoot > tr > td:last-child {\n    border-width: 1px 1px 1px 1px;\n}\n\n.p-treetable.p-treetable-gridlines .p-treetable-thead + .p-treetable-tfoot > tr > td {\n    border-width: 0 0 1px 1px;\n}\n\n.p-treetable.p-treetable-gridlines .p-treetable-thead + .p-treetable-tfoot > tr > td:last-child {\n    border-width: 0 1px 1px 1px;\n}\n\n.p-treetable.p-treetable-gridlines:has(.p-treetable-thead):has(.p-treetable-tbody) .p-treetable-tbody > tr > td {\n    border-width: 0 0 1px 1px;\n}\n\n.p-treetable.p-treetable-gridlines:has(.p-treetable-thead):has(.p-treetable-tbody) .p-treetable-tbody > tr > td:last-child {\n    border-width: 0 1px 1px 1px;\n}\n\n.p-treetable.p-treetable-gridlines:has(.p-treetable-tbody):has(.p-treetable-tfoot) .p-treetable-tbody > tr:last-child > td {\n    border-width: 0 0 0 1px;\n}\n\n.p-treetable.p-treetable-gridlines:has(.p-treetable-tbody):has(.p-treetable-tfoot) .p-treetable-tbody > tr:last-child > td:last-child {\n    border-width: 0 1px 0 1px;\n}\n\n.p-treetable.p-treetable-sm .p-treetable-header {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-treetable.p-treetable-sm .p-treetable-thead > tr > th {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-treetable.p-treetable-sm .p-treetable-footer {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-treetable.p-treetable-lg .p-treetable-header {\n    padding: 0.9375rem 1.25rem;\n}\n\n.p-treetable.p-treetable-lg .p-treetable-thead > tr > th {\n    padding: 0.9375rem 1.25rem;\n}\n\n.p-treetable.p-treetable-lg .p-treetable-tbody > tr > td {\n    padding: 0.9375rem 1.25rem;\n}\n\n.p-treetable.p-treetable-lg .p-treetable-tfoot > tr > td {\n    padding: 0.9375rem 1.25rem;\n}\n\n.p-treetable.p-treetable-lg .p-treetable-footer {\n    padding: 0.9375rem 1.25rem;\n}\n\n.p-treetable-body-cell-content {\n    display: flex;\n    align-items: center;\n    gap: ").concat(dt('treetable.body.cell.gap'), ";\n}\n\n.p-treetable-tbody > tr.p-treetable-row-selected .p-treetable-node-toggle-button {\n    color: inherit;\n}\n\n.p-treetable-node-toggle-button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    width: ").concat(dt('treetable.node.toggle.button.size'), ";\n    height: ").concat(dt('treetable.node.toggle.button.size'), ";\n    color: ").concat(dt('treetable.node.toggle.button.color'), ";\n    border: 0 none;\n    background: transparent;\n    cursor: pointer;\n    border-radius: ").concat(dt('treetable.node.toggle.button.border.radius'), ";\n    transition: background ").concat(dt('treetable.transition.duration'), ", color ").concat(dt('treetable.transition.duration'), ", border-color ").concat(dt('treetable.transition.duration'), ",\n            outline-color ").concat(dt('treetable.transition.duration'), ", box-shadow ").concat(dt('treetable.transition.duration'), ";\n    outline-color: transparent;\n    user-select: none;\n}\n\n.p-treetable-node-toggle-button:enabled:hover {\n    color: ").concat(dt('treetable.node.toggle.button.hover.color'), ";\n    background: ").concat(dt('treetable.node.toggle.button.hover.background'), ";\n}\n\n.p-treetable-tbody > tr.p-treetable-row-selected .p-treetable-node-toggle-button:hover {\n    background: ").concat(dt('treetable.node.toggle.button.selected.hover.background'), ";\n    color: ").concat(dt('treetable.node.toggle.button.selected.hover.color'), ";\n}\n\n.p-treetable-node-toggle-button:focus-visible {\n    box-shadow: ").concat(dt('treetable.node.toggle.button.focus.ring.shadow'), ";\n    outline: ").concat(dt('treetable.node.toggle.button.focus.ring.width'), " ").concat(dt('treetable.node.toggle.button.focus.ring.style'), " ").concat(dt('treetable.node.toggle.button.focus.ring.color'), ";\n    outline-offset: ").concat(dt('treetable.node.toggle.button.focus.ring.offset'), ";\n}\n\n.p-treetable-node-toggle-icon:dir(rtl) {\n    transform: rotate(180deg);\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var instance = _ref2.instance,
      props = _ref2.props;
    return ['p-treetable p-component', {
      'p-treetable-hoverable': props.rowHover || instance.rowSelectionMode,
      'p-treetable-resizable': props.resizableColumns,
      'p-treetable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
      'p-treetable-scrollable': props.scrollable,
      'p-treetable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
      'p-treetable-gridlines': props.showGridlines,
      'p-treetable-sm': props.size === 'small',
      'p-treetable-lg': props.size === 'large'
    }];
  },
  loading: 'p-treetable-loading',
  //TODO: required?
  mask: 'p-treetable-mask p-overlay-mask',
  loadingIcon: 'p-treetable-loading-icon',
  header: 'p-treetable-header',
  paginator: function paginator(_ref3) {
    var position = _ref3.position;
    return 'p-treetable-paginator-' + position;
  },
  tableContainer: 'p-treetable-table-container',
  table: function table(_ref4) {
    var props = _ref4.props;
    return ['p-treetable-table', {
      'p-treetable-scrollable-table': props.scrollable,
      'p-treetable-resizable-table': props.resizableColumns,
      'p-treetable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
    }];
  },
  thead: 'p-treetable-thead',
  headerCell: function headerCell(_ref5) {
    var instance = _ref5.instance,
      props = _ref5.props,
      context = _ref5.context;
    return ['p-treetable-header-cell', {
      'p-treetable-sortable-column': instance.columnProp('sortable'),
      'p-treetable-resizable-column': props.resizableColumns,
      'p-treetable-column-sorted': context === null || context === void 0 ? void 0 : context.sorted,
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  columnResizer: 'p-treetable-column-resizer',
  columnHeaderContent: 'p-treetable-column-header-content',
  columnTitle: 'p-treetable-column-title',
  sortIcon: 'p-treetable-sort-icon',
  pcSortBadge: 'p-treetable-sort-badge',
  tbody: 'p-treetable-tbody',
  row: function row(_ref6) {
    var props = _ref6.props,
      instance = _ref6.instance;
    return [{
      'p-treetable-row-selected': instance.selected,
      'p-treetable-contextmenu-row-selected': props.contextMenuSelection && instance.isSelectedWithContextMenu
    }];
  },
  bodyCell: function bodyCell(_ref7) {
    var instance = _ref7.instance;
    return [{
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  bodyCellContent: function bodyCellContent(_ref8) {
    var instance = _ref8.instance;
    return ['p-treetable-body-cell-content', {
      'p-treetable-body-cell-content-expander': instance.columnProp('expander')
    }];
  },
  nodeToggleButton: 'p-treetable-node-toggle-button',
  nodeToggleIcon: 'p-treetable-node-toggle-icon',
  pcNodeCheckbox: 'p-treetable-node-checkbox',
  emptyMessage: 'p-treetable-empty-message',
  tfoot: 'p-treetable-tfoot',
  footerCell: function footerCell(_ref9) {
    var instance = _ref9.instance;
    return [{
      'p-treetable-frozen-column': instance.columnProp('frozen')
    }];
  },
  footer: 'p-treetable-footer',
  columnResizeIndicator: 'p-treetable-column-resize-indicator'
};
var inlineStyles = {
  tableContainer: {
    overflow: 'auto'
  },
  thead: {
    position: 'sticky'
  },
  tfoot: {
    position: 'sticky'
  }
};
var TreeTableStyle = BaseStyle.extend({
  name: 'treetable',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { TreeTableStyle as default };
//# sourceMappingURL=index.mjs.map
