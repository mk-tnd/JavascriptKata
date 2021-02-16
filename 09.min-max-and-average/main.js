/**
 * @param { Array<number> } numbers
 * @return { {min: number, max: number, avg: number } }
 */
function findMinMaxAndAvg(numbers) {
  const max = Math.max(...numbers)
  const min = Math.min(...numbers)
  let result = 0
  let avg
  numbers.forEach((value) => {
    result += value
  })
  avg = Math.round(result / numbers.length)

  return { max, min, avg }
}

module.exports = findMinMaxAndAvg
