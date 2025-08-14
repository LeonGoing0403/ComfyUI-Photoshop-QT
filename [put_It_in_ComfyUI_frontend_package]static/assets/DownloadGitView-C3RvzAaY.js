var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, openBlock, createBlock, withCtx, createElementVNode, toDisplayString, createVNode, unref } from "vue";
import Button from "primevue/button";
import { br as useRouter } from "./index-BDQofsSe.js";
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
const _hoisted_1 = { class: "max-w-screen-sm flex flex-col gap-8 p-8 bg-[url('/assets/images/Git-Logo-White.svg')] bg-no-repeat bg-right-top bg-origin-padding" };
const _hoisted_2 = { class: "mt-24 text-4xl font-bold text-red-500" };
const _hoisted_3 = { class: "space-y-4" };
const _hoisted_4 = { class: "text-xl" };
const _hoisted_5 = { class: "text-xl" };
const _hoisted_6 = { class: "text-m" };
const _hoisted_7 = { class: "flex gap-4 flex-row-reverse" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DownloadGitView",
  setup(__props) {
    const openGitDownloads = /* @__PURE__ */ __name(() => {
      window.open("https://git-scm.com/downloads/", "_blank");
    }, "openGitDownloads");
    const skipGit = /* @__PURE__ */ __name(async () => {
      console.warn("pushing");
      const router = useRouter();
      await router.push("install");
    }, "skipGit");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, null, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("h1", _hoisted_2, toDisplayString(_ctx.$t("downloadGit.title")), 1),
            createElementVNode("div", _hoisted_3, [
              createElementVNode("p", _hoisted_4, toDisplayString(_ctx.$t("downloadGit.message")), 1),
              createElementVNode("p", _hoisted_5, toDisplayString(_ctx.$t("downloadGit.instructions")), 1),
              createElementVNode("p", _hoisted_6, toDisplayString(_ctx.$t("downloadGit.warning")), 1)
            ]),
            createElementVNode("div", _hoisted_7, [
              createVNode(unref(Button), {
                label: _ctx.$t("downloadGit.gitWebsite"),
                icon: "pi pi-external-link",
                "icon-pos": "right",
                severity: "primary",
                onClick: openGitDownloads
              }, null, 8, ["label"]),
              createVNode(unref(Button), {
                label: _ctx.$t("downloadGit.skip"),
                icon: "pi pi-exclamation-triangle",
                severity: "secondary",
                onClick: skipGit
              }, null, 8, ["label"])
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
//# sourceMappingURL=DownloadGitView-C3RvzAaY.js.map
