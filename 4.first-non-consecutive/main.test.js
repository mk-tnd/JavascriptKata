const { describe, it, expect } = require('@jest/globals')
const findFirstNonConsecutive = require('./main')

describe('Find first non consecutive number', function() {
  it(`should return 5 when input [1, 2, 3, 5, 6, 7, 8]`, function() {
    expect(findFirstNonConsecutive([1, 2, 3, 5, 6, 7, 8])).toBe(5)
  })
  it(`should return 12 when input [7, 8, 9, 12, 14, 18]`, function() {
    expect(findFirstNonConsecutive([7, 8, 9, 12, 14, 18])).toBe(12)
  })
  it(`should return null when input [5]`, function() {
    expect(findFirstNonConsecutive([5])).toBe(null)
  })
  it(`should return null when input []`, function() {
    expect(findFirstNonConsecutive([])).toBe(null)
  })
  it(`should return 3 when input [1, 3, 5, 7, 9]`, function() {
    expect(findFirstNonConsecutive([1, 3, 5, 7, 9])).toBe(3)
  })
  it(`should return 4 when input [2, 4, 6, 8, 10]`, function() {
    expect(findFirstNonConsecutive([2, 4, 6, 8, 10])).toBe(4)
  })
})
