import BaseStyle from '@primevue/core/base/style';

var theme = function theme(_ref) {
  var dt = _ref.dt;
  return "\n.p-datepicker {\n    display: inline-flex;\n    max-width: 100%;\n}\n\n.p-datepicker-input {\n    flex: 1 1 auto;\n    width: 1%;\n}\n\n.p-datepicker:has(.p-datepicker-dropdown) .p-datepicker-input {\n    border-start-end-radius: 0;\n    border-end-end-radius: 0;\n}\n\n.p-datepicker-dropdown {\n    cursor: pointer;\n    display: inline-flex;\n    user-select: none;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    width: ".concat(dt('datepicker.dropdown.width'), ";\n    border-start-end-radius: ").concat(dt('datepicker.dropdown.border.radius'), ";\n    border-end-end-radius: ").concat(dt('datepicker.dropdown.border.radius'), ";\n    background: ").concat(dt('datepicker.dropdown.background'), ";\n    border: 1px solid ").concat(dt('datepicker.dropdown.border.color'), ";\n    border-inline-start: 0 none;\n    color: ").concat(dt('datepicker.dropdown.color'), ";\n    transition: background ").concat(dt('datepicker.transition.duration'), ", color ").concat(dt('datepicker.transition.duration'), ", border-color ").concat(dt('datepicker.transition.duration'), ", outline-color ").concat(dt('datepicker.transition.duration'), ";\n    outline-color: transparent;\n}\n\n.p-datepicker-dropdown:not(:disabled):hover {\n    background: ").concat(dt('datepicker.dropdown.hover.background'), ";\n    border-color: ").concat(dt('datepicker.dropdown.hover.border.color'), ";\n    color: ").concat(dt('datepicker.dropdown.hover.color'), ";\n}\n\n.p-datepicker-dropdown:not(:disabled):active {\n    background: ").concat(dt('datepicker.dropdown.active.background'), ";\n    border-color: ").concat(dt('datepicker.dropdown.active.border.color'), ";\n    color: ").concat(dt('datepicker.dropdown.active.color'), ";\n}\n\n.p-datepicker-dropdown:focus-visible {\n    box-shadow: ").concat(dt('datepicker.dropdown.focus.ring.shadow'), ";\n    outline: ").concat(dt('datepicker.dropdown.focus.ring.width'), " ").concat(dt('datepicker.dropdown.focus.ring.style'), " ").concat(dt('datepicker.dropdown.focus.ring.color'), ";\n    outline-offset: ").concat(dt('datepicker.dropdown.focus.ring.offset'), ";\n}\n\n.p-datepicker:has(.p-datepicker-input-icon-container) {\n    position: relative;\n}\n\n.p-datepicker:has(.p-datepicker-input-icon-container) .p-datepicker-input {\n    padding-inline-end: calc((").concat(dt('form.field.padding.x'), " * 2) + ").concat(dt('icon.size'), ");\n}\n\n.p-datepicker-input-icon-container {\n    cursor: pointer;\n    position: absolute;\n    top: 50%;\n    inset-inline-end: ").concat(dt('form.field.padding.x'), ";\n    margin-block-start: calc(-1 * (").concat(dt('icon.size'), " / 2));\n    color: ").concat(dt('datepicker.input.icon.color'), ";\n    line-height: 1;\n}\n\n.p-datepicker-fluid {\n    display: flex;\n}\n\n.p-datepicker-fluid .p-datepicker-input {\n    width: 1%;\n}\n\n.p-datepicker .p-datepicker-panel {\n    min-width: 100%;\n}\n\n.p-datepicker-panel {\n    width: auto;\n    padding: ").concat(dt('datepicker.panel.padding'), ";\n    background: ").concat(dt('datepicker.panel.background'), ";\n    color: ").concat(dt('datepicker.panel.color'), ";\n    border: 1px solid ").concat(dt('datepicker.panel.border.color'), ";\n    border-radius: ").concat(dt('datepicker.panel.border.radius'), ";\n    box-shadow: ").concat(dt('datepicker.panel.shadow'), ";\n}\n\n.p-datepicker-panel-inline {\n    display: inline-block;\n    overflow-x: auto;\n    box-shadow: none;\n}\n\n.p-datepicker-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: ").concat(dt('datepicker.header.padding'), ";\n    background: ").concat(dt('datepicker.header.background'), ";\n    color: ").concat(dt('datepicker.header.color'), ";\n    border-block-end: 1px solid ").concat(dt('datepicker.header.border.color'), ";\n}\n\n.p-datepicker-next-button:dir(rtl) {\n    order: -1;\n}\n\n.p-datepicker-prev-button:dir(rtl) {\n    order: 1;\n}\n\n.p-datepicker-title {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: ").concat(dt('datepicker.title.gap'), ";\n    font-weight: ").concat(dt('datepicker.title.font.weight'), ";\n}\n\n.p-datepicker-select-year,\n.p-datepicker-select-month {\n    border: none;\n    background: transparent;\n    margin: 0;\n    cursor: pointer;\n    font-weight: inherit;\n    transition: background ").concat(dt('datepicker.transition.duration'), ", color ").concat(dt('datepicker.transition.duration'), ", border-color ").concat(dt('datepicker.transition.duration'), ", outline-color ").concat(dt('datepicker.transition.duration'), ", box-shadow ").concat(dt('datepicker.transition.duration'), ";\n}\n\n.p-datepicker-select-month {\n    padding: ").concat(dt('datepicker.select.month.padding'), ";\n    color: ").concat(dt('datepicker.select.month.color'), ";\n    border-radius: ").concat(dt('datepicker.select.month.border.radius'), ";\n}\n\n.p-datepicker-select-year {\n    padding: ").concat(dt('datepicker.select.year.padding'), ";\n    color: ").concat(dt('datepicker.select.year.color'), ";\n    border-radius: ").concat(dt('datepicker.select.year.border.radius'), ";\n}\n\n.p-datepicker-select-month:enabled:hover {\n    background: ").concat(dt('datepicker.select.month.hover.background'), ";\n    color: ").concat(dt('datepicker.select.month.hover.color'), ";\n}\n\n.p-datepicker-select-year:enabled:hover {\n    background: ").concat(dt('datepicker.select.year.hover.background'), ";\n    color: ").concat(dt('datepicker.select.year.hover.color'), ";\n}\n\n.p-datepicker-select-month:focus-visible,\n.p-datepicker-select-year:focus-visible {\n    box-shadow: ").concat(dt('datepicker.date.focus.ring.shadow'), ";\n    outline: ").concat(dt('datepicker.date.focus.ring.width'), " ").concat(dt('datepicker.date.focus.ring.style'), " ").concat(dt('datepicker.date.focus.ring.color'), ";\n    outline-offset: ").concat(dt('datepicker.date.focus.ring.offset'), ";\n}\n\n.p-datepicker-calendar-container {\n    display: flex;\n}\n\n.p-datepicker-calendar-container .p-datepicker-calendar {\n    flex: 1 1 auto;\n    border-inline-start: 1px solid ").concat(dt('datepicker.group.border.color'), ";\n    padding-inline-end: ").concat(dt('datepicker.group.gap'), ";\n    padding-inline-start: ").concat(dt('datepicker.group.gap'), ";\n}\n\n.p-datepicker-calendar-container .p-datepicker-calendar:first-child {\n    padding-inline-start: 0;\n    border-inline-start: 0 none;\n}\n\n.p-datepicker-calendar-container .p-datepicker-calendar:last-child {\n    padding-inline-end: 0;\n}\n\n.p-datepicker-day-view {\n    width: 100%;\n    border-collapse: collapse;\n    font-size: 1rem;\n    margin: ").concat(dt('datepicker.day.view.margin'), ";\n}\n\n.p-datepicker-weekday-cell {\n    padding: ").concat(dt('datepicker.week.day.padding'), ";\n}\n\n.p-datepicker-weekday {\n    font-weight: ").concat(dt('datepicker.week.day.font.weight'), ";\n    color: ").concat(dt('datepicker.week.day.color'), ";\n}\n\n.p-datepicker-day-cell {\n    padding: ").concat(dt('datepicker.date.padding'), ";\n}\n\n.p-datepicker-day {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n    margin: 0 auto;\n    overflow: hidden;\n    position: relative;\n    width: ").concat(dt('datepicker.date.width'), ";\n    height: ").concat(dt('datepicker.date.height'), ";\n    border-radius: ").concat(dt('datepicker.date.border.radius'), ";\n    transition: background ").concat(dt('datepicker.transition.duration'), ", color ").concat(dt('datepicker.transition.duration'), ", border-color ").concat(dt('datepicker.transition.duration'), ", box-shadow ").concat(dt('datepicker.transition.duration'), ", outline-color ").concat(dt('datepicker.transition.duration'), ";\n    border: 1px solid transparent;\n    outline-color: transparent;\n    color: ").concat(dt('datepicker.date.color'), ";\n}\n\n.p-datepicker-day:not(.p-datepicker-day-selected):not(.p-disabled):hover {\n    background: ").concat(dt('datepicker.date.hover.background'), ";\n    color: ").concat(dt('datepicker.date.hover.color'), ";\n}\n\n.p-datepicker-day:focus-visible {\n    box-shadow: ").concat(dt('datepicker.date.focus.ring.shadow'), ";\n    outline: ").concat(dt('datepicker.date.focus.ring.width'), " ").concat(dt('datepicker.date.focus.ring.style'), " ").concat(dt('datepicker.date.focus.ring.color'), ";\n    outline-offset: ").concat(dt('datepicker.date.focus.ring.offset'), ";\n}\n\n.p-datepicker-day-selected {\n    background: ").concat(dt('datepicker.date.selected.background'), ";\n    color: ").concat(dt('datepicker.date.selected.color'), ";\n}\n\n.p-datepicker-day-selected-range {\n    background: ").concat(dt('datepicker.date.range.selected.background'), ";\n    color: ").concat(dt('datepicker.date.range.selected.color'), ";\n}\n\n.p-datepicker-today > .p-datepicker-day {\n    background: ").concat(dt('datepicker.today.background'), ";\n    color: ").concat(dt('datepicker.today.color'), ";\n}\n\n.p-datepicker-today > .p-datepicker-day-selected {\n    background: ").concat(dt('datepicker.date.selected.background'), ";\n    color: ").concat(dt('datepicker.date.selected.color'), ";\n}\n\n.p-datepicker-today > .p-datepicker-day-selected-range {\n    background: ").concat(dt('datepicker.date.range.selected.background'), ";\n    color: ").concat(dt('datepicker.date.range.selected.color'), ";\n}\n\n.p-datepicker-weeknumber {\n    text-align: center;\n}\n\n.p-datepicker-month-view {\n    margin: ").concat(dt('datepicker.month.view.margin'), ";\n}\n\n.p-datepicker-month {\n    width: 33.3%;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n    padding: ").concat(dt('datepicker.month.padding'), ";\n    transition: background ").concat(dt('datepicker.transition.duration'), ", color ").concat(dt('datepicker.transition.duration'), ", border-color ").concat(dt('datepicker.transition.duration'), ", box-shadow ").concat(dt('datepicker.transition.duration'), ", outline-color ").concat(dt('datepicker.transition.duration'), ";\n    border-radius: ").concat(dt('datepicker.month.border.radius'), ";\n    outline-color: transparent;\n    color: ").concat(dt('datepicker.date.color'), ";\n}\n\n.p-datepicker-month:not(.p-disabled):not(.p-datepicker-month-selected):hover {\n    color: ").concat(dt('datepicker.date.hover.color'), ";\n    background: ").concat(dt('datepicker.date.hover.background'), ";\n}\n\n.p-datepicker-month-selected {\n    color: ").concat(dt('datepicker.date.selected.color'), ";\n    background: ").concat(dt('datepicker.date.selected.background'), ";\n}\n\n.p-datepicker-month:not(.p-disabled):focus-visible {\n    box-shadow: ").concat(dt('datepicker.date.focus.ring.shadow'), ";\n    outline: ").concat(dt('datepicker.date.focus.ring.width'), " ").concat(dt('datepicker.date.focus.ring.style'), " ").concat(dt('datepicker.date.focus.ring.color'), ";\n    outline-offset: ").concat(dt('datepicker.date.focus.ring.offset'), ";\n}\n\n.p-datepicker-year-view {\n    margin: ").concat(dt('datepicker.year.view.margin'), ";\n}\n\n.p-datepicker-year {\n    width: 50%;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    overflow: hidden;\n    position: relative;\n    padding: ").concat(dt('datepicker.year.padding'), ";\n    transition: background ").concat(dt('datepicker.transition.duration'), ", color ").concat(dt('datepicker.transition.duration'), ", border-color ").concat(dt('datepicker.transition.duration'), ", box-shadow ").concat(dt('datepicker.transition.duration'), ", outline-color ").concat(dt('datepicker.transition.duration'), ";\n    border-radius: ").concat(dt('datepicker.year.border.radius'), ";\n    outline-color: transparent;\n    color: ").concat(dt('datepicker.date.color'), ";\n}\n\n.p-datepicker-year:not(.p-disabled):not(.p-datepicker-year-selected):hover {\n    color: ").concat(dt('datepicker.date.hover.color'), ";\n    background: ").concat(dt('datepicker.date.hover.background'), ";\n}\n\n.p-datepicker-year-selected {\n    color: ").concat(dt('datepicker.date.selected.color'), ";\n    background: ").concat(dt('datepicker.date.selected.background'), ";\n}\n\n.p-datepicker-year:not(.p-disabled):focus-visible {\n    box-shadow: ").concat(dt('datepicker.date.focus.ring.shadow'), ";\n    outline: ").concat(dt('datepicker.date.focus.ring.width'), " ").concat(dt('datepicker.date.focus.ring.style'), " ").concat(dt('datepicker.date.focus.ring.color'), ";\n    outline-offset: ").concat(dt('datepicker.date.focus.ring.offset'), ";\n}\n\n.p-datepicker-buttonbar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: ").concat(dt('datepicker.buttonbar.padding'), ";\n    border-block-start: 1px solid ").concat(dt('datepicker.buttonbar.border.color'), ";\n}\n\n.p-datepicker-buttonbar .p-button {\n    width: auto;\n}\n\n.p-datepicker-time-picker {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-block-start: 1px solid ").concat(dt('datepicker.time.picker.border.color'), ";\n    padding: 0;\n    gap: ").concat(dt('datepicker.time.picker.gap'), ";\n}\n\n.p-datepicker-calendar-container + .p-datepicker-time-picker {\n    padding: ").concat(dt('datepicker.time.picker.padding'), ";\n}\n\n.p-datepicker-time-picker > div {\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    gap: ").concat(dt('datepicker.time.picker.button.gap'), ";\n}\n\n.p-datepicker-time-picker span {\n    font-size: 1rem;\n}\n\n.p-datepicker-timeonly .p-datepicker-time-picker {\n    border-block-start: 0 none;\n}\n\n.p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown {\n    width: ").concat(dt('datepicker.dropdown.sm.width'), ";\n}\n\n.p-datepicker:has(.p-inputtext-sm) .p-datepicker-dropdown .p-icon,\n.p-datepicker:has(.p-inputtext-sm) .p-datepicker-input-icon {\n    font-size: ").concat(dt('form.field.sm.font.size'), ";\n    width: ").concat(dt('form.field.sm.font.size'), ";\n    height: ").concat(dt('form.field.sm.font.size'), ";\n}\n\n.p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown {\n    width: ").concat(dt('datepicker.dropdown.lg.width'), ";\n}\n\n.p-datepicker:has(.p-inputtext-lg) .p-datepicker-dropdown .p-icon,\n.p-datepicker:has(.p-inputtext-lg) .p-datepicker-input-icon {\n    font-size: ").concat(dt('form.field.lg.font.size'), ";\n    width: ").concat(dt('form.field.lg.font.size'), ";\n    height: ").concat(dt('form.field.lg.font.size'), ";\n}\n");
};
var inlineStyles = {
  root: function root(_ref2) {
    var props = _ref2.props;
    return {
      position: props.appendTo === 'self' ? 'relative' : undefined
    };
  }
};
var classes = {
  root: function root(_ref3) {
    var instance = _ref3.instance,
      state = _ref3.state;
    return ['p-datepicker p-component p-inputwrapper', {
      'p-invalid': instance.$invalid,
      'p-inputwrapper-filled': instance.$filled,
      'p-inputwrapper-focus': state.focused || state.overlayVisible,
      'p-focus': state.focused || state.overlayVisible,
      'p-datepicker-fluid': instance.$fluid
    }];
  },
  pcInputText: 'p-datepicker-input',
  dropdown: 'p-datepicker-dropdown',
  inputIconContainer: 'p-datepicker-input-icon-container',
  inputIcon: 'p-datepicker-input-icon',
  panel: function panel(_ref4) {
    var props = _ref4.props;
    return ['p-datepicker-panel p-component', {
      'p-datepicker-panel-inline': props.inline,
      'p-disabled': props.disabled,
      'p-datepicker-timeonly': props.timeOnly
    }];
  },
  calendarContainer: 'p-datepicker-calendar-container',
  calendar: 'p-datepicker-calendar',
  header: 'p-datepicker-header',
  pcPrevButton: 'p-datepicker-prev-button',
  title: 'p-datepicker-title',
  selectMonth: 'p-datepicker-select-month',
  selectYear: 'p-datepicker-select-year',
  decade: 'p-datepicker-decade',
  pcNextButton: 'p-datepicker-next-button',
  dayView: 'p-datepicker-day-view',
  weekHeader: 'p-datepicker-weekheader p-disabled',
  weekNumber: 'p-datepicker-weeknumber',
  weekLabelContainer: 'p-datepicker-weeklabel-container p-disabled',
  weekDayCell: 'p-datepicker-weekday-cell',
  weekDay: 'p-datepicker-weekday',
  dayCell: function dayCell(_ref5) {
    var date = _ref5.date;
    return ['p-datepicker-day-cell', {
      'p-datepicker-other-month': date.otherMonth,
      'p-datepicker-today': date.today
    }];
  },
  day: function day(_ref6) {
    var instance = _ref6.instance,
      props = _ref6.props,
      date = _ref6.date;
    var selectedDayClass = '';
    if (instance.isRangeSelection() && instance.isSelected(date) && date.selectable) {
      selectedDayClass = instance.isDateEquals(props.modelValue[0], date) || instance.isDateEquals(props.modelValue[1], date) ? 'p-datepicker-day-selected' : 'p-datepicker-day-selected-range';
    }
    return ['p-datepicker-day', {
      'p-datepicker-day-selected': !instance.isRangeSelection() && instance.isSelected(date) && date.selectable,
      'p-disabled': props.disabled || !date.selectable
    }, selectedDayClass];
  },
  monthView: 'p-datepicker-month-view',
  month: function month(_ref7) {
    var instance = _ref7.instance,
      props = _ref7.props,
      _month = _ref7.month,
      index = _ref7.index;
    return ['p-datepicker-month', {
      'p-datepicker-month-selected': instance.isMonthSelected(index),
      'p-disabled': props.disabled || !_month.selectable
    }];
  },
  yearView: 'p-datepicker-year-view',
  year: function year(_ref8) {
    var instance = _ref8.instance,
      props = _ref8.props,
      _year = _ref8.year;
    return ['p-datepicker-year', {
      'p-datepicker-year-selected': instance.isYearSelected(_year.value),
      'p-disabled': props.disabled || !_year.selectable
    }];
  },
  timePicker: 'p-datepicker-time-picker',
  hourPicker: 'p-datepicker-hour-picker',
  pcIncrementButton: 'p-datepicker-increment-button',
  pcDecrementButton: 'p-datepicker-decrement-button',
  separator: 'p-datepicker-separator',
  minutePicker: 'p-datepicker-minute-picker',
  secondPicker: 'p-datepicker-second-picker',
  ampmPicker: 'p-datepicker-ampm-picker',
  buttonbar: 'p-datepicker-buttonbar',
  pcTodayButton: 'p-datepicker-today-button',
  pcClearButton: 'p-datepicker-clear-button'
};
var DatePickerStyle = BaseStyle.extend({
  name: 'datepicker',
  theme: theme,
  classes: classes,
  inlineStyles: inlineStyles
});

export { DatePickerStyle as default };
//# sourceMappingURL=index.mjs.map
