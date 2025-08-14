import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-picklist {\n    display: flex;\n    gap: ".concat(dt('picklist.gap'), ";\n}\n\n.p-picklist-controls {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: ").concat(dt('picklist.controls.gap'), ";\n}\n\n.p-picklist-list-container {\n    flex: 1 1 50%;\n}\n\n.p-picklist .p-listbox {\n    height: 100%;\n}\n");
};
var classes = {
  root: 'p-picklist p-component',
  sourceControls: 'p-picklist-controls p-picklist-source-controls',
  sourceListContainer: 'p-picklist-list-container p-picklist-source-list-container',
  transferControls: 'p-picklist-controls p-picklist-transfer-controls',
  targetListContainer: 'p-picklist-list-container p-picklist-target-list-container',
  targetControls: 'p-picklist-controls p-picklist-target-controls'
};
var PickListStyle = BaseStyle.extend({
  name: 'picklist',
  theme: theme,
  classes: classes
});

export { PickListStyle as default };
//# sourceMappingURL=index.mjs.map
