const sumOnlyOdds = require('./main')

describe('Sum only odds from serial numbers', function() {
  it('should return 25 when input 10 (1 + 2 + 3 + ... + 10)', function() {
    expect(sumOnlyOdds(10)).toBe(25)
  })
  it('should return 36 when input 12 (1 + 2 + 3 + ... + 12)', function() {
    expect(sumOnlyOdds(12)).toBe(36)
  })
  it('should return 625 when input 50 (1 + 2 + 3 + ... + 50)', function() {
    expect(sumOnlyOdds(100)).toBe(2500)
  })
  it('should return 2500 when input 100 (1 + 2 + 3 + ... + 100)', function() {
    expect(sumOnlyOdds(100)).toBe(2500)
  })
})
