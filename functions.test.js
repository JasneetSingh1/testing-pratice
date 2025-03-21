import { 
    capitalize,
    reverseString
    
} from "./functions";

// FUNCTION 1: CAPITALIZE
test('Capitalize', () => {
    expect(capitalize("hello")).toBe("Hello");
  });


  test('Capitalize: multiple word string', () => {
    expect(capitalize("dog in")).toBe("Dog in");
  });


// FUNCTION 2: REVERSESTRING


test('Reverse', ()=> {
    expect(reverseString("dog")).toBe("god");
})

test('Reverse: multiple word string', ()=> {
    expect(reverseString("apple in a hole")).toBe("eloh a ni elppa");
})

test('Reverse: multiple word string with Capital', ()=> {
    expect(reverseString("Apple in a hole")).toBe("eloh a ni elppA");
})

