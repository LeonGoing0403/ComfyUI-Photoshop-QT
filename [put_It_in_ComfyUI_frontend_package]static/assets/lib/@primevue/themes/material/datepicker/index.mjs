var index = {
  root: {
    transitionDuration: '{transition.duration}'
  },
  panel: {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    borderRadius: '{content.border.radius}',
    shadow: '{overlay.popover.shadow}',
    padding: '0.5rem'
  },
  header: {
    background: '{content.background}',
    borderColor: '{content.border.color}',
    color: '{content.color}',
    padding: '0 0 0.5rem 0'
  },
  title: {
    gap: '0.5rem',
    fontWeight: '700'
  },
  dropdown: {
    width: '3rem',
    sm: {
      width: '2.5rem'
    },
    lg: {
      width: '3.5rem'
    },
    borderColor: '{form.field.border.color}',
    hoverBorderColor: '{form.field.border.color}',
    activeBorderColor: '{form.field.border.color}',
    borderRadius: '{form.field.border.radius}',
    focusRing: {
      width: '0',
      style: 'none',
      color: 'unset',
      offset: '0',
      shadow: 'nıne'
    }
  },
  inputIcon: {
    color: '{form.field.icon.color}'
  },
  selectMonth: {
    hoverBackground: '{content.hover.background}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    padding: '0.5rem 0.75rem',
    borderRadius: '{content.border.radius}'
  },
  selectYear: {
    hoverBackground: '{content.hover.background}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    padding: '0.5rem 0.75rem',
    borderRadius: '{content.border.radius}'
  },
  group: {
    borderColor: '{content.border.color}',
    gap: '{overlay.popover.padding}'
  },
  dayView: {
    margin: '0.5rem 0 0 0'
  },
  weekDay: {
    padding: '0.5rem',
    fontWeight: '700',
    color: '{content.color}'
  },
  date: {
    hoverBackground: '{content.hover.background}',
    selectedBackground: '{primary.color}',
    rangeSelectedBackground: '{highlight.background}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    selectedColor: '{primary.contrast.color}',
    rangeSelectedColor: '{highlight.color}',
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    padding: '0.125rem',
    focusRing: {
      width: '{focus.ring.width}',
      style: '{focus.ring.style}',
      color: '{focus.ring.color}',
      offset: '{focus.ring.offset}',
      shadow: '{focus.ring.shadow}'
    }
  },
  monthView: {
    margin: '0.5rem 0 0 0'
  },
  month: {
    padding: '0.625rem',
    borderRadius: '{content.border.radius}'
  },
  yearView: {
    margin: '0.5rem 0 0 0'
  },
  year: {
    padding: '0.625rem',
    borderRadius: '{content.border.radius}'
  },
  buttonbar: {
    padding: '0.5rem 0 0 0',
    borderColor: '{content.border.color}'
  },
  timePicker: {
    padding: '0.5rem 0 0 0',
    borderColor: '{content.border.color}',
    gap: '0.5rem',
    buttonGap: '0.25rem'
  },
  colorScheme: {
    light: {
      dropdown: {
        background: '{surface.100}',
        hoverBackground: '{surface.200}',
        activeBackground: '{surface.300}',
        color: '{surface.600}',
        hoverColor: '{surface.700}',
        activeColor: '{surface.800}'
      },
      today: {
        background: '{surface.200}',
        color: '{surface.900}'
      }
    },
    dark: {
      dropdown: {
        background: '{surface.800}',
        hoverBackground: '{surface.700}',
        activeBackground: '{surface.600}',
        color: '{surface.300}',
        hoverColor: '{surface.200}',
        activeColor: '{surface.100}'
      },
      today: {
        background: '{surface.700}',
        color: '{surface.0}'
      }
    }
  },
  css: function css(_ref) {
    var dt = _ref.dt;
    return "\n.p-datepicker-header {\n    justify-content: start;\n}\n\n.p-datepicker-title {\n    order: 1;\n}\n\n.p-datepicker-prev-button {\n    order: 2;\n    margin-inline-start: auto;\n}\n\n.p-datepicker-next-button {\n    order: 2;\n    margin-inline-start: 0.5rem;\n}\n\n.p-datepicker-select-month:focus-visible {\n    background: ".concat(dt('datepicker.select.month.hover.background'), ";\n    color: ").concat(dt('datepicker.select.month.hover.color'), ";\n    outline: 0 none;\n}\n\n.p-datepicker-select-year:focus-visible {\n    background: ").concat(dt('datepicker.select.year.hover.background'), ";\n    color: ").concat(dt('datepicker.select.year.hover.color'), ";\n    outline: 0 none;\n}\n\n.p-datepicker-dropdown:focus-visible {\n    outline: 0 none;\n    background: ").concat(dt('datepicker.dropdown.hover.background'), ";\n    border-color: ").concat(dt('datepicker.dropdown.hover.border.color'), ";\n    color: ").concat(dt('datepicker.dropdown.hover.color'), ";\n}\n");
  }
};

export { index as default };
//# sourceMappingURL=index.mjs.map
