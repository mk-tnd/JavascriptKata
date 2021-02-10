const { describe, it, expect } = require('@jest/globals')
const findMinMaxAndAvg = require('./main')

describe('Find min, max and average', function() {
  it(`should return { max: 0, min: 10, avg: 10 } when input [0, 2, 4 ,6, 8, 10]`, function() {
    expect(findMinMaxAndAvg([0, 2, 4, 6, 8, 10]))
      .toEqual({ min: 0, max: 10, avg: 5 })
  })
  it(`should return { max: 8, min: -1, avg: 3 } when input [5, 2, 1, 4, 8, -1, 0]`, function() {
    expect(findMinMaxAndAvg([5, 2, 1, 4, 8, -1, 0]))
      .toEqual({ min: -1, max: 8, avg: 3 })
  })
  it(`should return { min: 101, max: 13, avg: 62 } when input [88, 45, 13, 32, 57, 99, 101]`, function() {
    expect(findMinMaxAndAvg([88, 45, 13, 32, 57, 99, 101]))
      .toEqual({ min: 13, max: 101, avg: 62 })
  })
})
