var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
var __defProp2 = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value, "__defNormalProp");
var __spreadValues = /* @__PURE__ */ __name((a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
}, "__spreadValues");
function isEmpty(value) {
  return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !(value instanceof Date) && typeof value === "object" && Object.keys(value).length === 0;
}
__name(isEmpty, "isEmpty");
function compare(value1, value2, comparator, order = 1) {
  let result = -1;
  const emptyValue1 = isEmpty(value1);
  const emptyValue2 = isEmpty(value2);
  if (emptyValue1 && emptyValue2) result = 0;
  else if (emptyValue1) result = order;
  else if (emptyValue2) result = -order;
  else if (typeof value1 === "string" && typeof value2 === "string") result = comparator(value1, value2);
  else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
  return result;
}
__name(compare, "compare");
function _deepEquals(obj1, obj2, visited = /* @__PURE__ */ new WeakSet()) {
  if (obj1 === obj2) return true;
  if (!obj1 || !obj2 || typeof obj1 !== "object" || typeof obj2 !== "object") return false;
  if (visited.has(obj1) || visited.has(obj2)) return false;
  visited.add(obj1).add(obj2);
  let arrObj1 = Array.isArray(obj1), arrObj2 = Array.isArray(obj2), i, length, key;
  if (arrObj1 && arrObj2) {
    length = obj1.length;
    if (length != obj2.length) return false;
    for (i = length; i-- !== 0; ) if (!_deepEquals(obj1[i], obj2[i], visited)) return false;
    return true;
  }
  if (arrObj1 != arrObj2) return false;
  let dateObj1 = obj1 instanceof Date, dateObj2 = obj2 instanceof Date;
  if (dateObj1 != dateObj2) return false;
  if (dateObj1 && dateObj2) return obj1.getTime() == obj2.getTime();
  let regexpObj1 = obj1 instanceof RegExp, regexpObj2 = obj2 instanceof RegExp;
  if (regexpObj1 != regexpObj2) return false;
  if (regexpObj1 && regexpObj2) return obj1.toString() == obj2.toString();
  let keys = Object.keys(obj1);
  length = keys.length;
  if (length !== Object.keys(obj2).length) return false;
  for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;
  for (i = length; i-- !== 0; ) {
    key = keys[i];
    if (!_deepEquals(obj1[key], obj2[key], visited)) return false;
  }
  return true;
}
__name(_deepEquals, "_deepEquals");
function deepEquals(obj1, obj2) {
  return _deepEquals(obj1, obj2);
}
__name(deepEquals, "deepEquals");
function isFunction(value) {
  return !!(value && value.constructor && value.call && value.apply);
}
__name(isFunction, "isFunction");
function isNotEmpty(value) {
  return !isEmpty(value);
}
__name(isNotEmpty, "isNotEmpty");
function resolveFieldData(data, field) {
  if (!data || !field) {
    return null;
  }
  try {
    const value = data[field];
    if (isNotEmpty(value)) return value;
  } catch (e) {
  }
  if (Object.keys(data).length) {
    if (isFunction(field)) {
      return field(data);
    } else if (field.indexOf(".") === -1) {
      return data[field];
    } else {
      let fields = field.split(".");
      let value = data;
      for (let i = 0, len = fields.length; i < len; ++i) {
        if (value == null) {
          return null;
        }
        value = value[fields[i]];
      }
      return value;
    }
  }
  return null;
}
__name(resolveFieldData, "resolveFieldData");
function equals(obj1, obj2, field) {
  if (field) return resolveFieldData(obj1, field) === resolveFieldData(obj2, field);
  else return deepEquals(obj1, obj2);
}
__name(equals, "equals");
function contains(value, list) {
  if (value != null && list && list.length) {
    for (let val of list) {
      if (equals(value, val)) return true;
    }
  }
  return false;
}
__name(contains, "contains");
function filter(value, fields, filterValue) {
  let filteredItems = [];
  if (value) {
    for (let item of value) {
      for (let field of fields) {
        if (String(resolveFieldData(item, field)).toLowerCase().indexOf(filterValue.toLowerCase()) > -1) {
          filteredItems.push(item);
          break;
        }
      }
    }
  }
  return filteredItems;
}
__name(filter, "filter");
function findIndexInList(value, list) {
  let index = -1;
  if (list) {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === value) {
        index = i;
        break;
      }
    }
  }
  return index;
}
__name(findIndexInList, "findIndexInList");
function findLast(arr, callback) {
  let item;
  if (isNotEmpty(arr)) {
    try {
      item = arr.findLast(callback);
    } catch (e) {
      item = [...arr].reverse().find(callback);
    }
  }
  return item;
}
__name(findLast, "findLast");
function findLastIndex(arr, callback) {
  let index = -1;
  if (isNotEmpty(arr)) {
    try {
      index = arr.findLastIndex(callback);
    } catch (e) {
      index = arr.lastIndexOf([...arr].reverse().find(callback));
    }
  }
  return index;
}
__name(findLastIndex, "findLastIndex");
function isObject(value, empty = true) {
  return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
}
__name(isObject, "isObject");
function resolve(obj, ...params) {
  return isFunction(obj) ? obj(...params) : obj;
}
__name(resolve, "resolve");
function isString(value, empty = true) {
  return typeof value === "string" && (empty || value !== "");
}
__name(isString, "isString");
function toFlatCase(str) {
  return isString(str) ? str.replace(/(-|_)/g, "").toLowerCase() : str;
}
__name(toFlatCase, "toFlatCase");
function getKeyValue(obj, key = "", params = {}) {
  const fKeys = toFlatCase(key).split(".");
  const fKey = fKeys.shift();
  return fKey ? isObject(obj) ? getKeyValue(resolve(obj[Object.keys(obj).find((k) => toFlatCase(k) === fKey) || ""], params), fKeys.join("."), params) : void 0 : resolve(obj, params);
}
__name(getKeyValue, "getKeyValue");
function insertIntoOrderedArray(item, index, arr, sourceArr) {
  if (arr.length > 0) {
    let injected = false;
    for (let i = 0; i < arr.length; i++) {
      let currentItemIndex = findIndexInList(arr[i], sourceArr);
      if (currentItemIndex > index) {
        arr.splice(i, 0, item);
        injected = true;
        break;
      }
    }
    if (!injected) {
      arr.push(item);
    }
  } else {
    arr.push(item);
  }
}
__name(insertIntoOrderedArray, "insertIntoOrderedArray");
function isArray(value, empty = true) {
  return Array.isArray(value) && (empty || value.length !== 0);
}
__name(isArray, "isArray");
function isDate(value) {
  return value instanceof Date && value.constructor === Date;
}
__name(isDate, "isDate");
function isLetter(char) {
  return /^[a-zA-Z\u00C0-\u017F]$/.test(char);
}
__name(isLetter, "isLetter");
function isNumber(value) {
  return isNotEmpty(value) && !isNaN(value);
}
__name(isNumber, "isNumber");
function isPrintableCharacter(char = "") {
  return isNotEmpty(char) && char.length === 1 && !!char.match(/\S| /);
}
__name(isPrintableCharacter, "isPrintableCharacter");
function isScalar(value) {
  return value != null && (typeof value === "string" || typeof value === "number" || typeof value === "bigint" || typeof value === "boolean");
}
__name(isScalar, "isScalar");
function localeComparator() {
  return new Intl.Collator(void 0, { numeric: true }).compare;
}
__name(localeComparator, "localeComparator");
function matchRegex(str, regex) {
  if (regex) {
    const match = regex.test(str);
    regex.lastIndex = 0;
    return match;
  }
  return false;
}
__name(matchRegex, "matchRegex");
function mergeKeys(...args) {
  const _mergeKeys = /* @__PURE__ */ __name((target = {}, source = {}) => {
    const mergedObj = __spreadValues({}, target);
    Object.keys(source).forEach((key) => {
      if (isObject(source[key]) && key in target && isObject(target[key])) {
        mergedObj[key] = _mergeKeys(target[key], source[key]);
      } else {
        mergedObj[key] = source[key];
      }
    });
    return mergedObj;
  }, "_mergeKeys");
  return args.reduce((acc, obj, i) => i === 0 ? obj : _mergeKeys(acc, obj), {});
}
__name(mergeKeys, "mergeKeys");
function minifyCSS(css) {
  return css ? css.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, "").replace(/ {2,}/g, " ").replace(/ ([{:}]) /g, "$1").replace(/([;,]) /g, "$1").replace(/ !/g, "!").replace(/: /g, ":") : css;
}
__name(minifyCSS, "minifyCSS");
function nestedKeys(obj = {}, parentKey = "") {
  return Object.entries(obj).reduce((o, [key, value]) => {
    const currentKey = parentKey ? `${parentKey}.${key}` : key;
    isObject(value) ? o = o.concat(nestedKeys(value, currentKey)) : o.push(currentKey);
    return o;
  }, []);
}
__name(nestedKeys, "nestedKeys");
function omit(obj, ...keys) {
  if (!isObject(obj)) return obj;
  const copy = __spreadValues({}, obj);
  keys == null ? void 0 : keys.flat().forEach((key) => delete copy[key]);
  return copy;
}
__name(omit, "omit");
function removeAccents(str) {
  const accentCheckRegex = /[\xC0-\xFF\u0100-\u017E]/;
  if (str && accentCheckRegex.test(str)) {
    const accentsMap = {
      A: /[\xC0-\xC5\u0100\u0102\u0104]/g,
      AE: /[\xC6]/g,
      C: /[\xC7\u0106\u0108\u010A\u010C]/g,
      D: /[\xD0\u010E\u0110]/g,
      E: /[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,
      G: /[\u011C\u011E\u0120\u0122]/g,
      H: /[\u0124\u0126]/g,
      I: /[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,
      IJ: /[\u0132]/g,
      J: /[\u0134]/g,
      K: /[\u0136]/g,
      L: /[\u0139\u013B\u013D\u013F\u0141]/g,
      N: /[\xD1\u0143\u0145\u0147\u014A]/g,
      O: /[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,
      OE: /[\u0152]/g,
      R: /[\u0154\u0156\u0158]/g,
      S: /[\u015A\u015C\u015E\u0160]/g,
      T: /[\u0162\u0164\u0166]/g,
      U: /[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,
      W: /[\u0174]/g,
      Y: /[\xDD\u0176\u0178]/g,
      Z: /[\u0179\u017B\u017D]/g,
      a: /[\xE0-\xE5\u0101\u0103\u0105]/g,
      ae: /[\xE6]/g,
      c: /[\xE7\u0107\u0109\u010B\u010D]/g,
      d: /[\u010F\u0111]/g,
      e: /[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,
      g: /[\u011D\u011F\u0121\u0123]/g,
      i: /[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,
      ij: /[\u0133]/g,
      j: /[\u0135]/g,
      k: /[\u0137,\u0138]/g,
      l: /[\u013A\u013C\u013E\u0140\u0142]/g,
      n: /[\xF1\u0144\u0146\u0148\u014B]/g,
      p: /[\xFE]/g,
      o: /[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,
      oe: /[\u0153]/g,
      r: /[\u0155\u0157\u0159]/g,
      s: /[\u015B\u015D\u015F\u0161]/g,
      t: /[\u0163\u0165\u0167]/g,
      u: /[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,
      w: /[\u0175]/g,
      y: /[\xFD\xFF\u0177]/g,
      z: /[\u017A\u017C\u017E]/g
    };
    for (let key in accentsMap) {
      str = str.replace(accentsMap[key], key);
    }
  }
  return str;
}
__name(removeAccents, "removeAccents");
function reorderArray(value, from, to) {
  if (value && from !== to) {
    if (to >= value.length) {
      to %= value.length;
      from %= value.length;
    }
    value.splice(to, 0, value.splice(from, 1)[0]);
  }
}
__name(reorderArray, "reorderArray");
function sort(value1, value2, order = 1, comparator, nullSortOrder = 1) {
  const result = compare(value1, value2, comparator, order);
  let finalSortOrder = order;
  if (isEmpty(value1) || isEmpty(value2)) {
    finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
  }
  return finalSortOrder * result;
}
__name(sort, "sort");
function stringify(value, indent = 2, currentIndent = 0) {
  const currentIndentStr = " ".repeat(currentIndent);
  const nextIndentStr = " ".repeat(currentIndent + indent);
  if (isArray(value)) {
    return "[" + value.map((v) => stringify(v, indent, currentIndent + indent)).join(", ") + "]";
  } else if (isDate(value)) {
    return value.toISOString();
  } else if (isFunction(value)) {
    return value.toString();
  } else if (isObject(value)) {
    return "{\n" + Object.entries(value).map(([k, v]) => `${nextIndentStr}${k}: ${stringify(v, indent, currentIndent + indent)}`).join(",\n") + `
${currentIndentStr}}`;
  } else {
    return JSON.stringify(value);
  }
}
__name(stringify, "stringify");
function toCapitalCase(str) {
  return isString(str, false) ? str[0].toUpperCase() + str.slice(1) : str;
}
__name(toCapitalCase, "toCapitalCase");
function toKebabCase(str) {
  return isString(str) ? str.replace(/(_)/g, "-").replace(/[A-Z]/g, (c, i) => i === 0 ? c : "-" + c.toLowerCase()).toLowerCase() : str;
}
__name(toKebabCase, "toKebabCase");
function toTokenKey(str) {
  return isString(str) ? str.replace(/[A-Z]/g, (c, i) => i === 0 ? c : "." + c.toLowerCase()).toLowerCase() : str;
}
__name(toTokenKey, "toTokenKey");
function toValue(value) {
  if (value && typeof value === "object") {
    if (value.hasOwnProperty("current")) {
      return value.current;
    } else if (value.hasOwnProperty("value")) {
      return value.value;
    }
  }
  return resolve(value);
}
__name(toValue, "toValue");
var FilterMatchMode = {
  STARTS_WITH: "startsWith",
  CONTAINS: "contains",
  NOT_CONTAINS: "notContains",
  ENDS_WITH: "endsWith",
  EQUALS: "equals",
  NOT_EQUALS: "notEquals",
  IN: "in",
  LESS_THAN: "lt",
  LESS_THAN_OR_EQUAL_TO: "lte",
  GREATER_THAN: "gt",
  GREATER_THAN_OR_EQUAL_TO: "gte",
  BETWEEN: "between",
  DATE_IS: "dateIs",
  DATE_IS_NOT: "dateIsNot",
  DATE_BEFORE: "dateBefore",
  DATE_AFTER: "dateAfter"
};
var FilterOperator = {
  AND: "and",
  OR: "or"
};
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var _n = 0, F = /* @__PURE__ */ __name(function F2() {
      }, "F");
      return { s: F, n: /* @__PURE__ */ __name(function n() {
        return _n >= r.length ? { done: true } : { done: false, value: r[_n++] };
      }, "n"), e: /* @__PURE__ */ __name(function e2(r2) {
        throw r2;
      }, "e"), f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: /* @__PURE__ */ __name(function s() {
    t = t.call(r);
  }, "s"), n: /* @__PURE__ */ __name(function n() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, "n"), e: /* @__PURE__ */ __name(function e2(r2) {
    u = true, o = r2;
  }, "e"), f: /* @__PURE__ */ __name(function f() {
    try {
      a || null == t["return"] || t["return"]();
    } finally {
      if (u) throw o;
    }
  }, "f") };
}
__name(_createForOfIteratorHelper, "_createForOfIteratorHelper");
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
__name(_unsupportedIterableToArray, "_unsupportedIterableToArray");
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
__name(_arrayLikeToArray, "_arrayLikeToArray");
var FilterService = {
  filter: /* @__PURE__ */ __name(function filter2(value, fields, filterValue, filterMatchMode, filterLocale) {
    var filteredItems = [];
    if (!value) {
      return filteredItems;
    }
    var _iterator = _createForOfIteratorHelper(value), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        var item = _step.value;
        if (typeof item === "string") {
          if (this.filters[filterMatchMode](item, filterValue, filterLocale)) {
            filteredItems.push(item);
            continue;
          }
        } else {
          var _iterator2 = _createForOfIteratorHelper(fields), _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
              var field = _step2.value;
              var fieldValue = resolveFieldData(item, field);
              if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
                filteredItems.push(item);
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    return filteredItems;
  }, "filter"),
  filters: {
    startsWith: /* @__PURE__ */ __name(function startsWith(value, filter3, filterLocale) {
      if (filter3 === void 0 || filter3 === null || filter3 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter3.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    }, "startsWith"),
    contains: /* @__PURE__ */ __name(function contains2(value, filter3, filterLocale) {
      if (filter3 === void 0 || filter3 === null || filter3 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter3.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    }, "contains"),
    notContains: /* @__PURE__ */ __name(function notContains(value, filter3, filterLocale) {
      if (filter3 === void 0 || filter3 === null || filter3 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter3.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    }, "notContains"),
    endsWith: /* @__PURE__ */ __name(function endsWith(value, filter3, filterLocale) {
      if (filter3 === void 0 || filter3 === null || filter3 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      var filterValue = removeAccents(filter3.toString()).toLocaleLowerCase(filterLocale);
      var stringValue = removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    }, "endsWith"),
    equals: /* @__PURE__ */ __name(function equals2(value, filter3, filterLocale) {
      if (filter3 === void 0 || filter3 === null || filter3 === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter3.getTime) return value.getTime() === filter3.getTime();
      else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == removeAccents(filter3.toString()).toLocaleLowerCase(filterLocale);
    }, "equals"),
    notEquals: /* @__PURE__ */ __name(function notEquals(value, filter3, filterLocale) {
      if (filter3 === void 0 || filter3 === null || filter3 === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter3.getTime) return value.getTime() !== filter3.getTime();
      else return removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != removeAccents(filter3.toString()).toLocaleLowerCase(filterLocale);
    }, "notEquals"),
    "in": /* @__PURE__ */ __name(function _in(value, filter3) {
      if (filter3 === void 0 || filter3 === null || filter3.length === 0) {
        return true;
      }
      for (var i = 0; i < filter3.length; i++) {
        if (equals(value, filter3[i])) {
          return true;
        }
      }
      return false;
    }, "_in"),
    between: /* @__PURE__ */ __name(function between(value, filter3) {
      if (filter3 == null || filter3[0] == null || filter3[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) return filter3[0].getTime() <= value.getTime() && value.getTime() <= filter3[1].getTime();
      else return filter3[0] <= value && value <= filter3[1];
    }, "between"),
    lt: /* @__PURE__ */ __name(function lt(value, filter3) {
      if (filter3 === void 0 || filter3 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter3.getTime) return value.getTime() < filter3.getTime();
      else return value < filter3;
    }, "lt"),
    lte: /* @__PURE__ */ __name(function lte(value, filter3) {
      if (filter3 === void 0 || filter3 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter3.getTime) return value.getTime() <= filter3.getTime();
      else return value <= filter3;
    }, "lte"),
    gt: /* @__PURE__ */ __name(function gt(value, filter3) {
      if (filter3 === void 0 || filter3 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter3.getTime) return value.getTime() > filter3.getTime();
      else return value > filter3;
    }, "gt"),
    gte: /* @__PURE__ */ __name(function gte(value, filter3) {
      if (filter3 === void 0 || filter3 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter3.getTime) return value.getTime() >= filter3.getTime();
      else return value >= filter3;
    }, "gte"),
    dateIs: /* @__PURE__ */ __name(function dateIs(value, filter3) {
      if (filter3 === void 0 || filter3 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter3.toDateString();
    }, "dateIs"),
    dateIsNot: /* @__PURE__ */ __name(function dateIsNot(value, filter3) {
      if (filter3 === void 0 || filter3 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter3.toDateString();
    }, "dateIsNot"),
    dateBefore: /* @__PURE__ */ __name(function dateBefore(value, filter3) {
      if (filter3 === void 0 || filter3 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter3.getTime();
    }, "dateBefore"),
    dateAfter: /* @__PURE__ */ __name(function dateAfter(value, filter3) {
      if (filter3 === void 0 || filter3 === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() > filter3.getTime();
    }, "dateAfter")
  },
  register: /* @__PURE__ */ __name(function register(rule, fn) {
    this.filters[rule] = fn;
  }, "register")
};
var PrimeIcons = {
  ALIGN_CENTER: "pi pi-align-center",
  ALIGN_JUSTIFY: "pi pi-align-justify",
  ALIGN_LEFT: "pi pi-align-left",
  ALIGN_RIGHT: "pi pi-align-right",
  AMAZON: "pi pi-amazon",
  ANDROID: "pi pi-android",
  ANGLE_DOUBLE_DOWN: "pi pi-angle-double-down",
  ANGLE_DOUBLE_LEFT: "pi pi-angle-double-left",
  ANGLE_DOUBLE_RIGHT: "pi pi-angle-double-right",
  ANGLE_DOUBLE_UP: "pi pi-angle-double-up",
  ANGLE_DOWN: "pi pi-angle-down",
  ANGLE_LEFT: "pi pi-angle-left",
  ANGLE_RIGHT: "pi pi-angle-right",
  ANGLE_UP: "pi pi-angle-up",
  APPLE: "pi pi-apple",
  ARROW_CIRCLE_DOWN: "pi pi-arrow-circle-down",
  ARROW_CIRCLE_LEFT: "pi pi-arrow-circle-left",
  ARROW_CIRCLE_RIGHT: "pi pi-arrow-circle-right",
  ARROW_CIRCLE_UP: "pi pi-arrow-circle-up",
  ARROW_DOWN: "pi pi-arrow-down",
  ARROW_DOWN_LEFT: "pi pi-arrow-down-left",
  ARROW_DOWN_RIGHT: "pi pi-arrow-down-right",
  ARROW_LEFT: "pi pi-arrow-left",
  ARROW_RIGHT: "pi pi-arrow-right",
  ARROW_RIGHT_ARROW_LEFT: "pi pi-arrow-right-arrow-left",
  ARROW_UP: "pi pi-arrow-up",
  ARROW_UP_LEFT: "pi pi-arrow-up-left",
  ARROW_UP_RIGHT: "pi pi-arrow-up-right",
  ARROWS_H: "pi pi-arrows-h",
  ARROWS_V: "pi pi-arrows-v",
  ARROWS_ALT: "pi pi-arrows-alt",
  AT: "pi pi-at",
  BACKWARD: "pi pi-backward",
  BAN: "pi pi-ban",
  BARS: "pi pi-bars",
  BELL: "pi pi-bell",
  BITCOIN: "pi pi-bitcoin",
  BOLT: "pi pi-bolt",
  BOOK: "pi pi-book",
  BOOKMARK: "pi pi-bookmark",
  BOOKMARK_FILL: "pi pi-bookmark-fill",
  BOX: "pi pi-box",
  BRIEFCASE: "pi pi-briefcase",
  BUILDING: "pi pi-building",
  CALENDAR: "pi pi-calendar",
  CALENDAR_MINUS: "pi pi-calendar-minus",
  CALENDAR_PLUS: "pi pi-calendar-plus",
  CALENDAR_TIMES: "pi pi-calendar-times",
  CALCULATOR: "pi pi-calculator",
  CAMERA: "pi pi-camera",
  CAR: "pi pi-car",
  CARET_DOWN: "pi pi-caret-down",
  CARET_LEFT: "pi pi-caret-left",
  CARET_RIGHT: "pi pi-caret-right",
  CARET_UP: "pi pi-caret-up",
  CART_PLUS: "pi pi-cart-plus",
  CHART_BAR: "pi pi-chart-bar",
  CHART_LINE: "pi pi-chart-line",
  CHART_PIE: "pi pi-chart-pie",
  CHECK: "pi pi-check",
  CHECK_CIRCLE: "pi pi-check-circle",
  CHECK_SQUARE: "pi pi-check-square",
  CHEVRON_CIRCLE_DOWN: "pi pi-chevron-circle-down",
  CHEVRON_CIRCLE_LEFT: "pi pi-chevron-circle-left",
  CHEVRON_CIRCLE_RIGHT: "pi pi-chevron-circle-right",
  CHEVRON_CIRCLE_UP: "pi pi-chevron-circle-up",
  CHEVRON_DOWN: "pi pi-chevron-down",
  CHEVRON_LEFT: "pi pi-chevron-left",
  CHEVRON_RIGHT: "pi pi-chevron-right",
  CHEVRON_UP: "pi pi-chevron-up",
  CIRCLE: "pi pi-circle",
  CIRCLE_FILL: "pi pi-circle-fill",
  CLOCK: "pi pi-clock",
  CLONE: "pi pi-clone",
  CLOUD: "pi pi-cloud",
  CLOUD_DOWNLOAD: "pi pi-cloud-download",
  CLOUD_UPLOAD: "pi pi-cloud-upload",
  CODE: "pi pi-code",
  COG: "pi pi-cog",
  COMMENT: "pi pi-comment",
  COMMENTS: "pi pi-comments",
  COMPASS: "pi pi-compass",
  COPY: "pi pi-copy",
  CREDIT_CARD: "pi pi-credit-card",
  DATABASE: "pi pi-database",
  DELETELEFT: "pi pi-delete-left",
  DESKTOP: "pi pi-desktop",
  DIRECTIONS: "pi pi-directions",
  DIRECTIONS_ALT: "pi pi-directions-alt",
  DISCORD: "pi pi-discord",
  DOLLAR: "pi pi-dollar",
  DOWNLOAD: "pi pi-download",
  EJECT: "pi pi-eject",
  ELLIPSIS_H: "pi pi-ellipsis-h",
  ELLIPSIS_V: "pi pi-ellipsis-v",
  ENVELOPE: "pi pi-envelope",
  ERASER: "pi pi-eraser",
  EURO: "pi pi-euro",
  EXCLAMATION_CIRCLE: "pi pi-exclamation-circle",
  EXCLAMATION_TRIANGLE: "pi pi-exclamation-triangle",
  EXTERNAL_LINK: "pi pi-external-link",
  EYE: "pi pi-eye",
  EYE_SLASH: "pi pi-eye-slash",
  FACEBOOK: "pi pi-facebook",
  FAST_BACKWARD: "pi pi-fast-backward",
  FAST_FORWARD: "pi pi-fast-forward",
  FILE: "pi pi-file",
  FILE_EDIT: "pi pi-file-edit",
  FILE_EXCEL: "pi pi-file-excel",
  FILE_EXPORT: "pi pi-file-export",
  FILE_IMPORT: "pi pi-file-import",
  FILE_PDF: "pi pi-file-pdf",
  FILE_WORD: "pi pi-file-word",
  FILTER: "pi pi-filter",
  FILTER_FILL: "pi pi-filter-fill",
  FILTER_SLASH: "pi pi-filter-slash",
  FLAG: "pi pi-flag",
  FLAG_FILL: "pi pi-flag-fill",
  FOLDER: "pi pi-folder",
  FOLDER_OPEN: "pi pi-folder-open",
  FORWARD: "pi pi-forward",
  GIFT: "pi pi-gift",
  GITHUB: "pi pi-github",
  GLOBE: "pi pi-globe",
  GOOGLE: "pi pi-google",
  HASHTAG: "pi pi-hashtag",
  HEART: "pi pi-heart",
  HEART_FILL: "pi pi-heart-fill",
  HISTORY: "pi pi-history",
  HOURGLASS: "pi pi-hourglass",
  HOME: "pi pi-home",
  ID_CARD: "pi pi-id-card",
  IMAGE: "pi pi-image",
  IMAGES: "pi pi-images",
  INBOX: "pi pi-inbox",
  INFO: "pi pi-info",
  INFO_CIRCLE: "pi pi-info-circle",
  INSTAGRAM: "pi pi-instagram",
  KEY: "pi pi-key",
  LANGUAGE: "pi pi-language",
  LINK: "pi pi-link",
  LINKEDIN: "pi pi-linkedin",
  LIST: "pi pi-list",
  LOCK: "pi pi-lock",
  LOCK_OPEN: "pi pi-lock-open",
  MAP: "pi pi-map",
  MAP_MARKER: "pi pi-map-marker",
  MEGAPHONE: "pi pi-megaphone",
  MICROPHONE: "pi pi-microphone",
  MICROSOFT: "pi pi-microsoft",
  MINUS: "pi pi-minus",
  MINUS_CIRCLE: "pi pi-minus-circle",
  MOBILE: "pi pi-mobile",
  MONEY_BILL: "pi pi-money-bill",
  MOON: "pi pi-moon",
  PALETTE: "pi pi-palette",
  PAPERCLIP: "pi pi-paperclip",
  PAUSE: "pi pi-pause",
  PAYPAL: "pi pi-paypal",
  PENCIL: "pi pi-pencil",
  PERCENTAGE: "pi pi-percentage",
  PHONE: "pi pi-phone",
  PLAY: "pi pi-play",
  PLUS: "pi pi-plus",
  PLUS_CIRCLE: "pi pi-plus-circle",
  POUND: "pi pi-pound",
  POWER_OFF: "pi pi-power-off",
  PRIME: "pi pi-prime",
  PRINT: "pi pi-print",
  QRCODE: "pi pi-qrcode",
  QUESTION: "pi pi-question",
  QUESTION_CIRCLE: "pi pi-question-circle",
  REDDIT: "pi pi-reddit",
  REFRESH: "pi pi-refresh",
  REPLAY: "pi pi-replay",
  REPLY: "pi pi-reply",
  SAVE: "pi pi-save",
  SEARCH: "pi pi-search",
  SEARCH_MINUS: "pi pi-search-minus",
  SEARCH_PLUS: "pi pi-search-plus",
  SEND: "pi pi-send",
  SERVER: "pi pi-server",
  SHARE_ALT: "pi pi-share-alt",
  SHIELD: "pi pi-shield",
  SHOPPING_BAG: "pi pi-shopping-bag",
  SHOPPING_CART: "pi pi-shopping-cart",
  SIGN_IN: "pi pi-sign-in",
  SIGN_OUT: "pi pi-sign-out",
  SITEMAP: "pi pi-sitemap",
  SLACK: "pi pi-slack",
  SLIDERS_H: "pi pi-sliders-h",
  SLIDERS_V: "pi pi-sliders-v",
  SORT: "pi pi-sort",
  SORT_ALPHA_DOWN: "pi pi-sort-alpha-down",
  SORT_ALPHA_DOWN_ALT: "pi pi-sort-alpha-down-alt",
  SORT_ALPHA_UP: "pi pi-sort-alpha-up",
  SORT_ALPHA_UP_ALT: "pi pi-sort-alpha-up-alt",
  SORT_ALT: "pi pi-sort-alt",
  SORT_ALT_SLASH: "pi pi-sort-alt-slash",
  SORT_AMOUNT_DOWN: "pi pi-sort-amount-down",
  SORT_AMOUNT_DOWN_ALT: "pi pi-sort-amount-down-alt",
  SORT_AMOUNT_UP: "pi pi-sort-amount-up",
  SORT_AMOUNT_UP_ALT: "pi pi-sort-amount-up-alt",
  SORT_DOWN: "pi pi-sort-down",
  SORT_NUMERIC_DOWN: "pi pi-sort-numeric-down",
  SORT_NUMERIC_DOWN_ALT: "pi pi-sort-numeric-down-alt",
  SORT_NUMERIC_UP: "pi pi-sort-numeric-up",
  SORT_NUMERIC_UP_ALT: "pi pi-sort-numeric-up-alt",
  SORT_UP: "pi pi-sort-up",
  SPINNER: "pi pi-spinner",
  STAR: "pi pi-star",
  STAR_FILL: "pi pi-star-fill",
  STEP_BACKWARD: "pi pi-step-backward",
  STEP_BACKWARD_ALT: "pi pi-step-backward-alt",
  STEP_FORWARD: "pi pi-step-forward",
  STEP_FORWARD_ALT: "pi pi-step-forward-alt",
  STOP: "pi pi-stop",
  STOPWATCH: "pi pi-stopwatch",
  STOP_CIRCLE: "pi pi-stop-circle",
  SUN: "pi pi-sun",
  SYNC: "pi pi-sync",
  TABLE: "pi pi-table",
  TABLET: "pi pi-tablet",
  TAG: "pi pi-tag",
  TAGS: "pi pi-tags",
  TELEGRAM: "pi pi-telegram",
  TH_LARGE: "pi pi-th-large",
  THUMBS_DOWN: "pi pi-thumbs-down",
  THUMBS_DOWN_FILL: "pi pi-thumbs-down-fill",
  THUMBS_UP: "pi pi-thumbs-up",
  THUMBS_UP_FILL: "pi pi-thumbs-up-fill",
  TICKET: "pi pi-ticket",
  TIMES: "pi pi-times",
  TIMES_CIRCLE: "pi pi-times-circle",
  TRASH: "pi pi-trash",
  TRUCK: "pi pi-truck",
  TWITTER: "pi pi-twitter",
  UNDO: "pi pi-undo",
  UNLOCK: "pi pi-unlock",
  UPLOAD: "pi pi-upload",
  USER: "pi pi-user",
  USER_EDIT: "pi pi-user-edit",
  USER_MINUS: "pi pi-user-minus",
  USER_PLUS: "pi pi-user-plus",
  USERS: "pi pi-users",
  VERIFIED: "pi pi-verified",
  VIDEO: "pi pi-video",
  VIMEO: "pi pi-vimeo",
  VOLUME_DOWN: "pi pi-volume-down",
  VOLUME_OFF: "pi pi-volume-off",
  VOLUME_UP: "pi pi-volume-up",
  WALLET: "pi pi-wallet",
  WHATSAPP: "pi pi-whatsapp",
  WIFI: "pi pi-wifi",
  WINDOW_MAXIMIZE: "pi pi-window-maximize",
  WINDOW_MINIMIZE: "pi pi-window-minimize",
  WRENCH: "pi pi-wrench",
  YOUTUBE: "pi pi-youtube"
};
var ToastSeverities = {
  INFO: "info",
  WARN: "warn",
  ERROR: "error",
  SUCCESS: "success"
};
export {
  FilterMatchMode as F,
  PrimeIcons as P
};
//# sourceMappingURL=index-C3QelI1n.js.map
