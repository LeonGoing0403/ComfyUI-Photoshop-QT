// src/resolvers/yup/index.ts
import { toValues } from "@primeuix/forms/utils";
import { isNotEmpty } from "@primeuix/utils/object";
var yupResolver = (schema, schemaOptions, resolverOptions) => async ({ values, name }) => {
  const { sync = false, raw = false } = resolverOptions || {};
  try {
    const result = await schema[sync ? "validateSync" : "validate"](values, { abortEarly: false, ...schemaOptions });
    return {
      values: toValues(raw ? values : result, name),
      errors: {}
    };
  } catch (e) {
    if (e?.inner) {
      return {
        values: toValues(raw ? values : void 0, name),
        errors: e.inner.reduce((acc, error) => {
          const pathKey = isNotEmpty(error.path) ? error.path.split(".")[0] : name;
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
  yupResolver
};
//# sourceMappingURL=index.mjs.map