import { 
    capitalize,
    
} from "./functions";

// FUNCTION 1: CAPITALIZE
test('Capitalize', () => {
    expect(capitalize("hello")).toBe("Hello");
  });


  test('Capitalize', () => {
    expect(capitalize("dog")).toBe("Dog");
  });