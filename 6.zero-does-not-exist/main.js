/**
 * @param { number } num
 * return { number | null }
 */
function zeroDoesNotExist(num) {

  if (num === 0) return null
  return (num % 10 !== 0)
    ? num
    : zeroDoesNotExist(num / 10)
}

module.exports = zeroDoesNotExist
