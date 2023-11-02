import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./index";

test("[capitalize] capitalize first letter of a string", () => {
  expect(capitalize("hey")).toBe("Hey");
  expect(capitalize("hey")).toContain("H");
});

test("[reverseString] reverse the string", () => {
  expect(reverseString("Good")).toBe("dooG");
  expect(reverseString("Happy Birthday")).toBe("yadhtriB yppaH");
});

test("[calculator] add, subtract, multiply & divide two numbers", () => {
  expect(calculator.add(1, 2)).toBe(3);
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract(10, 6)).toBe(4);
  expect(calculator.multiply(7, 3)).toBe(21);
  expect(calculator.divide(4, 2)).toBe(2);
});

// caesarCipher tests
test("[caesarCipher] X amount of shift is correct", () => {
  expect(caesarCipher("a", 1)).toBe("b");
  expect(caesarCipher("a", 13)).toBe("n");
});
test("[caesarCipher] ignores special characters", () => {
  expect(caesarCipher("come here!", 13)).toBe("pbzr urer!");
  expect(caesarCipher("come heRe!", 13)).toBe("pbzr urEr!");
});
test("[caesarCipher] keeps the same character case", () => {
  expect(caesarCipher("gooD bye", 3)).toBe("jrrG ebh");
  expect(caesarCipher("HElLo", 1)).toBe("IFmMp");
});

// analyzeArray tests
test("[analyzeArray] results are correct", () => {
  expect(analyzeArray([1, 2, 4, 5, 67, 3])).toEqual({
    average: 13.666666666666666,
    min: 1,
    max: 67,
    length: 6,
  });
});
test("[analyzeArray] error when input contains a non-number", () => {
  expect(analyzeArray([1, 2, "4", 5, "67", 3])).toBe("not an array");
});
test("[analyzeArray] error when input is array-like object", () => {
  expect(analyzeArray("123589")).toBe("not an array");
});
