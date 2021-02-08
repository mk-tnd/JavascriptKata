const calculateGrade = require('./main')

describe('Calculate grade from score', function() {
  it(`should return 'Unsatisfactory' when input 40`, function() {
    expect(calculateGrade(40)).toBe('Unsatisfactory')
  })
  it(`should return 'Unsatisfactory' when input 59`, function() {
    expect(calculateGrade(59)).toBe('Unsatisfactory')
  })
  it(`should return 'Satisfactory' when input 60`, function() {
    expect(calculateGrade(60)).toBe('Satisfactory')
  })
  it(`should return 'Satisfactory' when input 75`, function() {
    expect(calculateGrade(75)).toBe('Satisfactory')
  })
  it(`should return 'Hournor' when input 76`, function() {
    expect(calculateGrade(76)).toBe('Hournor')
  })
  it(`should return 'Hournor' when input 100`, function() {
    expect(calculateGrade(100)).toBe('Hournor')
  })
})
