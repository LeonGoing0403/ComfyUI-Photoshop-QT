var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, computed, openBlock, createElementBlock, Fragment, renderList, createVNode, unref, withCtx, createTextVNode, toDisplayString, createCommentVNode, ref, watchEffect, resolveDirective, createBlock, createElementVNode, withModifiers, withDirectives } from "vue";
import { F as FilterMatchMode } from "./index-C3QelI1n.js";
import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Message from "primevue/message";
import Tag from "primevue/tag";
import { useToast } from "primevue/usetoast";
import { useI18n } from "vue-i18n";
import { p as useKeybindingStore, o as useCommandStore, x as normalizeI18nKey, bW as _sfc_main$2, bZ as SearchBox, b_ as KeyComboImpl, b$ as KeybindingImpl, _ as _export_sfc } from "./index-BDQofsSe.js";
import { u as useKeybindingService } from "./keybindingService-BzUvdmwD.js";
import "@primevue/themes";
import "@primevue/themes/aura";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "primevue/blockui";
import "primevue/progressspinner";
import "primevue/scrollpanel";
import "primevue/divider";
import "primevue/card";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "primevue/checkbox";
import "primevue/dropdown";
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
import "primevue/contextmenu";
import "primevue/tree";
import "primevue/toolbar";
import "primevue/confirmpopup";
import "primevue/useconfirm";
import "primevue/galleria";
import "primevue/confirmdialog";
const _hoisted_1$1 = {
  key: 0,
  class: "px-2"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "KeyComboDisplay",
  props: {
    keyCombo: {},
    isModified: { type: Boolean, default: false }
  },
  setup(__props) {
    const keySequences = computed(() => __props.keyCombo.getKeySequences());
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("span", null, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(keySequences.value, (sequence, index) => {
          return openBlock(), createElementBlock(Fragment, { key: index }, [
            createVNode(unref(Tag), {
              severity: _ctx.isModified ? "info" : "secondary"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(sequence), 1)
              ]),
              _: 2
            }, 1032, ["severity"]),
            index < keySequences.value.length - 1 ? (openBlock(), createElementBlock("span", _hoisted_1$1, "+")) : createCommentVNode("", true)
          ], 64);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1 = { class: "actions invisible flex flex-row" };
const _hoisted_2 = ["title"];
const _hoisted_3 = { key: 1 };
const _hoisted_4 = { class: "overflow-hidden text-ellipsis" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "KeybindingPanel",
  setup(__props) {
    const filters = ref({
      global: { value: "", matchMode: FilterMatchMode.CONTAINS }
    });
    const keybindingStore = useKeybindingStore();
    const keybindingService = useKeybindingService();
    const commandStore = useCommandStore();
    const { t } = useI18n();
    const commandsData = computed(() => {
      return Object.values(commandStore.commands).map((command) => ({
        id: command.id,
        label: t(
          `commands.${normalizeI18nKey(command.id)}.label`,
          command.label ?? ""
        ),
        keybinding: keybindingStore.getKeybindingByCommandId(command.id),
        source: command.source
      }));
    });
    const selectedCommandData = ref(null);
    const editDialogVisible = ref(false);
    const newBindingKeyCombo = ref(null);
    const currentEditingCommand = ref(null);
    const keybindingInput = ref(null);
    const existingKeybindingOnCombo = computed(() => {
      if (!currentEditingCommand.value) {
        return null;
      }
      if (currentEditingCommand.value.keybinding?.combo?.equals(
        newBindingKeyCombo.value
      )) {
        return null;
      }
      if (!newBindingKeyCombo.value) {
        return null;
      }
      return keybindingStore.getKeybinding(newBindingKeyCombo.value);
    });
    function editKeybinding(commandData) {
      currentEditingCommand.value = commandData;
      newBindingKeyCombo.value = commandData.keybinding ? commandData.keybinding.combo : null;
      editDialogVisible.value = true;
    }
    __name(editKeybinding, "editKeybinding");
    watchEffect(() => {
      if (editDialogVisible.value) {
        setTimeout(() => {
          keybindingInput.value?.$el?.focus();
        }, 300);
      }
    });
    async function removeKeybinding(commandData) {
      if (commandData.keybinding) {
        keybindingStore.unsetKeybinding(commandData.keybinding);
        await keybindingService.persistUserKeybindings();
      }
    }
    __name(removeKeybinding, "removeKeybinding");
    async function captureKeybinding(event) {
      if (!event.shiftKey && !event.altKey && !event.ctrlKey && !event.metaKey) {
        switch (event.key) {
          case "Escape":
            cancelEdit();
            return;
          case "Enter":
            await saveKeybinding();
            return;
        }
      }
      const keyCombo = KeyComboImpl.fromEvent(event);
      newBindingKeyCombo.value = keyCombo;
    }
    __name(captureKeybinding, "captureKeybinding");
    function cancelEdit() {
      editDialogVisible.value = false;
      currentEditingCommand.value = null;
      newBindingKeyCombo.value = null;
    }
    __name(cancelEdit, "cancelEdit");
    async function saveKeybinding() {
      if (currentEditingCommand.value && newBindingKeyCombo.value) {
        const updated = keybindingStore.updateKeybindingOnCommand(
          new KeybindingImpl({
            commandId: currentEditingCommand.value.id,
            combo: newBindingKeyCombo.value
          })
        );
        if (updated) {
          await keybindingService.persistUserKeybindings();
        }
      }
      cancelEdit();
    }
    __name(saveKeybinding, "saveKeybinding");
    async function resetKeybinding(commandData) {
      if (keybindingStore.resetKeybindingForCommand(commandData.id)) {
        await keybindingService.persistUserKeybindings();
      } else {
        console.warn(
          `No changes made when resetting keybinding for command: ${commandData.id}`
        );
      }
    }
    __name(resetKeybinding, "resetKeybinding");
    const toast = useToast();
    async function resetAllKeybindings() {
      keybindingStore.resetAllKeybindings();
      await keybindingService.persistUserKeybindings();
      toast.add({
        severity: "info",
        summary: "Info",
        detail: "All keybindings reset",
        life: 3e3
      });
    }
    __name(resetAllKeybindings, "resetAllKeybindings");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(_sfc_main$2, {
        value: "Keybinding",
        class: "keybinding-panel"
      }, {
        header: withCtx(() => [
          createVNode(SearchBox, {
            modelValue: filters.value["global"].value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => filters.value["global"].value = $event),
            placeholder: _ctx.$t("g.searchKeybindings") + "..."
          }, null, 8, ["modelValue", "placeholder"])
        ]),
        default: withCtx(() => [
          createVNode(unref(DataTable), {
            selection: selectedCommandData.value,
            "onUpdate:selection": _cache[1] || (_cache[1] = ($event) => selectedCommandData.value = $event),
            value: commandsData.value,
            "global-filter-fields": ["id", "label"],
            filters: filters.value,
            "selection-mode": "single",
            "striped-rows": "",
            pt: {
              header: "px-0"
            },
            onRowDblclick: _cache[2] || (_cache[2] = ($event) => editKeybinding($event.data))
          }, {
            default: withCtx(() => [
              createVNode(unref(Column), {
                field: "actions",
                header: ""
              }, {
                body: withCtx((slotProps) => [
                  createElementVNode("div", _hoisted_1, [
                    createVNode(unref(Button), {
                      icon: "pi pi-pencil",
                      class: "p-button-text",
                      onClick: /* @__PURE__ */ __name(($event) => editKeybinding(slotProps.data), "onClick")
                    }, null, 8, ["onClick"]),
                    createVNode(unref(Button), {
                      icon: "pi pi-replay",
                      class: "p-button-text p-button-warn",
                      disabled: !unref(keybindingStore).isCommandKeybindingModified(slotProps.data.id),
                      onClick: /* @__PURE__ */ __name(($event) => resetKeybinding(slotProps.data), "onClick")
                    }, null, 8, ["disabled", "onClick"]),
                    createVNode(unref(Button), {
                      icon: "pi pi-trash",
                      class: "p-button-text p-button-danger",
                      disabled: !slotProps.data.keybinding,
                      onClick: /* @__PURE__ */ __name(($event) => removeKeybinding(slotProps.data), "onClick")
                    }, null, 8, ["disabled", "onClick"])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(Column), {
                field: "id",
                header: _ctx.$t("g.command"),
                sortable: "",
                class: "max-w-64 2xl:max-w-full"
              }, {
                body: withCtx((slotProps) => [
                  createElementVNode("div", {
                    class: "overflow-hidden text-ellipsis whitespace-nowrap",
                    title: slotProps.data.id
                  }, toDisplayString(slotProps.data.label), 9, _hoisted_2)
                ]),
                _: 1
              }, 8, ["header"]),
              createVNode(unref(Column), {
                field: "keybinding",
                header: _ctx.$t("g.keybinding")
              }, {
                body: withCtx((slotProps) => [
                  slotProps.data.keybinding ? (openBlock(), createBlock(_sfc_main$1, {
                    key: 0,
                    "key-combo": slotProps.data.keybinding.combo,
                    "is-modified": unref(keybindingStore).isCommandKeybindingModified(slotProps.data.id)
                  }, null, 8, ["key-combo", "is-modified"])) : (openBlock(), createElementBlock("span", _hoisted_3, "-"))
                ]),
                _: 1
              }, 8, ["header"]),
              createVNode(unref(Column), {
                field: "source",
                header: _ctx.$t("g.source")
              }, {
                body: withCtx((slotProps) => [
                  createElementVNode("span", _hoisted_4, toDisplayString(slotProps.data.source || "-"), 1)
                ]),
                _: 1
              }, 8, ["header"])
            ]),
            _: 1
          }, 8, ["selection", "value", "filters"]),
          createVNode(unref(Dialog), {
            visible: editDialogVisible.value,
            "onUpdate:visible": _cache[3] || (_cache[3] = ($event) => editDialogVisible.value = $event),
            class: "min-w-96",
            modal: "",
            header: currentEditingCommand.value?.label,
            onHide: cancelEdit
          }, {
            footer: withCtx(() => [
              createVNode(unref(Button), {
                label: existingKeybindingOnCombo.value ? "Overwrite" : "Save",
                icon: existingKeybindingOnCombo.value ? "pi pi-pencil" : "pi pi-check",
                severity: existingKeybindingOnCombo.value ? "warn" : void 0,
                autofocus: "",
                onClick: saveKeybinding
              }, null, 8, ["label", "icon", "severity"])
            ]),
            default: withCtx(() => [
              createElementVNode("div", null, [
                createVNode(unref(InputText), {
                  ref_key: "keybindingInput",
                  ref: keybindingInput,
                  class: "mb-2 text-center",
                  "model-value": newBindingKeyCombo.value?.toString() ?? "",
                  placeholder: "Press keys for new binding",
                  autocomplete: "off",
                  fluid: "",
                  onKeydown: withModifiers(captureKeybinding, ["stop", "prevent"])
                }, null, 8, ["model-value"]),
                existingKeybindingOnCombo.value ? (openBlock(), createBlock(unref(Message), {
                  key: 0,
                  severity: "warn"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(_ctx.$t("g.keybindingAlreadyExists")) + " ", 1),
                    createVNode(unref(Tag), {
                      severity: "secondary",
                      value: existingKeybindingOnCombo.value.commandId
                    }, null, 8, ["value"])
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ])
            ]),
            _: 1
          }, 8, ["visible", "header"]),
          withDirectives(createVNode(unref(Button), {
            class: "mt-4",
            label: _ctx.$t("g.resetAll"),
            icon: "pi pi-replay",
            severity: "danger",
            fluid: "",
            text: "",
            onClick: resetAllKeybindings
          }, null, 8, ["label"]), [
            [_directive_tooltip, _ctx.$t("g.resetAllKeybindingsTooltip")]
          ])
        ]),
        _: 1
      });
    };
  }
});
const KeybindingPanel = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ac8bbe49"]]);
export {
  KeybindingPanel as default
};
//# sourceMappingURL=KeybindingPanel-DY65al1_.js.map
