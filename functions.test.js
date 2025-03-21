import { 
    capitalize,
    reverseString
    
} from "./functions";

// FUNCTION 1: CAPITALIZE
test('Capitalize', () => {
    expect(capitalize("hello")).toBe("Hello");
  });


  test('Capitalize', () => {
    expect(capitalize("dog")).toBe("Dog");
  });


// FUNCTION 2: REVERSESTRING


test('Reverse', ()=> {
    expect(reverseString("dog")).toBe("god");
})

test('Reverse', ()=> {
    expect(reverseString("apple in a hole")).toBe("eloh a ni elppa");
})
