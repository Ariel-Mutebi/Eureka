import { assertEquals } from "jsr:@std/assert";
import snakeCaseToCamelCase from "./snakeCaseToCamelCase.ts";

Deno.test("snakeCaseToCamelCase", () => {
  const snakeCaseString = "i_like_python";
  const camelCaseString = "iLikePython";
  assertEquals(snakeCaseToCamelCase(snakeCaseString), camelCaseString);
});