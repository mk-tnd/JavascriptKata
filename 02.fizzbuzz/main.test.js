const { describe, it, expect } = require('@jest/globals')
const fizzBuzz = require('./main')

describe('fizzbuzz', function() {
  it(`should return 'fizz' when input 3`, function() {
    expect(fizzBuzz(3)).toBe('fizz')
  })
  it(`should return 'buzz' when input 5`, function() {
    expect(fizzBuzz(5)).toBe('buzz')
  })
  it(`should return 'fizzbuzz' when input 15`, function() {
    expect(fizzBuzz(15)).toBe('fizzbuzz')
  })
  it(`should return 7 when input 7`, function() {
    expect(fizzBuzz(7)).toBe(7)
  })

  it(`should return 'fizz' when input 18`, function() {
    expect(fizzBuzz(3)).toBe('fizz')
  })
  it(`should return 'buzz' when input 20`, function() {
    expect(fizzBuzz(20)).toBe('buzz')
  })
  it(`should return 'fizzbuzz' when input 45`, function() {
    expect(fizzBuzz(45)).toBe('fizzbuzz')
  })
  it(`should return 11 when input 11`, function() {
    expect(fizzBuzz(11)).toBe(11)
  })

  it(`should return 'fizzbuzz' when input 45`, function() {
    expect(fizzBuzz(60)).toBe('fizzbuzz')
  })
  it(`should return 'fizzbuzz' when input 300`, function() {
    expect(fizzBuzz(300)).toBe('fizzbuzz')
  })
  it(`should return 'fizzbuzz' when input -315151515`, function() {
    expect(fizzBuzz(-315151515)).toBe('fizzbuzz')
  })

  it(`should return 'fizzbuzz' when input -4564447`, function() {
    expect(fizzBuzz(-4564447)).toBe(-4564447)
  })
})
