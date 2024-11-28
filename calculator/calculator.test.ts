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
  test("handles any amount of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
    expect(add("10,20,30,40,50,60,70,80,90,100")).toBe(550);
  });
  test("ignores numbers greater than 1000", () => {
    expect(add("2,1001")).toBe(2);
    expect(add("1000,1001,2")).toBe(1002);
  });
  test("supports delimiters of any length", () => {
    expect(add("//[***]\n1***2***3")).toBe(6);
  });
    test("supports multiple delimiters", () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
    });
    test("supports multiple delimiters with length longer than one char", () => {
        expect(add("//[***][%%]\n1***2%%3")).toBe(6);
    });
});
