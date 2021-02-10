/**
 * @param { number } hours
 * @param { number }  minutes
 * @param { number }  seconds
 * @return { number }
 */
function convertToMilliseconds(
  hours,
  minutes,
  seconds
) {
  const millisecsPerSec = 1000
  const sMillisecs = seconds * millisecsPerSec
  const mMillisecs = minutes * 60 * millisecsPerSec
  const hMillisecs = hours * 60 * 60 * millisecsPerSec
  return sMillisecs + mMillisecs + hMillisecs
}


module.exports = convertToMilliseconds
