// src/resolvers/superstruct/index.ts
import { toValues } from "@primeuix/forms/utils";
import { isNotEmpty } from "@primeuix/utils/object";
var superStructResolver = (schema, schemaOptions, resolverOptions) => async ({ values, name }) => {
  const { raw = false } = resolverOptions || {};
  try {
    const [errors, data] = schema.validate(values, schemaOptions);
    if (errors) {
      return {
        values: toValues(void 0, name),
        errors: errors.failures().reduce((acc, error) => {
          const pathKey = isNotEmpty(error.path) ? error.path[0] : name;
          if (pathKey) {
            acc[pathKey] ||= [];
            acc[pathKey].push(error);
          }
          return acc;
        }, {})
      };
    }
    return {
      values: toValues(raw ? values : data, name),
      errors: {}
    };
  } catch (e) {
    throw e;
  }
};
export {
  superStructResolver
};
//# sourceMappingURL=index.mjs.map