/**
 * @param {number} score
 * @returns { string }
 */
function calculateGrade(score) {
  if (score >= 76) {
    return 'Hournor'
  } else if (score >= 60) {
    return 'Satisfactory'
  } else {
    return 'Unsatisfactory'
  }
}



module.exports = calculateGrade
