var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { openBlock, createElementBlock, createElementVNode, markRaw, defineComponent, watch, createBlock, withCtx, unref, toDisplayString, Fragment, renderList, createVNode, createCommentVNode } from "vue";
import { a as useSettingStore, a4 as storeToRefs, c0 as useCopyToClipboard, bW as _sfc_main$1, c1 as FormItem, ad as electronAPI } from "./index-BDQofsSe.js";
import Button from "primevue/button";
import Divider from "primevue/divider";
import Message from "primevue/message";
import { useI18n } from "vue-i18n";
import { u as useServerConfigStore } from "./serverConfigStore-D66HbykX.js";
import "@primevue/themes";
import "@primevue/themes/aura";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "primevue/blockui";
import "primevue/progressspinner";
import "primevue/dialog";
import "primevue/scrollpanel";
import "primevue/usetoast";
import "primevue/card";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "primevue/checkbox";
import "primevue/dropdown";
import "primevue/inputtext";
import "primevue/panel";
import "primevue/textarea";
import "primevue/listbox";
import "primevue/progressbar";
import "primevue/floatlabel";
import "primevue/tabpanels";
import "primevue/tabs";
import "primevue/iconfield";
import "primevue/inputicon";
import "primevue/badge";
import "primevue/chip";
import "primevue/select";
import "primevue/tabpanel";
import "primevue/tag";
import "primevue/inputnumber";
import "primevue/toggleswitch";
import "primevue/colorpicker";
import "primevue/knob";
import "primevue/slider";
import "primevue/password";
import "primevue/skeleton";
import "primevue/popover";
import "primevue/tab";
import "primevue/tablist";
import "primevue/multiselect";
import "primevue/autocomplete";
import "primevue/tabmenu";
import "primevue/dataview";
import "primevue/selectbutton";
import "primevue/column";
import "primevue/datatable";
import "primevue/contextmenu";
import "primevue/tree";
import "primevue/toolbar";
import "primevue/confirmpopup";
import "primevue/useconfirm";
import "primevue/galleria";
import "primevue/confirmdialog";
const _hoisted_1$1 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$1, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m4 17l6-6l-6-6m8 14h8"
    }, null, -1)
  ]));
}
__name(render, "render");
const __unplugin_components_0 = markRaw({ name: "lucide-terminal", render });
const _hoisted_1 = { class: "flex flex-col gap-2" };
const _hoisted_2 = { class: "flex justify-end gap-2" };
const _hoisted_3 = { class: "flex items-center justify-between" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ServerConfigPanel",
  setup(__props) {
    const settingStore = useSettingStore();
    const serverConfigStore = useServerConfigStore();
    const {
      serverConfigsByCategory,
      serverConfigValues,
      launchArgs,
      commandLineArgs,
      modifiedConfigs
    } = storeToRefs(serverConfigStore);
    const revertChanges = /* @__PURE__ */ __name(() => {
      serverConfigStore.revertChanges();
    }, "revertChanges");
    const restartApp = /* @__PURE__ */ __name(async () => {
      await electronAPI().restartApp();
    }, "restartApp");
    watch(launchArgs, async (newVal) => {
      await settingStore.set("Comfy.Server.LaunchArgs", newVal);
    });
    watch(serverConfigValues, async (newVal) => {
      await settingStore.set("Comfy.Server.ServerConfigValues", newVal);
    });
    const { copyToClipboard } = useCopyToClipboard();
    const copyCommandLineArgs = /* @__PURE__ */ __name(async () => {
      await copyToClipboard(commandLineArgs.value);
    }, "copyCommandLineArgs");
    const { t } = useI18n();
    const translateItem = /* @__PURE__ */ __name((item) => {
      return {
        ...item,
        name: t(`serverConfigItems.${item.id}.name`, item.name),
        tooltip: item.tooltip ? t(`serverConfigItems.${item.id}.tooltip`, item.tooltip) : void 0
      };
    }, "translateItem");
    return (_ctx, _cache) => {
      const _component_i_lucide58terminal = __unplugin_components_0;
      return openBlock(), createBlock(_sfc_main$1, {
        value: "Server-Config",
        class: "server-config-panel"
      }, {
        header: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            unref(modifiedConfigs).length > 0 ? (openBlock(), createBlock(unref(Message), {
              key: 0,
              severity: "info",
              "pt:text": "w-full"
            }, {
              default: withCtx(() => [
                createElementVNode("p", null, toDisplayString(_ctx.$t("serverConfig.modifiedConfigs")), 1),
                createElementVNode("ul", null, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(modifiedConfigs), (config) => {
                    return openBlock(), createElementBlock("li", {
                      key: config.id
                    }, toDisplayString(config.name) + ": " + toDisplayString(config.initialValue) + " → " + toDisplayString(config.value), 1);
                  }), 128))
                ]),
                createElementVNode("div", _hoisted_2, [
                  createVNode(unref(Button), {
                    label: _ctx.$t("serverConfig.revertChanges"),
                    outlined: "",
                    onClick: revertChanges
                  }, null, 8, ["label"]),
                  createVNode(unref(Button), {
                    label: _ctx.$t("serverConfig.restart"),
                    outlined: "",
                    severity: "danger",
                    onClick: restartApp
                  }, null, 8, ["label"])
                ])
              ]),
              _: 1
            })) : createCommentVNode("", true),
            unref(commandLineArgs) ? (openBlock(), createBlock(unref(Message), {
              key: 1,
              severity: "secondary",
              "pt:text": "w-full"
            }, {
              icon: withCtx(() => [
                createVNode(_component_i_lucide58terminal, { class: "text-xl font-bold" })
              ]),
              default: withCtx(() => [
                createElementVNode("div", _hoisted_3, [
                  createElementVNode("p", null, toDisplayString(unref(commandLineArgs)), 1),
                  createVNode(unref(Button), {
                    icon: "pi pi-clipboard",
                    severity: "secondary",
                    text: "",
                    onClick: copyCommandLineArgs
                  })
                ])
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ])
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Object.entries(unref(serverConfigsByCategory)), ([label, items], i) => {
            return openBlock(), createElementBlock("div", { key: label }, [
              i > 0 ? (openBlock(), createBlock(unref(Divider), { key: 0 })) : createCommentVNode("", true),
              createElementVNode("h3", null, toDisplayString(_ctx.$t(`serverConfigCategories.${label}`, label)), 1),
              (openBlock(true), createElementBlock(Fragment, null, renderList(items, (item) => {
                return openBlock(), createElementBlock("div", {
                  key: item.name,
                  class: "mb-4"
                }, [
                  createVNode(FormItem, {
                    id: item.id,
                    formValue: item.value,
                    "onUpdate:formValue": /* @__PURE__ */ __name(($event) => item.value = $event, "onUpdate:formValue"),
                    item: translateItem(item),
                    "label-class": {
                      "text-highlight": item.initialValue !== item.value
                    }
                  }, null, 8, ["id", "formValue", "onUpdate:formValue", "item", "label-class"])
                ]);
              }), 128))
            ]);
          }), 128))
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=ServerConfigPanel-B9BMfEYf.js.map
