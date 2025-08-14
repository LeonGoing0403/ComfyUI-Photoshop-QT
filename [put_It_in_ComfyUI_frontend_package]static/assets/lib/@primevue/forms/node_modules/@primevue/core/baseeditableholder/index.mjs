import { isNotEmpty } from '@primeuix/utils';
import BaseComponent from '@primevue/core/basecomponent';

var script = {
  name: 'BaseEditableHolder',
  "extends": BaseComponent,
  emits: ['update:modelValue', 'value-change'],
  props: {
    modelValue: {
      type: null,
      "default": undefined
    },
    defaultValue: {
      type: null,
      "default": undefined
    },
    name: {
      type: String,
      "default": undefined
    },
    invalid: {
      type: Boolean,
      "default": undefined
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    formControl: {
      type: Object,
      "default": undefined
    }
  },
  inject: {
    $parentInstance: {
      "default": undefined
    },
    $pcForm: {
      "default": undefined
    },
    $pcFormField: {
      "default": undefined
    }
  },
  data: function data() {
    return {
      d_value: this.defaultValue || this.modelValue
    };
  },
  watch: {
    modelValue: function modelValue(newValue) {
      this.d_value = newValue;
    },
    defaultValue: function defaultValue(newValue) {
      this.d_value = newValue;
    },
    $formName: {
      immediate: true,
      handler: function handler(newValue) {
        var _this$$pcForm, _this$$pcForm$registe;
        this.formField = ((_this$$pcForm = this.$pcForm) === null || _this$$pcForm === void 0 || (_this$$pcForm$registe = _this$$pcForm.register) === null || _this$$pcForm$registe === void 0 ? void 0 : _this$$pcForm$registe.call(_this$$pcForm, newValue, this.$formControl)) || {};
      }
    },
    $formControl: {
      immediate: true,
      handler: function handler(newValue) {
        var _this$$pcForm2, _this$$pcForm2$regist;
        this.formField = ((_this$$pcForm2 = this.$pcForm) === null || _this$$pcForm2 === void 0 || (_this$$pcForm2$regist = _this$$pcForm2.register) === null || _this$$pcForm2$regist === void 0 ? void 0 : _this$$pcForm2$regist.call(_this$$pcForm2, this.$formName, newValue)) || {};
      }
    },
    $formDefaultValue: {
      immediate: true,
      handler: function handler(newValue) {
        this.d_value !== newValue && (this.d_value = newValue);
      }
    }
  },
  formField: {},
  methods: {
    writeValue: function writeValue(value, event) {
      var _this$formField$onCha, _this$formField;
      if (this.controlled) {
        this.d_value = value;
        this.$emit('update:modelValue', value);
      }
      this.$emit('value-change', value);
      (_this$formField$onCha = (_this$formField = this.formField).onChange) === null || _this$formField$onCha === void 0 || _this$formField$onCha.call(_this$formField, {
        originalEvent: event,
        value: value
      });
    }
  },
  computed: {
    $filled: function $filled() {
      return isNotEmpty(this.d_value);
    },
    $invalid: function $invalid() {
      var _ref, _this$invalid, _this$$pcFormField, _this$$pcForm3;
      return (_ref = (_this$invalid = this.invalid) !== null && _this$invalid !== void 0 ? _this$invalid : (_this$$pcFormField = this.$pcFormField) === null || _this$$pcFormField === void 0 || (_this$$pcFormField = _this$$pcFormField.$field) === null || _this$$pcFormField === void 0 ? void 0 : _this$$pcFormField.invalid) !== null && _ref !== void 0 ? _ref : (_this$$pcForm3 = this.$pcForm) === null || _this$$pcForm3 === void 0 || (_this$$pcForm3 = _this$$pcForm3.states) === null || _this$$pcForm3 === void 0 || (_this$$pcForm3 = _this$$pcForm3[this.$formName]) === null || _this$$pcForm3 === void 0 ? void 0 : _this$$pcForm3.invalid;
    },
    $formName: function $formName() {
      var _this$$formControl;
      return this.name || ((_this$$formControl = this.$formControl) === null || _this$$formControl === void 0 ? void 0 : _this$$formControl.name);
    },
    $formControl: function $formControl() {
      var _this$$pcFormField2;
      return this.formControl || ((_this$$pcFormField2 = this.$pcFormField) === null || _this$$pcFormField2 === void 0 ? void 0 : _this$$pcFormField2.formControl);
    },
    $formDefaultValue: function $formDefaultValue() {
      var _ref2, _this$d_value, _this$$pcFormField3, _this$$pcForm4;
      return (_ref2 = (_this$d_value = this.d_value) !== null && _this$d_value !== void 0 ? _this$d_value : (_this$$pcFormField3 = this.$pcFormField) === null || _this$$pcFormField3 === void 0 ? void 0 : _this$$pcFormField3.initialValue) !== null && _ref2 !== void 0 ? _ref2 : (_this$$pcForm4 = this.$pcForm) === null || _this$$pcForm4 === void 0 || (_this$$pcForm4 = _this$$pcForm4.initialValues) === null || _this$$pcForm4 === void 0 ? void 0 : _this$$pcForm4[this.$formName];
    },
    controlled: function controlled() {
      return this.$inProps.hasOwnProperty('modelValue') || !this.$inProps.hasOwnProperty('modelValue') && !this.$inProps.hasOwnProperty('defaultValue');
    },
    // @deprecated use $filled instead
    filled: function filled() {
      return this.$filled;
    }
  }
};

export { script as default };
//# sourceMappingURL=index.mjs.map
