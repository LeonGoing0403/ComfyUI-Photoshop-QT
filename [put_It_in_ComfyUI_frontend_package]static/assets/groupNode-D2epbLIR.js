var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
import { c2 as ExecutableNodeDTO, c3 as ComfyDialog, bF as $el, L as LiteGraph, c4 as DraggableList, b as app, aN as useToastStore, c5 as getComboSpecComboOptions, av as _, c6 as getInputSpecType, c7 as isIntInputSpec, c8 as isFloatInputSpec, c9 as isComboInputSpec, T as LGraphNode, bP as applyTextReplacements, ca as GET_CONFIG, bO as ComfyWidgets, cb as CONFIG, cc as addValueControlWidgets, n as useChainCallback, cd as isPrimitiveNode, f as useDialogService, O as t, ce as serialise, cf as GROUP, r as useNodeDefStore, cg as useWidgetStore, bN as deserialiseAndCreate, aM as useExecutionStore, aI as api, ch as SubgraphNode } from "./index-BDQofsSe.js";
class ExecutableGroupNodeChildDTO extends ExecutableNodeDTO {
  static {
    __name(this, "ExecutableGroupNodeChildDTO");
  }
  groupNodeHandler;
  constructor(node, subgraphNodePath, nodesByExecutionId, subgraphNode, groupNodeHandler) {
    super(node, subgraphNodePath, nodesByExecutionId, subgraphNode);
    this.groupNodeHandler = groupNodeHandler;
  }
  resolveInput(slot) {
    const inputNode = this.node.getInputNode(slot);
    if (!inputNode) return;
    const link = this.node.getInputLink(slot);
    if (!link) throw new Error("Failed to get input link");
    const id2 = String(inputNode.id).split(":").at(-1);
    if (id2 === void 0) throw new Error("Invalid input node id");
    const inputNodeDto = this.nodesByExecutionId?.get(id2);
    if (!inputNodeDto) {
      throw new Error(
        `Failed to get input node ${id2} for group node child ${this.id} with slot ${slot}`
      );
    }
    return {
      node: inputNodeDto,
      origin_id: String(inputNode.id),
      origin_slot: link.origin_slot
    };
  }
}
const ORDER = Symbol();
const PREFIX$1 = "workflow";
const SEPARATOR$1 = ">";
function merge(target, source) {
  if (typeof target === "object" && typeof source === "object") {
    for (const key in source) {
      const sv = source[key];
      if (typeof sv === "object") {
        let tv = target[key];
        if (!tv) tv = target[key] = {};
        merge(tv, source[key]);
      } else {
        target[key] = sv;
      }
    }
  }
  return target;
}
__name(merge, "merge");
class ManageGroupDialog extends ComfyDialog {
  static {
    __name(this, "ManageGroupDialog");
  }
  // @ts-expect-error fixme ts strict error
  tabs;
  selectedNodeIndex;
  selectedTab = "Inputs";
  selectedGroup;
  modifications = {};
  // @ts-expect-error fixme ts strict error
  nodeItems;
  app;
  // @ts-expect-error fixme ts strict error
  groupNodeType;
  groupNodeDef;
  groupData;
  // @ts-expect-error fixme ts strict error
  innerNodesList;
  // @ts-expect-error fixme ts strict error
  widgetsPage;
  // @ts-expect-error fixme ts strict error
  inputsPage;
  // @ts-expect-error fixme ts strict error
  outputsPage;
  draggable;
  get selectedNodeInnerIndex() {
    return +this.nodeItems[this.selectedNodeIndex].dataset.nodeindex;
  }
  // @ts-expect-error fixme ts strict error
  constructor(app2) {
    super();
    this.app = app2;
    this.element = $el("dialog.comfy-group-manage", {
      parent: document.body
    });
  }
  // @ts-expect-error fixme ts strict error
  changeTab(tab) {
    this.tabs[this.selectedTab].tab.classList.remove("active");
    this.tabs[this.selectedTab].page.classList.remove("active");
    this.tabs[tab].tab.classList.add("active");
    this.tabs[tab].page.classList.add("active");
    this.selectedTab = tab;
  }
  // @ts-expect-error fixme ts strict error
  changeNode(index, force) {
    if (!force && this.selectedNodeIndex === index) return;
    if (this.selectedNodeIndex != null) {
      this.nodeItems[this.selectedNodeIndex].classList.remove("selected");
    }
    this.nodeItems[index].classList.add("selected");
    this.selectedNodeIndex = index;
    if (!this.buildInputsPage() && this.selectedTab === "Inputs") {
      this.changeTab("Widgets");
    }
    if (!this.buildWidgetsPage() && this.selectedTab === "Widgets") {
      this.changeTab("Outputs");
    }
    if (!this.buildOutputsPage() && this.selectedTab === "Outputs") {
      this.changeTab("Inputs");
    }
    this.changeTab(this.selectedTab);
  }
  getGroupData() {
    this.groupNodeType = LiteGraph.registered_node_types[`${PREFIX$1}${SEPARATOR$1}` + this.selectedGroup];
    this.groupNodeDef = this.groupNodeType.nodeData;
    this.groupData = GroupNodeHandler.getGroupData(this.groupNodeType);
  }
  // @ts-expect-error fixme ts strict error
  changeGroup(group, reset = true) {
    this.selectedGroup = group;
    this.getGroupData();
    const nodes = this.groupData.nodeData.nodes;
    this.nodeItems = nodes.map(
      (n, i) => $el(
        "li.draggable-item",
        {
          dataset: {
            nodeindex: n.index + ""
          },
          onclick: /* @__PURE__ */ __name(() => {
            this.changeNode(i);
          }, "onclick")
        },
        [
          $el("span.drag-handle"),
          $el(
            "div",
            {
              textContent: n.title ?? n.type
            },
            n.title ? $el("span", {
              textContent: n.type
            }) : []
          )
        ]
      )
    );
    this.innerNodesList.replaceChildren(...this.nodeItems);
    if (reset) {
      this.selectedNodeIndex = null;
      this.changeNode(0);
    } else {
      const items = this.draggable.getAllItems();
      let index = items.findIndex((item) => item.classList.contains("selected"));
      if (index === -1) index = this.selectedNodeIndex;
      this.changeNode(index, true);
    }
    const ordered = [...nodes];
    this.draggable?.dispose();
    this.draggable = new DraggableList(this.innerNodesList, "li");
    this.draggable.addEventListener(
      "dragend",
      // @ts-expect-error fixme ts strict error
      ({ detail: { oldPosition, newPosition } }) => {
        if (oldPosition === newPosition) return;
        ordered.splice(newPosition, 0, ordered.splice(oldPosition, 1)[0]);
        for (let i = 0; i < ordered.length; i++) {
          this.storeModification({
            nodeIndex: ordered[i].index,
            section: ORDER,
            prop: "order",
            value: i
          });
        }
      }
    );
  }
  storeModification(props) {
    const { nodeIndex, section, prop, value } = props;
    const groupMod = this.modifications[this.selectedGroup] ??= {};
    const nodesMod = groupMod.nodes ??= {};
    const nodeMod = nodesMod[nodeIndex ?? this.selectedNodeInnerIndex] ??= {};
    const typeMod = nodeMod[section] ??= {};
    if (typeof value === "object") {
      const objMod = typeMod[prop] ??= {};
      Object.assign(objMod, value);
    } else {
      typeMod[prop] = value;
    }
  }
  // @ts-expect-error fixme ts strict error
  getEditElement(section, prop, value, placeholder, checked, checkable = true) {
    if (value === placeholder) value = "";
    const mods = (
      // @ts-expect-error fixme ts strict error
      this.modifications[this.selectedGroup]?.nodes?.[this.selectedNodeInnerIndex]?.[section]?.[prop]
    );
    if (mods) {
      if (mods.name != null) {
        value = mods.name;
      }
      if (mods.visible != null) {
        checked = mods.visible;
      }
    }
    return $el("div", [
      $el("input", {
        value,
        placeholder,
        type: "text",
        // @ts-expect-error fixme ts strict error
        onchange: /* @__PURE__ */ __name((e) => {
          this.storeModification({
            section,
            prop,
            value: { name: e.target.value }
          });
        }, "onchange")
      }),
      $el("label", { textContent: "Visible" }, [
        $el("input", {
          type: "checkbox",
          checked,
          disabled: !checkable,
          // @ts-expect-error fixme ts strict error
          onchange: /* @__PURE__ */ __name((e) => {
            this.storeModification({
              section,
              prop,
              value: { visible: !!e.target.checked }
            });
          }, "onchange")
        })
      ])
    ]);
  }
  buildWidgetsPage() {
    const widgets = this.groupData.oldToNewWidgetMap[this.selectedNodeInnerIndex];
    const items = Object.keys(widgets ?? {});
    const type = app.graph.extra.groupNodes[this.selectedGroup];
    const config = type.config?.[this.selectedNodeInnerIndex]?.input;
    this.widgetsPage.replaceChildren(
      ...items.map((oldName) => {
        return this.getEditElement(
          "input",
          oldName,
          widgets[oldName],
          oldName,
          config?.[oldName]?.visible !== false
        );
      })
    );
    return !!items.length;
  }
  buildInputsPage() {
    const inputs = this.groupData.nodeInputs[this.selectedNodeInnerIndex];
    const items = Object.keys(inputs ?? {});
    const type = app.graph.extra.groupNodes[this.selectedGroup];
    const config = type.config?.[this.selectedNodeInnerIndex]?.input;
    this.inputsPage.replaceChildren(
      ...items.map((oldName) => {
        let value = inputs[oldName];
        if (!value) {
          return;
        }
        return this.getEditElement(
          "input",
          oldName,
          value,
          oldName,
          config?.[oldName]?.visible !== false
        );
      }).filter(Boolean)
    );
    return !!items.length;
  }
  buildOutputsPage() {
    const nodes = this.groupData.nodeData.nodes;
    const innerNodeDef = this.groupData.getNodeDef(
      nodes[this.selectedNodeInnerIndex]
    );
    const outputs = innerNodeDef?.output ?? [];
    const groupOutputs = this.groupData.oldToNewOutputMap[this.selectedNodeInnerIndex];
    const type = app.graph.extra.groupNodes[this.selectedGroup];
    const config = type.config?.[this.selectedNodeInnerIndex]?.output;
    const node = this.groupData.nodeData.nodes[this.selectedNodeInnerIndex];
    const checkable = node.type !== "PrimitiveNode";
    this.outputsPage.replaceChildren(
      ...outputs.map((type2, slot) => {
        const groupOutputIndex = groupOutputs?.[slot];
        const oldName = innerNodeDef.output_name?.[slot] ?? type2;
        let value = config?.[slot]?.name;
        const visible = config?.[slot]?.visible || groupOutputIndex != null;
        if (!value || value === oldName) {
          value = "";
        }
        return this.getEditElement(
          "output",
          slot,
          value,
          oldName,
          visible,
          checkable
        );
      }).filter(Boolean)
    );
    return !!outputs.length;
  }
  // @ts-expect-error fixme ts strict error
  show(type) {
    const groupNodes = Object.keys(app.graph.extra?.groupNodes ?? {}).sort(
      (a, b) => a.localeCompare(b)
    );
    this.innerNodesList = $el(
      "ul.comfy-group-manage-list-items"
    );
    this.widgetsPage = $el("section.comfy-group-manage-node-page");
    this.inputsPage = $el("section.comfy-group-manage-node-page");
    this.outputsPage = $el("section.comfy-group-manage-node-page");
    const pages = $el("div", [
      this.widgetsPage,
      this.inputsPage,
      this.outputsPage
    ]);
    this.tabs = [
      ["Inputs", this.inputsPage],
      ["Widgets", this.widgetsPage],
      ["Outputs", this.outputsPage]
      // @ts-expect-error fixme ts strict error
    ].reduce((p, [name, page]) => {
      p[name] = {
        tab: $el("a", {
          onclick: /* @__PURE__ */ __name(() => {
            this.changeTab(name);
          }, "onclick"),
          textContent: name
        }),
        page
      };
      return p;
    }, {});
    const outer = $el("div.comfy-group-manage-outer", [
      $el("header", [
        $el("h2", "Group Nodes"),
        $el(
          "select",
          {
            // @ts-expect-error fixme ts strict error
            onchange: /* @__PURE__ */ __name((e) => {
              this.changeGroup(e.target.value);
            }, "onchange")
          },
          groupNodes.map(
            (g) => $el("option", {
              textContent: g,
              selected: `${PREFIX$1}${SEPARATOR$1}${g}` === type,
              value: g
            })
          )
        )
      ]),
      $el("main", [
        $el("section.comfy-group-manage-list", this.innerNodesList),
        $el("section.comfy-group-manage-node", [
          $el(
            "header",
            Object.values(this.tabs).map((t2) => t2.tab)
          ),
          pages
        ])
      ]),
      $el("footer", [
        $el(
          "button.comfy-btn",
          {
            onclick: /* @__PURE__ */ __name(() => {
              const node = app.graph.nodes.find(
                (n) => n.type === `${PREFIX$1}${SEPARATOR$1}` + this.selectedGroup
              );
              if (node) {
                useToastStore().addAlert(
                  "This group node is in use in the current workflow, please first remove these."
                );
                return;
              }
              if (confirm(
                `Are you sure you want to remove the node: "${this.selectedGroup}"`
              )) {
                delete app.graph.extra.groupNodes[this.selectedGroup];
                LiteGraph.unregisterNodeType(
                  `${PREFIX$1}${SEPARATOR$1}` + this.selectedGroup
                );
              }
              this.show();
            }, "onclick")
          },
          "Delete Group Node"
        ),
        $el(
          "button.comfy-btn",
          {
            onclick: /* @__PURE__ */ __name(async () => {
              let nodesByType;
              let recreateNodes = [];
              const types = {};
              for (const g in this.modifications) {
                const type2 = app.graph.extra.groupNodes[g];
                let config = type2.config ??= {};
                let nodeMods = this.modifications[g]?.nodes;
                if (nodeMods) {
                  const keys = Object.keys(nodeMods);
                  if (nodeMods[keys[0]][ORDER]) {
                    const orderedNodes = [];
                    const orderedMods = {};
                    const orderedConfig = {};
                    for (const n of keys) {
                      const order = nodeMods[n][ORDER].order;
                      orderedNodes[order] = type2.nodes[+n];
                      orderedMods[order] = nodeMods[n];
                      orderedNodes[order].index = order;
                    }
                    for (const l of type2.links) {
                      if (l[0] != null) l[0] = type2.nodes[l[0]].index;
                      if (l[2] != null) l[2] = type2.nodes[l[2]].index;
                    }
                    if (type2.external) {
                      for (const ext2 of type2.external) {
                        ext2[0] = type2.nodes[ext2[0]];
                      }
                    }
                    for (const id2 of keys) {
                      if (config[id2]) {
                        orderedConfig[type2.nodes[id2].index] = config[id2];
                      }
                      delete config[id2];
                    }
                    type2.nodes = orderedNodes;
                    nodeMods = orderedMods;
                    type2.config = config = orderedConfig;
                  }
                  merge(config, nodeMods);
                }
                types[g] = type2;
                if (!nodesByType) {
                  nodesByType = app.graph.nodes.reduce((p, n) => {
                    p[n.type] ??= [];
                    p[n.type].push(n);
                    return p;
                  }, {});
                }
                const nodes = nodesByType[`${PREFIX$1}${SEPARATOR$1}` + g];
                if (nodes) recreateNodes.push(...nodes);
              }
              await GroupNodeConfig.registerFromWorkflow(types, {});
              for (const node of recreateNodes) {
                node.recreate();
              }
              this.modifications = {};
              this.app.graph.setDirtyCanvas(true, true);
              this.changeGroup(this.selectedGroup, false);
            }, "onclick")
          },
          "Save"
        ),
        $el(
          "button.comfy-btn",
          { onclick: /* @__PURE__ */ __name(() => this.element.close(), "onclick") },
          "Close"
        )
      ])
    ]);
    this.element.replaceChildren(outer);
    this.changeGroup(
      type ? groupNodes.find((g) => `${PREFIX$1}${SEPARATOR$1}${g}` === type) ?? groupNodes[0] : groupNodes[0]
    );
    this.element.showModal();
    this.element.addEventListener("close", () => {
      this.draggable?.dispose();
      this.element.remove();
    });
  }
}
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.groupNodeManage = window.comfyAPI.groupNodeManage || {};
window.comfyAPI.groupNodeManage.ManageGroupDialog = ManageGroupDialog;
const gcd = /* @__PURE__ */ __name((a, b) => {
  return b === 0 ? a : gcd(b, a % b);
}, "gcd");
const lcm = /* @__PURE__ */ __name((a, b) => {
  return Math.abs(a * b) / gcd(a, b);
}, "lcm");
const IGNORE_KEYS = /* @__PURE__ */ new Set([
  "default",
  "forceInput",
  "defaultInput",
  "control_after_generate",
  "multiline",
  "tooltip",
  "dynamicPrompts"
]);
const getRange = /* @__PURE__ */ __name((options) => {
  const min = options.min ?? -Infinity;
  const max = options.max ?? Infinity;
  return { min, max };
}, "getRange");
const mergeNumericInputSpec = /* @__PURE__ */ __name((spec1, spec2) => {
  const type = spec1[0];
  const options1 = spec1[1] ?? {};
  const options2 = spec2[1] ?? {};
  const range1 = getRange(options1);
  const range2 = getRange(options2);
  if (range1.min > range2.max || range1.max < range2.min) {
    return null;
  }
  const step1 = options1.step ?? 1;
  const step2 = options2.step ?? 1;
  const mergedOptions = {
    // Take intersection of ranges
    min: Math.max(range1.min, range2.min),
    max: Math.min(range1.max, range2.max),
    step: lcm(step1, step2)
  };
  return mergeCommonInputSpec(
    [type, { ...options1, ...mergedOptions }],
    [type, { ...options2, ...mergedOptions }]
  );
}, "mergeNumericInputSpec");
const mergeComboInputSpec = /* @__PURE__ */ __name((spec1, spec2) => {
  const options1 = spec1[1] ?? {};
  const options2 = spec2[1] ?? {};
  const comboOptions1 = getComboSpecComboOptions(spec1);
  const comboOptions2 = getComboSpecComboOptions(spec2);
  const intersection = _.intersection(comboOptions1, comboOptions2);
  if (intersection.length === 0) {
    return null;
  }
  return mergeCommonInputSpec(
    ["COMBO", { ...options1, options: intersection }],
    ["COMBO", { ...options2, options: intersection }]
  );
}, "mergeComboInputSpec");
const mergeCommonInputSpec = /* @__PURE__ */ __name((spec1, spec2) => {
  const type = getInputSpecType(spec1);
  const options1 = spec1[1] ?? {};
  const options2 = spec2[1] ?? {};
  const compareKeys = _.union(_.keys(options1), _.keys(options2)).filter(
    (key) => !IGNORE_KEYS.has(key)
  );
  const mergeIsValid = compareKeys.every((key) => {
    const value1 = options1[key];
    const value2 = options2[key];
    return value1 === value2 || _.isNil(value1) && _.isNil(value2);
  });
  return mergeIsValid ? [type, { ...options1, ...options2 }] : null;
}, "mergeCommonInputSpec");
const mergeInputSpec = /* @__PURE__ */ __name((spec1, spec2) => {
  const type1 = getInputSpecType(spec1);
  const type2 = getInputSpecType(spec2);
  if (type1 !== type2) {
    return null;
  }
  if (isIntInputSpec(spec1) || isFloatInputSpec(spec1)) {
    return mergeNumericInputSpec(spec1, spec2);
  }
  if (isComboInputSpec(spec1)) {
    return mergeComboInputSpec(spec1, spec2);
  }
  return mergeCommonInputSpec(spec1, spec2);
}, "mergeInputSpec");
const isSubgraphNode = /* @__PURE__ */ __name((nodeDef) => {
  return nodeDef.category === "subgraph" && nodeDef.python_module === "nodes";
}, "isSubgraphNode");
const replacePropertyName = "Run widget replace on values";
class PrimitiveNode extends LGraphNode {
  static {
    __name(this, "PrimitiveNode");
  }
  controlValues;
  lastType;
  static category;
  constructor(title) {
    super(title);
    this.addOutput("connect to widget input", "*");
    this.serialize_widgets = true;
    this.isVirtualNode = true;
    if (!this.properties || !(replacePropertyName in this.properties)) {
      this.addProperty(replacePropertyName, false, "boolean");
    }
  }
  applyToGraph(extraLinks = []) {
    if (!this.outputs[0].links?.length) return;
    const links = [
      ...this.outputs[0].links.map((l) => app.graph.links[l]),
      ...extraLinks
    ];
    let v = this.widgets?.[0].value;
    if (v && this.properties[replacePropertyName]) {
      v = applyTextReplacements(app.graph, v);
    }
    for (const linkInfo of links) {
      const node = this.graph?.getNodeById(linkInfo.target_id);
      const input = node?.inputs[linkInfo.target_slot];
      if (!input) {
        console.warn("Unable to resolve node or input for link", linkInfo);
        continue;
      }
      const widgetName = input.widget?.name;
      if (!widgetName) {
        console.warn("Invalid widget or widget name", input.widget);
        continue;
      }
      const widget = node.widgets?.find((w) => w.name === widgetName);
      if (!widget) {
        console.warn(
          `Unable to find widget "${widgetName}" on node [${node.id}]`
        );
        continue;
      }
      widget.value = v;
      widget.callback?.(
        widget.value,
        app.canvas,
        node,
        app.canvas.graph_mouse,
        {}
      );
    }
  }
  refreshComboInNode() {
    const widget = this.widgets?.[0];
    if (widget?.type === "combo") {
      widget.options.values = this.outputs[0].widget[GET_CONFIG]()[0];
      if (!widget.options.values.includes(widget.value)) {
        widget.value = widget.options.values[0];
        widget.callback(widget.value);
      }
    }
  }
  onAfterGraphConfigured() {
    if (this.outputs[0].links?.length && !this.widgets?.length) {
      this.#onFirstConnection();
      if (this.widgets && this.widgets_values) {
        for (let i = 0; i < this.widgets_values.length; i++) {
          const w = this.widgets[i];
          if (w) {
            w.value = this.widgets_values[i];
          }
        }
      }
      this.#mergeWidgetConfig();
    }
  }
  onConnectionsChange(_type, _index, connected) {
    if (app.configuringGraph) {
      return;
    }
    const links = this.outputs[0].links;
    if (connected) {
      if (links?.length && !this.widgets?.length) {
        this.#onFirstConnection();
      }
    } else {
      this.#mergeWidgetConfig();
      if (!links?.length) {
        this.onLastDisconnect();
      }
    }
  }
  onConnectOutput(slot, _type, input, target_node, target_slot) {
    if (!input.widget && !(input.type in ComfyWidgets)) {
      return false;
    }
    if (this.outputs[slot].links?.length) {
      const valid = this.#isValidConnection(input);
      if (valid) {
        this.applyToGraph([{ target_id: target_node.id, target_slot }]);
      }
      return valid;
    }
    return true;
  }
  #onFirstConnection(recreating) {
    if (!this.outputs[0].links) {
      this.onLastDisconnect();
      return;
    }
    const linkId = this.outputs[0].links[0];
    const link = this.graph.links[linkId];
    if (!link) return;
    const theirNode = this.graph.getNodeById(link.target_id);
    if (!theirNode || !theirNode.inputs) return;
    const input = theirNode.inputs[link.target_slot];
    if (!input) return;
    let widget;
    if (!input.widget) {
      if (!(input.type in ComfyWidgets)) return;
      widget = { name: input.name, [GET_CONFIG]: () => [input.type, {}] };
    } else {
      widget = input.widget;
    }
    const config = widget[GET_CONFIG]?.();
    if (!config) return;
    const { type } = getWidgetType(config);
    this.outputs[0].type = type;
    this.outputs[0].name = type;
    this.outputs[0].widget = widget;
    this.#createWidget(
      widget[CONFIG] ?? config,
      theirNode,
      widget.name,
      // @ts-expect-error fixme ts strict error
      recreating
    );
  }
  #createWidget(inputData, node, widgetName, recreating) {
    let type = inputData[0];
    if (type instanceof Array) {
      type = "COMBO";
    }
    const [oldWidth, oldHeight] = this.size;
    let widget;
    if (type in ComfyWidgets) {
      widget = (ComfyWidgets[type](this, "value", inputData, app) || {}).widget;
    } else {
      widget = this.addWidget(type, "value", null, () => {
      }, {});
    }
    if (node?.widgets && widget) {
      const theirWidget = node.widgets.find((w) => w.name === widgetName);
      if (theirWidget) {
        widget.value = theirWidget.value;
      }
    }
    if (!inputData?.[1]?.control_after_generate && (widget.type === "number" || widget.type === "combo")) {
      let control_value = this.widgets_values?.[1];
      if (!control_value) {
        control_value = "fixed";
      }
      addValueControlWidgets(
        this,
        widget,
        control_value,
        void 0,
        inputData
      );
      let filter = this.widgets_values?.[2];
      if (filter && this.widgets && this.widgets.length === 3) {
        this.widgets[2].value = filter;
      }
    }
    const controlValues = this.controlValues;
    if (this.widgets && this.lastType === this.widgets[0]?.type && controlValues?.length === this.widgets.length - 1) {
      for (let i = 0; i < controlValues.length; i++) {
        this.widgets[i + 1].value = controlValues[i];
      }
    }
    widget.callback = useChainCallback(widget.callback, () => {
      this.applyToGraph();
    });
    this.setSize([
      Math.max(this.size[0], oldWidth),
      Math.max(this.size[1], oldHeight)
    ]);
    if (!recreating) {
      const sz = this.computeSize();
      if (this.size[0] < sz[0]) {
        this.size[0] = sz[0];
      }
      if (this.size[1] < sz[1]) {
        this.size[1] = sz[1];
      }
      requestAnimationFrame(() => {
        this.onResize?.(this.size);
      });
    }
  }
  recreateWidget() {
    const values = this.widgets?.map((w) => w.value);
    this.#removeWidgets();
    this.#onFirstConnection(true);
    if (values?.length && this.widgets) {
      for (let i = 0; i < this.widgets.length; i++)
        this.widgets[i].value = values[i];
    }
    return this.widgets?.[0];
  }
  #mergeWidgetConfig() {
    const output = this.outputs[0];
    const links = output.links ?? [];
    const hasConfig = !!output.widget?.[CONFIG];
    if (hasConfig) {
      delete output.widget?.[CONFIG];
    }
    if (links?.length < 2 && hasConfig) {
      if (links.length) {
        this.recreateWidget();
      }
      return;
    }
    const config1 = output.widget?.[GET_CONFIG]?.();
    if (!config1) return;
    const isNumber = config1[0] === "INT" || config1[0] === "FLOAT";
    if (!isNumber) return;
    for (const linkId of links) {
      const link = app.graph.links[linkId];
      if (!link) continue;
      const theirNode = app.graph.getNodeById(link.target_id);
      if (!theirNode) continue;
      const theirInput = theirNode.inputs[link.target_slot];
      this.#isValidConnection(theirInput, hasConfig);
    }
  }
  #isValidConnection(input, forceUpdate) {
    const output = this.outputs?.[0];
    const config2 = input.widget?.[GET_CONFIG]?.();
    if (!config2) return false;
    return !!mergeIfValid.call(
      this,
      output,
      config2,
      forceUpdate,
      this.recreateWidget
    );
  }
  #removeWidgets() {
    if (this.widgets) {
      for (const w of this.widgets) {
        if (w.onRemove) {
          w.onRemove();
        }
      }
      this.controlValues = [];
      this.lastType = this.widgets[0]?.type;
      for (let i = 1; i < this.widgets.length; i++) {
        this.controlValues.push(this.widgets[i].value);
      }
      setTimeout(() => {
        delete this.lastType;
        delete this.controlValues;
      }, 15);
      this.widgets.length = 0;
    }
  }
  onLastDisconnect() {
    this.outputs[0].type = "*";
    this.outputs[0].name = "connect to widget input";
    delete this.outputs[0].widget;
    this.#removeWidgets();
  }
}
function getWidgetConfig(slot) {
  return slot.widget?.[CONFIG] ?? slot.widget?.[GET_CONFIG]?.() ?? [
    "*",
    {}
  ];
}
__name(getWidgetConfig, "getWidgetConfig");
function getConfig(widgetName) {
  const { nodeData } = this.constructor;
  return nodeData?.input?.required?.[widgetName] ?? nodeData?.input?.optional?.[widgetName];
}
__name(getConfig, "getConfig");
function convertToInput(node, widget) {
  console.warn(
    "Please remove call to convertToInput. Widget to socket conversion is no longer necessary, as they co-exist now."
  );
  return node.inputs.find((slot) => slot.widget?.name === widget.name);
}
__name(convertToInput, "convertToInput");
function getWidgetType(config) {
  let type = config[0];
  if (type instanceof Array) {
    type = "COMBO";
  }
  return { type };
}
__name(getWidgetType, "getWidgetType");
function setWidgetConfig(slot, config) {
  if (!slot.widget) return;
  if (config) {
    slot.widget[GET_CONFIG] = () => config;
  } else {
    delete slot.widget;
  }
  if ("link" in slot) {
    const link = app.graph.links[slot.link ?? -1];
    if (link) {
      const originNode = app.graph.getNodeById(link.origin_id);
      if (originNode && isPrimitiveNode(originNode)) {
        if (config) {
          originNode.recreateWidget();
        } else if (!app.configuringGraph) {
          originNode.disconnectOutput(0);
          originNode.onLastDisconnect();
        }
      }
    }
  }
}
__name(setWidgetConfig, "setWidgetConfig");
function mergeIfValid(output, config2, forceUpdate, recreateWidget, config1) {
  if (!config1) {
    config1 = getWidgetConfig(output);
  }
  const customSpec = mergeInputSpec(config1, config2);
  if (customSpec || forceUpdate) {
    if (customSpec) {
      output.widget[CONFIG] = customSpec;
    }
    const widget = recreateWidget?.call(this);
    if (widget) {
      const min = widget.options.min;
      const max = widget.options.max;
      if (min != null && widget.value < min) widget.value = min;
      if (max != null && widget.value > max) widget.value = max;
      widget.callback(widget.value);
    }
  }
  return { customConfig: customSpec?.[1] ?? {} };
}
__name(mergeIfValid, "mergeIfValid");
app.registerExtension({
  name: "Comfy.WidgetInputs",
  async beforeRegisterNodeDef(nodeType, _nodeData, app2) {
    nodeType.prototype.convertWidgetToInput = function() {
      console.warn(
        "Please remove call to convertWidgetToInput. Widget to socket conversion is no longer necessary, as they co-exist now."
      );
      return false;
    };
    nodeType.prototype.onGraphConfigured = useChainCallback(
      nodeType.prototype.onGraphConfigured,
      function() {
        if (!this.inputs) return;
        this.widgets ??= [];
        for (const input of this.inputs) {
          if (input.widget) {
            const name = input.widget.name;
            if (!input.widget[GET_CONFIG]) {
              input.widget[GET_CONFIG] = () => getConfig.call(this, name);
            }
            const w = this.widgets?.find((w2) => w2.name === name);
            if (!w) {
              this.removeInput(this.inputs.findIndex((i) => i === input));
            }
          }
        }
      }
    );
    nodeType.prototype.onConfigure = useChainCallback(
      nodeType.prototype.onConfigure,
      function() {
        if (!app2.configuringGraph && this.inputs) {
          for (const input of this.inputs) {
            if (input.widget && !input.widget[GET_CONFIG]) {
              const name = input.widget.name;
              input.widget[GET_CONFIG] = () => getConfig.call(this, name);
            }
          }
        }
      }
    );
    function isNodeAtPos(pos) {
      for (const n of app2.graph.nodes) {
        if (n.pos[0] === pos[0] && n.pos[1] === pos[1]) {
          return true;
        }
      }
      return false;
    }
    __name(isNodeAtPos, "isNodeAtPos");
    const origOnInputDblClick = nodeType.prototype.onInputDblClick;
    nodeType.prototype.onInputDblClick = function(...[slot, ...args]) {
      const r = origOnInputDblClick?.apply(this, [slot, ...args]);
      const input = this.inputs[slot];
      if (!input.widget) {
        if (!(input.type in ComfyWidgets) && !(input.widget?.[GET_CONFIG]?.()?.[0] instanceof Array)) {
          return r;
        }
      }
      const node = LiteGraph.createNode("PrimitiveNode");
      if (!node) return r;
      app2.graph.add(node);
      const pos = [
        this.pos[0] - node.size[0] - 30,
        this.pos[1]
      ];
      while (isNodeAtPos(pos)) {
        pos[1] += LiteGraph.NODE_TITLE_HEIGHT;
      }
      node.pos = pos;
      node.connect(0, this, slot);
      node.title = input.name;
      return r;
    };
  },
  registerCustomNodes() {
    LiteGraph.registerNodeType(
      "PrimitiveNode",
      Object.assign(PrimitiveNode, {
        title: "Primitive"
      })
    );
    PrimitiveNode.category = "utils";
  }
});
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.widgetInputs = window.comfyAPI.widgetInputs || {};
window.comfyAPI.widgetInputs.PrimitiveNode = PrimitiveNode;
window.comfyAPI.widgetInputs.getWidgetConfig = getWidgetConfig;
window.comfyAPI.widgetInputs.convertToInput = convertToInput;
window.comfyAPI.widgetInputs.setWidgetConfig = setWidgetConfig;
window.comfyAPI.widgetInputs.mergeIfValid = mergeIfValid;
const PREFIX = "workflow";
const SEPARATOR = ">";
const Workflow = {
  InUse: {
    Free: 0,
    Registered: 1,
    InWorkflow: 2
  },
  // @ts-expect-error fixme ts strict error
  isInUseGroupNode(name) {
    const id2 = `${PREFIX}${SEPARATOR}${name}`;
    if (app.graph.extra?.groupNodes?.[name]) {
      if (app.graph.nodes.find((n) => n.type === id2)) {
        return Workflow.InUse.InWorkflow;
      } else {
        return Workflow.InUse.Registered;
      }
    }
    return Workflow.InUse.Free;
  },
  storeGroupNode(name, data) {
    let extra = app.graph.extra;
    if (!extra) app.graph.extra = extra = {};
    let groupNodes = extra.groupNodes;
    if (!groupNodes) extra.groupNodes = groupNodes = {};
    groupNodes[name] = data;
  }
};
class GroupNodeBuilder {
  static {
    __name(this, "GroupNodeBuilder");
  }
  nodes;
  // @ts-expect-error fixme ts strict error
  nodeData;
  constructor(nodes) {
    this.nodes = nodes;
  }
  async build() {
    const name = await this.getName();
    if (!name) return;
    this.sortNodes();
    this.nodeData = this.getNodeData();
    Workflow.storeGroupNode(name, this.nodeData);
    return { name, nodeData: this.nodeData };
  }
  async getName() {
    const name = await useDialogService().prompt({
      title: t("groupNode.create"),
      message: t("groupNode.enterName"),
      defaultValue: ""
    });
    if (!name) return;
    const used = Workflow.isInUseGroupNode(name);
    switch (used) {
      case Workflow.InUse.InWorkflow:
        useToastStore().addAlert(
          "An in use group node with this name already exists embedded in this workflow, please remove any instances or use a new name."
        );
        return;
      case Workflow.InUse.Registered:
        if (!confirm(
          "A group node with this name already exists embedded in this workflow, are you sure you want to overwrite it?"
        )) {
          return;
        }
        break;
    }
    return name;
  }
  sortNodes() {
    const nodesInOrder = app.graph.computeExecutionOrder(false);
    this.nodes = this.nodes.map((node) => ({ index: nodesInOrder.indexOf(node), node })).sort((a, b) => a.index - b.index || a.node.id - b.node.id).map(({ node }) => node);
  }
  getNodeData() {
    const storeLinkTypes = /* @__PURE__ */ __name((config) => {
      for (const link of config.links) {
        const origin = app.graph.getNodeById(link[4]);
        const type = origin.outputs[link[1]].type;
        link.push(type);
      }
    }, "storeLinkTypes");
    const storeExternalLinks = /* @__PURE__ */ __name((config) => {
      config.external = [];
      for (let i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i];
        if (!node.outputs?.length) continue;
        for (let slot = 0; slot < node.outputs.length; slot++) {
          let hasExternal = false;
          const output = node.outputs[slot];
          let type = output.type;
          if (!output.links?.length) continue;
          for (const l of output.links) {
            const link = app.graph.links[l];
            if (!link) continue;
            if (type === "*") type = link.type;
            if (!app.canvas.selected_nodes[link.target_id]) {
              hasExternal = true;
              break;
            }
          }
          if (hasExternal) {
            config.external.push([i, slot, type]);
          }
        }
      }
    }, "storeExternalLinks");
    try {
      const serialised = serialise(this.nodes, app.canvas.graph);
      const config = JSON.parse(serialised);
      storeLinkTypes(config);
      storeExternalLinks(config);
      return config;
    } finally {
    }
  }
}
class GroupNodeConfig {
  static {
    __name(this, "GroupNodeConfig");
  }
  name;
  nodeData;
  inputCount;
  oldToNewOutputMap;
  newToOldOutputMap;
  oldToNewInputMap;
  oldToNewWidgetMap;
  newToOldWidgetMap;
  primitiveDefs;
  widgetToPrimitive;
  primitiveToWidget;
  nodeInputs;
  outputVisibility;
  // @ts-expect-error fixme ts strict error
  nodeDef;
  // @ts-expect-error fixme ts strict error
  inputs;
  // @ts-expect-error fixme ts strict error
  linksFrom;
  // @ts-expect-error fixme ts strict error
  linksTo;
  // @ts-expect-error fixme ts strict error
  externalFrom;
  // @ts-expect-error fixme ts strict error
  constructor(name, nodeData) {
    this.name = name;
    this.nodeData = nodeData;
    this.getLinks();
    this.inputCount = 0;
    this.oldToNewOutputMap = {};
    this.newToOldOutputMap = {};
    this.oldToNewInputMap = {};
    this.oldToNewWidgetMap = {};
    this.newToOldWidgetMap = {};
    this.primitiveDefs = {};
    this.widgetToPrimitive = {};
    this.primitiveToWidget = {};
    this.nodeInputs = {};
    this.outputVisibility = [];
  }
  async registerType(source = PREFIX) {
    this.nodeDef = {
      output: [],
      output_name: [],
      output_is_list: [],
      // @ts-expect-error Unused, doesn't exist
      output_is_hidden: [],
      name: source + SEPARATOR + this.name,
      display_name: this.name,
      category: "group nodes" + (SEPARATOR + source),
      input: { required: {} },
      description: `Group node combining ${this.nodeData.nodes.map((n) => n.type).join(", ")}`,
      python_module: "custom_nodes." + this.name,
      [GROUP]: this
    };
    this.inputs = [];
    const seenInputs = {};
    const seenOutputs = {};
    for (let i = 0; i < this.nodeData.nodes.length; i++) {
      const node = this.nodeData.nodes[i];
      node.index = i;
      this.processNode(node, seenInputs, seenOutputs);
    }
    for (const p of this.#convertedToProcess) {
      p();
    }
    this.#convertedToProcess = null;
    await app.registerNodeDef(`${PREFIX}${SEPARATOR}` + this.name, this.nodeDef);
    useNodeDefStore().addNodeDef(this.nodeDef);
  }
  getLinks() {
    this.linksFrom = {};
    this.linksTo = {};
    this.externalFrom = {};
    for (const l of this.nodeData.links) {
      const [sourceNodeId, sourceNodeSlot, targetNodeId, targetNodeSlot] = l;
      if (sourceNodeId == null) continue;
      if (!this.linksFrom[sourceNodeId]) {
        this.linksFrom[sourceNodeId] = {};
      }
      if (!this.linksFrom[sourceNodeId][sourceNodeSlot]) {
        this.linksFrom[sourceNodeId][sourceNodeSlot] = [];
      }
      this.linksFrom[sourceNodeId][sourceNodeSlot].push(l);
      if (!this.linksTo[targetNodeId]) {
        this.linksTo[targetNodeId] = {};
      }
      this.linksTo[targetNodeId][targetNodeSlot] = l;
    }
    if (this.nodeData.external) {
      for (const ext2 of this.nodeData.external) {
        if (!this.externalFrom[ext2[0]]) {
          this.externalFrom[ext2[0]] = { [ext2[1]]: ext2[2] };
        } else {
          this.externalFrom[ext2[0]][ext2[1]] = ext2[2];
        }
      }
    }
  }
  // @ts-expect-error fixme ts strict error
  processNode(node, seenInputs, seenOutputs) {
    const def = this.getNodeDef(node);
    if (!def) return;
    const inputs = { ...def.input?.required, ...def.input?.optional };
    this.inputs.push(this.processNodeInputs(node, seenInputs, inputs));
    if (def.output?.length) this.processNodeOutputs(node, seenOutputs, def);
  }
  // @ts-expect-error fixme ts strict error
  getNodeDef(node) {
    const def = globalDefs[node.type];
    if (def) return def;
    const linksFrom = this.linksFrom[node.index];
    if (node.type === "PrimitiveNode") {
      if (!linksFrom) return;
      let type = linksFrom["0"][0][5];
      if (type === "COMBO") {
        const source = node.outputs[0].widget.name;
        const fromTypeName = this.nodeData.nodes[linksFrom["0"][0][2]].type;
        const fromType = globalDefs[fromTypeName];
        const input = fromType.input.required[source] ?? fromType.input.optional[source];
        type = input[0];
      }
      const def2 = this.primitiveDefs[node.index] = {
        input: {
          required: {
            value: [type, {}]
          }
        },
        output: [type],
        output_name: [],
        output_is_list: []
      };
      return def2;
    } else if (node.type === "Reroute") {
      const linksTo = this.linksTo[node.index];
      if (linksTo && linksFrom && !this.externalFrom[node.index]?.[0]) {
        return null;
      }
      let config = {};
      let rerouteType = "*";
      if (linksFrom) {
        for (const [, , id2, slot] of linksFrom["0"]) {
          const node2 = this.nodeData.nodes[id2];
          const input = node2.inputs[slot];
          if (rerouteType === "*") {
            rerouteType = input.type;
          }
          if (input.widget) {
            const targetDef = globalDefs[node2.type];
            const targetWidget = targetDef.input.required[input.widget.name] ?? targetDef.input.optional[input.widget.name];
            const widget = [targetWidget[0], config];
            const res = mergeIfValid(
              {
                // @ts-expect-error fixme ts strict error
                widget
              },
              targetWidget,
              false,
              null,
              widget
            );
            config = res?.customConfig ?? config;
          }
        }
      } else if (linksTo) {
        const [id2, slot] = linksTo["0"];
        rerouteType = this.nodeData.nodes[id2].outputs[slot].type;
      } else {
        for (const l of this.nodeData.links) {
          if (l[2] === node.index) {
            rerouteType = l[5];
            break;
          }
        }
        if (rerouteType === "*") {
          const t2 = this.externalFrom[node.index]?.[0];
          if (t2) {
            rerouteType = t2;
          }
        }
      }
      config.forceInput = true;
      return {
        input: {
          required: {
            [rerouteType]: [rerouteType, config]
          }
        },
        output: [rerouteType],
        output_name: [],
        output_is_list: []
      };
    }
    console.warn(
      "Skipping virtual node " + node.type + " when building group node " + this.name
    );
  }
  // @ts-expect-error fixme ts strict error
  getInputConfig(node, inputName, seenInputs, config, extra) {
    const customConfig = this.nodeData.config?.[node.index]?.input?.[inputName];
    let name = customConfig?.name ?? // @ts-expect-error fixme ts strict error
    node.inputs?.find((inp) => inp.name === inputName)?.label ?? inputName;
    let key = name;
    let prefix = "";
    if (node.type === "PrimitiveNode" && node.title || name in seenInputs) {
      prefix = `${node.title ?? node.type} `;
      key = name = `${prefix}${inputName}`;
      if (name in seenInputs) {
        name = `${prefix}${seenInputs[name]} ${inputName}`;
      }
    }
    seenInputs[key] = (seenInputs[key] ?? 1) + 1;
    if (inputName === "seed" || inputName === "noise_seed") {
      if (!extra) extra = {};
      extra.control_after_generate = `${prefix}control_after_generate`;
    }
    if (config[0] === "IMAGEUPLOAD") {
      if (!extra) extra = {};
      extra.widget = // @ts-expect-error fixme ts strict error
      this.oldToNewWidgetMap[node.index]?.[config[1]?.widget ?? "image"] ?? "image";
    }
    if (extra) {
      config = [config[0], { ...config[1], ...extra }];
    }
    return { name, config, customConfig };
  }
  // @ts-expect-error fixme ts strict error
  processWidgetInputs(inputs, node, inputNames, seenInputs) {
    const slots = [];
    const converted = /* @__PURE__ */ new Map();
    const widgetMap = this.oldToNewWidgetMap[node.index] = {};
    for (const inputName of inputNames) {
      if (useWidgetStore().inputIsWidget(inputs[inputName])) {
        const convertedIndex = node.inputs?.findIndex(
          // @ts-expect-error fixme ts strict error
          (inp) => inp.name === inputName && inp.widget?.name === inputName
        );
        if (convertedIndex > -1) {
          converted.set(convertedIndex, inputName);
          widgetMap[inputName] = null;
        } else {
          const { name, config } = this.getInputConfig(
            node,
            inputName,
            seenInputs,
            inputs[inputName]
          );
          this.nodeDef.input.required[name] = config;
          widgetMap[inputName] = name;
          this.newToOldWidgetMap[name] = { node, inputName };
        }
      } else {
        slots.push(inputName);
      }
    }
    return { converted, slots };
  }
  // @ts-expect-error fixme ts strict error
  checkPrimitiveConnection(link, inputName, inputs) {
    const sourceNode = this.nodeData.nodes[link[0]];
    if (sourceNode.type === "PrimitiveNode") {
      const [sourceNodeId, _2, targetNodeId, __] = link;
      const primitiveDef = this.primitiveDefs[sourceNodeId];
      const targetWidget = inputs[inputName];
      const primitiveConfig = primitiveDef.input.required.value;
      const output = { widget: primitiveConfig };
      const config = mergeIfValid(
        // @ts-expect-error invalid slot type
        output,
        targetWidget,
        false,
        null,
        primitiveConfig
      );
      primitiveConfig[1] = config?.customConfig ?? inputs[inputName][1] ? { ...inputs[inputName][1] } : {};
      let name = this.oldToNewWidgetMap[sourceNodeId]["value"];
      name = name.substr(0, name.length - 6);
      primitiveConfig[1].control_after_generate = true;
      primitiveConfig[1].control_prefix = name;
      let toPrimitive = this.widgetToPrimitive[targetNodeId];
      if (!toPrimitive) {
        toPrimitive = this.widgetToPrimitive[targetNodeId] = {};
      }
      if (toPrimitive[inputName]) {
        toPrimitive[inputName].push(sourceNodeId);
      }
      toPrimitive[inputName] = sourceNodeId;
      let toWidget = this.primitiveToWidget[sourceNodeId];
      if (!toWidget) {
        toWidget = this.primitiveToWidget[sourceNodeId] = [];
      }
      toWidget.push({ nodeId: targetNodeId, inputName });
    }
  }
  // @ts-expect-error fixme ts strict error
  processInputSlots(inputs, node, slots, linksTo, inputMap, seenInputs) {
    this.nodeInputs[node.index] = {};
    for (let i = 0; i < slots.length; i++) {
      const inputName = slots[i];
      if (linksTo[i]) {
        this.checkPrimitiveConnection(linksTo[i], inputName, inputs);
        continue;
      }
      const { name, config, customConfig } = this.getInputConfig(
        node,
        inputName,
        seenInputs,
        inputs[inputName]
      );
      this.nodeInputs[node.index][inputName] = name;
      if (customConfig?.visible === false) continue;
      this.nodeDef.input.required[name] = config;
      inputMap[i] = this.inputCount++;
    }
  }
  processConvertedWidgets(inputs, node, slots, converted, linksTo, inputMap, seenInputs) {
    const convertedSlots = [...converted.keys()].sort().map((k) => converted.get(k));
    for (let i = 0; i < convertedSlots.length; i++) {
      const inputName = convertedSlots[i];
      if (linksTo[slots.length + i]) {
        this.checkPrimitiveConnection(
          linksTo[slots.length + i],
          inputName,
          inputs
        );
        continue;
      }
      const { name, config } = this.getInputConfig(
        node,
        inputName,
        seenInputs,
        inputs[inputName],
        {
          defaultInput: true
        }
      );
      this.nodeDef.input.required[name] = config;
      this.newToOldWidgetMap[name] = { node, inputName };
      if (!this.oldToNewWidgetMap[node.index]) {
        this.oldToNewWidgetMap[node.index] = {};
      }
      this.oldToNewWidgetMap[node.index][inputName] = name;
      inputMap[slots.length + i] = this.inputCount++;
    }
  }
  #convertedToProcess = [];
  // @ts-expect-error fixme ts strict error
  processNodeInputs(node, seenInputs, inputs) {
    const inputMapping = [];
    const inputNames = Object.keys(inputs);
    if (!inputNames.length) return;
    const { converted, slots } = this.processWidgetInputs(
      inputs,
      node,
      inputNames,
      seenInputs
    );
    const linksTo = this.linksTo[node.index] ?? {};
    const inputMap = this.oldToNewInputMap[node.index] = {};
    this.processInputSlots(inputs, node, slots, linksTo, inputMap, seenInputs);
    this.#convertedToProcess.push(
      () => this.processConvertedWidgets(
        inputs,
        node,
        slots,
        converted,
        linksTo,
        inputMap,
        seenInputs
      )
    );
    return inputMapping;
  }
  // @ts-expect-error fixme ts strict error
  processNodeOutputs(node, seenOutputs, def) {
    const oldToNew = this.oldToNewOutputMap[node.index] = {};
    for (let outputId = 0; outputId < def.output.length; outputId++) {
      const linksFrom = this.linksFrom[node.index];
      const hasLink = (
        // @ts-expect-error fixme ts strict error
        linksFrom?.[outputId] && !this.externalFrom[node.index]?.[outputId]
      );
      const customConfig = this.nodeData.config?.[node.index]?.output?.[outputId];
      const visible = customConfig?.visible ?? !hasLink;
      this.outputVisibility.push(visible);
      if (!visible) {
        continue;
      }
      oldToNew[outputId] = this.nodeDef.output.length;
      this.newToOldOutputMap[this.nodeDef.output.length] = {
        node,
        slot: outputId
      };
      this.nodeDef.output.push(def.output[outputId]);
      this.nodeDef.output_is_list.push(def.output_is_list[outputId]);
      let label = customConfig?.name;
      if (!label) {
        label = def.output_name?.[outputId] ?? def.output[outputId];
        const output = node.outputs.find((o) => o.name === label);
        if (output?.label) {
          label = output.label;
        }
      }
      let name = label;
      if (name in seenOutputs) {
        const prefix = `${node.title ?? node.type} `;
        name = `${prefix}${label}`;
        if (name in seenOutputs) {
          name = `${prefix}${node.index} ${label}`;
        }
      }
      seenOutputs[name] = 1;
      this.nodeDef.output_name.push(name);
    }
  }
  // @ts-expect-error fixme ts strict error
  static async registerFromWorkflow(groupNodes, missingNodeTypes) {
    for (const g in groupNodes) {
      const groupData = groupNodes[g];
      let hasMissing = false;
      for (const n of groupData.nodes) {
        if (!(n.type in LiteGraph.registered_node_types)) {
          missingNodeTypes.push({
            type: n.type,
            hint: ` (In group node '${PREFIX}${SEPARATOR}${g}')`
          });
          missingNodeTypes.push({
            type: `${PREFIX}${SEPARATOR}` + g,
            action: {
              text: "Remove from workflow",
              // @ts-expect-error fixme ts strict error
              callback: /* @__PURE__ */ __name((e) => {
                delete groupNodes[g];
                e.target.textContent = "Removed";
                e.target.style.pointerEvents = "none";
                e.target.style.opacity = 0.7;
              }, "callback")
            }
          });
          hasMissing = true;
        }
      }
      if (hasMissing) continue;
      const config = new GroupNodeConfig(g, groupData);
      await config.registerType();
    }
  }
}
class GroupNodeHandler {
  static {
    __name(this, "GroupNodeHandler");
  }
  node;
  groupData;
  innerNodes;
  constructor(node) {
    this.node = node;
    this.groupData = node.constructor?.nodeData?.[GROUP];
    this.node.setInnerNodes = (innerNodes) => {
      this.innerNodes = innerNodes;
      for (let innerNodeIndex = 0; innerNodeIndex < this.innerNodes.length; innerNodeIndex++) {
        const innerNode = this.innerNodes[innerNodeIndex];
        innerNode.graph ??= this.node.graph;
        for (const w of innerNode.widgets ?? []) {
          if (w.type === "converted-widget") {
            w.serializeValue = w.origSerializeValue;
          }
        }
        innerNode.index = innerNodeIndex;
        innerNode.getInputNode = (slot) => {
          const externalSlot = this.groupData.oldToNewInputMap[innerNode.index]?.[slot];
          if (externalSlot != null) {
            return this.node.getInputNode(externalSlot);
          }
          const innerLink = this.groupData.linksTo[innerNode.index]?.[slot];
          if (!innerLink) return null;
          const inputNode = innerNodes[innerLink[0]];
          if (inputNode.type === "PrimitiveNode") return null;
          return inputNode;
        };
        innerNode.getInputLink = (slot) => {
          const externalSlot = this.groupData.oldToNewInputMap[innerNode.index]?.[slot];
          if (externalSlot != null) {
            const linkId = this.node.inputs[externalSlot].link;
            let link2 = app.graph.links[linkId];
            link2 = {
              ...link2,
              target_id: innerNode.id,
              target_slot: +slot
            };
            return link2;
          }
          let link = this.groupData.linksTo[innerNode.index]?.[slot];
          if (!link) return null;
          link = {
            origin_id: innerNodes[link[0]].id,
            origin_slot: link[1],
            target_id: innerNode.id,
            target_slot: +slot
          };
          return link;
        };
      }
    };
    this.node.updateLink = (link) => {
      link = { ...link };
      const output = this.groupData.newToOldOutputMap[link.origin_slot];
      let innerNode = this.innerNodes[output.node.index];
      let l;
      while (innerNode?.type === "Reroute") {
        l = innerNode.getInputLink(0);
        innerNode = innerNode.getInputNode(0);
      }
      if (!innerNode) {
        return null;
      }
      if (l && GroupNodeHandler.isGroupNode(innerNode)) {
        return innerNode.updateLink(l);
      }
      link.origin_id = innerNode.id;
      link.origin_slot = l?.origin_slot ?? output.slot;
      return link;
    };
    this.node.getInnerNodes = (computedNodeDtos, subgraphNodePath = [], nodes = [], visited = /* @__PURE__ */ new Set()) => {
      if (visited.has(this.node))
        throw new Error("RecursionError: while flattening subgraph");
      visited.add(this.node);
      if (!this.innerNodes) {
        this.node.setInnerNodes(
          // @ts-expect-error fixme ts strict error
          this.groupData.nodeData.nodes.map((n, i) => {
            const innerNode = LiteGraph.createNode(n.type);
            innerNode.configure(n);
            innerNode.id = `${this.node.id}:${i}`;
            innerNode.graph = this.node.graph;
            return innerNode;
          })
        );
      }
      this.updateInnerWidgets();
      const subgraphInstanceIdPath = [...subgraphNodePath, this.node.id];
      const subgraphNode = this.node.graph?.getNodeById(
        subgraphNodePath.at(-1)
      ) ?? void 0;
      for (const node2 of this.innerNodes) {
        node2.graph ??= this.node.graph;
        const currentId = String(node2.id);
        node2.id = currentId.split(":").at(-1);
        const aVeryRealNode = new ExecutableGroupNodeChildDTO(
          node2,
          subgraphInstanceIdPath,
          computedNodeDtos,
          subgraphNode
        );
        node2.id = currentId;
        aVeryRealNode.groupNodeHandler = this;
        nodes.push(aVeryRealNode);
      }
      return nodes;
    };
    this.node.recreate = async () => {
      const id2 = this.node.id;
      const sz = this.node.size;
      const nodes = this.node.convertToNodes();
      const groupNode2 = LiteGraph.createNode(this.node.type);
      groupNode2.id = id2;
      groupNode2.setInnerNodes(nodes);
      groupNode2[GROUP].populateWidgets();
      app.graph.add(groupNode2);
      groupNode2.setSize([
        // @ts-expect-error fixme ts strict error
        Math.max(groupNode2.size[0], sz[0]),
        // @ts-expect-error fixme ts strict error
        Math.max(groupNode2.size[1], sz[1])
      ]);
      const builder = new GroupNodeBuilder(nodes);
      const nodeData = builder.getNodeData();
      groupNode2[GROUP].groupData.nodeData.links = nodeData.links;
      groupNode2[GROUP].replaceNodes(nodes);
      return groupNode2;
    };
    this.node.convertToNodes = () => {
      const addInnerNodes = /* @__PURE__ */ __name(() => {
        const c = { ...this.groupData.nodeData };
        c.nodes = [...c.nodes];
        const innerNodes = this.node.getInnerNodes();
        let ids = [];
        for (let i = 0; i < c.nodes.length; i++) {
          let id2 = innerNodes?.[i]?.id;
          if (id2 == null || isNaN(id2)) {
            id2 = void 0;
          } else {
            ids.push(id2);
          }
          c.nodes[i] = { ...c.nodes[i], id: id2 };
        }
        deserialiseAndCreate(JSON.stringify(c), app.canvas);
        const [x, y] = this.node.pos;
        let top;
        let left;
        const selectedIds = ids.length ? ids : Object.keys(app.canvas.selected_nodes);
        const newNodes = [];
        for (let i = 0; i < selectedIds.length; i++) {
          const id2 = selectedIds[i];
          const newNode = app.graph.getNodeById(id2);
          const innerNode = innerNodes[i];
          newNodes.push(newNode);
          if (left == null || newNode.pos[0] < left) {
            left = newNode.pos[0];
          }
          if (top == null || newNode.pos[1] < top) {
            top = newNode.pos[1];
          }
          if (!newNode.widgets) continue;
          const map = this.groupData.oldToNewWidgetMap[innerNode.index];
          if (map) {
            const widgets = Object.keys(map);
            for (const oldName of widgets) {
              const newName = map[oldName];
              if (!newName) continue;
              const widgetIndex = this.node.widgets.findIndex(
                (w) => w.name === newName
              );
              if (widgetIndex === -1) continue;
              if (innerNode.type === "PrimitiveNode") {
                for (let i2 = 0; i2 < newNode.widgets.length; i2++) {
                  newNode.widgets[i2].value = // @ts-expect-error fixme ts strict error
                  this.node.widgets[widgetIndex + i2].value;
                }
              } else {
                const outerWidget = this.node.widgets[widgetIndex];
                const newWidget = newNode.widgets.find(
                  (w) => w.name === oldName
                );
                if (!newWidget) continue;
                newWidget.value = outerWidget.value;
                for (let w = 0; w < outerWidget.linkedWidgets?.length; w++) {
                  newWidget.linkedWidgets[w].value = // @ts-expect-error fixme ts strict error
                  outerWidget.linkedWidgets[w].value;
                }
              }
            }
          }
        }
        for (const newNode of newNodes) {
          newNode.pos[0] -= left - x;
          newNode.pos[1] -= top - y;
        }
        return { newNodes, selectedIds };
      }, "addInnerNodes");
      const reconnectInputs = /* @__PURE__ */ __name((selectedIds) => {
        for (const innerNodeIndex in this.groupData.oldToNewInputMap) {
          const id2 = selectedIds[innerNodeIndex];
          const newNode = app.graph.getNodeById(id2);
          const map = this.groupData.oldToNewInputMap[innerNodeIndex];
          for (const innerInputId in map) {
            const groupSlotId = map[innerInputId];
            if (groupSlotId == null) continue;
            const slot = node.inputs[groupSlotId];
            if (slot.link == null) continue;
            const link = app.graph.links[slot.link];
            if (!link) continue;
            const originNode = app.graph.getNodeById(link.origin_id);
            originNode.connect(link.origin_slot, newNode, +innerInputId);
          }
        }
      }, "reconnectInputs");
      const reconnectOutputs = /* @__PURE__ */ __name((selectedIds) => {
        for (let groupOutputId = 0; groupOutputId < node.outputs?.length; groupOutputId++) {
          const output = node.outputs[groupOutputId];
          if (!output.links) continue;
          const links = [...output.links];
          for (const l of links) {
            const slot = this.groupData.newToOldOutputMap[groupOutputId];
            const link = app.graph.links[l];
            const targetNode = app.graph.getNodeById(link.target_id);
            const newNode = app.graph.getNodeById(selectedIds[slot.node.index]);
            newNode.connect(slot.slot, targetNode, link.target_slot);
          }
        }
      }, "reconnectOutputs");
      app.canvas.emitBeforeChange();
      try {
        const { newNodes, selectedIds } = addInnerNodes();
        reconnectInputs(selectedIds);
        reconnectOutputs(selectedIds);
        app.graph.remove(this.node);
        return newNodes;
      } finally {
        app.canvas.emitAfterChange();
      }
    };
    const getExtraMenuOptions = this.node.getExtraMenuOptions;
    this.node.getExtraMenuOptions = function(_2, options) {
      getExtraMenuOptions?.apply(this, arguments);
      let optionIndex = options.findIndex((o) => o.content === "Outputs");
      if (optionIndex === -1) optionIndex = options.length;
      else optionIndex++;
      options.splice(
        optionIndex,
        0,
        null,
        {
          content: "Convert to nodes",
          // @ts-expect-error
          callback: /* @__PURE__ */ __name(() => {
            return this.convertToNodes();
          }, "callback")
        },
        {
          content: "Manage Group Node",
          callback: /* @__PURE__ */ __name(() => manageGroupNodes(this.type), "callback")
        }
      );
    };
    const onDrawTitleBox = this.node.onDrawTitleBox;
    this.node.onDrawTitleBox = function(ctx, height) {
      onDrawTitleBox?.apply(this, arguments);
      const fill = ctx.fillStyle;
      ctx.beginPath();
      ctx.rect(11, -height + 11, 2, 2);
      ctx.rect(14, -height + 11, 2, 2);
      ctx.rect(17, -height + 11, 2, 2);
      ctx.rect(11, -height + 14, 2, 2);
      ctx.rect(14, -height + 14, 2, 2);
      ctx.rect(17, -height + 14, 2, 2);
      ctx.rect(11, -height + 17, 2, 2);
      ctx.rect(14, -height + 17, 2, 2);
      ctx.rect(17, -height + 17, 2, 2);
      ctx.fillStyle = this.boxcolor || LiteGraph.NODE_DEFAULT_BOXCOLOR;
      ctx.fill();
      ctx.fillStyle = fill;
    };
    const onDrawForeground = node.onDrawForeground;
    const groupData = this.groupData.nodeData;
    node.onDrawForeground = function(ctx) {
      onDrawForeground?.apply?.(this, arguments);
      const progressState = useExecutionStore().nodeProgressStates[this.id];
      if (progressState && progressState.state === "running" && this.runningInternalNodeId !== null) {
        const n = groupData.nodes[this.runningInternalNodeId];
        if (!n) return;
        const message = `Running ${n.title || n.type} (${this.runningInternalNodeId}/${groupData.nodes.length})`;
        ctx.save();
        ctx.font = "12px sans-serif";
        const sz = ctx.measureText(message);
        ctx.fillStyle = node.boxcolor || LiteGraph.NODE_DEFAULT_BOXCOLOR;
        ctx.beginPath();
        ctx.roundRect(
          0,
          -LiteGraph.NODE_TITLE_HEIGHT - 20,
          sz.width + 12,
          20,
          5
        );
        ctx.fill();
        ctx.fillStyle = "#fff";
        ctx.fillText(message, 6, -LiteGraph.NODE_TITLE_HEIGHT - 6);
        ctx.restore();
      }
    };
    const onExecutionStart = this.node.onExecutionStart;
    this.node.onExecutionStart = function() {
      this.resetExecution = true;
      return onExecutionStart?.apply(this, arguments);
    };
    const self = this;
    const onNodeCreated = this.node.onNodeCreated;
    this.node.onNodeCreated = function() {
      if (!this.widgets) {
        return;
      }
      const config = self.groupData.nodeData.config;
      if (config) {
        for (const n in config) {
          const inputs = config[n]?.input;
          for (const w in inputs) {
            if (inputs[w].visible !== false) continue;
            const widgetName = self.groupData.oldToNewWidgetMap[n][w];
            const widget = this.widgets.find((w2) => w2.name === widgetName);
            if (widget) {
              widget.type = "hidden";
              widget.computeSize = () => [0, -4];
            }
          }
        }
      }
      return onNodeCreated?.apply(this, arguments);
    };
    function handleEvent(type, getId, getEvent) {
      const handler = /* @__PURE__ */ __name(({ detail }) => {
        const id2 = getId(detail);
        if (!id2) return;
        const node2 = app.graph.getNodeById(id2);
        if (node2) return;
        const innerNodeIndex = this.innerNodes?.findIndex((n) => n.id == id2);
        if (innerNodeIndex > -1) {
          this.node.runningInternalNodeId = innerNodeIndex;
          api.dispatchCustomEvent(
            type,
            // @ts-expect-error fixme ts strict error
            getEvent(detail, `${this.node.id}`, this.node)
          );
        }
      }, "handler");
      api.addEventListener(type, handler);
      return handler;
    }
    __name(handleEvent, "handleEvent");
    const executing = handleEvent.call(
      this,
      "executing",
      // @ts-expect-error fixme ts strict error
      (d) => d,
      // @ts-expect-error fixme ts strict error
      (_2, id2) => id2
    );
    const executed = handleEvent.call(
      this,
      "executed",
      // @ts-expect-error fixme ts strict error
      (d) => d?.display_node || d?.node,
      // @ts-expect-error fixme ts strict error
      (d, id2, node2) => ({
        ...d,
        node: id2,
        display_node: id2,
        merge: !node2.resetExecution
      })
    );
    const onRemoved = node.onRemoved;
    this.node.onRemoved = function() {
      onRemoved?.apply(this, arguments);
      api.removeEventListener("executing", executing);
      api.removeEventListener("executed", executed);
    };
    this.node.refreshComboInNode = (defs) => {
      for (const widgetName in this.groupData.newToOldWidgetMap) {
        const widget = this.node.widgets.find((w) => w.name === widgetName);
        if (widget?.type === "combo") {
          const old = this.groupData.newToOldWidgetMap[widgetName];
          const def = defs[old.node.type];
          const input = def?.input?.required?.[old.inputName] ?? def?.input?.optional?.[old.inputName];
          if (!input) continue;
          widget.options.values = input[0];
          if (old.inputName !== "image" && // @ts-expect-error Widget values
          !widget.options.values.includes(widget.value)) {
            widget.value = widget.options.values[0];
            widget.callback(widget.value);
          }
        }
      }
    };
  }
  updateInnerWidgets() {
    for (const newWidgetName in this.groupData.newToOldWidgetMap) {
      const newWidget = this.node.widgets.find((w) => w.name === newWidgetName);
      if (!newWidget) continue;
      const newValue = newWidget.value;
      const old = this.groupData.newToOldWidgetMap[newWidgetName];
      let innerNode = this.innerNodes[old.node.index];
      if (innerNode.type === "PrimitiveNode") {
        innerNode.primitiveValue = newValue;
        const primitiveLinked = this.groupData.primitiveToWidget[old.node.index];
        for (const linked of primitiveLinked ?? []) {
          const node = this.innerNodes[linked.nodeId];
          const widget2 = node.widgets.find((w) => w.name === linked.inputName);
          if (widget2) {
            widget2.value = newValue;
          }
        }
        continue;
      } else if (innerNode.type === "Reroute") {
        const rerouteLinks = this.groupData.linksFrom[old.node.index];
        if (rerouteLinks) {
          for (const [_2, , targetNodeId, targetSlot] of rerouteLinks["0"]) {
            const node = this.innerNodes[targetNodeId];
            const input = node.inputs[targetSlot];
            if (input.widget) {
              const widget2 = node.widgets?.find(
                // @ts-expect-error fixme ts strict error
                (w) => w.name === input.widget.name
              );
              if (widget2) {
                widget2.value = newValue;
              }
            }
          }
        }
      }
      const widget = innerNode.widgets?.find((w) => w.name === old.inputName);
      if (widget) {
        widget.value = newValue;
      }
    }
  }
  // @ts-expect-error fixme ts strict error
  populatePrimitive(_node, nodeId, oldName) {
    const primitiveId = this.groupData.widgetToPrimitive[nodeId]?.[oldName];
    if (primitiveId == null) return;
    const targetWidgetName = this.groupData.oldToNewWidgetMap[primitiveId]["value"];
    const targetWidgetIndex = this.node.widgets.findIndex(
      (w) => w.name === targetWidgetName
    );
    if (targetWidgetIndex > -1) {
      const primitiveNode = this.innerNodes[primitiveId];
      let len = primitiveNode.widgets.length;
      if (len - 1 !== // @ts-expect-error fixme ts strict error
      this.node.widgets[targetWidgetIndex].linkedWidgets?.length) {
        len = 1;
      }
      for (let i = 0; i < len; i++) {
        this.node.widgets[targetWidgetIndex + i].value = primitiveNode.widgets[i].value;
      }
    }
    return true;
  }
  // @ts-expect-error fixme ts strict error
  populateReroute(node, nodeId, map) {
    if (node.type !== "Reroute") return;
    const link = this.groupData.linksFrom[nodeId]?.[0]?.[0];
    if (!link) return;
    const [, , targetNodeId, targetNodeSlot] = link;
    const targetNode = this.groupData.nodeData.nodes[targetNodeId];
    const inputs = targetNode.inputs;
    const targetWidget = inputs?.[targetNodeSlot]?.widget;
    if (!targetWidget) return;
    const offset = inputs.length - (targetNode.widgets_values?.length ?? 0);
    const v = targetNode.widgets_values?.[targetNodeSlot - offset];
    if (v == null) return;
    const widgetName = Object.values(map)[0];
    const widget = this.node.widgets.find((w) => w.name === widgetName);
    if (widget) {
      widget.value = v;
    }
  }
  populateWidgets() {
    if (!this.node.widgets) return;
    for (let nodeId = 0; nodeId < this.groupData.nodeData.nodes.length; nodeId++) {
      const node = this.groupData.nodeData.nodes[nodeId];
      const map = this.groupData.oldToNewWidgetMap[nodeId] ?? {};
      const widgets = Object.keys(map);
      if (!node.widgets_values?.length) {
        this.populateReroute(node, nodeId, map);
        continue;
      }
      let linkedShift = 0;
      for (let i = 0; i < widgets.length; i++) {
        const oldName = widgets[i];
        const newName = map[oldName];
        const widgetIndex = this.node.widgets.findIndex(
          (w) => w.name === newName
        );
        const mainWidget = this.node.widgets[widgetIndex];
        if (this.populatePrimitive(node, nodeId, oldName) || widgetIndex === -1) {
          const innerWidget = this.innerNodes[nodeId].widgets?.find(
            // @ts-expect-error fixme ts strict error
            (w) => w.name === oldName
          );
          linkedShift += innerWidget?.linkedWidgets?.length ?? 0;
        }
        if (widgetIndex === -1) {
          continue;
        }
        mainWidget.value = node.widgets_values[i + linkedShift];
        for (let w = 0; w < mainWidget.linkedWidgets?.length; w++) {
          this.node.widgets[widgetIndex + w + 1].value = node.widgets_values[i + ++linkedShift];
        }
      }
    }
  }
  // @ts-expect-error fixme ts strict error
  replaceNodes(nodes) {
    let top;
    let left;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      if (left == null || node.pos[0] < left) {
        left = node.pos[0];
      }
      if (top == null || node.pos[1] < top) {
        top = node.pos[1];
      }
      this.linkOutputs(node, i);
      app.graph.remove(node);
      node.id = `${this.node.id}:${i}`;
    }
    this.linkInputs();
    this.node.pos = [left, top];
  }
  // @ts-expect-error fixme ts strict error
  linkOutputs(originalNode, nodeId) {
    if (!originalNode.outputs) return;
    for (const output of originalNode.outputs) {
      if (!output.links) continue;
      const links = [...output.links];
      for (const l of links) {
        const link = app.graph.links[l];
        if (!link) continue;
        const targetNode = app.graph.getNodeById(link.target_id);
        const newSlot = this.groupData.oldToNewOutputMap[nodeId]?.[link.origin_slot];
        if (newSlot != null) {
          this.node.connect(newSlot, targetNode, link.target_slot);
        }
      }
    }
  }
  linkInputs() {
    for (const link of this.groupData.nodeData.links ?? []) {
      const [, originSlot, targetId, targetSlot, actualOriginId] = link;
      const originNode = app.graph.getNodeById(actualOriginId);
      if (!originNode) continue;
      originNode.connect(
        originSlot,
        // @ts-expect-error Valid - uses deprecated interface.  Required check: if (graph.getNodeById(this.node.id) !== this.node) report()
        this.node.id,
        this.groupData.oldToNewInputMap[targetId][targetSlot]
      );
    }
  }
  // @ts-expect-error fixme ts strict error
  static getGroupData(node) {
    return (node.nodeData ?? node.constructor?.nodeData)?.[GROUP];
  }
  static isGroupNode(node) {
    return !!node.constructor?.nodeData?.[GROUP];
  }
  static async fromNodes(nodes) {
    const builder = new GroupNodeBuilder(nodes);
    const res = await builder.build();
    if (!res) return;
    const { name, nodeData } = res;
    const config = new GroupNodeConfig(name, nodeData);
    await config.registerType();
    const groupNode2 = LiteGraph.createNode(`${PREFIX}${SEPARATOR}${name}`);
    groupNode2.setInnerNodes(builder.nodes);
    groupNode2[GROUP].populateWidgets();
    app.graph.add(groupNode2);
    groupNode2[GROUP].replaceNodes(builder.nodes);
    return groupNode2;
  }
}
const replaceLegacySeparators = /* @__PURE__ */ __name((nodes) => {
  for (const node of nodes) {
    if (typeof node.type === "string" && node.type.startsWith("workflow/")) {
      node.type = node.type.replace(/^workflow\//, `${PREFIX}${SEPARATOR}`);
    }
  }
}, "replaceLegacySeparators");
async function convertSelectedNodesToGroupNode() {
  const nodes = Object.values(app.canvas.selected_nodes ?? {});
  if (nodes.length === 0) {
    throw new Error("No nodes selected");
  }
  if (nodes.length === 1) {
    throw new Error("Please select multiple nodes to convert to group node");
  }
  for (const node of nodes) {
    if (node instanceof SubgraphNode) {
      throw new Error("Selected nodes contain a subgraph node");
    }
    if (GroupNodeHandler.isGroupNode(node)) {
      throw new Error("Selected nodes contain a group node");
    }
  }
  return await GroupNodeHandler.fromNodes(nodes);
}
__name(convertSelectedNodesToGroupNode, "convertSelectedNodesToGroupNode");
function ungroupSelectedGroupNodes() {
  const nodes = Object.values(app.canvas.selected_nodes ?? {});
  for (const node of nodes) {
    if (GroupNodeHandler.isGroupNode(node)) {
      node.convertToNodes?.();
    }
  }
}
__name(ungroupSelectedGroupNodes, "ungroupSelectedGroupNodes");
function manageGroupNodes(type) {
  new ManageGroupDialog(app).show(type);
}
__name(manageGroupNodes, "manageGroupNodes");
const id = "Comfy.GroupNode";
let globalDefs;
const ext = {
  name: id,
  commands: [
    {
      id: "Comfy.GroupNode.ConvertSelectedNodesToGroupNode",
      label: "Convert selected nodes to group node",
      icon: "pi pi-sitemap",
      versionAdded: "1.3.17",
      function: convertSelectedNodesToGroupNode
    },
    {
      id: "Comfy.GroupNode.UngroupSelectedGroupNodes",
      label: "Ungroup selected group nodes",
      icon: "pi pi-sitemap",
      versionAdded: "1.3.17",
      function: ungroupSelectedGroupNodes
    },
    {
      id: "Comfy.GroupNode.ManageGroupNodes",
      label: "Manage group nodes",
      icon: "pi pi-cog",
      versionAdded: "1.3.17",
      function: manageGroupNodes
    }
  ],
  keybindings: [
    {
      commandId: "Comfy.GroupNode.ConvertSelectedNodesToGroupNode",
      combo: {
        alt: true,
        key: "g"
      }
    },
    {
      commandId: "Comfy.GroupNode.UngroupSelectedGroupNodes",
      combo: {
        alt: true,
        shift: true,
        key: "G"
      }
    }
  ],
  async beforeConfigureGraph(graphData, missingNodeTypes) {
    const nodes = graphData?.extra?.groupNodes;
    if (nodes) {
      replaceLegacySeparators(graphData.nodes);
      await GroupNodeConfig.registerFromWorkflow(nodes, missingNodeTypes);
    }
  },
  addCustomNodeDefs(defs) {
    globalDefs = defs;
  },
  nodeCreated(node) {
    if (GroupNodeHandler.isGroupNode(node)) {
      node[GROUP] = new GroupNodeHandler(node);
      if (node.title && node[GROUP]?.groupData?.nodeData) {
        Workflow.storeGroupNode(node.title, node[GROUP].groupData.nodeData);
      }
    }
  },
  // @ts-expect-error fixme ts strict error
  async refreshComboInNodes(defs) {
    Object.assign(globalDefs, defs);
    const nodes = app.graph.extra?.groupNodes;
    if (nodes) {
      await GroupNodeConfig.registerFromWorkflow(nodes, {});
    }
  }
};
app.registerExtension(ext);
window.comfyAPI = window.comfyAPI || {};
window.comfyAPI.groupNode = window.comfyAPI.groupNode || {};
window.comfyAPI.groupNode.GroupNodeConfig = GroupNodeConfig;
window.comfyAPI.groupNode.GroupNodeHandler = GroupNodeHandler;
const groupNode = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GroupNodeConfig,
  GroupNodeHandler
}, Symbol.toStringTag, { value: "Module" }));
export {
  GroupNodeHandler as G,
  GroupNodeConfig as a,
  groupNode as b,
  getWidgetConfig as g,
  mergeIfValid as m,
  setWidgetConfig as s
};
//# sourceMappingURL=groupNode-D2epbLIR.js.map
