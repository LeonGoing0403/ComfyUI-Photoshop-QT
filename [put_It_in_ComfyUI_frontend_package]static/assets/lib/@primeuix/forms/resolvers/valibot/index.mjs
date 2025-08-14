// src/resolvers/valibot/index.ts
import { toValues } from "@primeuix/forms/utils";
import { isNotEmpty } from "@primeuix/utils/object";
import { getDotPath, safeParse, safeParseAsync } from "valibot";
var valibotResolver = (schema, schemaOptions, resolverOptions) => async ({ values, name }) => {
  const { sync = false, raw = false } = resolverOptions || {};
  try {
    const result = sync ? safeParse(schema, values, { abortPipeEarly: false, ...schemaOptions }) : await safeParseAsync(schema, values, { abortPipeEarly: false, ...schemaOptions });
    if (result.success) {
      return {
        values: toValues(raw ? values : result.output, name),
        errors: {}
      };
    } else {
      return {
        values: toValues(raw ? values : void 0, name),
        errors: result.issues?.reduce((acc, error) => {
          const path = getDotPath(error);
          const pathKey = isNotEmpty(path) ? path.split(".")[0] : name;
          if (pathKey) {
            acc[pathKey] ||= [];
            acc[pathKey].push(error);
          }
          return acc;
        }, {})
      };
    }
  } catch (e) {
    throw e;
  }
};
export {
  valibotResolver
};
//# sourceMappingURL=index.mjs.map