/**
 * @param { Array<number> }classScores
 * @param { number } yourScore
 * @return { boolean }
 */
function isHigherThanAverage(classScores, yourScore) {
  return (
    yourScore > classScores.reduce((acc, num) => {
      return acc + num
    }, 0) / classScores.length
  )
}

module.exports = isHigherThanAverage
