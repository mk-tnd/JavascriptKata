/**
 * @param { Array<number> }classScores
 * @param { number } yourScore
 * @return { boolean }
 */
function isHigherThanAverage(classScores, yourScore) {
  let total = 0
  for (let i = 0; i < classScores.length; i++) {
    total = classScores[i] + total
  }
  const avg = total / classScores.length
  let boolean = yourScore > avg ? true : false

  return boolean
}

module.exports = isHigherThanAverage
