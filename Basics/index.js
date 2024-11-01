// String
// Dynamic Programming
// function longestPalindrome(s) {
//   if (s.length < 1) return "";
//   let maxSubStart = 0;
//   let maxSubLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     debugger;
//     const oddPalindrome = expandAroundCenter(s, i, i);
//     const evenPalindrome = expandAroundCenter(s, i, i + 1);
//     const longestSubAtChar = Math.max(
//       oddPalindrome,
//       evenPalindrome
//     );
//     if (longestSubAtChar > maxSubLength) {
//       maxSubLength = longestSubAtChar;
//       maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
//     }
//   }
//   return s.substr(maxSubStart, maxSubLength);
// }

// function expandAroundCenter(s, left, right) {
//   debugger;
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     left--;
//     right++;
//   }
//   return right - left - 1;
// }

// longestPalindrome("aba");

console.log("Bosipo");

// function isHappy(n) {
//   let sum = 0;
//   while (n > 0) {
//     debugger;
//     let e = n % 10;
//     n = Math.floor(n / 10);
//     sum += e * e;
//     console.log('sum', sum);
//   }
//   if (sum === 1) {
//     return true;
//   } else if (sum > 1 && sum <= 4) {
//     return false;
//   }
//   return isHappy(sum);
// }

// isHappy(19);

// const singleNumber = (nums) => {
//   let hash = {};
//   nums.forEach((num) => {
//     debugger;
//     if (hash[num]) {
//       delete hash[num];
//     } else {
//       hash[num] = 1;
//     }
//   });
//   console.log("hash ==>", hash);
//   return Object.keys(hash)[0];
// };

// singleNumber([4,1,2,1,2]);

// var twoSum = function (nums, target) {
//   console.log(nums, target);
//   let i = 0;
//   let store = [];
//   while (i + 1 < nums.length) {
//     debugger;
//     if(nums[i] + nums[i+1] === target){
//       store.push(i, i+1);
//     }
//     i++;
//   }
//   return store;

// };

// twoSum([2, 7, 11, 15], 9);

// var twoSum = function (nums, target) {
//   let hash = {};
//   debugger;
//   for (let i = 0; i < nums.length; i++) {
//     debugger;
//     let wanted = target - nums[i];
//     if (nums[i] in hash) {
//       //        i = 0   1   2   3
//       // ie nums = [2, 7, 11, 15], target = 9

//       //  wanted = target - nums[0] ==> 9 - 2 = 7;
//       return [hash[nums[i]], i];
//     }
//     hash[wanted] = i;
//     // ie hash {7: = 0};
//   }

//   return null;
// };

// twoSum([2, 2, 11], 9);

// const trappingRainWater = (heights) => {
//   let left = 0;
//   let right = heights.length - 1;
//   let leftMax = 0;
//   let rightMax = 0;
//   let totalWater = 0;

//   while (left < right) {
//     debugger;
//     if (heights[left] <= heights[right]) {
//       if (leftMax < heights[left]) {
//         leftMax = heights[left];
//       } else {
//         totalWater += leftMax - heights[left];
//       }
//       left++;
//     } else if (heights[right] <= heights[left]) { 
//       if (rightMax < heights[right]) {
//         rightMax = heights[right];
//       } else {
//       totalWater += rightMax - heights[right];
//       }
//       right++;
//     } 
//   }
//   return totalWater;
// };

// const trappingRainWater = (heights) => {
//   let left = 0;
//   let right = heights.length;
//   let apex = 0;
//   let score = 0;

//   while (left < right) {
//     debugger;
//     if (heights[right] >= heights[left]) {
//       apex = heights[right];
//       score += apex - heights[left];
//       left++;
//     } else {
//       apex = heights[left];
//       score += apex - heights[right];
//       right++;
//     }
//   }
// };

// trappingRainWater([0, 1, 0, 2, 3, 1, 0, 1]);

// trappingRainWater([0,1,0,2,1,3]);

// function longestPalindrome(s) {
//   if (s.length < 0) return "";

//   let maxSubLength = 0;
//   let maxSubStart = 0;
//   for (let i = 0; i < s.length; i++) {
//     debugger;
//     console.log('s ==> ', s[i]);
//     const lengthCenteredAtChar = expand(s, i, i);
//     const lengthCenteredAtMiddle = expand(s, i, i + 1);
//     const longestSubAtChar = Math.max(
//       lengthCenteredAtChar,
//       lengthCenteredAtMiddle
//     ); // what's the (highest possible value/best) of the same scenario in two realities?
//     if (longestSubAtChar > maxSubLength) {
//       maxSubLength = longestSubAtChar;
//       maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
//     }
//   }
//   return s.substr(maxSubStart, maxSubLength);
// }

// function expand(s, left, right) {
//   debugger;
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     left--;
//     right++;
//   }
//   return right - left - 1; // the fuck? return the  distance between them, ==> calculating the length
// }

// longestPalindrome('anna');

// const isHappy = (n) => {
//   let sum = 0;
//   while (n > 1) {
//     debugger;
//     let e = Math.floor(n / 10);
//     n = n % 10;
//     sum += e * e
//   }

//   if(n === 1){
//     return true
//   } else return false;
// }

function isHappy(n) {
  let sum = 0;
  while (n > 0) {
    debugger;
    let e = n % 10;
    n = Math.floor(n / 10);
    sum += e * e;
  }
  if (sum === 1) {
    return true;
  } else if (sum > 1 && sum <= 4) {
    return false;
  }
  return isHappy(sum);
}

isHappy(19);