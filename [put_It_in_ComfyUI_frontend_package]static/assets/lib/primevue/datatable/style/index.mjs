import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-datatable {\n    position: relative;\n}\n\n.p-datatable-table {\n    border-spacing: 0;\n    border-collapse: separate;\n    width: 100%;\n}\n\n.p-datatable-scrollable > .p-datatable-table-container {\n    position: relative;\n}\n\n.p-datatable-scrollable-table > .p-datatable-thead {\n    inset-block-start: 0;\n    z-index: 1;\n}\n\n.p-datatable-scrollable-table > .p-datatable-frozen-tbody {\n    position: sticky;\n    z-index: 1;\n}\n\n.p-datatable-scrollable-table > .p-datatable-tfoot {\n    inset-block-end: 0;\n    z-index: 1;\n}\n\n.p-datatable-scrollable .p-datatable-frozen-column {\n    position: sticky;\n    background: ".concat(dt('datatable.header.cell.background'), ";\n}\n\n.p-datatable-scrollable th.p-datatable-frozen-column {\n    z-index: 1;\n}\n\n.p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-thead,\n.p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-thead {\n    background: ").concat(dt('datatable.header.cell.background'), ";\n}\n\n.p-datatable-scrollable > .p-datatable-table-container > .p-datatable-table > .p-datatable-tfoot,\n.p-datatable-scrollable > .p-datatable-table-container > .p-virtualscroller > .p-datatable-table > .p-datatable-tfoot {\n    background: ").concat(dt('datatable.footer.cell.background'), ";\n}\n\n.p-datatable-flex-scrollable {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n\n.p-datatable-flex-scrollable > .p-datatable-table-container {\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    height: 100%;\n}\n\n.p-datatable-scrollable-table > .p-datatable-tbody > .p-datatable-row-group-header {\n    position: sticky;\n    z-index: 1;\n}\n\n.p-datatable-resizable-table > .p-datatable-thead > tr > th,\n.p-datatable-resizable-table > .p-datatable-tfoot > tr > td,\n.p-datatable-resizable-table > .p-datatable-tbody > tr > td {\n    overflow: hidden;\n    white-space: nowrap;\n}\n\n.p-datatable-resizable-table > .p-datatable-thead > tr > th.p-datatable-resizable-column:not(.p-datatable-frozen-column) {\n    background-clip: padding-box;\n    position: relative;\n}\n\n.p-datatable-resizable-table-fit > .p-datatable-thead > tr > th.p-datatable-resizable-column:last-child .p-datatable-column-resizer {\n    display: none;\n}\n\n.p-datatable-column-resizer {\n    display: block;\n    position: absolute;\n    inset-block-start: 0;\n    inset-inline-end: 0;\n    margin: 0;\n    width: ").concat(dt('datatable.column.resizer.width'), ";\n    height: 100%;\n    padding: 0;\n    cursor: col-resize;\n    border: 1px solid transparent;\n}\n\n.p-datatable-column-header-content {\n    display: flex;\n    align-items: center;\n    gap: ").concat(dt('datatable.header.cell.gap'), ";\n}\n\n.p-datatable-column-resize-indicator {\n    width: ").concat(dt('datatable.resize.indicator.width'), ";\n    position: absolute;\n    z-index: 10;\n    display: none;\n    background: ").concat(dt('datatable.resize.indicator.color'), ";\n}\n\n.p-datatable-row-reorder-indicator-up,\n.p-datatable-row-reorder-indicator-down {\n    position: absolute;\n    display: none;\n}\n\n.p-datatable-reorderable-column,\n.p-datatable-reorderable-row-handle {\n    cursor: move;\n}\n\n.p-datatable-mask {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 2;\n}\n\n.p-datatable-inline-filter {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    gap: ").concat(dt('datatable.filter.inline.gap'), ";\n}\n\n.p-datatable-inline-filter .p-datatable-filter-element-container {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n.p-datatable-filter-overlay {\n    background: ").concat(dt('datatable.filter.overlay.select.background'), ";\n    color: ").concat(dt('datatable.filter.overlay.select.color'), ";\n    border: 1px solid ").concat(dt('datatable.filter.overlay.select.border.color'), ";\n    border-radius: ").concat(dt('datatable.filter.overlay.select.border.radius'), ";\n    box-shadow: ").concat(dt('datatable.filter.overlay.select.shadow'), ";\n    min-width: 12.5rem;\n}\n\n.p-datatable-filter-constraint-list {\n    margin: 0;\n    list-style: none;\n    display: flex;\n    flex-direction: column;\n    padding: ").concat(dt('datatable.filter.constraint.list.padding'), ";\n    gap: ").concat(dt('datatable.filter.constraint.list.gap'), ";\n}\n\n.p-datatable-filter-constraint {\n    padding: ").concat(dt('datatable.filter.constraint.padding'), ";\n    color: ").concat(dt('datatable.filter.constraint.color'), ";\n    border-radius: ").concat(dt('datatable.filter.constraint.border.radius'), ";\n    cursor: pointer;\n    transition: background ").concat(dt('datatable.transition.duration'), ", color ").concat(dt('datatable.transition.duration'), ", border-color ").concat(dt('datatable.transition.duration'), ",\n        box-shadow ").concat(dt('datatable.transition.duration'), ";\n}\n\n.p-datatable-filter-constraint-selected {\n    background: ").concat(dt('datatable.filter.constraint.selected.background'), ";\n    color: ").concat(dt('datatable.filter.constraint.selected.color'), ";\n}\n\n.p-datatable-filter-constraint:not(.p-datatable-filter-constraint-selected):not(.p-disabled):hover {\n    background: ").concat(dt('datatable.filter.constraint.focus.background'), ";\n    color: ").concat(dt('datatable.filter.constraint.focus.color'), ";\n}\n\n.p-datatable-filter-constraint:focus-visible {\n    outline: 0 none;\n    background: ").concat(dt('datatable.filter.constraint.focus.background'), ";\n    color: ").concat(dt('datatable.filter.constraint.focus.color'), ";\n}\n\n.p-datatable-filter-constraint-selected:focus-visible {\n    outline: 0 none;\n    background: ").concat(dt('datatable.filter.constraint.selected.focus.background'), ";\n    color: ").concat(dt('datatable.filter.constraint.selected.focus.color'), ";\n}\n\n.p-datatable-filter-constraint-separator {\n    border-block-start: 1px solid ").concat(dt('datatable.filter.constraint.separator.border.color'), ";\n}\n\n.p-datatable-popover-filter {\n    display: inline-flex;\n    margin-inline-start: auto;\n}\n\n.p-datatable-filter-overlay-popover {\n    background: ").concat(dt('datatable.filter.overlay.popover.background'), ";\n    color: ").concat(dt('datatable.filter.overlay.popover.color'), ";\n    border: 1px solid ").concat(dt('datatable.filter.overlay.popover.border.color'), ";\n    border-radius: ").concat(dt('datatable.filter.overlay.popover.border.radius'), ";\n    box-shadow: ").concat(dt('datatable.filter.overlay.popover.shadow'), ";\n    min-width: 12.5rem;\n    padding: ").concat(dt('datatable.filter.overlay.popover.padding'), ";\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('datatable.filter.overlay.popover.gap'), ";\n}\n\n.p-datatable-filter-operator-dropdown {\n    width: 100%;\n}\n\n.p-datatable-filter-rule-list,\n.p-datatable-filter-rule {\n    display: flex;\n    flex-direction: column;\n    gap: ").concat(dt('datatable.filter.overlay.popover.gap'), ";\n}\n\n.p-datatable-filter-rule {\n    border-block-end: 1px solid ").concat(dt('datatable.filter.rule.border.color'), ";\n    padding-bottom: ").concat(dt('datatable.filter.overlay.popover.gap'), ";\n}\n\n.p-datatable-filter-rule:last-child {\n    border-block-end: 0 none;\n    padding-bottom: 0;\n}\n\n.p-datatable-filter-add-rule-button {\n    width: 100%;\n}\n\n.p-datatable-filter-remove-rule-button {\n    width: 100%;\n}\n\n.p-datatable-filter-buttonbar {\n    padding: 0;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.p-datatable-virtualscroller-spacer {\n    display: flex;\n}\n\n.p-datatable .p-virtualscroller .p-virtualscroller-loading {\n    transform: none !important;\n    min-height: 0;\n    position: sticky;\n    inset-block-start: 0;\n    inset-inline-start: 0;\n}\n\n.p-datatable-paginator-top {\n    border-color: ").concat(dt('datatable.paginator.top.border.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('datatable.paginator.top.border.width'), ";\n}\n\n.p-datatable-paginator-bottom {\n    border-color: ").concat(dt('datatable.paginator.bottom.border.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('datatable.paginator.bottom.border.width'), ";\n}\n\n.p-datatable-header {\n    background: ").concat(dt('datatable.header.background'), ";\n    color: ").concat(dt('datatable.header.color'), ";\n    border-color: ").concat(dt('datatable.header.border.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('datatable.header.border.width'), ";\n    padding: ").concat(dt('datatable.header.padding'), ";\n}\n\n.p-datatable-footer {\n    background: ").concat(dt('datatable.footer.background'), ";\n    color: ").concat(dt('datatable.footer.color'), ";\n    border-color: ").concat(dt('datatable.footer.border.color'), ";\n    border-style: solid;\n    border-width: ").concat(dt('datatable.footer.border.width'), ";\n    padding: ").concat(dt('datatable.footer.padding'), ";\n}\n\n.p-datatable-header-cell {\n    padding: ").concat(dt('datatable.header.cell.padding'), ";\n    background: ").concat(dt('datatable.header.cell.background'), ";\n    border-color: ").concat(dt('datatable.header.cell.border.color'), ";\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    color: ").concat(dt('datatable.header.cell.color'), ";\n    font-weight: normal;\n    text-align: start;\n    transition: background ").concat(dt('datatable.transition.duration'), ", color ").concat(dt('datatable.transition.duration'), ", border-color ").concat(dt('datatable.transition.duration'), ",\n            outline-color ").concat(dt('datatable.transition.duration'), ", box-shadow ").concat(dt('datatable.transition.duration'), ";\n}\n\n.p-datatable-column-title {\n    font-weight: ").concat(dt('datatable.column.title.font.weight'), ";\n}\n\n.p-datatable-tbody > tr {\n    outline-color: transparent;\n    background: ").concat(dt('datatable.row.background'), ";\n    color: ").concat(dt('datatable.row.color'), ";\n    transition: background ").concat(dt('datatable.transition.duration'), ", color ").concat(dt('datatable.transition.duration'), ", border-color ").concat(dt('datatable.transition.duration'), ",\n            outline-color ").concat(dt('datatable.transition.duration'), ", box-shadow ").concat(dt('datatable.transition.duration'), ";\n}\n\n.p-datatable-tbody > tr > td {\n    text-align: start;\n    border-color: ").concat(dt('datatable.body.cell.border.color'), ";\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    padding: ").concat(dt('datatable.body.cell.padding'), ";\n}\n\n.p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {\n    background: ").concat(dt('datatable.row.hover.background'), ";\n    color: ").concat(dt('datatable.row.hover.color'), ";\n}\n\n.p-datatable-tbody > tr.p-datatable-row-selected {\n    background: ").concat(dt('datatable.row.selected.background'), ";\n    color: ").concat(dt('datatable.row.selected.color'), ";\n}\n\n.p-datatable-tbody > tr:has(+ .p-datatable-row-selected) > td {\n    border-block-end-color: ").concat(dt('datatable.body.cell.selected.border.color'), ";\n}\n\n.p-datatable-tbody > tr.p-datatable-row-selected > td {\n    border-block-end-color: ").concat(dt('datatable.body.cell.selected.border.color'), ";\n}\n\n.p-datatable-tbody > tr:focus-visible,\n.p-datatable-tbody > tr.p-datatable-contextmenu-row-selected {\n    box-shadow: ").concat(dt('datatable.row.focus.ring.shadow'), ";\n    outline: ").concat(dt('datatable.row.focus.ring.width'), " ").concat(dt('datatable.row.focus.ring.style'), " ").concat(dt('datatable.row.focus.ring.color'), ";\n    outline-offset: ").concat(dt('datatable.row.focus.ring.offset'), ";\n}\n\n.p-datatable-tfoot > tr > td {\n    text-align: start;\n    padding: ").concat(dt('datatable.footer.cell.padding'), ";\n    border-color: ").concat(dt('datatable.footer.cell.border.color'), ";\n    border-style: solid;\n    border-width: 0 0 1px 0;\n    color: ").concat(dt('datatable.footer.cell.color'), ";\n    background: ").concat(dt('datatable.footer.cell.background'), ";\n}\n\n.p-datatable-column-footer {\n    font-weight: ").concat(dt('datatable.column.footer.font.weight'), ";\n}\n\n.p-datatable-sortable-column {\n    cursor: pointer;\n    user-select: none;\n    outline-color: transparent;\n}\n\n.p-datatable-column-title,\n.p-datatable-sort-icon,\n.p-datatable-sort-badge {\n    vertical-align: middle;\n}\n\n.p-datatable-sort-icon {\n    color: ").concat(dt('datatable.sort.icon.color'), ";\n    font-size: ").concat(dt('datatable.sort.icon.size'), ";\n    width: ").concat(dt('datatable.sort.icon.size'), ";\n    height: ").concat(dt('datatable.sort.icon.size'), ";\n    transition: color ").concat(dt('datatable.transition.duration'), ";\n}\n\n.p-datatable-sortable-column:not(.p-datatable-column-sorted):hover {\n    background: ").concat(dt('datatable.header.cell.hover.background'), ";\n    color: ").concat(dt('datatable.header.cell.hover.color'), ";\n}\n\n.p-datatable-sortable-column:not(.p-datatable-column-sorted):hover .p-datatable-sort-icon {\n    color: ").concat(dt('datatable.sort.icon.hover.color'), ";\n}\n\n.p-datatable-column-sorted {\n    background: ").concat(dt('datatable.header.cell.selected.background'), ";\n    color: ").concat(dt('datatable.header.cell.selected.color'), ";\n}\n\n.p-datatable-column-sorted .p-datatable-sort-icon {\n    color: ").concat(dt('datatable.header.cell.selected.color'), ";\n}\n\n.p-datatable-sortable-column:focus-visible {\n    box-shadow: ").concat(dt('datatable.header.cell.focus.ring.shadow'), ";\n    outline: ").concat(dt('datatable.header.cell.focus.ring.width'), " ").concat(dt('datatable.header.cell.focus.ring.style'), " ").concat(dt('datatable.header.cell.focus.ring.color'), ";\n    outline-offset: ").concat(dt('datatable.header.cell.focus.ring.offset'), ";\n}\n\n.p-datatable-hoverable .p-datatable-selectable-row {\n    cursor: pointer;\n}\n\n.p-datatable-tbody > tr.p-datatable-dragpoint-top > td {\n    box-shadow: inset 0 2px 0 0 ").concat(dt('datatable.drop.point.color'), ";\n}\n\n.p-datatable-tbody > tr.p-datatable-dragpoint-bottom > td {\n    box-shadow: inset 0 -2px 0 0 ").concat(dt('datatable.drop.point.color'), ";\n}\n\n.p-datatable-loading-icon {\n    font-size: ").concat(dt('datatable.loading.icon.size'), ";\n    width: ").concat(dt('datatable.loading.icon.size'), ";\n    height: ").concat(dt('datatable.loading.icon.size'), ";\n}\n\n.p-datatable-gridlines .p-datatable-header {\n    border-width: 1px 1px 0 1px;\n}\n\n.p-datatable-gridlines .p-datatable-footer {\n    border-width: 0 1px 1px 1px;\n}\n\n.p-datatable-gridlines .p-datatable-paginator-top {\n    border-width: 1px 1px 0 1px;\n}\n\n.p-datatable-gridlines .p-datatable-paginator-bottom {\n    border-width: 0 1px 1px 1px;\n}\n\n.p-datatable-gridlines .p-datatable-thead > tr > th {\n    border-width: 1px 0 1px 1px;\n}\n\n.p-datatable-gridlines .p-datatable-thead > tr > th:last-child {\n    border-width: 1px;\n}\n\n.p-datatable-gridlines .p-datatable-tbody > tr > td {\n    border-width: 1px 0 0 1px;\n}\n\n.p-datatable-gridlines .p-datatable-tbody > tr > td:last-child {\n    border-width: 1px 1px 0 1px;\n}\n\n.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td {\n    border-width: 1px 0 1px 1px;\n}\n\n.p-datatable-gridlines .p-datatable-tbody > tr:last-child > td:last-child {\n    border-width: 1px;\n}\n\n.p-datatable-gridlines .p-datatable-tfoot > tr > td {\n    border-width: 1px 0 1px 1px;\n}\n\n.p-datatable-gridlines .p-datatable-tfoot > tr > td:last-child {\n    border-width: 1px 1px 1px 1px;\n}\n\n.p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td {\n    border-width: 0 0 1px 1px;\n}\n\n.p-datatable.p-datatable-gridlines .p-datatable-thead + .p-datatable-tfoot > tr > td:last-child {\n    border-width: 0 1px 1px 1px;\n}\n\n.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td {\n    border-width: 0 0 1px 1px;\n}\n\n.p-datatable.p-datatable-gridlines:has(.p-datatable-thead):has(.p-datatable-tbody) .p-datatable-tbody > tr > td:last-child {\n    border-width: 0 1px 1px 1px;\n}\n\n.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td {\n    border-width: 0 0 0 1px;\n}\n\n.p-datatable.p-datatable-gridlines:has(.p-datatable-tbody):has(.p-datatable-tfoot) .p-datatable-tbody > tr:last-child > td:last-child {\n    border-width: 0 1px 0 1px;\n}\n\n.p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd {\n    background: ").concat(dt('datatable.row.striped.background'), ";\n}\n\n.p-datatable.p-datatable-striped .p-datatable-tbody > tr.p-row-odd.p-datatable-row-selected {\n    background: ").concat(dt('datatable.row.selected.background'), ";\n    color: ").concat(dt('datatable.row.selected.color'), ";\n}\n\n.p-datatable-striped.p-datatable-hoverable .p-datatable-tbody > tr:not(.p-datatable-row-selected):hover {\n    background: ").concat(dt('datatable.row.hover.background'), ";\n    color: ").concat(dt('datatable.row.hover.color'), ";\n}\n\n.p-datatable.p-datatable-sm .p-datatable-header {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-datatable.p-datatable-sm .p-datatable-thead > tr > th {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-datatable.p-datatable-sm .p-datatable-tbody > tr > td {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-datatable.p-datatable-sm .p-datatable-tfoot > tr > td {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-datatable.p-datatable-sm .p-datatable-footer {\n    padding: 0.375rem 0.5rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-header {\n    padding: 1rem 1.25rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-thead > tr > th {\n    padding: 1rem 1.25rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-tbody > tr > td {\n    padding: 1rem 1.25rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-tfoot > tr > td {\n    padding: 1rem 1.25rem;\n}\n\n.p-datatable.p-datatable-lg .p-datatable-footer {\n    padding: 1rem 1.25rem;\n}\n\n.p-datatable-row-toggle-button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    width: ").concat(dt('datatable.row.toggle.button.size'), ";\n    height: ").concat(dt('datatable.row.toggle.button.size'), ";\n    color: ").concat(dt('datatable.row.toggle.button.color'), ";\n    border: 0 none;\n    background: transparent;\n    cursor: pointer;\n    border-radius: ").concat(dt('datatable.row.toggle.button.border.radius'), ";\n    transition: background ").concat(dt('datatable.transition.duration'), ", color ").concat(dt('datatable.transition.duration'), ", border-color ").concat(dt('datatable.transition.duration'), ",\n            outline-color ").concat(dt('datatable.transition.duration'), ", box-shadow ").concat(dt('datatable.transition.duration'), ";\n    outline-color: transparent;\n    user-select: none;\n}\n\n.p-datatable-row-toggle-button:enabled:hover {\n    color: ").concat(dt('datatable.row.toggle.button.hover.color'), ";\n    background: ").concat(dt('datatable.row.toggle.button.hover.background'), ";\n}\n\n.p-datatable-tbody > tr.p-datatable-row-selected .p-datatable-row-toggle-button:hover {\n    background: ").concat(dt('datatable.row.toggle.button.selected.hover.background'), ";\n    color: ").concat(dt('datatable.row.toggle.button.selected.hover.color'), ";\n}\n\n.p-datatable-row-toggle-button:focus-visible {\n    box-shadow: ").concat(dt('datatable.row.toggle.button.focus.ring.shadow'), ";\n    outline: ").concat(dt('datatable.row.toggle.button.focus.ring.width'), " ").concat(dt('datatable.row.toggle.button.focus.ring.style'), " ").concat(dt('datatable.row.toggle.button.focus.ring.color'), ";\n    outline-offset: ").concat(dt('datatable.row.toggle.button.focus.ring.offset'), ";\n}\n\n.p-datatable-row-toggle-icon:dir(rtl) {\n    transform: rotate(180deg);\n}\n");
};
var classes = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return ['p-datatable p-component', {
      'p-datatable-hoverable': props.rowHover || props.selectionMode,
      'p-datatable-resizable': props.resizableColumns,
      'p-datatable-resizable-fit': props.resizableColumns && props.columnResizeMode === 'fit',
      'p-datatable-scrollable': props.scrollable,
      'p-datatable-flex-scrollable': props.scrollable && props.scrollHeight === 'flex',
      'p-datatable-striped': props.stripedRows,
      'p-datatable-gridlines': props.showGridlines,
      'p-datatable-sm': props.size === 'small',
      'p-datatable-lg': props.size === 'large'
    }];
  },
  mask: 'p-datatable-mask p-overlay-mask',
  loadingIcon: 'p-datatable-loading-icon',
  header: 'p-datatable-header',
  pcPaginator: function pcPaginator(_ref3) {
    var position = _ref3.position;
    return 'p-datatable-paginator-' + position;
  },
  tableContainer: 'p-datatable-table-container',
  table: function table(_ref4) {
    var props = _ref4.props;
    return ['p-datatable-table', {
      'p-datatable-scrollable-table': props.scrollable,
      'p-datatable-resizable-table': props.resizableColumns,
      'p-datatable-resizable-table-fit': props.resizableColumns && props.columnResizeMode === 'fit'
    }];
  },
  thead: 'p-datatable-thead',
  headerCell: function headerCell(_ref5) {
    var instance = _ref5.instance,
      props = _ref5.props,
      column = _ref5.column;
    return column && !instance.columnProp(column, 'hidden') && (props.rowGroupMode !== 'subheader' || props.groupRowsBy !== instance.columnProp(column, 'field')) ? ['p-datatable-header-cell', {
      'p-datatable-frozen-column': instance.columnProp(column, 'frozen')
    }] : ['p-datatable-header-cell', {
      'p-datatable-sortable-column': instance.columnProp('sortable'),
      'p-datatable-resizable-column': instance.resizableColumns,
      'p-datatable-column-sorted': instance.isColumnSorted(),
      'p-datatable-frozen-column': instance.columnProp('frozen'),
      'p-datatable-reorderable-column': props.reorderableColumns
    }];
  },
  columnResizer: 'p-datatable-column-resizer',
  columnHeaderContent: 'p-datatable-column-header-content',
  columnTitle: 'p-datatable-column-title',
  columnFooter: 'p-datatable-column-footer',
  sortIcon: 'p-datatable-sort-icon',
  pcSortBadge: 'p-datatable-sort-badge',
  filter: function filter(_ref6) {
    var props = _ref6.props;
    return ['p-datatable-filter', {
      'p-datatable-inline-filter': props.display === 'row',
      'p-datatable-popover-filter': props.display === 'menu'
    }];
  },
  filterElementContainer: 'p-datatable-filter-element-container',
  pcColumnFilterButton: 'p-datatable-column-filter-button',
  pcColumnFilterClearButton: 'p-datatable-column-filter-clear-button',
  filterOverlay: function filterOverlay(_ref7) {
    _ref7.instance;
      var props = _ref7.props;
    return ['p-datatable-filter-overlay p-component', {
      'p-datatable-filter-overlay-popover': props.display === 'menu'
    }];
  },
  filterConstraintList: 'p-datatable-filter-constraint-list',
  filterConstraint: function filterConstraint(_ref8) {
    var instance = _ref8.instance,
      matchMode = _ref8.matchMode;
    return ['p-datatable-filter-constraint', {
      'p-datatable-filter-constraint-selected': matchMode && instance.isRowMatchModeSelected(matchMode.value)
    }];
  },
  filterConstraintSeparator: 'p-datatable-filter-constraint-separator',
  filterOperator: 'p-datatable-filter-operator',
  pcFilterOperatorDropdown: 'p-datatable-filter-operator-dropdown',
  filterRuleList: 'p-datatable-filter-rule-list',
  filterRule: 'p-datatable-filter-rule',
  pcFilterConstraintDropdown: 'p-datatable-filter-constraint-dropdown',
  pcFilterRemoveRuleButton: 'p-datatable-filter-remove-rule-button',
  pcFilterAddRuleButton: 'p-datatable-filter-add-rule-button',
  filterButtonbar: 'p-datatable-filter-buttonbar',
  pcFilterClearButton: 'p-datatable-filter-clear-button',
  pcFilterApplyButton: 'p-datatable-filter-apply-button',
  tbody: function tbody(_ref9) {
    var props = _ref9.props;
    return props.frozenRow ? 'p-datatable-tbody p-datatable-frozen-tbody' : 'p-datatable-tbody';
  },
  rowGroupHeader: 'p-datatable-row-group-header',
  rowToggleButton: 'p-datatable-row-toggle-button',
  rowToggleIcon: 'p-datatable-row-toggle-icon',
  row: function row(_ref10) {
    var instance = _ref10.instance,
      props = _ref10.props,
      index = _ref10.index,
      columnSelectionMode = _ref10.columnSelectionMode;
    var rowStyleClass = [];
    if (props.selectionMode) {
      rowStyleClass.push('p-datatable-selectable-row');
    }
    if (props.selection) {
      rowStyleClass.push({
        'p-datatable-row-selected': columnSelectionMode ? instance.isSelected && instance.$parentInstance.$parentInstance.highlightOnSelect : instance.isSelected
      });
    }
    if (props.contextMenuSelection) {
      rowStyleClass.push({
        'p-datatable-contextmenu-row-selected': instance.isSelectedWithContextMenu
      });
    }
    rowStyleClass.push(index % 2 === 0 ? 'p-row-even' : 'p-row-odd');
    return rowStyleClass;
  },
  rowExpansion: 'p-datatable-row-expansion',
  rowGroupFooter: 'p-datatable-row-group-footer',
  emptyMessage: 'p-datatable-empty-message',
  bodyCell: function bodyCell(_ref11) {
    var instance = _ref11.instance;
    return [{
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }];
  },
  reorderableRowHandle: 'p-datatable-reorderable-row-handle',
  pcRowEditorInit: 'p-datatable-row-editor-init',
  pcRowEditorSave: 'p-datatable-row-editor-save',
  pcRowEditorCancel: 'p-datatable-row-editor-cancel',
  tfoot: 'p-datatable-tfoot',
  footerCell: function footerCell(_ref12) {
    var instance = _ref12.instance;
    return [{
      'p-datatable-frozen-column': instance.columnProp('frozen')
    }];
  },
  virtualScrollerSpacer: 'p-datatable-virtualscroller-spacer',
  footer: 'p-datatable-footer',
  columnResizeIndicator: 'p-datatable-column-resize-indicator',
  rowReorderIndicatorUp: 'p-datatable-row-reorder-indicator-up',
  rowReorderIndicatorDown: 'p-datatable-row-reorder-indicator-down'
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
var DataTableStyle = BaseStyle.extend({
  name: 'datatable',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { DataTableStyle as default };
//# sourceMappingURL=index.mjs.map
