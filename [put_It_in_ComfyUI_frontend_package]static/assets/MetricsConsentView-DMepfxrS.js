var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { _ as _sfc_main$1 } from "./BaseViewTemplate-fif-OSN_.js";
import { defineComponent, ref, openBlock, createBlock, withCtx, createElementVNode, toDisplayString, createTextVNode, createVNode, unref } from "vue";
import Button from "primevue/button";
import ToggleSwitch from "primevue/toggleswitch";
import { useToast } from "primevue/usetoast";
import { useI18n } from "vue-i18n";
import { br as useRouter, ad as electronAPI } from "./index-BDQofsSe.js";
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
const _hoisted_1 = { class: "h-full p-8 2xl:p-16 flex flex-col items-center justify-center" };
const _hoisted_2 = { class: "bg-neutral-800 rounded-lg shadow-lg p-6 w-full max-w-[600px] flex flex-col gap-6" };
const _hoisted_3 = { class: "text-3xl font-semibold text-neutral-100" };
const _hoisted_4 = { class: "text-neutral-400" };
const _hoisted_5 = { class: "text-neutral-400" };
const _hoisted_6 = {
  href: "https://comfy.org/privacy",
  target: "_blank",
  class: "text-blue-400 hover:text-blue-300 underline"
};
const _hoisted_7 = { class: "flex items-center gap-4" };
const _hoisted_8 = {
  id: "metricsDescription",
  class: "text-neutral-100"
};
const _hoisted_9 = { class: "flex pt-6 justify-end" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "MetricsConsentView",
  setup(__props) {
    const toast = useToast();
    const { t } = useI18n();
    const allowMetrics = ref(true);
    const router = useRouter();
    const isUpdating = ref(false);
    const updateConsent = /* @__PURE__ */ __name(async () => {
      isUpdating.value = true;
      try {
        await electronAPI().setMetricsConsent(allowMetrics.value);
      } catch (error) {
        toast.add({
          severity: "error",
          summary: t("install.errorUpdatingConsent"),
          detail: t("install.errorUpdatingConsentDetail"),
          life: 3e3
        });
      } finally {
        isUpdating.value = false;
      }
      await router.push("/");
    }, "updateConsent");
    return (_ctx, _cache) => {
      const _component_BaseViewTemplate = _sfc_main$1;
      return openBlock(), createBlock(_component_BaseViewTemplate, { dark: "" }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("div", _hoisted_2, [
              createElementVNode("h2", _hoisted_3, toDisplayString(_ctx.$t("install.helpImprove")), 1),
              createElementVNode("p", _hoisted_4, toDisplayString(_ctx.$t("install.updateConsent")), 1),
              createElementVNode("p", _hoisted_5, [
                createTextVNode(toDisplayString(_ctx.$t("install.moreInfo")) + " ", 1),
                createElementVNode("a", _hoisted_6, toDisplayString(_ctx.$t("install.privacyPolicy")), 1),
                _cache[1] || (_cache[1] = createTextVNode(". "))
              ]),
              createElementVNode("div", _hoisted_7, [
                createVNode(unref(ToggleSwitch), {
                  modelValue: allowMetrics.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => allowMetrics.value = $event),
                  "aria-describedby": "metricsDescription"
                }, null, 8, ["modelValue"]),
                createElementVNode("span", _hoisted_8, toDisplayString(allowMetrics.value ? _ctx.$t("install.metricsEnabled") : _ctx.$t("install.metricsDisabled")), 1)
              ]),
              createElementVNode("div", _hoisted_9, [
                createVNode(unref(Button), {
                  label: _ctx.$t("g.ok"),
                  icon: "pi pi-check",
                  loading: isUpdating.value,
                  "icon-pos": "right",
                  onClick: updateConsent
                }, null, 8, ["label", "loading"])
              ])
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
export {
  _sfc_main as default
};
//# sourceMappingURL=MetricsConsentView-DMepfxrS.js.map
