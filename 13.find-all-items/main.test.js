const { describe, it, expect } = require('@jest/globals')
const findAllItems = require('./main')

describe('Find all items', function() {
  it(`should return true when input [] and []`, function () {
    expect(findAllItems([], [])).toBe(true)
  })
})
