const { describe, it, expect } = require('@jest/globals')
const { findItem_forEach, findItem_reduce, findItem_filter, findItem_some } = require('./main')

function doTestCases(findItemCallback) {
  it(`should return true when input [1, 2, 3, 4, 6, 7, 8, 9, 10] and 4`, function() {
    expect(findItemCallback([1, 2, 3, 4, 6, 7, 8, 9, 10], 4)).toBe(true)
  })
  it(`should return false when input [1, 2, 3, 4, 6, 7, 8, 9, 10] and 5`, function() {
    expect(findItemCallback([1, 2, 3, 4, 6, 7, 8, 9, 10], 5)).toBe(false)
  })

  it(`should return true when input [true, true, true] and true`, function() {
    expect(findItemCallback([true, true, true], true)).toBe(true)
  })
  it(`should return false when input [true, true, true] and false`, function() {
    expect(findItemCallback([true, true, true], false)).toBe(false)
  })

  it(`should return true when input ['The', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'] and 'jumped'`, function() {
    expect(
      findItemCallback(
        ['The', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'],
        'jumped'
      )
    ).toBe(true)
  })

  it(`should return false when input ['The', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'] and 'hello'`, function() {
    expect(
      findItemCallback(
        ['The', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'],
        'hello'
      )
    ).toBe(false)
  })

  it(`should return false when input ['The', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'] and 'jump'`, function() {
    expect(
      findItemCallback(
        ['The', 'brown', 'fox', 'jumped', 'over', 'the', 'lazy', 'dog'],
        'jump'
      )
    ).toBe(false)
  })
}

describe('Have item - [ForEach]', function() {
  doTestCases(findItem_forEach)
})

describe('Have item - [Reduce]', function() {
  doTestCases(findItem_reduce)
})

describe('Have item - [Filter]', function() {
  doTestCases(findItem_filter)
})

describe('Have item - [Some]', function() {
  doTestCases(findItem_some)
})
