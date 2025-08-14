// src/utils/index.ts
import { isObject } from "@primeuix/utils/object";
var toValues = (value, name) => {
  if (isObject(value) && value.hasOwnProperty(name)) {
    return value;
  }
  return name ? { [name]: value } : value;
};
export {
  toValues
};
//# sourceMappingURL=index.mjs.map