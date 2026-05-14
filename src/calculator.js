export function add(left, right) {
  return assertNumber(left, "left") + assertNumber(right, "right");
}

export function subtract(left, right) {
  return assertNumber(left, "left") - assertNumber(right, "right");
}

export function multiply(left, right) {
  return assertNumber(left, "left") * assertNumber(right, "right");
}

export function divide(left, right) {
  const divisor = assertNumber(right, "right");
  if (divisor === 0) {
    throw new RangeError("Cannot divide by zero");
  }
  return assertNumber(left, "left") / divisor;
}

function assertNumber(value, name) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new TypeError(`${name} must be a number`);
  }
  return value;
}
