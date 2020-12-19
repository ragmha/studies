import each from 'jest-each'

import * as solutions from './is-unique'

describe('Chapter 1- is unique string', () => {
  Object.entries(solutions).forEach(([fnName, solution]) => {
    describe(`solution ${fnName}`, () => {
      each([
        ['Hello', false],
        ['Hey', true],
        ['HelLo', true],
        ['', true],
        ['abba', false],
      ]).it(
        '#%# with %s it returns %s',
        (testStr: string, expected: boolean) => {
          expect(solution(testStr)).toBe(expected)
        }
      )
    })
  })
})
