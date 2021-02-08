/**
 * @param { Array<number> } numbers
 * @return { {min: number, max: number, avg: number } }
 */
function findMinMaxAndAvg(numbers) {
  let min = numbers[0],
    max = numbers[0],
    sum = numbers[0]

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i]
    if (numbers[i] < min) min = numbers[i]
    sum += numbers[i]
  }

  return { min, max, avg: Math.round(sum / numbers.length) }
}

module.exports = findMinMaxAndAvg
