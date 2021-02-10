const { describe, it, expect } = require('@jest/globals')
const findLongestWord = require('./main')

describe('Find min, max and average', function() {
  it(`should return 7 when input 'The quick white fox jumped around the massive dog'`, function() {
    expect(findLongestWord('The quick white fox jumped around the massive dog')).toBe(7)
  })
  it(`should return 10 when input 'Take me to tinseltown with you'`, function() {
    expect(findLongestWord('Take me to tinseltown with you')).toBe(10)
  })
  it(`should return 8 when input 'Hello, Codecamp 8'`, function() {
    expect(findLongestWord('Hello, Codecamp 8')).toBe(8)
  })
  it(`should return 10 when input "Here is the Dormammu's dimension"`, function() {
    expect(findLongestWord('Here is the Dormammu\'s dimension')).toBe(10)
  })
  it(`should return 6 when input 'Anakin, I am your father!'`, function() {
    expect(findLongestWord('Anakin, I am your father!')).toBe(6)
  })
})
