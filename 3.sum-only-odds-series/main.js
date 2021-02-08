// ts-check
/**
 * @param { number } n
 * @return number
 */
function sumOnlyOdds(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1)
      sum += i
  }
  return sum
}

module.exports = sumOnlyOdds
