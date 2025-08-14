var index = {
  root: {
    transitionDuration: '{transition.duration}'
  },
  button: {
    width: '3rem',
    borderRadius: '{form.field.border.radius}',
    verticalPadding: '{form.field.padding.y}'
  },
  colorScheme: {
    light: {
      button: {
        background: 'transparent',
        hoverBackground: '{surface.100}',
        activeBackground: '{surface.200}',
        borderColor: '{form.field.border.color}',
        hoverBorderColor: '{form.field.border.color}',
        activeBorderColor: '{form.field.border.color}',
        color: '{surface.400}',
        hoverColor: '{surface.500}',
        activeColor: '{surface.600}'
      }
    },
    dark: {
      button: {
        background: 'transparent',
        hoverBackground: '{surface.800}',
        activeBackground: '{surface.700}',
        borderColor: '{form.field.border.color}',
        hoverBorderColor: '{form.field.border.color}',
        activeBorderColor: '{form.field.border.color}',
        color: '{surface.400}',
        hoverColor: '{surface.300}',
        activeColor: '{surface.200}'
      }
    }
  },
  css: function css(_ref) {
    var dt = _ref.dt;
    return "\n.p-inputnumber-stacked .p-inputnumber-button-group {\n    top: 2px;\n    right: 2px;\n    height: calc(100% - 4px);\n}\n\n.p-inputnumber-horizontal:has(.p-variant-filled) .p-inputnumber-button {\n    border-block-start-color: ".concat(dt('inputtext.filled.background'), ";\n    border-inline-color: ").concat(dt('inputtext.filled.background'), ";\n    background: ").concat(dt('inputtext.filled.background'), " no-repeat;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n} \n    \n.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-button {\n    border-block-color: ").concat(dt('inputtext.filled.background'), ";\n    border-inline-color: ").concat(dt('inputtext.filled.background'), ";\n    background: ").concat(dt('inputtext.filled.background'), " no-repeat;\n} \n\n.p-inputnumber-vertical:has(.p-variant-filled) .p-inputnumber-increment-button {\n    border-block-end: 1px solid ").concat(dt('inputtext.border.color'), "\n}\n");
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
