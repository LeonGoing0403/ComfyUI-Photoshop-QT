var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, ref, onUnmounted, openBlock, createBlock, withCtx, createElementVNode, toDisplayString, unref, createVNode } from "vue";
import Button from "primevue/button";
import ProgressSpinner from "primevue/progressspinner";
import Toast from "primevue/toast";
import { _ as _sfc_main$2 } from "./TerminalOutputDrawer-DdLZ5BvZ.js";
import { O as t, ad as electronAPI, _ as _export_sfc } from "./index-BDQofsSe.js";
import { _ as _sfc_main$1 } from "./BaseViewTemplate-fif-OSN_.js";
import "primevue/drawer";
import "@primevue/themes";
import "@primevue/themes/aura";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "primevue/blockui";
import "primevue/dialog";
import "vue-i18n";
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
const _hoisted_1 = { class: "h-screen w-screen grid items-center justify-around overflow-y-auto" };
const _hoisted_2 = { class: "relative m-8 text-center" };
const _hoisted_3 = { class: "download-bg pi-download text-4xl font-bold" };
const _hoisted_4 = { class: "m-8" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DesktopUpdateView",
  setup(__props) {
    const electron = electronAPI();
    const terminalVisible = ref(false);
    const toggleConsoleDrawer = /* @__PURE__ */ __name(() => {
      terminalVisible.value = !terminalVisible.value;
    }, "toggleConsoleDrawer");
    onUnmounted(() => electron.Validation.dispose());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { dark: "" }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              createElementVNode("h1", _hoisted_3, toDisplayString(unref(t)("desktopUpdate.title")), 1),
              createElementVNode("div", _hoisted_4, [
                createElementVNode("span", null, toDisplayString(unref(t)("desktopUpdate.description")), 1)
              ]),
              createVNode(unref(ProgressSpinner), { class: "m-8 w-48 h-48" }),
              createVNode(unref(Button), {
                style: { "transform": "translateX(-50%)" },
                class: "fixed bottom-0 left-1/2 my-8",
                label: unref(t)("maintenance.consoleLogs"),
                icon: "pi pi-desktop",
                "icon-pos": "left",
                severity: "secondary",
                onClick: toggleConsoleDrawer
              }, null, 8, ["label"]),
              createVNode(_sfc_main$2, {
                modelValue: terminalVisible.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => terminalVisible.value = $event),
                header: unref(t)("g.terminal"),
                "default-message": unref(t)("desktopUpdate.terminalDefaultMessage")
              }, null, 8, ["modelValue", "header", "default-message"])
            ])
          ]),
          createVNode(unref(Toast))
        ]),
        _: 1
      });
    };
  }
});
const DesktopUpdateView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8d77828d"]]);
export {
  DesktopUpdateView as default
};
//# sourceMappingURL=DesktopUpdateView-in8-iDpu.js.map
