const { describe, it, expect } = require('@jest/globals')
const zeroDoesNotExist = require('./main')

describe(`Zero doesn't exist`, function() {
  it(`should return 192 when input 19200000`, function() {
    expect(zeroDoesNotExist(19200000)).toBe(192)
  })
  it(`should return 4802 when input 480200000000`, function() {
    expect(zeroDoesNotExist(480200000000)).toBe(4802)
  })
  it(`should return null when input 0`, function() {
    expect(zeroDoesNotExist(0)).toBe(null)
  })
  it(`should return -505 when input -5050`, function() {
    expect(zeroDoesNotExist(-5050)).toBe(-505)
  })
  it(`should return 9 when input 9000000000`, function() {
    expect(zeroDoesNotExist(9000000000)).toBe(9)
  })
})
