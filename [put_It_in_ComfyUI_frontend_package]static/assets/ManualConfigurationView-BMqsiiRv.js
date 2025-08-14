var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, ref, onMounted, openBlock, createBlock, withCtx, createElementVNode, toDisplayString, createVNode, unref } from "vue";
import Button from "primevue/button";
import Panel from "primevue/panel";
import Tag from "primevue/tag";
import { useI18n } from "vue-i18n";
import { ad as electronAPI, _ as _export_sfc } from "./index-BDQofsSe.js";
import { _ as _sfc_main$1 } from "./BaseViewTemplate-fif-OSN_.js";
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
import "primevue/message";
import "primevue/divider";
import "primevue/usetoast";
import "primevue/card";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "primevue/checkbox";
import "primevue/dropdown";
import "primevue/inputtext";
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
const _hoisted_1 = { class: "comfy-installer grow flex flex-col gap-4 text-neutral-300 max-w-110" };
const _hoisted_2 = { class: "text-2xl font-semibold text-neutral-100" };
const _hoisted_3 = { class: "m-1 text-neutral-300" };
const _hoisted_4 = { class: "ml-2" };
const _hoisted_5 = { class: "m-1 mb-4" };
const _hoisted_6 = { class: "m-0" };
const _hoisted_7 = { class: "m-1" };
const _hoisted_8 = { class: "font-mono" };
const _hoisted_9 = { class: "m-1" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ManualConfigurationView",
  setup(__props) {
    const { t } = useI18n();
    const electron = electronAPI();
    const basePath = ref(null);
    const sep = ref("/");
    const restartApp = /* @__PURE__ */ __name((message) => electron.restartApp(message), "restartApp");
    onMounted(async () => {
      basePath.value = await electron.getBasePath();
      if (basePath.value.indexOf("/") === -1) sep.value = "\\";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { dark: "" }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("h2", _hoisted_2, toDisplayString(_ctx.$t("install.manualConfiguration.title")), 1),
            createElementVNode("p", _hoisted_3, [
              createVNode(unref(Tag), {
                icon: "pi pi-exclamation-triangle",
                severity: "warn",
                value: unref(t)("icon.exclamation-triangle")
              }, null, 8, ["value"]),
              createElementVNode("strong", _hoisted_4, toDisplayString(_ctx.$t("install.gpuSelection.customComfyNeedsPython")), 1)
            ]),
            createElementVNode("div", null, [
              createElementVNode("p", _hoisted_5, toDisplayString(_ctx.$t("install.manualConfiguration.requirements")) + ": ", 1),
              createElementVNode("ul", _hoisted_6, [
                createElementVNode("li", null, toDisplayString(_ctx.$t("install.gpuSelection.customManualVenv")), 1),
                createElementVNode("li", null, toDisplayString(_ctx.$t("install.gpuSelection.customInstallRequirements")), 1)
              ])
            ]),
            createElementVNode("p", _hoisted_7, toDisplayString(_ctx.$t("install.manualConfiguration.createVenv")) + ":", 1),
            createVNode(unref(Panel), {
              header: unref(t)("install.manualConfiguration.virtualEnvironmentPath")
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_8, toDisplayString(`${basePath.value}${sep.value}.venv${sep.value}`), 1)
              ]),
              _: 1
            }, 8, ["header"]),
            createElementVNode("p", _hoisted_9, toDisplayString(_ctx.$t("install.manualConfiguration.restartWhenFinished")), 1),
            createVNode(unref(Button), {
              class: "place-self-end",
              label: unref(t)("menuLabels.Restart"),
              severity: "warn",
              icon: "pi pi-refresh",
              onClick: _cache[0] || (_cache[0] = ($event) => restartApp("Manual configuration complete"))
            }, null, 8, ["label"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const ManualConfigurationView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-818f40b1"]]);
export {
  ManualConfigurationView as default
};
//# sourceMappingURL=ManualConfigurationView-BMqsiiRv.js.map
