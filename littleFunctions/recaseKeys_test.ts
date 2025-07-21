import { assertEquals } from "jsr:@std/assert/equals";
import recaseKeys from "./recaseKeys.ts";

Deno.test("recaseKeys", () => {
  const objectWithSnakeCaseKeys = {
    money: 0,
    very_particular_set_of_skills: []
  };
  const objectWithCamelCaseKeys = {
    money: 0,
    veryParticularSetOfSkills: []
  };
  assertEquals(recaseKeys(objectWithSnakeCaseKeys), objectWithCamelCaseKeys);
});