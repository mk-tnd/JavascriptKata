const { describe, it, expect } = require('@jest/globals')
const { haveAllItems_loop, haveAllItems_noLoop } = require('./main')

function doTestCases(callbackFn) {
  it(`should return true when input [1, 4, 7, 10, 13] and [7, 13, 1]`, function() {
    expect(callbackFn([1, 4, 7, 10, 13], [7, 13, 1])).toBe(true)
  })
  it(`should return false when input [1, 4, 7, 10, 13] and [7, 13, 2]`, function() {
    expect(callbackFn([1, 4, 7, 10, 13], [7, 13, 2])).toBe(false)
  })
  it(`should return false when input [1, 4, 7, 10, 13] and [7, 13, 2, 1]`, function() {
    expect(callbackFn([1, 4, 7, 10, 13], [7, 13, 2, 1])).toBe(false)
  })

  it(`should return true when input ['one', 'two', 'three'] and ['two', 'three']`, function() {
    expect(callbackFn(['one', 'two', 'three'], ['two', 'three'])).toBe(true)
  })
  it(`should return false when input ['one', 'two', 'three'] and ['three', 'four']`, function() {
    expect(callbackFn(['one', 'two', 'three'], ['three', 'four'])).toBe(false)
  })
}

describe('Have all items - Loop', function() {
  doTestCases(haveAllItems_loop)
})

describe('Have all items - NoLoop', function() {
  doTestCases(haveAllItems_noLoop)

  it(`should return true when input... 
    [
      { name: 'Danial', age: 27 },
      { name: 'Xiaoyi', age: 18 },
      { name: 'George', age: 34 }
    ] 
    ...and...
    [
      { name: 'Danial', age: 27 },
      { name: 'George', age: 34 }
    ]`, function() {
    const danial = { name: 'Danial', age: 27 }
    const xiaoyi = { name: 'Xiaoyi', age: 18 }
    const george = { name: 'George', age: 34 }

    expect(
      haveAllItems_noLoop(
        [danial, xiaoyi, george],
        [
          { name: 'Danial', age: 27 },
          { name: 'George', age: 34 }
        ]
      )
    ).toBe(true)
  })

  it(`should return true when input... 
    [
      { name: 'Danial', age: 27 },
      { name: 'Xiaoyi', age: 18 },
      { name: 'George', age: 34 }
    ] 
    ...and...
    [
      { name: 'Danial', age: 27 },
      { name: 'George', age: 34 }
    ]`, function() {
    const danial = { name: 'Danial', age: 27 }
    const xiaoyi = { name: 'Xiaoyi', age: 18 }
    const george = { name: 'George', age: 34 }

    expect(
      haveAllItems_noLoop(
        [danial, xiaoyi, george],
        [
          { name: 'Danial', age: 27 },
          { name: 'George', age: 34 }
        ]
      )
    ).toBe(true)
  })
})
