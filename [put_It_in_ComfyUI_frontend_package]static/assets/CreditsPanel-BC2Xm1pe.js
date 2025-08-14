var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { ref, defineComponent, computed, resolveDirective, openBlock, createElementBlock, createVNode, unref, withCtx, createTextVNode, toDisplayString, createBlock, createElementVNode, createCommentVNode, withDirectives, watch, normalizeClass } from "vue";
import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";
import Divider from "primevue/divider";
import Skeleton from "primevue/skeleton";
import TabPanel from "primevue/tabpanel";
import { useI18n } from "vue-i18n";
import { a6 as axios, a7 as COMFY_API_BASE_URL, a8 as isAbortError, bX as useFirebaseAuthStore, f as useDialogService, ba as useFirebaseAuthActions, bb as _sfc_main$2, bY as formatMetronomeCurrency } from "./index-BDQofsSe.js";
import Badge from "primevue/badge";
import Message from "primevue/message";
import ProgressSpinner from "primevue/progressspinner";
import "@primevue/themes";
import "@primevue/themes/aura";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "primevue/blockui";
import "primevue/dialog";
import "primevue/scrollpanel";
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
import "primevue/chip";
import "primevue/select";
import "primevue/tag";
import "primevue/inputnumber";
import "primevue/toggleswitch";
import "primevue/colorpicker";
import "primevue/knob";
import "primevue/slider";
import "primevue/password";
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
var EventType = /* @__PURE__ */ ((EventType2) => {
  EventType2["CREDIT_ADDED"] = "credit_added";
  EventType2["ACCOUNT_CREATED"] = "account_created";
  EventType2["API_USAGE_STARTED"] = "api_usage_started";
  EventType2["API_USAGE_COMPLETED"] = "api_usage_completed";
  return EventType2;
})(EventType || {});
const customerApiClient = axios.create({
  baseURL: COMFY_API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
const useCustomerEventsService = /* @__PURE__ */ __name(() => {
  const isLoading = ref(false);
  const error = ref(null);
  const { d } = useI18n();
  const handleRequestError = /* @__PURE__ */ __name((err, context, routeSpecificErrors) => {
    if (isAbortError(err)) return;
    let message;
    if (!axios.isAxiosError(err)) {
      message = `${context} failed: ${err instanceof Error ? err.message : String(err)}`;
    } else {
      const axiosError = err;
      const status = axiosError.response?.status;
      if (status && routeSpecificErrors?.[status]) {
        message = routeSpecificErrors[status];
      } else {
        message = axiosError.response?.data?.message ?? `${context} failed with status ${status}`;
      }
    }
    error.value = message;
  }, "handleRequestError");
  const executeRequest = /* @__PURE__ */ __name(async (requestCall, options) => {
    const { errorContext, routeSpecificErrors } = options;
    isLoading.value = true;
    error.value = null;
    try {
      const response = await requestCall();
      return response.data;
    } catch (err) {
      handleRequestError(err, errorContext, routeSpecificErrors);
      return null;
    } finally {
      isLoading.value = false;
    }
  }, "executeRequest");
  function formatEventType(eventType) {
    switch (eventType) {
      case "credit_added":
        return "Credits Added";
      case "account_created":
        return "Account Created";
      case "api_usage_completed":
        return "API Usage";
      default:
        return eventType;
    }
  }
  __name(formatEventType, "formatEventType");
  function formatDate(dateString) {
    const date = new Date(dateString);
    return d(date, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  __name(formatDate, "formatDate");
  function formatJsonKey(key) {
    return key.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  __name(formatJsonKey, "formatJsonKey");
  function formatJsonValue(value) {
    if (typeof value === "number") {
      return value.toLocaleString();
    }
    if (typeof value === "string" && value.match(/^\d{4}-\d{2}-\d{2}/)) {
      return new Date(value).toLocaleString();
    }
    return value;
  }
  __name(formatJsonValue, "formatJsonValue");
  function getEventSeverity(eventType) {
    switch (eventType) {
      case "credit_added":
        return "success";
      case "account_created":
        return "info";
      case "api_usage_completed":
        return "warning";
      default:
        return "info";
    }
  }
  __name(getEventSeverity, "getEventSeverity");
  function hasAdditionalInfo(event) {
    const { amount, api_name, model, ...otherParams } = event.params || {};
    return Object.keys(otherParams).length > 0;
  }
  __name(hasAdditionalInfo, "hasAdditionalInfo");
  function getTooltipContent(event) {
    const { ...params } = event.params || {};
    return Object.entries(params).map(([key, value]) => {
      const formattedKey = formatJsonKey(key);
      const formattedValue = formatJsonValue(value);
      return `<strong>${formattedKey}:</strong> ${formattedValue}`;
    }).join("<br>");
  }
  __name(getTooltipContent, "getTooltipContent");
  function formatAmount(amountMicros) {
    if (!amountMicros) return "0.00";
    return (amountMicros / 100).toFixed(2);
  }
  __name(formatAmount, "formatAmount");
  async function getMyEvents({
    page = 1,
    limit = 10
  } = {}) {
    const errorContext = "Fetching customer events";
    const routeSpecificErrors = {
      400: "Invalid input, object invalid",
      404: "Not found"
    };
    const authHeaders = await useFirebaseAuthStore().getAuthHeader();
    if (!authHeaders) {
      error.value = "Authentication header is missing";
      return null;
    }
    return executeRequest(
      () => customerApiClient.get("/customers/events", {
        params: { page, limit },
        headers: authHeaders
      }),
      { errorContext, routeSpecificErrors }
    );
  }
  __name(getMyEvents, "getMyEvents");
  return {
    // State
    isLoading,
    error,
    // Methods
    getMyEvents,
    formatEventType,
    getEventSeverity,
    formatAmount,
    hasAdditionalInfo,
    formatDate,
    formatJsonKey,
    formatJsonValue,
    getTooltipContent
  };
}, "useCustomerEventsService");
const _hoisted_1$1 = {
  key: 0,
  class: "flex items-center justify-center p-8"
};
const _hoisted_2$1 = {
  key: 1,
  class: "p-4"
};
const _hoisted_3$1 = { class: "event-details" };
const _hoisted_4$1 = {
  key: 0,
  class: "text-green-500 font-semibold"
};
const _hoisted_5$1 = { key: 1 };
const _hoisted_6$1 = {
  key: 2,
  class: "flex flex-col gap-1"
};
const _hoisted_7$1 = { class: "font-semibold" };
const _hoisted_8$1 = { class: "text-sm text-gray-400" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "UsageLogsTable",
  setup(__props, { expose: __expose }) {
    const events = ref([]);
    const loading = ref(true);
    const error = ref(null);
    const customerEventService = useCustomerEventsService();
    const pagination = ref({
      page: 1,
      limit: 7,
      total: 0,
      totalPages: 0
    });
    const dataTableFirst = computed(
      () => (pagination.value.page - 1) * pagination.value.limit
    );
    const tooltipContentMap = computed(() => {
      const map = /* @__PURE__ */ new Map();
      events.value.forEach((event) => {
        if (customerEventService.hasAdditionalInfo(event) && event.event_id) {
          map.set(event.event_id, customerEventService.getTooltipContent(event));
        }
      });
      return map;
    });
    const loadEvents = /* @__PURE__ */ __name(async () => {
      loading.value = true;
      error.value = null;
      try {
        const response = await customerEventService.getMyEvents({
          page: pagination.value.page,
          limit: pagination.value.limit
        });
        if (response) {
          if (response.events) {
            events.value = response.events;
          }
          if (response.page) {
            pagination.value.page = response.page;
          }
          if (response.limit) {
            pagination.value.limit = response.limit;
          }
          if (response.total) {
            pagination.value.total = response.total;
          }
          if (response.totalPages) {
            pagination.value.totalPages = response.totalPages;
          }
        } else {
          error.value = customerEventService.error.value || "Failed to load events";
        }
      } catch (err) {
        error.value = err instanceof Error ? err.message : "Unknown error";
        console.error("Error loading events:", err);
      } finally {
        loading.value = false;
      }
    }, "loadEvents");
    const onPageChange = /* @__PURE__ */ __name((event) => {
      pagination.value.page = event.page + 1;
      loadEvents().catch((error2) => {
        console.error("Error loading events:", error2);
      });
    }, "onPageChange");
    const refresh = /* @__PURE__ */ __name(async () => {
      pagination.value.page = 1;
      await loadEvents();
    }, "refresh");
    __expose({
      refresh
    });
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", null, [
        loading.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
          createVNode(unref(ProgressSpinner))
        ])) : error.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createVNode(unref(Message), {
            severity: "error",
            closable: false
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(error.value), 1)
            ]),
            _: 1
          })
        ])) : (openBlock(), createBlock(unref(DataTable), {
          key: 2,
          value: events.value,
          paginator: true,
          rows: pagination.value.limit,
          "total-records": pagination.value.total,
          first: dataTableFirst.value,
          lazy: true,
          class: "p-datatable-sm custom-datatable",
          onPage: onPageChange
        }, {
          default: withCtx(() => [
            createVNode(unref(Column), {
              field: "event_type",
              header: _ctx.$t("credits.eventType")
            }, {
              body: withCtx(({ data }) => [
                createVNode(unref(Badge), {
                  value: unref(customerEventService).formatEventType(data.event_type),
                  severity: unref(customerEventService).getEventSeverity(data.event_type)
                }, null, 8, ["value", "severity"])
              ]),
              _: 1
            }, 8, ["header"]),
            createVNode(unref(Column), {
              field: "details",
              header: _ctx.$t("credits.details")
            }, {
              body: withCtx(({ data }) => [
                createElementVNode("div", _hoisted_3$1, [
                  data.event_type === unref(EventType).CREDIT_ADDED ? (openBlock(), createElementBlock("div", _hoisted_4$1, toDisplayString(_ctx.$t("credits.added")) + " $" + toDisplayString(unref(customerEventService).formatAmount(data.params?.amount)), 1)) : data.event_type === unref(EventType).ACCOUNT_CREATED ? (openBlock(), createElementBlock("div", _hoisted_5$1, toDisplayString(_ctx.$t("credits.accountInitialized")), 1)) : data.event_type === unref(EventType).API_USAGE_COMPLETED ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
                    createElementVNode("div", _hoisted_7$1, toDisplayString(data.params?.api_name || "API"), 1),
                    createElementVNode("div", _hoisted_8$1, toDisplayString(_ctx.$t("credits.model")) + ": " + toDisplayString(data.params?.model || "-"), 1)
                  ])) : createCommentVNode("", true)
                ])
              ]),
              _: 1
            }, 8, ["header"]),
            createVNode(unref(Column), {
              field: "createdAt",
              header: _ctx.$t("credits.time")
            }, {
              body: withCtx(({ data }) => [
                createTextVNode(toDisplayString(unref(customerEventService).formatDate(data.createdAt)), 1)
              ]),
              _: 1
            }, 8, ["header"]),
            createVNode(unref(Column), {
              field: "params",
              header: _ctx.$t("credits.additionalInfo")
            }, {
              body: withCtx(({ data }) => [
                unref(customerEventService).hasAdditionalInfo(data) ? withDirectives((openBlock(), createBlock(unref(Button), {
                  key: 0,
                  icon: "pi pi-info-circle",
                  class: "p-button-text p-button-sm"
                }, null, 512)), [
                  [
                    _directive_tooltip,
                    {
                      escape: false,
                      value: tooltipContentMap.value.get(data.event_id) || "",
                      pt: {
                        text: {
                          style: {
                            width: "max-content !important"
                          }
                        }
                      }
                    },
                    void 0,
                    { top: true }
                  ]
                ]) : createCommentVNode("", true)
              ]),
              _: 1
            }, 8, ["header"])
          ]),
          _: 1
        }, 8, ["value", "rows", "total-records", "first"]))
      ]);
    };
  }
});
const _hoisted_1 = { class: "flex flex-col h-full" };
const _hoisted_2 = { class: "text-2xl font-bold mb-2" };
const _hoisted_3 = { class: "flex flex-col gap-2" };
const _hoisted_4 = { class: "text-sm font-medium text-muted" };
const _hoisted_5 = { class: "flex justify-between items-center" };
const _hoisted_6 = { class: "flex flex-row items-center" };
const _hoisted_7 = {
  key: 1,
  class: "text-xs text-muted"
};
const _hoisted_8 = { class: "flex justify-between items-center" };
const _hoisted_9 = {
  key: 0,
  class: "flex-grow"
};
const _hoisted_10 = { class: "text-sm font-medium" };
const _hoisted_11 = { class: "text-xs text-muted" };
const _hoisted_12 = { class: "flex flex-row gap-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CreditsPanel",
  setup(__props) {
    const { t } = useI18n();
    const dialogService = useDialogService();
    const authStore = useFirebaseAuthStore();
    const authActions = useFirebaseAuthActions();
    const loading = computed(() => authStore.loading);
    const balanceLoading = computed(() => authStore.isFetchingBalance);
    const usageLogsTableRef = ref(null);
    const formattedLastUpdateTime = computed(
      () => authStore.lastBalanceUpdateTime ? authStore.lastBalanceUpdateTime.toLocaleString() : ""
    );
    watch(
      () => authStore.lastBalanceUpdateTime,
      (newTime, oldTime) => {
        if (newTime && newTime !== oldTime && usageLogsTableRef.value) {
          usageLogsTableRef.value.refresh();
        }
      }
    );
    const handlePurchaseCreditsClick = /* @__PURE__ */ __name(() => {
      dialogService.showTopUpCreditsDialog();
    }, "handlePurchaseCreditsClick");
    const handleCreditsHistoryClick = /* @__PURE__ */ __name(async () => {
      await authActions.accessBillingPortal();
    }, "handleCreditsHistoryClick");
    const handleMessageSupport = /* @__PURE__ */ __name(() => {
      dialogService.showIssueReportDialog({
        title: t("issueReport.contactSupportTitle"),
        subtitle: t("issueReport.contactSupportDescription"),
        panelProps: {
          errorType: "BillingSupport",
          defaultFields: ["Workflow", "Logs", "SystemStats", "Settings"]
        }
      });
    }, "handleMessageSupport");
    const handleFaqClick = /* @__PURE__ */ __name(() => {
      window.open("https://docs.comfy.org/tutorials/api-nodes/faq", "_blank");
    }, "handleFaqClick");
    const creditHistory = ref([]);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(TabPanel), {
        value: "Credits",
        class: "credits-container h-full"
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createElementVNode("h2", _hoisted_2, toDisplayString(_ctx.$t("credits.credits")), 1),
            createVNode(unref(Divider)),
            createElementVNode("div", _hoisted_3, [
              createElementVNode("h3", _hoisted_4, toDisplayString(_ctx.$t("credits.yourCreditBalance")), 1),
              createElementVNode("div", _hoisted_5, [
                createVNode(_sfc_main$2, { "text-class": "text-3xl font-bold" }),
                loading.value ? (openBlock(), createBlock(unref(Skeleton), {
                  key: 0,
                  width: "2rem",
                  height: "2rem"
                })) : (openBlock(), createBlock(unref(Button), {
                  key: 1,
                  label: _ctx.$t("credits.purchaseCredits"),
                  loading: loading.value,
                  onClick: handlePurchaseCreditsClick
                }, null, 8, ["label", "loading"]))
              ]),
              createElementVNode("div", _hoisted_6, [
                balanceLoading.value ? (openBlock(), createBlock(unref(Skeleton), {
                  key: 0,
                  width: "12rem",
                  height: "1rem",
                  class: "text-xs"
                })) : formattedLastUpdateTime.value ? (openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(_ctx.$t("credits.lastUpdated")) + ": " + toDisplayString(formattedLastUpdateTime.value), 1)) : createCommentVNode("", true),
                createVNode(unref(Button), {
                  icon: "pi pi-refresh",
                  text: "",
                  size: "small",
                  severity: "secondary",
                  onClick: _cache[0] || (_cache[0] = () => unref(authActions).fetchBalance())
                })
              ])
            ]),
            createElementVNode("div", _hoisted_8, [
              createElementVNode("h3", null, toDisplayString(_ctx.$t("credits.activity")), 1),
              createVNode(unref(Button), {
                label: _ctx.$t("credits.invoiceHistory"),
                text: "",
                severity: "secondary",
                icon: "pi pi-arrow-up-right",
                loading: loading.value,
                onClick: handleCreditsHistoryClick
              }, null, 8, ["label", "loading"])
            ]),
            creditHistory.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_9, [
              createVNode(unref(DataTable), {
                value: creditHistory.value,
                "show-headers": false
              }, {
                default: withCtx(() => [
                  createVNode(unref(Column), {
                    field: "title",
                    header: _ctx.$t("g.name")
                  }, {
                    body: withCtx(({ data }) => [
                      createElementVNode("div", _hoisted_10, toDisplayString(data.title), 1),
                      createElementVNode("div", _hoisted_11, toDisplayString(data.timestamp), 1)
                    ]),
                    _: 1
                  }, 8, ["header"]),
                  createVNode(unref(Column), {
                    field: "amount",
                    header: _ctx.$t("g.amount")
                  }, {
                    body: withCtx(({ data }) => [
                      createElementVNode("div", {
                        class: normalizeClass([
                          "text-base font-medium text-center",
                          data.isPositive ? "text-sky-500" : "text-red-400"
                        ])
                      }, toDisplayString(data.isPositive ? "+" : "-") + "$" + toDisplayString(unref(formatMetronomeCurrency)(data.amount, "usd")), 3)
                    ]),
                    _: 1
                  }, 8, ["header"])
                ]),
                _: 1
              }, 8, ["value"])
            ])) : createCommentVNode("", true),
            createVNode(unref(Divider)),
            createVNode(_sfc_main$1, {
              ref_key: "usageLogsTableRef",
              ref: usageLogsTableRef
            }, null, 512),
            createElementVNode("div", _hoisted_12, [
              createVNode(unref(Button), {
                label: _ctx.$t("credits.faqs"),
                text: "",
                severity: "secondary",
                icon: "pi pi-question-circle",
                onClick: handleFaqClick
              }, null, 8, ["label"]),
              createVNode(unref(Button), {
                label: _ctx.$t("credits.messageSupport"),
                text: "",
                severity: "secondary",
                icon: "pi pi-comments",
                onClick: handleMessageSupport
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
//# sourceMappingURL=CreditsPanel-BC2Xm1pe.js.map
