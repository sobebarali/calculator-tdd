import { describe, expect, test } from "vitest";
import { add } from "./add";

describe("calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  test("returns the number itself for a single number", () => {
    expect(add("1")).toBe(1);
  });
  test("returns the sum of two numbers", () => {
    expect(add("1,2")).toBe(3);
  });
  test("handles new lines as delimiters", () => {
    expect(add("1\n2,3")).toBe(6);
  });
  test("supports custom delimiters", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
   test("throws an error for negative numbers", () => {
    expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
  });
  test("throws an error listing all negative numbers", () => {
    expect(() => add("1,-2,-3,4")).toThrow(
      "negative numbers not allowed: -2,-3"
    );
  });
});
