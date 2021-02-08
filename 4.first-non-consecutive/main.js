// ts-check
/**
 * @param { Array<number> } nums
 * @return { number | null }
 */
function findFirstNonConsecutive(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > (nums[i - 1] + 1) && i > 0) {
      return nums[i]
    }
  }
  return null
}

module.exports = findFirstNonConsecutive
