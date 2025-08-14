var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, resolveDirective, openBlock, createBlock, withCtx, createElementVNode, toDisplayString, createVNode, unref, withDirectives } from "vue";
import Button from "primevue/button";
import { br as useRouter, _ as _export_sfc } from "./index-BDQofsSe.js";
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
const _imports_0 = "" + new URL("images/sad_girl.png", import.meta.url).href;
const _hoisted_1 = { class: "sad-container" };
const _hoisted_2 = { class: "no-drag sad-text flex items-center" };
const _hoisted_3 = { class: "flex flex-col gap-8 p-8 min-w-110" };
const _hoisted_4 = { class: "text-4xl font-bold text-red-500" };
const _hoisted_5 = { class: "space-y-4" };
const _hoisted_6 = { class: "text-xl" };
const _hoisted_7 = { class: "list-disc list-inside space-y-1 text-neutral-800" };
const _hoisted_8 = { class: "flex gap-4" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "NotSupportedView",
  setup(__props) {
    const openDocs = /* @__PURE__ */ __name(() => {
      window.open(
        "https://github.com/Comfy-Org/desktop#currently-supported-platforms",
        "_blank"
      );
    }, "openDocs");
    const reportIssue = /* @__PURE__ */ __name(() => {
      window.open("https://forum.comfy.org/c/v1-feedback/", "_blank");
    }, "reportIssue");
    const router = useRouter();
    const continueToInstall = /* @__PURE__ */ __name(async () => {
      await router.push("/install");
    }, "continueToInstall");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(_sfc_main$1, null, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            _cache[0] || (_cache[0] = createElementVNode("img", {
              class: "sad-girl",
              src: _imports_0,
              alt: "Sad girl illustration"
            }, null, -1)),
            createElementVNode("div", _hoisted_2, [
              createElementVNode("div", _hoisted_3, [
                createElementVNode("h1", _hoisted_4, toDisplayString(_ctx.$t("notSupported.title")), 1),
                createElementVNode("div", _hoisted_5, [
                  createElementVNode("p", _hoisted_6, toDisplayString(_ctx.$t("notSupported.message")), 1),
                  createElementVNode("ul", _hoisted_7, [
                    createElementVNode("li", null, toDisplayString(_ctx.$t("notSupported.supportedDevices.macos")), 1),
                    createElementVNode("li", null, toDisplayString(_ctx.$t("notSupported.supportedDevices.windows")), 1)
                  ])
                ]),
                createElementVNode("div", _hoisted_8, [
                  createVNode(unref(Button), {
                    label: _ctx.$t("notSupported.learnMore"),
                    icon: "pi pi-github",
                    severity: "secondary",
                    onClick: openDocs
                  }, null, 8, ["label"]),
                  createVNode(unref(Button), {
                    label: _ctx.$t("notSupported.reportIssue"),
                    icon: "pi pi-flag",
                    severity: "secondary",
                    onClick: reportIssue
                  }, null, 8, ["label"]),
                  withDirectives(createVNode(unref(Button), {
                    label: _ctx.$t("notSupported.continue"),
                    icon: "pi pi-arrow-right",
                    "icon-pos": "right",
                    severity: "danger",
                    onClick: continueToInstall
                  }, null, 8, ["label"]), [
                    [_directive_tooltip, _ctx.$t("notSupported.continueTooltip")]
                  ])
                ])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
const NotSupportedView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a3415c6d"]]);
export {
  NotSupportedView as default
};
//# sourceMappingURL=NotSupportedView-6RpZoqmM.js.map
