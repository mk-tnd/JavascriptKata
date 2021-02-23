/**
 * @param { string } phrase
 * @return { number }
 */
function findLongestWord(phrase) {
  const newword = phrase.split(/[\s\,\.\?\!]/)
  let lenarr = []
  for (let i = 0; i < newword.length; i++) {
    lenarr[i] = newword[i].length
  }
  const result = Math.max(...lenarr)
  return result
}

module.exports = findLongestWord
