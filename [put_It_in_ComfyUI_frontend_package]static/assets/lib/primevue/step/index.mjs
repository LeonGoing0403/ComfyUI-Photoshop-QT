import { find } from '@primeuix/utils/dom';
import { findIndexInList } from '@primeuix/utils/object';
import BaseComponent from '@primevue/core/basecomponent';
import { openBlock, createElementBlock, mergeProps, resolveComponent, createBlock, resolveDynamicComponent, withCtx, createElementVNode, toDisplayString, renderSlot, createCommentVNode, normalizeClass } from 'vue';
import StepStyle from 'primevue/step/style';

var script$2 = {
  name: 'StepperSeparator',
  hostName: 'Stepper',
  "extends": BaseComponent
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", mergeProps({
    "class": _ctx.cx('separator')
  }, _ctx.ptm('separator')), null, 16);
}

script$2.render = render$1;

var script$1 = {
  name: 'BaseStep',
  "extends": BaseComponent,
  props: {
    value: {
      type: [String, Number],
      "default": undefined
    },
    disabled: {
      type: Boolean,
      "default": false
    },
    asChild: {
      type: Boolean,
      "default": false
    },
    as: {
      type: [String, Object],
      "default": 'DIV'
    }
  },
  style: StepStyle,
  provide: function provide() {
    return {
      $pcStep: this,
      $parentInstance: this
    };
  }
};

var script = {
  name: 'Step',
  "extends": script$1,
  inheritAttrs: false,
  inject: {
    $pcStepper: {
      "default": null
    },
    $pcStepList: {
      "default": null
    },
    $pcStepItem: {
      "default": null
    }
  },
  data: function data() {
    return {
      isSeparatorVisible: false
    };
  },
  mounted: function mounted() {
    if (this.$el && this.$pcStepList) {
      var index = findIndexInList(this.$el, find(this.$pcStepper.$el, '[data-pc-name="step"]'));
      var stepLen = find(this.$pcStepper.$el, '[data-pc-name="step"]').length;
      this.isSeparatorVisible = index !== stepLen - 1;
    }
  },
  methods: {
    getPTOptions: function getPTOptions(key) {
      var _ptm = key === 'root' ? this.ptmi : this.ptm;
      return _ptm(key, {
        context: {
          active: this.active,
          disabled: this.isStepDisabled
        }
      });
    },
    onStepClick: function onStepClick() {
      this.$pcStepper.updateValue(this.activeValue);
    }
  },
  computed: {
    active: function active() {
      return this.$pcStepper.isStepActive(this.activeValue);
    },
    activeValue: function activeValue() {
      var _this$$pcStepItem;
      return !!this.$pcStepItem ? (_this$$pcStepItem = this.$pcStepItem) === null || _this$$pcStepItem === void 0 ? void 0 : _this$$pcStepItem.value : this.value;
    },
    isStepDisabled: function isStepDisabled() {
      return !this.active && (this.$pcStepper.isStepDisabled() || this.disabled);
    },
    id: function id() {
      var _this$$pcStepper;
      return "".concat((_this$$pcStepper = this.$pcStepper) === null || _this$$pcStepper === void 0 ? void 0 : _this$$pcStepper.id, "_step_").concat(this.activeValue);
    },
    ariaControls: function ariaControls() {
      var _this$$pcStepper2;
      return "".concat((_this$$pcStepper2 = this.$pcStepper) === null || _this$$pcStepper2 === void 0 ? void 0 : _this$$pcStepper2.id, "_steppanel_").concat(this.activeValue);
    },
    a11yAttrs: function a11yAttrs() {
      return {
        root: {
          role: 'presentation',
          'aria-current': this.active ? 'step' : undefined,
          'data-pc-name': 'step',
          'data-pc-section': 'root',
          'data-p-disabled': this.isStepDisabled,
          'data-p-active': this.active
        },
        header: {
          id: this.id,
          role: 'tab',
          taindex: this.disabled ? -1 : undefined,
          'aria-controls': this.ariaControls,
          'data-pc-section': 'header',
          disabled: this.isStepDisabled,
          onClick: this.onStepClick
        }
      };
    }
  },
  components: {
    StepperSeparator: script$2
  }
};

var _hoisted_1 = ["id", "tabindex", "aria-controls", "disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_StepperSeparator = resolveComponent("StepperSeparator");
  return !_ctx.asChild ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.as), mergeProps({
    key: 0,
    "class": _ctx.cx('root'),
    "aria-current": $options.active ? 'step' : undefined,
    role: "presentation",
    "data-p-active": $options.active,
    "data-p-disabled": $options.isStepDisabled
  }, $options.getPTOptions('root')), {
    "default": withCtx(function () {
      return [createElementVNode("button", mergeProps({
        id: $options.id,
        "class": _ctx.cx('header'),
        role: "tab",
        type: "button",
        tabindex: $options.isStepDisabled ? -1 : undefined,
        "aria-controls": $options.ariaControls,
        disabled: $options.isStepDisabled,
        onClick: _cache[0] || (_cache[0] = function () {
          return $options.onStepClick && $options.onStepClick.apply($options, arguments);
        })
      }, $options.getPTOptions('header')), [createElementVNode("span", mergeProps({
        "class": _ctx.cx('number')
      }, $options.getPTOptions('number')), toDisplayString($options.activeValue), 17), createElementVNode("span", mergeProps({
        "class": _ctx.cx('title')
      }, $options.getPTOptions('title')), [renderSlot(_ctx.$slots, "default")], 16)], 16, _hoisted_1), $data.isSeparatorVisible ? (openBlock(), createBlock(_component_StepperSeparator, {
        key: 0
      })) : createCommentVNode("", true)];
    }),
    _: 3
  }, 16, ["class", "aria-current", "data-p-active", "data-p-disabled"])) : renderSlot(_ctx.$slots, "default", {
    key: 1,
    "class": normalizeClass(_ctx.cx('root')),
    active: $options.active,
    value: _ctx.value,
    a11yAttrs: $options.a11yAttrs,
    activateCallback: $options.onStepClick
  });
}

script.render = render;

export { script as default };
//# sourceMappingURL=index.mjs.map
