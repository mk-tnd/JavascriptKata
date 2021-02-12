/**
 * @param { number } num
 * return { number | null }
 */
function zeroDoesNotExist(num) {
  if (num !== 0) {
    while (num % 10 === 0) {
      num = num / 10
    }
    return num
  }
  return null
}

module.exports = zeroDoesNotExist
