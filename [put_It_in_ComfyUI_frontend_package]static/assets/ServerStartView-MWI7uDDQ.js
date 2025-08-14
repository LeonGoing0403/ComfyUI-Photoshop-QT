var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, ref, onMounted, openBlock, createBlock, withCtx, createElementVNode, createTextVNode, toDisplayString, unref, createElementBlock, createCommentVNode, createVNode, withDirectives, vShow } from "vue";
import { bs as ProgressStatus, bt as BaseTerminal, ad as electronAPI, _ as _export_sfc } from "./index-BDQofsSe.js";
import Button from "primevue/button";
import { useI18n } from "vue-i18n";
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
const _hoisted_1 = { class: "flex flex-col w-full h-full items-center" };
const _hoisted_2 = { class: "text-2xl font-bold" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = {
  key: 0,
  class: "flex flex-col items-center gap-4"
};
const _hoisted_5 = { class: "flex items-center my-4 gap-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ServerStartView",
  setup(__props) {
    const electron = electronAPI();
    const { t } = useI18n();
    const status = ref(ProgressStatus.INITIAL_STATE);
    const electronVersion = ref("");
    let xterm;
    const terminalVisible = ref(true);
    const updateProgress = /* @__PURE__ */ __name(({ status: newStatus }) => {
      status.value = newStatus;
      if (newStatus === ProgressStatus.ERROR) terminalVisible.value = false;
      else xterm?.clear();
    }, "updateProgress");
    const terminalCreated = /* @__PURE__ */ __name(({ terminal, useAutoSize }, root) => {
      xterm = terminal;
      useAutoSize({ root, autoRows: true, autoCols: true });
      electron.onLogMessage((message) => {
        terminal.write(message);
      });
      terminal.options.cursorBlink = false;
      terminal.options.disableStdin = true;
      terminal.options.cursorInactiveStyle = "block";
    }, "terminalCreated");
    const troubleshoot = /* @__PURE__ */ __name(() => electron.startTroubleshooting(), "troubleshoot");
    const reportIssue = /* @__PURE__ */ __name(() => {
      window.open("https://forum.comfy.org/c/v1-feedback/", "_blank");
    }, "reportIssue");
    const openLogs = /* @__PURE__ */ __name(() => electron.openLogsFolder(), "openLogs");
    onMounted(async () => {
      electron.sendReady();
      electron.onProgressUpdate(updateProgress);
      electronVersion.value = await electron.getElectronVersion();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, {
        dark: "",
        class: "flex-col"
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("h2", _hoisted_2, [
              createTextVNode(toDisplayString(unref(t)(`serverStart.process.${status.value}`)) + " ", 1),
              status.value === unref(ProgressStatus).ERROR ? (openBlock(), createElementBlock("span", _hoisted_3, " v" + toDisplayString(electronVersion.value), 1)) : createCommentVNode("", true)
            ]),
            status.value === unref(ProgressStatus).ERROR ? (openBlock(), createElementBlock("div", _hoisted_4, [
              createElementVNode("div", _hoisted_5, [
                createVNode(unref(Button), {
                  icon: "pi pi-flag",
                  severity: "secondary",
                  label: unref(t)("serverStart.reportIssue"),
                  onClick: reportIssue
                }, null, 8, ["label"]),
                createVNode(unref(Button), {
                  icon: "pi pi-file",
                  severity: "secondary",
                  label: unref(t)("serverStart.openLogs"),
                  onClick: openLogs
                }, null, 8, ["label"]),
                createVNode(unref(Button), {
                  icon: "pi pi-wrench",
                  label: unref(t)("serverStart.troubleshoot"),
                  onClick: troubleshoot
                }, null, 8, ["label"])
              ]),
              !terminalVisible.value ? (openBlock(), createBlock(unref(Button), {
                key: 0,
                icon: "pi pi-search",
                severity: "secondary",
                label: unref(t)("serverStart.showTerminal"),
                onClick: _cache[0] || (_cache[0] = ($event) => terminalVisible.value = true)
              }, null, 8, ["label"])) : createCommentVNode("", true)
            ])) : createCommentVNode("", true),
            withDirectives(createVNode(BaseTerminal, { onCreated: terminalCreated }, null, 512), [
              [vShow, terminalVisible.value]
            ])
          ])
        ]),
        _: 1
      });
    };
  }
});
const ServerStartView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fb80db77"]]);
export {
  ServerStartView as default
};
//# sourceMappingURL=ServerStartView-MWI7uDDQ.js.map
