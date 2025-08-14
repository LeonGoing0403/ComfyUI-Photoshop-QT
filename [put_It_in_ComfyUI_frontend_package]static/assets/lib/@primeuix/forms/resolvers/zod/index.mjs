// src/resolvers/zod/index.ts
import { toValues } from "@primeuix/forms/utils";
import { isNotEmpty } from "@primeuix/utils/object";
var zodResolver = (schema, schemaOptions, resolverOptions) => async ({ values, name }) => {
  const { sync = false, raw = false } = resolverOptions || {};
  try {
    const result = await schema[sync ? "parse" : "parseAsync"](values, schemaOptions);
    return {
      values: toValues(raw ? values : result, name),
      errors: {}
    };
  } catch (e) {
    if (Array.isArray(e?.errors)) {
      return {
        values: toValues(raw ? values : void 0, name),
        errors: e.errors.reduce((acc, error) => {
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
  zodResolver
};
//# sourceMappingURL=index.mjs.map