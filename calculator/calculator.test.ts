import { describe, expect, test } from "vitest";
import { add } from "./add";

describe("calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
});
