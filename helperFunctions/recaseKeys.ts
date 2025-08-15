import ObjectWithStringKeys from "../interfaces/ObjectWithStringKeys.ts";
import snakeCaseToCamelCase from "./snakeCaseToCamelCase.ts";

// deno-lint-ignore no-explicit-any
function recaseKeys<T = any>(objectWithSnakeCaseKeys: ObjectWithStringKeys<T>) {
  const objectWithCamelCaseKeys: ObjectWithStringKeys<T> = {};
  for (const key of Object.keys(objectWithSnakeCaseKeys)) {
    if(key.includes("_")) {
      objectWithCamelCaseKeys[snakeCaseToCamelCase(key)] = objectWithSnakeCaseKeys[key];
    } else {
      objectWithCamelCaseKeys[key] = objectWithSnakeCaseKeys[key];
    };
  };
  return objectWithCamelCaseKeys;
};

export default recaseKeys;