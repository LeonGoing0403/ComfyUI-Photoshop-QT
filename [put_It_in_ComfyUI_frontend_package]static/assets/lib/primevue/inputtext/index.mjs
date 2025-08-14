import { mergeProps, openBlock, createElementBlock } from 'vue';
import BaseInput from '@primevue/core/baseinput';
import InputTextStyle from 'primevue/inputtext/style';

var script$1 = {
  name: 'BaseInputText',
  "extends": BaseInput,
  style: InputTextStyle,
  provide: function provide() {
    return {
      $pcInputText: this,
      $parentInstance: this
    };
  }
};

var script = {
  name: 'InputText',
  "extends": script$1,
  inheritAttrs: false,
  methods: {
    onInput: function onInput(event) {
      this.writeValue(event.target.value, event);
    }
  },
  computed: {
    attrs: function attrs() {
      return mergeProps(this.ptmi('root', {
        context: {
          filled: this.$filled,
          disabled: this.disabled
        }
      }), this.formField);
    }
  }
};

var _hoisted_1 = ["value", "disabled", "aria-invalid"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", mergeProps({
    type: "text",
    "class": _ctx.cx('root'),
    value: _ctx.d_value,
    disabled: _ctx.disabled,
    "aria-invalid": _ctx.$invalid || undefined,
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, $options.attrs), null, 16, _hoisted_1);
}

script.render = render;

export { script as default };
//# sourceMappingURL=index.mjs.map
