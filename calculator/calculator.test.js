

// - Set up and install Vitest within the `calculator` project
// - Spend time reading `calculator.js` and getting familiar with how the code is meant to work
// - Plan and write test cases/scenarios for the `calculate` function.
// - Your tests should call the function with arguments and assert that the value returned is correct.
// - There should also be at least one test that asserts that `calculate` throws an error when called with an unsupported operator.
// - To improve coverage and confidence, write multiple tests for each supported operator with differing numbers.

// js
//   calculate('+', 9, 10); // should return 19
//   calculate('-', 4, 6); // should return -2
//   calculate('*', -6, -8); // should return 48
//   calculate('/', 121, 11); // should return 11
//   calculate('sq', 5); // should return 25
//   calculate('sq', 3, 44); // should return 9, as the 44 is ignored
//   calculate('%', 124, 56); // should throw an error since '%' is not a supported operator
//   calculate('🍕', -41414, 2); // should throw an error since '🍕' is not a supported operator
  
 

import {test, expect} from "vitest"
import { calculate } from "./calculator"

test("adds 9 and 10 = 19", () => {
  expect( calculate("+",9,10)).toBe(19)
})

test("minus 4 and 6 = -2", () => {
    expect( calculate("-",4,6)).toBe(-2)
  })

  test("times -6 and -8 = 48", () => {
    expect( calculate("*",-6,-8)).toBe(48)
  })
  
  test("dividing 121 and 11 = 11", () => {
    expect( calculate("/",121,11)).toBe(11)
  })

  test("sq 5 should = 25", () => {
    expect( calculate("sq",5)).toBe(25)
  })

  test("sq 3 should = 9", () => {
    expect( calculate("sq",3,44)).toBe(9)
  })
  test("mutiply 124 56 = 6944", () => {
    expect( calculate("%",124,56)).toBe(6944)
  })

  test("mutiply 124 56 = 6944", () => {
    expect( calculate("🍕",-41414,2)).toBe(-82828)
  })