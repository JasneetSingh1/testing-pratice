# Testing Practice

## Table of Contents

1. [Description](#description)
1. [Features](#features)
1. [Technologies Used](#technologies-used)
1. [Project Challenges](#project-challenges)
1. [Thoughts and Observations](#thoughts-and-observations)
1. [Future Enhancements](#future-enhancements)
1. [Installation](#installation)

## Description

This project is a simple practice exercise to get comfortable with writing unit tests using Jest. The main goal is to test various functions and ensure they work as expected. This includes functions for string manipulation, basic arithmetic operations, Caesar cipher encryption, and array analysis.

## Features

- **capitalize**: Capitalizes the first character of a string.
- **reverseString**: Reverses a given string.
- **Calculator**: Supports basic arithmetic operations (add, subtract, multiply, divide).
- **caeserCipher**: Encrypts a string using the Caesar cipher technique, preserving case and punctuation.
- **analyzeArray**: Returns an object containing the average, min, max, and length of an array of numbers.

## Technologies Used

- JavaScript (ES6+)
- Jest (for unit testing)
- Babel (for ES6 module compatibility with Jest)

## Project Challenges

- Handling ES6 imports in Jest, which required setting up Babel.
- Ensuring tests covered edge cases such as case preservation and punctuation in `caeserCipher`.
- Implementing a linked list for character shifting in `caeserCipher` for an alternative approach to array-based shifting.
- Floating point precision issues in the calculator functions, handled using `toBeCloseTo()` in tests.

## Thoughts and Observations

- Writing tests before implementation helped guide the development process and improved code reliability.
- The linked list approach for Caesar cipher was an out of the box choice, but a simple array-based method would also be effective.
- Testing with different input variations (single characters, multiple words, uppercase/lowercase cases) helped ensure robustness.

## Future Enhancements

- Implement additional string manipulation functions for practice.
- Extend the calculator to support more complex operations (exponents, modulus, etc.).
- Improve error handling and edge case detection.
- Explore different data structures for the Caesar cipher implementation.

## Installation

To install and run the project locally:

1. Clone the GitHub repository:

   ```bash
   git clone https://github.com/JasneetSingh1/testing-pratice.git
   ```

2. Navigate to the project directory:

   ```bash
   cd testing-pratice
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run tests using Jest:

   ```bash
   npm test
   
