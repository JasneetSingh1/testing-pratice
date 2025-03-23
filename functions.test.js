import {
  Calculator,
  capitalize,
  reverseString,
  caeserCipher,
  analyzeArray
} from "./functions";

// FUNCTION 1: CAPITALIZE
test("Capitalize", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("Capitalize: multiple word string", () => {
  expect(capitalize("dog in")).toBe("Dog in");
});

// FUNCTION 2: REVERSE STRING

test("Reverse", () => {
  expect(reverseString("dog")).toBe("god");
});

test("Reverse: multiple word string", () => {
  expect(reverseString("apple in a hole")).toBe("eloh a ni elppa");
});

test("Reverse: multiple word string with Capital", () => {
  expect(reverseString("Apple in a hole")).toBe("eloh a ni elppA");
});

// FUNCTION 3: CALCULATOR

test("Calculator: Add ", () => {
  expect(Calculator.add(2, 3)).toBe(5);
});

test("Calculator: Add floating numbers ", () => {
  expect(Calculator.add(0.2, 0.1)).toBeCloseTo(0.3);
});

test("Calculator: Subtract ", () => {
  expect(Calculator.subtract(5, 3)).toBe(2);
});

test("Calculator: Subtract floating numbers ", () => {
  expect(Calculator.subtract(0.5, 0.3)).toBeCloseTo(0.2);
});

test("Calculator: Divide ", () => {
  expect(Calculator.divide(6, 2)).toBe(3);
});

test("Calculator: Multiply ", () => {
  expect(Calculator.multiply(6, 2)).toBe(12);
});

// FUNCTION 4: CAESAR CIPHER

test("Caesar Cipher:", () => {
  expect(caeserCipher("xyz", 3)).toBe("abc");
});

test("Caesar Cipher: Case Preservation", () => {
  expect(caeserCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Caesar Cipher: Punctuation Preservation", () => {
  expect(caeserCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});



// FUNCTION 5: ANALYZE ARRAY

test("Analyze Array: Return Object with correct properties", () => {
    expect(analyzeArray([0])).toEqual({average: 0, min: 0, max: 0, length: 1});
  });


  test("Analyze Array: Return Object with correct values", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({average: 4, min: 1, max: 8, length: 6});
  });