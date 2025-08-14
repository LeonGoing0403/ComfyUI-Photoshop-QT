// src/resolvers/joi/index.ts
import { toValues } from "@primeuix/forms/utils";
import { isNotEmpty } from "@primeuix/utils/object";
var joiResolver = (schema, schemaOptions, resolverOptions) => async ({ values, name }) => {
  const { sync = false, raw = false } = resolverOptions || {};
  try {
    const result = await schema[sync ? "validate" : "validateAsync"](values, { abortEarly: false, ...schemaOptions });
    return {
      values: toValues(raw ? values : result, name),
      errors: {}
    };
  } catch (e) {
    if (e?.details) {
      return {
        values: toValues(raw ? values : void 0, name),
        errors: e.details.reduce((acc, error) => {
          const pathKey = isNotEmpty(error.path) ? error.path[0] : name;
          if (pathKey) {
            acc[pathKey] ||= [];
            acc[pathKey].push(error);
          }
          return acc;
        }, {})
      };
    }
    throw e;
  }
};
export {
  joiResolver
};
//# sourceMappingURL=index.mjs.map