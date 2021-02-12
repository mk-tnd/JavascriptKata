const { describe, it, expect } = require('@jest/globals')
const reverseString = require('./main')

describe('Reverse string', function() {
  it(`should return '8 pmaC edoC' when input 'Code Camp 8'`, function(){
    expect(reverseString('Code Camp 8')).toBe('8 pmaC edoC')
  })
  it(`should return 'dlroW ,olleH' when input 'Hello, World'`, function(){
    expect(reverseString('Hello, World')).toBe('dlroW ,olleH')
  })
  it(`should return 'retaV nied nib hci' when input 'ich bin dein Vater'`, function(){
    expect(reverseString('ich bin dein Vater')).toBe('retaV nied nib hci')
  })
  it(`should return 'etsaP+ypoC' when input 'Copy+Paste'`, function(){
    expect(reverseString('Copy+Paste')).toBe('etsaP+ypoC')
  })
  it(`should return '555AzWnI555' when input '555InWzA555'`, function(){
    expect(reverseString('555InWzA555')).toBe('555AzWnI555')
  })
})
