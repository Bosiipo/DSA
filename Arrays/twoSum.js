var twoSum = function (nums, target) {
  let hash = {};
  debugger;
  for (let i = 0; i < nums.length; i++) {
    debugger;
    let wanted = target - nums[i];
    if (nums[i] in hash) {
      //        i = 0   1   2   3
      // ie nums = [2, 7, 11, 15], target = 9

      //  wanted = target - nums[0] ==> 9 - 2 = 7;
      return [hash[nums[i]], i];
    }
    hash[wanted] = i;
    // ie hash {7: = 0};
  }

  console.log("HASH ==>", hash[(nums[wanted], i)]);
  // return hash[(nums[wanted], i)];
  return null;
};

twoSum([2, 7, 11, 15], 9);
