var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, ref, computed, onMounted, openBlock, createBlock, withCtx, createElementVNode, toDisplayString, createVNode, unref, withKeys, createTextVNode, createCommentVNode } from "vue";
import Button from "primevue/button";
import Divider from "primevue/divider";
import InputText from "primevue/inputtext";
import Message from "primevue/message";
import Select from "primevue/select";
import { ag as useUserStore, br as useRouter } from "./index-BDQofsSe.js";
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
import "primevue/usetoast";
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
const _hoisted_1 = {
  id: "comfy-user-selection",
  class: "min-w-84 relative rounded-lg bg-[var(--comfy-menu-bg)] p-5 px-10 shadow-lg"
};
const _hoisted_2 = { class: "flex w-full flex-col items-center" };
const _hoisted_3 = { class: "flex w-full flex-col gap-2" };
const _hoisted_4 = { for: "new-user-input" };
const _hoisted_5 = { class: "flex w-full flex-col gap-2" };
const _hoisted_6 = { for: "existing-user-select" };
const _hoisted_7 = { class: "mt-5" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "UserSelectView",
  setup(__props) {
    const userStore = useUserStore();
    const router = useRouter();
    const selectedUser = ref(null);
    const newUsername = ref("");
    const loginError = ref("");
    const createNewUser = computed(() => newUsername.value.trim() !== "");
    const newUserExistsError = computed(() => {
      return userStore.users.find((user) => user.username === newUsername.value) ? `User "${newUsername.value}" already exists` : "";
    });
    const error = computed(() => newUserExistsError.value || loginError.value);
    const login = /* @__PURE__ */ __name(async () => {
      try {
        const user = createNewUser.value ? await userStore.createUser(newUsername.value) : selectedUser.value;
        if (!user) {
          throw new Error("No user selected");
        }
        await userStore.login(user);
        await router.push("/");
      } catch (err) {
        loginError.value = err instanceof Error ? err.message : JSON.stringify(err);
      }
    }, "login");
    onMounted(async () => {
      if (!userStore.initialized) {
        await userStore.initialize();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, { dark: "" }, {
        default: withCtx(() => [
          createElementVNode("main", _hoisted_1, [
            _cache[2] || (_cache[2] = createElementVNode("h1", { class: "my-2.5 mb-7 font-normal" }, "ComfyUI", -1)),
            createElementVNode("div", _hoisted_2, [
              createElementVNode("div", _hoisted_3, [
                createElementVNode("label", _hoisted_4, toDisplayString(_ctx.$t("userSelect.newUser")) + ":", 1),
                createVNode(unref(InputText), {
                  id: "new-user-input",
                  modelValue: newUsername.value,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => newUsername.value = $event),
                  placeholder: _ctx.$t("userSelect.enterUsername"),
                  onKeyup: withKeys(login, ["enter"])
                }, null, 8, ["modelValue", "placeholder"])
              ]),
              createVNode(unref(Divider)),
              createElementVNode("div", _hoisted_5, [
                createElementVNode("label", _hoisted_6, toDisplayString(_ctx.$t("userSelect.existingUser")) + ":", 1),
                createVNode(unref(Select), {
                  modelValue: selectedUser.value,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => selectedUser.value = $event),
                  class: "w-full",
                  "input-id": "existing-user-select",
                  options: unref(userStore).users,
                  "option-label": "username",
                  placeholder: _ctx.$t("userSelect.selectUser"),
                  disabled: createNewUser.value
                }, null, 8, ["modelValue", "options", "placeholder", "disabled"]),
                error.value ? (openBlock(), createBlock(unref(Message), {
                  key: 0,
                  severity: "error"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(error.value), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ]),
              createElementVNode("footer", _hoisted_7, [
                createVNode(unref(Button), {
                  label: _ctx.$t("userSelect.next"),
                  onClick: login
                }, null, 8, ["label"])
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
//# sourceMappingURL=UserSelectView-CjXN0lu1.js.map
