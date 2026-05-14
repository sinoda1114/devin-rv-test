import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { add, divide, multiply, subtract } from "../src/calculator.js";

describe("calculator", () => {
  it("adds two numbers", () => {
    assert.equal(add(2, 3), 5);
  });

  it("subtracts two numbers", () => {
    assert.equal(subtract(10, 4), 6);
  });

  it("multiplies two numbers", () => {
    assert.equal(multiply(6, 7), 42);
  });

  it("divides two numbers", () => {
    assert.equal(divide(12, 3), 4);
  });

  it("rejects division by zero", () => {
    assert.throws(() => divide(12, 0), RangeError);
  });

  it("rejects non-number input", () => {
    assert.throws(() => add("2", 3), TypeError);
  });
});
