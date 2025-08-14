const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./groupNode-D2epbLIR.js","./index-BDQofsSe.js","./index-WB8fwrfy.css","./groupNode-CC55z89j.css"])))=>i.map(i=>d[i]);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { defineComponent, watchEffect, computed, resolveDirective, withDirectives, openBlock, createElementBlock, normalizeStyle, createVNode, unref, createElementVNode, vShow, onMounted, onBeforeUnmount, createBlock, withCtx, renderSlot, createCommentVNode, resolveDynamicComponent, Fragment, renderList, toDisplayString, watch, ref, nextTick, mergeProps, markRaw, normalizeClass, onUnmounted, provide, readonly, inject, createTextVNode, isRef, toRaw, Teleport, withKeys, withModifiers, createStaticVNode, toRefs, useId, onUpdated } from "vue";
import { u as useWorkspaceStore, a as useSettingStore, b as app, s as showNativeSystemMenu, _ as _export_sfc, c as useWorkflowStore, d as useSidebarTabStore, e as useBottomPanelStore, f as useDialogService, g as useCanvasStore, h as useCanvasPositionConversion, i as useElementBounding, j as isComponentWidget, k as isDOMWidget, l as useEventListener, m as useDomWidgetStore, w as whenever, n as useChainCallback, o as useCommandStore, p as useKeybindingStore, L as LiteGraph, q as useMinimap, r as useNodeDefStore, t as isOverNodeInput, v as st, x as normalizeI18nKey, y as isOverNodeOutput, R as Reroute, z as collectFromNodes, A as LGraphEventMode, B as traverseNodesDepthFirst, C as createBounds, D as useColorPaletteStore, E as LGraphCanvas, F as getItemsColorOption, G as adjustColor, H as isColorable, I as isLGraphNode, J as isImageNode, K as useNodeHelpStore, M as useNodeLibrarySidebarTab, N as isLoad3dNode, O as t$2, P as useExtensionService, Q as useTitleEditorStore, S as LGraphGroup, T as LGraphNode, U as EditableText, V as defineStore, W as useNodeFrequencyStore, X as useNodeBookmarkStore, Y as highlightQuery, Z as formatNumberWithSuffix, $ as NodeSourceType, a0 as NodePreview, a1 as NodeSearchFilter, a2 as SearchFilterChip, a3 as useLitegraphService, a4 as storeToRefs, a5 as LinkReleaseTriggerAction, a6 as axios, a7 as COMFY_API_BASE_URL, a8 as isAbortError, a9 as useSystemStatsStore, aa as compareVersions, ab as isElectron, ac as stringToLocale, ad as electronAPI, ae as formatVersionAnchor, af as marked, ag as useUserStore, ah as usePragmaticDraggable, ai as usePragmaticDroppable, aj as useWorkflowThumbnail, ak as useWorkflowService, al as lodashExports, am as useMutationObserver, an as useResizeObserver, ao as useWorkflowBookmarkStore, ap as useScroll, aq as computedWithControl, ar as useExtensionStore, as as NodeBadgeMode, at as BadgePosition, au as LGraphBadge, av as _, aw as useModelToNodeStore, ax as ComfyNodeDefImpl, ay as ComfyModelDef, az as ComfyWorkflow, aA as te, aB as LGraph, aC as LLink, aD as DragAndScale, aE as ContextMenu$1, aF as CanvasPointer, aG as isVideoNode, aH as isAudioNode, aI as api, aJ as getStorageValue, aK as setStorageValue, aL as LinkMarkerShape, aM as useExecutionStore, aN as useToastStore, aO as IS_CONTROL_WIDGET, aP as updateControlWidgetLabel, aQ as useColorPaletteService, aR as ChangeTracker, aS as UnauthorizedError, aT as __vitePreload, aU as i18n, aV as migrateLegacyRerouteNodes, aW as useQueueSettingsStore, aX as useQueuePendingTaskCountStore, aY as useLocalStorage, aZ as useDraggable, a_ as watchDebounced, a$ as useEventBus, b0 as appendJsonExt, b1 as useSubgraphNavigationStore, b2 as forEachSubgraphNode, b3 as useMenuItemStore, b4 as useDialogStore, b5 as useAboutPanelStore, b6 as _imports_0, b7 as SettingDialogHeader, b8 as SettingDialogContent, b9 as useCurrentUser, ba as useFirebaseAuthActions, bb as _sfc_main$U, bc as isNativeWindow, bd as useTitle, be as parseFilePath, bf as getAllNonIoNodesInSubgraph, bg as useQueueStore, bh as getExecutionIdsForSelectedNodes, bi as DEFAULT_DARK_COLOR_PALETTE, bj as DEFAULT_LIGHT_COLOR_PALETTE, bk as getDefaultExportFromCjs, bl as config, bm as useStorage, bn as useFavicon, bo as useBreakpoints, bp as useErrorHandling, bq as useModelStore } from "./index-BDQofsSe.js";
import { useToast } from "primevue/usetoast";
import { useI18n } from "vue-i18n";
import Button from "primevue/button";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Tab from "primevue/tab";
import TabList from "primevue/tablist";
import Tabs from "primevue/tabs";
import ButtonGroup from "primevue/buttongroup";
import Panel from "primevue/panel";
import SelectButton from "primevue/selectbutton";
import Dialog from "primevue/dialog";
import AutoComplete from "primevue/autocomplete";
import Chip from "primevue/chip";
import Tag from "primevue/tag";
import OverlayBadge from "primevue/overlaybadge";
import ContextMenu from "primevue/contextmenu";
import ScrollPanel from "primevue/scrollpanel";
import Popover from "primevue/popover";
import Toast from "primevue/toast";
import { useToast as useToast$1 } from "primevue";
import SplitButton from "primevue/splitbutton";
import InputNumber from "primevue/inputnumber";
import TieredMenu from "primevue/tieredmenu";
import Breadcrumb from "primevue/breadcrumb";
import InputText from "primevue/inputtext";
import Menu from "primevue/menu";
import { _ as _sfc_main$T } from "./UserAvatar-C9bSkTC5.js";
import Divider from "primevue/divider";
import { u as useKeybindingService } from "./keybindingService-BzUvdmwD.js";
import { u as useServerConfigStore } from "./serverConfigStore-D66HbykX.js";
import "@primevue/themes";
import "@primevue/themes/aura";
import "primevue/config";
import "primevue/confirmationservice";
import "primevue/toastservice";
import "primevue/tooltip";
import "primevue/blockui";
import "primevue/progressspinner";
import "primevue/message";
import "primevue/card";
import "@primevue/forms";
import "@primevue/forms/resolvers/zod";
import "primevue/checkbox";
import "primevue/dropdown";
import "primevue/textarea";
import "primevue/listbox";
import "primevue/progressbar";
import "primevue/floatlabel";
import "primevue/tabpanels";
import "primevue/iconfield";
import "primevue/inputicon";
import "primevue/badge";
import "primevue/select";
import "primevue/tabpanel";
import "primevue/toggleswitch";
import "primevue/colorpicker";
import "primevue/knob";
import "primevue/slider";
import "primevue/password";
import "primevue/skeleton";
import "primevue/multiselect";
import "primevue/tabmenu";
import "primevue/dataview";
import "primevue/column";
import "primevue/datatable";
import "primevue/tree";
import "primevue/toolbar";
import "primevue/confirmpopup";
import "primevue/useconfirm";
import "primevue/galleria";
import "primevue/confirmdialog";
import "primevue/avatar";
const _hoisted_1$z = { class: "window-actions-spacer" };
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "MenuHamburger",
  setup(__props) {
    const workspaceState = useWorkspaceStore();
    const settingStore = useSettingStore();
    const exitFocusMode = /* @__PURE__ */ __name(() => {
      workspaceState.focusMode = false;
    }, "exitFocusMode");
    watchEffect(() => {
      if (settingStore.get("Comfy.UseNewMenu") !== "Disabled") {
        return;
      }
      if (workspaceState.focusMode) {
        app.ui.menuContainer.style.display = "none";
      } else {
        app.ui.menuContainer.style.display = "block";
      }
    });
    const menuSetting = computed(() => settingStore.get("Comfy.UseNewMenu"));
    const positionCSS = computed(
      () => (
        // 'Bottom' menuSetting shows the hamburger button in the bottom right corner
        // 'Disabled', 'Top' menuSetting shows the hamburger button in the top right corner
        menuSetting.value === "Bottom" ? { bottom: "0px", right: "0px" } : { top: "0px", right: "0px" }
      )
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createElementBlock("div", {
        class: "comfy-menu-hamburger no-drag",
        style: normalizeStyle(positionCSS.value)
      }, [
        withDirectives(createVNode(unref(Button), {
          icon: "pi pi-bars",
          severity: "secondary",
          text: "",
          size: "large",
          "aria-label": _ctx.$t("menu.showMenu"),
          "aria-live": "assertive",
          onClick: exitFocusMode,
          onContextmenu: unref(showNativeSystemMenu)
        }, null, 8, ["aria-label", "onContextmenu"]), [
          [_directive_tooltip, { value: _ctx.$t("menu.showMenu"), showDelay: 300 }]
        ]),
        withDirectives(createElementVNode("div", _hoisted_1$z, null, 512), [
          [vShow, menuSetting.value !== "Bottom"]
        ])
      ], 4)), [
        [vShow, unref(workspaceState).focusMode]
      ]);
    };
  }
});
const MenuHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-0831a976"]]);
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "UnloadWindowConfirmDialog",
  setup(__props) {
    const settingStore = useSettingStore();
    const workflowStore = useWorkflowStore();
    const handleBeforeUnload = /* @__PURE__ */ __name((event) => {
      if (settingStore.get("Comfy.Window.UnloadConfirmation") && workflowStore.modifiedWorkflows.length > 0) {
        event.preventDefault();
        return true;
      }
      return void 0;
    }, "handleBeforeUnload");
    onMounted(() => {
      window.addEventListener("beforeunload", handleBeforeUnload);
    });
    onBeforeUnmount(() => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div");
    };
  }
});
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "LiteGraphCanvasSplitterOverlay",
  setup(__props) {
    const settingStore = useSettingStore();
    const sidebarLocation = computed(
      () => settingStore.get("Comfy.Sidebar.Location")
    );
    const unifiedWidth = computed(
      () => settingStore.get("Comfy.Sidebar.UnifiedWidth")
    );
    const sidebarPanelVisible = computed(
      () => useSidebarTabStore().activeSidebarTab !== null
    );
    const bottomPanelVisible = computed(
      () => useBottomPanelStore().bottomPanelVisible
    );
    const activeSidebarTabId = computed(
      () => useSidebarTabStore().activeSidebarTabId
    );
    const sidebarStateKey = computed(() => {
      return unifiedWidth.value ? "unified-sidebar" : activeSidebarTabId.value ?? "";
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Splitter), {
        key: sidebarStateKey.value,
        class: "splitter-overlay-root splitter-overlay",
        "pt:gutter": sidebarPanelVisible.value ? "" : "hidden",
        "state-key": sidebarStateKey.value,
        "state-storage": "local"
      }, {
        default: withCtx(() => [
          sidebarLocation.value === "left" ? withDirectives((openBlock(), createBlock(unref(SplitterPanel), {
            key: 0,
            class: "side-bar-panel",
            "min-size": 10,
            size: 20
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "side-bar-panel", {}, void 0, true)
            ]),
            _: 3
          }, 512)), [
            [vShow, sidebarPanelVisible.value]
          ]) : createCommentVNode("", true),
          createVNode(unref(SplitterPanel), { size: 100 }, {
            default: withCtx(() => [
              createVNode(unref(Splitter), {
                class: "splitter-overlay max-w-full",
                layout: "vertical",
                "pt:gutter": bottomPanelVisible.value ? "" : "hidden",
                "state-key": "bottom-panel-splitter",
                "state-storage": "local"
              }, {
                default: withCtx(() => [
                  createVNode(unref(SplitterPanel), { class: "graph-canvas-panel relative" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "graph-canvas-panel", {}, void 0, true)
                    ]),
                    _: 3
                  }),
                  withDirectives(createVNode(unref(SplitterPanel), { class: "bottom-panel" }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "bottom-panel", {}, void 0, true)
                    ]),
                    _: 3
                  }, 512), [
                    [vShow, bottomPanelVisible.value]
                  ])
                ]),
                _: 3
              }, 8, ["pt:gutter"])
            ]),
            _: 3
          }),
          sidebarLocation.value === "right" ? withDirectives((openBlock(), createBlock(unref(SplitterPanel), {
            key: 1,
            class: "side-bar-panel",
            "min-size": 10,
            size: 20
          }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "side-bar-panel", {}, void 0, true)
            ]),
            _: 3
          }, 512)), [
            [vShow, sidebarPanelVisible.value]
          ]) : createCommentVNode("", true)
        ]),
        _: 3
      }, 8, ["pt:gutter", "state-key"]);
    };
  }
});
const LiteGraphCanvasSplitterOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-480c68de"]]);
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "ExtensionSlot",
  props: {
    extension: {}
  },
  setup(__props) {
    const props = __props;
    const mountCustomExtension = /* @__PURE__ */ __name((extension, el) => {
      extension.render(el);
    }, "mountCustomExtension");
    onBeforeUnmount(() => {
      if (props.extension.type === "custom" && props.extension.destroy) {
        props.extension.destroy();
      }
    });
    return (_ctx, _cache) => {
      return _ctx.extension.type === "vue" ? (openBlock(), createBlock(resolveDynamicComponent(_ctx.extension.component), { key: 0 })) : (openBlock(), createElementBlock("div", {
        key: 1,
        ref: /* @__PURE__ */ __name((el) => {
          if (el)
            mountCustomExtension(
              props.extension,
              el
            );
        }, "ref")
      }, null, 512));
    };
  }
});
const _hoisted_1$y = { class: "flex flex-col h-full" };
const _hoisted_2$f = { class: "w-full flex justify-between" };
const _hoisted_3$b = { class: "tabs-container" };
const _hoisted_4$9 = { class: "font-bold" };
const _hoisted_5$7 = { class: "flex items-center gap-2" };
const _hoisted_6$6 = { class: "flex-grow h-0" };
const _sfc_main$O = /* @__PURE__ */ defineComponent({
  __name: "BottomPanel",
  setup(__props) {
    const bottomPanelStore = useBottomPanelStore();
    const dialogService = useDialogService();
    const isShortcutsTabActive = computed(() => {
      const activeTabId = bottomPanelStore.activeBottomPanelTabId;
      return activeTabId === "shortcuts-essentials" || activeTabId === "shortcuts-view-controls";
    });
    const shouldCapitalizeTab = /* @__PURE__ */ __name((tabId) => {
      return tabId !== "shortcuts-essentials" && tabId !== "shortcuts-view-controls";
    }, "shouldCapitalizeTab");
    const openKeybindingSettings = /* @__PURE__ */ __name(async () => {
      dialogService.showSettingsDialog("keybinding");
    }, "openKeybindingSettings");
    const closeBottomPanel = /* @__PURE__ */ __name(() => {
      bottomPanelStore.activePanel = null;
    }, "closeBottomPanel");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$y, [
        createVNode(unref(Tabs), {
          value: unref(bottomPanelStore).activeBottomPanelTabId,
          "onUpdate:value": _cache[0] || (_cache[0] = ($event) => unref(bottomPanelStore).activeBottomPanelTabId = $event)
        }, {
          default: withCtx(() => [
            createVNode(unref(TabList), { "pt:tab-list": "border-none" }, {
              default: withCtx(() => [
                createElementVNode("div", _hoisted_2$f, [
                  createElementVNode("div", _hoisted_3$b, [
                    (openBlock(true), createElementBlock(Fragment, null, renderList(unref(bottomPanelStore).bottomPanelTabs, (tab) => {
                      return openBlock(), createBlock(unref(Tab), {
                        key: tab.id,
                        value: tab.id,
                        class: "p-3 border-none"
                      }, {
                        default: withCtx(() => [
                          createElementVNode("span", _hoisted_4$9, toDisplayString(shouldCapitalizeTab(tab.id) ? tab.title.toUpperCase() : tab.title), 1)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ]),
                  createElementVNode("div", _hoisted_5$7, [
                    isShortcutsTabActive.value ? (openBlock(), createBlock(unref(Button), {
                      key: 0,
                      label: _ctx.$t("shortcuts.manageShortcuts"),
                      icon: "pi pi-cog",
                      severity: "secondary",
                      size: "small",
                      text: "",
                      onClick: openKeybindingSettings
                    }, null, 8, ["label"])) : createCommentVNode("", true),
                    createVNode(unref(Button), {
                      class: "justify-self-end",
                      icon: "pi pi-times",
                      severity: "secondary",
                      size: "small",
                      text: "",
                      onClick: closeBottomPanel
                    })
                  ])
                ])
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["value"]),
        createElementVNode("div", _hoisted_6$6, [
          unref(bottomPanelStore).bottomPanelVisible && unref(bottomPanelStore).activeBottomPanelTab ? (openBlock(), createBlock(_sfc_main$P, {
            key: 0,
            extension: unref(bottomPanelStore).activeBottomPanelTab
          }, null, 8, ["extension"])) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
function useAbsolutePosition(options = {}) {
  const { useTransform = false } = options;
  const canvasStore = useCanvasStore();
  const lgCanvas = canvasStore.getCanvas();
  const { canvasPosToClientPos, update: updateCanvasPosition } = useCanvasPositionConversion(lgCanvas.canvas, lgCanvas);
  const settingStore = useSettingStore();
  watch(
    [
      () => settingStore.get("Comfy.Sidebar.Location"),
      () => settingStore.get("Comfy.Sidebar.Size"),
      () => settingStore.get("Comfy.UseNewMenu")
    ],
    () => updateCanvasPosition(),
    { flush: "post" }
  );
  const style = ref({});
  const computeStyle = /* @__PURE__ */ __name((position) => {
    const { pos, size, scale = lgCanvas.ds.scale } = position;
    const [left, top] = canvasPosToClientPos(pos);
    const [width, height] = size;
    return useTransform ? {
      position: "fixed",
      transformOrigin: "0 0",
      transform: `scale(${scale})`,
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`
    } : {
      position: "fixed",
      left: `${left}px`,
      top: `${top}px`,
      width: `${width * scale}px`,
      height: `${height * scale}px`
    };
  }, "computeStyle");
  const updatePosition = /* @__PURE__ */ __name((config2) => {
    style.value = computeStyle(config2);
  }, "updatePosition");
  return {
    style,
    updatePosition
  };
}
__name(useAbsolutePosition, "useAbsolutePosition");
function intersect(a, b) {
  const x1 = Math.max(a.x, b.x);
  const y1 = Math.max(a.y, b.y);
  const x2 = Math.min(a.x + a.width, b.x + b.width);
  const y2 = Math.min(a.y + a.height, b.y + b.height);
  if (x1 >= x2 || y1 >= y2) {
    return null;
  }
  return [x1, y1, x2 - x1, y2 - y1];
}
__name(intersect, "intersect");
const useDomClipping = /* @__PURE__ */ __name((options = {}) => {
  const style = ref({});
  const { margin = 4 } = options;
  const calculateClipPath = /* @__PURE__ */ __name((elementRect, canvasRect, isSelected, selectedArea) => {
    if (!isSelected && selectedArea) {
      const { scale, offset } = selectedArea;
      const intersection = intersect(
        {
          x: elementRect.left - canvasRect.left,
          y: elementRect.top - canvasRect.top,
          width: elementRect.width,
          height: elementRect.height
        },
        {
          x: (selectedArea.x + offset[0] - margin) * scale,
          y: (selectedArea.y + offset[1] - margin) * scale,
          width: (selectedArea.width + 2 * margin) * scale,
          height: (selectedArea.height + 2 * margin) * scale
        }
      );
      if (!intersection) {
        return "";
      }
      const clipX = (intersection[0] - elementRect.left + canvasRect.left) / scale + "px";
      const clipY = (intersection[1] - elementRect.top + canvasRect.top) / scale + "px";
      const clipWidth = intersection[2] / scale + "px";
      const clipHeight = intersection[3] / scale + "px";
      return `polygon(0% 0%, 0% 100%, ${clipX} 100%, ${clipX} ${clipY}, calc(${clipX} + ${clipWidth}) ${clipY}, calc(${clipX} + ${clipWidth}) calc(${clipY} + ${clipHeight}), ${clipX} calc(${clipY} + ${clipHeight}), ${clipX} 100%, 100% 100%, 100% 0%)`;
    }
    return "";
  }, "calculateClipPath");
  const updateClipPath = /* @__PURE__ */ __name((element, canvasElement, isSelected, selectedArea) => {
    const elementRect = element.getBoundingClientRect();
    const canvasRect = canvasElement.getBoundingClientRect();
    const clipPath = calculateClipPath(
      elementRect,
      canvasRect,
      isSelected,
      selectedArea
    );
    style.value = {
      clipPath: clipPath || "none",
      willChange: "clip-path"
    };
  }, "updateClipPath");
  return {
    style,
    updateClipPath
  };
}, "useDomClipping");
const _hoisted_1$x = ["title"];
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "DomWidget",
  props: {
    widgetState: {}
  },
  emits: ["update:widgetValue"],
  setup(__props, { emit: __emit }) {
    const widget = __props.widgetState.widget;
    const emit = __emit;
    const widgetElement = ref();
    const style = ref({});
    const { style: positionStyle, updatePosition } = useAbsolutePosition({
      useTransform: true
    });
    const { style: clippingStyle, updateClipPath } = useDomClipping();
    const canvasStore = useCanvasStore();
    const settingStore = useSettingStore();
    const enableDomClipping = computed(
      () => settingStore.get("Comfy.DOMClippingEnabled")
    );
    const updateDomClipping = /* @__PURE__ */ __name(() => {
      const lgCanvas = canvasStore.canvas;
      if (!lgCanvas || !widgetElement.value) return;
      const selectedNode = Object.values(lgCanvas.selected_nodes ?? {})[0];
      if (!selectedNode) {
        updateClipPath(widgetElement.value, lgCanvas.canvas, false, void 0);
        return;
      }
      const isSelected = selectedNode === widget.node;
      const renderArea = selectedNode?.renderArea;
      const offset = lgCanvas.ds.offset;
      const scale = lgCanvas.ds.scale;
      const selectedAreaConfig = renderArea ? {
        x: renderArea[0],
        y: renderArea[1],
        width: renderArea[2],
        height: renderArea[3],
        scale,
        offset: [offset[0], offset[1]]
      } : void 0;
      updateClipPath(
        widgetElement.value,
        lgCanvas.canvas,
        isSelected,
        selectedAreaConfig
      );
    }, "updateDomClipping");
    const { left, top } = useElementBounding(canvasStore.getCanvas().canvas);
    watch(
      [() => __props.widgetState, left, top],
      ([widgetState, _2, __]) => {
        updatePosition(widgetState);
        if (enableDomClipping.value) {
          updateDomClipping();
        }
        style.value = {
          ...positionStyle.value,
          ...enableDomClipping.value ? clippingStyle.value : {},
          zIndex: widgetState.zIndex,
          pointerEvents: widgetState.readonly || widget.computedDisabled ? "none" : "auto",
          opacity: widget.computedDisabled ? 0.5 : 1
        };
      },
      { deep: true }
    );
    watch(
      () => __props.widgetState.visible,
      (newVisible, oldVisible) => {
        if (!newVisible && oldVisible) {
          widget.options.onHide?.(widget);
        }
      }
    );
    const setupDOMEventListeners = /* @__PURE__ */ __name(() => {
      if (!isDOMWidget(widget) || !__props.widgetState.visible) return;
      if (widget.element.blur) {
        useEventListener(document, "mousedown", (event) => {
          if (!widget.element.contains(event.target)) {
            widget.element.blur();
          }
        });
      }
      for (const evt of widget.options.selectOn ?? ["focus", "click"]) {
        useEventListener(widget.element, evt, () => {
          const lgCanvas = canvasStore.canvas;
          lgCanvas?.selectNode(widget.node);
          lgCanvas?.bringToFront(widget.node);
        });
      }
    }, "setupDOMEventListeners");
    watch(
      () => __props.widgetState.visible,
      (visible) => {
        if (visible) {
          setupDOMEventListeners();
        }
      },
      { immediate: true }
    );
    const inputSpec = widget.node.constructor.nodeData;
    const tooltip = inputSpec?.inputs?.[widget.name]?.tooltip;
    const mountElementIfVisible = /* @__PURE__ */ __name(() => {
      if (__props.widgetState.visible && isDOMWidget(widget) && widgetElement.value) {
        if (!widgetElement.value.contains(widget.element)) {
          widgetElement.value.appendChild(widget.element);
        }
      }
    }, "mountElementIfVisible");
    onMounted(() => {
      nextTick(() => {
        mountElementIfVisible();
      }).catch((error) => {
        console.error("Error mounting DOM widget element:", error);
      });
    });
    watch(
      () => __props.widgetState.visible,
      () => {
        mountElementIfVisible();
      }
    );
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        ref_key: "widgetElement",
        ref: widgetElement,
        class: "dom-widget",
        title: unref(tooltip),
        style: normalizeStyle(style.value)
      }, [
        unref(isComponentWidget)(unref(widget)) ? (openBlock(), createBlock(resolveDynamicComponent(unref(widget).component), mergeProps({
          key: 0,
          "model-value": unref(widget).value,
          widget: unref(widget)
        }, unref(widget).props, {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => emit("update:widgetValue", $event))
        }), null, 16, ["model-value", "widget"])) : createCommentVNode("", true)
      ], 12, _hoisted_1$x)), [
        [vShow, _ctx.widgetState.visible]
      ]);
    };
  }
});
const DomWidget = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-0f0f194c"]]);
const _hoisted_1$w = { class: "isolate" };
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "DomWidgets",
  setup(__props) {
    const domWidgetStore = useDomWidgetStore();
    const widgetStates = computed(() => [...domWidgetStore.widgetStates.values()]);
    const updateWidgets = /* @__PURE__ */ __name(() => {
      const lgCanvas = canvasStore.canvas;
      if (!lgCanvas) return;
      const lowQuality = lgCanvas.low_quality;
      const currentGraph = lgCanvas.graph;
      for (const widgetState of widgetStates.value) {
        const widget = widgetState.widget;
        if (!widget.isVisible()) {
          widgetState.visible = false;
          continue;
        }
        const node = widget.node;
        const isInCorrectGraph = currentGraph?.nodes.includes(node);
        widgetState.visible = !!isInCorrectGraph && lgCanvas.isNodeVisible(node) && !(widget.options.hideOnZoom && lowQuality);
        if (widgetState.visible && node) {
          const margin = widget.margin;
          widgetState.pos = [node.pos[0] + margin, node.pos[1] + margin + widget.y];
          widgetState.size = [
            (widget.width ?? node.width) - margin * 2,
            (widget.computedHeight ?? 50) - margin * 2
          ];
          widgetState.zIndex = lgCanvas.graph?.nodes.indexOf(node) ?? -1;
          widgetState.readonly = lgCanvas.read_only;
        }
      }
    }, "updateWidgets");
    const canvasStore = useCanvasStore();
    whenever(
      () => canvasStore.canvas,
      (canvas) => canvas.onDrawForeground = useChainCallback(
        canvas.onDrawForeground,
        updateWidgets
      ),
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$w, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(widgetStates.value, (widgetState) => {
          return openBlock(), createBlock(DomWidget, {
            key: widgetState.widget.id,
            "widget-state": widgetState,
            "onUpdate:widgetValue": /* @__PURE__ */ __name(($event) => widgetState.widget.value = $event, "onUpdate:widgetValue")
          }, null, 8, ["widget-state", "onUpdate:widgetValue"]);
        }), 128))
      ]);
    };
  }
});
const _hoisted_1$v = {
  viewBox: "0 0 1024 1024",
  width: "1.2em",
  height: "1.2em"
};
function render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$v, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M921.088 103.232L584.832 889.024L465.52 544.512L121.328 440.48zM1004.46.769c-6.096 0-13.52 1.728-22.096 5.36L27.708 411.2c-34.383 14.592-36.56 42.704-4.847 62.464l395.296 123.584l129.36 403.264c9.28 15.184 20.496 22.72 31.263 22.72c11.936 0 23.296-9.152 31.04-27.248l408.272-953.728C1029.148 16.368 1022.86.769 1004.46.769"
    }, null, -1)
  ]));
}
__name(render$9, "render$9");
const __unplugin_components_1$1 = markRaw({ name: "simple-line-icons-cursor", render: render$9 });
const _hoisted_1$u = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$8(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$u, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M10.05 23q-.75 0-1.4-.337T7.575 21.7L1.2 12.375l.6-.575q.475-.475 1.125-.55t1.175.3L7 13.575V4q0-.425.288-.712T8 3t.713.288T9 4v13.425l-3.7-2.6l3.925 5.725q.125.2.35.325t.475.125H17q.825 0 1.413-.587T19 19V5q0-.425.288-.712T20 4t.713.288T21 5v14q0 1.65-1.175 2.825T17 23zM11 12V2q0-.425.288-.712T12 1t.713.288T13 2v10zm4 0V3q0-.425.288-.712T16 2t.713.288T17 3v9zm-2.85 4.5"
    }, null, -1)
  ]));
}
__name(render$8, "render$8");
const __unplugin_components_0$5 = markRaw({ name: "material-symbols-pan-tool-outline", render: render$8 });
function useCanvasInteractions() {
  const settingStore = useSettingStore();
  const isStandardNavMode = computed(
    () => settingStore.get("Comfy.Canvas.NavigationMode") === "standard"
  );
  const handleWheel = /* @__PURE__ */ __name((event) => {
    if (isStandardNavMode.value && (event.ctrlKey || event.metaKey)) {
      event.preventDefault();
      forwardEventToCanvas(event);
      return;
    }
    if (!isStandardNavMode.value) {
      event.preventDefault();
      forwardEventToCanvas(event);
      return;
    }
  }, "handleWheel");
  const forwardEventToCanvas = /* @__PURE__ */ __name((event) => {
    const canvasEl = app.canvas?.canvas;
    if (!canvasEl) return;
    const EventConstructor = event.constructor;
    const newEvent = new EventConstructor(event.type, event);
    canvasEl.dispatchEvent(newEvent);
  }, "forwardEventToCanvas");
  return {
    handleWheel,
    forwardEventToCanvas
  };
}
__name(useCanvasInteractions, "useCanvasInteractions");
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "GraphCanvasMenu",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const keybindingStore = useKeybindingStore();
    const settingStore = useSettingStore();
    const canvasInteractions = useCanvasInteractions();
    const minimapVisible = computed(() => settingStore.get("Comfy.Minimap.Visible"));
    const minimapTooltip = computed(() => {
      const baseText = t2("graphCanvasMenu.toggleMinimap");
      const keybinding = keybindingStore.getKeybindingByCommandId(
        "Comfy.Canvas.ToggleMinimap"
      );
      return keybinding ? `${baseText} (${keybinding.combo.toString()})` : baseText;
    });
    const linkHidden = computed(
      () => settingStore.get("Comfy.LinkRenderMode") === LiteGraph.HIDDEN_LINK
    );
    let interval = null;
    const repeat = /* @__PURE__ */ __name(async (command) => {
      if (interval) return;
      const cmd = /* @__PURE__ */ __name(() => commandStore.execute(command), "cmd");
      await cmd();
      interval = window.setInterval(cmd, 100);
    }, "repeat");
    const stopRepeat = /* @__PURE__ */ __name(() => {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }, "stopRepeat");
    return (_ctx, _cache) => {
      const _component_i_material_symbols58pan_tool_outline = __unplugin_components_0$5;
      const _component_i_simple_line_icons58cursor = __unplugin_components_1$1;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createBlock(unref(ButtonGroup), {
        class: "p-buttongroup-vertical absolute bottom-[10px] right-[10px] z-[1000]",
        onWheel: unref(canvasInteractions).handleWheel
      }, {
        default: withCtx(() => [
          withDirectives(createVNode(unref(Button), {
            severity: "secondary",
            icon: "pi pi-plus",
            "aria-label": _ctx.$t("graphCanvasMenu.zoomIn"),
            onMousedown: _cache[0] || (_cache[0] = ($event) => repeat("Comfy.Canvas.ZoomIn")),
            onMouseup: stopRepeat
          }, null, 8, ["aria-label"]), [
            [
              _directive_tooltip,
              unref(t2)("graphCanvasMenu.zoomIn"),
              void 0,
              { left: true }
            ]
          ]),
          withDirectives(createVNode(unref(Button), {
            severity: "secondary",
            icon: "pi pi-minus",
            "aria-label": _ctx.$t("graphCanvasMenu.zoomOut"),
            onMousedown: _cache[1] || (_cache[1] = ($event) => repeat("Comfy.Canvas.ZoomOut")),
            onMouseup: stopRepeat
          }, null, 8, ["aria-label"]), [
            [
              _directive_tooltip,
              unref(t2)("graphCanvasMenu.zoomOut"),
              void 0,
              { left: true }
            ]
          ]),
          withDirectives(createVNode(unref(Button), {
            severity: "secondary",
            icon: "pi pi-expand",
            "aria-label": _ctx.$t("graphCanvasMenu.fitView"),
            onClick: _cache[2] || (_cache[2] = () => unref(commandStore).execute("Comfy.Canvas.FitView"))
          }, null, 8, ["aria-label"]), [
            [
              _directive_tooltip,
              unref(t2)("graphCanvasMenu.fitView"),
              void 0,
              { left: true }
            ]
          ]),
          withDirectives((openBlock(), createBlock(unref(Button), {
            severity: "secondary",
            "aria-label": unref(t2)(
              "graphCanvasMenu." + (unref(canvasStore).canvas?.read_only ? "panMode" : "selectMode")
            ),
            onClick: _cache[3] || (_cache[3] = () => unref(commandStore).execute("Comfy.Canvas.ToggleLock"))
          }, {
            icon: withCtx(() => [
              unref(canvasStore).canvas?.read_only ? (openBlock(), createBlock(_component_i_material_symbols58pan_tool_outline, { key: 0 })) : (openBlock(), createBlock(_component_i_simple_line_icons58cursor, { key: 1 }))
            ]),
            _: 1
          }, 8, ["aria-label"])), [
            [
              _directive_tooltip,
              unref(t2)(
                "graphCanvasMenu." + (unref(canvasStore).canvas?.read_only ? "panMode" : "selectMode")
              ) + " (Space)",
              void 0,
              { left: true }
            ]
          ]),
          withDirectives(createVNode(unref(Button), {
            severity: "secondary",
            icon: linkHidden.value ? "pi pi-eye-slash" : "pi pi-eye",
            "aria-label": _ctx.$t("graphCanvasMenu.toggleLinkVisibility"),
            "data-testid": "toggle-link-visibility-button",
            onClick: _cache[4] || (_cache[4] = () => unref(commandStore).execute("Comfy.Canvas.ToggleLinkVisibility"))
          }, null, 8, ["icon", "aria-label"]), [
            [
              _directive_tooltip,
              unref(t2)("graphCanvasMenu.toggleLinkVisibility"),
              void 0,
              { left: true }
            ]
          ]),
          withDirectives(createVNode(unref(Button), {
            severity: "secondary",
            icon: "pi pi-map",
            "aria-label": _ctx.$t("graphCanvasMenu.toggleMinimap"),
            class: normalizeClass({ "minimap-active": minimapVisible.value }),
            "data-testid": "toggle-minimap-button",
            onClick: _cache[5] || (_cache[5] = () => unref(commandStore).execute("Comfy.Canvas.ToggleMinimap"))
          }, null, 8, ["aria-label", "class"]), [
            [
              _directive_tooltip,
              minimapTooltip.value,
              void 0,
              { left: true }
            ]
          ])
        ]),
        _: 1
      }, 8, ["onWheel"]);
    };
  }
});
const GraphCanvasMenu = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-3b8522cc"]]);
const _hoisted_1$t = ["width", "height"];
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "MiniMap",
  setup(__props) {
    const minimap = useMinimap();
    const canvasStore = useCanvasStore();
    const bottomPanelStore = useBottomPanelStore();
    const {
      initialized,
      visible,
      containerRef,
      canvasRef,
      containerStyles,
      viewportStyles,
      width,
      height,
      init,
      destroy,
      handlePointerDown,
      handlePointerMove,
      handlePointerUp,
      handleWheel
    } = minimap;
    watch(
      () => canvasStore.canvas,
      async (canvas) => {
        if (canvas && !initialized.value) {
          await init();
        }
      },
      { immediate: true }
    );
    onMounted(async () => {
      if (canvasStore.canvas) {
        await init();
      }
    });
    onUnmounted(() => {
      destroy();
    });
    return (_ctx, _cache) => {
      return unref(visible) && unref(initialized) ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "containerRef",
        ref: containerRef,
        class: normalizeClass(["litegraph-minimap absolute right-[90px] z-[1000]", {
          "bottom-[20px]": !unref(bottomPanelStore).bottomPanelVisible,
          "bottom-[280px]": unref(bottomPanelStore).bottomPanelVisible
        }]),
        style: normalizeStyle(unref(containerStyles)),
        onPointerdown: _cache[0] || (_cache[0] = //@ts-ignore
        (...args) => unref(handlePointerDown) && unref(handlePointerDown)(...args)),
        onPointermove: _cache[1] || (_cache[1] = //@ts-ignore
        (...args) => unref(handlePointerMove) && unref(handlePointerMove)(...args)),
        onPointerup: _cache[2] || (_cache[2] = //@ts-ignore
        (...args) => unref(handlePointerUp) && unref(handlePointerUp)(...args)),
        onPointerleave: _cache[3] || (_cache[3] = //@ts-ignore
        (...args) => unref(handlePointerUp) && unref(handlePointerUp)(...args)),
        onWheel: _cache[4] || (_cache[4] = //@ts-ignore
        (...args) => unref(handleWheel) && unref(handleWheel)(...args))
      }, [
        createElementVNode("canvas", {
          ref_key: "canvasRef",
          ref: canvasRef,
          width: unref(width),
          height: unref(height),
          class: "minimap-canvas"
        }, null, 8, _hoisted_1$t),
        createElementVNode("div", {
          class: "minimap-viewport",
          style: normalizeStyle(unref(viewportStyles))
        }, null, 4)
      ], 38)) : createCommentVNode("", true);
    };
  }
});
const MiniMap = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-834f2434"]]);
const _sfc_main$J = /* @__PURE__ */ defineComponent({
  __name: "NodeTooltip",
  setup(__props) {
    let idleTimeout;
    const nodeDefStore = useNodeDefStore();
    const settingStore = useSettingStore();
    const tooltipRef = ref();
    const tooltipText = ref("");
    const left = ref();
    const top = ref();
    const hideTooltip = /* @__PURE__ */ __name(() => tooltipText.value = "", "hideTooltip");
    const showTooltip = /* @__PURE__ */ __name(async (tooltip) => {
      if (!tooltip) return;
      left.value = app.canvas.mouse[0] + "px";
      top.value = app.canvas.mouse[1] + "px";
      tooltipText.value = tooltip;
      await nextTick();
      const rect = tooltipRef.value?.getBoundingClientRect();
      if (!rect) return;
      if (rect.right > window.innerWidth) {
        left.value = app.canvas.mouse[0] - rect.width + "px";
      }
      if (rect.top < 0) {
        top.value = app.canvas.mouse[1] + rect.height + "px";
      }
    }, "showTooltip");
    const onIdle = /* @__PURE__ */ __name(() => {
      const { canvas } = app;
      const node = canvas.node_over;
      if (!node) return;
      const ctor = node.constructor;
      const nodeDef = nodeDefStore.nodeDefsByName[node.type ?? ""];
      if (ctor.title_mode !== LiteGraph.NO_TITLE && canvas.graph_mouse[1] < node.pos[1]) {
        return showTooltip(nodeDef.description);
      }
      if (node.flags?.collapsed) return;
      const inputSlot = isOverNodeInput(
        node,
        canvas.graph_mouse[0],
        canvas.graph_mouse[1],
        [0, 0]
      );
      if (inputSlot !== -1) {
        const inputName = node.inputs[inputSlot].name;
        const translatedTooltip = st(
          `nodeDefs.${normalizeI18nKey(node.type ?? "")}.inputs.${normalizeI18nKey(inputName)}.tooltip`,
          nodeDef.inputs[inputName]?.tooltip ?? ""
        );
        return showTooltip(translatedTooltip);
      }
      const outputSlot = isOverNodeOutput(
        node,
        canvas.graph_mouse[0],
        canvas.graph_mouse[1],
        [0, 0]
      );
      if (outputSlot !== -1) {
        const translatedTooltip = st(
          `nodeDefs.${normalizeI18nKey(node.type ?? "")}.outputs.${outputSlot}.tooltip`,
          nodeDef.outputs[outputSlot]?.tooltip ?? ""
        );
        return showTooltip(translatedTooltip);
      }
      const widget = app.canvas.getWidgetAtCursor();
      if (widget && !isDOMWidget(widget)) {
        const translatedTooltip = st(
          `nodeDefs.${normalizeI18nKey(node.type ?? "")}.inputs.${normalizeI18nKey(widget.name)}.tooltip`,
          nodeDef.inputs[widget.name]?.tooltip ?? ""
        );
        return showTooltip(widget.tooltip ?? translatedTooltip);
      }
    }, "onIdle");
    const onMouseMove = /* @__PURE__ */ __name((e) => {
      hideTooltip();
      clearTimeout(idleTimeout);
      if (e.target.nodeName !== "CANVAS") return;
      idleTimeout = window.setTimeout(
        onIdle,
        settingStore.get("LiteGraph.Node.TooltipDelay")
      );
    }, "onMouseMove");
    useEventListener(window, "mousemove", onMouseMove);
    useEventListener(window, "click", hideTooltip);
    return (_ctx, _cache) => {
      return tooltipText.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref_key: "tooltipRef",
        ref: tooltipRef,
        class: "node-tooltip",
        style: normalizeStyle({ left: left.value, top: top.value })
      }, toDisplayString(tooltipText.value), 5)) : createCommentVNode("", true);
    };
  }
});
const NodeTooltip = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["__scopeId", "data-v-69036aeb"]]);
function useSelectedLiteGraphItems() {
  const canvasStore = useCanvasStore();
  const isIgnoredItem = /* @__PURE__ */ __name((item) => {
    return item instanceof Reroute;
  }, "isIgnoredItem");
  const filterSelectableItems = /* @__PURE__ */ __name((items) => {
    const result = /* @__PURE__ */ new Set();
    for (const item of items) {
      if (!isIgnoredItem(item)) {
        result.add(item);
      }
    }
    return result;
  }, "filterSelectableItems");
  const getSelectableItems = /* @__PURE__ */ __name(() => {
    const { selectedItems } = canvasStore.getCanvas();
    return filterSelectableItems(selectedItems);
  }, "getSelectableItems");
  const hasSelectableItems = /* @__PURE__ */ __name(() => {
    return getSelectableItems().size > 0;
  }, "hasSelectableItems");
  const hasMultipleSelectableItems = /* @__PURE__ */ __name(() => {
    return getSelectableItems().size > 1;
  }, "hasMultipleSelectableItems");
  const getSelectedNodes = /* @__PURE__ */ __name(() => {
    const selectedNodes = app.canvas.selected_nodes;
    if (!selectedNodes) return [];
    const nodeArray = [];
    for (const i in selectedNodes) {
      nodeArray.push(selectedNodes[i]);
    }
    const hasSubgraphs = nodeArray.some(
      (node) => node.isSubgraphNode?.() && node.subgraph
    );
    if (!hasSubgraphs) {
      return nodeArray;
    }
    return collectFromNodes(nodeArray);
  }, "getSelectedNodes");
  const toggleSelectedNodesMode = /* @__PURE__ */ __name((mode) => {
    const selectedNodes = app.canvas.selected_nodes;
    if (!selectedNodes) return;
    const selectedNodeArray = [];
    for (const i in selectedNodes) {
      selectedNodeArray.push(selectedNodes[i]);
    }
    selectedNodeArray.forEach((selectedNode) => {
      const newModeForSelectedNode = selectedNode.mode === mode ? LGraphEventMode.ALWAYS : mode;
      selectedNode.mode = newModeForSelectedNode;
      if (selectedNode.isSubgraphNode?.() && selectedNode.subgraph) {
        traverseNodesDepthFirst([selectedNode], {
          visitor: /* @__PURE__ */ __name((node) => {
            if (node === selectedNode) return void 0;
            node.mode = newModeForSelectedNode;
            return void 0;
          }, "visitor")
        });
      }
    });
  }, "toggleSelectedNodesMode");
  return {
    isIgnoredItem,
    filterSelectableItems,
    getSelectableItems,
    hasSelectableItems,
    hasMultipleSelectableItems,
    getSelectedNodes,
    toggleSelectedNodesMode
  };
}
__name(useSelectedLiteGraphItems, "useSelectedLiteGraphItems");
const SelectionOverlayInjectionKey = Symbol("selectionOverlayState");
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "SelectionOverlay",
  setup(__props) {
    const canvasStore = useCanvasStore();
    const { style, updatePosition } = useAbsolutePosition();
    const { getSelectableItems } = useSelectedLiteGraphItems();
    const visible = ref(false);
    const showBorder = ref(false);
    const overlayUpdateCount = ref(0);
    provide(SelectionOverlayInjectionKey, {
      visible: readonly(visible),
      updateCount: readonly(overlayUpdateCount)
    });
    const positionSelectionOverlay = /* @__PURE__ */ __name(() => {
      const selectableItems = getSelectableItems();
      showBorder.value = selectableItems.size > 1;
      if (!selectableItems.size) {
        visible.value = false;
        return;
      }
      visible.value = true;
      const bounds = createBounds(selectableItems);
      if (bounds) {
        updatePosition({
          pos: [bounds[0], bounds[1]],
          size: [bounds[2], bounds[3]]
        });
      }
    }, "positionSelectionOverlay");
    whenever(
      () => canvasStore.getCanvas().state.selectionChanged,
      () => {
        requestAnimationFrame(() => {
          positionSelectionOverlay();
          overlayUpdateCount.value++;
          canvasStore.getCanvas().state.selectionChanged = false;
        });
      },
      { immediate: true }
    );
    canvasStore.getCanvas().ds.onChanged = positionSelectionOverlay;
    watch(
      () => canvasStore.canvas?.state?.draggingItems,
      (draggingItems) => {
        if (draggingItems === false) {
          requestAnimationFrame(() => {
            visible.value = true;
            positionSelectionOverlay();
            overlayUpdateCount.value++;
          });
        } else {
          requestAnimationFrame(() => {
            visible.value = false;
            overlayUpdateCount.value++;
          });
        }
      }
    );
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: normalizeClass(["selection-overlay-container pointer-events-none z-40", {
          "show-border": showBorder.value
        }]),
        style: normalizeStyle(unref(style))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ], 6)), [
        [vShow, visible.value]
      ]);
    };
  }
});
const SelectionOverlay = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-9fa3f8a5"]]);
const _hoisted_1$s = {
  viewBox: "0 0 512 512",
  width: "1.2em",
  height: "1.2em"
};
function render$7(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$s, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "M486.945 25.055L347.49 52.945l23.78 23.784L390.544 96l-56.793 56.795c-27.393-22.7-57.978-32.844-86.97-32.06c-33.838.918-64.92 15.95-87.858 38.888c-22.94 22.94-38.084 54.114-39.406 88.178c-1.138 29.306 8.49 60.407 30.742 88.485L19.27 467.27l25.46 25.46l155.48-155.484l-12.476-12.726c-24.72-25.22-33.185-51.125-32.246-75.323s11.9-47.13 28.89-64.12c16.988-16.988 39.66-27.71 63.38-28.352c23.72-.643 49.04 8.152 73.633 33.5l12.727 13.115L416 121.457l43.055 43.053zM256 192a64 64 0 0 0-64 64a64 64 0 0 0 64 64a64 64 0 0 0 64-64a64 64 0 0 0-64-64"
    }, null, -1)
  ]));
}
__name(render$7, "render$7");
const __unplugin_components_0$4 = markRaw({ name: "game-icons-detour", render: render$7 });
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "BypassButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    return (_ctx, _cache) => {
      const _component_i_game_icons58detour = __unplugin_components_0$4;
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        "data-testid": "bypass-button",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Canvas.ToggleSelectedNodes.Bypass"))
      }, {
        icon: withCtx(() => [
          createVNode(_component_i_game_icons58detour)
        ]),
        _: 1
      })), [
        [vShow, unref(canvasStore).nodeSelected],
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Canvas_ToggleSelectedNodes_Bypass.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _hoisted_1$r = { class: "relative" };
const _hoisted_2$e = { class: "flex items-center gap-1" };
const _hoisted_3$a = {
  key: 0,
  class: "color-picker-container absolute -top-10 left-1/2"
};
const _hoisted_4$8 = ["data-testid"];
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "ColorPickerButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const canvasStore = useCanvasStore();
    const colorPaletteStore = useColorPaletteStore();
    const workflowStore = useWorkflowStore();
    const isLightTheme = computed(
      () => colorPaletteStore.completedActivePalette.light_theme
    );
    const toLightThemeColor = /* @__PURE__ */ __name((color) => adjustColor(color, { lightness: 0.5 }), "toLightThemeColor");
    const showColorPicker = ref(false);
    const NO_COLOR_OPTION = {
      name: "noColor",
      localizedName: t2("color.noColor"),
      value: {
        dark: LiteGraph.NODE_DEFAULT_BGCOLOR,
        light: toLightThemeColor(LiteGraph.NODE_DEFAULT_BGCOLOR)
      }
    };
    const colorOptions = [
      NO_COLOR_OPTION,
      ...Object.entries(LGraphCanvas.node_colors).map(([name, color]) => ({
        name,
        localizedName: t2(`color.${name}`),
        value: {
          dark: color.bgcolor,
          light: toLightThemeColor(color.bgcolor)
        }
      }))
    ];
    const selectedColorOption = ref(null);
    const applyColor = /* @__PURE__ */ __name((colorOption) => {
      const colorName = colorOption?.name ?? NO_COLOR_OPTION.name;
      const canvasColorOption = colorName === NO_COLOR_OPTION.name ? null : LGraphCanvas.node_colors[colorName];
      for (const item of canvasStore.selectedItems) {
        if (isColorable(item)) {
          item.setColorOption(canvasColorOption);
        }
      }
      canvasStore.canvas?.setDirty(true, true);
      currentColorOption.value = canvasColorOption;
      showColorPicker.value = false;
      workflowStore.activeWorkflow?.changeTracker.checkState();
    }, "applyColor");
    const currentColorOption = ref(null);
    const currentColor = computed(
      () => currentColorOption.value ? isLightTheme.value ? toLightThemeColor(currentColorOption.value?.bgcolor) : currentColorOption.value?.bgcolor : null
    );
    const localizedCurrentColorName = computed(() => {
      if (!currentColorOption.value?.bgcolor) return null;
      const colorOption = colorOptions.find(
        (option) => option.value.dark === currentColorOption.value?.bgcolor || option.value.light === currentColorOption.value?.bgcolor
      );
      return colorOption?.localizedName ?? NO_COLOR_OPTION.localizedName;
    });
    watch(
      () => canvasStore.selectedItems,
      (newSelectedItems) => {
        showColorPicker.value = false;
        selectedColorOption.value = null;
        currentColorOption.value = getItemsColorOption(newSelectedItems);
      }
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$r, [
        withDirectives((openBlock(), createBlock(unref(Button), {
          severity: "secondary",
          text: "",
          onClick: _cache[0] || (_cache[0] = () => showColorPicker.value = !showColorPicker.value)
        }, {
          icon: withCtx(() => [
            createElementVNode("div", _hoisted_2$e, [
              createElementVNode("i", {
                class: "pi pi-circle-fill",
                style: normalizeStyle({ color: currentColor.value ?? "" })
              }, null, 4),
              _cache[1] || (_cache[1] = createElementVNode("i", {
                class: "pi pi-chevron-down",
                style: { fontSize: "0.5rem" }
              }, null, -1))
            ])
          ]),
          _: 1
        })), [
          [vShow, unref(canvasStore).nodeSelected || unref(canvasStore).groupSelected],
          [
            _directive_tooltip,
            {
              value: localizedCurrentColorName.value ?? unref(t2)("color.noColor"),
              showDelay: 512
            },
            void 0,
            { top: true }
          ]
        ]),
        showColorPicker.value ? (openBlock(), createElementBlock("div", _hoisted_3$a, [
          createVNode(unref(SelectButton), {
            "model-value": selectedColorOption.value,
            options: colorOptions,
            "option-label": "name",
            "data-key": "value",
            "onUpdate:modelValue": applyColor
          }, {
            option: withCtx(({ option }) => [
              withDirectives(createElementVNode("i", {
                class: "pi pi-circle-fill",
                style: normalizeStyle({
                  color: isLightTheme.value ? option.value.light : option.value.dark
                }),
                "data-testid": option.name
              }, null, 12, _hoisted_4$8), [
                [
                  _directive_tooltip,
                  option.localizedName,
                  void 0,
                  { top: true }
                ]
              ])
            ]),
            _: 1
          }, 8, ["model-value"])
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const ColorPickerButton = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-2d7cb313"]]);
const _hoisted_1$q = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$6(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$q, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m15 15l6 6m-6-6v4.8m0-4.8h4.8M9 19.8V15m0 0H4.2M9 15l-6 6M15 4.2V9m0 0h4.8M15 9l6-6M9 4.2V9m0 0H4.2M9 9L3 3"
    }, null, -1)
  ]));
}
__name(render$6, "render$6");
const __unplugin_components_0$3 = markRaw({ name: "lucide-shrink", render: render$6 });
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "ConvertToSubgraphButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const isVisible = computed(() => {
      return canvasStore.groupSelected || canvasStore.rerouteSelected || canvasStore.nodeSelected;
    });
    return (_ctx, _cache) => {
      const _component_i_lucide58shrink = __unplugin_components_0$3;
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Graph.ConvertToSubgraph"))
      }, {
        icon: withCtx(() => [
          createVNode(_component_i_lucide58shrink)
        ]),
        _: 1
      })), [
        [vShow, isVisible.value],
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Graph_ConvertToSubgraph.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "DeleteButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const isDeletable = computed(
      () => canvasStore.selectedItems.some((x) => x.removable !== false)
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "danger",
        text: "",
        icon: "pi pi-trash",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Canvas.DeleteSelectedItems"))
      }, null, 512)), [
        [vShow, isDeletable.value],
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Canvas_DeleteSelectedItems.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "EditModelButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const isImageOutputOrEditModelNode = /* @__PURE__ */ __name((node) => isLGraphNode(node) && (isImageNode(node) || node.type === "workflow>FLUX.1 Kontext Image Edit"), "isImageOutputOrEditModelNode");
    const isImageOutputSelected = computed(
      () => canvasStore.selectedItems.length === 1 && isImageOutputOrEditModelNode(canvasStore.selectedItems[0])
    );
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        icon: "pi pi-pen-to-square",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Canvas.AddEditModelStep"))
      }, null, 512)), [
        [vShow, isImageOutputSelected.value],
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Canvas_AddEditModelStep.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _hoisted_1$p = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$5(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$p, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m6 3l14 9l-14 9z"
    }, null, -1)
  ]));
}
__name(render$5, "render$5");
const __unplugin_components_1 = markRaw({ name: "lucide-play", render: render$5 });
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "ExecuteButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const canvasStore = useCanvasStore();
    const commandStore = useCommandStore();
    const canvas = canvasStore.getCanvas();
    const buttonHovered = ref(false);
    const selectedOutputNodes = computed(
      () => canvasStore.selectedItems.filter(
        (item) => isLGraphNode(item) && item.constructor.nodeData?.output_node
      )
    );
    const isDisabled = computed(() => selectedOutputNodes.value.length === 0);
    function outputNodeStokeStyle() {
      if (this.selected && this.constructor.nodeData?.output_node && buttonHovered.value) {
        return { color: "orange", lineWidth: 2, padding: 10 };
      }
    }
    __name(outputNodeStokeStyle, "outputNodeStokeStyle");
    const handleMouseEnter = /* @__PURE__ */ __name(() => {
      buttonHovered.value = true;
      for (const node of selectedOutputNodes.value) {
        node.strokeStyles["outputNode"] = outputNodeStokeStyle;
      }
      canvas.setDirty(true);
    }, "handleMouseEnter");
    const handleMouseLeave = /* @__PURE__ */ __name(() => {
      buttonHovered.value = false;
      canvas.setDirty(true);
    }, "handleMouseLeave");
    const handleClick = /* @__PURE__ */ __name(async () => {
      await commandStore.execute("Comfy.QueueSelectedOutputNodes");
    }, "handleClick");
    return (_ctx, _cache) => {
      const _component_i_lucide58play = __unplugin_components_1;
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: isDisabled.value ? "secondary" : "success",
        text: "",
        disabled: isDisabled.value,
        onMouseenter: _cache[0] || (_cache[0] = () => handleMouseEnter()),
        onMouseleave: _cache[1] || (_cache[1] = () => handleMouseLeave()),
        onClick: handleClick
      }, {
        default: withCtx(() => [
          createVNode(_component_i_lucide58play)
        ]),
        _: 1
      }, 8, ["severity", "disabled"])), [
        [vShow, unref(canvasStore).nodeSelected],
        [
          _directive_tooltip,
          {
            value: isDisabled.value ? unref(t2)("selectionToolbox.executeButton.disabledTooltip") : unref(t2)("selectionToolbox.executeButton.tooltip"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "ExtensionCommandButton",
  props: {
    command: {}
  },
  setup(__props) {
    const commandStore = useCommandStore();
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        icon: typeof _ctx.command.icon === "function" ? _ctx.command.icon() : _ctx.command.icon,
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute(_ctx.command.id))
      }, null, 8, ["icon"])), [
        [
          _directive_tooltip,
          {
            value: unref(st)(`commands.${unref(normalizeI18nKey)(_ctx.command.id)}.label`, "") || void 0,
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "HelpButton",
  setup(__props) {
    const canvasStore = useCanvasStore();
    const nodeDefStore = useNodeDefStore();
    const sidebarTabStore = useSidebarTabStore();
    const nodeHelpStore = useNodeHelpStore();
    const { id: nodeLibraryTabId } = useNodeLibrarySidebarTab();
    const nodeDef = computed(() => {
      if (canvasStore.selectedItems.length !== 1) return null;
      const item = canvasStore.selectedItems[0];
      if (!isLGraphNode(item)) return null;
      return nodeDefStore.fromLGraphNode(item);
    });
    const showHelp = /* @__PURE__ */ __name(() => {
      const def = nodeDef.value;
      if (!def) return;
      if (sidebarTabStore.activeSidebarTabId !== nodeLibraryTabId) {
        sidebarTabStore.toggleSidebarTab(nodeLibraryTabId);
      }
      nodeHelpStore.openHelp(def);
    }, "showHelp");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        class: "help-button",
        text: "",
        icon: "pi pi-question-circle",
        severity: "secondary",
        onClick: showHelp
      }, null, 512)), [
        [vShow, nodeDef.value],
        [
          _directive_tooltip,
          {
            value: _ctx.$t("g.help"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "Load3DViewerButton",
  setup(__props) {
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const is3DNode = computed(() => {
      const enable3DViewer = useSettingStore().get("Comfy.Load3D.3DViewerEnable");
      const nodes = canvasStore.selectedItems.filter(isLGraphNode);
      return nodes.length === 1 && nodes.some(isLoad3dNode) && enable3DViewer;
    });
    const open3DViewer = /* @__PURE__ */ __name(() => {
      void commandStore.execute("Comfy.3DViewer.Open3DViewer");
    }, "open3DViewer");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        icon: "pi pi-pencil",
        onClick: open3DViewer
      }, null, 512)), [
        [vShow, is3DNode.value],
        [
          _directive_tooltip,
          {
            value: unref(t$2)("commands.Comfy_3DViewer_Open3DViewer.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "MaskEditorButton",
  setup(__props) {
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const isSingleImageNode = computed(() => {
      const { selectedItems } = canvasStore;
      const item = selectedItems[0];
      return selectedItems.length === 1 && isLGraphNode(item) && isImageNode(item);
    });
    const openMaskEditor = /* @__PURE__ */ __name(() => {
      void commandStore.execute("Comfy.MaskEditor.OpenMaskEditor");
    }, "openMaskEditor");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        icon: "pi pi-pencil",
        onClick: openMaskEditor
      }, null, 512)), [
        [vShow, isSingleImageNode.value],
        [
          _directive_tooltip,
          {
            value: unref(t$2)("commands.Comfy_MaskEditor_OpenMaskEditor.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "PinButton",
  setup(__props) {
    const { t: t2 } = useI18n();
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "secondary",
        text: "",
        icon: "pi pi-thumbtack",
        onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Canvas.ToggleSelected.Pin"))
      }, null, 512)), [
        [vShow, unref(canvasStore).nodeSelected || unref(canvasStore).groupSelected],
        [
          _directive_tooltip,
          {
            value: unref(t2)("commands.Comfy_Canvas_ToggleSelectedNodes_Pin.label"),
            showDelay: 1e3
          },
          void 0,
          { top: true }
        ]
      ]);
    };
  }
});
const isRefreshableWidget = /* @__PURE__ */ __name((widget) => widget != null && typeof widget === "object" && "refresh" in widget && typeof widget.refresh === "function", "isRefreshableWidget");
const useRefreshableSelection = /* @__PURE__ */ __name(() => {
  const graphStore = useCanvasStore();
  const selectedNodes = ref([]);
  watchEffect(() => {
    selectedNodes.value = graphStore.selectedItems.filter(isLGraphNode);
  });
  const refreshableWidgets = computed(
    () => selectedNodes.value.flatMap((node) => {
      if (!node.widgets) return [];
      const items = [];
      for (const widget of node.widgets) {
        if (isRefreshableWidget(widget)) {
          items.push(widget);
        }
      }
      return items;
    })
  );
  const isRefreshable = computed(() => refreshableWidgets.value.length > 0);
  async function refreshSelected() {
    if (!isRefreshable.value) return;
    await Promise.all(refreshableWidgets.value.map((item) => item.refresh()));
  }
  __name(refreshSelected, "refreshSelected");
  return {
    isRefreshable,
    refreshSelected
  };
}, "useRefreshableSelection");
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "RefreshSelectionButton",
  setup(__props) {
    const { isRefreshable, refreshSelected } = useRefreshableSelection();
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createBlock(unref(Button), {
        severity: "info",
        text: "",
        icon: "pi pi-refresh",
        onClick: unref(refreshSelected)
      }, null, 8, ["onClick"])), [
        [vShow, unref(isRefreshable)]
      ]);
    };
  }
});
function useRetriggerableAnimation(trigger, options = {}) {
  const { animateOnMount = true, animationDelay = 0 } = options;
  const shouldAnimate = ref(false);
  const retriggerAnimation = /* @__PURE__ */ __name(() => {
    shouldAnimate.value = false;
    void document.body.offsetHeight;
    requestAnimationFrame(() => {
      if (animationDelay > 0) {
        setTimeout(() => {
          shouldAnimate.value = true;
        }, animationDelay);
      } else {
        shouldAnimate.value = true;
      }
    });
  }, "retriggerAnimation");
  if (animateOnMount) {
    onMounted(() => {
      if (animationDelay > 0) {
        setTimeout(() => {
          shouldAnimate.value = true;
        }, animationDelay);
      } else {
        shouldAnimate.value = true;
      }
    });
  }
  if (trigger) {
    watch(trigger, () => {
      retriggerAnimation();
    });
  }
  return {
    shouldAnimate,
    retriggerAnimation
  };
}
__name(useRetriggerableAnimation, "useRetriggerableAnimation");
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "SelectionToolbox",
  setup(__props) {
    const commandStore = useCommandStore();
    const canvasStore = useCanvasStore();
    const extensionService = useExtensionService();
    const canvasInteractions = useCanvasInteractions();
    const selectionOverlayState = inject(SelectionOverlayInjectionKey);
    const { shouldAnimate } = useRetriggerableAnimation(
      selectionOverlayState?.updateCount,
      { animateOnMount: true }
    );
    const extensionToolboxCommands = computed(() => {
      const commandIds = new Set(
        canvasStore.selectedItems.map(
          (item) => extensionService.invokeExtensions("getSelectionToolboxCommands", item).flat()
        ).flat()
      );
      return Array.from(commandIds).map((commandId) => commandStore.getCommand(commandId)).filter((command) => command !== void 0);
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Panel), {
        class: normalizeClass(["selection-toolbox absolute left-1/2 rounded-lg", { "animate-slide-up": unref(shouldAnimate) }]),
        pt: {
          header: "hidden",
          content: "p-0 flex flex-row"
        },
        onWheel: unref(canvasInteractions).handleWheel
      }, {
        default: withCtx(() => [
          createVNode(_sfc_main$C),
          createVNode(ColorPickerButton),
          createVNode(_sfc_main$H),
          createVNode(_sfc_main$x),
          createVNode(_sfc_main$D),
          createVNode(_sfc_main$z),
          createVNode(_sfc_main$y),
          createVNode(_sfc_main$F),
          createVNode(_sfc_main$E),
          createVNode(_sfc_main$w),
          (openBlock(true), createElementBlock(Fragment, null, renderList(extensionToolboxCommands.value, (command) => {
            return openBlock(), createBlock(_sfc_main$B, {
              key: command.id,
              command
            }, null, 8, ["command"]);
          }), 128)),
          createVNode(_sfc_main$A)
        ]),
        _: 1
      }, 8, ["class", "onWheel"]);
    };
  }
});
const SelectionToolbox = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-ed94f4ea"]]);
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "TitleEditor",
  setup(__props) {
    const settingStore = useSettingStore();
    const showInput = ref(false);
    const editedTitle = ref("");
    const { style: inputPositionStyle, updatePosition } = useAbsolutePosition();
    const inputFontStyle = ref({});
    const inputStyle = computed(() => ({
      ...inputPositionStyle.value,
      ...inputFontStyle.value
    }));
    const titleEditorStore = useTitleEditorStore();
    const canvasStore = useCanvasStore();
    const previousCanvasDraggable = ref(true);
    const onEdit = /* @__PURE__ */ __name((newValue) => {
      if (titleEditorStore.titleEditorTarget && newValue.trim() !== "") {
        const trimmedTitle = newValue.trim();
        titleEditorStore.titleEditorTarget.title = trimmedTitle;
        const target = titleEditorStore.titleEditorTarget;
        if (target instanceof LGraphNode && target.isSubgraphNode?.()) {
          target.subgraph.name = trimmedTitle;
        }
        app.graph.setDirtyCanvas(true, true);
      }
      showInput.value = false;
      titleEditorStore.titleEditorTarget = null;
      canvasStore.canvas.allow_dragcanvas = previousCanvasDraggable.value;
    }, "onEdit");
    watch(
      () => titleEditorStore.titleEditorTarget,
      (target) => {
        if (target === null) {
          return;
        }
        editedTitle.value = target.title;
        showInput.value = true;
        const canvas = canvasStore.canvas;
        previousCanvasDraggable.value = canvas.allow_dragcanvas;
        canvas.allow_dragcanvas = false;
        const scale = canvas.ds.scale;
        if (target instanceof LGraphGroup) {
          const group = target;
          updatePosition({
            pos: group.pos,
            size: [group.size[0], group.titleHeight]
          });
          inputFontStyle.value = { fontSize: `${group.font_size * scale}px` };
        } else if (target instanceof LGraphNode) {
          const node = target;
          const [x, y] = node.getBounding();
          updatePosition({
            pos: [x, y],
            size: [node.width, LiteGraph.NODE_TITLE_HEIGHT]
          });
          inputFontStyle.value = { fontSize: `${12 * scale}px` };
        }
      }
    );
    const canvasEventHandler = /* @__PURE__ */ __name((event) => {
      if (event.detail.subType === "group-double-click") {
        if (!settingStore.get("Comfy.Group.DoubleClickTitleToEdit")) {
          return;
        }
        const group = event.detail.group;
        const [_2, y] = group.pos;
        const e = event.detail.originalEvent;
        const relativeY = e.canvasY - y;
        if (relativeY <= group.titleHeight) {
          titleEditorStore.titleEditorTarget = group;
        }
      } else if (event.detail.subType === "node-double-click") {
        if (!settingStore.get("Comfy.Node.DoubleClickTitleToEdit")) {
          return;
        }
        const node = event.detail.node;
        const [_2, y] = node.pos;
        const e = event.detail.originalEvent;
        const relativeY = e.canvasY - y;
        if (relativeY <= 0) {
          titleEditorStore.titleEditorTarget = node;
        }
      }
    }, "canvasEventHandler");
    useEventListener(document, "litegraph:canvas", canvasEventHandler);
    return (_ctx, _cache) => {
      return showInput.value ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "group-title-editor node-title-editor",
        style: normalizeStyle(inputStyle.value)
      }, [
        createVNode(EditableText, {
          "is-editing": showInput.value,
          "model-value": editedTitle.value,
          onEdit
        }, null, 8, ["is-editing", "model-value"])
      ], 4)) : createCommentVNode("", true);
    };
  }
});
const TitleEditor = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["__scopeId", "data-v-e5829fcb"]]);
const useSearchBoxStore = defineStore("searchBox", () => {
  const visible = ref(false);
  function toggleVisible() {
    visible.value = !visible.value;
  }
  __name(toggleVisible, "toggleVisible");
  return {
    visible,
    toggleVisible
  };
});
const _sfc_main$t = {
  name: "AutoCompletePlus",
  extends: AutoComplete,
  emits: ["focused-option-changed"],
  data() {
    return {
      // Flag to determine if IME is active
      isComposing: false
    };
  },
  mounted() {
    if (typeof AutoComplete.mounted === "function") {
      AutoComplete.mounted.call(this);
    }
    const inputEl = this.$el.querySelector("input");
    if (inputEl) {
      inputEl.addEventListener("compositionstart", () => {
        this.isComposing = true;
      });
      inputEl.addEventListener("compositionend", () => {
        this.isComposing = false;
      });
    }
    this.$watch(
      () => this.focusedOptionIndex,
      (newVal, oldVal) => {
        this.$emit("focused-option-changed", newVal);
      }
    );
  },
  methods: {
    // Override onKeyDown to block Enter when IME is active
    onKeyDown(event) {
      if (event.key === "Enter" && this.isComposing) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      AutoComplete.methods.onKeyDown.call(this, event);
    }
  }
};
const _hoisted_1$o = { class: "option-container flex justify-between items-center px-2 py-0 cursor-pointer overflow-hidden w-full" };
const _hoisted_2$d = { class: "option-display-name font-semibold flex flex-col" };
const _hoisted_3$9 = { key: 0 };
const _hoisted_4$7 = ["innerHTML"];
const _hoisted_5$6 = ["innerHTML"];
const _hoisted_6$5 = {
  key: 0,
  class: "option-category font-light text-sm text-muted overflow-hidden text-ellipsis whitespace-nowrap"
};
const _hoisted_7$4 = { class: "option-badges" };
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "NodeSearchItem",
  props: {
    nodeDef: {},
    currentQuery: {}
  },
  setup(__props) {
    const settingStore = useSettingStore();
    const showCategory = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.ShowCategory")
    );
    const showIdName = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.ShowIdName")
    );
    const showNodeFrequency = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.ShowNodeFrequency")
    );
    const nodeFrequencyStore = useNodeFrequencyStore();
    const nodeFrequency = computed(
      () => nodeFrequencyStore.getNodeFrequency(props.nodeDef)
    );
    const nodeBookmarkStore = useNodeBookmarkStore();
    const isBookmarked = computed(
      () => nodeBookmarkStore.isBookmarked(props.nodeDef)
    );
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$o, [
        createElementVNode("div", _hoisted_2$d, [
          createElementVNode("div", null, [
            isBookmarked.value ? (openBlock(), createElementBlock("span", _hoisted_3$9, _cache[0] || (_cache[0] = [
              createElementVNode("i", { class: "pi pi-bookmark-fill text-sm mr-1" }, null, -1)
            ]))) : createCommentVNode("", true),
            createElementVNode("span", {
              innerHTML: unref(highlightQuery)(_ctx.nodeDef.display_name, _ctx.currentQuery)
            }, null, 8, _hoisted_4$7),
            _cache[1] || (_cache[1] = createElementVNode("span", null, " ", -1)),
            showIdName.value ? (openBlock(), createBlock(unref(Tag), {
              key: 1,
              severity: "secondary"
            }, {
              default: withCtx(() => [
                createElementVNode("span", {
                  innerHTML: unref(highlightQuery)(_ctx.nodeDef.name, _ctx.currentQuery)
                }, null, 8, _hoisted_5$6)
              ]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          showCategory.value ? (openBlock(), createElementBlock("div", _hoisted_6$5, toDisplayString(_ctx.nodeDef.category.replaceAll("/", " > ")), 1)) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_7$4, [
          _ctx.nodeDef.experimental ? (openBlock(), createBlock(unref(Tag), {
            key: 0,
            value: _ctx.$t("g.experimental"),
            severity: "primary"
          }, null, 8, ["value"])) : createCommentVNode("", true),
          _ctx.nodeDef.deprecated ? (openBlock(), createBlock(unref(Tag), {
            key: 1,
            value: _ctx.$t("g.deprecated"),
            severity: "danger"
          }, null, 8, ["value"])) : createCommentVNode("", true),
          showNodeFrequency.value && nodeFrequency.value > 0 ? (openBlock(), createBlock(unref(Tag), {
            key: 2,
            value: unref(formatNumberWithSuffix)(nodeFrequency.value, { roundToInt: true }),
            severity: "secondary"
          }, null, 8, ["value"])) : createCommentVNode("", true),
          _ctx.nodeDef.nodeSource.type !== unref(NodeSourceType).Unknown ? (openBlock(), createBlock(unref(Chip), {
            key: 3,
            class: "text-sm font-light"
          }, {
            default: withCtx(() => [
              createTextVNode(toDisplayString(_ctx.nodeDef.nodeSource.displayText), 1)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ]);
    };
  }
});
const NodeSearchItem = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-2f72abbe"]]);
const _hoisted_1$n = { class: "comfy-vue-node-search-container flex justify-center items-center w-full min-w-96" };
const _hoisted_2$c = {
  key: 0,
  class: "comfy-vue-node-preview-container absolute left-[-350px] top-[50px]"
};
const _hoisted_3$8 = { class: "_dialog-body" };
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "NodeSearchBox",
  props: {
    filters: {},
    searchLimit: { default: 64 }
  },
  emits: ["addFilter", "removeFilter", "addNode"],
  setup(__props, { emit: __emit }) {
    const settingStore = useSettingStore();
    const { t: t2 } = useI18n();
    const enableNodePreview = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl.NodePreview")
    );
    const nodeSearchFilterVisible = ref(false);
    const inputId = `comfy-vue-node-search-box-input-${Math.random()}`;
    const suggestions = ref([]);
    const hoveredSuggestion = ref(null);
    const currentQuery = ref("");
    const placeholder = computed(() => {
      return __props.filters.length === 0 ? t2("g.searchNodes") + "..." : "";
    });
    const nodeDefStore = useNodeDefStore();
    const nodeFrequencyStore = useNodeFrequencyStore();
    const search = /* @__PURE__ */ __name((query) => {
      const queryIsEmpty = query === "" && __props.filters.length === 0;
      currentQuery.value = query;
      suggestions.value = queryIsEmpty ? nodeFrequencyStore.topNodeDefs : [
        ...nodeDefStore.nodeSearchService.searchNode(query, __props.filters, {
          limit: __props.searchLimit
        })
      ];
    }, "search");
    const emit = __emit;
    let inputElement = null;
    const reFocusInput = /* @__PURE__ */ __name(async () => {
      inputElement ??= document.getElementById(inputId);
      if (inputElement) {
        inputElement.blur();
        await nextTick(() => inputElement?.focus());
      }
    }, "reFocusInput");
    onMounted(reFocusInput);
    const onAddFilter = /* @__PURE__ */ __name((filterAndValue) => {
      nodeSearchFilterVisible.value = false;
      emit("addFilter", filterAndValue);
    }, "onAddFilter");
    const onRemoveFilter = /* @__PURE__ */ __name(async (event, filterAndValue) => {
      event.stopPropagation();
      event.preventDefault();
      emit("removeFilter", filterAndValue);
      await reFocusInput();
    }, "onRemoveFilter");
    const setHoverSuggestion = /* @__PURE__ */ __name((index2) => {
      if (index2 === -1) {
        hoveredSuggestion.value = null;
        return;
      }
      const value = suggestions.value[index2];
      hoveredSuggestion.value = value;
    }, "setHoverSuggestion");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$n, [
        enableNodePreview.value ? (openBlock(), createElementBlock("div", _hoisted_2$c, [
          hoveredSuggestion.value ? (openBlock(), createBlock(NodePreview, {
            key: hoveredSuggestion.value?.name || "",
            "node-def": hoveredSuggestion.value
          }, null, 8, ["node-def"])) : createCommentVNode("", true)
        ])) : createCommentVNode("", true),
        createVNode(unref(Button), {
          icon: "pi pi-filter",
          severity: "secondary",
          class: "filter-button z-10",
          onClick: _cache[0] || (_cache[0] = ($event) => nodeSearchFilterVisible.value = true)
        }),
        createVNode(unref(Dialog), {
          visible: nodeSearchFilterVisible.value,
          "onUpdate:visible": _cache[1] || (_cache[1] = ($event) => nodeSearchFilterVisible.value = $event),
          class: "min-w-96",
          "dismissable-mask": "",
          modal: "",
          onHide: reFocusInput
        }, {
          header: withCtx(() => [
            createElementVNode("h3", null, toDisplayString(_ctx.$t("g.addNodeFilterCondition")), 1)
          ]),
          default: withCtx(() => [
            createElementVNode("div", _hoisted_3$8, [
              createVNode(NodeSearchFilter, { onAddFilter })
            ])
          ]),
          _: 1
        }, 8, ["visible"]),
        createVNode(_sfc_main$t, {
          "model-value": _ctx.filters,
          class: "comfy-vue-node-search-box z-10 flex-grow",
          "scroll-height": "40vh",
          placeholder: placeholder.value,
          "input-id": inputId,
          "append-to": "self",
          suggestions: suggestions.value,
          "min-length": 0,
          delay: 100,
          loading: !unref(nodeFrequencyStore).isLoaded,
          "complete-on-focus": "",
          "auto-option-focus": "",
          "force-selection": "",
          multiple: "",
          "option-label": "display_name",
          onComplete: _cache[2] || (_cache[2] = ($event) => search($event.query)),
          onOptionSelect: _cache[3] || (_cache[3] = ($event) => emit("addNode", $event.value)),
          onFocusedOptionChanged: _cache[4] || (_cache[4] = ($event) => setHoverSuggestion($event))
        }, {
          option: withCtx(({ option }) => [
            createVNode(NodeSearchItem, {
              "node-def": option,
              "current-query": currentQuery.value
            }, null, 8, ["node-def", "current-query"])
          ]),
          chip: withCtx(({ value }) => [
            value.filterDef && value.value ? (openBlock(), createBlock(SearchFilterChip, {
              key: `${value.filterDef.id}-${value.value}`,
              text: value.value,
              badge: value.filterDef.invokeSequence.toUpperCase(),
              "badge-class": value.filterDef.invokeSequence + "-badge",
              onRemove: /* @__PURE__ */ __name(($event) => onRemoveFilter(
                $event,
                value
              ), "onRemove")
            }, null, 8, ["text", "badge", "badge-class", "onRemove"])) : createCommentVNode("", true)
          ]),
          _: 1
        }, 8, ["model-value", "placeholder", "suggestions", "loading"])
      ]);
    };
  }
});
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "NodeSearchBoxPopover",
  setup(__props) {
    let triggerEvent = null;
    let listenerController = null;
    let disconnectOnReset = false;
    const settingStore = useSettingStore();
    const litegraphService = useLitegraphService();
    const { visible } = storeToRefs(useSearchBoxStore());
    const dismissable = ref(true);
    const getNewNodeLocation = /* @__PURE__ */ __name(() => {
      return triggerEvent ? [triggerEvent.canvasX, triggerEvent.canvasY] : litegraphService.getCanvasCenter();
    }, "getNewNodeLocation");
    const nodeFilters = ref([]);
    const addFilter = /* @__PURE__ */ __name((filter) => {
      nodeFilters.value.push(filter);
    }, "addFilter");
    const removeFilter = /* @__PURE__ */ __name((filter) => {
      nodeFilters.value = nodeFilters.value.filter(
        (f) => toRaw(f) !== toRaw(filter)
      );
    }, "removeFilter");
    const clearFilters = /* @__PURE__ */ __name(() => {
      nodeFilters.value = [];
    }, "clearFilters");
    const closeDialog = /* @__PURE__ */ __name(() => {
      visible.value = false;
    }, "closeDialog");
    const canvasStore = useCanvasStore();
    const addNode = /* @__PURE__ */ __name((nodeDef) => {
      if (!triggerEvent) {
        console.warn("The trigger event was undefined when addNode was called.");
        return;
      }
      const node = litegraphService.addNodeOnGraph(nodeDef, {
        pos: getNewNodeLocation()
      });
      if (disconnectOnReset) {
        canvasStore.getCanvas().linkConnector.connectToNode(node, triggerEvent);
      }
      disconnectOnReset = false;
      useWorkflowStore().activeWorkflow?.changeTracker?.checkState();
      window.requestAnimationFrame(closeDialog);
    }, "addNode");
    const newSearchBoxEnabled = computed(
      () => settingStore.get("Comfy.NodeSearchBoxImpl") === "default"
    );
    const showSearchBox = /* @__PURE__ */ __name((e) => {
      if (newSearchBoxEnabled.value) {
        if (e.pointerType === "touch") {
          setTimeout(() => {
            showNewSearchBox(e);
          }, 128);
        } else {
          showNewSearchBox(e);
        }
      } else {
        canvasStore.getCanvas().showSearchBox(e);
      }
    }, "showSearchBox");
    const getFirstLink = /* @__PURE__ */ __name(() => canvasStore.getCanvas().linkConnector.renderLinks.at(0), "getFirstLink");
    const nodeDefStore = useNodeDefStore();
    const showNewSearchBox = /* @__PURE__ */ __name((e) => {
      const firstLink = getFirstLink();
      if (firstLink) {
        const filter = firstLink.toType === "input" ? nodeDefStore.nodeSearchService.inputTypeFilter : nodeDefStore.nodeSearchService.outputTypeFilter;
        const dataType = firstLink.fromSlot.type?.toString() ?? "";
        addFilter({
          filterDef: filter,
          value: dataType
        });
      }
      visible.value = true;
      triggerEvent = e;
      dismissable.value = false;
      setTimeout(() => {
        dismissable.value = true;
      }, 300);
    }, "showNewSearchBox");
    const showContextMenu = /* @__PURE__ */ __name((e) => {
      const firstLink = getFirstLink();
      if (!firstLink) return;
      const { node, fromSlot, toType } = firstLink;
      const commonOptions = {
        e,
        allow_searchbox: true,
        showSearchBox: /* @__PURE__ */ __name(() => {
          cancelResetOnContextClose();
          showSearchBox(e);
        }, "showSearchBox")
      };
      const afterRerouteId = firstLink.fromReroute?.id;
      const connectionOptions = toType === "input" ? { nodeFrom: node, slotFrom: fromSlot, afterRerouteId } : { nodeTo: node, slotTo: fromSlot, afterRerouteId };
      const canvas = canvasStore.getCanvas();
      const menu = canvas.showConnectionMenu({
        ...connectionOptions,
        ...commonOptions
      });
      if (!menu) {
        console.warn("No menu was returned from showConnectionMenu");
        return;
      }
      triggerEvent = e;
      listenerController = new AbortController();
      const { signal } = listenerController;
      const options = { once: true, signal };
      useEventListener(
        canvas.canvas,
        "connect-new-default-node",
        (createEvent) => {
          if (!(createEvent instanceof CustomEvent))
            throw new Error("Invalid event");
          const node2 = createEvent.detail?.node;
          if (!(node2 instanceof LGraphNode)) throw new Error("Invalid node");
          disconnectOnReset = false;
          createEvent.preventDefault();
          canvas.linkConnector.connectToNode(node2, e);
        },
        options
      );
      const cancelResetOnContextClose = useEventListener(
        menu.controller.signal,
        "abort",
        reset,
        options
      );
    }, "showContextMenu");
    watchEffect(() => {
      const { canvas } = canvasStore;
      if (!canvas) return;
      LiteGraph.release_link_on_empty_shows_menu = false;
      canvas.allow_searchbox = false;
      useEventListener(
        canvas.linkConnector.events,
        "dropped-on-canvas",
        handleDroppedOnCanvas
      );
    });
    const canvasEventHandler = /* @__PURE__ */ __name((e) => {
      if (e.detail.subType === "empty-double-click") {
        showSearchBox(e.detail.originalEvent);
      } else if (e.detail.subType === "group-double-click") {
        const group = e.detail.group;
        const [_2, y] = group.pos;
        const relativeY = e.detail.originalEvent.canvasY - y;
        if (relativeY > group.titleHeight) {
          showSearchBox(e.detail.originalEvent);
        }
      }
    }, "canvasEventHandler");
    const linkReleaseAction = computed(
      () => settingStore.get("Comfy.LinkRelease.Action")
    );
    const linkReleaseActionShift = computed(
      () => settingStore.get("Comfy.LinkRelease.ActionShift")
    );
    const preventDefault = /* @__PURE__ */ __name((e) => e.preventDefault(), "preventDefault");
    const cancelNextReset = /* @__PURE__ */ __name((e) => {
      e.preventDefault();
      const canvas = canvasStore.getCanvas();
      canvas.linkConnector.state.snapLinksPos = [e.detail.canvasX, e.detail.canvasY];
      useEventListener(canvas.linkConnector.events, "reset", preventDefault, {
        once: true
      });
    }, "cancelNextReset");
    const handleDroppedOnCanvas = /* @__PURE__ */ __name((e) => {
      disconnectOnReset = true;
      const action = e.detail.shiftKey ? linkReleaseActionShift.value : linkReleaseAction.value;
      switch (action) {
        case LinkReleaseTriggerAction.SEARCH_BOX:
          cancelNextReset(e);
          showSearchBox(e.detail);
          break;
        case LinkReleaseTriggerAction.CONTEXT_MENU:
          cancelNextReset(e);
          showContextMenu(e.detail);
          break;
        case LinkReleaseTriggerAction.NO_ACTION:
        default:
          break;
      }
    }, "handleDroppedOnCanvas");
    const reset = /* @__PURE__ */ __name(() => {
      listenerController?.abort();
      listenerController = null;
      triggerEvent = null;
      const canvas = canvasStore.getCanvas();
      canvas.linkConnector.events.removeEventListener("reset", preventDefault);
      if (disconnectOnReset) canvas.linkConnector.disconnectLinks();
      canvas.linkConnector.reset();
      canvas.setDirty(true, true);
    }, "reset");
    watch(visible, () => {
      if (!visible.value) reset();
    });
    useEventListener(document, "litegraph:canvas", canvasEventHandler);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(unref(Dialog), {
          visible: unref(visible),
          "onUpdate:visible": _cache[0] || (_cache[0] = ($event) => isRef(visible) ? visible.value = $event : null),
          modal: "",
          "dismissable-mask": dismissable.value,
          pt: {
            root: {
              class: "invisible-dialog-root",
              role: "search"
            },
            mask: { class: "node-search-box-dialog-mask" },
            transition: {
              enterFromClass: "opacity-0 scale-75",
              // 100ms is the duration of the transition in the dialog component
              enterActiveClass: "transition-all duration-100 ease-out",
              leaveActiveClass: "transition-all duration-100 ease-in",
              leaveToClass: "opacity-0 scale-75"
            }
          },
          onHide: clearFilters
        }, {
          container: withCtx(() => [
            createVNode(_sfc_main$r, {
              filters: nodeFilters.value,
              onAddFilter: addFilter,
              onRemoveFilter: removeFilter,
              onAddNode: addNode
            }, null, 8, ["filters"])
          ]),
          _: 1
        }, 8, ["visible", "dismissable-mask"])
      ]);
    };
  }
});
const _hoisted_1$m = {
  viewBox: "0 0 256 256",
  width: "1.2em",
  height: "1.2em"
};
function render$4(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$m, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "currentColor",
      d: "m120 137l-72 64a12 12 0 1 1-16-18l61.91-55L32 73a12 12 0 1 1 16-18l72 64a12 12 0 0 1 0 18m96 43h-96a12 12 0 0 0 0 24h96a12 12 0 0 0 0-24"
    }, null, -1)
  ]));
}
__name(render$4, "render$4");
const __unplugin_components_0$2 = markRaw({ name: "ph-terminal-bold", render: render$4 });
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "SidebarIcon",
  props: {
    icon: { default: "" },
    selected: { type: Boolean, default: false },
    tooltip: { default: "" },
    tooltipSuffix: { default: "" },
    iconBadge: { type: [String, Function], default: "" }
  },
  emits: ["click"],
  setup(__props, { emit: __emit }) {
    const { t: t2 } = useI18n();
    const emit = __emit;
    const overlayValue = computed(
      () => typeof __props.iconBadge === "function" ? __props.iconBadge() ?? "" : __props.iconBadge
    );
    const shouldShowBadge = computed(() => !!overlayValue.value);
    const computedTooltip = computed(() => t2(__props.tooltip) + __props.tooltipSuffix);
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createBlock(unref(Button), {
        text: "",
        pt: {
          root: {
            class: `side-bar-button ${_ctx.selected ? "p-button-primary side-bar-button-selected" : "p-button-secondary"}`,
            "aria-label": computedTooltip.value
          }
        },
        onClick: _cache[0] || (_cache[0] = ($event) => emit("click", $event))
      }, {
        icon: withCtx(() => [
          renderSlot(_ctx.$slots, "icon", {}, () => [
            shouldShowBadge.value ? (openBlock(), createBlock(unref(OverlayBadge), {
              key: 0,
              value: overlayValue.value
            }, {
              default: withCtx(() => [
                createElementVNode("i", {
                  class: normalizeClass(_ctx.icon + " side-bar-button-icon")
                }, null, 2)
              ]),
              _: 1
            }, 8, ["value"])) : (openBlock(), createElementBlock("i", {
              key: 1,
              class: normalizeClass(_ctx.icon + " side-bar-button-icon")
            }, null, 2))
          ], true)
        ]),
        _: 3
      }, 8, ["pt"])), [
        [_directive_tooltip, {
          value: computedTooltip.value,
          showDelay: 300,
          hideDelay: 300
        }]
      ]);
    };
  }
});
const SidebarIcon = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-e21c10cc"]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "SidebarBottomPanelToggleButton",
  setup(__props) {
    const bottomPanelStore = useBottomPanelStore();
    return (_ctx, _cache) => {
      const _component_i_ph58terminal_bold = __unplugin_components_0$2;
      return openBlock(), createBlock(SidebarIcon, {
        tooltip: _ctx.$t("menu.toggleBottomPanel"),
        selected: unref(bottomPanelStore).activePanel == "terminal",
        onClick: unref(bottomPanelStore).toggleBottomPanel
      }, {
        icon: withCtx(() => [
          createVNode(_component_i_ph58terminal_bold)
        ]),
        _: 1
      }, 8, ["tooltip", "selected", "onClick"]);
    };
  }
});
const _hoisted_1$l = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$3(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$l, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("path", { d: "M10 8h.01M12 12h.01M14 8h.01M16 12h.01M18 8h.01M6 8h.01M7 16h10m-9-4h.01" }),
      createElementVNode("rect", {
        width: "20",
        height: "16",
        x: "2",
        y: "4",
        rx: "2"
      })
    ], -1)
  ]));
}
__name(render$3, "render$3");
const __unplugin_components_0$1 = markRaw({ name: "lucide-keyboard", render: render$3 });
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "SidebarShortcutsToggleButton",
  setup(__props) {
    const bottomPanelStore = useBottomPanelStore();
    const command = useCommandStore().getCommand(
      "Workspace.ToggleBottomPanel.Shortcuts"
    );
    const isShortcutsPanelVisible = computed(
      () => bottomPanelStore.activePanel === "shortcuts"
    );
    const toggleShortcutsPanel = /* @__PURE__ */ __name(() => {
      bottomPanelStore.togglePanel("shortcuts");
    }, "toggleShortcutsPanel");
    const formatKeySequence = /* @__PURE__ */ __name((sequences) => {
      return sequences.map((seq) => seq.replace(/Control/g, "Ctrl").replace(/Shift/g, "Shift")).join(" + ");
    }, "formatKeySequence");
    return (_ctx, _cache) => {
      const _component_i_lucide58keyboard = __unplugin_components_0$1;
      return openBlock(), createBlock(SidebarIcon, {
        tooltip: _ctx.$t("shortcuts.keyboardShortcuts") + " (" + formatKeySequence(unref(command).keybinding.combo.getKeySequences()) + ")",
        selected: isShortcutsPanelVisible.value,
        onClick: toggleShortcutsPanel
      }, {
        icon: withCtx(() => [
          createVNode(_component_i_lucide58keyboard)
        ]),
        _: 1
      }, 8, ["tooltip", "selected"]);
    };
  }
});
const releaseApiClient = axios.create({
  baseURL: COMFY_API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});
const useReleaseService = /* @__PURE__ */ __name(() => {
  const isLoading = ref(false);
  const error = ref(null);
  const handleApiError = /* @__PURE__ */ __name((err, context, routeSpecificErrors) => {
    if (!axios.isAxiosError(err))
      return err instanceof Error ? `${context}: ${err.message}` : `${context}: Unknown error occurred`;
    const axiosError = err;
    if (axiosError.response) {
      const { status, data } = axiosError.response;
      if (routeSpecificErrors && routeSpecificErrors[status])
        return routeSpecificErrors[status];
      switch (status) {
        case 400:
          return `Bad request: ${data?.message || "Invalid input"}`;
        case 401:
          return "Unauthorized: Authentication required";
        case 403:
          return `Forbidden: ${data?.message || "Access denied"}`;
        case 404:
          return `Not found: ${data?.message || "Resource not found"}`;
        case 500:
          return `Server error: ${data?.message || "Internal server error"}`;
        default:
          return `${context}: ${data?.message || axiosError.message}`;
      }
    }
    return `${context}: ${axiosError.message}`;
  }, "handleApiError");
  const executeApiRequest = /* @__PURE__ */ __name(async (apiCall, errorContext, routeSpecificErrors) => {
    isLoading.value = true;
    error.value = null;
    try {
      const response = await apiCall();
      return response.data;
    } catch (err) {
      if (isAbortError(err)) return null;
      error.value = handleApiError(err, errorContext, routeSpecificErrors);
      return null;
    } finally {
      isLoading.value = false;
    }
  }, "executeApiRequest");
  const getReleases = /* @__PURE__ */ __name(async (params, signal) => {
    const endpoint = "/releases";
    const errorContext = "Failed to get releases";
    const routeSpecificErrors = {
      400: "Invalid project or version parameter"
    };
    const apiResponse = await executeApiRequest(
      () => releaseApiClient.get(endpoint, {
        params,
        signal
      }),
      errorContext,
      routeSpecificErrors
    );
    return apiResponse;
  }, "getReleases");
  return {
    isLoading,
    error,
    getReleases
  };
}, "useReleaseService");
const useReleaseStore = defineStore("release", () => {
  const releases = ref([]);
  const isLoading = ref(false);
  const error = ref(null);
  const releaseService = useReleaseService();
  const systemStatsStore = useSystemStatsStore();
  const settingStore = useSettingStore();
  const currentComfyUIVersion = computed(
    () => systemStatsStore?.systemStats?.system?.comfyui_version ?? ""
  );
  const locale = computed(() => settingStore.get("Comfy.Locale"));
  const releaseVersion = computed(
    () => settingStore.get("Comfy.Release.Version")
  );
  const releaseStatus = computed(() => settingStore.get("Comfy.Release.Status"));
  const releaseTimestamp = computed(
    () => settingStore.get("Comfy.Release.Timestamp")
  );
  const showVersionUpdates = computed(
    () => settingStore.get("Comfy.Notification.ShowVersionUpdates")
  );
  const recentRelease = computed(() => {
    return releases.value[0] ?? null;
  });
  const recentReleases = computed(() => {
    return releases.value.slice(0, 3);
  });
  const THREE_DAYS_MS = 3 * 24 * 60 * 60 * 1e3;
  const isNewVersionAvailable = computed(
    () => !!recentRelease.value && compareVersions(
      recentRelease.value.version,
      currentComfyUIVersion.value
    ) > 0
  );
  const isLatestVersion = computed(
    () => !!recentRelease.value && !compareVersions(recentRelease.value.version, currentComfyUIVersion.value)
  );
  const hasMediumOrHighAttention = computed(
    () => recentReleases.value.slice(0, -1).some(
      (release) => release.attention === "medium" || release.attention === "high"
    )
  );
  const shouldShowToast = computed(() => {
    if (!isElectron()) {
      return false;
    }
    if (!showVersionUpdates.value) {
      return false;
    }
    if (!isNewVersionAvailable.value) {
      return false;
    }
    if (!hasMediumOrHighAttention.value) {
      return false;
    }
    if (releaseVersion.value === recentRelease.value?.version && ["skipped", "changelog seen"].includes(releaseStatus.value)) {
      return false;
    }
    return true;
  });
  const shouldShowRedDot = computed(() => {
    if (!isElectron()) {
      return false;
    }
    if (!showVersionUpdates.value) {
      return false;
    }
    if (!isNewVersionAvailable.value) {
      return false;
    }
    const { version } = recentRelease.value;
    if (releaseVersion.value === version && releaseStatus.value === "changelog seen") {
      return false;
    }
    if (hasMediumOrHighAttention.value) {
      return true;
    }
    if (releaseVersion.value === version && releaseStatus.value === "skipped" && releaseTimestamp.value && Date.now() - releaseTimestamp.value >= THREE_DAYS_MS) {
      return false;
    }
    return true;
  });
  const shouldShowPopup = computed(() => {
    if (!isElectron()) {
      return false;
    }
    if (!showVersionUpdates.value) {
      return false;
    }
    if (!isLatestVersion.value) {
      return false;
    }
    if (releaseVersion.value === recentRelease.value.version && releaseStatus.value === "what's new seen") {
      return false;
    }
    return true;
  });
  async function handleSkipRelease(version) {
    if (version !== recentRelease.value?.version || releaseStatus.value === "changelog seen") {
      return;
    }
    await settingStore.set("Comfy.Release.Version", version);
    await settingStore.set("Comfy.Release.Status", "skipped");
    await settingStore.set("Comfy.Release.Timestamp", Date.now());
  }
  __name(handleSkipRelease, "handleSkipRelease");
  async function handleShowChangelog(version) {
    if (version !== recentRelease.value?.version) {
      return;
    }
    await settingStore.set("Comfy.Release.Version", version);
    await settingStore.set("Comfy.Release.Status", "changelog seen");
    await settingStore.set("Comfy.Release.Timestamp", Date.now());
  }
  __name(handleShowChangelog, "handleShowChangelog");
  async function handleWhatsNewSeen(version) {
    if (version !== recentRelease.value?.version) {
      return;
    }
    await settingStore.set("Comfy.Release.Version", version);
    await settingStore.set("Comfy.Release.Status", "what's new seen");
    await settingStore.set("Comfy.Release.Timestamp", Date.now());
  }
  __name(handleWhatsNewSeen, "handleWhatsNewSeen");
  async function fetchReleases() {
    if (isLoading.value) {
      return;
    }
    if (!showVersionUpdates.value) {
      return;
    }
    isLoading.value = true;
    error.value = null;
    try {
      if (!systemStatsStore.systemStats) {
        await systemStatsStore.fetchSystemStats();
      }
      const fetchedReleases = await releaseService.getReleases({
        project: "comfyui",
        current_version: currentComfyUIVersion.value,
        form_factor: systemStatsStore.getFormFactor(),
        locale: stringToLocale(locale.value)
      });
      if (fetchedReleases !== null) {
        releases.value = fetchedReleases;
      } else if (releaseService.error.value) {
        error.value = releaseService.error.value;
      }
    } catch (err) {
      error.value = err instanceof Error ? err.message : "Unknown error occurred";
    } finally {
      isLoading.value = false;
    }
  }
  __name(fetchReleases, "fetchReleases");
  async function initialize() {
    await fetchReleases();
  }
  __name(initialize, "initialize");
  return {
    releases,
    isLoading,
    error,
    recentRelease,
    recentReleases,
    shouldShowToast,
    shouldShowRedDot,
    shouldShowPopup,
    shouldShowUpdateButton: isNewVersionAvailable,
    handleSkipRelease,
    handleShowChangelog,
    handleWhatsNewSeen,
    fetchReleases,
    initialize
  };
});
const releaseStore = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useReleaseStore
}, Symbol.toStringTag, { value: "Module" }));
const _hoisted_1$k = {
  class: "help-center-menu",
  role: "menu",
  "aria-label": "Help Center Menu"
};
const _hoisted_2$b = {
  class: "help-menu-section",
  role: "menubar"
};
const _hoisted_3$7 = ["onClick", "onMouseenter", "onMouseleave"];
const _hoisted_4$6 = { class: "menu-label" };
const _hoisted_5$5 = {
  key: 0,
  class: "pi pi-chevron-right"
};
const _hoisted_6$4 = {
  key: 0,
  class: "submenu-divider"
};
const _hoisted_7$3 = ["onClick"];
const _hoisted_8$2 = { class: "menu-label" };
const _hoisted_9$1 = {
  key: 0,
  class: "whats-new-section"
};
const _hoisted_10$1 = { class: "section-description" };
const _hoisted_11$1 = {
  key: 0,
  role: "group",
  "aria-label": "Recent releases"
};
const _hoisted_12 = ["onClick", "onKeydown"];
const _hoisted_13 = { class: "release-content" };
const _hoisted_14 = { class: "release-title" };
const _hoisted_15 = ["datetime"];
const _hoisted_16 = { class: "normal-state" };
const _hoisted_17 = { class: "hover-state" };
const _hoisted_18 = {
  key: 1,
  class: "help-menu-item",
  role: "status",
  "aria-live": "polite"
};
const _hoisted_19 = {
  key: 2,
  class: "help-menu-item",
  role: "status"
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "HelpCenterMenuContent",
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const EXTERNAL_LINKS = {
      DOCS: "https://docs.comfy.org/",
      DISCORD: "https://www.comfy.org/discord",
      GITHUB: "https://github.com/comfyanonymous/ComfyUI",
      DESKTOP_GUIDE: "https://comfyorg.notion.site/",
      UPDATE_GUIDE: "https://docs.comfy.org/installation/update_comfyui"
    };
    const TIME_UNITS = {
      MINUTE: 60 * 1e3,
      HOUR: 60 * 60 * 1e3,
      DAY: 24 * 60 * 60 * 1e3,
      WEEK: 7 * 24 * 60 * 60 * 1e3,
      MONTH: 30 * 24 * 60 * 60 * 1e3,
      YEAR: 365 * 24 * 60 * 60 * 1e3
    };
    const SUBMENU_CONFIG = {
      DELAY_MS: 100,
      OFFSET_PX: 8,
      Z_INDEX: 10001
    };
    const { t: t2, locale } = useI18n();
    const releaseStore2 = useReleaseStore();
    const commandStore = useCommandStore();
    const settingStore = useSettingStore();
    const emit = __emit;
    const isSubmenuVisible = ref(false);
    const submenuRef = ref(null);
    const submenuStyle = ref({});
    let hoverTimeout = null;
    const hasReleases = computed(() => releaseStore2.releases.length > 0);
    const showVersionUpdates = computed(
      () => settingStore.get("Comfy.Notification.ShowVersionUpdates")
    );
    const moreItems = computed(() => {
      const allMoreItems = [
        {
          key: "desktop-guide",
          type: "item",
          label: t2("helpCenter.desktopUserGuide"),
          visible: isElectron(),
          action: /* @__PURE__ */ __name(() => {
            openExternalLink(EXTERNAL_LINKS.DESKTOP_GUIDE);
            emit("close");
          }, "action")
        },
        {
          key: "dev-tools",
          type: "item",
          label: t2("helpCenter.openDevTools"),
          visible: isElectron(),
          action: /* @__PURE__ */ __name(() => {
            openDevTools();
            emit("close");
          }, "action")
        },
        {
          key: "divider-1",
          type: "divider",
          visible: isElectron()
        },
        {
          key: "reinstall",
          type: "item",
          label: t2("helpCenter.reinstall"),
          visible: isElectron(),
          action: /* @__PURE__ */ __name(() => {
            onReinstall();
            emit("close");
          }, "action")
        }
      ];
      return allMoreItems.filter((item) => item.visible !== false);
    });
    const hasVisibleMoreItems = computed(() => {
      return !!moreItems.value.length;
    });
    const moreMenuItem = computed(
      () => menuItems.value.find((item) => item.key === "more")
    );
    const menuItems = computed(() => {
      return [
        {
          key: "docs",
          type: "item",
          icon: "pi pi-book",
          label: t2("helpCenter.docs"),
          action: /* @__PURE__ */ __name(() => {
            openExternalLink(EXTERNAL_LINKS.DOCS);
            emit("close");
          }, "action")
        },
        {
          key: "discord",
          type: "item",
          icon: "pi pi-discord",
          label: "Discord",
          action: /* @__PURE__ */ __name(() => {
            openExternalLink(EXTERNAL_LINKS.DISCORD);
            emit("close");
          }, "action")
        },
        {
          key: "github",
          type: "item",
          icon: "pi pi-github",
          label: t2("helpCenter.github"),
          action: /* @__PURE__ */ __name(() => {
            openExternalLink(EXTERNAL_LINKS.GITHUB);
            emit("close");
          }, "action")
        },
        {
          key: "help",
          type: "item",
          icon: "pi pi-question-circle",
          label: t2("helpCenter.helpFeedback"),
          action: /* @__PURE__ */ __name(() => {
            void commandStore.execute("Comfy.Feedback");
            emit("close");
          }, "action")
        },
        {
          key: "more",
          type: "item",
          icon: "",
          label: t2("helpCenter.more"),
          visible: hasVisibleMoreItems.value,
          action: /* @__PURE__ */ __name(() => {
          }, "action"),
          // No action for more item
          items: moreItems.value
        }
      ];
    });
    const openExternalLink = /* @__PURE__ */ __name((url) => {
      window.open(url, "_blank", "noopener,noreferrer");
    }, "openExternalLink");
    const clearHoverTimeout = /* @__PURE__ */ __name(() => {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        hoverTimeout = null;
      }
    }, "clearHoverTimeout");
    const calculateSubmenuPosition = /* @__PURE__ */ __name((button) => {
      const rect = button.getBoundingClientRect();
      const submenuWidth = 210;
      const visibleItemCount = moreMenuItem.value?.items?.filter((item) => item.visible !== false).length || 0;
      const estimatedHeight = visibleItemCount * 48 + 16;
      const submenuHeight = submenuRef.value?.offsetHeight || estimatedHeight;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      let top = rect.top;
      let left = rect.right + SUBMENU_CONFIG.OFFSET_PX;
      if (left + submenuWidth > viewportWidth) {
        left = rect.left - submenuWidth - SUBMENU_CONFIG.OFFSET_PX;
      }
      if (top + submenuHeight > viewportHeight) {
        top = Math.max(
          SUBMENU_CONFIG.OFFSET_PX,
          // Minimum distance from top of viewport
          rect.bottom - submenuHeight
        );
      }
      if (top < SUBMENU_CONFIG.OFFSET_PX) {
        top = SUBMENU_CONFIG.OFFSET_PX;
      }
      top -= 8;
      return {
        position: "fixed",
        top: `${top}px`,
        left: `${left}px`,
        zIndex: SUBMENU_CONFIG.Z_INDEX
      };
    }, "calculateSubmenuPosition");
    const formatReleaseDate = /* @__PURE__ */ __name((dateString) => {
      if (!dateString) return "date";
      const date = new Date(dateString);
      const now = /* @__PURE__ */ new Date();
      const diffTime = Math.abs(now.getTime() - date.getTime());
      const timeUnits = [
        { unit: TIME_UNITS.YEAR, suffix: "y" },
        { unit: TIME_UNITS.MONTH, suffix: "mo" },
        { unit: TIME_UNITS.WEEK, suffix: "w" },
        { unit: TIME_UNITS.DAY, suffix: "d" },
        { unit: TIME_UNITS.HOUR, suffix: "h" },
        { unit: TIME_UNITS.MINUTE, suffix: "min" }
      ];
      for (const { unit, suffix } of timeUnits) {
        const value = Math.floor(diffTime / unit);
        if (value > 0) {
          return `${value}${suffix} ago`;
        }
      }
      return "now";
    }, "formatReleaseDate");
    const shouldShowUpdateButton = /* @__PURE__ */ __name((release) => {
      return releaseStore2.shouldShowUpdateButton && release === releaseStore2.recentReleases[0];
    }, "shouldShowUpdateButton");
    const onMenuItemHover = /* @__PURE__ */ __name(async (key, event) => {
      if (key !== "more" || !moreMenuItem.value?.items) return;
      const hasVisibleItems = moreMenuItem.value.items.some(
        (item) => item.visible !== false
      );
      if (!hasVisibleItems) return;
      clearHoverTimeout();
      const moreButton = event.currentTarget;
      submenuStyle.value = calculateSubmenuPosition(moreButton);
      isSubmenuVisible.value = true;
      await nextTick();
      if (submenuRef.value) {
        submenuStyle.value = calculateSubmenuPosition(moreButton);
      }
    }, "onMenuItemHover");
    const onMenuItemLeave = /* @__PURE__ */ __name((key) => {
      if (key !== "more") return;
      hoverTimeout = window.setTimeout(() => {
        isSubmenuVisible.value = false;
      }, SUBMENU_CONFIG.DELAY_MS);
    }, "onMenuItemLeave");
    const onSubmenuHover = /* @__PURE__ */ __name(() => {
      clearHoverTimeout();
    }, "onSubmenuHover");
    const onSubmenuLeave = /* @__PURE__ */ __name(() => {
      isSubmenuVisible.value = false;
    }, "onSubmenuLeave");
    const openDevTools = /* @__PURE__ */ __name(() => {
      if (isElectron()) {
        electronAPI().openDevTools();
      }
    }, "openDevTools");
    const onReinstall = /* @__PURE__ */ __name(() => {
      if (isElectron()) {
        void electronAPI().reinstall();
      }
    }, "onReinstall");
    const onReleaseClick = /* @__PURE__ */ __name((release) => {
      void releaseStore2.handleShowChangelog(release.version);
      const versionAnchor = formatVersionAnchor(release.version);
      const changelogUrl = `${getChangelogUrl()}#${versionAnchor}`;
      openExternalLink(changelogUrl);
      emit("close");
    }, "onReleaseClick");
    const onUpdate = /* @__PURE__ */ __name((_2) => {
      openExternalLink(EXTERNAL_LINKS.UPDATE_GUIDE);
      emit("close");
    }, "onUpdate");
    const getChangelogUrl = /* @__PURE__ */ __name(() => {
      const isChineseLocale = locale.value === "zh";
      return isChineseLocale ? "https://docs.comfy.org/zh-CN/changelog" : "https://docs.comfy.org/changelog";
    }, "getChangelogUrl");
    onMounted(async () => {
      if (!hasReleases.value) {
        await releaseStore2.fetchReleases();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$k, [
        createElementVNode("nav", _hoisted_2$b, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(menuItems.value, (menuItem) => {
            return withDirectives((openBlock(), createElementBlock("button", {
              key: menuItem.key,
              type: "button",
              class: normalizeClass(["help-menu-item", { "more-item": menuItem.key === "more" }]),
              role: "menuitem",
              onClick: menuItem.action,
              onMouseenter: /* @__PURE__ */ __name(($event) => onMenuItemHover(menuItem.key, $event), "onMouseenter"),
              onMouseleave: /* @__PURE__ */ __name(($event) => onMenuItemLeave(menuItem.key), "onMouseleave")
            }, [
              createElementVNode("i", {
                class: normalizeClass([menuItem.icon, "help-menu-icon"])
              }, null, 2),
              createElementVNode("span", _hoisted_4$6, toDisplayString(menuItem.label), 1),
              menuItem.key === "more" ? (openBlock(), createElementBlock("i", _hoisted_5$5)) : createCommentVNode("", true)
            ], 42, _hoisted_3$7)), [
              [vShow, menuItem.visible !== false]
            ]);
          }), 128))
        ]),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          isSubmenuVisible.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            ref_key: "submenuRef",
            ref: submenuRef,
            class: "more-submenu",
            style: normalizeStyle(submenuStyle.value),
            onMouseenter: onSubmenuHover,
            onMouseleave: onSubmenuLeave
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(moreMenuItem.value?.items, (submenuItem) => {
              return openBlock(), createElementBlock(Fragment, {
                key: submenuItem.key
              }, [
                submenuItem.type === "divider" ? withDirectives((openBlock(), createElementBlock("div", _hoisted_6$4, null, 512)), [
                  [vShow, submenuItem.visible !== false]
                ]) : withDirectives((openBlock(), createElementBlock("button", {
                  key: 1,
                  type: "button",
                  class: "help-menu-item submenu-item",
                  role: "menuitem",
                  onClick: submenuItem.action
                }, [
                  createElementVNode("span", _hoisted_8$2, toDisplayString(submenuItem.label), 1)
                ], 8, _hoisted_7$3)), [
                  [vShow, submenuItem.visible !== false]
                ])
              ], 64);
            }), 128))
          ], 36)) : createCommentVNode("", true)
        ])),
        showVersionUpdates.value ? (openBlock(), createElementBlock("section", _hoisted_9$1, [
          createElementVNode("h3", _hoisted_10$1, toDisplayString(_ctx.$t("helpCenter.whatsNew")), 1),
          hasReleases.value ? (openBlock(), createElementBlock("div", _hoisted_11$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(releaseStore2).recentReleases, (release) => {
              return openBlock(), createElementBlock("article", {
                key: release.id || release.version,
                class: "help-menu-item release-menu-item",
                role: "button",
                tabindex: "0",
                onClick: /* @__PURE__ */ __name(($event) => onReleaseClick(release), "onClick"),
                onKeydown: [
                  withKeys(($event) => onReleaseClick(release), ["enter"]),
                  withKeys(withModifiers(($event) => onReleaseClick(release), ["prevent"]), ["space"])
                ]
              }, [
                _cache[0] || (_cache[0] = createElementVNode("i", {
                  class: "pi pi-refresh help-menu-icon",
                  "aria-hidden": "true"
                }, null, -1)),
                createElementVNode("div", _hoisted_13, [
                  createElementVNode("span", _hoisted_14, toDisplayString(_ctx.$t("g.releaseTitle", {
                    package: "Comfy",
                    version: release.version
                  })), 1),
                  createElementVNode("time", {
                    class: "release-date",
                    datetime: release.published_at
                  }, [
                    createElementVNode("span", _hoisted_16, toDisplayString(formatReleaseDate(release.published_at)), 1),
                    createElementVNode("span", _hoisted_17, toDisplayString(_ctx.$t("helpCenter.clickToLearnMore")), 1)
                  ], 8, _hoisted_15)
                ]),
                shouldShowUpdateButton(release) ? (openBlock(), createBlock(unref(Button), {
                  key: 0,
                  label: _ctx.$t("helpCenter.updateAvailable"),
                  size: "small",
                  class: "update-button",
                  onClick: withModifiers(($event) => onUpdate(release), ["stop"])
                }, null, 8, ["label", "onClick"])) : createCommentVNode("", true)
              ], 40, _hoisted_12);
            }), 128))
          ])) : unref(releaseStore2).isLoading ? (openBlock(), createElementBlock("div", _hoisted_18, [
            _cache[1] || (_cache[1] = createElementVNode("i", {
              class: "pi pi-spin pi-spinner help-menu-icon",
              "aria-hidden": "true"
            }, null, -1)),
            createElementVNode("span", null, toDisplayString(_ctx.$t("helpCenter.loadingReleases")), 1)
          ])) : (openBlock(), createElementBlock("div", _hoisted_19, [
            _cache[2] || (_cache[2] = createElementVNode("i", {
              class: "pi pi-info-circle help-menu-icon",
              "aria-hidden": "true"
            }, null, -1)),
            createElementVNode("span", null, toDisplayString(_ctx.$t("helpCenter.noRecentReleases")), 1)
          ]))
        ])) : createCommentVNode("", true)
      ]);
    };
  }
});
const HelpCenterMenuContent = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-736988dd"]]);
const _hoisted_1$j = {
  key: 0,
  class: "release-toast-popup"
};
const _hoisted_2$a = { class: "release-notification-toast" };
const _hoisted_3$6 = { class: "toast-header" };
const _hoisted_4$5 = { class: "toast-text" };
const _hoisted_5$4 = { class: "toast-title" };
const _hoisted_6$3 = { class: "toast-version-badge" };
const _hoisted_7$2 = { class: "toast-actions-section" };
const _hoisted_8$1 = { class: "actions-row" };
const _hoisted_9 = { class: "left-actions" };
const _hoisted_10 = ["href"];
const _hoisted_11 = { class: "right-actions" };
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "ReleaseNotificationToast",
  setup(__props) {
    const { locale } = useI18n();
    const releaseStore2 = useReleaseStore();
    const isDismissed = ref(false);
    const latestRelease = computed(
      () => releaseStore2.recentRelease
    );
    const shouldShow = computed(
      () => releaseStore2.shouldShowToast && !isDismissed.value
    );
    const changelogUrl = computed(() => {
      const isChineseLocale = locale.value === "zh";
      const baseUrl = isChineseLocale ? "https://docs.comfy.org/zh-CN/changelog" : "https://docs.comfy.org/changelog";
      if (latestRelease.value?.version) {
        const versionAnchor = formatVersionAnchor(latestRelease.value.version);
        return `${baseUrl}#${versionAnchor}`;
      }
      return baseUrl;
    });
    let hideTimer = null;
    const startAutoHide = /* @__PURE__ */ __name(() => {
      if (hideTimer) clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        dismissToast();
      }, 8e3);
    }, "startAutoHide");
    const clearAutoHide = /* @__PURE__ */ __name(() => {
      if (hideTimer) {
        clearTimeout(hideTimer);
        hideTimer = null;
      }
    }, "clearAutoHide");
    const dismissToast = /* @__PURE__ */ __name(() => {
      isDismissed.value = true;
      clearAutoHide();
    }, "dismissToast");
    const handleSkip = /* @__PURE__ */ __name(() => {
      if (latestRelease.value) {
        void releaseStore2.handleSkipRelease(latestRelease.value.version);
      }
      dismissToast();
    }, "handleSkip");
    const handleLearnMore = /* @__PURE__ */ __name(() => {
      if (latestRelease.value) {
        void releaseStore2.handleShowChangelog(latestRelease.value.version);
      }
      dismissToast();
    }, "handleLearnMore");
    const handleUpdate = /* @__PURE__ */ __name(() => {
      window.open("https://docs.comfy.org/installation/update_comfyui", "_blank");
      dismissToast();
    }, "handleUpdate");
    watch(shouldShow, (isVisible) => {
      if (isVisible) {
        startAutoHide();
      } else {
        clearAutoHide();
      }
    });
    onMounted(async () => {
      if (!releaseStore2.releases.length) {
        await releaseStore2.fetchReleases();
      }
    });
    return (_ctx, _cache) => {
      return shouldShow.value ? (openBlock(), createElementBlock("div", _hoisted_1$j, [
        createElementVNode("div", _hoisted_2$a, [
          createElementVNode("div", _hoisted_3$6, [
            _cache[0] || (_cache[0] = createElementVNode("div", { class: "toast-icon" }, [
              createElementVNode("i", { class: "pi pi-download" })
            ], -1)),
            createElementVNode("div", _hoisted_4$5, [
              createElementVNode("div", _hoisted_5$4, toDisplayString(_ctx.$t("releaseToast.newVersionAvailable")), 1),
              createElementVNode("div", _hoisted_6$3, toDisplayString(latestRelease.value?.version), 1)
            ])
          ]),
          createElementVNode("div", _hoisted_7$2, [
            createElementVNode("div", _hoisted_8$1, [
              createElementVNode("div", _hoisted_9, [
                createElementVNode("a", {
                  class: "learn-more-link",
                  href: changelogUrl.value,
                  target: "_blank",
                  rel: "noopener,noreferrer",
                  onClick: handleLearnMore
                }, toDisplayString(_ctx.$t("releaseToast.whatsNew")), 9, _hoisted_10)
              ]),
              createElementVNode("div", _hoisted_11, [
                createElementVNode("button", {
                  class: "skip-button",
                  onClick: handleSkip
                }, toDisplayString(_ctx.$t("releaseToast.skip")), 1),
                createElementVNode("button", {
                  class: "cta-button",
                  onClick: handleUpdate
                }, toDisplayString(_ctx.$t("releaseToast.update")), 1)
              ])
            ])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const ReleaseNotificationToast = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-a462d327"]]);
const _hoisted_1$i = {
  key: 0,
  class: "whats-new-popup-container"
};
const _hoisted_2$9 = ["aria-label"];
const _hoisted_3$5 = { class: "popup-content" };
const _hoisted_4$4 = ["innerHTML"];
const _hoisted_5$3 = { class: "popup-actions" };
const _hoisted_6$2 = ["href"];
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "WhatsNewPopup",
  setup(__props, { expose: __expose }) {
    const { locale, t: t2 } = useI18n();
    const releaseStore2 = useReleaseStore();
    const isDismissed = ref(false);
    const latestRelease = computed(
      () => releaseStore2.recentRelease
    );
    const shouldShow = computed(
      () => releaseStore2.shouldShowPopup && !isDismissed.value
    );
    const changelogUrl = computed(() => {
      const isChineseLocale = locale.value === "zh";
      const baseUrl = isChineseLocale ? "https://docs.comfy.org/zh-CN/changelog" : "https://docs.comfy.org/changelog";
      if (latestRelease.value?.version) {
        const versionAnchor = formatVersionAnchor(latestRelease.value.version);
        return `${baseUrl}#${versionAnchor}`;
      }
      return baseUrl;
    });
    const formattedContent = computed(() => {
      if (!latestRelease.value?.content) {
        return `<p>${t2("whatsNewPopup.noReleaseNotes")}</p>`;
      }
      try {
        return marked(latestRelease.value.content, {
          gfm: true
          // Enable GitHub Flavored Markdown
        });
      } catch (error) {
        console.error("Error parsing markdown:", error);
        return latestRelease.value.content.replace(/\n/g, "<br>");
      }
    });
    const show = /* @__PURE__ */ __name(() => {
      isDismissed.value = false;
    }, "show");
    const hide = /* @__PURE__ */ __name(() => {
      isDismissed.value = true;
    }, "hide");
    const closePopup = /* @__PURE__ */ __name(async () => {
      if (latestRelease.value) {
        await releaseStore2.handleWhatsNewSeen(latestRelease.value.version);
      }
      hide();
    }, "closePopup");
    onMounted(async () => {
      if (!releaseStore2.releases.length) {
        await releaseStore2.fetchReleases();
      }
    });
    __expose({
      show,
      hide
    });
    return (_ctx, _cache) => {
      return shouldShow.value ? (openBlock(), createElementBlock("div", _hoisted_1$i, [
        _cache[2] || (_cache[2] = createStaticVNode('<div class="help-center-arrow" data-v-3488de00><svg xmlns="http://www.w3.org/2000/svg" width="16" height="19" viewBox="0 0 16 19" fill="none" data-v-3488de00><path d="M15.25 1.27246L15.25 17.7275L0.999023 9.5L15.25 1.27246Z" fill="#353535" data-v-3488de00></path><path d="M15.25 1.27246L0.999023 9.5" stroke="#4e4e4e" stroke-width="1" fill="none" data-v-3488de00></path><path d="M0.999023 9.5L15.25 17.7275" stroke="#4e4e4e" stroke-width="1" fill="none" data-v-3488de00></path></svg></div>', 1)),
        createElementVNode("div", {
          class: "whats-new-popup",
          onClick: _cache[0] || (_cache[0] = withModifiers(() => {
          }, ["stop"]))
        }, [
          createElementVNode("button", {
            class: "close-button",
            "aria-label": _ctx.$t("g.close"),
            onClick: closePopup
          }, _cache[1] || (_cache[1] = [
            createElementVNode("div", { class: "close-icon" }, null, -1)
          ]), 8, _hoisted_2$9),
          createElementVNode("div", _hoisted_3$5, [
            createElementVNode("div", {
              class: "content-text",
              innerHTML: formattedContent.value
            }, null, 8, _hoisted_4$4),
            createElementVNode("div", _hoisted_5$3, [
              createElementVNode("a", {
                class: "learn-more-link",
                href: changelogUrl.value,
                target: "_blank",
                rel: "noopener,noreferrer",
                onClick: closePopup
              }, toDisplayString(_ctx.$t("whatsNewPopup.learnMore")), 9, _hoisted_6$2)
            ])
          ])
        ])
      ])) : createCommentVNode("", true);
    };
  }
});
const WhatsNewPopup = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-3488de00"]]);
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "SidebarHelpCenterIcon",
  setup(__props) {
    const settingStore = useSettingStore();
    const releaseStore2 = useReleaseStore();
    const { shouldShowRedDot } = storeToRefs(releaseStore2);
    const isHelpCenterVisible = ref(false);
    const sidebarLocation = computed(
      () => settingStore.get("Comfy.Sidebar.Location")
    );
    const sidebarSize = computed(() => settingStore.get("Comfy.Sidebar.Size"));
    const toggleHelpCenter = /* @__PURE__ */ __name(() => {
      isHelpCenterVisible.value = !isHelpCenterVisible.value;
    }, "toggleHelpCenter");
    const closeHelpCenter = /* @__PURE__ */ __name(() => {
      isHelpCenterVisible.value = false;
    }, "closeHelpCenter");
    onMounted(async () => {
      await releaseStore2.initialize();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(SidebarIcon, {
          icon: "pi pi-question-circle",
          class: "comfy-help-center-btn",
          tooltip: _ctx.$t("sideToolbar.helpCenter"),
          "icon-badge": unref(shouldShowRedDot) ? "•" : "",
          onClick: toggleHelpCenter
        }, null, 8, ["tooltip", "icon-badge"]),
        (openBlock(), createBlock(Teleport, { to: "#graph-canvas-container" }, [
          isHelpCenterVisible.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(["help-center-popup", {
              "sidebar-left": sidebarLocation.value === "left",
              "sidebar-right": sidebarLocation.value === "right",
              "small-sidebar": sidebarSize.value === "small"
            }])
          }, [
            createVNode(HelpCenterMenuContent, { onClose: closeHelpCenter })
          ], 2)) : createCommentVNode("", true)
        ])),
        (openBlock(), createBlock(Teleport, { to: "#graph-canvas-container" }, [
          createVNode(ReleaseNotificationToast, {
            class: normalizeClass({
              "sidebar-left": sidebarLocation.value === "left",
              "sidebar-right": sidebarLocation.value === "right",
              "small-sidebar": sidebarSize.value === "small"
            })
          }, null, 8, ["class"])
        ])),
        (openBlock(), createBlock(Teleport, { to: "#graph-canvas-container" }, [
          createVNode(WhatsNewPopup, {
            class: normalizeClass({
              "sidebar-left": sidebarLocation.value === "left",
              "sidebar-right": sidebarLocation.value === "right",
              "small-sidebar": sidebarSize.value === "small"
            })
          }, null, 8, ["class"])
        ])),
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          isHelpCenterVisible.value ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "help-center-backdrop",
            onClick: closeHelpCenter
          })) : createCommentVNode("", true)
        ]))
      ]);
    };
  }
});
const SidebarHelpCenterIcon = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-3f6342e7"]]);
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "SidebarLogoutIcon",
  setup(__props) {
    const { t: t2 } = useI18n();
    const userStore = useUserStore();
    const tooltip = computed(
      () => `${t2("sideToolbar.logout")} (${userStore.currentUser?.username})`
    );
    const logout = /* @__PURE__ */ __name(async () => {
      await userStore.logout();
      window.location.reload();
    }, "logout");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(SidebarIcon, {
        icon: "pi pi-sign-out",
        tooltip: tooltip.value,
        onClick: logout
      }, null, 8, ["tooltip"]);
    };
  }
});
const _hoisted_1$h = { class: "side-tool-bar-end" };
const _hoisted_2$8 = {
  key: 0,
  class: "sidebar-content-container h-full overflow-y-auto overflow-x-hidden"
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "SideToolbar",
  setup(__props) {
    const workspaceStore = useWorkspaceStore();
    const settingStore = useSettingStore();
    const userStore = useUserStore();
    const teleportTarget = computed(
      () => settingStore.get("Comfy.Sidebar.Location") === "left" ? ".comfyui-body-left" : ".comfyui-body-right"
    );
    const isSmall = computed(
      () => settingStore.get("Comfy.Sidebar.Size") === "small"
    );
    const tabs = computed(() => workspaceStore.getSidebarTabs());
    const selectedTab = computed(() => workspaceStore.sidebarTab.activeSidebarTab);
    const onTabClick = /* @__PURE__ */ __name((item) => {
      workspaceStore.sidebarTab.toggleSidebarTab(item.id);
    }, "onTabClick");
    const keybindingStore = useKeybindingStore();
    const getTabTooltipSuffix = /* @__PURE__ */ __name((tab) => {
      const keybinding = keybindingStore.getKeybindingByCommandId(
        `Workspace.ToggleSidebarTab.${tab.id}`
      );
      return keybinding ? ` (${keybinding.combo.toString()})` : "";
    }, "getTabTooltipSuffix");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        (openBlock(), createBlock(Teleport, { to: teleportTarget.value }, [
          createElementVNode("nav", {
            class: normalizeClass(["side-tool-bar-container", { "small-sidebar": isSmall.value }])
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(tabs.value, (tab) => {
              return openBlock(), createBlock(SidebarIcon, {
                key: tab.id,
                icon: tab.icon,
                "icon-badge": tab.iconBadge,
                tooltip: tab.tooltip,
                "tooltip-suffix": getTabTooltipSuffix(tab),
                selected: tab.id === selectedTab.value?.id,
                class: normalizeClass(tab.id + "-tab-button"),
                onClick: /* @__PURE__ */ __name(($event) => onTabClick(tab), "onClick")
              }, null, 8, ["icon", "icon-badge", "tooltip", "tooltip-suffix", "selected", "class", "onClick"]);
            }), 128)),
            createElementVNode("div", _hoisted_1$h, [
              unref(userStore).isMultiUserServer ? (openBlock(), createBlock(_sfc_main$i, { key: 0 })) : createCommentVNode("", true),
              createVNode(SidebarHelpCenterIcon),
              createVNode(_sfc_main$o),
              createVNode(_sfc_main$n)
            ])
          ], 2)
        ], 8, ["to"])),
        selectedTab.value ? (openBlock(), createElementBlock("div", _hoisted_2$8, [
          createVNode(_sfc_main$P, { extension: selectedTab.value }, null, 8, ["extension"])
        ])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const SideToolbar = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-da602371"]]);
const _hoisted_1$g = { class: "workflow-preview-content" };
const _hoisted_2$7 = {
  key: 0,
  class: "workflow-preview-thumbnail relative"
};
const _hoisted_3$4 = ["src"];
const _hoisted_4$3 = { class: "workflow-preview-footer" };
const _hoisted_5$2 = { class: "workflow-preview-name" };
const POPOVER_WIDTH = 250;
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTabPopover",
  props: {
    workflowFilename: {},
    thumbnailUrl: {},
    isActiveTab: { type: Boolean }
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { thumbnailUrl, isActiveTab } = toRefs(props);
    const settingStore = useSettingStore();
    const positions = computed(() => {
      if (settingStore.get("Comfy.Workflow.WorkflowTabsPosition") === "Topbar" && settingStore.get("Comfy.UseNewMenu") === "Bottom") {
        return {
          positioner: "top-0",
          root: "p-popover-flipped",
          active: isActiveTab.value ? "translateY(-100%)" : void 0
        };
      }
      return {
        positioner: "bottom-0"
      };
    });
    const popoverRef = ref(null);
    const positionRef = ref(null);
    let hideTimeout = null;
    let showTimeout = null;
    const id = useId();
    const showPopover = /* @__PURE__ */ __name((event) => {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      if (showTimeout) {
        clearTimeout(showTimeout);
        showTimeout = null;
      }
      showTimeout = setTimeout(async () => {
        if (popoverRef.value && positionRef.value) {
          popoverRef.value.show(event, positionRef.value);
          await nextTick();
          const el = document.querySelector(
            `.workflow-popover-fade[data-popover-id="${id}"]`
          );
          if (el) {
            const middle = positionRef.value.getBoundingClientRect().left;
            const popoverWidth = el.getBoundingClientRect().width;
            const halfWidth = popoverWidth / 2;
            let pos = middle - halfWidth;
            let shift = 0;
            if (pos < 0) {
              shift = pos - 8;
              pos = 8;
            } else if (pos + popoverWidth > window.innerWidth) {
              const newPos = window.innerWidth - popoverWidth - 16;
              shift = pos - newPos;
              pos = newPos;
            }
            if (shift + halfWidth < 0) {
              shift = -halfWidth + 24;
            }
            el.style.left = `${pos}px`;
            el.style.setProperty("--shift", `${shift}px`);
          }
        }
      }, 200);
    }, "showPopover");
    const cancelHidePopover = /* @__PURE__ */ __name(() => {
    }, "cancelHidePopover");
    const hidePopover = /* @__PURE__ */ __name(() => {
      if (showTimeout) {
        clearTimeout(showTimeout);
        showTimeout = null;
      }
      hideTimeout = setTimeout(() => {
        if (popoverRef.value) {
          popoverRef.value.hide();
        }
      }, 100);
    }, "hidePopover");
    const togglePopover = /* @__PURE__ */ __name((event) => {
      if (popoverRef.value) {
        popoverRef.value.toggle(event);
      }
    }, "togglePopover");
    __expose({
      showPopover,
      hidePopover,
      togglePopover
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          ref_key: "positionRef",
          ref: positionRef,
          class: normalizeClass(["absolute left-1/2 -translate-x-1/2", positions.value.positioner])
        }, null, 2),
        createVNode(unref(Popover), {
          ref_key: "popoverRef",
          ref: popoverRef,
          "append-to": "body",
          pt: {
            root: {
              class: "workflow-popover-fade fit-content " + positions.value.root,
              "data-popover-id": unref(id),
              style: {
                transform: positions.value.active
              }
            }
          },
          onMouseenter: cancelHidePopover,
          onMouseleave: hidePopover
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1$g, [
              unref(thumbnailUrl) && !unref(isActiveTab) ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
                createElementVNode("img", {
                  src: unref(thumbnailUrl),
                  class: "block h-[200px] object-cover rounded-lg p-2",
                  style: normalizeStyle({ width: `${POPOVER_WIDTH}px` })
                }, null, 12, _hoisted_3$4)
              ])) : createCommentVNode("", true),
              createElementVNode("div", _hoisted_4$3, [
                createElementVNode("span", _hoisted_5$2, toDisplayString(_ctx.workflowFilename), 1)
              ])
            ])
          ]),
          _: 1
        }, 8, ["pt"])
      ], 64);
    };
  }
});
const WorkflowTabPopover = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-44f85849"]]);
const _hoisted_1$f = { class: "workflow-label text-sm max-w-[150px] truncate inline-block" };
const _hoisted_2$6 = { class: "relative" };
const _hoisted_3$3 = {
  key: 0,
  class: "status-indicator"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTab",
  props: {
    class: {},
    workflowOption: {}
  },
  setup(__props) {
    const props = __props;
    const { t: t2 } = useI18n();
    const workspaceStore = useWorkspaceStore();
    const workflowStore = useWorkflowStore();
    const settingStore = useSettingStore();
    const workflowTabRef = ref(null);
    const popoverRef = ref(null);
    const workflowThumbnail = useWorkflowThumbnail();
    const autoSaveSetting = computed(
      () => settingStore.get("Comfy.Workflow.AutoSave")
    );
    const autoSaveDelay = computed(
      () => settingStore.get("Comfy.Workflow.AutoSaveDelay")
    );
    const shouldShowStatusIndicator = computed(() => {
      if (workspaceStore.shiftDown) {
        return false;
      }
      if (!props.workflowOption.workflow.isPersisted) {
        return true;
      }
      if (props.workflowOption.workflow.isModified) {
        if (autoSaveSetting.value === "off") {
          return true;
        }
        if (autoSaveSetting.value === "after delay" && autoSaveDelay.value > 3e3) {
          return true;
        }
        return false;
      }
      return false;
    });
    const isActiveTab = computed(() => {
      return workflowStore.activeWorkflow?.key === props.workflowOption.workflow.key;
    });
    const thumbnailUrl = computed(() => {
      return workflowThumbnail.getThumbnail(props.workflowOption.workflow.key);
    });
    const handleMouseEnter = /* @__PURE__ */ __name((event) => {
      popoverRef.value?.showPopover(event);
    }, "handleMouseEnter");
    const handleMouseLeave = /* @__PURE__ */ __name(() => {
      popoverRef.value?.hidePopover();
    }, "handleMouseLeave");
    const handleClick = /* @__PURE__ */ __name((event) => {
      popoverRef.value?.togglePopover(event);
    }, "handleClick");
    const closeWorkflows = /* @__PURE__ */ __name(async (options) => {
      for (const opt of options) {
        if (!await useWorkflowService().closeWorkflow(opt.workflow, {
          warnIfUnsaved: !workspaceStore.shiftDown,
          hint: t2("sideToolbar.workflowTab.dirtyCloseHint")
        })) {
          break;
        }
      }
    }, "closeWorkflows");
    const onCloseWorkflow = /* @__PURE__ */ __name(async (option) => {
      await closeWorkflows([option]);
    }, "onCloseWorkflow");
    const tabGetter = /* @__PURE__ */ __name(() => workflowTabRef.value, "tabGetter");
    usePragmaticDraggable(tabGetter, {
      getInitialData: /* @__PURE__ */ __name(() => {
        return {
          workflowKey: props.workflowOption.workflow.key
        };
      }, "getInitialData")
    });
    usePragmaticDroppable(tabGetter, {
      getData: /* @__PURE__ */ __name(() => {
        return {
          workflowKey: props.workflowOption.workflow.key
        };
      }, "getData"),
      onDrop: /* @__PURE__ */ __name((e) => {
        const fromIndex = workflowStore.openWorkflows.findIndex(
          (wf) => wf.key === e.source.data.workflowKey
        );
        const toIndex = workflowStore.openWorkflows.findIndex(
          (wf) => wf.key === e.location.current.dropTargets[0]?.data.workflowKey
        );
        if (fromIndex !== toIndex) {
          workflowStore.reorderWorkflows(fromIndex, toIndex);
        }
      }, "onDrop")
    });
    onUnmounted(() => {
      popoverRef.value?.hidePopover();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", mergeProps({
          ref_key: "workflowTabRef",
          ref: workflowTabRef,
          class: "flex p-2 gap-2 workflow-tab"
        }, _ctx.$attrs, {
          onMouseenter: handleMouseEnter,
          onMouseleave: handleMouseLeave,
          onClick: handleClick
        }), [
          createElementVNode("span", _hoisted_1$f, toDisplayString(_ctx.workflowOption.workflow.filename), 1),
          createElementVNode("div", _hoisted_2$6, [
            shouldShowStatusIndicator.value ? (openBlock(), createElementBlock("span", _hoisted_3$3, "•")) : createCommentVNode("", true),
            createVNode(unref(Button), {
              class: "close-button p-0 w-auto",
              icon: "pi pi-times",
              text: "",
              severity: "secondary",
              size: "small",
              onClick: _cache[0] || (_cache[0] = withModifiers(($event) => onCloseWorkflow(_ctx.workflowOption), ["stop"]))
            })
          ])
        ], 16),
        createVNode(WorkflowTabPopover, {
          ref_key: "popoverRef",
          ref: popoverRef,
          "workflow-filename": _ctx.workflowOption.workflow.filename,
          "thumbnail-url": thumbnailUrl.value,
          "is-active-tab": isActiveTab.value
        }, null, 8, ["workflow-filename", "thumbnail-url", "is-active-tab"])
      ], 64);
    };
  }
});
const WorkflowTab = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-d2ccc684"]]);
const useOverflowObserver = /* @__PURE__ */ __name((element, options) => {
  options = {
    debounceTime: 25,
    useMutationObserver: true,
    useResizeObserver: true,
    ...options
  };
  const isOverflowing = ref(false);
  const disposeFns = [];
  const disposed = ref(false);
  const checkOverflowFn = /* @__PURE__ */ __name(() => {
    isOverflowing.value = element.scrollWidth > element.clientWidth;
    options.onCheck?.(isOverflowing.value);
  }, "checkOverflowFn");
  const checkOverflow = options.debounceTime ? lodashExports.debounce(checkOverflowFn, options.debounceTime) : checkOverflowFn;
  if (options.useMutationObserver) {
    disposeFns.push(
      useMutationObserver(element, checkOverflow, {
        subtree: true,
        childList: true
      }).stop
    );
  }
  if (options.useResizeObserver) {
    disposeFns.push(useResizeObserver(element, checkOverflow).stop);
  }
  return {
    isOverflowing: readonly(isOverflowing),
    disposed: readonly(disposed),
    checkOverflow,
    dispose: /* @__PURE__ */ __name(() => {
      disposed.value = true;
      disposeFns.forEach((fn) => fn());
    }, "dispose")
  };
}, "useOverflowObserver");
const whileMouseDown = /* @__PURE__ */ __name((elementOrEvent, callback, interval = 30) => {
  const element = elementOrEvent instanceof HTMLElement ? elementOrEvent : elementOrEvent.target;
  let iteration = 0;
  const intervalId = setInterval(() => {
    callback(iteration++);
  }, interval);
  const dispose = useEventListener(element, "mouseup", () => {
    clearInterval(intervalId);
    dispose();
  });
  return {
    dispose
  };
}, "whileMouseDown");
const _hoisted_1$e = {
  key: 2,
  class: "window-actions-spacer flex-shrink-0 app-drag"
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "WorkflowTabs",
  props: {
    class: {}
  },
  setup(__props) {
    const props = __props;
    const { t: t2 } = useI18n();
    const workspaceStore = useWorkspaceStore();
    const workflowStore = useWorkflowStore();
    const workflowBookmarkStore = useWorkflowBookmarkStore();
    const settingStore = useSettingStore();
    const workflowService = useWorkflowService();
    const rightClickedTab = ref();
    const menu = ref();
    const scrollPanelRef = ref();
    const showOverflowArrows = ref(false);
    const leftArrowEnabled = ref(false);
    const rightArrowEnabled = ref(false);
    const isDesktop = isElectron();
    const menuSetting = computed(() => settingStore.get("Comfy.UseNewMenu"));
    const workflowToOption = /* @__PURE__ */ __name((workflow) => ({
      value: workflow.path,
      workflow
    }), "workflowToOption");
    const options = computed(
      () => workflowStore.openWorkflows.map(workflowToOption)
    );
    const selectedWorkflow = computed(
      () => workflowStore.activeWorkflow ? workflowToOption(workflowStore.activeWorkflow) : null
    );
    const onWorkflowChange = /* @__PURE__ */ __name(async (option) => {
      if (!option) {
        return;
      }
      if (selectedWorkflow.value?.value === option.value) {
        return;
      }
      await workflowService.openWorkflow(option.workflow);
    }, "onWorkflowChange");
    const closeWorkflows = /* @__PURE__ */ __name(async (options2) => {
      for (const opt of options2) {
        if (!await workflowService.closeWorkflow(opt.workflow, {
          warnIfUnsaved: !workspaceStore.shiftDown
        })) {
          break;
        }
      }
    }, "closeWorkflows");
    const onCloseWorkflow = /* @__PURE__ */ __name(async (option) => {
      await closeWorkflows([option]);
    }, "onCloseWorkflow");
    const showContextMenu = /* @__PURE__ */ __name((event, option) => {
      rightClickedTab.value = option;
      menu.value.show(event);
    }, "showContextMenu");
    const contextMenuItems = computed(() => {
      const tab = rightClickedTab.value;
      if (!tab) return [];
      const index2 = options.value.findIndex((v) => v.workflow === tab.workflow);
      return [
        {
          label: t2("tabMenu.duplicateTab"),
          command: /* @__PURE__ */ __name(async () => {
            await workflowService.duplicateWorkflow(tab.workflow);
          }, "command")
        },
        {
          separator: true
        },
        {
          label: t2("tabMenu.closeTab"),
          command: /* @__PURE__ */ __name(() => onCloseWorkflow(tab), "command")
        },
        {
          label: t2("tabMenu.closeTabsToLeft"),
          command: /* @__PURE__ */ __name(() => closeWorkflows(options.value.slice(0, index2)), "command"),
          disabled: index2 <= 0
        },
        {
          label: t2("tabMenu.closeTabsToRight"),
          command: /* @__PURE__ */ __name(() => closeWorkflows(options.value.slice(index2 + 1)), "command"),
          disabled: index2 === options.value.length - 1
        },
        {
          label: t2("tabMenu.closeOtherTabs"),
          command: /* @__PURE__ */ __name(() => closeWorkflows([
            ...options.value.slice(index2 + 1),
            ...options.value.slice(0, index2)
          ]), "command"),
          disabled: options.value.length <= 1
        },
        {
          label: workflowBookmarkStore.isBookmarked(tab.workflow.path) ? t2("tabMenu.removeFromBookmarks") : t2("tabMenu.addToBookmarks"),
          command: /* @__PURE__ */ __name(() => workflowBookmarkStore.toggleBookmarked(tab.workflow.path), "command"),
          disabled: tab.workflow.isTemporary
        }
      ];
    });
    const commandStore = useCommandStore();
    const handleWheel = /* @__PURE__ */ __name((event) => {
      const scrollElement = event.currentTarget;
      const scrollAmount = event.deltaX || event.deltaY;
      scrollElement.scroll({
        left: scrollElement.scrollLeft + scrollAmount
      });
    }, "handleWheel");
    const scroll = /* @__PURE__ */ __name((direction) => {
      const scrollElement = scrollPanelRef.value.$el.querySelector(
        ".p-scrollpanel-content"
      );
      scrollElement.scrollBy({ left: direction * 20 });
    }, "scroll");
    watch(
      () => workflowStore.activeWorkflow,
      async () => {
        if (!selectedWorkflow.value) return;
        await nextTick();
        const activeTabElement = document.querySelector(".p-togglebutton-checked");
        if (!activeTabElement || !scrollPanelRef.value) return;
        const container = scrollPanelRef.value.$el.querySelector(
          ".p-scrollpanel-content"
        );
        if (!container) return;
        const tabRect = activeTabElement.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();
        const offsetLeft = tabRect.left - containerRect.left;
        const offsetRight = tabRect.right - containerRect.right;
        if (offsetRight > 0) {
          container.scrollBy({ left: offsetRight });
        } else if (offsetLeft < 0) {
          container.scrollBy({ left: offsetLeft });
        }
      },
      { immediate: true }
    );
    const scrollContent = computed(
      () => scrollPanelRef.value?.$el.querySelector(
        ".p-scrollpanel-content"
      )
    );
    let overflowObserver = null;
    let overflowWatch = null;
    watch(scrollContent, (value) => {
      const scrollState = useScroll(value);
      watch(scrollState.arrivedState, () => {
        leftArrowEnabled.value = !scrollState.arrivedState.left;
        rightArrowEnabled.value = !scrollState.arrivedState.right;
      });
      overflowObserver?.dispose();
      overflowWatch?.stop();
      overflowObserver = useOverflowObserver(value);
      overflowWatch = watch(
        overflowObserver.isOverflowing,
        (value2) => {
          showOverflowArrows.value = value2;
          void nextTick(() => {
            scrollState.measure();
          });
        },
        { immediate: true }
      );
    });
    onUpdated(() => {
      if (!overflowObserver?.disposed.value) {
        overflowObserver?.checkOverflow();
      }
    });
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["workflow-tabs-container flex flex-row max-w-full h-full flex-auto overflow-hidden", { "workflow-tabs-container-desktop": unref(isDesktop) }])
      }, [
        showOverflowArrows.value ? (openBlock(), createBlock(unref(Button), {
          key: 0,
          icon: "pi pi-chevron-left",
          text: "",
          severity: "secondary",
          class: "overflow-arrow overflow-arrow-left",
          disabled: !leftArrowEnabled.value,
          onMousedown: _cache[0] || (_cache[0] = ($event) => unref(whileMouseDown)($event, () => scroll(-1)))
        }, null, 8, ["disabled"])) : createCommentVNode("", true),
        createVNode(unref(ScrollPanel), {
          ref_key: "scrollPanelRef",
          ref: scrollPanelRef,
          class: "overflow-hidden no-drag",
          "pt:content": {
            class: "p-0 w-full",
            onwheel: handleWheel
          },
          "pt:bar-x": "h-1"
        }, {
          default: withCtx(() => [
            createVNode(unref(SelectButton), {
              class: normalizeClass(["workflow-tabs bg-transparent", props.class]),
              "model-value": selectedWorkflow.value,
              options: options.value,
              "option-label": "label",
              "data-key": "value",
              "onUpdate:modelValue": onWorkflowChange
            }, {
              option: withCtx(({ option }) => [
                createVNode(WorkflowTab, {
                  "workflow-option": option,
                  onContextmenu: /* @__PURE__ */ __name(($event) => showContextMenu($event, option), "onContextmenu"),
                  onMouseup: withModifiers(($event) => onCloseWorkflow(option), ["middle"])
                }, null, 8, ["workflow-option", "onContextmenu", "onMouseup"])
              ]),
              _: 1
            }, 8, ["class", "model-value", "options"])
          ]),
          _: 1
        }, 8, ["pt:content"]),
        showOverflowArrows.value ? (openBlock(), createBlock(unref(Button), {
          key: 1,
          icon: "pi pi-chevron-right",
          text: "",
          severity: "secondary",
          class: "overflow-arrow overflow-arrow-right",
          disabled: !rightArrowEnabled.value,
          onMousedown: _cache[1] || (_cache[1] = ($event) => unref(whileMouseDown)($event, () => scroll(1)))
        }, null, 8, ["disabled"])) : createCommentVNode("", true),
        withDirectives(createVNode(unref(Button), {
          class: "new-blank-workflow-button flex-shrink-0 no-drag rounded-none",
          icon: "pi pi-plus",
          text: "",
          severity: "secondary",
          "aria-label": _ctx.$t("sideToolbar.newBlankWorkflow"),
          onClick: _cache[2] || (_cache[2] = () => unref(commandStore).execute("Comfy.NewBlankWorkflow"))
        }, null, 8, ["aria-label"]), [
          [_directive_tooltip, { value: _ctx.$t("sideToolbar.newBlankWorkflow"), showDelay: 300 }]
        ]),
        createVNode(unref(ContextMenu), {
          ref_key: "menu",
          ref: menu,
          model: contextMenuItems.value
        }, null, 8, ["model"]),
        menuSetting.value !== "Bottom" && unref(isDesktop) ? (openBlock(), createElementBlock("div", _hoisted_1$e)) : createCommentVNode("", true)
      ], 2);
    };
  }
});
const WorkflowTabs = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-a1b65b34"]]);
const _hoisted_1$d = { class: "w-auto max-w-full" };
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "SecondRowWorkflowTabs",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$d, [
        createVNode(WorkflowTabs)
      ]);
    };
  }
});
const SecondRowWorkflowTabs = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-2dbac56c"]]);
function safePricingExecution(fn, node, fallback = "") {
  try {
    return fn(node);
  } catch (error) {
    if (false) {
      console.warn(
        "Pricing calculation failed for node:",
        node.constructor?.nodeData?.name,
        error
      );
    }
    return fallback;
  }
}
__name(safePricingExecution, "safePricingExecution");
const calculateRunwayDurationPrice = /* @__PURE__ */ __name((node) => {
  const durationWidget = node.widgets?.find(
    (w) => w.name === "duration"
  );
  if (!durationWidget) return "$0.05/second";
  const duration = Number(durationWidget.value);
  const validDuration = isNaN(duration) ? 5 : duration;
  const cost = (0.05 * validDuration).toFixed(2);
  return `$${cost}/Run`;
}, "calculateRunwayDurationPrice");
const pixversePricingCalculator = /* @__PURE__ */ __name((node) => {
  const durationWidget = node.widgets?.find(
    (w) => w.name === "duration_seconds"
  );
  const qualityWidget = node.widgets?.find(
    (w) => w.name === "quality"
  );
  const motionModeWidget = node.widgets?.find(
    (w) => w.name === "motion_mode"
  );
  if (!durationWidget || !qualityWidget) {
    return "$0.45-1.2/Run (varies with duration, quality & motion mode)";
  }
  const duration = String(durationWidget.value);
  const quality = String(qualityWidget.value);
  const motionMode = String(motionModeWidget?.value);
  if (duration.includes("5")) {
    if (quality.includes("1080p")) return "$1.2/Run";
    if (quality.includes("720p") && motionMode?.includes("fast"))
      return "$1.2/Run";
    if (quality.includes("720p") && motionMode?.includes("normal"))
      return "$0.6/Run";
    if (quality.includes("540p") && motionMode?.includes("fast"))
      return "$0.9/Run";
    if (quality.includes("540p") && motionMode?.includes("normal"))
      return "$0.45/Run";
    if (quality.includes("360p") && motionMode?.includes("fast"))
      return "$0.9/Run";
    if (quality.includes("360p") && motionMode?.includes("normal"))
      return "$0.45/Run";
    if (quality.includes("720p") && motionMode?.includes("fast"))
      return "$1.2/Run";
  } else if (duration.includes("8")) {
    if (quality.includes("720p") && motionMode?.includes("normal"))
      return "$1.2/Run";
    if (quality.includes("540p") && motionMode?.includes("normal"))
      return "$0.9/Run";
    if (quality.includes("540p") && motionMode?.includes("fast"))
      return "$1.2/Run";
    if (quality.includes("360p") && motionMode?.includes("normal"))
      return "$0.9/Run";
    if (quality.includes("360p") && motionMode?.includes("fast"))
      return "$1.2/Run";
    if (quality.includes("1080p") && motionMode?.includes("normal"))
      return "$1.2/Run";
    if (quality.includes("1080p") && motionMode?.includes("fast"))
      return "$1.2/Run";
    if (quality.includes("720p") && motionMode?.includes("normal"))
      return "$1.2/Run";
    if (quality.includes("720p") && motionMode?.includes("fast"))
      return "$1.2/Run";
  }
  return "$0.9/Run";
}, "pixversePricingCalculator");
const apiNodeCosts = {
  FluxProCannyNode: {
    displayPrice: "$0.05/Run"
  },
  FluxProDepthNode: {
    displayPrice: "$0.05/Run"
  },
  FluxProExpandNode: {
    displayPrice: "$0.05/Run"
  },
  FluxProFillNode: {
    displayPrice: "$0.05/Run"
  },
  FluxProUltraImageNode: {
    displayPrice: "$0.06/Run"
  },
  FluxProKontextProNode: {
    displayPrice: "$0.04/Run"
  },
  FluxProKontextMaxNode: {
    displayPrice: "$0.08/Run"
  },
  IdeogramV1: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const numImagesWidget = node.widgets?.find(
        (w) => w.name === "num_images"
      );
      const turboWidget = node.widgets?.find(
        (w) => w.name === "turbo"
      );
      if (!numImagesWidget) return "$0.02-0.06 x num_images/Run";
      const numImages = Number(numImagesWidget.value) || 1;
      const turbo = String(turboWidget?.value).toLowerCase() === "true";
      const basePrice = turbo ? 0.02 : 0.06;
      const cost = (basePrice * numImages).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  IdeogramV2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const numImagesWidget = node.widgets?.find(
        (w) => w.name === "num_images"
      );
      const turboWidget = node.widgets?.find(
        (w) => w.name === "turbo"
      );
      if (!numImagesWidget) return "$0.05-0.08 x num_images/Run";
      const numImages = Number(numImagesWidget.value) || 1;
      const turbo = String(turboWidget?.value).toLowerCase() === "true";
      const basePrice = turbo ? 0.05 : 0.08;
      const cost = (basePrice * numImages).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  IdeogramV3: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const renderingSpeedWidget = node.widgets?.find(
        (w) => w.name === "rendering_speed"
      );
      const numImagesWidget = node.widgets?.find(
        (w) => w.name === "num_images"
      );
      if (!renderingSpeedWidget)
        return "$0.03-0.08 x num_images/Run (varies with rendering speed & num_images)";
      const numImages = Number(numImagesWidget?.value) || 1;
      let basePrice = 0.06;
      const renderingSpeed = String(renderingSpeedWidget.value);
      if (renderingSpeed.toLowerCase().includes("quality")) {
        basePrice = 0.09;
      } else if (renderingSpeed.toLowerCase().includes("balanced")) {
        basePrice = 0.06;
      } else if (renderingSpeed.toLowerCase().includes("turbo")) {
        basePrice = 0.03;
      }
      const totalCost = (basePrice * numImages).toFixed(2);
      return `$${totalCost}/Run`;
    }, "displayPrice")
  },
  KlingCameraControlI2VNode: {
    displayPrice: "$0.49/Run"
  },
  KlingCameraControlT2VNode: {
    displayPrice: "$0.14/Run"
  },
  KlingDualCharacterVideoEffectNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modeWidget = node.widgets?.find(
        (w) => w.name === "mode"
      );
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model_name"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!modeWidget || !modelWidget || !durationWidget)
        return "$0.14-2.80/Run (varies with model, mode & duration)";
      const modeValue = String(modeWidget.value);
      const durationValue = String(durationWidget.value);
      const modelValue = String(modelWidget.value);
      console.log("modelValue", modelValue);
      console.log("modeValue", modeValue);
      console.log("durationValue", durationValue);
      if (modelValue.includes("v1-6") || modelValue.includes("v1-5")) {
        if (modeValue.includes("pro")) {
          return durationValue.includes("10") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return durationValue.includes("10") ? "$0.56/Run" : "$0.28/Run";
        }
      } else if (modelValue.includes("v1")) {
        if (modeValue.includes("pro")) {
          return durationValue.includes("10") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return durationValue.includes("10") ? "$0.28/Run" : "$0.14/Run";
        }
      }
      return "$0.14/Run";
    }, "displayPrice")
  },
  KlingImage2VideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modeWidget = node.widgets?.find(
        (w) => w.name === "mode"
      );
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model_name"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!modeWidget) {
        if (!modelWidget)
          return "$0.14-2.80/Run (varies with model, mode & duration)";
        const modelValue2 = String(modelWidget.value);
        if (modelValue2.includes("v2-master")) {
          return "$1.40/Run";
        } else if (modelValue2.includes("v1-6") || modelValue2.includes("v1-5")) {
          return "$0.28/Run";
        }
        return "$0.14/Run";
      }
      const modeValue = String(modeWidget.value);
      const durationValue = String(durationWidget.value);
      const modelValue = String(modelWidget.value);
      console.log("modelValue", modelValue);
      console.log("modeValue", modeValue);
      console.log("durationValue", durationValue);
      if (modelValue.includes("v2-master")) {
        if (durationValue.includes("10")) {
          return "$2.80/Run";
        }
        return "$1.40/Run";
      } else if (modelValue.includes("v1-6") || modelValue.includes("v1-5")) {
        if (modeValue.includes("pro")) {
          return durationValue.includes("10") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return durationValue.includes("10") ? "$0.56/Run" : "$0.28/Run";
        }
      } else if (modelValue.includes("v1")) {
        if (modeValue.includes("pro")) {
          return durationValue.includes("10") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return durationValue.includes("10") ? "$0.28/Run" : "$0.14/Run";
        }
      }
      return "$0.14/Run";
    }, "displayPrice")
  },
  KlingImageGenerationNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const imageInputWidget = node.inputs?.find((i) => i.name === "image");
      const modality = imageInputWidget?.link ? "image to image" : "text to image";
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model_name"
      );
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!modelWidget)
        return "$0.0035-0.028 x n/Run (varies with modality & model)";
      const model = String(modelWidget.value);
      const n = Number(nWidget?.value) || 1;
      let basePrice = 0.014;
      if (modality.includes("text to image")) {
        if (model.includes("kling-v1-5") || model.includes("kling-v2")) {
          basePrice = 0.014;
        } else if (model.includes("kling-v1")) {
          basePrice = 35e-4;
        }
      } else if (modality.includes("image to image")) {
        if (model.includes("kling-v1-5")) {
          basePrice = 0.028;
        } else if (model.includes("kling-v1")) {
          basePrice = 35e-4;
        }
      }
      const totalCost = (basePrice * n).toFixed(4);
      return `$${totalCost}/Run`;
    }, "displayPrice")
  },
  KlingLipSyncAudioToVideoNode: {
    displayPrice: "~$0.10/Run"
  },
  KlingLipSyncTextToVideoNode: {
    displayPrice: "~$0.10/Run"
  },
  KlingSingleImageVideoEffectNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const effectSceneWidget = node.widgets?.find(
        (w) => w.name === "effect_scene"
      );
      if (!effectSceneWidget)
        return "$0.28-0.49/Run (varies with effect scene)";
      const effectScene = String(effectSceneWidget.value);
      if (effectScene.includes("fuzzyfuzzy") || effectScene.includes("squish")) {
        return "$0.28/Run";
      } else if (effectScene.includes("dizzydizzy")) {
        return "$0.49/Run";
      } else if (effectScene.includes("bloombloom")) {
        return "$0.49/Run";
      } else if (effectScene.includes("expansion")) {
        return "$0.28/Run";
      }
      return "$0.28/Run";
    }, "displayPrice")
  },
  KlingStartEndFrameNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modeWidget = node.widgets?.find(
        (w) => w.name === "mode"
      );
      if (!modeWidget)
        return "$0.14-2.80/Run (varies with model, mode & duration)";
      const modeValue = String(modeWidget.value);
      if (modeValue.includes("v2-master")) {
        if (modeValue.includes("10s")) {
          return "$2.80/Run";
        }
        return "$1.40/Run";
      } else if (modeValue.includes("v1-6")) {
        if (modeValue.includes("pro")) {
          return modeValue.includes("10s") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return modeValue.includes("10s") ? "$0.56/Run" : "$0.28/Run";
        }
      } else if (modeValue.includes("v1")) {
        if (modeValue.includes("pro")) {
          return modeValue.includes("10s") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return modeValue.includes("10s") ? "$0.28/Run" : "$0.14/Run";
        }
      }
      return "$0.14/Run";
    }, "displayPrice")
  },
  KlingTextToVideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modeWidget = node.widgets?.find(
        (w) => w.name === "mode"
      );
      if (!modeWidget)
        return "$0.14-2.80/Run (varies with model, mode & duration)";
      const modeValue = String(modeWidget.value);
      if (modeValue.includes("v2-master")) {
        if (modeValue.includes("10s")) {
          return "$2.80/Run";
        }
        return "$1.40/Run";
      } else if (modeValue.includes("v1-6")) {
        if (modeValue.includes("pro")) {
          return modeValue.includes("10s") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return modeValue.includes("10s") ? "$0.56/Run" : "$0.28/Run";
        }
      } else if (modeValue.includes("v1")) {
        if (modeValue.includes("pro")) {
          return modeValue.includes("10s") ? "$0.98/Run" : "$0.49/Run";
        } else {
          return modeValue.includes("10s") ? "$0.28/Run" : "$0.14/Run";
        }
      }
      return "$0.14/Run";
    }, "displayPrice")
  },
  KlingVideoExtendNode: {
    displayPrice: "$0.28/Run"
  },
  KlingVirtualTryOnNode: {
    displayPrice: "$0.07/Run"
  },
  LumaImageToVideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!modelWidget || !resolutionWidget || !durationWidget) {
        return "$0.14-11.47/Run (varies with model, resolution & duration)";
      }
      const model = String(modelWidget.value);
      const resolution = String(resolutionWidget.value).toLowerCase();
      const duration = String(durationWidget.value);
      console.log("model", model);
      console.log("resolution", resolution);
      console.log("duration", duration);
      if (model.includes("ray-flash-2")) {
        if (duration.includes("5s")) {
          if (resolution.includes("4k")) return "$2.19/Run";
          if (resolution.includes("1080p")) return "$0.55/Run";
          if (resolution.includes("720p")) return "$0.24/Run";
          if (resolution.includes("540p")) return "$0.14/Run";
        } else if (duration.includes("9s")) {
          if (resolution.includes("4k")) return "$3.95/Run";
          if (resolution.includes("1080p")) return "$0.99/Run";
          if (resolution.includes("720p")) return "$0.43/Run";
          if (resolution.includes("540p")) return "$0.252/Run";
        }
      } else if (model.includes("ray-2")) {
        if (duration.includes("5s")) {
          if (resolution.includes("4k")) return "$6.37/Run";
          if (resolution.includes("1080p")) return "$1.59/Run";
          if (resolution.includes("720p")) return "$0.71/Run";
          if (resolution.includes("540p")) return "$0.40/Run";
        } else if (duration.includes("9s")) {
          if (resolution.includes("4k")) return "$11.47/Run";
          if (resolution.includes("1080p")) return "$2.87/Run";
          if (resolution.includes("720p")) return "$1.28/Run";
          if (resolution.includes("540p")) return "$0.72/Run";
        }
      } else if (model.includes("ray-1.6")) {
        return "$0.35/Run";
      }
      return "$0.55/Run";
    }, "displayPrice")
  },
  LumaVideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      if (!modelWidget || !resolutionWidget || !durationWidget) {
        return "$0.14-11.47/Run (varies with model, resolution & duration)";
      }
      const model = String(modelWidget.value);
      const resolution = String(resolutionWidget.value).toLowerCase();
      const duration = String(durationWidget.value);
      if (model.includes("ray-flash-2")) {
        if (duration.includes("5s")) {
          if (resolution.includes("4k")) return "$2.19/Run";
          if (resolution.includes("1080p")) return "$0.55/Run";
          if (resolution.includes("720p")) return "$0.24/Run";
          if (resolution.includes("540p")) return "$0.14/Run";
        } else if (duration.includes("9s")) {
          if (resolution.includes("4k")) return "$3.95/Run";
          if (resolution.includes("1080p")) return "$0.99/Run";
          if (resolution.includes("720p")) return "$0.43/Run";
          if (resolution.includes("540p")) return "$0.252/Run";
        }
      } else if (model.includes("ray-2")) {
        if (duration.includes("5s")) {
          if (resolution.includes("4k")) return "$6.37/Run";
          if (resolution.includes("1080p")) return "$1.59/Run";
          if (resolution.includes("720p")) return "$0.71/Run";
          if (resolution.includes("540p")) return "$0.40/Run";
        } else if (duration.includes("9s")) {
          if (resolution.includes("4k")) return "$11.47/Run";
          if (resolution.includes("1080p")) return "$2.87/Run";
          if (resolution.includes("720p")) return "$1.28/Run";
          if (resolution.includes("540p")) return "$0.72/Run";
        }
      } else if (model.includes("ray-1-6")) {
        return "$0.35/Run";
      }
      return "$0.55/Run";
    }, "displayPrice")
  },
  MinimaxImageToVideoNode: {
    displayPrice: "$0.43/Run"
  },
  MinimaxTextToVideoNode: {
    displayPrice: "$0.43/Run"
  },
  OpenAIDalle2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const sizeWidget = node.widgets?.find(
        (w) => w.name === "size"
      );
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!sizeWidget) return "$0.016-0.02 x n/Run (varies with size & n)";
      const size = String(sizeWidget.value);
      const n = Number(nWidget?.value) || 1;
      let basePrice = 0.02;
      if (size.includes("1024x1024")) {
        basePrice = 0.02;
      } else if (size.includes("512x512")) {
        basePrice = 0.018;
      } else if (size.includes("256x256")) {
        basePrice = 0.016;
      }
      const totalCost = (basePrice * n).toFixed(3);
      return `$${totalCost}/Run`;
    }, "displayPrice")
  },
  OpenAIDalle3: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const sizeWidget = node.widgets?.find(
        (w) => w.name === "size"
      );
      const qualityWidget = node.widgets?.find(
        (w) => w.name === "quality"
      );
      if (!sizeWidget || !qualityWidget)
        return "$0.04-0.12/Run (varies with size & quality)";
      const size = String(sizeWidget.value);
      const quality = String(qualityWidget.value);
      if (size.includes("1024x1024")) {
        return quality.includes("hd") ? "$0.08/Run" : "$0.04/Run";
      } else if (size.includes("1792x1024") || size.includes("1024x1792")) {
        return quality.includes("hd") ? "$0.12/Run" : "$0.08/Run";
      }
      return "$0.04/Run";
    }, "displayPrice")
  },
  OpenAIGPTImage1: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const qualityWidget = node.widgets?.find(
        (w) => w.name === "quality"
      );
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!qualityWidget)
        return "$0.011-0.30 x n/Run (varies with quality & n)";
      const quality = String(qualityWidget.value);
      const n = Number(nWidget?.value) || 1;
      let basePriceRange = "$0.046-0.07";
      if (quality.includes("high")) {
        basePriceRange = "$0.167-0.30";
      } else if (quality.includes("medium")) {
        basePriceRange = "$0.046-0.07";
      } else if (quality.includes("low")) {
        basePriceRange = "$0.011-0.02";
      }
      if (n === 1) {
        return `${basePriceRange}/Run`;
      } else {
        return `${basePriceRange} x ${n}/Run`;
      }
    }, "displayPrice")
  },
  PikaImageToVideoNode2_2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      if (!durationWidget || !resolutionWidget) {
        return "$0.2-1.0/Run (varies with duration & resolution)";
      }
      const duration = String(durationWidget.value);
      const resolution = String(resolutionWidget.value);
      if (duration.includes("5")) {
        if (resolution.includes("1080p")) return "$0.45/Run";
        if (resolution.includes("720p")) return "$0.2/Run";
      } else if (duration.includes("10")) {
        if (resolution.includes("1080p")) return "$1.0/Run";
        if (resolution.includes("720p")) return "$0.6/Run";
      }
      return "$0.2/Run";
    }, "displayPrice")
  },
  PikaScenesV2_2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      if (!durationWidget || !resolutionWidget) {
        return "$0.2-1.0/Run (varies with duration & resolution)";
      }
      const duration = String(durationWidget.value);
      const resolution = String(resolutionWidget.value);
      if (duration.includes("5")) {
        if (resolution.includes("720p")) return "$0.3/Run";
        if (resolution.includes("1080p")) return "$0.5/Run";
      } else if (duration.includes("10")) {
        if (resolution.includes("720p")) return "$0.4/Run";
        if (resolution.includes("1080p")) return "$1.5/Run";
      }
      return "$0.3/Run";
    }, "displayPrice")
  },
  PikaStartEndFrameNode2_2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      if (!durationWidget || !resolutionWidget) {
        return "$0.2-1.0/Run (varies with duration & resolution)";
      }
      const duration = String(durationWidget.value);
      const resolution = String(resolutionWidget.value);
      if (duration.includes("5")) {
        if (resolution.includes("720p")) return "$0.2/Run";
        if (resolution.includes("1080p")) return "$0.3/Run";
      } else if (duration.includes("10")) {
        if (resolution.includes("720p")) return "$0.25/Run";
        if (resolution.includes("1080p")) return "$1.0/Run";
      }
      return "$0.2/Run";
    }, "displayPrice")
  },
  PikaTextToVideoNode2_2: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration"
      );
      const resolutionWidget = node.widgets?.find(
        (w) => w.name === "resolution"
      );
      if (!durationWidget || !resolutionWidget) {
        return "$0.2-1.5/Run (varies with duration & resolution)";
      }
      const duration = String(durationWidget.value);
      const resolution = String(resolutionWidget.value);
      if (duration.includes("5")) {
        if (resolution.includes("1080p")) return "$0.45/Run";
        if (resolution.includes("720p")) return "$0.2/Run";
      } else if (duration.includes("10")) {
        if (resolution.includes("1080p")) return "$1.0/Run";
        if (resolution.includes("720p")) return "$0.6/Run";
      }
      return "$0.45/Run";
    }, "displayPrice")
  },
  Pikadditions: {
    displayPrice: "$0.3/Run"
  },
  Pikaffects: {
    displayPrice: "$0.45/Run"
  },
  Pikaswaps: {
    displayPrice: "$0.3/Run"
  },
  PixverseImageToVideoNode: {
    displayPrice: pixversePricingCalculator
  },
  PixverseTextToVideoNode: {
    displayPrice: pixversePricingCalculator
  },
  PixverseTransitionVideoNode: {
    displayPrice: pixversePricingCalculator
  },
  RecraftCreativeUpscaleNode: {
    displayPrice: "$0.25/Run"
  },
  RecraftCrispUpscaleNode: {
    displayPrice: "$0.004/Run"
  },
  RecraftGenerateColorFromImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftGenerateImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftGenerateVectorImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.08 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.08 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftImageInpaintingNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftImageToImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftRemoveBackgroundNode: {
    displayPrice: "$0.01/Run"
  },
  RecraftReplaceBackgroundNode: {
    displayPrice: "$0.04/Run"
  },
  RecraftTextToImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.04 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.04 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftTextToVectorNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.08 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.08 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  RecraftVectorizeImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const nWidget = node.widgets?.find(
        (w) => w.name === "n"
      );
      if (!nWidget) return "$0.01 x n/Run";
      const n = Number(nWidget.value) || 1;
      const cost = (0.01 * n).toFixed(2);
      return `$${cost}/Run`;
    }, "displayPrice")
  },
  StabilityStableImageSD_3_5Node: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) return "$0.035-0.065/Run (varies with model)";
      const model = String(modelWidget.value).toLowerCase();
      if (model.includes("large")) {
        return "$0.065/Run";
      } else if (model.includes("medium")) {
        return "$0.035/Run";
      }
      return "$0.035/Run";
    }, "displayPrice")
  },
  StabilityStableImageUltraNode: {
    displayPrice: "$0.08/Run"
  },
  StabilityUpscaleConservativeNode: {
    displayPrice: "$0.25/Run"
  },
  StabilityUpscaleCreativeNode: {
    displayPrice: "$0.25/Run"
  },
  StabilityUpscaleFastNode: {
    displayPrice: "$0.01/Run"
  },
  VeoVideoGenerationNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const durationWidget = node.widgets?.find(
        (w) => w.name === "duration_seconds"
      );
      if (!durationWidget) return "$2.50-5.0/Run (varies with duration)";
      const price = 0.5 * Number(durationWidget.value);
      return `$${price.toFixed(2)}/Run`;
    }, "displayPrice")
  },
  Veo3VideoGenerationNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      const generateAudioWidget = node.widgets?.find(
        (w) => w.name === "generate_audio"
      );
      if (!modelWidget || !generateAudioWidget) {
        return "$2.00-6.00/Run (varies with model & audio generation)";
      }
      const model = String(modelWidget.value);
      const generateAudio = String(generateAudioWidget.value).toLowerCase() === "true";
      if (model.includes("veo-3.0-fast-generate-001")) {
        return generateAudio ? "$3.20/Run" : "$2.00/Run";
      } else if (model.includes("veo-3.0-generate-001")) {
        return generateAudio ? "$6.00/Run" : "$4.00/Run";
      }
      return "$2.00-6.00/Run";
    }, "displayPrice")
  },
  LumaImageNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      const aspectRatioWidget = node.widgets?.find(
        (w) => w.name === "aspect_ratio"
      );
      if (!modelWidget || !aspectRatioWidget) {
        return "$0.0045-0.0182/Run (varies with model & aspect ratio)";
      }
      const model = String(modelWidget.value);
      if (model.includes("photon-flash-1")) {
        return "$0.0019/Run";
      } else if (model.includes("photon-1")) {
        return "$0.0073/Run";
      }
      return "$0.0172/Run";
    }, "displayPrice")
  },
  LumaImageModifyNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) {
        return "$0.0019-0.0073/Run (varies with model)";
      }
      const model = String(modelWidget.value);
      if (model.includes("photon-flash-1")) {
        return "$0.0019/Run";
      } else if (model.includes("photon-1")) {
        return "$0.0073/Run";
      }
      return "$0.0172/Run";
    }, "displayPrice")
  },
  MoonvalleyTxt2VideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const lengthWidget = node.widgets?.find(
        (w) => w.name === "length"
      );
      if (!lengthWidget) return "$1.50/Run";
      const length = String(lengthWidget.value);
      if (length === "5s") {
        return "$1.50/Run";
      } else if (length === "10s") {
        return "$3.00/Run";
      }
      return "$1.50/Run";
    }, "displayPrice")
  },
  MoonvalleyImg2VideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const lengthWidget = node.widgets?.find(
        (w) => w.name === "length"
      );
      if (!lengthWidget) return "$1.50/Run";
      const length = String(lengthWidget.value);
      if (length === "5s") {
        return "$1.50/Run";
      } else if (length === "10s") {
        return "$3.00/Run";
      }
      return "$1.50/Run";
    }, "displayPrice")
  },
  MoonvalleyVideo2VideoNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const lengthWidget = node.widgets?.find(
        (w) => w.name === "length"
      );
      if (!lengthWidget) return "$2.25/Run";
      const length = String(lengthWidget.value);
      if (length === "5s") {
        return "$2.25/Run";
      } else if (length === "10s") {
        return "$4.00/Run";
      }
      return "$2.25/Run";
    }, "displayPrice")
  },
  // Runway nodes - using actual node names from ComfyUI
  RunwayTextToImageNode: {
    displayPrice: "$0.08/Run"
  },
  RunwayImageToVideoNodeGen3a: {
    displayPrice: calculateRunwayDurationPrice
  },
  RunwayImageToVideoNodeGen4: {
    displayPrice: calculateRunwayDurationPrice
  },
  RunwayFirstLastFrameNode: {
    displayPrice: calculateRunwayDurationPrice
  },
  // Rodin nodes - all have the same pricing structure
  Rodin3D_Regular: {
    displayPrice: "$0.4/Run"
  },
  Rodin3D_Detail: {
    displayPrice: "$0.4/Run"
  },
  Rodin3D_Smooth: {
    displayPrice: "$0.4/Run"
  },
  Rodin3D_Sketch: {
    displayPrice: "$0.4/Run"
  },
  // Tripo nodes - using actual node names from ComfyUI
  TripoTextToModelNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const quadWidget = node.widgets?.find(
        (w) => w.name === "quad"
      );
      const styleWidget = node.widgets?.find(
        (w) => w.name === "style"
      );
      const textureWidget = node.widgets?.find(
        (w) => w.name === "texture"
      );
      const textureQualityWidget = node.widgets?.find(
        (w) => w.name === "texture_quality"
      );
      if (!quadWidget || !styleWidget || !textureWidget)
        return "$0.1-0.4/Run (varies with quad, style, texture & quality)";
      const quad = String(quadWidget.value).toLowerCase() === "true";
      const style = String(styleWidget.value).toLowerCase();
      const texture = String(textureWidget.value).toLowerCase() === "true";
      const textureQuality = String(
        textureQualityWidget?.value || "standard"
      ).toLowerCase();
      if (style.includes("none")) {
        if (!quad) {
          if (!texture) return "$0.10/Run";
          else return "$0.15/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.30/Run";
            else return "$0.35/Run";
          } else {
            if (!texture) return "$0.20/Run";
            else return "$0.25/Run";
          }
        }
      } else {
        if (!quad) {
          if (!texture) return "$0.15/Run";
          else return "$0.20/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.35/Run";
            else return "$0.40/Run";
          } else {
            if (!texture) return "$0.25/Run";
            else return "$0.30/Run";
          }
        }
      }
    }, "displayPrice")
  },
  TripoImageToModelNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const quadWidget = node.widgets?.find(
        (w) => w.name === "quad"
      );
      const styleWidget = node.widgets?.find(
        (w) => w.name === "style"
      );
      const textureWidget = node.widgets?.find(
        (w) => w.name === "texture"
      );
      const textureQualityWidget = node.widgets?.find(
        (w) => w.name === "texture_quality"
      );
      if (!quadWidget || !styleWidget || !textureWidget)
        return "$0.2-0.5/Run (varies with quad, style, texture & quality)";
      const quad = String(quadWidget.value).toLowerCase() === "true";
      const style = String(styleWidget.value).toLowerCase();
      const texture = String(textureWidget.value).toLowerCase() === "true";
      const textureQuality = String(
        textureQualityWidget?.value || "standard"
      ).toLowerCase();
      if (style.includes("none")) {
        if (!quad) {
          if (!texture) return "$0.20/Run";
          else return "$0.25/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.40/Run";
            else return "$0.45/Run";
          } else {
            if (!texture) return "$0.30/Run";
            else return "$0.35/Run";
          }
        }
      } else {
        if (!quad) {
          if (!texture) return "$0.25/Run";
          else return "$0.30/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.45/Run";
            else return "$0.50/Run";
          } else {
            if (!texture) return "$0.35/Run";
            else return "$0.40/Run";
          }
        }
      }
    }, "displayPrice")
  },
  TripoRefineNode: {
    displayPrice: "$0.3/Run"
  },
  TripoTextureNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const textureQualityWidget = node.widgets?.find(
        (w) => w.name === "texture_quality"
      );
      if (!textureQualityWidget) return "$0.1-0.2/Run (varies with quality)";
      const textureQuality = String(textureQualityWidget.value);
      return textureQuality.includes("detailed") ? "$0.2/Run" : "$0.1/Run";
    }, "displayPrice")
  },
  TripoConvertModelNode: {
    displayPrice: "$0.10/Run"
  },
  TripoRetargetRiggedModelNode: {
    displayPrice: "$0.10/Run"
  },
  TripoMultiviewToModelNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const quadWidget = node.widgets?.find(
        (w) => w.name === "quad"
      );
      const styleWidget = node.widgets?.find(
        (w) => w.name === "style"
      );
      const textureWidget = node.widgets?.find(
        (w) => w.name === "texture"
      );
      const textureQualityWidget = node.widgets?.find(
        (w) => w.name === "texture_quality"
      );
      if (!quadWidget || !styleWidget || !textureWidget)
        return "$0.2-0.5/Run (varies with quad, style, texture & quality)";
      const quad = String(quadWidget.value).toLowerCase() === "true";
      const style = String(styleWidget.value).toLowerCase();
      const texture = String(textureWidget.value).toLowerCase() === "true";
      const textureQuality = String(
        textureQualityWidget?.value || "standard"
      ).toLowerCase();
      if (style.includes("none")) {
        if (!quad) {
          if (!texture) return "$0.20/Run";
          else return "$0.25/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.40/Run";
            else return "$0.45/Run";
          } else {
            if (!texture) return "$0.30/Run";
            else return "$0.35/Run";
          }
        }
      } else {
        if (!quad) {
          if (!texture) return "$0.25/Run";
          else return "$0.30/Run";
        } else {
          if (textureQuality.includes("detailed")) {
            if (!texture) return "$0.45/Run";
            else return "$0.50/Run";
          } else {
            if (!texture) return "$0.35/Run";
            else return "$0.40/Run";
          }
        }
      }
    }, "displayPrice")
  },
  // Google/Gemini nodes
  GeminiNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) return "Token-based";
      const model = String(modelWidget.value);
      if (model.includes("veo-2.0")) {
        return "$0.5/second";
      } else if (model.includes("gemini-2.5-pro-preview-05-06")) {
        return "$0.00016/$0.0006 per 1K tokens";
      } else if (model.includes("gemini-2.5-flash-preview-04-17")) {
        return "$0.00125/$0.01 per 1K tokens";
      }
      return "Token-based";
    }, "displayPrice")
  },
  // OpenAI nodes
  OpenAIChatNode: {
    displayPrice: /* @__PURE__ */ __name((node) => {
      const modelWidget = node.widgets?.find(
        (w) => w.name === "model"
      );
      if (!modelWidget) return "Token-based";
      const model = String(modelWidget.value);
      if (model.includes("o4-mini")) {
        return "$0.0011/$0.0044 per 1K tokens";
      } else if (model.includes("o1-pro")) {
        return "$0.15/$0.60 per 1K tokens";
      } else if (model.includes("o1")) {
        return "$0.015/$0.06 per 1K tokens";
      } else if (model.includes("o3-mini")) {
        return "$0.0011/$0.0044 per 1K tokens";
      } else if (model.includes("o3")) {
        return "$0.01/$0.04 per 1K tokens";
      } else if (model.includes("gpt-4o")) {
        return "$0.0025/$0.01 per 1K tokens";
      } else if (model.includes("gpt-4.1-nano")) {
        return "$0.0001/$0.0004 per 1K tokens";
      } else if (model.includes("gpt-4.1-mini")) {
        return "$0.0004/$0.0016 per 1K tokens";
      } else if (model.includes("gpt-4.1")) {
        return "$0.002/$0.008 per 1K tokens";
      }
      return "Token-based";
    }, "displayPrice")
  }
};
const useNodePricing = /* @__PURE__ */ __name(() => {
  const getNodeDisplayPrice = /* @__PURE__ */ __name((node) => {
    if (!node.constructor?.nodeData?.api_node) return "";
    const nodeName = node.constructor.nodeData.name;
    const priceConfig = apiNodeCosts[nodeName];
    if (!priceConfig) return "";
    if (typeof priceConfig.displayPrice === "function") {
      return safePricingExecution(priceConfig.displayPrice, node, "");
    }
    return priceConfig.displayPrice;
  }, "getNodeDisplayPrice");
  const getNodePricingConfig = /* @__PURE__ */ __name((node) => apiNodeCosts[node.constructor.nodeData?.name ?? ""], "getNodePricingConfig");
  const getRelevantWidgetNames = /* @__PURE__ */ __name((nodeType) => {
    const widgetMap = {
      KlingTextToVideoNode: ["mode", "model_name", "duration"],
      KlingImage2VideoNode: ["mode", "model_name", "duration"],
      KlingImageGenerationNode: ["modality", "model_name", "n"],
      KlingDualCharacterVideoEffectNode: ["mode", "model_name", "duration"],
      KlingSingleImageVideoEffectNode: ["effect_scene"],
      KlingStartEndFrameNode: ["mode", "model_name", "duration"],
      OpenAIDalle3: ["size", "quality"],
      OpenAIDalle2: ["size", "n"],
      OpenAIGPTImage1: ["quality", "n"],
      IdeogramV1: ["num_images", "turbo"],
      IdeogramV2: ["num_images", "turbo"],
      IdeogramV3: ["rendering_speed", "num_images"],
      FluxProKontextProNode: [],
      FluxProKontextMaxNode: [],
      VeoVideoGenerationNode: ["duration_seconds"],
      Veo3VideoGenerationNode: ["model", "generate_audio"],
      LumaVideoNode: ["model", "resolution", "duration"],
      LumaImageToVideoNode: ["model", "resolution", "duration"],
      LumaImageNode: ["model", "aspect_ratio"],
      LumaImageModifyNode: ["model", "aspect_ratio"],
      PikaTextToVideoNode2_2: ["duration", "resolution"],
      PikaImageToVideoNode2_2: ["duration", "resolution"],
      PikaScenesV2_2: ["duration", "resolution"],
      PikaStartEndFrameNode2_2: ["duration", "resolution"],
      PixverseTextToVideoNode: ["duration_seconds", "quality", "motion_mode"],
      PixverseTransitionVideoNode: [
        "duration_seconds",
        "motion_mode",
        "quality"
      ],
      PixverseImageToVideoNode: ["duration_seconds", "quality", "motion_mode"],
      StabilityStableImageSD_3_5Node: ["model"],
      RecraftTextToImageNode: ["n"],
      RecraftImageToImageNode: ["n"],
      RecraftImageInpaintingNode: ["n"],
      RecraftTextToVectorNode: ["n"],
      RecraftVectorizeImageNode: ["n"],
      RecraftGenerateColorFromImageNode: ["n"],
      RecraftGenerateImageNode: ["n"],
      RecraftGenerateVectorImageNode: ["n"],
      MoonvalleyTxt2VideoNode: ["length"],
      MoonvalleyImg2VideoNode: ["length"],
      MoonvalleyVideo2VideoNode: ["length"],
      // Runway nodes
      RunwayImageToVideoNodeGen3a: ["duration"],
      RunwayImageToVideoNodeGen4: ["duration"],
      RunwayFirstLastFrameNode: ["duration"],
      // Tripo nodes
      TripoTextToModelNode: ["quad", "style", "texture", "texture_quality"],
      TripoImageToModelNode: ["quad", "style", "texture", "texture_quality"],
      TripoTextureNode: ["texture_quality"],
      // Google/Gemini nodes
      GeminiNode: ["model"],
      // OpenAI nodes
      OpenAIChatNode: ["model"]
    };
    return widgetMap[nodeType] || [];
  }, "getRelevantWidgetNames");
  return {
    getNodeDisplayPrice,
    getNodePricingConfig,
    getRelevantWidgetNames
  };
}, "useNodePricing");
const useComputedWithWidgetWatch = /* @__PURE__ */ __name((node, options = {}) => {
  const { widgetNames, triggerCanvasRedraw = false } = options;
  const widgetValues = ref({});
  if (node.widgets) {
    const widgetsToObserve = widgetNames ? node.widgets.filter((widget) => widgetNames.includes(widget.name)) : node.widgets;
    const currentValues = {};
    widgetsToObserve.forEach((widget) => {
      currentValues[widget.name] = widget.value;
    });
    widgetValues.value = currentValues;
    widgetsToObserve.forEach((widget) => {
      widget.callback = useChainCallback(widget.callback, () => {
        widgetValues.value = {
          ...widgetValues.value,
          [widget.name]: widget.value
        };
        if (triggerCanvasRedraw) {
          node.graph?.setDirtyCanvas(true, true);
        }
      });
    });
  }
  return (computeFn) => {
    return computedWithControl(widgetValues, computeFn);
  };
}, "useComputedWithWidgetWatch");
const useNodeBadge = /* @__PURE__ */ __name(() => {
  const settingStore = useSettingStore();
  const extensionStore = useExtensionStore();
  const colorPaletteStore = useColorPaletteStore();
  const nodeSourceBadgeMode = computed(
    () => settingStore.get("Comfy.NodeBadge.NodeSourceBadgeMode")
  );
  const nodeIdBadgeMode = computed(
    () => settingStore.get("Comfy.NodeBadge.NodeIdBadgeMode")
  );
  const nodeLifeCycleBadgeMode = computed(
    () => settingStore.get(
      "Comfy.NodeBadge.NodeLifeCycleBadgeMode"
    )
  );
  const showApiPricingBadge = computed(
    () => settingStore.get("Comfy.NodeBadge.ShowApiPricing")
  );
  watch(
    [
      nodeSourceBadgeMode,
      nodeIdBadgeMode,
      nodeLifeCycleBadgeMode,
      showApiPricingBadge
    ],
    () => {
      app.graph?.setDirtyCanvas(true, true);
    }
  );
  const nodeDefStore = useNodeDefStore();
  function badgeTextVisible(nodeDef, badgeMode) {
    return !(badgeMode === NodeBadgeMode.None || nodeDef?.isCoreNode && badgeMode === NodeBadgeMode.HideBuiltIn);
  }
  __name(badgeTextVisible, "badgeTextVisible");
  onMounted(() => {
    const nodePricing = useNodePricing();
    extensionStore.registerExtension({
      name: "Comfy.NodeBadge",
      nodeCreated(node) {
        node.badgePosition = BadgePosition.TopRight;
        const badge = computed(() => {
          const nodeDef = nodeDefStore.fromLGraphNode(node);
          return new LGraphBadge({
            text: _.truncate(
              [
                badgeTextVisible(nodeDef, nodeIdBadgeMode.value) ? `#${node.id}` : "",
                badgeTextVisible(nodeDef, nodeLifeCycleBadgeMode.value) ? nodeDef?.nodeLifeCycleBadgeText ?? "" : "",
                badgeTextVisible(nodeDef, nodeSourceBadgeMode.value) ? nodeDef?.nodeSource?.badgeText ?? "" : ""
              ].filter((s) => s.length > 0).join(" "),
              {
                length: 31
              }
            ),
            fgColor: colorPaletteStore.completedActivePalette.colors.litegraph_base.BADGE_FG_COLOR,
            bgColor: colorPaletteStore.completedActivePalette.colors.litegraph_base.BADGE_BG_COLOR
          });
        });
        node.badges.push(() => badge.value);
        if (node.constructor.nodeData?.api_node && showApiPricingBadge.value) {
          const pricingConfig = nodePricing.getNodePricingConfig(node);
          const hasDynamicPricing = typeof pricingConfig?.displayPrice === "function";
          let creditsBadge;
          const createBadge = /* @__PURE__ */ __name(() => {
            const price = nodePricing.getNodeDisplayPrice(node);
            const isLightTheme = colorPaletteStore.completedActivePalette.light_theme;
            return new LGraphBadge({
              text: price,
              iconOptions: {
                unicode: "",
                fontFamily: "PrimeIcons",
                color: isLightTheme ? adjustColor("#FABC25", { lightness: 0.5 }) : "#FABC25",
                bgColor: isLightTheme ? adjustColor("#654020", { lightness: 0.5 }) : "#654020",
                fontSize: 8
              },
              fgColor: colorPaletteStore.completedActivePalette.colors.litegraph_base.BADGE_FG_COLOR,
              bgColor: isLightTheme ? adjustColor("#8D6932", { lightness: 0.5 }) : "#8D6932"
            });
          }, "createBadge");
          if (hasDynamicPricing) {
            const relevantWidgetNames = nodePricing.getRelevantWidgetNames(
              node.constructor.nodeData?.name
            );
            const computedWithWidgetWatch = useComputedWithWidgetWatch(node, {
              widgetNames: relevantWidgetNames,
              triggerCanvasRedraw: true
            });
            creditsBadge = computedWithWidgetWatch(createBadge);
          } else {
            creditsBadge = computed(createBadge);
          }
          node.badges.push(() => creditsBadge.value);
        }
      }
    });
  });
}, "useNodeBadge");
const useCanvasDrop = /* @__PURE__ */ __name((canvasRef) => {
  const modelToNodeStore = useModelToNodeStore();
  const litegraphService = useLitegraphService();
  const workflowService = useWorkflowService();
  usePragmaticDroppable(() => canvasRef.value, {
    getDropEffect: /* @__PURE__ */ __name((args) => args.source.data.type === "tree-explorer-node" ? "copy" : "move", "getDropEffect"),
    onDrop: /* @__PURE__ */ __name(async (event) => {
      const loc = event.location.current.input;
      const dndData = event.source.data;
      if (dndData.type === "tree-explorer-node") {
        const node = dndData.data;
        if (node.data instanceof ComfyNodeDefImpl) {
          const nodeDef = node.data;
          const pos = app.clientPosToCanvasPos([loc.clientX, loc.clientY]);
          pos[1] += LiteGraph.NODE_TITLE_HEIGHT;
          litegraphService.addNodeOnGraph(nodeDef, { pos });
        } else if (node.data instanceof ComfyModelDef) {
          const model = node.data;
          const pos = app.clientPosToCanvasPos([loc.clientX, loc.clientY]);
          const nodeAtPos = app.graph.getNodeOnPos(pos[0], pos[1]);
          let targetProvider = null;
          let targetGraphNode = null;
          if (nodeAtPos) {
            const providers = modelToNodeStore.getAllNodeProviders(
              model.directory
            );
            for (const provider of providers) {
              if (provider.nodeDef.name === nodeAtPos.comfyClass) {
                targetGraphNode = nodeAtPos;
                targetProvider = provider;
              }
            }
          }
          if (!targetGraphNode) {
            const provider = modelToNodeStore.getNodeProvider(model.directory);
            if (provider) {
              targetGraphNode = litegraphService.addNodeOnGraph(
                provider.nodeDef,
                {
                  pos
                }
              );
              targetProvider = provider;
            }
          }
          if (targetGraphNode) {
            const widget = targetGraphNode.widgets?.find(
              (widget2) => widget2.name === targetProvider?.key
            );
            if (widget) {
              widget.value = model.file_name;
            }
          }
        } else if (node.data instanceof ComfyWorkflow) {
          const workflow = node.data;
          const position = app.clientPosToCanvasPos([
            loc.clientX,
            loc.clientY
          ]);
          await workflowService.insertWorkflow(workflow, { position });
        }
      }
    }, "onDrop")
  });
}, "useCanvasDrop");
const useContextMenuTranslation = /* @__PURE__ */ __name(() => {
  const f = LGraphCanvas.prototype.getCanvasMenuOptions;
  const getCanvasCenterMenuOptions = /* @__PURE__ */ __name(function(...args) {
    const res = f.apply(this, args);
    for (const item of res) {
      if (item?.content) {
        item.content = st(`contextMenu.${item.content}`, item.content);
      }
    }
    return res;
  }, "getCanvasCenterMenuOptions");
  LGraphCanvas.prototype.getCanvasMenuOptions = getCanvasCenterMenuOptions;
  function translateMenus(values, options) {
    if (!values) return;
    const reInput = /Convert (.*) to input/;
    const reWidget = /Convert (.*) to widget/;
    const cvt = st("contextMenu.Convert ", "Convert ");
    const tinp = st("contextMenu. to input", " to input");
    const twgt = st("contextMenu. to widget", " to widget");
    for (const value of values) {
      if (typeof value === "string") continue;
      translateMenus(value?.submenu?.options, options);
      if (!value?.content) {
        continue;
      }
      if (te(`contextMenu.${value.content}`)) {
        value.content = st(`contextMenu.${value.content}`, value.content);
      }
      const extraInfo = options.extra || options.parentMenu?.options?.extra;
      const matchInput = value.content?.match(reInput);
      if (matchInput) {
        let match = matchInput[1];
        extraInfo?.inputs?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        extraInfo?.widgets?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        value.content = cvt + match + tinp;
        continue;
      }
      const matchWidget = value.content?.match(reWidget);
      if (matchWidget) {
        let match = matchWidget[1];
        extraInfo?.inputs?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        extraInfo?.widgets?.find((i) => {
          if (i.name != match) return false;
          match = i.label ? i.label : i.name;
        });
        value.content = cvt + match + twgt;
        continue;
      }
    }
  }
  __name(translateMenus, "translateMenus");
  const OriginalContextMenu = LiteGraph.ContextMenu;
  function ContextMenu2(values, options) {
    if (options.title) {
      options.title = st(
        `nodeDefs.${normalizeI18nKey(options.title)}.display_name`,
        options.title
      );
    }
    translateMenus(values, options);
    const ctx = new OriginalContextMenu(values, options);
    return ctx;
  }
  __name(ContextMenu2, "ContextMenu");
  LiteGraph.ContextMenu = ContextMenu2;
  LiteGraph.ContextMenu.prototype = OriginalContextMenu.prototype;
}, "useContextMenuTranslation");
const useCopy = /* @__PURE__ */ __name(() => {
  const canvasStore = useCanvasStore();
  useEventListener(document, "copy", (e) => {
    if (!(e.target instanceof Element)) {
      return;
    }
    if (e.target instanceof HTMLTextAreaElement && e.target.type === "textarea" || e.target instanceof HTMLInputElement && e.target.type === "text") {
      return;
    }
    const isTargetInGraph = e.target.classList.contains("litegraph") || e.target.classList.contains("graph-canvas-container") || e.target.id === "graph-canvas";
    const canvas = canvasStore.canvas;
    if (isTargetInGraph && canvas?.selectedItems) {
      canvas.copyToClipboard();
      e.clipboardData?.setData("text", " ");
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    }
  });
}, "useCopy");
const useGlobalLitegraph = /* @__PURE__ */ __name(() => {
  window["LiteGraph"] = LiteGraph;
  window["LGraph"] = LGraph;
  window["LLink"] = LLink;
  window["LGraphNode"] = LGraphNode;
  window["LGraphGroup"] = LGraphGroup;
  window["DragAndScale"] = DragAndScale;
  window["LGraphCanvas"] = LGraphCanvas;
  window["ContextMenu"] = ContextMenu$1;
  window["LGraphBadge"] = LGraphBadge;
}, "useGlobalLitegraph");
const useLitegraphSettings = /* @__PURE__ */ __name(() => {
  const settingStore = useSettingStore();
  const canvasStore = useCanvasStore();
  watchEffect(() => {
    const canvasInfoEnabled = settingStore.get("Comfy.Graph.CanvasInfo");
    if (canvasStore.canvas) {
      canvasStore.canvas.show_info = canvasInfoEnabled;
    }
  });
  watchEffect(() => {
    const zoomSpeed = settingStore.get("Comfy.Graph.ZoomSpeed");
    if (canvasStore.canvas) {
      canvasStore.canvas.zoom_speed = zoomSpeed;
    }
  });
  watchEffect(() => {
    LiteGraph.snaps_for_comfy = settingStore.get(
      "Comfy.Node.AutoSnapLinkToSlot"
    );
  });
  watchEffect(() => {
    LiteGraph.snap_highlights_node = settingStore.get(
      "Comfy.Node.SnapHighlightsNode"
    );
  });
  watchEffect(() => {
    LGraphNode.keepAllLinksOnBypass = settingStore.get(
      "Comfy.Node.BypassAllLinksOnDelete"
    );
  });
  watchEffect(() => {
    LiteGraph.middle_click_slot_add_default_node = settingStore.get(
      "Comfy.Node.MiddleClickRerouteNode"
    );
  });
  watchEffect(() => {
    const linkRenderMode = settingStore.get("Comfy.LinkRenderMode");
    if (canvasStore.canvas) {
      canvasStore.canvas.links_render_mode = linkRenderMode;
      canvasStore.canvas.setDirty(
        /* fg */
        false,
        /* bg */
        true
      );
    }
  });
  watchEffect(() => {
    const lowQualityRenderingZoomThreshold = settingStore.get(
      "LiteGraph.Canvas.LowQualityRenderingZoomThreshold"
    );
    if (canvasStore.canvas) {
      canvasStore.canvas.low_quality_zoom_threshold = lowQualityRenderingZoomThreshold;
      canvasStore.canvas.setDirty(
        /* fg */
        true,
        /* bg */
        true
      );
    }
  });
  watchEffect(() => {
    const linkMarkerShape = settingStore.get("Comfy.Graph.LinkMarkers");
    const { canvas } = canvasStore;
    if (canvas) {
      canvas.linkMarkerShape = linkMarkerShape;
      canvas.setDirty(false, true);
    }
  });
  watchEffect(() => {
    const maximumFps = settingStore.get("LiteGraph.Canvas.MaximumFps");
    const { canvas } = canvasStore;
    if (canvas) canvas.maximumFps = maximumFps;
  });
  watchEffect(() => {
    const dragZoomEnabled = settingStore.get("Comfy.Graph.CtrlShiftZoom");
    const { canvas } = canvasStore;
    if (canvas) canvas.dragZoomEnabled = dragZoomEnabled;
  });
  watchEffect(() => {
    CanvasPointer.doubleClickTime = settingStore.get(
      "Comfy.Pointer.DoubleClickTime"
    );
  });
  watchEffect(() => {
    CanvasPointer.bufferTime = settingStore.get("Comfy.Pointer.ClickBufferTime");
  });
  watchEffect(() => {
    CanvasPointer.maxClickDrift = settingStore.get("Comfy.Pointer.ClickDrift");
  });
  watchEffect(() => {
    LiteGraph.CANVAS_GRID_SIZE = settingStore.get("Comfy.SnapToGrid.GridSize");
  });
  watchEffect(() => {
    LiteGraph.alwaysSnapToGrid = settingStore.get("pysssss.SnapToGrid");
  });
  watchEffect(() => {
    LiteGraph.context_menu_scaling = settingStore.get(
      "LiteGraph.ContextMenu.Scaling"
    );
  });
  watchEffect(() => {
    LiteGraph.Reroute.maxSplineOffset = settingStore.get(
      "LiteGraph.Reroute.SplineOffset"
    );
  });
  watchEffect(() => {
    const navigationMode = settingStore.get("Comfy.Canvas.NavigationMode");
    LiteGraph.canvasNavigationMode = navigationMode;
    LiteGraph.macTrackpadGestures = navigationMode === "standard";
  });
  watchEffect(() => {
    LiteGraph.saveViewportWithGraph = settingStore.get(
      "Comfy.EnableWorkflowViewRestore"
    );
  });
}, "useLitegraphSettings");
const usePaste = /* @__PURE__ */ __name(() => {
  const workspaceStore = useWorkspaceStore();
  const canvasStore = useCanvasStore();
  const pasteItemsOnNode = /* @__PURE__ */ __name((items, node, contentType) => {
    if (!node) return;
    const filteredItems = Array.from(items).filter(
      (item) => item.type.startsWith(contentType)
    );
    const blob = filteredItems[0]?.getAsFile();
    if (!blob) return;
    node.pasteFile?.(blob);
    node.pasteFiles?.(
      Array.from(filteredItems).map((i) => i.getAsFile()).filter((f) => f !== null)
    );
  }, "pasteItemsOnNode");
  useEventListener(document, "paste", async (e) => {
    const isTargetInGraph = e.target instanceof Element && (e.target.classList.contains("litegraph") || e.target.classList.contains("graph-canvas-container") || e.target.id === "graph-canvas");
    if (!isTargetInGraph) return;
    if (workspaceStore.shiftDown) return;
    const { canvas } = canvasStore;
    if (!canvas) return;
    const { graph } = canvas;
    let data = e.clipboardData;
    if (!data) throw new Error("No clipboard data on clipboard event");
    const { items } = data;
    const currentNode = canvas.current_node;
    const isNodeSelected = currentNode?.is_selected;
    const isImageNodeSelected = isNodeSelected && isImageNode(currentNode);
    const isVideoNodeSelected = isNodeSelected && isVideoNode(currentNode);
    const isAudioNodeSelected = isNodeSelected && isAudioNode(currentNode);
    let imageNode = isImageNodeSelected ? currentNode : null;
    let audioNode = isAudioNodeSelected ? currentNode : null;
    const videoNode = isVideoNodeSelected ? currentNode : null;
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        if (!imageNode) {
          const newNode = LiteGraph.createNode("LoadImage");
          if (newNode) {
            newNode.pos = [canvas.graph_mouse[0], canvas.graph_mouse[1]];
            imageNode = graph?.add(newNode) ?? null;
          }
          graph?.change();
        }
        pasteItemsOnNode(items, imageNode, "image");
        return;
      } else if (item.type.startsWith("video/")) {
        if (!videoNode) {
        } else {
          pasteItemsOnNode(items, videoNode, "video");
          return;
        }
      } else if (item.type.startsWith("audio/")) {
        if (!audioNode) {
          const newNode = LiteGraph.createNode("LoadAudio");
          if (newNode) {
            newNode.pos = [canvas.graph_mouse[0], canvas.graph_mouse[1]];
            audioNode = graph?.add(newNode) ?? null;
          }
          graph?.change();
        }
        pasteItemsOnNode(items, audioNode, "audio");
        return;
      }
    }
    data = data.getData("text/plain");
    let workflow = null;
    try {
      data = data.slice(data.indexOf("{"));
      workflow = JSON.parse(data);
    } catch (err) {
      try {
        data = data.slice(data.indexOf("workflow\n"));
        data = data.slice(data.indexOf("{"));
        workflow = JSON.parse(data);
      } catch (error) {
        workflow = null;
      }
    }
    if (workflow && workflow.version && workflow.nodes && workflow.extra) {
      await app.loadGraphData(workflow);
    } else {
      if (e.target instanceof HTMLTextAreaElement && e.target.type === "textarea" || e.target instanceof HTMLInputElement && e.target.type === "text") {
        return;
      }
      canvas.pasteFromClipboard();
    }
  });
}, "usePaste");
function useWorkflowAutoSave() {
  const workflowStore = useWorkflowStore();
  const settingStore = useSettingStore();
  const workflowService = useWorkflowService();
  const autoSaveSetting = computed(
    () => settingStore.get("Comfy.Workflow.AutoSave")
  );
  const autoSaveDelay = computed(
    () => settingStore.get("Comfy.Workflow.AutoSaveDelay")
  );
  let autoSaveTimeout = null;
  let isSaving = false;
  let needsAutoSave = false;
  const scheduleAutoSave = /* @__PURE__ */ __name(() => {
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = null;
    }
    if (autoSaveSetting.value === "after delay") {
      if (isSaving) {
        needsAutoSave = true;
        return;
      }
      const delay = autoSaveDelay.value;
      autoSaveTimeout = setTimeout(async () => {
        const activeWorkflow = workflowStore.activeWorkflow;
        if (activeWorkflow?.isModified && activeWorkflow.isPersisted) {
          try {
            isSaving = true;
            await workflowService.saveWorkflow(activeWorkflow);
          } catch (err) {
            console.error("Auto save failed:", err);
          } finally {
            isSaving = false;
            if (needsAutoSave) {
              needsAutoSave = false;
              scheduleAutoSave();
            }
          }
        }
      }, delay);
    }
  }, "scheduleAutoSave");
  watch(
    autoSaveSetting,
    (newSetting) => {
      if (autoSaveTimeout) {
        clearTimeout(autoSaveTimeout);
        autoSaveTimeout = null;
      }
      if (newSetting === "after delay" && workflowStore.activeWorkflow?.isModified) {
        scheduleAutoSave();
      }
    },
    { immediate: true }
  );
  const onGraphChanged = /* @__PURE__ */ __name(() => {
    scheduleAutoSave();
  }, "onGraphChanged");
  api.addEventListener("graphChanged", onGraphChanged);
  onUnmounted(() => {
    if (autoSaveTimeout) {
      clearTimeout(autoSaveTimeout);
      autoSaveTimeout = null;
    }
    api.removeEventListener("graphChanged", onGraphChanged);
  });
}
__name(useWorkflowAutoSave, "useWorkflowAutoSave");
function useWorkflowPersistence() {
  const workflowStore = useWorkflowStore();
  const settingStore = useSettingStore();
  const workflowPersistenceEnabled = computed(
    () => settingStore.get("Comfy.Workflow.Persist")
  );
  const persistCurrentWorkflow = /* @__PURE__ */ __name(() => {
    if (!workflowPersistenceEnabled.value) return;
    const workflow = JSON.stringify(app.graph.serialize());
    localStorage.setItem("workflow", workflow);
    if (api.clientId) {
      sessionStorage.setItem(`workflow:${api.clientId}`, workflow);
    }
  }, "persistCurrentWorkflow");
  const loadWorkflowFromStorage = /* @__PURE__ */ __name(async (json, workflowName) => {
    if (!json) return false;
    const workflow = JSON.parse(json);
    await app.loadGraphData(workflow, true, true, workflowName);
    return true;
  }, "loadWorkflowFromStorage");
  const loadPreviousWorkflowFromStorage = /* @__PURE__ */ __name(async () => {
    const workflowName = getStorageValue("Comfy.PreviousWorkflow");
    const clientId = api.initialClientId ?? api.clientId;
    if (clientId) {
      const sessionWorkflow = sessionStorage.getItem(`workflow:${clientId}`);
      if (await loadWorkflowFromStorage(sessionWorkflow, workflowName)) {
        return true;
      }
    }
    const localWorkflow = localStorage.getItem("workflow");
    return await loadWorkflowFromStorage(localWorkflow, workflowName);
  }, "loadPreviousWorkflowFromStorage");
  const loadDefaultWorkflow = /* @__PURE__ */ __name(async () => {
    if (!settingStore.get("Comfy.TutorialCompleted")) {
      await settingStore.set("Comfy.TutorialCompleted", true);
      await useWorkflowService().loadBlankWorkflow();
      await useCommandStore().execute("Comfy.BrowseTemplates");
    } else {
      await app.loadGraphData();
    }
  }, "loadDefaultWorkflow");
  const restorePreviousWorkflow = /* @__PURE__ */ __name(async () => {
    if (!workflowPersistenceEnabled.value) return;
    try {
      const restored = await loadPreviousWorkflowFromStorage();
      if (!restored) {
        await loadDefaultWorkflow();
      }
    } catch (err) {
      console.error("Error loading previous workflow", err);
      await loadDefaultWorkflow();
    }
  }, "restorePreviousWorkflow");
  watch(
    () => workflowStore.activeWorkflow?.key,
    (activeWorkflowKey) => {
      if (!activeWorkflowKey) return;
      setStorageValue("Comfy.PreviousWorkflow", activeWorkflowKey);
      persistCurrentWorkflow();
    }
  );
  api.addEventListener("graphChanged", persistCurrentWorkflow);
  const openWorkflows = computed(() => workflowStore.openWorkflows);
  const activeWorkflow = computed(() => workflowStore.activeWorkflow);
  const restoreState = computed(
    () => {
      if (!openWorkflows.value || !activeWorkflow.value) {
        return { paths: [], activeIndex: -1 };
      }
      const paths = openWorkflows.value.filter((workflow) => workflow?.isPersisted && !workflow.isModified).map((workflow) => workflow.path);
      const activeIndex = openWorkflows.value.findIndex(
        (workflow) => workflow.path === activeWorkflow.value?.path
      );
      return { paths, activeIndex };
    }
  );
  const storedWorkflows = JSON.parse(
    getStorageValue("Comfy.OpenWorkflowsPaths") || "[]"
  );
  const storedActiveIndex = JSON.parse(
    getStorageValue("Comfy.ActiveWorkflowIndex") || "-1"
  );
  watch(restoreState, ({ paths, activeIndex }) => {
    if (workflowPersistenceEnabled.value) {
      setStorageValue("Comfy.OpenWorkflowsPaths", JSON.stringify(paths));
      setStorageValue("Comfy.ActiveWorkflowIndex", JSON.stringify(activeIndex));
    }
  });
  const restoreWorkflowTabsState = /* @__PURE__ */ __name(() => {
    if (!workflowPersistenceEnabled.value) return;
    const isRestorable = storedWorkflows?.length > 0 && storedActiveIndex >= 0;
    if (isRestorable) {
      workflowStore.openWorkflowsInBackground({
        left: storedWorkflows.slice(0, storedActiveIndex),
        right: storedWorkflows.slice(storedActiveIndex)
      });
    }
  }, "restoreWorkflowTabsState");
  return {
    restorePreviousWorkflow,
    restoreWorkflowTabsState
  };
}
__name(useWorkflowPersistence, "useWorkflowPersistence");
const CORE_SETTINGS = [
  {
    id: "Comfy.Validation.Workflows",
    name: "Validate workflows",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.NodeSearchBoxImpl",
    category: ["Comfy", "Node Search Box", "Implementation"],
    experimental: true,
    name: "Node search box implementation",
    type: "combo",
    options: ["default", "litegraph (legacy)"],
    defaultValue: "default"
  },
  {
    id: "Comfy.LinkRelease.Action",
    category: ["LiteGraph", "LinkRelease", "Action"],
    name: "Action on link release (No modifier)",
    type: "combo",
    options: Object.values(LinkReleaseTriggerAction),
    defaultValue: LinkReleaseTriggerAction.CONTEXT_MENU,
    defaultsByInstallVersion: {
      "1.24.1": LinkReleaseTriggerAction.SEARCH_BOX
    }
  },
  {
    id: "Comfy.LinkRelease.ActionShift",
    category: ["LiteGraph", "LinkRelease", "ActionShift"],
    name: "Action on link release (Shift)",
    type: "combo",
    options: Object.values(LinkReleaseTriggerAction),
    defaultValue: LinkReleaseTriggerAction.SEARCH_BOX,
    defaultsByInstallVersion: {
      "1.24.1": LinkReleaseTriggerAction.CONTEXT_MENU
    }
  },
  {
    id: "Comfy.NodeSearchBoxImpl.NodePreview",
    category: ["Comfy", "Node Search Box", "NodePreview"],
    name: "Node preview",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.NodeSearchBoxImpl.ShowCategory",
    category: ["Comfy", "Node Search Box", "ShowCategory"],
    name: "Show node category in search results",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.NodeSearchBoxImpl.ShowIdName",
    category: ["Comfy", "Node Search Box", "ShowIdName"],
    name: "Show node id name in search results",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.NodeSearchBoxImpl.ShowNodeFrequency",
    category: ["Comfy", "Node Search Box", "ShowNodeFrequency"],
    name: "Show node frequency in search results",
    tooltip: "Only applies to the default implementation",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Sidebar.Location",
    category: ["Appearance", "Sidebar", "Location"],
    name: "Sidebar location",
    type: "combo",
    options: ["left", "right"],
    defaultValue: "left"
  },
  {
    id: "Comfy.Sidebar.Size",
    category: ["Appearance", "Sidebar", "Size"],
    name: "Sidebar size",
    type: "combo",
    options: ["normal", "small"],
    // Default to small if the window is less than 1536px(2xl) wide.
    defaultValue: /* @__PURE__ */ __name(() => window.innerWidth < 1536 ? "small" : "normal", "defaultValue")
  },
  {
    id: "Comfy.Sidebar.UnifiedWidth",
    category: ["Appearance", "Sidebar", "UnifiedWidth"],
    name: "Unified sidebar width",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.18.1"
  },
  {
    id: "Comfy.TextareaWidget.FontSize",
    category: ["Appearance", "Node Widget", "TextareaWidget", "FontSize"],
    name: "Textarea widget font size",
    type: "slider",
    defaultValue: 10,
    attrs: {
      min: 8,
      max: 24
    }
  },
  {
    id: "Comfy.TextareaWidget.Spellcheck",
    category: ["Comfy", "Node Widget", "TextareaWidget", "Spellcheck"],
    name: "Textarea widget spellcheck",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Workflow.SortNodeIdOnSave",
    name: "Sort node IDs when saving workflow",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Graph.CanvasInfo",
    category: ["LiteGraph", "Canvas", "CanvasInfo"],
    name: "Show canvas info on bottom left corner (fps, etc.)",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Node.ShowDeprecated",
    name: "Show deprecated nodes in search",
    tooltip: "Deprecated nodes are hidden by default in the UI, but remain functional in existing workflows that use them.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.Node.ShowExperimental",
    name: "Show experimental nodes in search",
    tooltip: "Experimental nodes are marked as such in the UI and may be subject to significant changes or removal in future versions. Use with caution in production workflows",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Node.Opacity",
    category: ["Appearance", "Node", "Opacity"],
    name: "Node opacity",
    type: "slider",
    defaultValue: 1,
    attrs: {
      min: 0.01,
      max: 1,
      step: 0.01
    }
  },
  {
    id: "Comfy.Workflow.ShowMissingNodesWarning",
    name: "Show missing nodes warning",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Workflow.ShowMissingModelsWarning",
    name: "Show missing models warning",
    type: "boolean",
    defaultValue: true,
    experimental: true
  },
  {
    id: "Comfy.Graph.ZoomSpeed",
    category: ["LiteGraph", "Canvas", "ZoomSpeed"],
    name: "Canvas zoom speed",
    type: "slider",
    defaultValue: 1.1,
    attrs: {
      min: 1.01,
      max: 2.5,
      step: 0.01
    }
  },
  // Bookmarks are stored in the settings store.
  // Bookmarks are in format of category/display_name. e.g. "conditioning/CLIPTextEncode"
  {
    id: "Comfy.NodeLibrary.Bookmarks",
    name: "Node library bookmarks with display name (deprecated)",
    type: "hidden",
    defaultValue: [],
    deprecated: true
  },
  {
    id: "Comfy.NodeLibrary.Bookmarks.V2",
    name: "Node library bookmarks v2 with unique name",
    type: "hidden",
    defaultValue: []
  },
  // Stores mapping from bookmark folder name to its customization.
  {
    id: "Comfy.NodeLibrary.BookmarksCustomization",
    name: "Node library bookmarks customization",
    type: "hidden",
    defaultValue: {}
  },
  // Hidden setting used by the queue for how to fit images
  {
    id: "Comfy.Queue.ImageFit",
    name: "Queue image fit",
    type: "hidden",
    defaultValue: "cover"
  },
  {
    id: "Comfy.GroupSelectedNodes.Padding",
    category: ["LiteGraph", "Group", "Padding"],
    name: "Group selected nodes padding",
    type: "slider",
    defaultValue: 10,
    attrs: {
      min: 0,
      max: 100
    }
  },
  {
    id: "Comfy.Node.DoubleClickTitleToEdit",
    category: ["LiteGraph", "Node", "DoubleClickTitleToEdit"],
    name: "Double click node title to edit",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Node.AllowImageSizeDraw",
    category: ["LiteGraph", "Node Widget", "AllowImageSizeDraw"],
    name: "Show width × height below the image preview",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Group.DoubleClickTitleToEdit",
    category: ["LiteGraph", "Group", "DoubleClickTitleToEdit"],
    name: "Double click group title to edit",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Window.UnloadConfirmation",
    name: "Show confirmation when closing window",
    type: "boolean",
    defaultValue: true,
    versionModified: "1.7.12"
  },
  {
    id: "Comfy.TreeExplorer.ItemPadding",
    category: ["Appearance", "Tree Explorer", "ItemPadding"],
    name: "Tree explorer item padding",
    type: "slider",
    defaultValue: 2,
    attrs: {
      min: 0,
      max: 8,
      step: 1
    }
  },
  {
    id: "Comfy.ModelLibrary.AutoLoadAll",
    name: "Automatically load all model folders",
    tooltip: "If true, all folders will load as soon as you open the model library (this may cause delays while it loads). If false, root level model folders will only load once you click on them.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.ModelLibrary.NameFormat",
    name: "What name to display in the model library tree view",
    tooltip: 'Select "filename" to render a simplified view of the raw filename (without directory or ".safetensors" extension) in the model list. Select "title" to display the configurable model metadata title.',
    type: "combo",
    options: ["filename", "title"],
    defaultValue: "title"
  },
  {
    id: "Comfy.Locale",
    name: "Language",
    type: "combo",
    options: [
      { value: "en", text: "English" },
      { value: "zh", text: "中文" },
      { value: "zh-TW", text: "繁體中文" },
      { value: "ru", text: "Русский" },
      { value: "ja", text: "日本語" },
      { value: "ko", text: "한국어" },
      { value: "fr", text: "Français" },
      { value: "es", text: "Español" }
    ],
    defaultValue: /* @__PURE__ */ __name(() => navigator.language.split("-")[0] || "en", "defaultValue")
  },
  {
    id: "Comfy.NodeBadge.NodeSourceBadgeMode",
    category: ["LiteGraph", "Node", "NodeSourceBadgeMode"],
    name: "Node source badge mode",
    type: "combo",
    options: Object.values(NodeBadgeMode),
    defaultValue: NodeBadgeMode.HideBuiltIn
  },
  {
    id: "Comfy.NodeBadge.NodeIdBadgeMode",
    category: ["LiteGraph", "Node", "NodeIdBadgeMode"],
    name: "Node ID badge mode",
    type: "combo",
    options: [NodeBadgeMode.None, NodeBadgeMode.ShowAll],
    defaultValue: NodeBadgeMode.None
  },
  {
    id: "Comfy.NodeBadge.NodeLifeCycleBadgeMode",
    category: ["LiteGraph", "Node", "NodeLifeCycleBadgeMode"],
    name: "Node life cycle badge mode",
    type: "combo",
    options: [NodeBadgeMode.None, NodeBadgeMode.ShowAll],
    defaultValue: NodeBadgeMode.ShowAll
  },
  {
    id: "Comfy.NodeBadge.ShowApiPricing",
    category: ["Comfy", "API Nodes"],
    name: "Show API node pricing badge",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.20.3"
  },
  {
    id: "Comfy.Notification.ShowVersionUpdates",
    category: ["Comfy", "Notification Preferences"],
    name: "Show version updates",
    tooltip: "Show updates for new models, and major new features.",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.ConfirmClear",
    category: ["Comfy", "Workflow", "ConfirmClear"],
    name: "Require confirmation when clearing workflow",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.PromptFilename",
    category: ["Comfy", "Workflow", "PromptFilename"],
    name: "Prompt for filename when saving workflow",
    type: "boolean",
    defaultValue: true
  },
  /**
   * file format for preview
   *
   * format;quality
   *
   * ex)
   * webp;50 -> webp, quality 50
   * jpeg;80 -> rgb, jpeg, quality 80
   *
   * @type {string}
   */
  {
    id: "Comfy.PreviewFormat",
    category: ["LiteGraph", "Node Widget", "PreviewFormat"],
    name: "Preview image format",
    tooltip: "When displaying a preview in the image widget, convert it to a lightweight image, e.g. webp, jpeg, webp;50, etc.",
    type: "text",
    defaultValue: ""
  },
  {
    id: "Comfy.DisableSliders",
    category: ["LiteGraph", "Node Widget", "DisableSliders"],
    name: "Disable node widget sliders",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.DisableFloatRounding",
    category: ["LiteGraph", "Node Widget", "DisableFloatRounding"],
    name: "Disable default float widget rounding.",
    tooltip: "(requires page reload) Cannot disable round when round is set by the node in the backend.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "Comfy.FloatRoundingPrecision",
    category: ["LiteGraph", "Node Widget", "FloatRoundingPrecision"],
    name: "Float widget rounding decimal places [0 = auto].",
    tooltip: "(requires page reload)",
    type: "slider",
    attrs: {
      min: 0,
      max: 6,
      step: 1
    },
    defaultValue: 0
  },
  {
    id: "LiteGraph.Node.TooltipDelay",
    name: "Tooltip Delay",
    type: "number",
    attrs: {
      min: 100,
      max: 3e3,
      step: 50
    },
    defaultValue: 500,
    versionAdded: "1.9.0"
  },
  {
    id: "Comfy.EnableTooltips",
    category: ["LiteGraph", "Node", "EnableTooltips"],
    name: "Enable Tooltips",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.DevMode",
    name: "Enable dev mode options (API save, etc.)",
    type: "boolean",
    defaultValue: false,
    onChange: /* @__PURE__ */ __name((value) => {
      const element = document.getElementById("comfy-dev-save-api-button");
      if (element) {
        element.style.display = value ? "flex" : "none";
      }
    }, "onChange")
  },
  {
    id: "Comfy.UseNewMenu",
    category: ["Comfy", "Menu", "UseNewMenu"],
    defaultValue: "Top",
    name: "Use new menu",
    type: "combo",
    options: ["Disabled", "Top", "Bottom"],
    tooltip: "Menu bar position. On mobile devices, the menu is always shown at the top.",
    migrateDeprecatedValue: /* @__PURE__ */ __name((value) => {
      if (value === "Floating") {
        return "Top";
      }
      return value;
    }, "migrateDeprecatedValue")
  },
  {
    id: "Comfy.Workflow.WorkflowTabsPosition",
    name: "Opened workflows position",
    type: "combo",
    options: ["Sidebar", "Topbar", "Topbar (2nd-row)"],
    // Default to topbar (2nd-row) if the window is less than 1536px(2xl) wide.
    defaultValue: /* @__PURE__ */ __name(() => window.innerWidth < 1536 ? "Topbar (2nd-row)" : "Topbar", "defaultValue")
  },
  {
    id: "Comfy.Graph.CanvasMenu",
    category: ["LiteGraph", "Canvas", "CanvasMenu"],
    name: "Show graph canvas menu",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.QueueButton.BatchCountLimit",
    name: "Batch count limit",
    tooltip: "The maximum number of tasks added to the queue at one button click",
    type: "number",
    defaultValue: 100,
    versionAdded: "1.3.5"
  },
  {
    id: "Comfy.Keybinding.UnsetBindings",
    name: "Keybindings unset by the user",
    type: "hidden",
    defaultValue: [],
    versionAdded: "1.3.7",
    versionModified: "1.7.3",
    migrateDeprecatedValue: /* @__PURE__ */ __name((value) => {
      return value.map((keybinding) => {
        if (keybinding["targetSelector"] === "#graph-canvas") {
          keybinding["targetElementId"] = "graph-canvas";
        }
        return keybinding;
      });
    }, "migrateDeprecatedValue")
  },
  {
    id: "Comfy.Keybinding.NewBindings",
    name: "Keybindings set by the user",
    type: "hidden",
    defaultValue: [],
    versionAdded: "1.3.7"
  },
  {
    id: "Comfy.Extension.Disabled",
    name: "Disabled extension names",
    type: "hidden",
    defaultValue: [],
    versionAdded: "1.3.11"
  },
  {
    id: "Comfy.LinkRenderMode",
    category: ["LiteGraph", "Graph", "LinkRenderMode"],
    name: "Link Render Mode",
    defaultValue: 2,
    type: "combo",
    options: [
      { value: LiteGraph.STRAIGHT_LINK, text: "Straight" },
      { value: LiteGraph.LINEAR_LINK, text: "Linear" },
      { value: LiteGraph.SPLINE_LINK, text: "Spline" },
      { value: LiteGraph.HIDDEN_LINK, text: "Hidden" }
    ]
  },
  {
    id: "Comfy.Node.AutoSnapLinkToSlot",
    category: ["LiteGraph", "Node", "AutoSnapLinkToSlot"],
    name: "Auto snap link to node slot",
    tooltip: "When dragging a link over a node, the link automatically snap to a viable input slot on the node",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.29"
  },
  {
    id: "Comfy.Node.SnapHighlightsNode",
    category: ["LiteGraph", "Node", "SnapHighlightsNode"],
    name: "Snap highlights node",
    tooltip: "When dragging a link over a node with viable input slot, highlight the node",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.29"
  },
  {
    id: "Comfy.Node.BypassAllLinksOnDelete",
    category: ["LiteGraph", "Node", "BypassAllLinksOnDelete"],
    name: "Keep all links when deleting nodes",
    tooltip: "When deleting a node, attempt to reconnect all of its input and output links (bypassing the deleted node)",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.40"
  },
  {
    id: "Comfy.Node.MiddleClickRerouteNode",
    category: ["LiteGraph", "Node", "MiddleClickRerouteNode"],
    name: "Middle-click creates a new Reroute node",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.3.42"
  },
  {
    id: "Comfy.Graph.LinkMarkers",
    category: ["LiteGraph", "Link", "LinkMarkers"],
    name: "Link midpoint markers",
    defaultValue: LinkMarkerShape.Circle,
    type: "combo",
    options: [
      { value: LinkMarkerShape.None, text: "None" },
      { value: LinkMarkerShape.Circle, text: "Circle" },
      { value: LinkMarkerShape.Arrow, text: "Arrow" }
    ],
    versionAdded: "1.3.42"
  },
  {
    id: "Comfy.DOMClippingEnabled",
    category: ["LiteGraph", "Node", "DOMClippingEnabled"],
    name: "Enable DOM element clipping (enabling may reduce performance)",
    type: "boolean",
    defaultValue: true
  },
  {
    id: "Comfy.Graph.CtrlShiftZoom",
    category: ["LiteGraph", "Canvas", "CtrlShiftZoom"],
    name: "Enable fast-zoom shortcut (Ctrl + Shift + Drag)",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.4.0"
  },
  {
    id: "Comfy.Pointer.ClickDrift",
    category: ["LiteGraph", "Pointer", "ClickDrift"],
    name: "Pointer click drift (maximum distance)",
    tooltip: "If the pointer moves more than this distance while holding a button down, it is considered dragging (rather than clicking).\n\nHelps prevent objects from being unintentionally nudged if the pointer is moved whilst clicking.",
    experimental: true,
    type: "slider",
    attrs: {
      min: 0,
      max: 20,
      step: 1
    },
    defaultValue: 6,
    versionAdded: "1.4.3"
  },
  {
    id: "Comfy.Pointer.ClickBufferTime",
    category: ["LiteGraph", "Pointer", "ClickBufferTime"],
    name: "Pointer click drift delay",
    tooltip: "After pressing a pointer button down, this is the maximum time (in milliseconds) that pointer movement can be ignored for.\n\nHelps prevent objects from being unintentionally nudged if the pointer is moved whilst clicking.",
    experimental: true,
    type: "slider",
    attrs: {
      min: 0,
      max: 1e3,
      step: 25
    },
    defaultValue: 150,
    versionAdded: "1.4.3"
  },
  {
    id: "Comfy.Pointer.DoubleClickTime",
    category: ["LiteGraph", "Pointer", "DoubleClickTime"],
    name: "Double click interval (maximum)",
    tooltip: "The maximum time in milliseconds between the two clicks of a double-click.  Increasing this value may assist if double-clicks are sometimes not registered.",
    type: "slider",
    attrs: {
      min: 100,
      max: 1e3,
      step: 50
    },
    defaultValue: 300,
    versionAdded: "1.4.3"
  },
  {
    id: "Comfy.SnapToGrid.GridSize",
    category: ["LiteGraph", "Canvas", "GridSize"],
    name: "Snap to grid size",
    type: "slider",
    attrs: {
      min: 1,
      max: 500
    },
    tooltip: "When dragging and resizing nodes while holding shift they will be aligned to the grid, this controls the size of that grid.",
    defaultValue: LiteGraph.CANVAS_GRID_SIZE
  },
  // Keep the 'pysssss.SnapToGrid' setting id so we don't need to migrate setting values.
  // Using a new setting id can cause existing users to lose their existing settings.
  {
    id: "pysssss.SnapToGrid",
    category: ["LiteGraph", "Canvas", "AlwaysSnapToGrid"],
    name: "Always snap to grid",
    type: "boolean",
    defaultValue: false,
    versionAdded: "1.3.13"
  },
  {
    id: "Comfy.Server.ServerConfigValues",
    name: "Server config values for frontend display",
    tooltip: "Server config values used for frontend display only",
    type: "hidden",
    // Mapping from server config id to value.
    defaultValue: {},
    versionAdded: "1.4.8"
  },
  {
    id: "Comfy.Server.LaunchArgs",
    name: "Server launch arguments",
    tooltip: "These are the actual arguments that are passed to the server when it is launched.",
    type: "hidden",
    defaultValue: {},
    versionAdded: "1.4.8"
  },
  {
    id: "Comfy.Queue.MaxHistoryItems",
    name: "Queue history size",
    tooltip: "The maximum number of tasks that show in the queue history.",
    type: "slider",
    attrs: {
      min: 2,
      max: 256,
      step: 2
    },
    defaultValue: 64,
    versionAdded: "1.4.12"
  },
  {
    id: "LiteGraph.Canvas.MaximumFps",
    name: "Maximum FPS",
    tooltip: "The maximum frames per second that the canvas is allowed to render. Caps GPU usage at the cost of smoothness. If 0, the screen refresh rate is used. Default: 0",
    type: "slider",
    attrs: {
      min: 0,
      max: 120
    },
    defaultValue: 0,
    versionAdded: "1.5.1"
  },
  {
    id: "Comfy.EnableWorkflowViewRestore",
    category: ["Comfy", "Workflow", "EnableWorkflowViewRestore"],
    name: "Save and restore canvas position and zoom level in workflows",
    type: "boolean",
    defaultValue: true,
    versionModified: "1.5.4"
  },
  {
    id: "Comfy.Workflow.ConfirmDelete",
    name: "Show confirmation when deleting workflows",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.5.6"
  },
  {
    id: "Comfy.ColorPalette",
    name: "The active color palette id",
    type: "hidden",
    defaultValue: "dark",
    versionModified: "1.6.7",
    migrateDeprecatedValue(value) {
      return value.startsWith("custom_") ? value.replace("custom_", "") : value;
    }
  },
  {
    id: "Comfy.CustomColorPalettes",
    name: "Custom color palettes",
    type: "hidden",
    defaultValue: {},
    versionModified: "1.6.7"
  },
  {
    id: "Comfy.WidgetControlMode",
    category: ["Comfy", "Node Widget", "WidgetControlMode"],
    name: "Widget control mode",
    tooltip: "Controls when widget values are updated (randomize/increment/decrement), either before the prompt is queued or after.",
    type: "combo",
    defaultValue: "after",
    options: ["before", "after"],
    versionModified: "1.6.10"
  },
  {
    id: "Comfy.TutorialCompleted",
    name: "Tutorial completed",
    type: "hidden",
    defaultValue: false,
    versionAdded: "1.8.7"
  },
  {
    id: "Comfy.InstalledVersion",
    name: "The frontend version that was running when the user first installed ComfyUI",
    type: "hidden",
    defaultValue: null,
    versionAdded: "1.24.0"
  },
  {
    id: "LiteGraph.ContextMenu.Scaling",
    name: "Scale node combo widget menus (lists) when zoomed in",
    defaultValue: false,
    type: "boolean",
    versionAdded: "1.8.8"
  },
  {
    id: "LiteGraph.Canvas.LowQualityRenderingZoomThreshold",
    name: "Low quality rendering zoom threshold",
    tooltip: "Render low quality shapes when zoomed out",
    type: "slider",
    attrs: {
      min: 0.1,
      max: 1,
      step: 0.01
    },
    defaultValue: 0.6,
    versionAdded: "1.9.1"
  },
  {
    id: "Comfy.Canvas.NavigationMode",
    category: ["LiteGraph", "Canvas", "CanvasNavigationMode"],
    name: "Canvas Navigation Mode",
    defaultValue: "legacy",
    type: "combo",
    options: [
      { value: "standard", text: "Standard (New)" },
      { value: "legacy", text: "Left-Click Pan (Legacy)" }
    ],
    versionAdded: "1.25.0",
    defaultsByInstallVersion: {
      "1.25.0": "standard"
    }
  },
  {
    id: "Comfy.Canvas.SelectionToolbox",
    category: ["LiteGraph", "Canvas", "SelectionToolbox"],
    name: "Show selection toolbox",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.10.5"
  },
  {
    id: "LiteGraph.Reroute.SplineOffset",
    name: "Reroute spline offset",
    tooltip: "The bezier control point offset from the reroute centre point",
    type: "slider",
    defaultValue: 20,
    attrs: {
      min: 0,
      max: 400
    },
    versionAdded: "1.15.7"
  },
  {
    id: "Comfy.Toast.DisableReconnectingToast",
    name: "Disable toasts when reconnecting or reconnected",
    type: "hidden",
    defaultValue: false,
    versionAdded: "1.15.12"
  },
  {
    id: "Comfy.Minimap.Visible",
    name: "Display minimap on canvas",
    type: "hidden",
    defaultValue: true,
    versionAdded: "1.25.0"
  },
  {
    id: "Comfy.Workflow.AutoSaveDelay",
    name: "Auto Save Delay (ms)",
    defaultValue: 1e3,
    type: "number",
    tooltip: 'Only applies if Auto Save is set to "after delay".',
    versionAdded: "1.16.0"
  },
  {
    id: "Comfy.Workflow.AutoSave",
    name: "Auto Save",
    type: "combo",
    options: ["off", "after delay"],
    // Room for other options like on focus change, tab change, window change
    defaultValue: "off",
    // Popular requst by users (https://github.com/Comfy-Org/ComfyUI_frontend/issues/1584#issuecomment-2536610154)
    versionAdded: "1.16.0"
  },
  {
    id: "Comfy.Workflow.Persist",
    name: "Persist workflow state and restore on page (re)load",
    type: "boolean",
    defaultValue: true,
    versionAdded: "1.16.1"
  },
  {
    id: "LiteGraph.Node.DefaultPadding",
    name: "Always shrink new nodes",
    tooltip: "Resize nodes to the smallest possible size when created. When disabled, a newly added node will be widened slightly to show widget values.",
    type: "boolean",
    defaultValue: false,
    versionAdded: "1.18.0"
  },
  {
    id: "Comfy.Canvas.BackgroundImage",
    category: ["Appearance", "Canvas", "Background"],
    name: "Canvas background image",
    type: "backgroundImage",
    tooltip: 'Image URL for the canvas background. You can right-click an image in the outputs panel and select "Set as Background" to use it, or upload your own image using the upload button.',
    defaultValue: "",
    versionAdded: "1.20.4",
    versionModified: "1.20.5"
  },
  // Release data stored in settings
  {
    id: "Comfy.Release.Version",
    name: "Last seen release version",
    type: "hidden",
    defaultValue: ""
  },
  {
    id: "Comfy.Release.Status",
    name: "Release status",
    type: "hidden",
    defaultValue: "skipped"
  },
  {
    id: "Comfy.Release.Timestamp",
    name: "Release seen timestamp",
    type: "hidden",
    defaultValue: 0
  }
];
let pendingCallbacks = [];
let isNewUserDetermined = false;
let isNewUserCached = null;
const newUserService = /* @__PURE__ */ __name(() => {
  function checkIsNewUser(settingStore) {
    const isNewUserSettings = Object.keys(settingStore.settingValues).length === 0 || !settingStore.get("Comfy.TutorialCompleted");
    const hasNoWorkflow = !localStorage.getItem("workflow");
    const hasNoPreviousWorkflow = !localStorage.getItem(
      "Comfy.PreviousWorkflow"
    );
    return isNewUserSettings && hasNoWorkflow && hasNoPreviousWorkflow;
  }
  __name(checkIsNewUser, "checkIsNewUser");
  async function registerInitCallback(callback) {
    if (isNewUserDetermined) {
      if (isNewUserCached) {
        try {
          await callback();
        } catch (error) {
          console.error("New user initialization callback failed:", error);
        }
      }
    } else {
      pendingCallbacks.push(callback);
    }
  }
  __name(registerInitCallback, "registerInitCallback");
  async function initializeIfNewUser(settingStore) {
    if (isNewUserDetermined) return;
    isNewUserCached = checkIsNewUser(settingStore);
    isNewUserDetermined = true;
    if (!isNewUserCached) {
      pendingCallbacks = [];
      return;
    }
    await settingStore.set(
      "Comfy.InstalledVersion",
      "1.26.1"
    );
    for (const callback of pendingCallbacks) {
      try {
        await callback();
      } catch (error) {
        console.error("New user initialization callback failed:", error);
      }
    }
    pendingCallbacks = [];
  }
  __name(initializeIfNewUser, "initializeIfNewUser");
  function isNewUser() {
    return isNewUserDetermined ? isNewUserCached : null;
  }
  __name(isNewUser, "isNewUser");
  return {
    registerInitCallback,
    initializeIfNewUser,
    isNewUser
  };
}, "newUserService");
const _hoisted_1$c = { class: "absolute top-0 left-0 w-auto max-w-full pointer-events-auto" };
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "GraphCanvas",
  emits: ["ready"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const canvasRef = ref(null);
    const settingStore = useSettingStore();
    const nodeDefStore = useNodeDefStore();
    const workspaceStore = useWorkspaceStore();
    const canvasStore = useCanvasStore();
    const executionStore = useExecutionStore();
    const toastStore = useToastStore();
    const betaMenuEnabled = computed(
      () => settingStore.get("Comfy.UseNewMenu") !== "Disabled"
    );
    const workflowTabsPosition = computed(
      () => settingStore.get("Comfy.Workflow.WorkflowTabsPosition")
    );
    const canvasMenuEnabled = computed(
      () => settingStore.get("Comfy.Graph.CanvasMenu")
    );
    const tooltipEnabled = computed(() => settingStore.get("Comfy.EnableTooltips"));
    const selectionToolboxEnabled = computed(
      () => settingStore.get("Comfy.Canvas.SelectionToolbox")
    );
    const minimapRef = ref();
    const minimapEnabled = computed(() => settingStore.get("Comfy.Minimap.Visible"));
    const minimap = useMinimap();
    watchEffect(() => {
      nodeDefStore.showDeprecated = settingStore.get("Comfy.Node.ShowDeprecated");
    });
    watchEffect(() => {
      nodeDefStore.showExperimental = settingStore.get(
        "Comfy.Node.ShowExperimental"
      );
    });
    watchEffect(() => {
      const spellcheckEnabled = settingStore.get("Comfy.TextareaWidget.Spellcheck");
      const textareas = document.querySelectorAll(
        "textarea.comfy-multiline-input"
      );
      textareas.forEach((textarea) => {
        textarea.spellcheck = spellcheckEnabled;
        textarea.focus();
        textarea.blur();
      });
    });
    watch(
      () => settingStore.get("Comfy.WidgetControlMode"),
      () => {
        if (!canvasStore.canvas) return;
        for (const n of app.graph.nodes) {
          if (!n.widgets) continue;
          for (const w of n.widgets) {
            if (w[IS_CONTROL_WIDGET]) {
              updateControlWidgetLabel(w);
              if (w.linkedWidgets) {
                for (const l of w.linkedWidgets) {
                  updateControlWidgetLabel(l);
                }
              }
            }
          }
        }
        app.graph.setDirtyCanvas(true);
      }
    );
    const colorPaletteService = useColorPaletteService();
    const colorPaletteStore = useColorPaletteStore();
    watch(
      [() => canvasStore.canvas, () => settingStore.get("Comfy.ColorPalette")],
      async ([canvas, currentPaletteId]) => {
        if (!canvas) return;
        await colorPaletteService.loadColorPalette(currentPaletteId);
      }
    );
    watch(
      () => settingStore.get("Comfy.Canvas.BackgroundImage"),
      async () => {
        if (!canvasStore.canvas) return;
        const currentPaletteId = colorPaletteStore.activePaletteId;
        if (!currentPaletteId) return;
        await colorPaletteService.loadColorPalette(currentPaletteId);
        canvasStore.canvas.setDirty(false, true);
      }
    );
    watch(
      () => colorPaletteStore.activePaletteId,
      async (newValue) => {
        await settingStore.set("Comfy.ColorPalette", newValue);
      }
    );
    watch(
      () => [executionStore.nodeLocationProgressStates, canvasStore.canvas],
      ([nodeLocationProgressStates, canvas]) => {
        if (!canvas?.graph) return;
        for (const node of canvas.graph.nodes) {
          const nodeLocatorId = useWorkflowStore().nodeIdToNodeLocatorId(node.id);
          const progressState = nodeLocationProgressStates[nodeLocatorId];
          if (progressState && progressState.state === "running") {
            node.progress = progressState.value / progressState.max;
          } else {
            node.progress = void 0;
          }
        }
        canvas.graph.setDirtyCanvas(true, false);
      },
      { deep: true }
    );
    watch(
      () => executionStore.lastNodeErrors,
      (lastNodeErrors) => {
        const removeSlotError = /* @__PURE__ */ __name((node) => {
          for (const slot of node.inputs) {
            delete slot.hasErrors;
          }
          for (const slot of node.outputs) {
            delete slot.hasErrors;
          }
        }, "removeSlotError");
        for (const node of app.graph.nodes) {
          removeSlotError(node);
          const nodeErrors = lastNodeErrors?.[node.id];
          if (!nodeErrors) continue;
          for (const error of nodeErrors.errors) {
            if (error.extra_info && error.extra_info.input_name) {
              const inputIndex = node.findInputSlot(error.extra_info.input_name);
              if (inputIndex !== -1) {
                node.inputs[inputIndex].hasErrors = true;
              }
            }
          }
        }
        app.canvas.draw(true, true);
      }
    );
    useEventListener(
      canvasRef,
      "litegraph:no-items-selected",
      () => {
        toastStore.add({
          severity: "warn",
          summary: t$2("toastMessages.nothingSelected"),
          life: 2e3
        });
      },
      { passive: true }
    );
    const loadCustomNodesI18n = /* @__PURE__ */ __name(async () => {
      try {
        const i18nData = await api.getCustomNodesI18n();
        Object.entries(i18nData).forEach(([locale, message]) => {
          i18n.global.mergeLocaleMessage(locale, message);
        });
      } catch (error) {
        console.error("Failed to load custom nodes i18n", error);
      }
    }, "loadCustomNodesI18n");
    const comfyAppReady = ref(false);
    const workflowPersistence = useWorkflowPersistence();
    useCanvasDrop(canvasRef);
    useLitegraphSettings();
    useNodeBadge();
    onMounted(async () => {
      useGlobalLitegraph();
      useContextMenuTranslation();
      useCopy();
      usePaste();
      useWorkflowAutoSave();
      app.vueAppReady = true;
      workspaceStore.spinner = true;
      ChangeTracker.init();
      await loadCustomNodesI18n();
      try {
        await settingStore.loadSettingValues();
      } catch (error) {
        if (error instanceof UnauthorizedError) {
          console.log(
            "Failed loading user settings, user unauthorized, cleaning local Comfy.userId"
          );
          localStorage.removeItem("Comfy.userId");
          localStorage.removeItem("Comfy.userName");
          window.location.reload();
        } else {
          throw error;
        }
      }
      CORE_SETTINGS.forEach((setting) => {
        settingStore.addSetting(setting);
      });
      await newUserService().initializeIfNewUser(settingStore);
      await app.setup(canvasRef.value);
      canvasStore.canvas = app.canvas;
      canvasStore.canvas.render_canvas_border = false;
      workspaceStore.spinner = false;
      window.app = app;
      window.graph = app.graph;
      comfyAppReady.value = true;
      app.canvas.onSelectionChange = useChainCallback(
        app.canvas.onSelectionChange,
        () => canvasStore.updateSelectedItems()
      );
      colorPaletteStore.customPalettes = settingStore.get(
        "Comfy.CustomColorPalettes"
      );
      await workflowPersistence.restorePreviousWorkflow();
      workflowPersistence.restoreWorkflowTabsState();
      const { useReleaseStore: useReleaseStore2 } = await __vitePreload(async () => {
        const { useReleaseStore: useReleaseStore3 } = await Promise.resolve().then(() => releaseStore);
        return { useReleaseStore: useReleaseStore3 };
      }, true ? void 0 : void 0, import.meta.url);
      const releaseStore$1 = useReleaseStore2();
      void releaseStore$1.initialize();
      watch(
        () => settingStore.get("Comfy.Locale"),
        async () => {
          await useCommandStore().execute("Comfy.RefreshNodeDefinitions");
          await useWorkflowService().reloadCurrentWorkflow();
        }
      );
      whenever(
        () => minimapRef.value,
        (ref2) => {
          minimap.setMinimapRef(ref2);
        }
      );
      whenever(
        () => useCanvasStore().canvas,
        (canvas) => {
          useEventListener(canvas.canvas, "litegraph:set-graph", () => {
            useWorkflowStore().updateActiveGraph();
          });
        },
        { immediate: true }
      );
      emit("ready");
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        comfyAppReady.value && betaMenuEnabled.value && !unref(workspaceStore).focusMode ? (openBlock(), createBlock(LiteGraphCanvasSplitterOverlay, { key: 0 }, {
          "side-bar-panel": withCtx(() => [
            createVNode(SideToolbar)
          ]),
          "bottom-panel": withCtx(() => [
            createVNode(_sfc_main$O)
          ]),
          "graph-canvas-panel": withCtx(() => [
            createElementVNode("div", _hoisted_1$c, [
              workflowTabsPosition.value === "Topbar (2nd-row)" ? (openBlock(), createBlock(SecondRowWorkflowTabs, { key: 0 })) : createCommentVNode("", true)
            ]),
            canvasMenuEnabled.value ? (openBlock(), createBlock(GraphCanvasMenu, {
              key: 0,
              class: "pointer-events-auto"
            })) : createCommentVNode("", true),
            comfyAppReady.value && minimapEnabled.value ? (openBlock(), createBlock(MiniMap, {
              key: 1,
              ref_key: "minimapRef",
              ref: minimapRef,
              class: "pointer-events-auto"
            }, null, 512)) : createCommentVNode("", true)
          ]),
          _: 1
        })) : createCommentVNode("", true),
        !betaMenuEnabled.value && canvasMenuEnabled.value ? (openBlock(), createBlock(GraphCanvasMenu, { key: 1 })) : createCommentVNode("", true),
        createElementVNode("canvas", {
          id: "graph-canvas",
          ref_key: "canvasRef",
          ref: canvasRef,
          tabindex: "1",
          class: "w-full h-full touch-none"
        }, null, 512),
        tooltipEnabled.value ? (openBlock(), createBlock(NodeTooltip, { key: 2 })) : createCommentVNode("", true),
        createVNode(_sfc_main$q),
        comfyAppReady.value ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
          createVNode(TitleEditor),
          selectionToolboxEnabled.value ? (openBlock(), createBlock(SelectionOverlay, { key: 0 }, {
            default: withCtx(() => [
              createVNode(SelectionToolbox)
            ]),
            _: 1
          })) : createCommentVNode("", true),
          createVNode(_sfc_main$M)
        ], 64)) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "GlobalToast",
  setup(__props) {
    const toast = useToast();
    const toastStore = useToastStore();
    const settingStore = useSettingStore();
    watch(
      () => toastStore.messagesToAdd,
      (newMessages) => {
        if (newMessages.length === 0) {
          return;
        }
        newMessages.forEach((message) => {
          toast.add(message);
        });
        toastStore.messagesToAdd = [];
      },
      { deep: true }
    );
    watch(
      () => toastStore.messagesToRemove,
      (messagesToRemove) => {
        if (messagesToRemove.length === 0) {
          return;
        }
        messagesToRemove.forEach((message) => {
          toast.remove(message);
        });
        toastStore.messagesToRemove = [];
      },
      { deep: true }
    );
    watch(
      () => toastStore.removeAllRequested,
      (requested) => {
        if (requested) {
          toast.removeAllGroups();
          toastStore.removeAllRequested = false;
        }
      }
    );
    function updateToastPosition() {
      const styleElement = document.getElementById("dynamic-toast-style") || createStyleElement();
      const rect = document.querySelector(".graph-canvas-container")?.getBoundingClientRect();
      if (!rect) return;
      styleElement.textContent = `
    .p-toast.p-component.p-toast-top-right {
      top: ${rect.top + 20}px !important;
      right: ${window.innerWidth - (rect.left + rect.width) + 20}px !important;
    }
  `;
    }
    __name(updateToastPosition, "updateToastPosition");
    function createStyleElement() {
      const style = document.createElement("style");
      style.id = "dynamic-toast-style";
      document.head.appendChild(style);
      return style;
    }
    __name(createStyleElement, "createStyleElement");
    watch(
      () => settingStore.get("Comfy.UseNewMenu"),
      () => nextTick(updateToastPosition),
      { immediate: true }
    );
    watch(
      () => settingStore.get("Comfy.Sidebar.Location"),
      () => nextTick(updateToastPosition),
      { immediate: true }
    );
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Toast));
    };
  }
});
const _hoisted_1$b = { class: "flex flex-col items-start flex-auto" };
const _hoisted_2$5 = { class: "font-medium text-lg my-4" };
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "RerouteMigrationToast",
  setup(__props) {
    const { t: t2 } = useI18n();
    const toast = useToast$1();
    const workflowStore = useWorkflowStore();
    const migrateToLitegraphReroute = /* @__PURE__ */ __name(async () => {
      const workflowJSON = app.graph.serialize();
      const migratedWorkflowJSON = migrateLegacyRerouteNodes(workflowJSON);
      await app.loadGraphData(
        migratedWorkflowJSON,
        false,
        false,
        workflowStore.activeWorkflow
      );
      toast.removeGroup("reroute-migration");
    }, "migrateToLitegraphReroute");
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Toast), { group: "reroute-migration" }, {
        message: withCtx(() => [
          createElementVNode("div", _hoisted_1$b, [
            createElementVNode("div", _hoisted_2$5, toDisplayString(unref(t2)("toastMessages.migrateToLitegraphReroute")), 1),
            createVNode(unref(Button), {
              class: "self-end",
              size: "small",
              label: unref(t2)("g.migrate"),
              severity: "warn",
              onClick: migrateToLitegraphReroute
            }, null, 8, ["label"])
          ])
        ]),
        _: 1
      });
    };
  }
});
const _hoisted_1$a = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$2(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$a, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "M6 4v16m4-16l10 8l-10 8z"
    }, null, -1)
  ]));
}
__name(render$2, "render$2");
const __unplugin_components_3 = markRaw({ name: "lucide-step-forward", render: render$2 });
const _hoisted_1$9 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _cache[0] || (_cache[0] = [
    createElementVNode("path", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2",
      d: "m13 19l9-7l-9-7zM2 19l9-7l-9-7z"
    }, null, -1)
  ]));
}
__name(render$1, "render$1");
const __unplugin_components_2 = markRaw({ name: "lucide-fast-forward", render: render$1 });
const _hoisted_1$8 = {
  viewBox: "0 0 24 24",
  width: "1.2em",
  height: "1.2em"
};
function render(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$8, _cache[0] || (_cache[0] = [
    createElementVNode("g", {
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "2"
    }, [
      createElementVNode("path", { d: "M16 12H3m13 6H3m7-12H3m18 12V8a2 2 0 0 0-2-2h-5" }),
      createElementVNode("path", { d: "m16 8l-2-2l2-2" })
    ], -1)
  ]));
}
__name(render, "render");
const __unplugin_components_0 = markRaw({ name: "lucide-list-start", render });
const _hoisted_1$7 = ["aria-label"];
const minQueueCount = 1;
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "BatchCountEdit",
  setup(__props) {
    const queueSettingsStore = useQueueSettingsStore();
    const { batchCount } = storeToRefs(queueSettingsStore);
    const settingStore = useSettingStore();
    const maxQueueCount = computed(
      () => settingStore.get("Comfy.QueueButton.BatchCountLimit")
    );
    const handleClick = /* @__PURE__ */ __name((increment) => {
      let newCount;
      if (increment) {
        const originalCount = batchCount.value - 1;
        newCount = Math.min(originalCount * 2, maxQueueCount.value);
      } else {
        const originalCount = batchCount.value + 1;
        newCount = Math.floor(originalCount / 2);
      }
      batchCount.value = newCount;
    }, "handleClick");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return withDirectives((openBlock(), createElementBlock("div", {
        class: "batch-count",
        "aria-label": _ctx.$t("menu.batchCount")
      }, [
        createVNode(unref(InputNumber), {
          modelValue: unref(batchCount),
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(batchCount) ? batchCount.value = $event : null),
          class: "w-14",
          min: minQueueCount,
          max: maxQueueCount.value,
          fluid: "",
          "show-buttons": "",
          pt: {
            incrementButton: {
              class: "w-6",
              onmousedown: /* @__PURE__ */ __name(() => {
                handleClick(true);
              }, "onmousedown")
            },
            decrementButton: {
              class: "w-6",
              onmousedown: /* @__PURE__ */ __name(() => {
                handleClick(false);
              }, "onmousedown")
            }
          }
        }, null, 8, ["modelValue", "max", "pt"])
      ], 8, _hoisted_1$7)), [
        [
          _directive_tooltip,
          {
            value: _ctx.$t("menu.batchCount"),
            showDelay: 600
          },
          void 0,
          { bottom: true }
        ]
      ]);
    };
  }
});
const BatchCountEdit = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["__scopeId", "data-v-78201e86"]]);
const _hoisted_1$6 = { class: "queue-button-group flex" };
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ComfyQueueButton",
  setup(__props) {
    const workspaceStore = useWorkspaceStore();
    const queueCountStore = storeToRefs(useQueuePendingTaskCountStore());
    const { mode: queueMode } = storeToRefs(useQueueSettingsStore());
    const { t: t2 } = useI18n();
    const queueModeMenuItemLookup = computed(() => ({
      disabled: {
        key: "disabled",
        label: t2("menu.run"),
        tooltip: t2("menu.disabledTooltip"),
        command: /* @__PURE__ */ __name(() => {
          queueMode.value = "disabled";
        }, "command")
      },
      instant: {
        key: "instant",
        label: `${t2("menu.run")} (${t2("menu.instant")})`,
        tooltip: t2("menu.instantTooltip"),
        command: /* @__PURE__ */ __name(() => {
          queueMode.value = "instant";
        }, "command")
      },
      change: {
        key: "change",
        label: `${t2("menu.run")} (${t2("menu.onChange")})`,
        tooltip: t2("menu.onChangeTooltip"),
        command: /* @__PURE__ */ __name(() => {
          queueMode.value = "change";
        }, "command")
      }
    }));
    const activeQueueModeMenuItem = computed(
      () => queueModeMenuItemLookup.value[queueMode.value]
    );
    const queueModeMenuItems = computed(
      () => Object.values(queueModeMenuItemLookup.value)
    );
    const executingPrompt = computed(() => !!queueCountStore.count.value);
    const hasPendingTasks = computed(
      () => queueCountStore.count.value > 1 || queueMode.value !== "disabled"
    );
    const commandStore = useCommandStore();
    const queuePrompt = /* @__PURE__ */ __name(async (e) => {
      const commandId = "shiftKey" in e && e.shiftKey ? "Comfy.QueuePromptFront" : "Comfy.QueuePrompt";
      await commandStore.execute(commandId);
    }, "queuePrompt");
    return (_ctx, _cache) => {
      const _component_i_lucide58list_start = __unplugin_components_0;
      const _component_i_lucide58play = __unplugin_components_1;
      const _component_i_lucide58fast_forward = __unplugin_components_2;
      const _component_i_lucide58step_forward = __unplugin_components_3;
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        withDirectives((openBlock(), createBlock(unref(SplitButton), {
          class: "comfyui-queue-button",
          label: activeQueueModeMenuItem.value.label,
          severity: "primary",
          size: "small",
          model: queueModeMenuItems.value,
          "data-testid": "queue-button",
          onClick: queuePrompt
        }, {
          icon: withCtx(() => [
            unref(workspaceStore).shiftDown ? (openBlock(), createBlock(_component_i_lucide58list_start, { key: 0 })) : unref(queueMode) === "disabled" ? (openBlock(), createBlock(_component_i_lucide58play, { key: 1 })) : unref(queueMode) === "instant" ? (openBlock(), createBlock(_component_i_lucide58fast_forward, { key: 2 })) : unref(queueMode) === "change" ? (openBlock(), createBlock(_component_i_lucide58step_forward, { key: 3 })) : createCommentVNode("", true)
          ]),
          item: withCtx(({ item }) => [
            withDirectives(createVNode(unref(Button), {
              label: String(item.label),
              icon: item.icon,
              severity: item.key === unref(queueMode) ? "primary" : "secondary",
              size: "small",
              text: ""
            }, null, 8, ["label", "icon", "severity"]), [
              [_directive_tooltip, {
                value: item.tooltip,
                showDelay: 600
              }]
            ])
          ]),
          _: 1
        }, 8, ["label", "model"])), [
          [
            _directive_tooltip,
            {
              value: unref(workspaceStore).shiftDown ? _ctx.$t("menu.runWorkflowFront") : _ctx.$t("menu.runWorkflow"),
              showDelay: 600
            },
            void 0,
            { bottom: true }
          ]
        ]),
        createVNode(BatchCountEdit),
        createVNode(unref(ButtonGroup), { class: "execution-actions flex flex-nowrap" }, {
          default: withCtx(() => [
            withDirectives(createVNode(unref(Button), {
              icon: "pi pi-times",
              severity: executingPrompt.value ? "danger" : "secondary",
              disabled: !executingPrompt.value,
              text: "",
              "aria-label": _ctx.$t("menu.interrupt"),
              onClick: _cache[0] || (_cache[0] = () => unref(commandStore).execute("Comfy.Interrupt"))
            }, null, 8, ["severity", "disabled", "aria-label"]), [
              [
                _directive_tooltip,
                {
                  value: _ctx.$t("menu.interrupt"),
                  showDelay: 600
                },
                void 0,
                { bottom: true }
              ]
            ]),
            withDirectives(createVNode(unref(Button), {
              icon: "pi pi-stop",
              severity: hasPendingTasks.value ? "danger" : "secondary",
              disabled: !hasPendingTasks.value,
              text: "",
              "aria-label": _ctx.$t("sideToolbar.queueTab.clearPendingTasks"),
              onClick: _cache[1] || (_cache[1] = () => {
                if (unref(queueCountStore).count.value > 1) {
                  unref(commandStore).execute("Comfy.ClearPendingTasks");
                }
                queueMode.value = "disabled";
              })
            }, null, 8, ["severity", "disabled", "aria-label"]), [
              [
                _directive_tooltip,
                {
                  value: _ctx.$t("sideToolbar.queueTab.clearPendingTasks"),
                  showDelay: 600
                },
                void 0,
                { bottom: true }
              ]
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
});
const ComfyQueueButton = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-43776fb9"]]);
const overlapThreshold = 20;
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "ComfyActionbar",
  setup(__props) {
    const settingsStore = useSettingStore();
    const position = computed(() => settingsStore.get("Comfy.UseNewMenu"));
    const visible = computed(() => position.value !== "Disabled");
    const topMenuRef = inject("topMenuRef");
    const panelRef = ref(null);
    const dragHandleRef = ref(null);
    const isDocked = useLocalStorage("Comfy.MenuPosition.Docked", false);
    const storedPosition = useLocalStorage("Comfy.MenuPosition.Floating", {
      x: 0,
      y: 0
    });
    const {
      x,
      y,
      style,
      isDragging
    } = useDraggable(panelRef, {
      initialValue: { x: 0, y: 0 },
      handle: dragHandleRef,
      containerElement: document.body,
      onMove: /* @__PURE__ */ __name((event) => {
        if (position.value === "Top") {
          const minY = topMenuRef?.value?.getBoundingClientRect().top ?? 40;
          if (event.y < minY) {
            event.y = minY;
          }
        }
      }, "onMove")
    });
    watchDebounced(
      [x, y],
      ([newX, newY]) => {
        storedPosition.value = { x: newX, y: newY };
      },
      { debounce: 300 }
    );
    const setInitialPosition = /* @__PURE__ */ __name(() => {
      if (panelRef.value) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const menuWidth = panelRef.value.offsetWidth;
        const menuHeight = panelRef.value.offsetHeight;
        if (menuWidth === 0 || menuHeight === 0) {
          return;
        }
        if (storedPosition.value.x !== 0 || storedPosition.value.y !== 0) {
          x.value = lodashExports.clamp(storedPosition.value.x, 0, screenWidth - menuWidth);
          y.value = lodashExports.clamp(storedPosition.value.y, 0, screenHeight - menuHeight);
          captureLastDragState();
          return;
        }
        if (x.value === 0 && y.value === 0) {
          x.value = lodashExports.clamp((screenWidth - menuWidth) / 2, 0, screenWidth - menuWidth);
          y.value = lodashExports.clamp(
            screenHeight - menuHeight - 10,
            0,
            screenHeight - menuHeight
          );
          captureLastDragState();
        }
      }
    }, "setInitialPosition");
    onMounted(setInitialPosition);
    watch(visible, async (newVisible) => {
      if (newVisible) {
        await nextTick(setInitialPosition);
      }
    });
    const lastDragState = ref({
      x: x.value,
      y: y.value,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight
    });
    const captureLastDragState = /* @__PURE__ */ __name(() => {
      lastDragState.value = {
        x: x.value,
        y: y.value,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight
      };
    }, "captureLastDragState");
    watch(
      isDragging,
      (newIsDragging) => {
        if (!newIsDragging) {
          captureLastDragState();
        }
      },
      { immediate: true }
    );
    const adjustMenuPosition = /* @__PURE__ */ __name(() => {
      if (panelRef.value) {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        const menuWidth = panelRef.value.offsetWidth;
        const menuHeight = panelRef.value.offsetHeight;
        const distanceLeft = lastDragState.value.x;
        const distanceRight = lastDragState.value.windowWidth - (lastDragState.value.x + menuWidth);
        const distanceTop = lastDragState.value.y;
        const distanceBottom = lastDragState.value.windowHeight - (lastDragState.value.y + menuHeight);
        const distances = [
          { edge: "left", distance: distanceLeft },
          { edge: "right", distance: distanceRight },
          { edge: "top", distance: distanceTop },
          { edge: "bottom", distance: distanceBottom }
        ];
        const closestEdge = distances.reduce(
          (min, curr) => curr.distance < min.distance ? curr : min
        );
        const verticalRatio = lastDragState.value.y / lastDragState.value.windowHeight;
        const horizontalRatio = lastDragState.value.x / lastDragState.value.windowWidth;
        if (closestEdge.edge === "left") {
          x.value = closestEdge.distance;
          y.value = verticalRatio * screenHeight;
        } else if (closestEdge.edge === "right") {
          x.value = screenWidth - menuWidth - closestEdge.distance;
          y.value = verticalRatio * screenHeight;
        } else if (closestEdge.edge === "top") {
          x.value = horizontalRatio * screenWidth;
          y.value = closestEdge.distance;
        } else {
          x.value = horizontalRatio * screenWidth;
          y.value = screenHeight - menuHeight - closestEdge.distance;
        }
        x.value = lodashExports.clamp(x.value, 0, screenWidth - menuWidth);
        y.value = lodashExports.clamp(y.value, 0, screenHeight - menuHeight);
      }
    }, "adjustMenuPosition");
    useEventListener(window, "resize", adjustMenuPosition);
    const topMenuBounds = useElementBounding(topMenuRef);
    const isOverlappingWithTopMenu = computed(() => {
      if (!panelRef.value) {
        return false;
      }
      const { height } = panelRef.value.getBoundingClientRect();
      const actionbarBottom = y.value + height;
      const topMenuBottom = topMenuBounds.bottom.value;
      const overlapPixels = Math.min(actionbarBottom, topMenuBottom) - Math.max(y.value, topMenuBounds.top.value);
      return overlapPixels > overlapThreshold;
    });
    watch(isDragging, (newIsDragging) => {
      if (!newIsDragging) {
        isDocked.value = isOverlappingWithTopMenu.value;
      } else {
        isDocked.value = false;
      }
    });
    const eventBus = useEventBus("topMenu");
    watch([isDragging, isOverlappingWithTopMenu], ([dragging, overlapping]) => {
      eventBus.emit("updateHighlight", {
        isDragging: dragging,
        isOverlapping: overlapping
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(unref(Panel), {
        class: normalizeClass(["actionbar w-fit", { "is-dragging": unref(isDragging), "is-docked": unref(isDocked) }]),
        style: normalizeStyle(unref(style))
      }, {
        default: withCtx(() => [
          createElementVNode("div", {
            ref_key: "panelRef",
            ref: panelRef,
            class: "actionbar-content flex items-center select-none"
          }, [
            createElementVNode("span", {
              ref_key: "dragHandleRef",
              ref: dragHandleRef,
              class: "drag-handle cursor-move mr-2 p-0!"
            }, null, 512),
            createVNode(ComfyQueueButton)
          ], 512)
        ]),
        _: 1
      }, 8, ["style", "class"]);
    };
  }
});
const Actionbar = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-5773a2c7"]]);
const _hoisted_1$5 = { class: "p-breadcrumb-item-label" };
const _hoisted_2$4 = {
  key: 0,
  class: "pi pi-angle-down text-[10px]"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "SubgraphBreadcrumbItem",
  props: {
    item: {},
    isActive: { type: Boolean, default: false }
  },
  setup(__props) {
    const props = __props;
    const { t: t2 } = useI18n();
    const menu = ref();
    const dialogService = useDialogService();
    const workflowStore = useWorkflowStore();
    const workflowService = useWorkflowService();
    const isEditing = ref(false);
    const itemLabel = ref();
    const itemInputRef = ref();
    const wrapperRef = ref();
    const rename = /* @__PURE__ */ __name(async (newName, initialName) => {
      if (newName && newName !== initialName) {
        props.item.updateTitle?.(newName);
        if (workflowStore.activeSubgraph) {
          workflowStore.activeSubgraph.name = newName;
        } else if (workflowStore.activeWorkflow) {
          try {
            await workflowService.renameWorkflow(
              workflowStore.activeWorkflow,
              ComfyWorkflow.basePath + appendJsonExt(newName)
            );
          } catch (error) {
            console.error(error);
            dialogService.showErrorDialog(error);
            return;
          }
        }
        const navigationStore = useSubgraphNavigationStore();
        navigationStore.restoreState(navigationStore.exportState());
      }
    }, "rename");
    const menuItems = computed(() => {
      return [
        {
          label: t2("g.rename"),
          icon: "pi pi-pencil",
          command: /* @__PURE__ */ __name(async () => {
            let initialName = workflowStore.activeSubgraph?.name ?? workflowStore.activeWorkflow?.filename;
            if (!initialName) return;
            const newName = await dialogService.prompt({
              title: t2("g.rename"),
              message: t2("breadcrumbsMenu.enterNewName"),
              defaultValue: initialName
            });
            await rename(newName, initialName);
          }, "command")
        },
        {
          label: t2("breadcrumbsMenu.duplicate"),
          icon: "pi pi-copy",
          command: /* @__PURE__ */ __name(async () => {
            await workflowService.duplicateWorkflow(workflowStore.activeWorkflow);
          }, "command"),
          visible: props.item.key === "root"
        },
        {
          separator: true
        },
        {
          label: t2("breadcrumbsMenu.clearWorkflow"),
          icon: "pi pi-trash",
          command: /* @__PURE__ */ __name(async () => {
            await useCommandStore().execute("Comfy.ClearWorkflow");
          }, "command")
        },
        {
          separator: true,
          visible: props.item.key === "root"
        },
        {
          label: t2("breadcrumbsMenu.deleteWorkflow"),
          icon: "pi pi-times",
          command: /* @__PURE__ */ __name(async () => {
            await workflowService.deleteWorkflow(workflowStore.activeWorkflow);
          }, "command"),
          visible: props.item.key === "root"
        }
      ];
    });
    const handleClick = /* @__PURE__ */ __name((event) => {
      if (isEditing.value) {
        return;
      }
      if (event.detail === 1) {
        if (props.isActive) {
          menu.value?.toggle(event);
        } else {
          props.item.command?.({ item: props.item, originalEvent: event });
        }
      } else if (props.isActive && event.detail === 2) {
        menu.value?.hide();
        event.stopPropagation();
        event.preventDefault();
        isEditing.value = true;
        itemLabel.value = props.item.label;
        void nextTick(() => {
          if (itemInputRef.value?.$el) {
            itemInputRef.value.$el.focus();
            itemInputRef.value.$el.select();
            if (wrapperRef.value) {
              itemInputRef.value.$el.style.width = `${Math.max(200, wrapperRef.value.offsetWidth)}px`;
            }
          }
        });
      }
    }, "handleClick");
    const inputBlur = /* @__PURE__ */ __name(async (doRename) => {
      if (doRename) {
        await rename(itemLabel.value, props.item.label);
      }
      isEditing.value = false;
    }, "inputBlur");
    return (_ctx, _cache) => {
      const _directive_tooltip = resolveDirective("tooltip");
      return openBlock(), createElementBlock(Fragment, null, [
        withDirectives((openBlock(), createElementBlock("a", {
          ref_key: "wrapperRef",
          ref: wrapperRef,
          href: "#",
          class: normalizeClass(["cursor-pointer p-breadcrumb-item-link", {
            "flex items-center gap-1": _ctx.isActive,
            "p-breadcrumb-item-link-menu-visible": menu.value?.overlayVisible,
            "p-breadcrumb-item-link-icon-visible": _ctx.isActive
          }]),
          onClick: handleClick
        }, [
          createElementVNode("span", _hoisted_1$5, toDisplayString(_ctx.item.label), 1),
          _ctx.isActive ? (openBlock(), createElementBlock("i", _hoisted_2$4)) : createCommentVNode("", true)
        ], 2)), [
          [
            _directive_tooltip,
            {
              value: _ctx.item.label,
              showDelay: 512
            },
            void 0,
            { bottom: true }
          ]
        ]),
        _ctx.isActive ? (openBlock(), createBlock(unref(Menu), {
          key: 0,
          ref_key: "menu",
          ref: menu,
          model: menuItems.value,
          popup: true,
          pt: {
            root: {
              style: "background-color: var(--comfy-menu-secondary-bg)"
            },
            itemLink: {
              class: "py-2"
            }
          }
        }, null, 8, ["model"])) : createCommentVNode("", true),
        isEditing.value ? (openBlock(), createBlock(unref(InputText), {
          key: 1,
          ref_key: "itemInputRef",
          ref: itemInputRef,
          modelValue: itemLabel.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => itemLabel.value = $event),
          class: "fixed z-[10000] text-[.8rem] px-2 py-2",
          onBlur: _cache[1] || (_cache[1] = ($event) => inputBlur(true)),
          onClick: _cache[2] || (_cache[2] = withModifiers(() => {
          }, ["stop"])),
          onKeydown: [
            _cache[3] || (_cache[3] = withKeys(($event) => inputBlur(true), ["enter"])),
            _cache[4] || (_cache[4] = withKeys(($event) => inputBlur(false), ["esc"]))
          ]
        }, null, 8, ["modelValue"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const SubgraphBreadcrumbItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-42fecfc7"]]);
const MIN_WIDTH = 28;
const ITEM_GAP = 8;
const ITEM_PADDING = 8;
const ICON_WIDTH = 20;
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "SubgraphBreadcrumb",
  setup(__props) {
    const workflowStore = useWorkflowStore();
    const navigationStore = useSubgraphNavigationStore();
    const breadcrumbRef = ref();
    const workflowName = computed(() => workflowStore.activeWorkflow?.filename);
    const collapseTabs = ref(false);
    const overflowingTabs = ref(false);
    const breadcrumbElement = computed(() => {
      if (!breadcrumbRef.value) return null;
      const el = breadcrumbRef.value.$el;
      const list = el?.querySelector(".p-breadcrumb-list");
      return list;
    });
    const items = computed(() => {
      const items2 = navigationStore.navigationStack.map((subgraph) => ({
        label: subgraph.name,
        command: /* @__PURE__ */ __name(() => {
          const canvas = useCanvasStore().getCanvas();
          if (!canvas.graph) throw new TypeError("Canvas has no graph");
          canvas.setGraph(subgraph);
        }, "command"),
        updateTitle: /* @__PURE__ */ __name((title) => {
          const rootGraph = useCanvasStore().getCanvas().graph?.rootGraph;
          if (!rootGraph) return;
          forEachSubgraphNode(rootGraph, subgraph.id, (node) => {
            node.title = title;
          });
        }, "updateTitle")
      }));
      return [home.value, ...items2];
    });
    const home = computed(() => ({
      label: workflowName.value,
      icon: "pi pi-home",
      key: "root",
      command: /* @__PURE__ */ __name(() => {
        const canvas = useCanvasStore().getCanvas();
        if (!canvas.graph) throw new TypeError("Canvas has no graph");
        canvas.setGraph(canvas.graph.rootGraph);
      }, "command")
    }));
    useEventListener(document, "keydown", (event) => {
      if (event.key === "Escape") {
        const canvas = useCanvasStore().getCanvas();
        if (!canvas.graph) throw new TypeError("Canvas has no graph");
        canvas.setGraph(
          navigationStore.navigationStack.at(-2) ?? canvas.graph.rootGraph
        );
      }
    });
    let overflowObserver;
    watch(breadcrumbElement, (el) => {
      overflowObserver?.dispose();
      overflowObserver = void 0;
      if (!el) return;
      overflowObserver = useOverflowObserver(el, {
        onCheck: /* @__PURE__ */ __name((isOverflowing) => {
          overflowingTabs.value = isOverflowing;
          if (collapseTabs.value) {
            if (!isOverflowing) {
              const items2 = [
                ...el.querySelectorAll(".p-breadcrumb-item")
              ];
              if (items2.length < 3) return;
              const itemsWithIcon = items2.filter(
                (item) => item.querySelector(".p-breadcrumb-item-link-icon-visible")
              ).length;
              const separators = el.querySelectorAll(
                ".p-breadcrumb-separator"
              );
              const separator = separators[separators.length - 1];
              const separatorWidth = separator.offsetWidth;
              const itemsWidth = (MIN_WIDTH + ITEM_PADDING + ITEM_PADDING) * items2.length + itemsWithIcon * ICON_WIDTH;
              const separatorsWidth = (items2.length - 1) * separatorWidth;
              const gapsWidth = (items2.length - 1) * (ITEM_GAP * 2);
              const totalWidth = itemsWidth + separatorsWidth + gapsWidth;
              const containerWidth = el.clientWidth;
              if (totalWidth <= containerWidth) {
                collapseTabs.value = false;
              }
            }
          } else if (isOverflowing) {
            collapseTabs.value = true;
          }
        }, "onCheck")
      });
    });
    onUpdated(() => {
      if (!overflowObserver?.disposed.value) {
        overflowObserver?.checkOverflow();
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["subgraph-breadcrumb w-auto", {
          "subgraph-breadcrumb-collapse": collapseTabs.value,
          "subgraph-breadcrumb-overflow": overflowingTabs.value
        }]),
        style: normalizeStyle({
          "--p-breadcrumb-gap": `${ITEM_GAP}px`,
          "--p-breadcrumb-item-min-width": `${MIN_WIDTH}px`,
          "--p-breadcrumb-item-padding": `${ITEM_PADDING}px`,
          "--p-breadcrumb-icon-width": `${ICON_WIDTH}px`
        })
      }, [
        createVNode(unref(Breadcrumb), {
          ref_key: "breadcrumbRef",
          ref: breadcrumbRef,
          class: "bg-transparent p-0",
          model: items.value,
          "aria-label": "Graph navigation"
        }, {
          item: withCtx(({ item }) => [
            createVNode(SubgraphBreadcrumbItem, {
              item,
              "is-active": item === items.value.at(-1)
            }, null, 8, ["item", "is-active"])
          ]),
          separator: withCtx(() => _cache[0] || (_cache[0] = [
            createElementVNode("span", { style: { "transform": "scale(1.5)" } }, " / ", -1)
          ])),
          _: 1
        }, 8, ["model"])
      ], 6);
    };
  }
});
const SubgraphBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-70a07d58"]]);
const _hoisted_1$4 = { class: "flex items-center gap-2" };
const _hoisted_2$3 = {
  key: 0,
  class: "pi pi-sun"
};
const _hoisted_3$2 = {
  key: 1,
  class: "pi pi-moon"
};
const _hoisted_4$2 = ["href"];
const _hoisted_5$1 = { class: "p-menubar-item-label text-nowrap" };
const _hoisted_6$1 = {
  key: 1,
  class: "ml-auto border border-surface rounded text-muted text-xs text-nowrap p-1 keybinding-tag"
};
const _hoisted_7$1 = {
  key: 2,
  class: "ml-auto pi pi-angle-right"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "CommandMenubar",
  setup(__props) {
    const colorPaletteStore = useColorPaletteStore();
    const menuItemsStore = useMenuItemStore();
    const commandStore = useCommandStore();
    const dialogStore = useDialogStore();
    const aboutPanelStore = useAboutPanelStore();
    const settingStore = useSettingStore();
    const { t: t2 } = useI18n();
    const menuRef = ref(null);
    const isLargeSidebar = computed(
      () => settingStore.get("Comfy.Sidebar.Size") !== "small"
    );
    const isTopMenu = computed(() => settingStore.get("Comfy.UseNewMenu") === "Top");
    const translateMenuItem = /* @__PURE__ */ __name((item) => {
      const label = typeof item.label === "function" ? item.label() : item.label;
      const translatedLabel = label ? t2(`menuLabels.${normalizeI18nKey(label)}`, label) : void 0;
      return {
        ...item,
        label: translatedLabel,
        items: item.items?.map(translateMenuItem)
      };
    }, "translateMenuItem");
    const showSettings = /* @__PURE__ */ __name((defaultPanel) => {
      dialogStore.showDialog({
        key: "global-settings",
        headerComponent: SettingDialogHeader,
        component: SettingDialogContent,
        props: {
          defaultPanel
        }
      });
    }, "showSettings");
    const isManagerInstalled = computed(() => {
      return aboutPanelStore.badges.some(
        (badge) => badge.label.includes("ComfyUI-Manager") || badge.url.includes("ComfyUI-Manager")
      );
    });
    const showManageExtensions = /* @__PURE__ */ __name(() => {
      if (isManagerInstalled.value) {
        useDialogService().showManagerDialog();
      } else {
        showSettings("extension");
      }
    }, "showManageExtensions");
    const extraMenuItems = [
      { separator: true },
      {
        key: "theme",
        label: t2("menu.theme")
      },
      { separator: true },
      {
        key: "manage-extensions",
        label: t2("menu.manageExtensions"),
        icon: "mdi mdi-puzzle-outline",
        command: showManageExtensions
      },
      {
        key: "settings",
        label: t2("g.settings"),
        icon: "mdi mdi-cog-outline",
        command: /* @__PURE__ */ __name(() => showSettings(), "command")
      }
    ];
    const lightLabel = t2("menu.light");
    const darkLabel = t2("menu.dark");
    const activeTheme = computed(() => {
      return colorPaletteStore.completedActivePalette.light_theme ? lightLabel : darkLabel;
    });
    const onThemeChange = /* @__PURE__ */ __name(async () => {
      await commandStore.execute("Comfy.ToggleTheme");
    }, "onThemeChange");
    const translatedItems = computed(() => {
      const items = menuItemsStore.menuItems.map(translateMenuItem);
      let helpIndex = items.findIndex((item) => item.key === "Help");
      let helpItem;
      if (helpIndex !== -1) {
        items[helpIndex].icon = "mdi mdi-help-circle-outline";
        const isLastItem = helpIndex !== items.length - 1;
        helpItem = items.splice(
          helpIndex,
          1,
          ...isLastItem ? [
            {
              separator: true
            }
          ] : []
        )[0];
      }
      helpIndex = items.length;
      items.splice(
        helpIndex,
        0,
        ...extraMenuItems,
        ...helpItem ? [
          {
            separator: true
          },
          helpItem
        ] : []
      );
      return items;
    });
    const onMenuShow = /* @__PURE__ */ __name(() => {
      void nextTick(() => {
        if (menuRef.value) {
          menuRef.value.dirty = true;
        }
      });
    }, "onMenuShow");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", {
          class: normalizeClass(["comfyui-logo-wrapper p-1 flex justify-center items-center cursor-pointer rounded-md mr-2", {
            "comfyui-logo-menu-visible": menuRef.value?.visible
          }]),
          style: normalizeStyle({
            minWidth: isLargeSidebar.value ? "4rem" : "auto"
          }),
          onClick: _cache[1] || (_cache[1] = ($event) => menuRef.value?.toggle($event))
        }, [
          createElementVNode("img", {
            src: _imports_0,
            alt: "ComfyUI Logo",
            class: "comfyui-logo h-7",
            onContextmenu: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => unref(showNativeSystemMenu) && unref(showNativeSystemMenu)(...args))
          }, null, 32),
          _cache[4] || (_cache[4] = createElementVNode("i", { class: "pi pi-angle-down ml-1 text-[10px]" }, null, -1))
        ], 6),
        createVNode(unref(TieredMenu), {
          ref_key: "menuRef",
          ref: menuRef,
          model: translatedItems.value,
          popup: true,
          class: normalizeClass(["comfy-command-menu", {
            "comfy-command-menu-top": isTopMenu.value
          }]),
          onShow: onMenuShow
        }, {
          item: withCtx(({ item, props }) => [
            item.key === "theme" ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: "flex items-center gap-4 px-4 py-5",
              onClick: _cache[3] || (_cache[3] = withModifiers(() => {
              }, ["stop", "prevent"]))
            }, [
              createTextVNode(toDisplayString(item.label) + " ", 1),
              createVNode(unref(SelectButton), {
                options: [unref(darkLabel), unref(lightLabel)],
                "model-value": activeTheme.value,
                onClick: _cache[2] || (_cache[2] = withModifiers(() => {
                }, ["stop", "prevent"])),
                "onUpdate:modelValue": onThemeChange
              }, {
                option: withCtx(({ option }) => [
                  createElementVNode("div", _hoisted_1$4, [
                    option === unref(lightLabel) ? (openBlock(), createElementBlock("i", _hoisted_2$3)) : createCommentVNode("", true),
                    option === unref(darkLabel) ? (openBlock(), createElementBlock("i", _hoisted_3$2)) : createCommentVNode("", true),
                    createElementVNode("span", null, toDisplayString(option), 1)
                  ])
                ]),
                _: 1
              }, 8, ["options", "model-value"])
            ])) : (openBlock(), createElementBlock("a", mergeProps({
              key: 1,
              class: "p-menubar-item-link px-4 py-2"
            }, props.action, {
              href: item.url,
              target: "_blank"
            }), [
              item.icon ? (openBlock(), createElementBlock("span", {
                key: 0,
                class: normalizeClass(["p-menubar-item-icon", item.icon])
              }, null, 2)) : createCommentVNode("", true),
              createElementVNode("span", _hoisted_5$1, toDisplayString(item.label), 1),
              item?.comfyCommand?.keybinding ? (openBlock(), createElementBlock("span", _hoisted_6$1, toDisplayString(item.comfyCommand.keybinding.combo.toString()), 1)) : createCommentVNode("", true),
              item.items ? (openBlock(), createElementBlock("i", _hoisted_7$1)) : createCommentVNode("", true)
            ], 16, _hoisted_4$2))
          ]),
          _: 1
        }, 8, ["model", "class"]),
        createVNode(SubgraphBreadcrumb)
      ], 64);
    };
  }
});
const CommandMenubar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-872b3024"]]);
const _hoisted_1$3 = { class: "current-user-popover w-72" };
const _hoisted_2$2 = { class: "p-3" };
const _hoisted_3$1 = { class: "flex flex-col items-center" };
const _hoisted_4$1 = { class: "text-lg font-semibold truncate my-0 mb-1" };
const _hoisted_5 = {
  key: 0,
  class: "text-sm text-muted truncate my-0"
};
const _hoisted_6 = { class: "w-full flex flex-col gap-2 p-2" };
const _hoisted_7 = { class: "text-muted text-sm" };
const _hoisted_8 = { class: "flex justify-between items-center" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CurrentUserPopover",
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    const { userDisplayName, userEmail, userPhotoUrl } = useCurrentUser();
    const authActions = useFirebaseAuthActions();
    const dialogService = useDialogService();
    const handleOpenUserSettings = /* @__PURE__ */ __name(() => {
      dialogService.showSettingsDialog("user");
      emit("close");
    }, "handleOpenUserSettings");
    const handleTopUp = /* @__PURE__ */ __name(() => {
      dialogService.showTopUpCreditsDialog();
      emit("close");
    }, "handleTopUp");
    const handleLogout = /* @__PURE__ */ __name(async () => {
      await authActions.logout();
      emit("close");
    }, "handleLogout");
    const handleOpenApiPricing = /* @__PURE__ */ __name(() => {
      window.open("https://docs.comfy.org/tutorials/api-nodes/pricing", "_blank");
      emit("close");
    }, "handleOpenApiPricing");
    onMounted(() => {
      void authActions.fetchBalance();
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createElementVNode("div", _hoisted_2$2, [
          createElementVNode("div", _hoisted_3$1, [
            createVNode(_sfc_main$T, {
              class: "mb-3",
              "photo-url": unref(userPhotoUrl),
              "pt:icon:class": {
                "!text-2xl": !unref(userPhotoUrl)
              },
              size: "large"
            }, null, 8, ["photo-url", "pt:icon:class"]),
            createElementVNode("h3", _hoisted_4$1, toDisplayString(unref(userDisplayName) || _ctx.$t("g.user")), 1),
            unref(userEmail) ? (openBlock(), createElementBlock("p", _hoisted_5, toDisplayString(unref(userEmail)), 1)) : createCommentVNode("", true)
          ])
        ]),
        createVNode(unref(Divider), { class: "my-2" }),
        createVNode(unref(Button), {
          class: "justify-start",
          label: _ctx.$t("userSettings.title"),
          icon: "pi pi-cog",
          text: "",
          fluid: "",
          severity: "secondary",
          onClick: handleOpenUserSettings
        }, null, 8, ["label"]),
        createVNode(unref(Divider), { class: "my-2" }),
        createVNode(unref(Button), {
          class: "justify-start",
          label: _ctx.$t("auth.signOut.signOut"),
          icon: "pi pi-sign-out",
          text: "",
          fluid: "",
          severity: "secondary",
          onClick: handleLogout
        }, null, 8, ["label"]),
        createVNode(unref(Divider), { class: "my-2" }),
        createVNode(unref(Button), {
          class: "justify-start",
          label: _ctx.$t("credits.apiPricing"),
          icon: "pi pi-external-link",
          text: "",
          fluid: "",
          severity: "secondary",
          onClick: handleOpenApiPricing
        }, null, 8, ["label"]),
        createVNode(unref(Divider), { class: "my-2" }),
        createElementVNode("div", _hoisted_6, [
          createElementVNode("div", _hoisted_7, toDisplayString(_ctx.$t("credits.yourCreditBalance")), 1),
          createElementVNode("div", _hoisted_8, [
            createVNode(_sfc_main$U, { "text-class": "text-2xl" }),
            createVNode(unref(Button), {
              label: _ctx.$t("credits.topUp.topUp"),
              onClick: handleTopUp
            }, null, 8, ["label"])
          ])
        ])
      ]);
    };
  }
});
const _hoisted_1$2 = { class: "flex items-center rounded-full bg-[var(--p-content-background)]" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "CurrentUserButton",
  setup(__props) {
    const { isLoggedIn, userPhotoUrl } = useCurrentUser();
    const popover = ref(null);
    const photoURL = computed(
      () => userPhotoUrl.value ?? void 0
    );
    const closePopover = /* @__PURE__ */ __name(() => {
      popover.value?.hide();
    }, "closePopover");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        unref(isLoggedIn) ? (openBlock(), createBlock(unref(Button), {
          key: 0,
          class: "user-profile-button p-1",
          severity: "secondary",
          text: "",
          "aria-label": "user profile",
          onClick: _cache[0] || (_cache[0] = ($event) => popover.value?.toggle($event))
        }, {
          default: withCtx(() => [
            createElementVNode("div", _hoisted_1$2, [
              createVNode(_sfc_main$T, { "photo-url": photoURL.value }, null, 8, ["photo-url"]),
              _cache[1] || (_cache[1] = createElementVNode("i", {
                class: "pi pi-chevron-down px-1",
                style: { fontSize: "0.5rem" }
              }, null, -1))
            ])
          ]),
          _: 1
        })) : createCommentVNode("", true),
        createVNode(unref(Popover), {
          ref_key: "popover",
          ref: popover,
          "show-arrow": false
        }, {
          default: withCtx(() => [
            createVNode(_sfc_main$3, { onClose: closePopover })
          ]),
          _: 1
        }, 512)
      ]);
    };
  }
});
const _hoisted_1$1 = {
  class: "w-full flex content-end z-[1001] h-[38px]",
  style: { "background": "var(--border-color)" }
};
const _hoisted_2$1 = { class: "fixed top-0 left-0 app-drag w-full h-[var(--comfy-topbar-height)]" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TopMenubar",
  setup(__props) {
    const workspaceState = useWorkspaceStore();
    const settingStore = useSettingStore();
    const menuSetting = computed(() => settingStore.get("Comfy.UseNewMenu"));
    const betaMenuEnabled = computed(() => menuSetting.value !== "Disabled");
    const showTopMenu = computed(
      () => betaMenuEnabled.value && !workspaceState.focusMode
    );
    const workflowTabsPosition = computed(
      () => settingStore.get("Comfy.Workflow.WorkflowTabsPosition")
    );
    const menuRight = ref(null);
    onMounted(() => {
      if (menuRight.value) {
        app.menu.element.style.width = "fit-content";
        menuRight.value.appendChild(app.menu.element);
      }
    });
    const topMenuRef = ref(null);
    provide("topMenuRef", topMenuRef);
    const eventBus = useEventBus("topMenu");
    const isDropZone = ref(false);
    const isDroppable = ref(false);
    eventBus.on((event, payload) => {
      if (event === "updateHighlight") {
        isDropZone.value = payload.isDragging;
        isDroppable.value = payload.isOverlapping && payload.isDragging;
      }
    });
    onMounted(() => {
      if (isElectron()) {
        electronAPI().changeTheme({
          height: topMenuRef.value?.getBoundingClientRect().height ?? 0
        });
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        withDirectives(createElementVNode("div", _hoisted_1$1, [
          createVNode(WorkflowTabs)
        ], 512), [
          [vShow, showTopMenu.value && workflowTabsPosition.value === "Topbar"]
        ]),
        withDirectives(createElementVNode("div", {
          ref_key: "topMenuRef",
          ref: topMenuRef,
          class: normalizeClass(["comfyui-menu flex items-center", { dropzone: isDropZone.value, "dropzone-active": isDroppable.value }])
        }, [
          createVNode(CommandMenubar),
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "flex-grow min-w-0 app-drag h-full" }, null, -1)),
          createElementVNode("div", {
            ref_key: "menuRight",
            ref: menuRight,
            class: "comfyui-menu-right flex-shrink-1 overflow-auto"
          }, null, 512),
          createVNode(Actionbar),
          createVNode(_sfc_main$2, { class: "flex-shrink-0" })
        ], 2), [
          [vShow, showTopMenu.value]
        ]),
        withDirectives(createElementVNode("div", _hoisted_2$1, null, 512), [
          [vShow, unref(isNativeWindow)() && !showTopMenu.value]
        ])
      ]);
    };
  }
});
const TopMenubar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-b2376bdd"]]);
const DEFAULT_TITLE = "ComfyUI";
const TITLE_SUFFIX = " - ComfyUI";
const useBrowserTabTitle = /* @__PURE__ */ __name(() => {
  const executionStore = useExecutionStore();
  const settingStore = useSettingStore();
  const workflowStore = useWorkflowStore();
  const executionText = computed(
    () => executionStore.isIdle ? "" : `[${Math.round(executionStore.executionProgress * 100)}%]`
  );
  const newMenuEnabled = computed(
    () => settingStore.get("Comfy.UseNewMenu") !== "Disabled"
  );
  const isUnsavedText = computed(
    () => workflowStore.activeWorkflow?.isModified || !workflowStore.activeWorkflow?.isPersisted ? " *" : ""
  );
  const workflowNameText = computed(() => {
    const workflowName = workflowStore.activeWorkflow?.filename;
    return workflowName ? isUnsavedText.value + workflowName + TITLE_SUFFIX : DEFAULT_TITLE;
  });
  const nodeExecutionTitle = computed(() => {
    const nodeProgressEntries = Object.entries(
      executionStore.nodeProgressStates
    );
    const runningNodes = nodeProgressEntries.filter(
      ([_2, state2]) => state2.state === "running"
    );
    if (runningNodes.length === 0) {
      return "";
    }
    if (runningNodes.length > 1) {
      return `${executionText.value}[${runningNodes.length} ${t$2("g.nodesRunning", "nodes running")}]`;
    }
    const [nodeId, state] = runningNodes[0];
    const progress = Math.round(state.value / state.max * 100);
    const nodeType = executionStore.activePrompt?.workflow?.changeTracker?.activeState.nodes.find(
      (n) => String(n.id) === nodeId
    )?.type || "Node";
    return `${executionText.value}[${progress}%] ${nodeType}`;
  });
  const workflowTitle = computed(
    () => executionText.value + (newMenuEnabled.value ? workflowNameText.value : DEFAULT_TITLE)
  );
  const title = computed(() => nodeExecutionTitle.value || workflowTitle.value);
  useTitle(title);
}, "useBrowserTabTitle");
const fluxKontextGroupNode = {
  nodes: [
    {
      id: -1,
      type: "Reroute",
      pos: [2354.87890625, -127.23468780517578],
      size: [75, 26],
      flags: {},
      order: 20,
      mode: 0,
      inputs: [{ name: "", type: "*", link: null }],
      outputs: [{ name: "", type: "*", links: null }],
      properties: { showOutputText: false, horizontal: false },
      index: 0
    },
    {
      id: -1,
      type: "ReferenceLatent",
      pos: [2730, -220],
      size: [197.712890625, 46],
      flags: {},
      order: 22,
      mode: 0,
      inputs: [
        {
          localized_name: "conditioning",
          name: "conditioning",
          type: "CONDITIONING",
          link: null
        },
        {
          localized_name: "latent",
          name: "latent",
          shape: 7,
          type: "LATENT",
          link: null
        }
      ],
      outputs: [
        {
          localized_name: "CONDITIONING",
          name: "CONDITIONING",
          type: "CONDITIONING",
          links: []
        }
      ],
      properties: {
        "Node name for S&R": "ReferenceLatent",
        cnr_id: "comfy-core",
        ver: "0.3.38"
      },
      index: 1
    },
    {
      id: -1,
      type: "VAEDecode",
      pos: [3270, -110],
      size: [210, 46],
      flags: {},
      order: 25,
      mode: 0,
      inputs: [
        {
          localized_name: "samples",
          name: "samples",
          type: "LATENT",
          link: null
        },
        {
          localized_name: "vae",
          name: "vae",
          type: "VAE",
          link: null
        }
      ],
      outputs: [
        {
          localized_name: "IMAGE",
          name: "IMAGE",
          type: "IMAGE",
          slot_index: 0,
          links: []
        }
      ],
      properties: {
        "Node name for S&R": "VAEDecode",
        cnr_id: "comfy-core",
        ver: "0.3.38"
      },
      index: 2
    },
    {
      id: -1,
      type: "KSampler",
      pos: [2930, -110],
      size: [315, 262],
      flags: {},
      order: 24,
      mode: 0,
      inputs: [
        {
          localized_name: "model",
          name: "model",
          type: "MODEL",
          link: null
        },
        {
          localized_name: "positive",
          name: "positive",
          type: "CONDITIONING",
          link: null
        },
        {
          localized_name: "negative",
          name: "negative",
          type: "CONDITIONING",
          link: null
        },
        {
          localized_name: "latent_image",
          name: "latent_image",
          type: "LATENT",
          link: null
        },
        {
          localized_name: "seed",
          name: "seed",
          type: "INT",
          widget: { name: "seed" },
          link: null
        },
        {
          localized_name: "steps",
          name: "steps",
          type: "INT",
          widget: { name: "steps" },
          link: null
        },
        {
          localized_name: "cfg",
          name: "cfg",
          type: "FLOAT",
          widget: { name: "cfg" },
          link: null
        },
        {
          localized_name: "sampler_name",
          name: "sampler_name",
          type: "COMBO",
          widget: { name: "sampler_name" },
          link: null
        },
        {
          localized_name: "scheduler",
          name: "scheduler",
          type: "COMBO",
          widget: { name: "scheduler" },
          link: null
        },
        {
          localized_name: "denoise",
          name: "denoise",
          type: "FLOAT",
          widget: { name: "denoise" },
          link: null
        }
      ],
      outputs: [
        {
          localized_name: "LATENT",
          name: "LATENT",
          type: "LATENT",
          slot_index: 0,
          links: []
        }
      ],
      properties: {
        "Node name for S&R": "KSampler",
        cnr_id: "comfy-core",
        ver: "0.3.38"
      },
      widgets_values: [972054013131369, "fixed", 20, 1, "euler", "simple", 1],
      index: 3
    },
    {
      id: -1,
      type: "FluxGuidance",
      pos: [2940, -220],
      size: [211.60000610351562, 58],
      flags: {},
      order: 23,
      mode: 0,
      inputs: [
        {
          localized_name: "conditioning",
          name: "conditioning",
          type: "CONDITIONING",
          link: null
        },
        {
          localized_name: "guidance",
          name: "guidance",
          type: "FLOAT",
          widget: { name: "guidance" },
          link: null
        }
      ],
      outputs: [
        {
          localized_name: "CONDITIONING",
          name: "CONDITIONING",
          type: "CONDITIONING",
          slot_index: 0,
          links: []
        }
      ],
      properties: {
        "Node name for S&R": "FluxGuidance",
        cnr_id: "comfy-core",
        ver: "0.3.38"
      },
      widgets_values: [2.5],
      index: 4
    },
    {
      id: -1,
      type: "SaveImage",
      pos: [3490, -110],
      size: [985.3012084960938, 1060.3828125],
      flags: {},
      order: 26,
      mode: 0,
      inputs: [
        {
          localized_name: "images",
          name: "images",
          type: "IMAGE",
          link: null
        },
        {
          localized_name: "filename_prefix",
          name: "filename_prefix",
          type: "STRING",
          widget: { name: "filename_prefix" },
          link: null
        }
      ],
      outputs: [],
      properties: { cnr_id: "comfy-core", ver: "0.3.38" },
      widgets_values: ["ComfyUI"],
      index: 5
    },
    {
      id: -1,
      type: "CLIPTextEncode",
      pos: [2500, -110],
      size: [422.84503173828125, 164.31304931640625],
      flags: {},
      order: 12,
      mode: 0,
      inputs: [
        {
          localized_name: "clip",
          name: "clip",
          type: "CLIP",
          link: null
        },
        {
          localized_name: "text",
          name: "text",
          type: "STRING",
          widget: { name: "text" },
          link: null
        }
      ],
      outputs: [
        {
          localized_name: "CONDITIONING",
          name: "CONDITIONING",
          type: "CONDITIONING",
          slot_index: 0,
          links: []
        }
      ],
      title: "CLIP Text Encode (Positive Prompt)",
      properties: {
        "Node name for S&R": "CLIPTextEncode",
        cnr_id: "comfy-core",
        ver: "0.3.38"
      },
      widgets_values: ["there is a bright light"],
      color: "#232",
      bgcolor: "#353",
      index: 6
    },
    {
      id: -1,
      type: "CLIPTextEncode",
      pos: [2504.1435546875, 97.9598617553711],
      size: [422.84503173828125, 164.31304931640625],
      flags: { collapsed: true },
      order: 13,
      mode: 0,
      inputs: [
        {
          localized_name: "clip",
          name: "clip",
          type: "CLIP",
          link: null
        },
        {
          localized_name: "text",
          name: "text",
          type: "STRING",
          widget: { name: "text" },
          link: null
        }
      ],
      outputs: [
        {
          localized_name: "CONDITIONING",
          name: "CONDITIONING",
          type: "CONDITIONING",
          slot_index: 0,
          links: []
        }
      ],
      title: "CLIP Text Encode (Negative Prompt)",
      properties: {
        "Node name for S&R": "CLIPTextEncode",
        cnr_id: "comfy-core",
        ver: "0.3.38"
      },
      widgets_values: [""],
      color: "#322",
      bgcolor: "#533",
      index: 7
    },
    {
      id: -1,
      type: "UNETLoader",
      pos: [2630, -370],
      size: [270, 82],
      flags: {},
      order: 6,
      mode: 0,
      inputs: [
        {
          localized_name: "unet_name",
          name: "unet_name",
          type: "COMBO",
          widget: { name: "unet_name" },
          link: null
        },
        {
          localized_name: "weight_dtype",
          name: "weight_dtype",
          type: "COMBO",
          widget: { name: "weight_dtype" },
          link: null
        }
      ],
      outputs: [
        {
          localized_name: "MODEL",
          name: "MODEL",
          type: "MODEL",
          links: []
        }
      ],
      properties: {
        "Node name for S&R": "UNETLoader",
        cnr_id: "comfy-core",
        ver: "0.3.38"
      },
      widgets_values: ["flux1-kontext-dev.safetensors", "default"],
      color: "#223",
      bgcolor: "#335",
      index: 8
    },
    {
      id: -1,
      type: "DualCLIPLoader",
      pos: [2100, -290],
      size: [337.76861572265625, 130],
      flags: {},
      order: 8,
      mode: 0,
      inputs: [
        {
          localized_name: "clip_name1",
          name: "clip_name1",
          type: "COMBO",
          widget: { name: "clip_name1" },
          link: null
        },
        {
          localized_name: "clip_name2",
          name: "clip_name2",
          type: "COMBO",
          widget: { name: "clip_name2" },
          link: null
        },
        {
          localized_name: "type",
          name: "type",
          type: "COMBO",
          widget: { name: "type" },
          link: null
        },
        {
          localized_name: "device",
          name: "device",
          shape: 7,
          type: "COMBO",
          widget: { name: "device" },
          link: null
        }
      ],
      outputs: [
        {
          localized_name: "CLIP",
          name: "CLIP",
          type: "CLIP",
          links: []
        }
      ],
      properties: {
        "Node name for S&R": "DualCLIPLoader",
        cnr_id: "comfy-core",
        ver: "0.3.38"
      },
      widgets_values: [
        "clip_l.safetensors",
        "t5xxl_fp8_e4m3fn_scaled.safetensors",
        "flux",
        "default"
      ],
      color: "#223",
      bgcolor: "#335",
      index: 9
    },
    {
      id: -1,
      type: "VAELoader",
      pos: [2960, -370],
      size: [270, 58],
      flags: {},
      order: 7,
      mode: 0,
      inputs: [
        {
          localized_name: "vae_name",
          name: "vae_name",
          type: "COMBO",
          widget: { name: "vae_name" },
          link: null
        }
      ],
      outputs: [
        {
          localized_name: "VAE",
          name: "VAE",
          type: "VAE",
          links: []
        }
      ],
      properties: {
        "Node name for S&R": "VAELoader",
        cnr_id: "comfy-core",
        ver: "0.3.38"
      },
      widgets_values: ["ae.safetensors"],
      color: "#223",
      bgcolor: "#335",
      index: 10
    }
  ],
  links: [
    [6, 0, 1, 0, 72, "CONDITIONING"],
    [0, 0, 1, 1, 66, "*"],
    [3, 0, 2, 0, 69, "LATENT"],
    [10, 0, 2, 1, 76, "VAE"],
    [8, 0, 3, 0, 74, "MODEL"],
    [4, 0, 3, 1, 70, "CONDITIONING"],
    [7, 0, 3, 2, 73, "CONDITIONING"],
    [0, 0, 3, 3, 66, "*"],
    [1, 0, 4, 0, 67, "CONDITIONING"],
    [2, 0, 5, 0, 68, "IMAGE"],
    [9, 0, 6, 0, 75, "CLIP"],
    [9, 0, 7, 0, 75, "CLIP"]
  ],
  external: [],
  config: {
    "0": {},
    "1": {},
    "2": { output: { "0": { visible: true } } },
    "3": {
      output: { "0": { visible: true } },
      input: {
        denoise: { visible: false },
        cfg: { visible: false }
      }
    },
    "4": {},
    "5": {},
    "6": {},
    "7": { input: { text: { visible: false } } },
    "8": { input: { weight_dtype: { visible: false } } },
    "9": { input: { type: { visible: false }, device: { visible: false } } },
    "10": {}
  }
};
async function ensureGraphHasFluxKontextGroupNode(graph) {
  graph.extra ??= {};
  graph.extra.groupNodes ??= {};
  if (graph.extra.groupNodes["FLUX.1 Kontext Image Edit"]) return;
  graph.extra.groupNodes["FLUX.1 Kontext Image Edit"] = structuredClone(fluxKontextGroupNode);
  const { GroupNodeConfig } = await __vitePreload(async () => {
    const { GroupNodeConfig: GroupNodeConfig2 } = await import("./groupNode-D2epbLIR.js").then((n) => n.b);
    return { GroupNodeConfig: GroupNodeConfig2 };
  }, true ? __vite__mapDeps([0,1,2,3]) : void 0, import.meta.url);
  await GroupNodeConfig.registerFromWorkflow(
    {
      "FLUX.1 Kontext Image Edit": graph.extra.groupNodes["FLUX.1 Kontext Image Edit"]
    },
    []
  );
}
__name(ensureGraphHasFluxKontextGroupNode, "ensureGraphHasFluxKontextGroupNode");
async function addFluxKontextGroupNode(fromNode) {
  const { canvas } = app;
  const { graph } = canvas;
  if (!graph) throw new TypeError("Graph is not initialized");
  await ensureGraphHasFluxKontextGroupNode(graph);
  const node = LiteGraph.createNode("workflow>FLUX.1 Kontext Image Edit");
  if (!node) throw new TypeError("Failed to create node");
  const pos = getPosToRightOfNode(fromNode);
  graph.add(node);
  node.pos = pos;
  app.canvas.processSelect(node, void 0);
  connectPreviousLatent(fromNode, node);
  const symb = Object.getOwnPropertySymbols(node)[0];
  node[symb].populateWidgets();
  setWidgetValues(node);
}
__name(addFluxKontextGroupNode, "addFluxKontextGroupNode");
function setWidgetValues(node) {
  const seedInput = node.widgets?.find((x) => x.name === "seed");
  if (!seedInput) throw new TypeError("Seed input not found");
  seedInput.value = Math.floor(Math.random() * 1125899906842624);
  const firstClip = node.widgets?.find((x) => x.name === "clip_name1");
  setPreferredValue("t5xxl_fp8_e4m3fn_scaled.safetensors", "t5xxl", firstClip);
  const secondClip = node.widgets?.find((x) => x.name === "clip_name2");
  setPreferredValue("clip_l.safetensors", "clip_l", secondClip);
  const unet = node.widgets?.find((x) => x.name === "unet_name");
  setPreferredValue("flux1-dev-kontext_fp8_scaled.safetensors", "kontext", unet);
  const vae = node.widgets?.find((x) => x.name === "vae_name");
  setPreferredValue("ae.safetensors", "ae.s", vae);
}
__name(setWidgetValues, "setWidgetValues");
function setPreferredValue(preferred, match, widget) {
  if (!widget) throw new TypeError("Widget not found");
  const { values } = widget.options;
  if (!Array.isArray(values)) return;
  const mapped = values.map((x) => parseFilePath(x).filename);
  const value = mapped.find((x) => x === preferred) ?? mapped.find((x) => x.includes?.(match));
  widget.value = value ?? preferred;
}
__name(setPreferredValue, "setPreferredValue");
function getPosToRightOfNode(fromNode) {
  const nodes = app.canvas.graph?.nodes;
  if (!nodes) throw new TypeError("Could not get graph nodes");
  const pos = [
    fromNode.pos[0] + fromNode.size[0] + 100,
    fromNode.pos[1]
  ];
  while (nodes.find((x) => isPointTooClose(x.pos, pos))) {
    pos[0] += 20;
    pos[1] += 20;
  }
  return pos;
}
__name(getPosToRightOfNode, "getPosToRightOfNode");
function connectPreviousLatent(fromNode, toEditNode) {
  const { canvas } = app;
  const { graph } = canvas;
  if (!graph) throw new TypeError("Graph is not initialized");
  const l = findNearestOutputOfType([fromNode], "LATENT");
  if (!l) {
    const imageOutput = findNearestOutputOfType([fromNode], "IMAGE");
    if (!imageOutput) throw new TypeError("No image output found");
    const vaeEncode = LiteGraph.createNode("VAEEncode");
    if (!vaeEncode) throw new TypeError("Failed to create node");
    const { node: imageNode, index: imageIndex } = imageOutput;
    graph.add(vaeEncode);
    vaeEncode.pos = getPosToRightOfNode(fromNode);
    vaeEncode.pos[1] -= 200;
    vaeEncode.connect(0, toEditNode, 0);
    imageNode.connect(imageIndex, vaeEncode, 0);
    return;
  }
  const { node, index: index2 } = l;
  node.connect(index2, toEditNode, 0);
}
__name(connectPreviousLatent, "connectPreviousLatent");
function getInputNodes(node) {
  return node.inputs.map((x) => LLink.resolve(x.link, app.graph)?.outputNode).filter((x) => !!x);
}
__name(getInputNodes, "getInputNodes");
function getOutputOfType(node, type) {
  const index2 = node.outputs.findIndex((x) => x.type === type);
  const output = node.outputs[index2];
  return { output, index: index2 };
}
__name(getOutputOfType, "getOutputOfType");
function findNearestOutputOfType(nodes, type = "LATENT", depth = 0) {
  for (const node of nodes) {
    const { output, index: index2 } = getOutputOfType(node, type);
    if (output) return { node, index: index2 };
  }
  if (depth < 3) {
    const closestNodes = new Set([...nodes].flatMap((x) => getInputNodes(x)));
    const res = findNearestOutputOfType(closestNodes, type, depth + 1);
    if (res) return res;
  }
}
__name(findNearestOutputOfType, "findNearestOutputOfType");
function isPointTooClose(a, b, precision = 5) {
  return Math.abs(a[0] - b[0]) < precision && Math.abs(a[1] - b[1]) < precision;
}
__name(isPointTooClose, "isPointTooClose");
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.fluxKontextEditNode = window.comfyAPI.fluxKontextEditNode || {};
window.comfyAPI.fluxKontextEditNode.ensureGraphHasFluxKontextGroupNode = ensureGraphHasFluxKontextGroupNode;
window.comfyAPI.fluxKontextEditNode.addFluxKontextGroupNode = addFluxKontextGroupNode;
const isOutputNode = /* @__PURE__ */ __name((node) => node.constructor.nodeData?.output_node, "isOutputNode");
const filterOutputNodes = /* @__PURE__ */ __name((nodes) => nodes.filter(isOutputNode), "filterOutputNodes");
const moveSelectedNodesVersionAdded = "1.22.2";
function useCoreCommands() {
  const workflowService = useWorkflowService();
  const workflowStore = useWorkflowStore();
  const dialogService = useDialogService();
  const colorPaletteStore = useColorPaletteStore();
  const firebaseAuthActions = useFirebaseAuthActions();
  const toastStore = useToastStore();
  const canvasStore = useCanvasStore();
  const executionStore = useExecutionStore();
  const bottomPanelStore = useBottomPanelStore();
  const { getSelectedNodes, toggleSelectedNodesMode } = useSelectedLiteGraphItems();
  const getTracker = /* @__PURE__ */ __name(() => workflowStore.activeWorkflow?.changeTracker, "getTracker");
  const moveSelectedNodes = /* @__PURE__ */ __name((positionUpdater) => {
    const selectedNodes = getSelectedNodes();
    if (selectedNodes.length === 0) return;
    const gridSize = useSettingStore().get("Comfy.SnapToGrid.GridSize");
    selectedNodes.forEach((node) => {
      node.pos = positionUpdater(node.pos, gridSize);
    });
    app.canvas.state.selectionChanged = true;
    app.canvas.setDirty(true, true);
  }, "moveSelectedNodes");
  const commands = [
    {
      id: "Comfy.NewBlankWorkflow",
      icon: "pi pi-plus",
      label: "New Blank Workflow",
      menubarLabel: "New",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => workflowService.loadBlankWorkflow(), "function")
    },
    {
      id: "Comfy.OpenWorkflow",
      icon: "pi pi-folder-open",
      label: "Open Workflow",
      menubarLabel: "Open",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        app.ui.loadFile();
      }, "function")
    },
    {
      id: "Comfy.LoadDefaultWorkflow",
      icon: "pi pi-code",
      label: "Load Default Workflow",
      function: /* @__PURE__ */ __name(() => workflowService.loadDefaultWorkflow(), "function")
    },
    {
      id: "Comfy.SaveWorkflow",
      icon: "pi pi-save",
      label: "Save Workflow",
      menubarLabel: "Save",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        const workflow = useWorkflowStore().activeWorkflow;
        if (!workflow) return;
        await workflowService.saveWorkflow(workflow);
      }, "function")
    },
    {
      id: "Comfy.SaveWorkflowAs",
      icon: "pi pi-save",
      label: "Save Workflow As",
      menubarLabel: "Save As",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        const workflow = useWorkflowStore().activeWorkflow;
        if (!workflow) return;
        await workflowService.saveWorkflowAs(workflow);
      }, "function")
    },
    {
      id: "Comfy.ExportWorkflow",
      icon: "pi pi-download",
      label: "Export Workflow",
      menubarLabel: "Export",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.exportWorkflow("workflow", "workflow");
      }, "function")
    },
    {
      id: "Comfy.ExportWorkflowAPI",
      icon: "pi pi-download",
      label: "Export Workflow (API Format)",
      menubarLabel: "Export (API)",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.exportWorkflow("workflow_api", "output");
      }, "function")
    },
    {
      id: "Comfy.Undo",
      icon: "pi pi-undo",
      label: "Undo",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await getTracker()?.undo?.();
      }, "function")
    },
    {
      id: "Comfy.Redo",
      icon: "pi pi-refresh",
      label: "Redo",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await getTracker()?.redo?.();
      }, "function")
    },
    {
      id: "Comfy.ClearWorkflow",
      icon: "pi pi-trash",
      label: "Clear Workflow",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        const settingStore = useSettingStore();
        if (!settingStore.get("Comfy.ConfirmClear") || confirm("Clear workflow?")) {
          app.clean();
          if (app.canvas.subgraph) {
            const subgraph = app.canvas.subgraph;
            const nonIoNodes = getAllNonIoNodesInSubgraph(subgraph);
            nonIoNodes.forEach((node) => subgraph.remove(node));
          } else {
            app.graph.clear();
          }
          api.dispatchCustomEvent("graphCleared");
        }
      }, "function")
    },
    {
      id: "Comfy.Canvas.ResetView",
      icon: "pi pi-expand",
      label: "Reset View",
      function: /* @__PURE__ */ __name(() => {
        useLitegraphService().resetView();
      }, "function")
    },
    {
      id: "Comfy.OpenClipspace",
      icon: "pi pi-clipboard",
      label: "Clipspace",
      function: /* @__PURE__ */ __name(() => {
        app.openClipspace();
      }, "function")
    },
    {
      id: "Comfy.RefreshNodeDefinitions",
      icon: "pi pi-refresh",
      label: "Refresh Node Definitions",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await app.refreshComboInNodes();
      }, "function")
    },
    {
      id: "Comfy.Interrupt",
      icon: "pi pi-stop",
      label: "Interrupt",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await api.interrupt(executionStore.activePromptId);
        toastStore.add({
          severity: "info",
          summary: t$2("g.interrupted"),
          detail: t$2("toastMessages.interrupted"),
          life: 1e3
        });
      }, "function")
    },
    {
      id: "Comfy.ClearPendingTasks",
      icon: "pi pi-stop",
      label: "Clear Pending Tasks",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        await useQueueStore().clear(["queue"]);
        toastStore.add({
          severity: "info",
          summary: t$2("g.confirmed"),
          detail: t$2("toastMessages.pendingTasksDeleted"),
          life: 3e3
        });
      }, "function")
    },
    {
      id: "Comfy.BrowseTemplates",
      icon: "pi pi-folder-open",
      label: "Browse Templates",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showTemplateWorkflowsDialog();
      }, "function")
    },
    {
      id: "Comfy.Canvas.ZoomIn",
      icon: "pi pi-plus",
      label: "Zoom In",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        const ds = app.canvas.ds;
        ds.changeScale(
          ds.scale * 1.1,
          ds.element ? [ds.element.width / 2, ds.element.height / 2] : void 0
        );
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ZoomOut",
      icon: "pi pi-minus",
      label: "Zoom Out",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        const ds = app.canvas.ds;
        ds.changeScale(
          ds.scale / 1.1,
          ds.element ? [ds.element.width / 2, ds.element.height / 2] : void 0
        );
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.FitView",
      icon: "pi pi-expand",
      label: "Fit view to selected nodes",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        if (app.canvas.empty) {
          toastStore.add({
            severity: "error",
            summary: t$2("toastMessages.emptyCanvas"),
            life: 3e3
          });
          return;
        }
        app.canvas.fitViewToSelectionAnimated();
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleLock",
      icon: "pi pi-lock",
      label: "Canvas Toggle Lock",
      function: /* @__PURE__ */ __name(() => {
        app.canvas["read_only"] = !app.canvas["read_only"];
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleLinkVisibility",
      icon: "pi pi-eye",
      label: "Canvas Toggle Link Visibility",
      versionAdded: "1.3.6",
      function: (() => {
        const settingStore = useSettingStore();
        let lastLinksRenderMode = LiteGraph.SPLINE_LINK;
        return async () => {
          const currentMode = settingStore.get("Comfy.LinkRenderMode");
          if (currentMode === LiteGraph.HIDDEN_LINK) {
            await settingStore.set("Comfy.LinkRenderMode", lastLinksRenderMode);
          } else {
            lastLinksRenderMode = currentMode;
            await settingStore.set(
              "Comfy.LinkRenderMode",
              LiteGraph.HIDDEN_LINK
            );
          }
        };
      })()
    },
    {
      id: "Comfy.Canvas.ToggleMinimap",
      icon: "pi pi-map",
      label: "Canvas Toggle Minimap",
      versionAdded: "1.24.1",
      function: /* @__PURE__ */ __name(async () => {
        const settingStore = useSettingStore();
        await settingStore.set(
          "Comfy.Minimap.Visible",
          !settingStore.get("Comfy.Minimap.Visible")
        );
      }, "function")
    },
    {
      id: "Comfy.QueuePrompt",
      icon: "pi pi-play",
      label: "Queue Prompt",
      versionAdded: "1.3.7",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        const batchCount = useQueueSettingsStore().batchCount;
        await app.queuePrompt(0, batchCount);
      }, "function")
    },
    {
      id: "Comfy.QueuePromptFront",
      icon: "pi pi-play",
      label: "Queue Prompt (Front)",
      versionAdded: "1.3.7",
      category: "essentials",
      function: /* @__PURE__ */ __name(async () => {
        const batchCount = useQueueSettingsStore().batchCount;
        await app.queuePrompt(-1, batchCount);
      }, "function")
    },
    {
      id: "Comfy.QueueSelectedOutputNodes",
      icon: "pi pi-play",
      label: "Queue Selected Output Nodes",
      versionAdded: "1.19.6",
      function: /* @__PURE__ */ __name(async () => {
        const batchCount = useQueueSettingsStore().batchCount;
        const selectedNodes = getSelectedNodes();
        const selectedOutputNodes = filterOutputNodes(selectedNodes);
        if (selectedOutputNodes.length === 0) {
          toastStore.add({
            severity: "error",
            summary: t$2("toastMessages.nothingToQueue"),
            detail: t$2("toastMessages.pleaseSelectOutputNodes"),
            life: 3e3
          });
          return;
        }
        const executionIds = getExecutionIdsForSelectedNodes(selectedOutputNodes);
        await app.queuePrompt(0, batchCount, executionIds);
      }, "function")
    },
    {
      id: "Comfy.ShowSettingsDialog",
      icon: "pi pi-cog",
      label: "Show Settings Dialog",
      versionAdded: "1.3.7",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showSettingsDialog();
      }, "function")
    },
    {
      id: "Comfy.Graph.GroupSelectedNodes",
      icon: "pi pi-sitemap",
      label: "Group Selected Nodes",
      versionAdded: "1.3.7",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        const { canvas } = app;
        if (!canvas.selectedItems?.size) {
          toastStore.add({
            severity: "error",
            summary: t$2("toastMessages.nothingToGroup"),
            detail: t$2("toastMessages.pleaseSelectNodesToGroup"),
            life: 3e3
          });
          return;
        }
        const group = new LGraphGroup();
        const padding = useSettingStore().get(
          "Comfy.GroupSelectedNodes.Padding"
        );
        group.resizeTo(canvas.selectedItems, padding);
        canvas.graph?.add(group);
        useTitleEditorStore().titleEditorTarget = group;
      }, "function")
    },
    {
      id: "Workspace.NextOpenedWorkflow",
      icon: "pi pi-step-forward",
      label: "Next Opened Workflow",
      versionAdded: "1.3.9",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.loadNextOpenedWorkflow();
      }, "function")
    },
    {
      id: "Workspace.PreviousOpenedWorkflow",
      icon: "pi pi-step-backward",
      label: "Previous Opened Workflow",
      versionAdded: "1.3.9",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.loadPreviousOpenedWorkflow();
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Mute",
      icon: "pi pi-volume-off",
      label: "Mute/Unmute Selected Nodes",
      versionAdded: "1.3.11",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        toggleSelectedNodesMode(LGraphEventMode.NEVER);
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Bypass",
      icon: "pi pi-shield",
      label: "Bypass/Unbypass Selected Nodes",
      versionAdded: "1.3.11",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        toggleSelectedNodesMode(LGraphEventMode.BYPASS);
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Pin",
      icon: "pi pi-pin",
      label: "Pin/Unpin Selected Nodes",
      versionAdded: "1.3.11",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        getSelectedNodes().forEach((node) => {
          node.pin(!node.pinned);
        });
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelected.Pin",
      icon: "pi pi-pin",
      label: "Pin/Unpin Selected Items",
      versionAdded: "1.3.33",
      function: /* @__PURE__ */ __name(() => {
        for (const item of app.canvas.selectedItems) {
          if (item instanceof LGraphNode || item instanceof LGraphGroup) {
            item.pin(!item.pinned);
          }
        }
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.Resize",
      icon: "pi pi-minus",
      label: "Resize Selected Nodes",
      versionAdded: "",
      function: /* @__PURE__ */ __name(() => {
        getSelectedNodes().forEach((node) => {
          const optimalSize = node.computeSize();
          node.setSize([optimalSize[0], optimalSize[1]]);
        });
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Canvas.ToggleSelectedNodes.Collapse",
      icon: "pi pi-minus",
      label: "Collapse/Expand Selected Nodes",
      versionAdded: "1.3.11",
      function: /* @__PURE__ */ __name(() => {
        getSelectedNodes().forEach((node) => {
          node.collapse();
        });
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.ToggleTheme",
      icon: "pi pi-moon",
      label: "Toggle Theme (Dark/Light)",
      versionAdded: "1.3.12",
      function: (() => {
        let previousDarkTheme = DEFAULT_DARK_COLOR_PALETTE.id;
        let previousLightTheme = DEFAULT_LIGHT_COLOR_PALETTE.id;
        return async () => {
          const settingStore = useSettingStore();
          const theme = colorPaletteStore.completedActivePalette;
          if (theme.light_theme) {
            previousLightTheme = theme.id;
            await settingStore.set("Comfy.ColorPalette", previousDarkTheme);
          } else {
            previousDarkTheme = theme.id;
            await settingStore.set("Comfy.ColorPalette", previousLightTheme);
          }
        };
      })()
    },
    {
      id: "Workspace.ToggleBottomPanel",
      icon: "pi pi-list",
      label: "Toggle Bottom Panel",
      versionAdded: "1.3.22",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        bottomPanelStore.toggleBottomPanel();
      }, "function")
    },
    {
      id: "Workspace.ToggleFocusMode",
      icon: "pi pi-eye",
      label: "Toggle Focus Mode",
      versionAdded: "1.3.27",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        useWorkspaceStore().toggleFocusMode();
      }, "function")
    },
    {
      id: "Comfy.Graph.FitGroupToContents",
      icon: "pi pi-expand",
      label: "Fit Group To Contents",
      versionAdded: "1.4.9",
      function: /* @__PURE__ */ __name(() => {
        for (const group of app.canvas.selectedItems) {
          if (group instanceof LGraphGroup) {
            group.recomputeInsideNodes();
            const padding = useSettingStore().get(
              "Comfy.GroupSelectedNodes.Padding"
            );
            group.resizeTo(group.children, padding);
            app.graph.change();
          }
        }
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyUIIssues",
      icon: "pi pi-github",
      label: "Open ComfyUI Issues",
      menubarLabel: "ComfyUI Issues",
      versionAdded: "1.5.5",
      function: /* @__PURE__ */ __name(() => {
        window.open(
          "https://github.com/comfyanonymous/ComfyUI/issues",
          "_blank"
        );
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyUIDocs",
      icon: "pi pi-info-circle",
      label: "Open ComfyUI Docs",
      menubarLabel: "ComfyUI Docs",
      versionAdded: "1.5.5",
      function: /* @__PURE__ */ __name(() => {
        window.open("https://docs.comfy.org/", "_blank");
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyOrgDiscord",
      icon: "pi pi-discord",
      label: "Open Comfy-Org Discord",
      menubarLabel: "Comfy-Org Discord",
      versionAdded: "1.5.5",
      function: /* @__PURE__ */ __name(() => {
        window.open("https://www.comfy.org/discord", "_blank");
      }, "function")
    },
    {
      id: "Workspace.SearchBox.Toggle",
      icon: "pi pi-search",
      label: "Toggle Search Box",
      versionAdded: "1.5.7",
      function: /* @__PURE__ */ __name(() => {
        useSearchBoxStore().toggleVisible();
      }, "function")
    },
    {
      id: "Comfy.Help.AboutComfyUI",
      icon: "pi pi-info-circle",
      label: "Open About ComfyUI",
      menubarLabel: "About ComfyUI",
      versionAdded: "1.6.4",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showSettingsDialog("about");
      }, "function")
    },
    {
      id: "Comfy.DuplicateWorkflow",
      icon: "pi pi-clone",
      label: "Duplicate Current Workflow",
      versionAdded: "1.6.15",
      function: /* @__PURE__ */ __name(async () => {
        await workflowService.duplicateWorkflow(workflowStore.activeWorkflow);
      }, "function")
    },
    {
      id: "Workspace.CloseWorkflow",
      icon: "pi pi-times",
      label: "Close Current Workflow",
      versionAdded: "1.7.3",
      function: /* @__PURE__ */ __name(async () => {
        if (workflowStore.activeWorkflow)
          await workflowService.closeWorkflow(workflowStore.activeWorkflow);
      }, "function")
    },
    {
      id: "Comfy.Feedback",
      icon: "pi pi-megaphone",
      label: "Give Feedback",
      versionAdded: "1.8.2",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showIssueReportDialog({
          title: t$2("g.feedback"),
          subtitle: t$2("issueReport.feedbackTitle"),
          panelProps: {
            errorType: "Feedback",
            defaultFields: ["SystemStats", "Settings"]
          }
        });
      }, "function")
    },
    {
      id: "Comfy.ContactSupport",
      icon: "pi pi-question",
      label: "Contact Support",
      versionAdded: "1.17.8",
      function: /* @__PURE__ */ __name(() => {
        dialogService.showIssueReportDialog({
          title: t$2("issueReport.contactSupportTitle"),
          subtitle: t$2("issueReport.contactSupportDescription"),
          panelProps: {
            errorType: "ContactSupport",
            defaultFields: ["Workflow", "Logs", "SystemStats", "Settings"]
          }
        });
      }, "function")
    },
    {
      id: "Comfy.Help.OpenComfyUIForum",
      icon: "pi pi-comments",
      label: "Open ComfyUI Forum",
      menubarLabel: "ComfyUI Forum",
      versionAdded: "1.8.2",
      function: /* @__PURE__ */ __name(() => {
        window.open("https://forum.comfy.org/", "_blank");
      }, "function")
    },
    {
      id: "Comfy.Canvas.DeleteSelectedItems",
      icon: "pi pi-trash",
      label: "Delete Selected Items",
      versionAdded: "1.10.5",
      function: /* @__PURE__ */ __name(() => {
        app.canvas.deleteSelected();
        app.canvas.setDirty(true, true);
      }, "function")
    },
    {
      id: "Comfy.Manager.CustomNodesManager",
      icon: "pi pi-puzzle",
      label: "Toggle the Custom Nodes Manager",
      versionAdded: "1.12.10",
      function: /* @__PURE__ */ __name(() => {
        dialogService.toggleManagerDialog();
      }, "function")
    },
    {
      id: "Comfy.Manager.ToggleManagerProgressDialog",
      icon: "pi pi-spinner",
      label: "Toggle the Custom Nodes Manager Progress Bar",
      versionAdded: "1.13.9",
      function: /* @__PURE__ */ __name(() => {
        dialogService.toggleManagerProgressDialog();
      }, "function")
    },
    {
      id: "Comfy.User.OpenSignInDialog",
      icon: "pi pi-user",
      label: "Open Sign In Dialog",
      versionAdded: "1.17.6",
      function: /* @__PURE__ */ __name(async () => {
        await dialogService.showSignInDialog();
      }, "function")
    },
    {
      id: "Comfy.User.SignOut",
      icon: "pi pi-sign-out",
      label: "Sign Out",
      versionAdded: "1.18.1",
      function: /* @__PURE__ */ __name(async () => {
        await firebaseAuthActions.logout();
      }, "function")
    },
    {
      id: "Comfy.Canvas.MoveSelectedNodes.Up",
      icon: "pi pi-arrow-up",
      label: "Move Selected Nodes Up",
      versionAdded: moveSelectedNodesVersionAdded,
      function: /* @__PURE__ */ __name(() => moveSelectedNodes(([x, y], gridSize) => [x, y - gridSize]), "function")
    },
    {
      id: "Comfy.Canvas.MoveSelectedNodes.Down",
      icon: "pi pi-arrow-down",
      label: "Move Selected Nodes Down",
      versionAdded: moveSelectedNodesVersionAdded,
      function: /* @__PURE__ */ __name(() => moveSelectedNodes(([x, y], gridSize) => [x, y + gridSize]), "function")
    },
    {
      id: "Comfy.Canvas.MoveSelectedNodes.Left",
      icon: "pi pi-arrow-left",
      label: "Move Selected Nodes Left",
      versionAdded: moveSelectedNodesVersionAdded,
      function: /* @__PURE__ */ __name(() => moveSelectedNodes(([x, y], gridSize) => [x - gridSize, y]), "function")
    },
    {
      id: "Comfy.Canvas.MoveSelectedNodes.Right",
      icon: "pi pi-arrow-right",
      label: "Move Selected Nodes Right",
      versionAdded: moveSelectedNodesVersionAdded,
      function: /* @__PURE__ */ __name(() => moveSelectedNodes(([x, y], gridSize) => [x + gridSize, y]), "function")
    },
    {
      id: "Comfy.Canvas.AddEditModelStep",
      icon: "pi pi-pen-to-square",
      label: "Add Edit Model Step",
      versionAdded: "1.23.3",
      function: /* @__PURE__ */ __name(async () => {
        const node = app.canvas.selectedItems.values().next().value;
        if (!(node instanceof LGraphNode)) return;
        await addFluxKontextGroupNode(node);
      }, "function")
    },
    {
      id: "Comfy.Graph.ConvertToSubgraph",
      icon: "pi pi-sitemap",
      label: "Convert Selection to Subgraph",
      versionAdded: "1.20.1",
      category: "essentials",
      function: /* @__PURE__ */ __name(() => {
        const canvas = canvasStore.getCanvas();
        const graph = canvas.subgraph ?? canvas.graph;
        if (!graph) throw new TypeError("Canvas has no graph or subgraph set.");
        const res = graph.convertToSubgraph(canvas.selectedItems);
        if (!res) {
          toastStore.add({
            severity: "error",
            summary: t$2("toastMessages.cannotCreateSubgraph"),
            detail: t$2("toastMessages.failedToConvertToSubgraph"),
            life: 3e3
          });
          return;
        }
        const { node } = res;
        canvas.select(node);
      }, "function")
    },
    {
      id: "Workspace.ToggleBottomPanel.Shortcuts",
      icon: "pi pi-key",
      label: "Show Keybindings Dialog",
      versionAdded: "1.24.1",
      category: "view-controls",
      function: /* @__PURE__ */ __name(() => {
        bottomPanelStore.togglePanel("shortcuts");
      }, "function")
    }
  ];
  return commands.map((command) => ({ ...command, source: "System" }));
}
__name(useCoreCommands, "useCoreCommands");
var re$3 = { exports: {} };
"use strict";
const SEMVER_SPEC_VERSION = "2.0.0";
const MAX_LENGTH$1 = 256;
const MAX_SAFE_INTEGER$1 = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991;
const MAX_SAFE_COMPONENT_LENGTH = 16;
const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH$1 - 6;
const RELEASE_TYPES = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var constants$1 = {
  MAX_LENGTH: MAX_LENGTH$1,
  MAX_SAFE_COMPONENT_LENGTH,
  MAX_SAFE_BUILD_LENGTH,
  MAX_SAFE_INTEGER: MAX_SAFE_INTEGER$1,
  RELEASE_TYPES,
  SEMVER_SPEC_VERSION,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const constants$2 = /* @__PURE__ */ getDefaultExportFromCjs(constants$1);
"use strict";
var define_process_env_default = {};
const debug$1 = typeof process === "object" && define_process_env_default && define_process_env_default.NODE_DEBUG && /\bsemver\b/i.test(define_process_env_default.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
};
var debug_1 = debug$1;
const debug$2 = /* @__PURE__ */ getDefaultExportFromCjs(debug_1);
var re_1 = re$3.exports;
(function(module, exports) {
  "use strict";
  const {
    MAX_SAFE_COMPONENT_LENGTH: MAX_SAFE_COMPONENT_LENGTH2,
    MAX_SAFE_BUILD_LENGTH: MAX_SAFE_BUILD_LENGTH2,
    MAX_LENGTH: MAX_LENGTH2
  } = constants$1;
  const debug2 = debug_1;
  exports = module.exports = {};
  const re2 = exports.re = [];
  const safeRe = exports.safeRe = [];
  const src = exports.src = [];
  const safeSrc = exports.safeSrc = [];
  const t2 = exports.t = {};
  let R = 0;
  const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
  const safeRegexReplacements = [
    ["\\s", 1],
    ["\\d", MAX_LENGTH2],
    [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH2]
  ];
  const makeSafeRegex = /* @__PURE__ */ __name((value) => {
    for (const [token, max] of safeRegexReplacements) {
      value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
    }
    return value;
  }, "makeSafeRegex");
  const createToken = /* @__PURE__ */ __name((name, value, isGlobal) => {
    const safe = makeSafeRegex(value);
    const index2 = R++;
    debug2(name, index2, value);
    t2[name] = index2;
    src[index2] = value;
    safeSrc[index2] = safe;
    re2[index2] = new RegExp(value, isGlobal ? "g" : void 0);
    safeRe[index2] = new RegExp(safe, isGlobal ? "g" : void 0);
  }, "createToken");
  createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
  createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
  createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
  createToken("MAINVERSION", `(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})\\.(${src[t2.NUMERICIDENTIFIER]})`);
  createToken("MAINVERSIONLOOSE", `(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})\\.(${src[t2.NUMERICIDENTIFIERLOOSE]})`);
  createToken("PRERELEASEIDENTIFIER", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIER]})`);
  createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t2.NONNUMERICIDENTIFIER]}|${src[t2.NUMERICIDENTIFIERLOOSE]})`);
  createToken("PRERELEASE", `(?:-(${src[t2.PRERELEASEIDENTIFIER]}(?:\\.${src[t2.PRERELEASEIDENTIFIER]})*))`);
  createToken("PRERELEASELOOSE", `(?:-?(${src[t2.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t2.PRERELEASEIDENTIFIERLOOSE]})*))`);
  createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
  createToken("BUILD", `(?:\\+(${src[t2.BUILDIDENTIFIER]}(?:\\.${src[t2.BUILDIDENTIFIER]})*))`);
  createToken("FULLPLAIN", `v?${src[t2.MAINVERSION]}${src[t2.PRERELEASE]}?${src[t2.BUILD]}?`);
  createToken("FULL", `^${src[t2.FULLPLAIN]}$`);
  createToken("LOOSEPLAIN", `[v=\\s]*${src[t2.MAINVERSIONLOOSE]}${src[t2.PRERELEASELOOSE]}?${src[t2.BUILD]}?`);
  createToken("LOOSE", `^${src[t2.LOOSEPLAIN]}$`);
  createToken("GTLT", "((?:<|>)?=?)");
  createToken("XRANGEIDENTIFIERLOOSE", `${src[t2.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
  createToken("XRANGEIDENTIFIER", `${src[t2.NUMERICIDENTIFIER]}|x|X|\\*`);
  createToken("XRANGEPLAIN", `[v=\\s]*(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:\\.(${src[t2.XRANGEIDENTIFIER]})(?:${src[t2.PRERELEASE]})?${src[t2.BUILD]}?)?)?`);
  createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t2.XRANGEIDENTIFIERLOOSE]})(?:${src[t2.PRERELEASELOOSE]})?${src[t2.BUILD]}?)?)?`);
  createToken("XRANGE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAIN]}$`);
  createToken("XRANGELOOSE", `^${src[t2.GTLT]}\\s*${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH2}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH2}}))?`);
  createToken("COERCE", `${src[t2.COERCEPLAIN]}(?:$|[^\\d])`);
  createToken("COERCEFULL", src[t2.COERCEPLAIN] + `(?:${src[t2.PRERELEASE]})?(?:${src[t2.BUILD]})?(?:$|[^\\d])`);
  createToken("COERCERTL", src[t2.COERCE], true);
  createToken("COERCERTLFULL", src[t2.COERCEFULL], true);
  createToken("LONETILDE", "(?:~>?)");
  createToken("TILDETRIM", `(\\s*)${src[t2.LONETILDE]}\\s+`, true);
  exports.tildeTrimReplace = "$1~";
  createToken("TILDE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAIN]}$`);
  createToken("TILDELOOSE", `^${src[t2.LONETILDE]}${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("LONECARET", "(?:\\^)");
  createToken("CARETTRIM", `(\\s*)${src[t2.LONECARET]}\\s+`, true);
  exports.caretTrimReplace = "$1^";
  createToken("CARET", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAIN]}$`);
  createToken("CARETLOOSE", `^${src[t2.LONECARET]}${src[t2.XRANGEPLAINLOOSE]}$`);
  createToken("COMPARATORLOOSE", `^${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]})$|^$`);
  createToken("COMPARATOR", `^${src[t2.GTLT]}\\s*(${src[t2.FULLPLAIN]})$|^$`);
  createToken("COMPARATORTRIM", `(\\s*)${src[t2.GTLT]}\\s*(${src[t2.LOOSEPLAIN]}|${src[t2.XRANGEPLAIN]})`, true);
  exports.comparatorTrimReplace = "$1$2$3";
  createToken("HYPHENRANGE", `^\\s*(${src[t2.XRANGEPLAIN]})\\s+-\\s+(${src[t2.XRANGEPLAIN]})\\s*$`);
  createToken("HYPHENRANGELOOSE", `^\\s*(${src[t2.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t2.XRANGEPLAINLOOSE]})\\s*$`);
  createToken("STAR", "(<|>)?=?\\s*\\*");
  createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
  createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(re$3, re$3.exports);
var reExports = re$3.exports;
const re$2 = /* @__PURE__ */ getDefaultExportFromCjs(reExports);
"use strict";
const looseOption = Object.freeze({ loose: true });
const emptyOpts = Object.freeze({});
const parseOptions$1 = /* @__PURE__ */ __name((options) => {
  if (!options) {
    return emptyOpts;
  }
  if (typeof options !== "object") {
    return looseOption;
  }
  return options;
}, "parseOptions$1");
var parseOptions_1 = parseOptions$1;
const parseOptions$2 = /* @__PURE__ */ getDefaultExportFromCjs(parseOptions_1);
"use strict";
const numeric = /^[0-9]+$/;
const compareIdentifiers$1 = /* @__PURE__ */ __name((a, b) => {
  const anum = numeric.test(a);
  const bnum = numeric.test(b);
  if (anum && bnum) {
    a = +a;
    b = +b;
  }
  return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
}, "compareIdentifiers$1");
const rcompareIdentifiers = /* @__PURE__ */ __name((a, b) => compareIdentifiers$1(b, a), "rcompareIdentifiers");
var identifiers$1 = {
  compareIdentifiers: compareIdentifiers$1,
  rcompareIdentifiers
};
const identifiers$2 = /* @__PURE__ */ getDefaultExportFromCjs(identifiers$1);
"use strict";
const debug = debug_1;
const { MAX_LENGTH, MAX_SAFE_INTEGER } = constants$1;
const { safeRe: re$1, t: t$1 } = reExports;
const parseOptions = parseOptions_1;
const { compareIdentifiers } = identifiers$1;
let SemVer$d = class SemVer {
  static {
    __name(this, "SemVer");
  }
  constructor(version, options) {
    options = parseOptions(options);
    if (version instanceof SemVer) {
      if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
        return version;
      } else {
        version = version.version;
      }
    } else if (typeof version !== "string") {
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
    }
    if (version.length > MAX_LENGTH) {
      throw new TypeError(
        `version is longer than ${MAX_LENGTH} characters`
      );
    }
    debug("SemVer", version, options);
    this.options = options;
    this.loose = !!options.loose;
    this.includePrerelease = !!options.includePrerelease;
    const m = version.trim().match(options.loose ? re$1[t$1.LOOSE] : re$1[t$1.FULL]);
    if (!m) {
      throw new TypeError(`Invalid Version: ${version}`);
    }
    this.raw = version;
    this.major = +m[1];
    this.minor = +m[2];
    this.patch = +m[3];
    if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
      throw new TypeError("Invalid major version");
    }
    if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
      throw new TypeError("Invalid minor version");
    }
    if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
      throw new TypeError("Invalid patch version");
    }
    if (!m[4]) {
      this.prerelease = [];
    } else {
      this.prerelease = m[4].split(".").map((id) => {
        if (/^[0-9]+$/.test(id)) {
          const num = +id;
          if (num >= 0 && num < MAX_SAFE_INTEGER) {
            return num;
          }
        }
        return id;
      });
    }
    this.build = m[5] ? m[5].split(".") : [];
    this.format();
  }
  format() {
    this.version = `${this.major}.${this.minor}.${this.patch}`;
    if (this.prerelease.length) {
      this.version += `-${this.prerelease.join(".")}`;
    }
    return this.version;
  }
  toString() {
    return this.version;
  }
  compare(other) {
    debug("SemVer.compare", this.version, this.options, other);
    if (!(other instanceof SemVer)) {
      if (typeof other === "string" && other === this.version) {
        return 0;
      }
      other = new SemVer(other, this.options);
    }
    if (other.version === this.version) {
      return 0;
    }
    return this.compareMain(other) || this.comparePre(other);
  }
  compareMain(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    return compareIdentifiers(this.major, other.major) || compareIdentifiers(this.minor, other.minor) || compareIdentifiers(this.patch, other.patch);
  }
  comparePre(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    if (this.prerelease.length && !other.prerelease.length) {
      return -1;
    } else if (!this.prerelease.length && other.prerelease.length) {
      return 1;
    } else if (!this.prerelease.length && !other.prerelease.length) {
      return 0;
    }
    let i = 0;
    do {
      const a = this.prerelease[i];
      const b = other.prerelease[i];
      debug("prerelease compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  compareBuild(other) {
    if (!(other instanceof SemVer)) {
      other = new SemVer(other, this.options);
    }
    let i = 0;
    do {
      const a = this.build[i];
      const b = other.build[i];
      debug("build compare", i, a, b);
      if (a === void 0 && b === void 0) {
        return 0;
      } else if (b === void 0) {
        return 1;
      } else if (a === void 0) {
        return -1;
      } else if (a === b) {
        continue;
      } else {
        return compareIdentifiers(a, b);
      }
    } while (++i);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(release, identifier, identifierBase) {
    if (release.startsWith("pre")) {
      if (!identifier && identifierBase === false) {
        throw new Error("invalid increment argument: identifier is empty");
      }
      if (identifier) {
        const match = `-${identifier}`.match(this.options.loose ? re$1[t$1.PRERELEASELOOSE] : re$1[t$1.PRERELEASE]);
        if (!match || match[1] !== identifier) {
          throw new Error(`invalid identifier: ${identifier}`);
        }
      }
    }
    switch (release) {
      case "premajor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor = 0;
        this.major++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "preminor":
        this.prerelease.length = 0;
        this.patch = 0;
        this.minor++;
        this.inc("pre", identifier, identifierBase);
        break;
      case "prepatch":
        this.prerelease.length = 0;
        this.inc("patch", identifier, identifierBase);
        this.inc("pre", identifier, identifierBase);
        break;
      case "prerelease":
        if (this.prerelease.length === 0) {
          this.inc("patch", identifier, identifierBase);
        }
        this.inc("pre", identifier, identifierBase);
        break;
      case "release":
        if (this.prerelease.length === 0) {
          throw new Error(`version ${this.raw} is not a prerelease`);
        }
        this.prerelease.length = 0;
        break;
      case "major":
        if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
          this.major++;
        }
        this.minor = 0;
        this.patch = 0;
        this.prerelease = [];
        break;
      case "minor":
        if (this.patch !== 0 || this.prerelease.length === 0) {
          this.minor++;
        }
        this.patch = 0;
        this.prerelease = [];
        break;
      case "patch":
        if (this.prerelease.length === 0) {
          this.patch++;
        }
        this.prerelease = [];
        break;
      case "pre": {
        const base = Number(identifierBase) ? 1 : 0;
        if (this.prerelease.length === 0) {
          this.prerelease = [base];
        } else {
          let i = this.prerelease.length;
          while (--i >= 0) {
            if (typeof this.prerelease[i] === "number") {
              this.prerelease[i]++;
              i = -2;
            }
          }
          if (i === -1) {
            if (identifier === this.prerelease.join(".") && identifierBase === false) {
              throw new Error("invalid increment argument: identifier already exists");
            }
            this.prerelease.push(base);
          }
        }
        if (identifier) {
          let prerelease2 = [identifier, base];
          if (identifierBase === false) {
            prerelease2 = [identifier];
          }
          if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
            if (isNaN(this.prerelease[1])) {
              this.prerelease = prerelease2;
            }
          } else {
            this.prerelease = prerelease2;
          }
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${release}`);
    }
    this.raw = this.format();
    if (this.build.length) {
      this.raw += `+${this.build.join(".")}`;
    }
    return this;
  }
};
var semver$1 = SemVer$d;
const semver$2 = /* @__PURE__ */ getDefaultExportFromCjs(semver$1);
"use strict";
const SemVer$c = semver$1;
const parse$6 = /* @__PURE__ */ __name((version, options, throwErrors = false) => {
  if (version instanceof SemVer$c) {
    return version;
  }
  try {
    return new SemVer$c(version, options);
  } catch (er) {
    if (!throwErrors) {
      return null;
    }
    throw er;
  }
}, "parse$6");
var parse_1 = parse$6;
const parse$7 = /* @__PURE__ */ getDefaultExportFromCjs(parse_1);
"use strict";
const parse$5 = parse_1;
const valid$3 = /* @__PURE__ */ __name((version, options) => {
  const v = parse$5(version, options);
  return v ? v.version : null;
}, "valid$3");
var valid_1 = valid$3;
const valid$4 = /* @__PURE__ */ getDefaultExportFromCjs(valid_1);
"use strict";
const parse$4 = parse_1;
const clean$1 = /* @__PURE__ */ __name((version, options) => {
  const s = parse$4(version.trim().replace(/^[=v]+/, ""), options);
  return s ? s.version : null;
}, "clean$1");
var clean_1 = clean$1;
const clean$2 = /* @__PURE__ */ getDefaultExportFromCjs(clean_1);
"use strict";
const SemVer$b = semver$1;
const inc$1 = /* @__PURE__ */ __name((version, release, options, identifier, identifierBase) => {
  if (typeof options === "string") {
    identifierBase = identifier;
    identifier = options;
    options = void 0;
  }
  try {
    return new SemVer$b(
      version instanceof SemVer$b ? version.version : version,
      options
    ).inc(release, identifier, identifierBase).version;
  } catch (er) {
    return null;
  }
}, "inc$1");
var inc_1 = inc$1;
const inc$2 = /* @__PURE__ */ getDefaultExportFromCjs(inc_1);
"use strict";
const parse$3 = parse_1;
const diff$1 = /* @__PURE__ */ __name((version1, version2) => {
  const v1 = parse$3(version1, null, true);
  const v2 = parse$3(version2, null, true);
  const comparison = v1.compare(v2);
  if (comparison === 0) {
    return null;
  }
  const v1Higher = comparison > 0;
  const highVersion = v1Higher ? v1 : v2;
  const lowVersion = v1Higher ? v2 : v1;
  const highHasPre = !!highVersion.prerelease.length;
  const lowHasPre = !!lowVersion.prerelease.length;
  if (lowHasPre && !highHasPre) {
    if (!lowVersion.patch && !lowVersion.minor) {
      return "major";
    }
    if (lowVersion.compareMain(highVersion) === 0) {
      if (lowVersion.minor && !lowVersion.patch) {
        return "minor";
      }
      return "patch";
    }
  }
  const prefix = highHasPre ? "pre" : "";
  if (v1.major !== v2.major) {
    return prefix + "major";
  }
  if (v1.minor !== v2.minor) {
    return prefix + "minor";
  }
  if (v1.patch !== v2.patch) {
    return prefix + "patch";
  }
  return "prerelease";
}, "diff$1");
var diff_1 = diff$1;
const diff$2 = /* @__PURE__ */ getDefaultExportFromCjs(diff_1);
"use strict";
const SemVer$a = semver$1;
const major$1 = /* @__PURE__ */ __name((a, loose) => new SemVer$a(a, loose).major, "major$1");
var major_1 = major$1;
const major$2 = /* @__PURE__ */ getDefaultExportFromCjs(major_1);
"use strict";
const SemVer$9 = semver$1;
const minor$1 = /* @__PURE__ */ __name((a, loose) => new SemVer$9(a, loose).minor, "minor$1");
var minor_1 = minor$1;
const minor$2 = /* @__PURE__ */ getDefaultExportFromCjs(minor_1);
"use strict";
const SemVer$8 = semver$1;
const patch$1 = /* @__PURE__ */ __name((a, loose) => new SemVer$8(a, loose).patch, "patch$1");
var patch_1 = patch$1;
const patch$2 = /* @__PURE__ */ getDefaultExportFromCjs(patch_1);
"use strict";
const parse$2 = parse_1;
const prerelease$1 = /* @__PURE__ */ __name((version, options) => {
  const parsed = parse$2(version, options);
  return parsed && parsed.prerelease.length ? parsed.prerelease : null;
}, "prerelease$1");
var prerelease_1 = prerelease$1;
const prerelease$2 = /* @__PURE__ */ getDefaultExportFromCjs(prerelease_1);
"use strict";
const SemVer$7 = semver$1;
const compare$b = /* @__PURE__ */ __name((a, b, loose) => new SemVer$7(a, loose).compare(new SemVer$7(b, loose)), "compare$b");
var compare_1 = compare$b;
const compare$c = /* @__PURE__ */ getDefaultExportFromCjs(compare_1);
"use strict";
const compare$a = compare_1;
const rcompare$1 = /* @__PURE__ */ __name((a, b, loose) => compare$a(b, a, loose), "rcompare$1");
var rcompare_1 = rcompare$1;
const rcompare$2 = /* @__PURE__ */ getDefaultExportFromCjs(rcompare_1);
"use strict";
const compare$9 = compare_1;
const compareLoose$1 = /* @__PURE__ */ __name((a, b) => compare$9(a, b, true), "compareLoose$1");
var compareLoose_1 = compareLoose$1;
const compareLoose$2 = /* @__PURE__ */ getDefaultExportFromCjs(compareLoose_1);
"use strict";
const SemVer$6 = semver$1;
const compareBuild$3 = /* @__PURE__ */ __name((a, b, loose) => {
  const versionA = new SemVer$6(a, loose);
  const versionB = new SemVer$6(b, loose);
  return versionA.compare(versionB) || versionA.compareBuild(versionB);
}, "compareBuild$3");
var compareBuild_1 = compareBuild$3;
const compareBuild$4 = /* @__PURE__ */ getDefaultExportFromCjs(compareBuild_1);
"use strict";
const compareBuild$2 = compareBuild_1;
const sort$1 = /* @__PURE__ */ __name((list, loose) => list.sort((a, b) => compareBuild$2(a, b, loose)), "sort$1");
var sort_1 = sort$1;
const sort$2 = /* @__PURE__ */ getDefaultExportFromCjs(sort_1);
"use strict";
const compareBuild$1 = compareBuild_1;
const rsort$1 = /* @__PURE__ */ __name((list, loose) => list.sort((a, b) => compareBuild$1(b, a, loose)), "rsort$1");
var rsort_1 = rsort$1;
const rsort$2 = /* @__PURE__ */ getDefaultExportFromCjs(rsort_1);
"use strict";
const compare$8 = compare_1;
const gt$4 = /* @__PURE__ */ __name((a, b, loose) => compare$8(a, b, loose) > 0, "gt$4");
var gt_1 = gt$4;
const gt$5 = /* @__PURE__ */ getDefaultExportFromCjs(gt_1);
"use strict";
const compare$7 = compare_1;
const lt$3 = /* @__PURE__ */ __name((a, b, loose) => compare$7(a, b, loose) < 0, "lt$3");
var lt_1 = lt$3;
const lt$4 = /* @__PURE__ */ getDefaultExportFromCjs(lt_1);
"use strict";
const compare$6 = compare_1;
const eq$2 = /* @__PURE__ */ __name((a, b, loose) => compare$6(a, b, loose) === 0, "eq$2");
var eq_1 = eq$2;
const eq$3 = /* @__PURE__ */ getDefaultExportFromCjs(eq_1);
"use strict";
const compare$5 = compare_1;
const neq$2 = /* @__PURE__ */ __name((a, b, loose) => compare$5(a, b, loose) !== 0, "neq$2");
var neq_1 = neq$2;
const neq$3 = /* @__PURE__ */ getDefaultExportFromCjs(neq_1);
"use strict";
const compare$4 = compare_1;
const gte$3 = /* @__PURE__ */ __name((a, b, loose) => compare$4(a, b, loose) >= 0, "gte$3");
var gte_1 = gte$3;
const gte$4 = /* @__PURE__ */ getDefaultExportFromCjs(gte_1);
"use strict";
const compare$3 = compare_1;
const lte$3 = /* @__PURE__ */ __name((a, b, loose) => compare$3(a, b, loose) <= 0, "lte$3");
var lte_1 = lte$3;
const lte$4 = /* @__PURE__ */ getDefaultExportFromCjs(lte_1);
"use strict";
const eq$1 = eq_1;
const neq$1 = neq_1;
const gt$3 = gt_1;
const gte$2 = gte_1;
const lt$2 = lt_1;
const lte$2 = lte_1;
const cmp$1 = /* @__PURE__ */ __name((a, op, b, loose) => {
  switch (op) {
    case "===":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b === "object") {
        b = b.version;
      }
      return a === b;
    case "!==":
      if (typeof a === "object") {
        a = a.version;
      }
      if (typeof b === "object") {
        b = b.version;
      }
      return a !== b;
    case "":
    case "=":
    case "==":
      return eq$1(a, b, loose);
    case "!=":
      return neq$1(a, b, loose);
    case ">":
      return gt$3(a, b, loose);
    case ">=":
      return gte$2(a, b, loose);
    case "<":
      return lt$2(a, b, loose);
    case "<=":
      return lte$2(a, b, loose);
    default:
      throw new TypeError(`Invalid operator: ${op}`);
  }
}, "cmp$1");
var cmp_1 = cmp$1;
const cmp$2 = /* @__PURE__ */ getDefaultExportFromCjs(cmp_1);
"use strict";
const SemVer$5 = semver$1;
const parse$1 = parse_1;
const { safeRe: re, t } = reExports;
const coerce$1 = /* @__PURE__ */ __name((version, options) => {
  if (version instanceof SemVer$5) {
    return version;
  }
  if (typeof version === "number") {
    version = String(version);
  }
  if (typeof version !== "string") {
    return null;
  }
  options = options || {};
  let match = null;
  if (!options.rtl) {
    match = version.match(options.includePrerelease ? re[t.COERCEFULL] : re[t.COERCE]);
  } else {
    const coerceRtlRegex = options.includePrerelease ? re[t.COERCERTLFULL] : re[t.COERCERTL];
    let next;
    while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
      if (!match || next.index + next[0].length !== match.index + match[0].length) {
        match = next;
      }
      coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
    }
    coerceRtlRegex.lastIndex = -1;
  }
  if (match === null) {
    return null;
  }
  const major2 = match[2];
  const minor2 = match[3] || "0";
  const patch2 = match[4] || "0";
  const prerelease2 = options.includePrerelease && match[5] ? `-${match[5]}` : "";
  const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
  return parse$1(`${major2}.${minor2}.${patch2}${prerelease2}${build}`, options);
}, "coerce$1");
var coerce_1 = coerce$1;
const coerce$2 = /* @__PURE__ */ getDefaultExportFromCjs(coerce_1);
"use strict";
class LRUCache {
  static {
    __name(this, "LRUCache");
  }
  constructor() {
    this.max = 1e3;
    this.map = /* @__PURE__ */ new Map();
  }
  get(key) {
    const value = this.map.get(key);
    if (value === void 0) {
      return void 0;
    } else {
      this.map.delete(key);
      this.map.set(key, value);
      return value;
    }
  }
  delete(key) {
    return this.map.delete(key);
  }
  set(key, value) {
    const deleted = this.delete(key);
    if (!deleted && value !== void 0) {
      if (this.map.size >= this.max) {
        const firstKey = this.map.keys().next().value;
        this.delete(firstKey);
      }
      this.map.set(key, value);
    }
    return this;
  }
}
var lrucache = LRUCache;
const lrucache$1 = /* @__PURE__ */ getDefaultExportFromCjs(lrucache);
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  "use strict";
  const SPACE_CHARACTERS = /\s+/g;
  class Range2 {
    static {
      __name(this, "Range");
    }
    constructor(range2, options) {
      options = parseOptions2(options);
      if (range2 instanceof Range2) {
        if (range2.loose === !!options.loose && range2.includePrerelease === !!options.includePrerelease) {
          return range2;
        } else {
          return new Range2(range2.raw, options);
        }
      }
      if (range2 instanceof Comparator2) {
        this.raw = range2.value;
        this.set = [[range2]];
        this.formatted = void 0;
        return this;
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range2.trim().replace(SPACE_CHARACTERS, " ");
      this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
      if (!this.set.length) {
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      }
      if (this.set.length > 1) {
        const first = this.set[0];
        this.set = this.set.filter((c) => !isNullSet(c[0]));
        if (this.set.length === 0) {
          this.set = [first];
        } else if (this.set.length > 1) {
          for (const c of this.set) {
            if (c.length === 1 && isAny(c[0])) {
              this.set = [c];
              break;
            }
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let i = 0; i < this.set.length; i++) {
          if (i > 0) {
            this.formatted += "||";
          }
          const comps = this.set[i];
          for (let k = 0; k < comps.length; k++) {
            if (k > 0) {
              this.formatted += " ";
            }
            this.formatted += comps[k].toString().trim();
          }
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range2) {
      const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
      const memoKey = memoOpts + ":" + range2;
      const cached = cache.get(memoKey);
      if (cached) {
        return cached;
      }
      const loose = this.options.loose;
      const hr = loose ? re2[t2.HYPHENRANGELOOSE] : re2[t2.HYPHENRANGE];
      range2 = range2.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug2("hyphen replace", range2);
      range2 = range2.replace(re2[t2.COMPARATORTRIM], comparatorTrimReplace);
      debug2("comparator trim", range2);
      range2 = range2.replace(re2[t2.TILDETRIM], tildeTrimReplace);
      debug2("tilde trim", range2);
      range2 = range2.replace(re2[t2.CARETTRIM], caretTrimReplace);
      debug2("caret trim", range2);
      let rangeList = range2.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
      if (loose) {
        rangeList = rangeList.filter((comp) => {
          debug2("loose invalid filter", comp, this.options);
          return !!comp.match(re2[t2.COMPARATORLOOSE]);
        });
      }
      debug2("range list", rangeList);
      const rangeMap = /* @__PURE__ */ new Map();
      const comparators = rangeList.map((comp) => new Comparator2(comp, this.options));
      for (const comp of comparators) {
        if (isNullSet(comp)) {
          return [comp];
        }
        rangeMap.set(comp.value, comp);
      }
      if (rangeMap.size > 1 && rangeMap.has("")) {
        rangeMap.delete("");
      }
      const result = [...rangeMap.values()];
      cache.set(memoKey, result);
      return result;
    }
    intersects(range2, options) {
      if (!(range2 instanceof Range2)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some((thisComparators) => {
        return isSatisfiable(thisComparators, options) && range2.set.some((rangeComparators) => {
          return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
            return rangeComparators.every((rangeComparator) => {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
      if (!version) {
        return false;
      }
      if (typeof version === "string") {
        try {
          version = new SemVer3(version, this.options);
        } catch (er) {
          return false;
        }
      }
      for (let i = 0; i < this.set.length; i++) {
        if (testSet(this.set[i], version, this.options)) {
          return true;
        }
      }
      return false;
    }
  }
  range = Range2;
  const LRU = lrucache;
  const cache = new LRU();
  const parseOptions2 = parseOptions_1;
  const Comparator2 = requireComparator();
  const debug2 = debug_1;
  const SemVer3 = semver$1;
  const {
    safeRe: re2,
    t: t2,
    comparatorTrimReplace,
    tildeTrimReplace,
    caretTrimReplace
  } = reExports;
  const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = constants$1;
  const isNullSet = /* @__PURE__ */ __name((c) => c.value === "<0.0.0-0", "isNullSet");
  const isAny = /* @__PURE__ */ __name((c) => c.value === "", "isAny");
  const isSatisfiable = /* @__PURE__ */ __name((comparators, options) => {
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every((otherComparator) => {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  }, "isSatisfiable");
  const parseComparator = /* @__PURE__ */ __name((comp, options) => {
    debug2("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug2("caret", comp);
    comp = replaceTildes(comp, options);
    debug2("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug2("xrange", comp);
    comp = replaceStars(comp, options);
    debug2("stars", comp);
    return comp;
  }, "parseComparator");
  const isX = /* @__PURE__ */ __name((id) => !id || id.toLowerCase() === "x" || id === "*", "isX");
  const replaceTildes = /* @__PURE__ */ __name((comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
  }, "replaceTildes");
  const replaceTilde = /* @__PURE__ */ __name((comp, options) => {
    const r = options.loose ? re2[t2.TILDELOOSE] : re2[t2.TILDE];
    return comp.replace(r, (_2, M, m, p, pr) => {
      debug2("tilde", comp, _2, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
      } else if (pr) {
        debug2("replaceTilde pr", pr);
        ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
      } else {
        ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
      }
      debug2("tilde return", ret);
      return ret;
    });
  }, "replaceTilde");
  const replaceCarets = /* @__PURE__ */ __name((comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
  }, "replaceCarets");
  const replaceCaret = /* @__PURE__ */ __name((comp, options) => {
    debug2("caret", comp, options);
    const r = options.loose ? re2[t2.CARETLOOSE] : re2[t2.CARET];
    const z = options.includePrerelease ? "-0" : "";
    return comp.replace(r, (_2, M, m, p, pr) => {
      debug2("caret", comp, _2, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        if (M === "0") {
          ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
        }
      } else if (pr) {
        debug2("replaceCaret pr", pr);
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
        }
      } else {
        debug2("no pr");
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
        }
      }
      debug2("caret return", ret);
      return ret;
    });
  }, "replaceCaret");
  const replaceXRanges = /* @__PURE__ */ __name((comp, options) => {
    debug2("replaceXRanges", comp, options);
    return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
  }, "replaceXRanges");
  const replaceXRange = /* @__PURE__ */ __name((comp, options) => {
    comp = comp.trim();
    const r = options.loose ? re2[t2.XRANGELOOSE] : re2[t2.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
      debug2("xRange", comp, ret, gtlt, M, m, p, pr);
      const xM = isX(M);
      const xm = xM || isX(m);
      const xp = xm || isX(p);
      const anyX = xp;
      if (gtlt === "=" && anyX) {
        gtlt = "";
      }
      pr = options.includePrerelease ? "-0" : "";
      if (xM) {
        if (gtlt === ">" || gtlt === "<") {
          ret = "<0.0.0-0";
        } else {
          ret = "*";
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m = 0;
        }
        p = 0;
        if (gtlt === ">") {
          gtlt = ">=";
          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === "<=") {
          gtlt = "<";
          if (xm) {
            M = +M + 1;
          } else {
            m = +m + 1;
          }
        }
        if (gtlt === "<") {
          pr = "-0";
        }
        ret = `${gtlt + M}.${m}.${p}${pr}`;
      } else if (xm) {
        ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
      } else if (xp) {
        ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
      }
      debug2("xRange return", ret);
      return ret;
    });
  }, "replaceXRange");
  const replaceStars = /* @__PURE__ */ __name((comp, options) => {
    debug2("replaceStars", comp, options);
    return comp.trim().replace(re2[t2.STAR], "");
  }, "replaceStars");
  const replaceGTE0 = /* @__PURE__ */ __name((comp, options) => {
    debug2("replaceGTE0", comp, options);
    return comp.trim().replace(re2[options.includePrerelease ? t2.GTE0PRE : t2.GTE0], "");
  }, "replaceGTE0");
  const hyphenReplace = /* @__PURE__ */ __name((incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
    if (isX(fM)) {
      from = "";
    } else if (isX(fm)) {
      from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
    } else if (isX(fp)) {
      from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
    } else if (fpr) {
      from = `>=${from}`;
    } else {
      from = `>=${from}${incPr ? "-0" : ""}`;
    }
    if (isX(tM)) {
      to = "";
    } else if (isX(tm)) {
      to = `<${+tM + 1}.0.0-0`;
    } else if (isX(tp)) {
      to = `<${tM}.${+tm + 1}.0-0`;
    } else if (tpr) {
      to = `<=${tM}.${tm}.${tp}-${tpr}`;
    } else if (incPr) {
      to = `<${tM}.${tm}.${+tp + 1}-0`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  }, "hyphenReplace");
  const testSet = /* @__PURE__ */ __name((set, version, options) => {
    for (let i = 0; i < set.length; i++) {
      if (!set[i].test(version)) {
        return false;
      }
    }
    if (version.prerelease.length && !options.includePrerelease) {
      for (let i = 0; i < set.length; i++) {
        debug2(set[i].semver);
        if (set[i].semver === Comparator2.ANY) {
          continue;
        }
        if (set[i].semver.prerelease.length > 0) {
          const allowed = set[i].semver;
          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  }, "testSet");
  return range;
}
__name(requireRange, "requireRange");
var comparator;
var hasRequiredComparator;
function requireComparator() {
  if (hasRequiredComparator) return comparator;
  hasRequiredComparator = 1;
  "use strict";
  const ANY2 = Symbol("SemVer ANY");
  class Comparator2 {
    static {
      __name(this, "Comparator");
    }
    static get ANY() {
      return ANY2;
    }
    constructor(comp, options) {
      options = parseOptions2(options);
      if (comp instanceof Comparator2) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      comp = comp.trim().split(/\s+/).join(" ");
      debug2("comparator", comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY2) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug2("comp", this);
    }
    parse(comp) {
      const r = this.options.loose ? re2[t2.COMPARATORLOOSE] : re2[t2.COMPARATOR];
      const m = comp.match(r);
      if (!m) {
        throw new TypeError(`Invalid comparator: ${comp}`);
      }
      this.operator = m[1] !== void 0 ? m[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (!m[2]) {
        this.semver = ANY2;
      } else {
        this.semver = new SemVer3(m[2], this.options.loose);
      }
    }
    toString() {
      return this.value;
    }
    test(version) {
      debug2("Comparator.test", version, this.options.loose);
      if (this.semver === ANY2 || version === ANY2) {
        return true;
      }
      if (typeof version === "string") {
        try {
          version = new SemVer3(version, this.options);
        } catch (er) {
          return false;
        }
      }
      return cmp2(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof Comparator2)) {
        throw new TypeError("a Comparator is required");
      }
      if (this.operator === "") {
        if (this.value === "") {
          return true;
        }
        return new Range2(comp.value, options).test(this.value);
      } else if (comp.operator === "") {
        if (comp.value === "") {
          return true;
        }
        return new Range2(this.value, options).test(comp.semver);
      }
      options = parseOptions2(options);
      if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
        return false;
      }
      if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
        return false;
      }
      if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
        return true;
      }
      if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
        return true;
      }
      if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
        return true;
      }
      if (cmp2(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
        return true;
      }
      if (cmp2(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
        return true;
      }
      return false;
    }
  }
  comparator = Comparator2;
  const parseOptions2 = parseOptions_1;
  const { safeRe: re2, t: t2 } = reExports;
  const cmp2 = cmp_1;
  const debug2 = debug_1;
  const SemVer3 = semver$1;
  const Range2 = requireRange();
  return comparator;
}
__name(requireComparator, "requireComparator");
"use strict";
const Range$9 = requireRange();
const satisfies$4 = /* @__PURE__ */ __name((version, range2, options) => {
  try {
    range2 = new Range$9(range2, options);
  } catch (er) {
    return false;
  }
  return range2.test(version);
}, "satisfies$4");
var satisfies_1 = satisfies$4;
const satisfies$5 = /* @__PURE__ */ getDefaultExportFromCjs(satisfies_1);
"use strict";
const Range$8 = requireRange();
const toComparators$1 = /* @__PURE__ */ __name((range2, options) => new Range$8(range2, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" ")), "toComparators$1");
var toComparators_1 = toComparators$1;
const toComparators$2 = /* @__PURE__ */ getDefaultExportFromCjs(toComparators_1);
"use strict";
const SemVer$4 = semver$1;
const Range$7 = requireRange();
const maxSatisfying$1 = /* @__PURE__ */ __name((versions, range2, options) => {
  let max = null;
  let maxSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$7(range2, options);
  } catch (er) {
    return null;
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      if (!max || maxSV.compare(v) === -1) {
        max = v;
        maxSV = new SemVer$4(max, options);
      }
    }
  });
  return max;
}, "maxSatisfying$1");
var maxSatisfying_1 = maxSatisfying$1;
const maxSatisfying$2 = /* @__PURE__ */ getDefaultExportFromCjs(maxSatisfying_1);
"use strict";
const SemVer$3 = semver$1;
const Range$6 = requireRange();
const minSatisfying$1 = /* @__PURE__ */ __name((versions, range2, options) => {
  let min = null;
  let minSV = null;
  let rangeObj = null;
  try {
    rangeObj = new Range$6(range2, options);
  } catch (er) {
    return null;
  }
  versions.forEach((v) => {
    if (rangeObj.test(v)) {
      if (!min || minSV.compare(v) === 1) {
        min = v;
        minSV = new SemVer$3(min, options);
      }
    }
  });
  return min;
}, "minSatisfying$1");
var minSatisfying_1 = minSatisfying$1;
const minSatisfying$2 = /* @__PURE__ */ getDefaultExportFromCjs(minSatisfying_1);
"use strict";
const SemVer$2 = semver$1;
const Range$5 = requireRange();
const gt$2 = gt_1;
const minVersion$1 = /* @__PURE__ */ __name((range2, loose) => {
  range2 = new Range$5(range2, loose);
  let minver = new SemVer$2("0.0.0");
  if (range2.test(minver)) {
    return minver;
  }
  minver = new SemVer$2("0.0.0-0");
  if (range2.test(minver)) {
    return minver;
  }
  minver = null;
  for (let i = 0; i < range2.set.length; ++i) {
    const comparators = range2.set[i];
    let setMin = null;
    comparators.forEach((comparator2) => {
      const compver = new SemVer$2(comparator2.semver.version);
      switch (comparator2.operator) {
        case ">":
          if (compver.prerelease.length === 0) {
            compver.patch++;
          } else {
            compver.prerelease.push(0);
          }
          compver.raw = compver.format();
        case "":
        case ">=":
          if (!setMin || gt$2(compver, setMin)) {
            setMin = compver;
          }
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${comparator2.operator}`);
      }
    });
    if (setMin && (!minver || gt$2(minver, setMin))) {
      minver = setMin;
    }
  }
  if (minver && range2.test(minver)) {
    return minver;
  }
  return null;
}, "minVersion$1");
var minVersion_1 = minVersion$1;
const minVersion$2 = /* @__PURE__ */ getDefaultExportFromCjs(minVersion_1);
"use strict";
const Range$4 = requireRange();
const validRange$1 = /* @__PURE__ */ __name((range2, options) => {
  try {
    return new Range$4(range2, options).range || "*";
  } catch (er) {
    return null;
  }
}, "validRange$1");
var valid$1 = validRange$1;
const valid$2 = /* @__PURE__ */ getDefaultExportFromCjs(valid$1);
"use strict";
const SemVer$1 = semver$1;
const Comparator$2 = requireComparator();
const { ANY: ANY$1 } = Comparator$2;
const Range$3 = requireRange();
const satisfies$3 = satisfies_1;
const gt$1 = gt_1;
const lt$1 = lt_1;
const lte$1 = lte_1;
const gte$1 = gte_1;
const outside$3 = /* @__PURE__ */ __name((version, range2, hilo, options) => {
  version = new SemVer$1(version, options);
  range2 = new Range$3(range2, options);
  let gtfn, ltefn, ltfn, comp, ecomp;
  switch (hilo) {
    case ">":
      gtfn = gt$1;
      ltefn = lte$1;
      ltfn = lt$1;
      comp = ">";
      ecomp = ">=";
      break;
    case "<":
      gtfn = lt$1;
      ltefn = gte$1;
      ltfn = gt$1;
      comp = "<";
      ecomp = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (satisfies$3(version, range2, options)) {
    return false;
  }
  for (let i = 0; i < range2.set.length; ++i) {
    const comparators = range2.set[i];
    let high = null;
    let low = null;
    comparators.forEach((comparator2) => {
      if (comparator2.semver === ANY$1) {
        comparator2 = new Comparator$2(">=0.0.0");
      }
      high = high || comparator2;
      low = low || comparator2;
      if (gtfn(comparator2.semver, high.semver, options)) {
        high = comparator2;
      } else if (ltfn(comparator2.semver, low.semver, options)) {
        low = comparator2;
      }
    });
    if (high.operator === comp || high.operator === ecomp) {
      return false;
    }
    if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
      return false;
    } else if (low.operator === ecomp && ltfn(version, low.semver)) {
      return false;
    }
  }
  return true;
}, "outside$3");
var outside_1 = outside$3;
const outside$4 = /* @__PURE__ */ getDefaultExportFromCjs(outside_1);
"use strict";
const outside$2 = outside_1;
const gtr$1 = /* @__PURE__ */ __name((version, range2, options) => outside$2(version, range2, ">", options), "gtr$1");
var gtr_1 = gtr$1;
const gtr$2 = /* @__PURE__ */ getDefaultExportFromCjs(gtr_1);
"use strict";
const outside$1 = outside_1;
const ltr$1 = /* @__PURE__ */ __name((version, range2, options) => outside$1(version, range2, "<", options), "ltr$1");
var ltr_1 = ltr$1;
const ltr$2 = /* @__PURE__ */ getDefaultExportFromCjs(ltr_1);
"use strict";
const Range$2 = requireRange();
const intersects$1 = /* @__PURE__ */ __name((r1, r2, options) => {
  r1 = new Range$2(r1, options);
  r2 = new Range$2(r2, options);
  return r1.intersects(r2, options);
}, "intersects$1");
var intersects_1 = intersects$1;
const intersects$2 = /* @__PURE__ */ getDefaultExportFromCjs(intersects_1);
"use strict";
const satisfies$2 = satisfies_1;
const compare$2 = compare_1;
var simplify = /* @__PURE__ */ __name((versions, range2, options) => {
  const set = [];
  let first = null;
  let prev = null;
  const v = versions.sort((a, b) => compare$2(a, b, options));
  for (const version of v) {
    const included = satisfies$2(version, range2, options);
    if (included) {
      prev = version;
      if (!first) {
        first = version;
      }
    } else {
      if (prev) {
        set.push([first, prev]);
      }
      prev = null;
      first = null;
    }
  }
  if (first) {
    set.push([first, null]);
  }
  const ranges = [];
  for (const [min, max] of set) {
    if (min === max) {
      ranges.push(min);
    } else if (!max && min === v[0]) {
      ranges.push("*");
    } else if (!max) {
      ranges.push(`>=${min}`);
    } else if (min === v[0]) {
      ranges.push(`<=${max}`);
    } else {
      ranges.push(`${min} - ${max}`);
    }
  }
  const simplified = ranges.join(" || ");
  const original = typeof range2.raw === "string" ? range2.raw : String(range2);
  return simplified.length < original.length ? simplified : range2;
}, "simplify");
const simplify$1 = /* @__PURE__ */ getDefaultExportFromCjs(simplify);
"use strict";
const Range$1 = requireRange();
const Comparator$1 = requireComparator();
const { ANY } = Comparator$1;
const satisfies$1 = satisfies_1;
const compare$1 = compare_1;
const subset$1 = /* @__PURE__ */ __name((sub, dom, options = {}) => {
  if (sub === dom) {
    return true;
  }
  sub = new Range$1(sub, options);
  dom = new Range$1(dom, options);
  let sawNonNull = false;
  OUTER: for (const simpleSub of sub.set) {
    for (const simpleDom of dom.set) {
      const isSub = simpleSubset(simpleSub, simpleDom, options);
      sawNonNull = sawNonNull || isSub !== null;
      if (isSub) {
        continue OUTER;
      }
    }
    if (sawNonNull) {
      return false;
    }
  }
  return true;
}, "subset$1");
const minimumVersionWithPreRelease = [new Comparator$1(">=0.0.0-0")];
const minimumVersion = [new Comparator$1(">=0.0.0")];
const simpleSubset = /* @__PURE__ */ __name((sub, dom, options) => {
  if (sub === dom) {
    return true;
  }
  if (sub.length === 1 && sub[0].semver === ANY) {
    if (dom.length === 1 && dom[0].semver === ANY) {
      return true;
    } else if (options.includePrerelease) {
      sub = minimumVersionWithPreRelease;
    } else {
      sub = minimumVersion;
    }
  }
  if (dom.length === 1 && dom[0].semver === ANY) {
    if (options.includePrerelease) {
      return true;
    } else {
      dom = minimumVersion;
    }
  }
  const eqSet = /* @__PURE__ */ new Set();
  let gt2, lt2;
  for (const c of sub) {
    if (c.operator === ">" || c.operator === ">=") {
      gt2 = higherGT(gt2, c, options);
    } else if (c.operator === "<" || c.operator === "<=") {
      lt2 = lowerLT(lt2, c, options);
    } else {
      eqSet.add(c.semver);
    }
  }
  if (eqSet.size > 1) {
    return null;
  }
  let gtltComp;
  if (gt2 && lt2) {
    gtltComp = compare$1(gt2.semver, lt2.semver, options);
    if (gtltComp > 0) {
      return null;
    } else if (gtltComp === 0 && (gt2.operator !== ">=" || lt2.operator !== "<=")) {
      return null;
    }
  }
  for (const eq2 of eqSet) {
    if (gt2 && !satisfies$1(eq2, String(gt2), options)) {
      return null;
    }
    if (lt2 && !satisfies$1(eq2, String(lt2), options)) {
      return null;
    }
    for (const c of dom) {
      if (!satisfies$1(eq2, String(c), options)) {
        return false;
      }
    }
    return true;
  }
  let higher, lower;
  let hasDomLT, hasDomGT;
  let needDomLTPre = lt2 && !options.includePrerelease && lt2.semver.prerelease.length ? lt2.semver : false;
  let needDomGTPre = gt2 && !options.includePrerelease && gt2.semver.prerelease.length ? gt2.semver : false;
  if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt2.operator === "<" && needDomLTPre.prerelease[0] === 0) {
    needDomLTPre = false;
  }
  for (const c of dom) {
    hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
    hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
    if (gt2) {
      if (needDomGTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
          needDomGTPre = false;
        }
      }
      if (c.operator === ">" || c.operator === ">=") {
        higher = higherGT(gt2, c, options);
        if (higher === c && higher !== gt2) {
          return false;
        }
      } else if (gt2.operator === ">=" && !satisfies$1(gt2.semver, String(c), options)) {
        return false;
      }
    }
    if (lt2) {
      if (needDomLTPre) {
        if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
          needDomLTPre = false;
        }
      }
      if (c.operator === "<" || c.operator === "<=") {
        lower = lowerLT(lt2, c, options);
        if (lower === c && lower !== lt2) {
          return false;
        }
      } else if (lt2.operator === "<=" && !satisfies$1(lt2.semver, String(c), options)) {
        return false;
      }
    }
    if (!c.operator && (lt2 || gt2) && gtltComp !== 0) {
      return false;
    }
  }
  if (gt2 && hasDomLT && !lt2 && gtltComp !== 0) {
    return false;
  }
  if (lt2 && hasDomGT && !gt2 && gtltComp !== 0) {
    return false;
  }
  if (needDomGTPre || needDomLTPre) {
    return false;
  }
  return true;
}, "simpleSubset");
const higherGT = /* @__PURE__ */ __name((a, b, options) => {
  if (!a) {
    return b;
  }
  const comp = compare$1(a.semver, b.semver, options);
  return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
}, "higherGT");
const lowerLT = /* @__PURE__ */ __name((a, b, options) => {
  if (!a) {
    return b;
  }
  const comp = compare$1(a.semver, b.semver, options);
  return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
}, "lowerLT");
var subset_1 = subset$1;
const subset$2 = /* @__PURE__ */ getDefaultExportFromCjs(subset_1);
"use strict";
const internalRe = reExports;
const constants = constants$1;
const SemVer2 = semver$1;
const identifiers = identifiers$1;
const parse = parse_1;
const valid = valid_1;
const clean = clean_1;
const inc = inc_1;
const diff = diff_1;
const major = major_1;
const minor = minor_1;
const patch = patch_1;
const prerelease = prerelease_1;
const compare = compare_1;
const rcompare = rcompare_1;
const compareLoose = compareLoose_1;
const compareBuild = compareBuild_1;
const sort = sort_1;
const rsort = rsort_1;
const gt = gt_1;
const lt = lt_1;
const eq = eq_1;
const neq = neq_1;
const gte = gte_1;
const lte = lte_1;
const cmp = cmp_1;
const coerce = coerce_1;
const Comparator = requireComparator();
const Range = requireRange();
const satisfies = satisfies_1;
const toComparators = toComparators_1;
const maxSatisfying = maxSatisfying_1;
const minSatisfying = minSatisfying_1;
const minVersion = minVersion_1;
const validRange = valid$1;
const outside = outside_1;
const gtr = gtr_1;
const ltr = ltr_1;
const intersects = intersects_1;
const simplifyRange = simplify;
const subset = subset_1;
var semver = {
  parse,
  valid,
  clean,
  inc,
  diff,
  major,
  minor,
  patch,
  prerelease,
  compare,
  rcompare,
  compareLoose,
  compareBuild,
  sort,
  rsort,
  gt,
  lt,
  eq,
  neq,
  gte,
  lte,
  cmp,
  coerce,
  Comparator,
  Range,
  satisfies,
  toComparators,
  maxSatisfying,
  minSatisfying,
  minVersion,
  validRange,
  outside,
  gtr,
  ltr,
  intersects,
  simplifyRange,
  subset,
  SemVer: SemVer2,
  re: internalRe.re,
  src: internalRe.src,
  tokens: internalRe.t,
  SEMVER_SPEC_VERSION: constants.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: constants.RELEASE_TYPES,
  compareIdentifiers: identifiers.compareIdentifiers,
  rcompareIdentifiers: identifiers.rcompareIdentifiers
};
const index = /* @__PURE__ */ getDefaultExportFromCjs(semver);
const DISMISSAL_DURATION_MS = 7 * 24 * 60 * 60 * 1e3;
const useVersionCompatibilityStore = defineStore(
  "versionCompatibility",
  () => {
    const systemStatsStore = useSystemStatsStore();
    const frontendVersion = computed(() => config.app_version);
    const backendVersion = computed(
      () => systemStatsStore.systemStats?.system?.comfyui_version ?? ""
    );
    const requiredFrontendVersion = computed(
      () => systemStatsStore.systemStats?.system?.required_frontend_version ?? ""
    );
    const isFrontendOutdated = computed(() => {
      if (!frontendVersion.value || !requiredFrontendVersion.value || !semver.valid(frontendVersion.value) || !semver.valid(requiredFrontendVersion.value)) {
        return false;
      }
      return semver.gt(requiredFrontendVersion.value, frontendVersion.value);
    });
    const isFrontendNewer = computed(() => {
      return false;
    });
    const hasVersionMismatch = computed(() => {
      return isFrontendOutdated.value;
    });
    const versionKey = computed(() => {
      if (!frontendVersion.value || !backendVersion.value || !requiredFrontendVersion.value) {
        return null;
      }
      return `${frontendVersion.value}-${backendVersion.value}-${requiredFrontendVersion.value}`;
    });
    const dismissalStorage = useStorage(
      "comfy.versionMismatch.dismissals",
      {},
      localStorage,
      {
        serializer: {
          read: /* @__PURE__ */ __name((value) => {
            try {
              return JSON.parse(value);
            } catch {
              return {};
            }
          }, "read"),
          write: /* @__PURE__ */ __name((value) => JSON.stringify(value), "write")
        }
      }
    );
    const isDismissed = computed(() => {
      if (!versionKey.value) return false;
      const dismissedUntil = dismissalStorage.value[versionKey.value];
      if (!dismissedUntil) return false;
      return Date.now() < dismissedUntil;
    });
    const shouldShowWarning = computed(() => {
      return hasVersionMismatch.value && !isDismissed.value;
    });
    const warningMessage = computed(() => {
      if (isFrontendOutdated.value) {
        return {
          type: "outdated",
          frontendVersion: frontendVersion.value,
          requiredVersion: requiredFrontendVersion.value
        };
      }
      return null;
    });
    async function checkVersionCompatibility() {
      if (!systemStatsStore.systemStats) {
        await systemStatsStore.fetchSystemStats();
      }
    }
    __name(checkVersionCompatibility, "checkVersionCompatibility");
    function dismissWarning() {
      if (!versionKey.value) return;
      const dismissUntil = Date.now() + DISMISSAL_DURATION_MS;
      dismissalStorage.value = {
        ...dismissalStorage.value,
        [versionKey.value]: dismissUntil
      };
    }
    __name(dismissWarning, "dismissWarning");
    async function initialize() {
      await checkVersionCompatibility();
    }
    __name(initialize, "initialize");
    return {
      frontendVersion,
      backendVersion,
      requiredFrontendVersion,
      hasVersionMismatch,
      shouldShowWarning,
      warningMessage,
      isFrontendOutdated,
      isFrontendNewer,
      checkVersionCompatibility,
      dismissWarning,
      initialize
    };
  }
);
function useFrontendVersionMismatchWarning(options = {}) {
  const { immediate = false } = options;
  const { t: t2 } = useI18n();
  const toastStore = useToastStore();
  const versionCompatibilityStore = useVersionCompatibilityStore();
  let hasShownWarning = false;
  const showWarning = /* @__PURE__ */ __name(() => {
    if (hasShownWarning) return;
    const message = versionCompatibilityStore.warningMessage;
    if (!message) return;
    const detailMessage = t2("g.frontendOutdated", {
      frontendVersion: message.frontendVersion,
      requiredVersion: message.requiredVersion
    });
    const fullMessage = t2("g.versionMismatchWarningMessage", {
      warning: t2("g.versionMismatchWarning"),
      detail: detailMessage
    });
    toastStore.addAlert(fullMessage);
    hasShownWarning = true;
    versionCompatibilityStore.dismissWarning();
  }, "showWarning");
  onMounted(() => {
    if (immediate) {
      whenever(
        () => versionCompatibilityStore.shouldShowWarning,
        () => {
          showWarning();
        },
        {
          immediate: true,
          once: true
        }
      );
    }
  });
  return {
    showWarning,
    shouldShowWarning: computed(
      () => versionCompatibilityStore.shouldShowWarning
    ),
    dismissWarning: versionCompatibilityStore.dismissWarning,
    hasVersionMismatch: computed(
      () => versionCompatibilityStore.hasVersionMismatch
    )
  };
}
__name(useFrontendVersionMismatchWarning, "useFrontendVersionMismatchWarning");
const useProgressFavicon = /* @__PURE__ */ __name(() => {
  const defaultFavicon = "/assets/images/favicon_progress_16x16/frame_9.png";
  const favicon = useFavicon(defaultFavicon);
  const executionStore = useExecutionStore();
  const totalFrames = 10;
  watch(
    [() => executionStore.executionProgress, () => executionStore.isIdle],
    ([progress, isIdle]) => {
      if (isIdle) {
        favicon.value = defaultFavicon;
      } else {
        const frame = Math.min(
          Math.max(0, Math.floor(progress * totalFrames)),
          totalFrames - 1
        );
        favicon.value = `/assets/images/favicon_progress_16x16/frame_${frame}.png`;
      }
    }
  );
}, "useProgressFavicon");
var LatentPreviewMethod = /* @__PURE__ */ ((LatentPreviewMethod2) => {
  LatentPreviewMethod2["NoPreviews"] = "none";
  LatentPreviewMethod2["Auto"] = "auto";
  LatentPreviewMethod2["Latent2RGB"] = "latent2rgb";
  LatentPreviewMethod2["TAESD"] = "taesd";
  return LatentPreviewMethod2;
})(LatentPreviewMethod || {});
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2["DEBUG"] = "DEBUG";
  LogLevel2["INFO"] = "INFO";
  LogLevel2["WARNING"] = "WARNING";
  LogLevel2["ERROR"] = "ERROR";
  LogLevel2["CRITICAL"] = "CRITICAL";
  return LogLevel2;
})(LogLevel || {});
var HashFunction = /* @__PURE__ */ ((HashFunction2) => {
  HashFunction2["MD5"] = "md5";
  HashFunction2["SHA1"] = "sha1";
  HashFunction2["SHA256"] = "sha256";
  HashFunction2["SHA512"] = "sha512";
  return HashFunction2;
})(HashFunction || {});
var AutoLaunch = /* @__PURE__ */ ((AutoLaunch2) => {
  AutoLaunch2["Auto"] = "auto";
  AutoLaunch2["Disable"] = "disable";
  AutoLaunch2["Enable"] = "enable";
  return AutoLaunch2;
})(AutoLaunch || {});
var CudaMalloc = /* @__PURE__ */ ((CudaMalloc2) => {
  CudaMalloc2["Auto"] = "auto";
  CudaMalloc2["Disable"] = "disable";
  CudaMalloc2["Enable"] = "enable";
  return CudaMalloc2;
})(CudaMalloc || {});
var FloatingPointPrecision = /* @__PURE__ */ ((FloatingPointPrecision2) => {
  FloatingPointPrecision2["AUTO"] = "auto";
  FloatingPointPrecision2["FP64"] = "fp64";
  FloatingPointPrecision2["FP32"] = "fp32";
  FloatingPointPrecision2["FP16"] = "fp16";
  FloatingPointPrecision2["BF16"] = "bf16";
  FloatingPointPrecision2["FP8E4M3FN"] = "fp8_e4m3fn";
  FloatingPointPrecision2["FP8E5M2"] = "fp8_e5m2";
  return FloatingPointPrecision2;
})(FloatingPointPrecision || {});
var CrossAttentionMethod = /* @__PURE__ */ ((CrossAttentionMethod2) => {
  CrossAttentionMethod2["Auto"] = "auto";
  CrossAttentionMethod2["Split"] = "split";
  CrossAttentionMethod2["Quad"] = "quad";
  CrossAttentionMethod2["Pytorch"] = "pytorch";
  return CrossAttentionMethod2;
})(CrossAttentionMethod || {});
var VramManagement = /* @__PURE__ */ ((VramManagement2) => {
  VramManagement2["Auto"] = "auto";
  VramManagement2["GPUOnly"] = "gpu-only";
  VramManagement2["HighVram"] = "highvram";
  VramManagement2["NormalVram"] = "normalvram";
  VramManagement2["LowVram"] = "lowvram";
  VramManagement2["NoVram"] = "novram";
  VramManagement2["CPU"] = "cpu";
  return VramManagement2;
})(VramManagement || {});
const WEB_ONLY_CONFIG_ITEMS = [
  // Launch behavior
  {
    id: "auto-launch",
    name: "Automatically opens in the browser on startup",
    category: ["Launch"],
    type: "combo",
    options: Object.values(AutoLaunch),
    defaultValue: AutoLaunch.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case AutoLaunch.Auto:
          return {};
        case AutoLaunch.Enable:
          return {
            ["auto-launch"]: true
          };
        case AutoLaunch.Disable:
          return {
            ["disable-auto-launch"]: true
          };
      }
    }, "getValue")
  }
];
const SERVER_CONFIG_ITEMS = [
  // Network settings
  {
    id: "listen",
    name: "Host: The IP address to listen on",
    category: ["Network"],
    type: "text",
    defaultValue: "127.0.0.1"
  },
  {
    id: "port",
    name: "Port: The port to listen on",
    category: ["Network"],
    type: "number",
    // The default launch port for desktop app is 8000 instead of 8188.
    defaultValue: 8e3
  },
  {
    id: "tls-keyfile",
    name: "TLS Key File: Path to TLS key file for HTTPS",
    category: ["Network"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "tls-certfile",
    name: "TLS Certificate File: Path to TLS certificate file for HTTPS",
    category: ["Network"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "enable-cors-header",
    name: 'Enable CORS header: Use "*" for all origins or specify domain',
    category: ["Network"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "max-upload-size",
    name: "Maximum upload size (MB)",
    category: ["Network"],
    type: "number",
    defaultValue: 100
  },
  // CUDA settings
  {
    id: "cuda-device",
    name: "CUDA device index to use",
    category: ["CUDA"],
    type: "number",
    defaultValue: null
  },
  {
    id: "cuda-malloc",
    name: "Use CUDA malloc for memory allocation",
    category: ["CUDA"],
    type: "combo",
    options: Object.values(CudaMalloc),
    defaultValue: CudaMalloc.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case CudaMalloc.Auto:
          return {};
        case CudaMalloc.Enable:
          return {
            ["cuda-malloc"]: true
          };
        case CudaMalloc.Disable:
          return {
            ["disable-cuda-malloc"]: true
          };
      }
    }, "getValue")
  },
  // Precision settings
  {
    id: "global-precision",
    name: "Global floating point precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP32,
      FloatingPointPrecision.FP16
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "Global floating point precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        case FloatingPointPrecision.FP32:
          return {
            ["force-fp32"]: true
          };
        case FloatingPointPrecision.FP16:
          return {
            ["force-fp16"]: true
          };
        default:
          return {};
      }
    }, "getValue")
  },
  // UNET precision
  {
    id: "unet-precision",
    name: "UNET precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP64,
      FloatingPointPrecision.FP32,
      FloatingPointPrecision.FP16,
      FloatingPointPrecision.BF16,
      FloatingPointPrecision.FP8E4M3FN,
      FloatingPointPrecision.FP8E5M2
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "UNET precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        default:
          return {
            [`${value.toLowerCase()}-unet`]: true
          };
      }
    }, "getValue")
  },
  // VAE settings
  {
    id: "vae-precision",
    name: "VAE precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP16,
      FloatingPointPrecision.FP32,
      FloatingPointPrecision.BF16
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "VAE precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        default:
          return {
            [`${value.toLowerCase()}-vae`]: true
          };
      }
    }, "getValue")
  },
  {
    id: "cpu-vae",
    name: "Run VAE on CPU",
    category: ["Inference"],
    type: "boolean",
    defaultValue: false
  },
  // Text Encoder settings
  {
    id: "text-encoder-precision",
    name: "Text Encoder precision",
    category: ["Inference"],
    type: "combo",
    options: [
      FloatingPointPrecision.AUTO,
      FloatingPointPrecision.FP8E4M3FN,
      FloatingPointPrecision.FP8E5M2,
      FloatingPointPrecision.FP16,
      FloatingPointPrecision.FP32
    ],
    defaultValue: FloatingPointPrecision.AUTO,
    tooltip: "Text Encoder precision",
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case FloatingPointPrecision.AUTO:
          return {};
        default:
          return {
            [`${value.toLowerCase()}-text-enc`]: true
          };
      }
    }, "getValue")
  },
  // Memory and performance settings
  {
    id: "force-channels-last",
    name: "Force channels-last memory format",
    category: ["Memory"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "directml",
    name: "DirectML device index",
    category: ["Memory"],
    type: "number",
    defaultValue: null
  },
  {
    id: "disable-ipex-optimize",
    name: "Disable IPEX optimization",
    category: ["Memory"],
    type: "boolean",
    defaultValue: false
  },
  // Preview settings
  {
    id: "preview-method",
    name: "Method used for latent previews",
    category: ["Preview"],
    type: "combo",
    options: Object.values(LatentPreviewMethod),
    defaultValue: LatentPreviewMethod.NoPreviews
  },
  {
    id: "preview-size",
    name: "Size of preview images",
    category: ["Preview"],
    type: "slider",
    defaultValue: 512,
    attrs: {
      min: 128,
      max: 2048,
      step: 128
    }
  },
  // Cache settings
  {
    id: "cache-classic",
    name: "Use classic cache system",
    category: ["Cache"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "cache-lru",
    name: "Use LRU caching with a maximum of N node results cached.",
    category: ["Cache"],
    type: "number",
    defaultValue: null,
    tooltip: "May use more RAM/VRAM."
  },
  // Attention settings
  {
    id: "cross-attention-method",
    name: "Cross attention method",
    category: ["Attention"],
    type: "combo",
    options: Object.values(CrossAttentionMethod),
    defaultValue: CrossAttentionMethod.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case CrossAttentionMethod.Auto:
          return {};
        default:
          return {
            [`use-${value.toLowerCase()}-cross-attention`]: true
          };
      }
    }, "getValue")
  },
  {
    id: "disable-xformers",
    name: "Disable xFormers optimization",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "force-upcast-attention",
    name: "Force attention upcast",
    category: ["Attention"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "dont-upcast-attention",
    name: "Prevent attention upcast",
    category: ["Attention"],
    type: "boolean",
    defaultValue: false
  },
  // VRAM management
  {
    id: "vram-management",
    name: "VRAM management mode",
    category: ["Memory"],
    type: "combo",
    options: Object.values(VramManagement),
    defaultValue: VramManagement.Auto,
    getValue: /* @__PURE__ */ __name((value) => {
      switch (value) {
        case VramManagement.Auto:
          return {};
        default:
          return {
            [value]: true
          };
      }
    }, "getValue")
  },
  {
    id: "reserve-vram",
    name: "Reserved VRAM (GB)",
    category: ["Memory"],
    type: "number",
    defaultValue: null,
    tooltip: "Set the amount of vram in GB you want to reserve for use by your OS/other software. By default some amount is reverved depending on your OS."
  },
  // Misc settings
  {
    id: "default-hashing-function",
    name: "Default hashing function for model files",
    type: "combo",
    options: Object.values(HashFunction),
    defaultValue: HashFunction.SHA256
  },
  {
    id: "disable-smart-memory",
    name: "Disable smart memory management",
    tooltip: "Force ComfyUI to aggressively offload to regular ram instead of keeping models in vram when it can.",
    category: ["Memory"],
    type: "boolean",
    defaultValue: false
  },
  {
    id: "deterministic",
    name: "Make pytorch use slower deterministic algorithms when it can.",
    type: "boolean",
    defaultValue: false,
    tooltip: "Note that this might not make images deterministic in all cases."
  },
  {
    id: "fast",
    name: "Enable some untested and potentially quality deteriorating optimizations.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "dont-print-server",
    name: "Don't print server output to console.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "disable-metadata",
    name: "Disable saving prompt metadata in files.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "disable-all-custom-nodes",
    name: "Disable loading all custom nodes.",
    type: "boolean",
    defaultValue: false
  },
  {
    id: "log-level",
    name: "Logging verbosity level",
    type: "combo",
    options: Object.values(LogLevel),
    defaultValue: LogLevel.INFO,
    getValue: /* @__PURE__ */ __name((value) => {
      return {
        verbose: value
      };
    }, "getValue")
  },
  // Directories
  {
    id: "input-directory",
    name: "Input directory",
    category: ["Directories"],
    type: "text",
    defaultValue: ""
  },
  {
    id: "output-directory",
    name: "Output directory",
    category: ["Directories"],
    type: "text",
    defaultValue: ""
  }
];
function setupAutoQueueHandler() {
  const queueCountStore = useQueuePendingTaskCountStore();
  const queueSettingsStore = useQueueSettingsStore();
  let graphHasChanged = false;
  let internalCount = 0;
  api.addEventListener("graphChanged", () => {
    if (queueSettingsStore.mode === "change") {
      if (internalCount) {
        graphHasChanged = true;
      } else {
        graphHasChanged = false;
        void app.queuePrompt(0, queueSettingsStore.batchCount);
        internalCount++;
      }
    }
  });
  queueCountStore.$subscribe(
    async () => {
      internalCount = queueCountStore.count;
      if (!internalCount && !app.lastExecutionError) {
        if (queueSettingsStore.mode === "instant" || queueSettingsStore.mode === "change" && graphHasChanged) {
          graphHasChanged = false;
          await app.queuePrompt(0, queueSettingsStore.batchCount);
        }
      }
    },
    { detached: true }
  );
}
__name(setupAutoQueueHandler, "setupAutoQueueHandler");
const _hoisted_1 = { class: "comfyui-body grid h-full w-full overflow-hidden" };
const _hoisted_2 = {
  id: "comfyui-body-top",
  class: "comfyui-body-top"
};
const _hoisted_3 = {
  id: "comfyui-body-bottom",
  class: "comfyui-body-bottom"
};
const _hoisted_4 = {
  id: "graph-canvas-container",
  class: "graph-canvas-container"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GraphView",
  setup(__props) {
    setupAutoQueueHandler();
    useProgressFavicon();
    useBrowserTabTitle();
    const { t: t2 } = useI18n();
    const toast = useToast();
    const settingStore = useSettingStore();
    const executionStore = useExecutionStore();
    const colorPaletteStore = useColorPaletteStore();
    const queueStore = useQueueStore();
    const versionCompatibilityStore = useVersionCompatibilityStore();
    const breakpoints = useBreakpoints({ md: 961 });
    const isMobile = breakpoints.smaller("md");
    const showTopMenu = computed(() => isMobile.value || useNewMenu.value === "Top");
    const showBottomMenu = computed(
      () => !isMobile.value && useNewMenu.value === "Bottom"
    );
    watch(
      () => colorPaletteStore.completedActivePalette,
      (newTheme) => {
        const DARK_THEME_CLASS = "dark-theme";
        if (newTheme.light_theme) {
          document.body.classList.remove(DARK_THEME_CLASS);
        } else {
          document.body.classList.add(DARK_THEME_CLASS);
        }
        if (isElectron()) {
          electronAPI().changeTheme({
            color: "rgba(0, 0, 0, 0)",
            symbolColor: newTheme.colors.comfy_base["input-text"]
          });
        }
      },
      { immediate: true }
    );
    if (isElectron()) {
      watch(
        () => queueStore.tasks,
        (newTasks, oldTasks) => {
          const oldRunningTaskIds = new Set(
            oldTasks.filter((task) => task.isRunning).map((task) => task.promptId)
          );
          newTasks.filter(
            (task) => oldRunningTaskIds.has(task.promptId) && task.isHistory
          ).forEach((task) => {
            electronAPI().Events.incrementUserProperty(
              `execution:${task.displayStatus.toLowerCase()}`,
              1
            );
            electronAPI().Events.trackEvent("execution", {
              status: task.displayStatus.toLowerCase()
            });
          });
        },
        { deep: true }
      );
    }
    watchEffect(() => {
      const fontSize = settingStore.get("Comfy.TextareaWidget.FontSize");
      document.documentElement.style.setProperty(
        "--comfy-textarea-font-size",
        `${fontSize}px`
      );
    });
    watchEffect(() => {
      const padding = settingStore.get("Comfy.TreeExplorer.ItemPadding");
      document.documentElement.style.setProperty(
        "--comfy-tree-explorer-item-padding",
        `${padding}px`
      );
    });
    watchEffect(() => {
      const locale = settingStore.get("Comfy.Locale");
      if (locale) {
        i18n.global.locale.value = locale;
      }
    });
    const useNewMenu = computed(() => {
      return settingStore.get("Comfy.UseNewMenu");
    });
    watchEffect(() => {
      if (useNewMenu.value === "Disabled") {
        app.ui.menuContainer.style.setProperty("display", "block");
        app.ui.restoreMenuPosition();
      } else {
        app.ui.menuContainer.style.setProperty("display", "none");
      }
    });
    watchEffect(() => {
      queueStore.maxHistoryItems = settingStore.get("Comfy.Queue.MaxHistoryItems");
    });
    const init = /* @__PURE__ */ __name(() => {
      const coreCommands = useCoreCommands();
      useCommandStore().registerCommands(coreCommands);
      useMenuItemStore().registerCoreMenuCommands();
      useKeybindingService().registerCoreKeybindings();
      useSidebarTabStore().registerCoreSidebarTabs();
      useBottomPanelStore().registerCoreBottomPanelTabs();
      app.extensionManager = useWorkspaceStore();
    }, "init");
    const queuePendingTaskCountStore = useQueuePendingTaskCountStore();
    const onStatus = /* @__PURE__ */ __name(async (e) => {
      queuePendingTaskCountStore.update(e);
      await queueStore.update();
    }, "onStatus");
    const reconnectingMessage = {
      severity: "error",
      summary: t2("g.reconnecting")
    };
    const onReconnecting = /* @__PURE__ */ __name(() => {
      if (!settingStore.get("Comfy.Toast.DisableReconnectingToast")) {
        toast.remove(reconnectingMessage);
        toast.add(reconnectingMessage);
      }
    }, "onReconnecting");
    const onReconnected = /* @__PURE__ */ __name(() => {
      if (!settingStore.get("Comfy.Toast.DisableReconnectingToast")) {
        toast.remove(reconnectingMessage);
        toast.add({
          severity: "success",
          summary: t2("g.reconnected"),
          life: 2e3
        });
      }
    }, "onReconnected");
    onMounted(() => {
      api.addEventListener("status", onStatus);
      api.addEventListener("reconnecting", onReconnecting);
      api.addEventListener("reconnected", onReconnected);
      executionStore.bindExecutionEvents();
      try {
        init();
      } catch (e) {
        console.error("Failed to init ComfyUI frontend", e);
      }
    });
    onBeforeUnmount(() => {
      api.removeEventListener("status", onStatus);
      api.removeEventListener("reconnecting", onReconnecting);
      api.removeEventListener("reconnected", onReconnected);
      executionStore.unbindExecutionEvents();
    });
    useEventListener(window, "keydown", useKeybindingService().keybindHandler);
    const { wrapWithErrorHandling, wrapWithErrorHandlingAsync } = useErrorHandling();
    useFrontendVersionMismatchWarning({ immediate: true });
    void nextTick(() => {
      versionCompatibilityStore.initialize().catch((error) => {
        console.warn("Version compatibility check failed:", error);
      });
    });
    const onGraphReady = /* @__PURE__ */ __name(() => {
      requestIdleCallback(
        () => {
          wrapWithErrorHandling(useKeybindingService().registerUserKeybindings)();
          wrapWithErrorHandling(useServerConfigStore().loadServerConfig)(
            SERVER_CONFIG_ITEMS,
            settingStore.get("Comfy.Server.ServerConfigValues")
          );
          void wrapWithErrorHandlingAsync(useModelStore().loadModelFolders)();
          void wrapWithErrorHandlingAsync(
            useNodeFrequencyStore().loadNodeFrequencies
          )();
          useNodeDefStore().nodeSearchService.searchNode("");
        },
        { timeout: 1e3 }
      );
    }, "onGraphReady");
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", _hoisted_1, [
          createElementVNode("div", _hoisted_2, [
            showTopMenu.value ? (openBlock(), createBlock(TopMenubar, { key: 0 })) : createCommentVNode("", true)
          ]),
          createElementVNode("div", _hoisted_3, [
            showBottomMenu.value ? (openBlock(), createBlock(TopMenubar, { key: 0 })) : createCommentVNode("", true)
          ]),
          _cache[0] || (_cache[0] = createElementVNode("div", {
            id: "comfyui-body-left",
            class: "comfyui-body-left"
          }, null, -1)),
          _cache[1] || (_cache[1] = createElementVNode("div", {
            id: "comfyui-body-right",
            class: "comfyui-body-right"
          }, null, -1)),
          createElementVNode("div", _hoisted_4, [
            createVNode(_sfc_main$c, { onReady: onGraphReady })
          ])
        ]),
        createVNode(_sfc_main$b),
        createVNode(_sfc_main$a),
        !unref(isElectron)() ? (openBlock(), createBlock(_sfc_main$R, { key: 0 })) : createCommentVNode("", true),
        createVNode(MenuHamburger)
      ], 64);
    };
  }
});
const GraphView = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a67ceb99"]]);
export {
  GraphView as default
};
//# sourceMappingURL=GraphView-EnCyKan_.js.map
