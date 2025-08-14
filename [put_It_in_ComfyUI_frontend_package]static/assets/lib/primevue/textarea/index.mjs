import { mergeProps, openBlock, createElementBlock } from 'vue';
import BaseInput from '@primevue/core/baseinput';
import TextareaStyle from 'primevue/textarea/style';

var script$1 = {
  name: 'BaseTextarea',
  "extends": BaseInput,
  props: {
    autoResize: Boolean
  },
  style: TextareaStyle,
  provide: function provide() {
    return {
      $pcTextarea: this,
      $parentInstance: this
    };
  }
};

var script = {
  name: 'Textarea',
  "extends": script$1,
  inheritAttrs: false,
  observer: null,
  mounted: function mounted() {
    var _this = this;
    if (this.autoResize) {
      this.observer = new ResizeObserver(function () {
        _this.resize();
      });
      this.observer.observe(this.$el);
    }
  },
  updated: function updated() {
    if (this.autoResize) {
      this.resize();
    }
  },
  beforeUnmount: function beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  },
  methods: {
    resize: function resize() {
      if (!this.$el.offsetParent) return;
      this.$el.style.height = 'auto';
      this.$el.style.height = this.$el.scrollHeight + 'px';
      if (parseFloat(this.$el.style.height) >= parseFloat(this.$el.style.maxHeight)) {
        this.$el.style.overflowY = 'scroll';
        this.$el.style.height = this.$el.style.maxHeight;
      } else {
        this.$el.style.overflow = 'hidden';
      }
    },
    onInput: function onInput(event) {
      if (this.autoResize) {
        this.resize();
      }
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
  return openBlock(), createElementBlock("textarea", mergeProps({
    "class": _ctx.cx('root'),
    value: _ctx.d_value,
    disabled: _ctx.disabled,
    "aria-invalid": _ctx.invalid || undefined,
    onInput: _cache[0] || (_cache[0] = function () {
      return $options.onInput && $options.onInput.apply($options, arguments);
    })
  }, $options.attrs), null, 16, _hoisted_1);
}

script.render = render;

export { script as default };
//# sourceMappingURL=index.mjs.map
