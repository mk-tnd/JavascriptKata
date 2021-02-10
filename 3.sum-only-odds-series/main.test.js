const { describe, it, expect } = require('@jest/globals')
const sumOnlyOdds = require('./main')

describe('Sum only odds from serial numbers', function() {
  it('should return 25 when input 10 (2 + 4 + 6 + ... + 10 = 25)', function() {
    expect(sumOnlyOdds(10)).toBe(25)
  })
  it('should return 36 when input 12 (2 + 4 + 6 + ... + 12 = 36)', function() {
    expect(sumOnlyOdds(12)).toBe(36)
  })
  it('should return 625 when input 50 (2 + 4 + 6 + ... + 50 = 625)', function() {
    expect(sumOnlyOdds(100)).toBe(2_500)
  })
  it('should return 2500 when input 100 (2 + 4 + 6 + ... + 100 = 2500)', function() {
    expect(sumOnlyOdds(100)).toBe(2_500)
  })
  it('should return 250000 when input 1000 (2 + 4 + 6 + ... + 1000 = 25000)', function() {
    expect(sumOnlyOdds(1000)).toBe(250_000)
  })
})
