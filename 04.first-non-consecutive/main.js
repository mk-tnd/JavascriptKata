/**
 * @param { Array<number> } nums
 * @return { number | null }
 */
function findFirstNonConsecutive(nums) {
  if (nums.length > 1) {
    for (let i = 0; i <= nums.length; i++) {
      if (nums[i + 1] - nums[i] !== 1) {
        return nums[i + 1]
      }
    }
  } 
  }
  return null

}

module.exports = findFirstNonConsecutive
