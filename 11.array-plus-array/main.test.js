const { describe, it, expect } = require('@jest/globals')
const { plusArray1, plusArray2, plusArray3, plusArray4 } = require('./main')

describe('Array plus array (For loop)', function() {
  it('When input [1, 2, 3] and [4, 8, 5] should return [6, 10, 7]', () => {
    expect(plusArray1([1, 2, 3], [4, 8, 5])).toEqual([6, 10, 7])
  })
  it('When input [1, 2, 3, 4] and [5, 6, 7, 8] should return [9, 9, 9, 9]', () => {
    expect(plusArray1([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([9, 9, 9, 9])
  })
  it('When input [5, 5, 5, 5], [4, 3, 2, 1] should return [9, 8, 7, 6]', () => {
    expect(plusArray1([5, 5, 5, 5], [4, 3, 2, 1])).toEqual([6, 7, 8, 9])
  })
})

describe('Array plus array (While loop)', function() {
  it('When input [1, 2, 3] and [4, 8, 5] should return [6, 10, 7]', () => {
    expect(plusArray2([1, 2, 3], [4, 8, 5])).toEqual([6, 10, 7])
  })
  it('When input [1, 2, 3, 4] and [5, 6, 7, 8] should return [9, 9, 9, 9]', () => {
    expect(plusArray2([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([9, 9, 9, 9])
  })
  it('When input [5, 5, 5, 5], [4, 3, 2, 1] should return [9, 8, 7, 6]', () => {
    expect(plusArray2([5, 5, 5, 5], [4, 3, 2, 1])).toEqual([6, 7, 8, 9])
  })
})

describe('Array plus array (Array.prototype.map())', function() {
  it('When input [1, 2, 3] and [4, 8, 5] should return [6, 10, 7]', () => {
    expect(plusArray3([1, 2, 3], [4, 8, 5])).toEqual([6, 10, 7])
  })
  it('When input [1, 2, 3, 4] and [5, 6, 7, 8] should return [9, 9, 9, 9]', () => {
    expect(plusArray3([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([9, 9, 9, 9])
  })
  it('When input [5, 5, 5, 5], [4, 3, 2, 1] should return [9, 8, 7, 6]', () => {
    expect(plusArray3([5, 5, 5, 5], [4, 3, 2, 1])).toEqual([6, 7, 8, 9])
  })
})

describe('Array plus array (Array.prototype.reduce())', function() {
  it('When input [1, 2, 3] and [4, 8, 5] should return [6, 10, 7]', () => {
    expect(plusArray4([1, 2, 3], [4, 8, 5])).toEqual([6, 10, 7])
  })
  it('When input [1, 2, 3, 4] and [5, 6, 7, 8] should return [9, 9, 9, 9]', () => {
    expect(plusArray4([1, 2, 3, 4], [5, 6, 7, 8])).toEqual([9, 9, 9, 9])
  })
  it('When input [5, 5, 5, 5], [4, 3, 2, 1] should return [9, 8, 7, 6]', () => {
    expect(plusArray4([5, 5, 5, 5], [4, 3, 2, 1])).toEqual([6, 7, 8, 9])
  })
})
