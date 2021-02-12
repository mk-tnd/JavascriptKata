const { describe, it, expect } = require('@jest/globals')
const sumOnlyOdds = require('./main')

describe('Sum only odds from serial numbers', function() {
  it('should return 25 when input 10 (1 + 3 + 5 + ... + 9 = 25)', function() {
    expect(sumOnlyOdds(10)).toBe(25)
  })
  it('should return 36 when input 12 (1 + 3 + 5 + ... + 11 = 36)', function() {
    expect(sumOnlyOdds(12)).toBe(36)
  })
  it('should return 625 when input 25 (1 + 3 + 5 + ... + 25 = 169)', function() {
    expect(sumOnlyOdds(25)).toBe(169)
  })
  it('should return 625 when input 50 (1 + 3 + 5 + ... + 49 = 625)', function() {
    expect(sumOnlyOdds(50)).toBe(625)
  })
  it('should return 2500 when input 100 (1 + 3 + 5 + ... + 99 = 2500)', function() {
    expect(sumOnlyOdds(100)).toBe(2_500)
  })
  it('should return 250000 when input 1000 (1 + 3 + 5 + ... + 999 = 25000)', function() {
    expect(sumOnlyOdds(1000)).toBe(250_000)
  })
})
