/**
 * @param { string } str
 * @return { string }
 */
function reverseString(str) {
  let count = str.length
  let result = ''
  //   let newarray = []
  for (let i = 0; i < str.length; i++) {
    // newarray[i] = str[count]
    console.log(str[i])
    result = str[i] + result
    count--
  }
  //   str = newarray.join('')
  //   return str
  return result
}

module.exports = reverseString
