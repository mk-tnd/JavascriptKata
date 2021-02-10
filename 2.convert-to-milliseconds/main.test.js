const { describe, it, expect } = require('@jest/globals')
const convertToMilliseconds = require('./main')

describe('Convert to milliseconds', function() {
  it(`should return 0 when input 0, 0 and 0`, function() {
    expect(convertToMilliseconds(0, 0, 0)).toBe(0)
  })
  it(`should return 6000 when input 0, 0 and 1`, function() {
    expect(convertToMilliseconds(0, 0, 1)).toBe(1000)
  })
  it(`should return 60000 when input 0, 1 and 0`, function() {
    expect(convertToMilliseconds(0, 1, 0)).toBe(60000)
  })
  it(`should return 3600000 when input 1, 0 and 0`, function() {
    expect(convertToMilliseconds(1, 0, 0)).toBe(3600000)
  })
  it(`should return 61000 when input 0, 1 and 1`, function() {
    expect(convertToMilliseconds(0, 1, 1)).toBe(61000)
  })

  it(`should return 3601000 when input 1, 0 and 1`, function() {
    expect(convertToMilliseconds(1, 0, 1)).toBe(3601000)
  })

  it(`should return 3601000 when input 1, 1 and 1`, function() {
    expect(convertToMilliseconds(1, 1, 1)).toBe(3661000)
  })

  it(`should return 13559000 when input 3, 45 and 59`, function() {
    expect(convertToMilliseconds(3, 45, 59)).toBe(13559000)
  })
})
