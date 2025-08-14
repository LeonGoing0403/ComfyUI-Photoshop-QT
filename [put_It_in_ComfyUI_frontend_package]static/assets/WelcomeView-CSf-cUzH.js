var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, openBlock, createBlock, withCtx, createElementVNode, toDisplayString, createVNode, unref } from "vue";
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
const _hoisted_1 = { class: "flex flex-col items-center justify-center gap-8 p-8" };
const _hoisted_2 = { class: "animated-gradient-text text-glow select-none" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WelcomeView",
  setup(__props) {
    const router = useRouter();
    const navigateTo = /* @__PURE__ */ __name(async (path) => {
      await router.push(path);
    }, "navigateTo");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { dark: "" }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("h1", _hoisted_2, toDisplayString(_ctx.$t("welcome.title")), 1),
            createVNode(unref(Button), {
              label: _ctx.$t("welcome.getStarted"),
              icon: "pi pi-arrow-right",
              "icon-pos": "right",
              size: "large",
              rounded: "",
              class: "p-4 text-lg fade-in-up",
              onClick: _cache[0] || (_cache[0] = ($event) => navigateTo("/install"))
            }, null, 8, ["label"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const WelcomeView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4f018581"]]);
export {
  WelcomeView as default
};
//# sourceMappingURL=WelcomeView-CSf-cUzH.js.map
