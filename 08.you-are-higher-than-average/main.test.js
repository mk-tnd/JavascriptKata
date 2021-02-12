const { describe, it, expect } = require('@jest/globals')
const isHigherThanAverage = require('./main')

describe('You are higher than average', function() {
  it(`should return false when input [10, 10, 10, 10, 10] and 10`, function() {
    expect(isHigherThanAverage([10, 10, 10, 10, 10], 10)).toBe(false)
  })
  it(`should return true when input [1, 2, 3, 4, 5] and 3.01`, function() {
    expect(isHigherThanAverage([1, 2, 3, 4, 5], 3.01)).toBe(true)
  })
  it(`should return true when input [10, 10, 10, 10, 10] and 11`, function() {
    expect(isHigherThanAverage([10, 10, 10, 10, 10], 11)).toBe(true)
  })
  it(`should return false when input [1, 2, 3, 4, 5] and 3`, function() {
    expect(isHigherThanAverage([1, 2, 3, 4, 5], 3)).toBe(false)
  })
  it(`should return false when input [1, 4, 5, 3, 2] and 2`, function() {
    expect(isHigherThanAverage([1, 4, 5, 3, 2], 2)).toBe(false)
  })
  it(`should return true when input [200, 300, 400, 500, 600] and 410`, function() {
    expect(isHigherThanAverage([200, 300, 400, 500, 600], 410)).toBe(true)
  })
  it(`should return true when input [1, 4, 5, 3, 2] and 15`, function() {
    expect(isHigherThanAverage([1, 4, 5, 3, 2], 15)).toBe(true)
  })
})
