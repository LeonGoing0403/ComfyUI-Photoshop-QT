var index = {
  addon: {
    background: '{form.field.background}',
    borderColor: '{form.field.border.color}',
    color: '{form.field.icon.color}',
    borderRadius: '{form.field.border.radius}',
    padding: '0.75rem',
    minWidth: '3rem'
  },
  css: function css(_ref) {
    var dt = _ref.dt;
    return "\n.p-inputgroup:has(.p-variant-filled) .p-inputgroupaddon {\n    border-block-start-color: ".concat(dt('inputtext.filled.background'), ";\n    border-inline-color: ").concat(dt('inputtext.filled.background'), ";\n    background: ").concat(dt('inputtext.filled.background'), " no-repeat;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n");
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
