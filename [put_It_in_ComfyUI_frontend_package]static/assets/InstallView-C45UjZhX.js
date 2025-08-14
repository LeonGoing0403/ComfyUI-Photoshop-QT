var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, ref, useModel, openBlock, createElementBlock, createElementVNode, toDisplayString, createVNode, unref, withModifiers, withCtx, computed, normalizeClass, createCommentVNode, createTextVNode, onMounted, resolveDirective, withDirectives, createBlock, watchEffect, Fragment, renderList, mergeModels, watch, toRaw } from "vue";
import Button from "primevue/button";
import Step from "primevue/step";
import StepList from "primevue/steplist";
import StepPanel from "primevue/steppanel";
import StepPanels from "primevue/steppanels";
import Stepper from "primevue/stepper";
import { ad as electronAPI, _ as _export_sfc, bu as MigrationItems, bv as ValidationState, x as normalizeI18nKey, bw as _sfc_main$7, bx as checkMirrorReachable, by as isInChina, bz as mergeValidationStates, O as t, bA as TorchMirrorUrl, br as useRouter } from "./index-BDQofsSe.js";
import Dialog from "primevue/dialog";
import Divider from "primevue/divider";
import ToggleSwitch from "primevue/toggleswitch";
import Tag from "primevue/tag";
import { useI18n } from "vue-i18n";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import InputText from "primevue/inputtext";
import Message from "primevue/message";
import Checkbox from "primevue/checkbox";
import Panel from "primevue/panel";
import { P as PYTHON_MIRROR, a as PYPI_MIRROR } from "./uvMirrors-DCz2jm9P.js";
import { _ as _sfc_main$8 } from "./BaseViewTemplate-fif-OSN_.js";
import "@primevue/themes";
import "@primevue/themes/aura";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "primevue/blockui";
import "primevue/progressspinner";
import "primevue/scrollpanel";
import "primevue/usetoast";
import "primevue/card";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "primevue/dropdown";
import "primevue/textarea";
import "primevue/listbox";
import "primevue/progressbar";
import "primevue/floatlabel";
import "primevue/tabpanels";
import "primevue/tabs";
import "primevue/badge";
import "primevue/chip";
import "primevue/select";
import "primevue/tabpanel";
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
const _hoisted_1$5 = { class: "flex flex-col gap-6 w-[600px]" };
const _hoisted_2$5 = { class: "flex flex-col gap-4" };
const _hoisted_3$5 = { class: "text-2xl font-semibold text-neutral-100" };
const _hoisted_4$5 = { class: "text-neutral-400 my-0" };
const _hoisted_5$3 = { class: "flex flex-col bg-neutral-800 p-4 rounded-lg" };
const _hoisted_6$3 = { class: "flex items-center gap-4" };
const _hoisted_7$3 = { class: "flex-1" };
const _hoisted_8$3 = { class: "text-lg font-medium text-neutral-100" };
const _hoisted_9$3 = { class: "text-sm text-neutral-400 mt-1" };
const _hoisted_10$3 = { class: "flex items-center gap-4" };
const _hoisted_11$3 = { class: "flex-1" };
const _hoisted_12$3 = { class: "text-lg font-medium text-neutral-100" };
const _hoisted_13$1 = { class: "text-sm text-neutral-400 mt-1" };
const _hoisted_14$1 = { class: "text-neutral-300" };
const _hoisted_15 = { class: "font-medium mb-2" };
const _hoisted_16 = { class: "list-disc pl-6 space-y-1" };
const _hoisted_17 = { class: "font-medium mt-4 mb-2" };
const _hoisted_18 = { class: "list-disc pl-6 space-y-1" };
const _hoisted_19 = { class: "mt-4" };
const _hoisted_20 = {
  href: "https://comfy.org/privacy",
  target: "_blank",
  class: "text-blue-400 hover:text-blue-300 underline"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DesktopSettingsConfiguration",
  props: {
    "autoUpdate": { type: Boolean, ...{ required: true } },
    "autoUpdateModifiers": {},
    "allowMetrics": { type: Boolean, ...{ required: true } },
    "allowMetricsModifiers": {}
  },
  emits: ["update:autoUpdate", "update:allowMetrics"],
  setup(__props) {
    const showDialog = ref(false);
    const autoUpdate = useModel(__props, "autoUpdate");
    const allowMetrics = useModel(__props, "allowMetrics");
    const showMetricsInfo = /* @__PURE__ */ __name(() => {
      showDialog.value = true;
    }, "showMetricsInfo");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$5, [
        createElementVNode("div", _hoisted_2$5, [
          createElementVNode("h2", _hoisted_3$5, toDisplayString(_ctx.$t("install.desktopAppSettings")), 1),
          createElementVNode("p", _hoisted_4$5, toDisplayString(_ctx.$t("install.desktopAppSettingsDescription")), 1)
        ]),
        createElementVNode("div", _hoisted_5$3, [
          createElementVNode("div", _hoisted_6$3, [
            createElementVNode("div", _hoisted_7$3, [
              createElementVNode("h3", _hoisted_8$3, toDisplayString(_ctx.$t("install.settings.autoUpdate")), 1),
              createElementVNode("p", _hoisted_9$3, toDisplayString(_ctx.$t("install.settings.autoUpdateDescription")), 1)
            ]),
            createVNode(unref(ToggleSwitch), {
              modelValue: autoUpdate.value,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => autoUpdate.value = $event)
            }, null, 8, ["modelValue"])
          ]),
          createVNode(unref(Divider)),
          createElementVNode("div", _hoisted_10$3, [
            createElementVNode("div", _hoisted_11$3, [
              createElementVNode("h3", _hoisted_12$3, toDisplayString(_ctx.$t("install.settings.allowMetrics")), 1),
              createElementVNode("p", _hoisted_13$1, toDisplayString(_ctx.$t("install.settings.allowMetricsDescription")), 1),
              createElementVNode("a", {
                href: "#",
                class: "text-sm text-blue-400 hover:text-blue-300 mt-1 inline-block",
                onClick: withModifiers(showMetricsInfo, ["prevent"])
              }, toDisplayString(_ctx.$t("install.settings.learnMoreAboutData")), 1)
            ]),
            createVNode(unref(ToggleSwitch), {
              modelValue: allowMetrics.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => allowMetrics.value = $event)
            }, null, 8, ["modelValue"])
          ])
        ]),
        createVNode(unref(Dialog), {
          visible: showDialog.value,
          "onUpdate:visible": _cache[2] || (_cache[2] = ($event) => showDialog.value = $event),
          modal: "",
          header: _ctx.$t("install.settings.dataCollectionDialog.title")
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_14$1, [
              createElementVNode("h4", _hoisted_15, toDisplayString(_ctx.$t("install.settings.dataCollectionDialog.whatWeCollect")), 1),
              createElementVNode("ul", _hoisted_16, [
                createElementVNode("li", null, toDisplayString(_ctx.$t("install.settings.dataCollectionDialog.collect.errorReports")), 1),
                createElementVNode("li", null, toDisplayString(_ctx.$t("install.settings.dataCollectionDialog.collect.systemInfo")), 1),
                createElementVNode("li", null, toDisplayString(_ctx.$t(
                  "install.settings.dataCollectionDialog.collect.userJourneyEvents"
                )), 1)
              ]),
              createElementVNode("h4", _hoisted_17, toDisplayString(_ctx.$t("install.settings.dataCollectionDialog.whatWeDoNotCollect")), 1),
              createElementVNode("ul", _hoisted_18, [
                createElementVNode("li", null, toDisplayString(_ctx.$t(
                  "install.settings.dataCollectionDialog.doNotCollect.personalInformation"
                )), 1),
                createElementVNode("li", null, toDisplayString(_ctx.$t(
                  "install.settings.dataCollectionDialog.doNotCollect.workflowContents"
                )), 1),
                createElementVNode("li", null, toDisplayString(_ctx.$t(
                  "install.settings.dataCollectionDialog.doNotCollect.fileSystemInformation"
                )), 1),
                createElementVNode("li", null, toDisplayString(_ctx.$t(
                  "install.settings.dataCollectionDialog.doNotCollect.customNodeConfigurations"
                )), 1)
              ]),
              createElementVNode("div", _hoisted_19, [
                createElementVNode("a", _hoisted_20, toDisplayString(_ctx.$t("install.settings.dataCollectionDialog.viewFullPolicy")), 1)
              ])
            ])
          ]),
          _: 1
        }, 8, ["visible", "header"])
      ]);
    };
  }
});
const _imports_0 = "" + new URL("images/nvidia-logo.svg", import.meta.url).href;
const _imports_1 = "" + new URL("images/apple-mps-logo.png", import.meta.url).href;
const _imports_2 = "" + new URL("images/manual-configuration.svg", import.meta.url).href;
const _hoisted_1$4 = { class: "flex flex-col gap-6 w-[600px] h-[30rem] select-none" };
const _hoisted_2$4 = { class: "grow flex flex-col gap-4 text-neutral-300" };
const _hoisted_3$4 = { class: "text-2xl font-semibold text-neutral-100" };
const _hoisted_4$4 = { class: "m-1 text-neutral-400" };
const _hoisted_5$2 = {
  key: 0,
  class: "m-1"
};
const _hoisted_6$2 = {
  key: 1,
  class: "m-1"
};
const _hoisted_7$2 = {
  key: 2,
  class: "text-neutral-300"
};
const _hoisted_8$2 = { class: "m-1" };
const _hoisted_9$2 = { key: 3 };
const _hoisted_10$2 = { class: "m-1" };
const _hoisted_11$2 = { class: "m-1" };
const _hoisted_12$2 = {
  for: "cpu-mode",
  class: "select-none"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "GpuPicker",
  props: {
    "device": {
      required: true
    },
    "deviceModifiers": {}
  },
  emits: ["update:device"],
  setup(__props) {
    const { t: t2 } = useI18n();
    const cpuMode = computed({
      get: /* @__PURE__ */ __name(() => selected.value === "cpu", "get"),
      set: /* @__PURE__ */ __name((value) => {
        selected.value = value ? "cpu" : null;
      }, "set")
    });
    const selected = useModel(__props, "device");
    const electron = electronAPI();
    const platform = electron.getPlatform();
    const pickGpu = /* @__PURE__ */ __name((value) => {
      const newValue = selected.value === value ? null : value;
      selected.value = newValue;
    }, "pickGpu");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$4, [
        createElementVNode("div", _hoisted_2$4, [
          createElementVNode("h2", _hoisted_3$4, toDisplayString(_ctx.$t("install.gpuSelection.selectGpu")), 1),
          createElementVNode("p", _hoisted_4$4, toDisplayString(_ctx.$t("install.gpuSelection.selectGpuDescription")) + ": ", 1),
          createElementVNode("div", {
            class: normalizeClass(["flex gap-2 text-center transition-opacity", { selected: selected.value }])
          }, [
            unref(platform) !== "darwin" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["gpu-button", { selected: selected.value === "nvidia" }]),
              role: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => pickGpu("nvidia"))
            }, _cache[4] || (_cache[4] = [
              createElementVNode("img", {
                class: "m-12",
                alt: "NVIDIA logo",
                width: "196",
                height: "32",
                src: _imports_0
              }, null, -1)
            ]), 2)) : createCommentVNode("", true),
            unref(platform) === "darwin" ? (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass(["gpu-button", { selected: selected.value === "mps" }]),
              role: "button",
              onClick: _cache[1] || (_cache[1] = ($event) => pickGpu("mps"))
            }, _cache[5] || (_cache[5] = [
              createElementVNode("img", {
                class: "rounded-lg hover-brighten",
                alt: "Apple Metal Performance Shaders Logo",
                width: "292",
                ratio: "",
                src: _imports_1
              }, null, -1)
            ]), 2)) : createCommentVNode("", true),
            createElementVNode("div", {
              class: normalizeClass(["gpu-button", { selected: selected.value === "unsupported" }]),
              role: "button",
              onClick: _cache[2] || (_cache[2] = ($event) => pickGpu("unsupported"))
            }, _cache[6] || (_cache[6] = [
              createElementVNode("img", {
                class: "m-12",
                alt: "Manual configuration",
                width: "196",
                src: _imports_2
              }, null, -1)
            ]), 2)
          ], 2),
          selected.value === "nvidia" ? (openBlock(), createElementBlock("p", _hoisted_5$2, [
            createVNode(unref(Tag), {
              icon: "pi pi-check",
              severity: "success",
              value: "CUDA"
            }),
            createTextVNode(" " + toDisplayString(_ctx.$t("install.gpuSelection.nvidiaDescription")), 1)
          ])) : createCommentVNode("", true),
          selected.value === "mps" ? (openBlock(), createElementBlock("p", _hoisted_6$2, [
            createVNode(unref(Tag), {
              icon: "pi pi-check",
              severity: "success",
              value: "MPS"
            }),
            createTextVNode(" " + toDisplayString(_ctx.$t("install.gpuSelection.mpsDescription")), 1)
          ])) : createCommentVNode("", true),
          selected.value === "unsupported" ? (openBlock(), createElementBlock("div", _hoisted_7$2, [
            createElementVNode("p", _hoisted_8$2, [
              createVNode(unref(Tag), {
                icon: "pi pi-exclamation-triangle",
                severity: "warn",
                value: unref(t2)("icon.exclamation-triangle")
              }, null, 8, ["value"]),
              createTextVNode(" " + toDisplayString(_ctx.$t("install.gpuSelection.customSkipsPython")), 1)
            ]),
            createElementVNode("ul", null, [
              createElementVNode("li", null, [
                createElementVNode("strong", null, toDisplayString(_ctx.$t("install.gpuSelection.customComfyNeedsPython")), 1)
              ]),
              createElementVNode("li", null, toDisplayString(_ctx.$t("install.gpuSelection.customManualVenv")), 1),
              createElementVNode("li", null, toDisplayString(_ctx.$t("install.gpuSelection.customInstallRequirements")), 1),
              createElementVNode("li", null, toDisplayString(_ctx.$t("install.gpuSelection.customMayNotWork")), 1)
            ])
          ])) : createCommentVNode("", true),
          selected.value === "cpu" ? (openBlock(), createElementBlock("div", _hoisted_9$2, [
            createElementVNode("p", _hoisted_10$2, [
              createVNode(unref(Tag), {
                icon: "pi pi-exclamation-triangle",
                severity: "warn",
                value: unref(t2)("icon.exclamation-triangle")
              }, null, 8, ["value"]),
              createTextVNode(" " + toDisplayString(_ctx.$t("install.gpuSelection.cpuModeDescription")), 1)
            ]),
            createElementVNode("p", _hoisted_11$2, toDisplayString(_ctx.$t("install.gpuSelection.cpuModeDescription2")), 1)
          ])) : createCommentVNode("", true)
        ]),
        createElementVNode("div", {
          class: normalizeClass(["transition-opacity flex gap-3 h-0", {
            "opacity-40": selected.value && selected.value !== "cpu"
          }])
        }, [
          createVNode(unref(ToggleSwitch), {
            modelValue: cpuMode.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => cpuMode.value = $event),
            "input-id": "cpu-mode",
            class: "-translate-y-40"
          }, null, 8, ["modelValue"]),
          createElementVNode("label", _hoisted_12$2, toDisplayString(_ctx.$t("install.gpuSelection.enableCpuMode")), 1)
        ], 2)
      ]);
    };
  }
});
const GpuPicker = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-b6ad21dc"]]);
const _hoisted_1$3 = { class: "flex flex-col gap-6 w-[600px]" };
const _hoisted_2$3 = { class: "flex flex-col gap-4" };
const _hoisted_3$3 = { class: "text-2xl font-semibold text-neutral-100" };
const _hoisted_4$3 = { class: "text-neutral-400 my-0" };
const _hoisted_5$1 = { class: "flex gap-2" };
const _hoisted_6$1 = { class: "bg-neutral-800 p-4 rounded-lg" };
const _hoisted_7$1 = { class: "text-lg font-medium mt-0 mb-3 text-neutral-100" };
const _hoisted_8$1 = { class: "flex flex-col gap-2" };
const _hoisted_9$1 = { class: "flex items-center gap-2" };
const _hoisted_10$1 = { class: "text-neutral-200" };
const _hoisted_11$1 = { class: "pi pi-info-circle" };
const _hoisted_12$1 = { class: "flex items-center gap-2" };
const _hoisted_13 = { class: "text-neutral-200" };
const _hoisted_14 = { class: "pi pi-info-circle" };
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "InstallLocationPicker",
  props: {
    "installPath": { required: true },
    "installPathModifiers": {},
    "pathError": { required: true },
    "pathErrorModifiers": {}
  },
  emits: ["update:installPath", "update:pathError"],
  setup(__props) {
    const { t: t2 } = useI18n();
    const installPath = useModel(__props, "installPath");
    const pathError = useModel(__props, "pathError");
    const pathExists = ref(false);
    const nonDefaultDrive = ref(false);
    const appData = ref("");
    const appPath = ref("");
    const inputTouched = ref(false);
    const electron = electronAPI();
    onMounted(async () => {
      const paths = await electron.getSystemPaths();
      appData.value = paths.appData;
      appPath.value = paths.appPath;
      installPath.value = paths.defaultInstallPath;
      await validatePath(paths.defaultInstallPath);
    });
    const validatePath = /* @__PURE__ */ __name(async (path) => {
      try {
        pathError.value = "";
        pathExists.value = false;
        nonDefaultDrive.value = false;
        const validation = await electron.validateInstallPath(path ?? "");
        if (!validation.isValid) {
          const errors = [];
          if (validation.cannotWrite) errors.push(t2("install.cannotWrite"));
          if (validation.freeSpace < validation.requiredSpace) {
            const requiredGB = validation.requiredSpace / 1024 / 1024 / 1024;
            errors.push(`${t2("install.insufficientFreeSpace")}: ${requiredGB} GB`);
          }
          if (validation.parentMissing) errors.push(t2("install.parentMissing"));
          if (validation.isOneDrive) errors.push(t2("install.isOneDrive"));
          if (validation.error)
            errors.push(`${t2("install.unhandledError")}: ${validation.error}`);
          pathError.value = errors.join("\n");
        }
        if (validation.isNonDefaultDrive) nonDefaultDrive.value = true;
        if (validation.exists) pathExists.value = true;
      } catch (error) {
        pathError.value = t2("install.pathValidationFailed");
      }
    }, "validatePath");
    const browsePath = /* @__PURE__ */ __name(async () => {
      try {
        const result = await electron.showDirectoryPicker();
        if (result) {
          installPath.value = result;
          await validatePath(result);
        }
      } catch (error) {
        pathError.value = t2("install.failedToSelectDirectory");
      }
    }, "browsePath");
    const onFocus = /* @__PURE__ */ __name(async () => {
      if (!inputTouched.value) {
        inputTouched.value = true;
        return;
      }
      await validatePath(installPath.value);
    }, "onFocus");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createElementVNode("div", _hoisted_2$3, [
          createElementVNode("h2", _hoisted_3$3, toDisplayString(_ctx.$t("install.chooseInstallationLocation")), 1),
          createElementVNode("p", _hoisted_4$3, toDisplayString(_ctx.$t("install.installLocationDescription")), 1),
          createElementVNode("div", _hoisted_5$1, [
            createVNode(unref(IconField), { class: "flex-1" }, {
              default: withCtx(() => [
                createVNode(unref(InputText), {
                  modelValue: installPath.value,
                  "onUpdate:modelValue": [
                    _cache[0] || (_cache[0] = ($event) => installPath.value = $event),
                    validatePath
                  ],
                  class: normalizeClass(["w-full", { "p-invalid": pathError.value }]),
                  onFocus
                }, null, 8, ["modelValue", "class"]),
                withDirectives(createVNode(unref(InputIcon), { class: "pi pi-info-circle" }, null, 512), [
                  [
                    _directive_tooltip,
                    _ctx.$t("install.installLocationTooltip"),
                    void 0,
                    { top: true }
                  ]
                ])
              ]),
              _: 1
            }),
            createVNode(unref(Button), {
              icon: "pi pi-folder",
              class: "w-12",
              onClick: browsePath
            })
          ]),
          pathError.value ? (openBlock(), createBlock(unref(Message), {
            key: 0,
            severity: "error",
            class: "whitespace-pre-line"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(pathError.value), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          pathExists.value ? (openBlock(), createBlock(unref(Message), {
            key: 1,
            severity: "warn"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("install.pathExists")), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          nonDefaultDrive.value ? (openBlock(), createBlock(unref(Message), {
            key: 2,
            severity: "warn"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.$t("install.nonDefaultDrive")), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_6$1, [
          createElementVNode("h3", _hoisted_7$1, toDisplayString(_ctx.$t("install.systemLocations")), 1),
          createElementVNode("div", _hoisted_8$1, [
            createElementVNode("div", _hoisted_9$1, [
              _cache[1] || (_cache[1] = createElementVNode("i", { class: "pi pi-folder text-neutral-400" }, null, -1)),
              _cache[2] || (_cache[2] = createElementVNode("span", { class: "text-neutral-400" }, "App Data:", -1)),
              createElementVNode("span", _hoisted_10$1, toDisplayString(appData.value), 1),
              withDirectives(createElementVNode("span", _hoisted_11$1, null, 512), [
                [_directive_tooltip, _ctx.$t("install.appDataLocationTooltip")]
              ])
            ]),
            createElementVNode("div", _hoisted_12$1, [
              _cache[3] || (_cache[3] = createElementVNode("i", { class: "pi pi-desktop text-neutral-400" }, null, -1)),
              _cache[4] || (_cache[4] = createElementVNode("span", { class: "text-neutral-400" }, "App Path:", -1)),
              createElementVNode("span", _hoisted_13, toDisplayString(appPath.value), 1),
              withDirectives(createElementVNode("span", _hoisted_14, null, 512), [
                [_directive_tooltip, _ctx.$t("install.appPathLocationTooltip")]
              ])
            ])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$2 = { class: "flex flex-col gap-6 w-[600px]" };
const _hoisted_2$2 = { class: "flex flex-col gap-4" };
const _hoisted_3$2 = { class: "text-2xl font-semibold text-neutral-100" };
const _hoisted_4$2 = { class: "text-neutral-400 my-0" };
const _hoisted_5 = { class: "flex gap-2" };
const _hoisted_6 = {
  key: 0,
  class: "flex flex-col gap-4 bg-neutral-800 p-4 rounded-lg"
};
const _hoisted_7 = { class: "text-lg mt-0 font-medium text-neutral-100" };
const _hoisted_8 = { class: "flex flex-col gap-3" };
const _hoisted_9 = ["onClick"];
const _hoisted_10 = ["for"];
const _hoisted_11 = { class: "text-sm text-neutral-400 my-1" };
const _hoisted_12 = {
  key: 1,
  class: "text-neutral-400 italic"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "MigrationPicker",
  props: {
    "sourcePath": { required: false },
    "sourcePathModifiers": {},
    "migrationItemIds": {
      required: false
    },
    "migrationItemIdsModifiers": {}
  },
  emits: ["update:sourcePath", "update:migrationItemIds"],
  setup(__props) {
    const { t: t2 } = useI18n();
    const electron = electronAPI();
    const sourcePath = useModel(__props, "sourcePath");
    const migrationItemIds = useModel(__props, "migrationItemIds");
    const migrationItems = ref(
      MigrationItems.map((item) => ({
        ...item,
        selected: true
      }))
    );
    const pathError = ref("");
    const isValidSource = computed(
      () => sourcePath.value !== "" && pathError.value === ""
    );
    const validateSource = /* @__PURE__ */ __name(async (sourcePath2) => {
      if (!sourcePath2) {
        pathError.value = "";
        return;
      }
      try {
        pathError.value = "";
        const validation = await electron.validateComfyUISource(sourcePath2);
        if (!validation.isValid) pathError.value = validation.error ?? "ERROR";
      } catch (error) {
        console.error(error);
        pathError.value = t2("install.pathValidationFailed");
      }
    }, "validateSource");
    const browsePath = /* @__PURE__ */ __name(async () => {
      try {
        const result = await electron.showDirectoryPicker();
        if (result) {
          sourcePath.value = result;
          await validateSource(result);
        }
      } catch (error) {
        console.error(error);
        pathError.value = t2("install.failedToSelectDirectory");
      }
    }, "browsePath");
    watchEffect(() => {
      migrationItemIds.value = migrationItems.value.filter((item) => item.selected).map((item) => item.id);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        createElementVNode("div", _hoisted_2$2, [
          createElementVNode("h2", _hoisted_3$2, toDisplayString(_ctx.$t("install.migrateFromExistingInstallation")), 1),
          createElementVNode("p", _hoisted_4$2, toDisplayString(_ctx.$t("install.migrationSourcePathDescription")), 1),
          createElementVNode("div", _hoisted_5, [
            createVNode(unref(InputText), {
              modelValue: sourcePath.value,
              "onUpdate:modelValue": [
                _cache[0] || (_cache[0] = ($event) => sourcePath.value = $event),
                validateSource
              ],
              placeholder: "Select existing ComfyUI installation (optional)",
              class: normalizeClass(["flex-1", { "p-invalid": pathError.value }])
            }, null, 8, ["modelValue", "class"]),
            createVNode(unref(Button), {
              icon: "pi pi-folder",
              class: "w-12",
              onClick: browsePath
            })
          ]),
          pathError.value ? (openBlock(), createBlock(unref(Message), {
            key: 0,
            severity: "error"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(pathError.value), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        isValidSource.value ? (openBlock(), createElementBlock("div", _hoisted_6, [
          createElementVNode("h3", _hoisted_7, toDisplayString(_ctx.$t("install.selectItemsToMigrate")), 1),
          createElementVNode("div", _hoisted_8, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(migrationItems.value, (item) => {
              return openBlock(), createElementBlock("div", {
                key: item.id,
                class: "flex items-center gap-3 p-2 hover:bg-neutral-700 rounded",
                onClick: /* @__PURE__ */ __name(($event) => item.selected = !item.selected, "onClick")
              }, [
                createVNode(unref(Checkbox), {
                  modelValue: item.selected,
                  "onUpdate:modelValue": /* @__PURE__ */ __name(($event) => item.selected = $event, "onUpdate:modelValue"),
                  "input-id": item.id,
                  binary: true,
                  onClick: _cache[1] || (_cache[1] = withModifiers(() => {
                  }, ["stop"]))
                }, null, 8, ["modelValue", "onUpdate:modelValue", "input-id"]),
                createElementVNode("div", null, [
                  createElementVNode("label", {
                    for: item.id,
                    class: "text-neutral-200 font-medium"
                  }, toDisplayString(item.label), 9, _hoisted_10),
                  createElementVNode("p", _hoisted_11, toDisplayString(item.description), 1)
                ])
              ], 8, _hoisted_9);
            }), 128))
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_12, toDisplayString(_ctx.$t("install.migrationOptional")), 1))
      ]);
    };
  }
});
const _hoisted_1$1 = { class: "flex flex-col items-center gap-4" };
const _hoisted_2$1 = { class: "w-full" };
const _hoisted_3$1 = { class: "text-lg font-medium text-neutral-100" };
const _hoisted_4$1 = { class: "text-sm text-neutral-400 mt-1" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "MirrorItem",
  props: /* @__PURE__ */ mergeModels({
    item: {}
  }, {
    "modelValue": { required: true },
    "modelModifiers": {}
  }),
  emits: /* @__PURE__ */ mergeModels(["state-change"], ["update:modelValue"]),
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const modelValue = useModel(__props, "modelValue");
    const validationState = ref(ValidationState.IDLE);
    const normalizedSettingId = computed(() => {
      return normalizeI18nKey(__props.item.settingId);
    });
    onMounted(() => {
      modelValue.value = __props.item.mirror;
    });
    watch(validationState, (newState) => {
      emit("state-change", newState);
      if (newState === ValidationState.INVALID && modelValue.value === __props.item.mirror) {
        modelValue.value = __props.item.fallbackMirror;
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("div", _hoisted_2$1, [
          createElementVNode("h3", _hoisted_3$1, toDisplayString(_ctx.$t(`settings.${normalizedSettingId.value}.name`)), 1),
          createElementVNode("p", _hoisted_4$1, toDisplayString(_ctx.$t(`settings.${normalizedSettingId.value}.tooltip`)), 1)
        ]),
        createVNode(_sfc_main$7, {
          modelValue: modelValue.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => modelValue.value = $event),
          "validate-url-fn": /* @__PURE__ */ __name((mirror) => unref(checkMirrorReachable)(mirror + (_ctx.item.validationPathSuffix ?? "")), "validate-url-fn"),
          onStateChange: _cache[1] || (_cache[1] = ($event) => validationState.value = $event)
        }, null, 8, ["modelValue", "validate-url-fn"])
      ]);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "MirrorsConfiguration",
  props: /* @__PURE__ */ mergeModels({
    device: {}
  }, {
    "pythonMirror": { required: true },
    "pythonMirrorModifiers": {},
    "pypiMirror": { required: true },
    "pypiMirrorModifiers": {},
    "torchMirror": { required: true },
    "torchMirrorModifiers": {}
  }),
  emits: ["update:pythonMirror", "update:pypiMirror", "update:torchMirror"],
  setup(__props) {
    const showMirrorInputs = ref(false);
    const pythonMirror = useModel(__props, "pythonMirror");
    const pypiMirror = useModel(__props, "pypiMirror");
    const torchMirror = useModel(__props, "torchMirror");
    const getTorchMirrorItem = /* @__PURE__ */ __name((device) => {
      const settingId = "Comfy-Desktop.UV.TorchInstallMirror";
      switch (device) {
        case "mps":
          return {
            settingId,
            mirror: TorchMirrorUrl.NightlyCpu,
            fallbackMirror: TorchMirrorUrl.NightlyCpu
          };
        case "nvidia":
          return {
            settingId,
            mirror: TorchMirrorUrl.Cuda,
            fallbackMirror: TorchMirrorUrl.Cuda
          };
        case "cpu":
        default:
          return {
            settingId,
            mirror: PYPI_MIRROR.mirror,
            fallbackMirror: PYPI_MIRROR.fallbackMirror
          };
      }
    }, "getTorchMirrorItem");
    const userIsInChina = ref(false);
    onMounted(async () => {
      userIsInChina.value = await isInChina();
    });
    const useFallbackMirror = /* @__PURE__ */ __name((mirror) => ({
      ...mirror,
      mirror: mirror.fallbackMirror
    }), "useFallbackMirror");
    const mirrors = computed(
      () => [
        [PYTHON_MIRROR, pythonMirror],
        [PYPI_MIRROR, pypiMirror],
        [getTorchMirrorItem(__props.device ?? "cpu"), torchMirror]
      ].map(([item, modelValue]) => [
        userIsInChina.value ? useFallbackMirror(item) : item,
        modelValue
      ])
    );
    const validationStates = ref(
      mirrors.value.map(() => ValidationState.IDLE)
    );
    const validationState = computed(() => {
      return mergeValidationStates(validationStates.value);
    });
    const validationStateTooltip = computed(() => {
      switch (validationState.value) {
        case ValidationState.INVALID:
          return t("install.settings.mirrorsUnreachable");
        case ValidationState.VALID:
          return t("install.settings.mirrorsReachable");
        default:
          return t("install.settings.checkingMirrors");
      }
    });
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(unref(Panel), {
        header: _ctx.$t("install.settings.mirrorSettings"),
        toggleable: "",
        collapsed: !showMirrorInputs.value,
        "pt:root": "bg-neutral-800 border-none w-[600px]"
      }, {
        icons: withCtx(() => [
          withDirectives(createElementVNode("i", {
            class: normalizeClass({
              "pi pi-spin pi-spinner text-neutral-400": validationState.value === unref(ValidationState).LOADING,
              "pi pi-check text-green-500": validationState.value === unref(ValidationState).VALID,
              "pi pi-times text-red-500": validationState.value === unref(ValidationState).INVALID
            })
          }, null, 2), [
            [_directive_tooltip, validationStateTooltip.value]
          ])
        ]),
        default: withCtx(() => [
          (openBlock(true), createElementBlock(Fragment, null, renderList(mirrors.value, ([item, modelValue], index) => {
            return openBlock(), createElementBlock(Fragment, {
              key: item.settingId + item.mirror
            }, [
              index > 0 ? (openBlock(), createBlock(unref(Divider), { key: 0 })) : createCommentVNode("", true),
              createVNode(_sfc_main$2, {
                modelValue: modelValue.value,
                "onUpdate:modelValue": /* @__PURE__ */ __name(($event) => modelValue.value = $event, "onUpdate:modelValue"),
                item,
                onStateChange: /* @__PURE__ */ __name(($event) => validationStates.value[index] = $event, "onStateChange")
              }, null, 8, ["modelValue", "onUpdate:modelValue", "item", "onStateChange"])
            ], 64);
          }), 128))
        ]),
        _: 1
      }, 8, ["header", "collapsed"]);
    };
  }
});
const _hoisted_1 = { class: "flex pt-6 justify-end" };
const _hoisted_2 = { class: "flex pt-6 justify-between" };
const _hoisted_3 = { class: "flex pt-6 justify-between" };
const _hoisted_4 = { class: "flex mt-6 justify-between" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "InstallView",
  setup(__props) {
    const device = ref(null);
    const installPath = ref("");
    const pathError = ref("");
    const migrationSourcePath = ref("");
    const migrationItemIds = ref([]);
    const autoUpdate = ref(true);
    const allowMetrics = ref(true);
    const pythonMirror = ref("");
    const pypiMirror = ref("");
    const torchMirror = ref("");
    const highestStep = ref(0);
    const handleStepChange = /* @__PURE__ */ __name((value) => {
      setHighestStep(value);
      electronAPI().Events.trackEvent("install_stepper_change", {
        step: value
      });
    }, "handleStepChange");
    const setHighestStep = /* @__PURE__ */ __name((value) => {
      const int = typeof value === "number" ? value : parseInt(value, 10);
      if (!isNaN(int) && int > highestStep.value) highestStep.value = int;
    }, "setHighestStep");
    const hasError = computed(() => pathError.value !== "");
    const noGpu = computed(() => typeof device.value !== "string");
    const electron = electronAPI();
    const router = useRouter();
    const install = /* @__PURE__ */ __name(async () => {
      const options = {
        installPath: installPath.value,
        autoUpdate: autoUpdate.value,
        allowMetrics: allowMetrics.value,
        migrationSourcePath: migrationSourcePath.value,
        migrationItemIds: toRaw(migrationItemIds.value),
        pythonMirror: pythonMirror.value,
        pypiMirror: pypiMirror.value,
        torchMirror: torchMirror.value,
        // @ts-expect-error fixme ts strict error
        device: device.value
      };
      electron.installComfyUI(options);
      const nextPage = options.device === "unsupported" ? "/manual-configuration" : "/server-start";
      await router.push(nextPage);
    }, "install");
    onMounted(async () => {
      if (!electron) return;
      const detectedGpu = await electron.Config.getDetectedGpu();
      if (detectedGpu === "mps" || detectedGpu === "nvidia") {
        device.value = detectedGpu;
      }
      electronAPI().Events.trackEvent("install_stepper_change", {
        step: "0",
        gpu: detectedGpu
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$8, { dark: "" }, {
        default: withCtx(() => [
          createVNode(unref(Stepper), {
            class: "h-full p-8 2xl:p-16",
            value: "0",
            "onUpdate:value": handleStepChange
          }, {
            default: withCtx(() => [
              createVNode(unref(StepList), { class: "select-none" }, {
                default: withCtx(() => [
                  createVNode(unref(Step), { value: "0" }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("install.gpu")), 1)
                    ]),
                    _: 1
                  }),
                  createVNode(unref(Step), {
                    value: "1",
                    disabled: noGpu.value
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("install.installLocation")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(unref(Step), {
                    value: "2",
                    disabled: noGpu.value || hasError.value || highestStep.value < 1
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("install.migration")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"]),
                  createVNode(unref(Step), {
                    value: "3",
                    disabled: noGpu.value || hasError.value || highestStep.value < 2
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.$t("install.desktopSettings")), 1)
                    ]),
                    _: 1
                  }, 8, ["disabled"])
                ]),
                _: 1
              }),
              createVNode(unref(StepPanels), null, {
                default: withCtx(() => [
                  createVNode(unref(StepPanel), { value: "0" }, {
                    default: withCtx(({ activateCallback }) => [
                      createVNode(GpuPicker, {
                        device: device.value,
                        "onUpdate:device": _cache[0] || (_cache[0] = ($event) => device.value = $event)
                      }, null, 8, ["device"]),
                      createElementVNode("div", _hoisted_1, [
                        createVNode(unref(Button), {
                          label: _ctx.$t("g.next"),
                          icon: "pi pi-arrow-right",
                          "icon-pos": "right",
                          disabled: typeof device.value !== "string",
                          onClick: /* @__PURE__ */ __name(($event) => activateCallback("1"), "onClick")
                        }, null, 8, ["label", "disabled", "onClick"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(StepPanel), { value: "1" }, {
                    default: withCtx(({ activateCallback }) => [
                      createVNode(_sfc_main$4, {
                        installPath: installPath.value,
                        "onUpdate:installPath": _cache[1] || (_cache[1] = ($event) => installPath.value = $event),
                        pathError: pathError.value,
                        "onUpdate:pathError": _cache[2] || (_cache[2] = ($event) => pathError.value = $event)
                      }, null, 8, ["installPath", "pathError"]),
                      createElementVNode("div", _hoisted_2, [
                        createVNode(unref(Button), {
                          label: _ctx.$t("g.back"),
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          onClick: /* @__PURE__ */ __name(($event) => activateCallback("0"), "onClick")
                        }, null, 8, ["label", "onClick"]),
                        createVNode(unref(Button), {
                          label: _ctx.$t("g.next"),
                          icon: "pi pi-arrow-right",
                          "icon-pos": "right",
                          disabled: pathError.value !== "",
                          onClick: /* @__PURE__ */ __name(($event) => activateCallback("2"), "onClick")
                        }, null, 8, ["label", "disabled", "onClick"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(StepPanel), { value: "2" }, {
                    default: withCtx(({ activateCallback }) => [
                      createVNode(_sfc_main$3, {
                        sourcePath: migrationSourcePath.value,
                        "onUpdate:sourcePath": _cache[3] || (_cache[3] = ($event) => migrationSourcePath.value = $event),
                        migrationItemIds: migrationItemIds.value,
                        "onUpdate:migrationItemIds": _cache[4] || (_cache[4] = ($event) => migrationItemIds.value = $event)
                      }, null, 8, ["sourcePath", "migrationItemIds"]),
                      createElementVNode("div", _hoisted_3, [
                        createVNode(unref(Button), {
                          label: _ctx.$t("g.back"),
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          onClick: /* @__PURE__ */ __name(($event) => activateCallback("1"), "onClick")
                        }, null, 8, ["label", "onClick"]),
                        createVNode(unref(Button), {
                          label: _ctx.$t("g.next"),
                          icon: "pi pi-arrow-right",
                          "icon-pos": "right",
                          onClick: /* @__PURE__ */ __name(($event) => activateCallback("3"), "onClick")
                        }, null, 8, ["label", "onClick"])
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(unref(StepPanel), { value: "3" }, {
                    default: withCtx(({ activateCallback }) => [
                      createVNode(_sfc_main$6, {
                        autoUpdate: autoUpdate.value,
                        "onUpdate:autoUpdate": _cache[5] || (_cache[5] = ($event) => autoUpdate.value = $event),
                        allowMetrics: allowMetrics.value,
                        "onUpdate:allowMetrics": _cache[6] || (_cache[6] = ($event) => allowMetrics.value = $event)
                      }, null, 8, ["autoUpdate", "allowMetrics"]),
                      createVNode(_sfc_main$1, {
                        pythonMirror: pythonMirror.value,
                        "onUpdate:pythonMirror": _cache[7] || (_cache[7] = ($event) => pythonMirror.value = $event),
                        pypiMirror: pypiMirror.value,
                        "onUpdate:pypiMirror": _cache[8] || (_cache[8] = ($event) => pypiMirror.value = $event),
                        torchMirror: torchMirror.value,
                        "onUpdate:torchMirror": _cache[9] || (_cache[9] = ($event) => torchMirror.value = $event),
                        device: device.value,
                        class: "mt-6"
                      }, null, 8, ["pythonMirror", "pypiMirror", "torchMirror", "device"]),
                      createElementVNode("div", _hoisted_4, [
                        createVNode(unref(Button), {
                          label: _ctx.$t("g.back"),
                          severity: "secondary",
                          icon: "pi pi-arrow-left",
                          onClick: /* @__PURE__ */ __name(($event) => activateCallback("2"), "onClick")
                        }, null, 8, ["label", "onClick"]),
                        createVNode(unref(Button), {
                          label: _ctx.$t("g.install"),
                          icon: "pi pi-check",
                          "icon-pos": "right",
                          disabled: hasError.value,
                          onClick: _cache[10] || (_cache[10] = ($event) => install())
                        }, null, 8, ["label", "disabled"])
                      ])
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          })
        ]),
        _: 1
      });
    };
  }
});
const InstallView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-575095bc"]]);
export {
  InstallView as default
};
//# sourceMappingURL=InstallView-C45UjZhX.js.map
