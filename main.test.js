//👉 Write your tests below here:
import { it, expect } from "@jest/globals";
import fiz from "./main.js";

describe(`Super good tests to make sure you aren't cheating`, () => {
    it(`Should pass replace numbers with strings as appropriate`, () => {
        expect(fiz([1, 2, 3, 4, 5, 6])).toStrictEqual([1, 2, 'Fizz', 4, 'Buzz', 'Fizz']);
        expect(fiz([10, 15, 20, 25, 30])).toStrictEqual(['Buzz', 'FizzBuzz', 'Buzz', 'Buzz', 'FizzBuzz']);
        expect(fiz([80, 81, 82, 83, 84, 85])).toStrictEqual(['Buzz', 'Fizz', 82, 83, 'Fizz', 'Buzz'])
    })
})