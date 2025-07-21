import ObjectWithStringKeys from "../littleInterfaces/ObjectWithStringKeys.ts";
import snakeCaseToCamelCase from "./snakeCaseToCamelCase.ts";

function recaseKeys(objectWithSnakeCaseKeys: ObjectWithStringKeys) {
  const objectWithCamelCaseKeys: ObjectWithStringKeys = {};
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