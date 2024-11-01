console.log("LEGGO");

// const containerWithMostWater = (heights) => {
//   let left = 0;
//   let right = heights.length - 1;
//   let maxArea = 0;

//   while(left < right){
//     // debugger;
//     let min = Math.min(heights[left], heights[right]);
//     let max = min * (right - left);

//     if(maxArea < max){
//       maxArea = max;
//     }

//     if(heights[left] < heights[right]){
//       left++
//     } else {
//       right--
//     }
//   }
//   console.log('max ==>', maxArea)
//   return maxArea;
// }

// containerWithMostWater([1,8,6,2,5,4,8,3,7]);

// const trappingRainWater = (heights) => {
//    let left = 0;
//    let right = heights.length - 1;
//    let totalWater = 0;
//    let maxLeft = 0;
//    let maxRight = 0;

//    while(left < right) {
//     if(heights[left] <= heights[right]){
//       if(maxLeft < heights[left]){
//         maxLeft = heights[left];
//       } else {
//         totalWater += maxLeft - heights[left]
//       }
//       left++;
//     } else {
//       if(maxRight < heights[right]){
//         maxRight = heights[right];
//       } else {
//         totalWater += maxRight - heights[right];
//       }
//       right--;
//     }
//    }
//    console.log(totalWater);
//    return totalWater;
// }

// trappingRainWater([0,1,0,2,1,0,1,3,2,1,2,1]);

// const subsets = (nums) => {

// let result = [];

// dfs([], 0);

// function dfs(current, index) {
//   debugger;
//   result.push(current);

//   for (let i = index; i < nums.length; i++) {
//     debugger;
//     dfs(current.concat(nums[i]), i + 1);
//   }
// }

//   return result;
// };

// subsets([1, 2, 3]);

// var lengthOfLongestSubstring = function (s) {
//   console.log("s ==>", s);
//   let set = new Set();
//   let left = 0;
//   let right = 0;
//   let maxSubstringLength = 0;

//   while(right < s.length){
//     if(set.has(s.charAt(right))){
//       set.delete(s[left]);
//       left++
//     } else {
//       set.add(s.charAt(right));
//       maxSubstringLength = Math.max(maxSubstringLength, set.size)
//       right++;
//     }
//   }
//   return maxSubstringLength
// };

// lengthOfLongestSubstring("dvdf");

// class Node {
//   constructor(value) {
//     this.left = null;
//     this.right = null;
//     this.value = value;
//   }
// }

// class BinarySearchTree {
//   constructor() {
//     this.root = null;
//   }

//   insert(value) {
//     const newNode = new Node(value);
//     if (this.root === null) {
//       this.root = newNode;
//     } else {
//       let currentNode = this.root;
//       while (true) {
//         if (value < currentNode.value) {
//           //Left
//           if (!currentNode.left) {
//             currentNode.left = newNode;
//             return this;
//           }
//           currentNode = currentNode.left;
//         } else {
//           if (value > currentNode.value) {
//             //Right
//             if (!currentNode.right) {
//               currentNode.right = newNode;
//               return this;
//             }
//             currentNode = currentNode.right;
//           }
//         }
//       }
//     }
//   }

//   lookup(value) {
//     if (!this.root) {
//       return false;
//     }
//     let currentNode = this.root;
//     while (currentNode) {
//       if (value < currentNode.value) {
//         currentNode = currentNode.left;
//       } else if (value > currentNode.value) {
//         currentNode = currentNode.right;
//       } else if (value === currentNode.value) {
//         console.log(currentNode);
//         return currentNode;
//       }
//     }
//     console.log(false);
//     return false;
//   }

//   depthFirstSearch() {
//     let result = [];
//     let stack = [this.root];
//     while (stack.length > 0) {
//       let currentNode = stack.pop();
//       if (!currentNode) {
//         return;
//       }
//       result.push(currentNode.value);
//       if (currentNode.right) stack.push(currentNode.right);
//       if (currentNode.left) stack.push(currentNode.left);
//     }
//     console.log("result ==>", result);
//     return result;
//   }

//   lowestCommonAncestor(root, p, q) {
//     debugger;
//     if (!root) return;
//     if (root.val == p.val || root.val == q.val) {
//       return root;
//     }

//     let left = lowestCommonAncestor(root.left, p, q);
//     let right = lowestCommonAncestor(root.right, p, q);

//     console.log("left ==>", left);
//     console.log("right ==>", right);

//     if (!left) return right;
//     if (!right) return left;

//     console.log("root ==>", root);

//     return root;
//   }

// inorderTraversal = function (root) {
//   let result = [];
//   let stack = [];
//   let curr = root;

//   while (curr != null || stack.length > 0) {
//     debugger;
//     while (curr != null) {
//       debugger;
//       stack.push(curr);
//       curr = curr.left;
//     }
//     curr = stack.pop();
//     result.push(curr.val);
//     curr = curr.right;
//   }
//   return result;
// };

// remove(value){
//     if (!this.root) {
//         return false;
//     }
//     let currentNode = this.root;
//     let parentNode = null;
//     while (currentNode) {
//         if (value < currentNode.value) {
//             parentNode = currentNode;
//             currentNode = currentNode.left;
//         } else if (value > currentNode.value) {
//             parentNode = currentNode;
//             currentNode = currentNode.right;
//         }
//         // We have a match, get to work

//         // Option 1: No right child:

//     }
// }
// }

// const inorderTraversal = function (root) {
//   console.log("start")
//   let result = [];
//   let stack = [];
//   let curr = root;

//   while (curr != null || stack.length > 0) {
//     debugger;
//     while (curr != null) {
//       debugger;
//       stack.push(curr);
//       curr = curr.left;
//     }
//     curr = stack.pop();
//     result.push(curr.value);
//     curr = curr.right;
//   }
//   return result;
// };

// const tree = new BinarySearchTree();
// tree.insert(9);
// tree.insert(4);
// tree.insert(6);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// tree.lookup(170);
// // tree.inorderTraversal();

// inorderTraversal(tree);

// // tree.lowestCommonAncestor(tree, 5, 1);

// console.log("tree ==>", tree);

// var subArraySumEqualsK = function (nums, k) {
//   let left = 0;
//   let right = 0;
//   let total = 0;
//   let sum = 0;

//   while (left < nums.length) {
//     debugger;
//     let currentTotal = sum + nums[right];
//     if (currentTotal === k) {
//       total++;
//       right ++;
//       sum = currentTotal;
//     } else if (currentTotal > k) {
//       sum = currentTotal;
//       sum -= nums[left];
//       left++;
//     } else if (currentTotal < k) {
//       sum += nums[right];
//       right++;
//     }
//   }
//   return total;
// };

// subArraySumEqualsK([1, 2, 3], 3);

var subarraySumOfSize = function (nums, k) {
  let left = 0;
  let right = 1;
  let maxSum = 0;
  let sum = 0;
  let i;

  for (i = 0; i < k; i++) {
    sum += nums[i];
    maxSum = sum;
  }

  for (i = k; i < nums.length; i++) {
    sum += nums[k] - nums[i - k];
    maxSum = Math.max(sum, maxSum);
  }

  return maxSum;
};

function getMaxSubarray(inputArr, subarraySize) {
  // validate input
  // assert(subarraySize > 0, "Subarray size must be positive.");

  let currentSum = 0;
  let maxSum = 0;
  let maxSumStartIndex = 0;

  // iterate entire array from left to right
  inputArr.forEach((number, index) => {
    debugger;
    // increase the window size by one from the right
    currentSum += number;

    if (index < subarraySize) {
      // continue to accumulate until we reach the desired subarray size (= max window size)
      maxSum = currentSum;
    } else {
      // we are over the max window size so remove one element from the left
      currentSum -= inputArr[index - subarraySize];

      if (currentSum > maxSum) {
        // we have a new maximum sum window so record its starting index
        maxSum = currentSum;
        maxSumStartIndex = index - subarraySize + 1;
      }
    }
  });

  return inputArr.slice(maxSumStartIndex, maxSumStartIndex + subarraySize);
}

// getMaxSubarray([-1, 2, 3, 1, -3, 2], 2);
// subarraySumOfSize([-1, 2, 3, 1, -3, 2], 2);

function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    debugger;
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}

// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     "araaci",
//     2
//   )}`
// );
// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     "araaci",
//     1
//   )}`
// );
// console.log(
//   `Length of the longest substring: ${longest_substring_with_k_distinct(
//     "cbbebi",
//     3
//   )}`
// );

// const max_sub_array_of_size_k = function (k, arr) {
//   let max = 0,
//     start = 0,
//     end = 0,
//     sum = 0;

//   while (end < arr.length) {
//     debugger;
//     sum += arr[end];
//     if (end >= k - 1) {
//       max = Math.max(max, sum);
//       sum -= arr[start];
//       start++;
//     }
//     end++;
//   }
//   return max;
// };

// max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2]);

const smallestSubarrayWithSumGreaterThanOrEqualToK = function (k, arr) {
  let min = Infinity,
    start = 0,
    end = 0,
    sum = 0;

  while (end < arr.length) {
    debugger;
    sum += arr[end];
    while (sum >= k) {
      min = Math.min(min, end - start + 1);
      sum -= arr[start];
      start++;
    }
    end++;
  }
  return min;
};

// smallestSubarrayWithSumGreaterThanOrEqualToK(7, [2, 1, 5, 2, 3, 2]);

const longestSubstringWithKDistinctCharacters = function (k, str) {
  let store = {};
  let start = 0;
  let max = 0;

  for (let end = 0; end < str.length; end++) {
    debugger;
    if (!store[str[end]]) {
      store[str[end]] = 0;
    }
    store[str[end]] += 1;
    while (Object.keys(store).length > k) {
      let leftChar = str[start];
      store[leftChar] -= 1;
      if (store[leftChar] === 0) {
        delete store[leftChar];
      }
      start++;
    }
    max = Math.max(max, end - start + 1);
  }
  return max;
};

// longestSubstringWithKDistinctCharacters(2, "araaci");

const fruits_into_baskets = function (str) {
  let store = {};
  let start = 0;
  let maxLen = 0;

  for (let end = 0; end < str.length; end++) {
    debugger;
    if (!store[str[end]]) store[str[end]] = 0;
    store[str[end]] += 1;
    while (Object.keys(store).length > 2) {
      let left = str[start];
      store[left] -= 1;
      if (store[left] === 0) delete store[left];
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};

// fruits_into_baskets(["A", "B", "C", "B", "B", "C"]);

const non_repeat_substring = function (str) {
  // Longest substring with repeating characters
  let hash = new Set();
  let start = 0;
  let max = 0;

  for (let end = 0; end < str.length; end++) {
    debugger;
    while (hash.has(str[end])) {
      max = Math.max(max, hash.size);
      let left = str[start];
      hash.delete(left);
      start++;
    }
    hash.add(str[end]);
  }
  return max;
};

// non_repeat_substring("abccde");
// "aabccbb" ==> "abc" ==> 3
// "abbbb" ==> "ab" ==> 2
// "abccde" ==> "abc" and "cde" ==> 3

const length_of_longest_substring = function (str, k) {
  // TODO: Write your code here
  let start = 0;
  let max = 0;
  let maxRepeatingString = 0;
  let map = {};

  for (let end = 0; end < str.length; end++) {
    debugger;
    //Store each character in a map against the count/frequency
    // map = map.set(str[end], (map.get(str[end]) || 0) + 1);
    if (!map[str[end]]) {
      map[str[end]] = 0;
    }
    map[str[end]] += 1;

    // Save the maximum repeating count
    maxRepeatingString = Math.max(maxRepeatingString, map[str[end]]);

    // If subarray contains more than k replacements, shrink window
    // if (end - start + 1 - maxRepeatingString > k) {
    //   start++;
    // }

    // Save the max subarray
    // max = Math.max(max, end - start + 1);
  }
  return max;
};

// length_of_longest_substring("aabccbb", 2);
function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";
  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    debugger;
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
    }
  }
  return prefix;
}

// longestCommonPrefix(["flower","flow","flight"]);

function remove_duplicates(arr) {
  let nextNonDuplicateElement = 1;
  for (let i = 0; i < arr.length; i++) {
    debugger;
    // const element = arr[i];
    if (arr[nextNonDuplicateElement - 1] != arr[i]) {
      arr[nextNonDuplicateElement] = arr[i];
      nextNonDuplicateElement++;
    }
  }
  return nextNonDuplicateElement;
}

function remove_duplicates(arr) {
  let left = 0;
  for (let right = 1; right < arr.length; right++) {
    debugger;
    if (left == 0 || arr[left] !== arr[right]) {
      left++;
    }
  }
  return left;
}

// console.log(remove_duplicates([2, 3, 3, 3, 6, 9, 9]));
// console.log(remove_duplicates([2, 2, 2, 11]));

// const make_squares = function (arr) {
//   let squares = Array(arr.length).fill(0);
//   let pointer = arr.length - 1;
//   let left = 0,
//     right = arr.length - 1;

//   while (left <= right) {
//     debugger;
//     let maxLe = arr[left] * arr[left],
//       maxRi = arr[right] * arr[right];

//     if (maxLe > maxRi) {
//       squares[pointer] = maxLe;
//     } else {
//       squares[pointer] = maxRi;
//     }
//     pointer -= 1;
//   }
//   return squares;
// };

function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  let triplets = [];

  for (let i = 0; i < arr.length; i++) {
    debugger;
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    searchPair(arr, i + 1, -arr[i], triplets);
  }
}

function searchPair(arr, left, targetSum, triplets) {
  let right = arr.length - 1;
  while (left < right) {
    debugger;
    let currentSum = arr[left] + arr[right];
    if (currentSum === targetSum) {
      triplets.push([-targetSum, arr[left], arr[right]]);
      left += 1;
      right -= 1;
      while (left < right && arr[left] === arr[left - 1]) {
        left += 1; // skip same element to avoid duplicate triplets
      }
      while (left < right && arr[right] === arr[right + 1]) {
        right -= 1; // skip same element to avoid duplicate triplets
      }
    } else if (targetSum > currentSum) {
      left += 1; // we need a pair with a bigger sum
    } else {
      right -= 1; // we need a pair with a smaller sum
    }
  }
}

// search_triplets([-3, 0, 1, 2, -1, 1, -2]);

// const triplet_sum_close_to_target = function (arr, target_sum) {
//   arr.sort((a, b) => a - b);
//   let closest = Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     // const element = array[i];
//     let left = i + 1,
//       right = arr.length - 1;
//     while (left < right) {
//       let currentDifference = arr[i] + arr[left] + arr[right];
//       if (currentDifference === target_sum) {
//         return target_sum;
//       }
//       if (Math.abs(currentDifference) < Math.abs(closest)) {
//         closest = currentDifference;
//       }
//       if (currentDifference > target_sum) {
//         right--;
//       } else {
//         left++;
//       }
//     }
//   }
//   return target_sum - closest;
// };

// triplet_sum_close_to_target([-2, 0, 1, 2], 2);

// const triplet_with_smaller_sum = function (arr, target) {
//   // Given a target sum, count all triplets in it where the sum is less than targetSum
//   arr.sort((a, b) => a - b);
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let right = arr.length - 1;
//     let left = i + 1;
//     while (left < right) {
//       let currentSum = arr[i] + arr[left] + arr[right];
//       if (currentSum < target) {
//         count += right - left;
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }
//   return count;
// };

// triplet_with_smaller_sum([-1, 0, 2, 3], 3);

// const search_triplets = function (arr) {
//   // Find all unique triplets that add up to zero!
//   arr.sort((a, b) => a - b);
//   let triplets = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i > 0 && arr[i] === arr[i - 1]) {
//       continue;
//     }
//     search(-arr[i], i + 1, triplets);
//   }
//   return triplets;
// };

// const search = (targetSum, left, triplets) => {
//   let right = arr.length - 1;
//   while (left < right) {
//     let toFind = arr[left] + arr[right];
//     if (toFind === targetSum) {
//       triplets.push([-targetSum, arr[left], arr[right]]);
//       left++;
//       right--;
//       while (arr[left] === arr[left - 1]) {
//         left++;
//       }
//       while (arr[right] === arr[right + 1]) {
//         right--;
//       }
//     } else if (toFind < targetSum) {
//       left++;
//     } else {
//       right++;
//     }
//   }
// };

// function search_triplets(arr) {
//   arr.sort((a, b) => a - b);
//   let triplets = [];

//   for (let i = 0; i < arr.length; i++) {
//     searchPair(arr, i + 1, -arr[i], triplets);
//   }
//   return triplets;
// }

// function searchPair(arr, left, targetSum, triplets) {
//   let right = arr.length - 1;

//   while (left <= right) {
//     let target = arr[left] + arr[right];
//     if(target === targetSum){
//       triplets.push([arr[left], arr[right], arr[i]]);
//     }
//     if(target > targetSum){
//       right--;
//     }
//     if(target < targetSum){
//       left++;
//     }
//   }
// }

// const triplet_sum_close_to_target = function (arr, targetSum) {
//   arr.sort((a, b) => a - b);
//   let closest = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     let left = i + 1,
//       right = arr.length - 1;

//     while (left < right) {
//       let currentDiff = arr[i] + arr[left] + arr[right];

//       if (Math.abs(targetSum - currentDiff) < Math.abs(targetSum - closest)) {
//         closest = currentDiff;
//       }

//       if (currentDiff < targetSum) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }
//   return closest;
// };

// triplet_sum_close_to_target([-2, 0, 1, 2], 2);

function search_triplets(arr) {
  arr.sort((a, b) => a - b);
  let triplets = [];

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let left = i + 1,
      right = arr.length - 1;

    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right];
      if (currentSum === 0) {
        triplets.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        while (arr[left] === arr[left - 1]) {
          left++;
        }
        while (arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (currentSum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
}

// console.log(search_triplets([-3, 0, 1, 2, -1, 1, -2]));
// console.log(search_triplets([-5, 2, -1, -2, 3]));

const triplet_sum_close_to_target = function (arr, targetSum) {
  arr.sort((a, b) => a - b);
  let closest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    let left = i + 1,
      right = arr.length - 1;

    while (left < right) {
      let currentSum = arr[i] + arr[left] + arr[right];

      if (Math.abs(targetSum - currentSum) < Math.abs(targetSum - closest)) {
        closest = currentSum;
      }

      if (currentSum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closest;
};

// triplet_sum_close_to_target([-2, 0, 1, 2], 2);

const triplet_with_smaller_sum = function (arr, target) {
  // Given a target sum, count all triplets in it where the sum is less than targetSum
  arr.sort((a, b) => a - b);
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    debugger;
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum < target) {
        count += right - left;
        left++;
      } else {
        right--;
      }
    }
  }
  return count;
};

// triplet_with_smaller_sum([-1, 0, 2, 3], 3);

function find_subarrays(arr, target) {
  let result = [];
  let product = 1;
  let left = 0;
  let count = 0;
  for (let right = 0; right < arr.length; right++) {
    product *= arr[right];
    while (product >= target && left <= right) {
      product /= arr[left];
      left++;
    }
    if (product < target) {
      count += right - left + 1;
    }
  }
  return count;
}

// console.log(find_subarrays([2, 5, 3, 10], 30));
// console.log(find_subarrays([8, 2, 6, 5], 50));

const dutch_flag_sort = function (arr) {
  let low = 0,
    high = arr.length - 1,
    i = 0;
  while (i <= high) {
    let num = arr[i];
    debugger;
    if (num === 0) {
      // [arr[i], arr[low]] = [arr[low], arr[i]]; // swap
      arr[i] = arr[low];
      arr[low] = num;
      // increment 'i' and 'low'
      i += 1;
      low += 1;
    } else if (arr[i] === 1) {
      i += 1;
    } else {
      // the case for arr[i] === 2
      // [arr[i], arr[high]] = [arr[high], arr[i]]; // swap
      arr[i] = arr[high];
      arr[high] = num;
      // decrement 'high' only, after the swap the number at index 'i' could be 0, 1, or 2
      high -= 1;
    }
  }
};

let arr = [1, 0, 2, 1, 0];
// dutch_flag_sort(arr);

const check = (str, pointer) => {
  let count = 0;
  while (pointer >= 0) {
    debugger;
    if (str[pointer] === "#") {
      count++;
    } else if (count > 0) {
      count -= 1;
    } else {
      break;
    }
    pointer--;
  }
  return pointer;
};

function backspace_compare(str1, str2) {
  let pointerOne = str1.length - 1;
  let pointerTwo = str2.length - 1;
  // debugger;
  while (pointerOne >= 0 || pointerTwo >= 0) {
    let normalIndex = check(str1, pointerOne);
    let normalIndex2 = check(str2, pointerTwo);
    if (normalIndex < 0 && normalIndex2 < 0) {
      return true;
    }
    if (normalIndex < 0 || normalIndex2 < 0) {
      return false;
    }
    if (str1[normalIndex] !== str2[normalIndex2]) {
      return false;
    }
    pointerOne = normalIndex - 1;
    pointerTwo = normalIndex2 - 1;
  }

  return true;
}

var removeDuplicates = function (nums) {
  let left = 1,
    right = 0;

  while (right < nums.length) {
    debugger;
    if (nums[left - 1] !== nums[right]) {
      nums[left] = nums[right];
      left++;
    }
    right++;
  }
  return left;
};

// removeDuplicates([2, 3, 3, 3, 6, 9, 9]);

const makeSquares = function (arr) {
  let fresh = new Array(arr.length).fill(0);
  let left = 0,
    right = arr.length - 1,
    count = arr.length - 1;

  while (left <= right) {
    debugger;
    let leftSquare = arr[left] ** 2;
    let rightSquare = arr[right] ** 2;
    if (leftSquare > rightSquare) {
      fresh[count] = leftSquare;
      left++;
    } else {
      fresh[count] = rightSquare;
      right--;
    }
    count--;

    // else if(leftSquare === rightSquare) {
    //   fresh[count] = leftSquare;
    //   count--;
    //   left++;
    //   right--;
    // }
  }
  return fresh;
};

// makeSquares([-4, -1, 0, 3, 10]);

const tripletSumToZero = (arr) => {
  let triplets = [];
  // let backCount = arr.length - 1;
  for (let runner = 0; runner < arr.length; runner++) {
    if (arr[runner] === arr[runner - 1]) {
      // skip same element to avoid duplicate triplets
      continue;
    }
    debugger;
    let left = runner + 1,
      right = arr.length - 1;
    while (left < right) {
      let sum = arr[runner] + arr[left] + arr[right];
      if (sum === 0) {
        triplets.push([arr[runner], arr[left], arr[right]]);
        left++;
        right--;
        while (arr[left] === arr[left - 1]) {
          left++;
        }
        while (arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return triplets;
};

// tripletSumToZero([-3, 0, 1, 2, -1, 1, -2]);

const tripletsWithSmallerSum = (arr, target) => {
  arr.sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    debugger;
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum < target) {
        count += right - left;
        left++;
      } else if (sum > target) {
        right--;
      } else {
        right--;
        left++;
      }
    }
  }
  return count;
};

// tripletsWithSmallerSum([-1, 0, 2, 3], 3);

var trap = function (height) {
  let maxRight = 0;
  let maxLeft = 0;
  let right = height.length - 1;
  let left = 0;
  let totalWater = 0;

  while (left < right) {
    let currentLeft = height[left];
    let currentRight = height[right];
    debugger;
    if (currentLeft < currentRight) {
      if (maxLeft < currentLeft) {
        maxLeft = currentLeft;
      } else {
        totalWater += maxLeft - currentLeft;
      }
      left++;
    } else {
      if (maxRight < currentRight) {
        maxRight = currentRight;
      } else {
        totalWater += maxRight - currentRight;
      }
      right--;
    }
  }
  return totalWater;
};

// trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);

var numSubarrayProductLessThanK = function (arr, target) {
  let left = 0,
    count = 0,
    product = 1;

  for (let right = 0; right < arr.length; right++) {
    debugger;
    product *= arr[right];
    while (product >= target) {
      product /= arr[left];
      left++;
    }
    if (product < target) {
      let currRight = right;
      let currLeft = left;
      console.log(currLeft, currRight);
      console.log("ehfjlhe ===>", currRight - currLeft + 1);
      count += currRight - currLeft + 1;
    }
  }
};

// numSubarrayProductLessThanK([10, 5, 2, 6], 100);

const smallestSubarraySum = function (s, arr) {
  let left = 0;
  let minLen = Infinity;
  let sum = 0;
  let length = 0;
  for (let right = 0; right < arr.length; right++) {
    debugger;
    sum += arr[right];
    while (sum >= s) {
      length = right - left + 1;
      if (length < minLen) {
        minLen = length;
      }
      sum -= arr[left];
      left++;
    }
  }
  return minLen;
};

// smallestSubarraySum(7, [2, 1, 5, 2, 3, 2]);

// var lengthOfLongestSubstring = function (s) {
//   let left = 0,
//     right = 0,
//     hash = {},
//     len = 0,
//     maxLen = 0;

//   while (right < s.length) {
//     debugger;
//     if (s[right] in hash) {
//       delete hash[s[left]];
//       left++;
//     } else {
//       hash[s[right]] = s[right];
//       len = right - left + 1;
//       maxLen = Math.max(len, maxLen);
//       right++;
//     }
//   }
//   return maxLen;
// };

// lengthOfLongestSubstring("pwwkew");

var intersection = function (nums1, nums2) {
  let hash = {};

  nums1.forEach((n) => {
    debugger;
    let mutant = nums2.find((m) => m === n);
    if (mutant !== undefined) {
      hash[n] = n;
    }
  });
  return Object.keys(hash);
};

// intersection([1, 2, 2, 1], [2, 2]);

var subarraySum = function (nums, k) {
  let count = 0,
    left = 0,
    right = 0,
    sum = 0;

  while (right < nums.length) {
    debugger;
    sum += nums[right];
    if (sum === k) {
      count++;
      sum -= nums[left];
      left++;
      right++;
    } else if (sum > k) {
      sum -= nums[left];
      left++;
    } else if (sum < k) {
      right++;
    }
  }
  return count;
};

// subarraySum([1, 2, 1, 2, 1], 3);
// subarraySum([1, 2, 3], 3);

var findMedianSortedArrays = function (nums1, nums2) {
  var merged = [];
  while (nums1.length && nums2.length) {
    debugger;
    merged.push(nums1[0] > nums2[0] ? nums2.shift() : nums1.shift());
  }
  if (nums1.length) merged.push(...nums1);
  if (nums2.length) merged.push(...nums2);
  var length = merged.length;

  if (length % 2) {
    return merged[Math.floor(length / 2)];
  }
  return (merged[length / 2 - 1] + merged[length / 2]) / 2;
};

// findMedianSortedArrays([1, 3], [2]);

var threeSum = function (arr) {
  let triplets = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    debugger;
    if (i > 0 && arr[i] === arr[i - 1]) {
      continue;
    }
    let left = i + 1,
      right = arr.length - 1;
    while (left < right) {
      let sum = arr[i] + arr[left] + arr[right];
      if (sum === 0) {
        triplets.push([arr[i], arr[left], arr[right]]);
        left++;
        right--;
        while (arr[left] === arr[left - 1]) {
          left++;
        }
        while (arr[right] === arr[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return triplets;
};

// threeSum([-2, 0, 1, 1, 2]);

var subarraySum = function (nums, k) {
  let count = 0,
    right = 0,
    left = 0,
    sum = 0;

  while (right <= nums.length && left <= right) {
    debugger;
    sum += nums[right];
    if (sum === k) {
      count++;
      sum -= nums[left];
      right++;
      left++;
    } else if (sum < k) {
      right++;
    } else if (sum > k) {
      sum -= nums[left];
      left++;
    }
    // sum += nums[right];
  }
  return count;
};

// let count = 0,
// left = 0,
// right = 0,
// sum = 0;

// while (right < nums.length) {
// debugger;
// sum += nums[right];
// if (sum === k) {
//   count++;
//   sum -= nums[left];
//   left++;
//   right++;
// } else if (sum > k) {
//   sum -= nums[left];
//   left++;
// } else if (sum < k) {
//   right++;
// }
// }
// return count;

// subarraySum([1, 2, 3], 3);
// subarraySum([1, 2, 1, 2, 1], 3);

function findSubarraySum(arr, sum) {
  let prevSum = new Map();
  let res = 0;

  let currSum = 0;
  for (let i = 0; i < arr.length; i++) {
    debugger;
    currSum += arr[i];

    if (currSum == sum) res++;

    let diff = currSum - sum;

    if (prevSum.has(diff)) res += prevSum.get(diff);

    // Add currSum value to count of
    // different values of sum.
    let count = prevSum.get(currSum);
    if (count == null) prevSum.set(currSum, 1);
    else prevSum.set(currSum, count + 1);
  }
  return res;
}

// findSubarraySum([10, 2, -2, -20, 10], -10);

var searchRange = function (nums, target) {
  let start = 0,
    end = nums.length - 1,
    mid,
    array = [];
  while (start <= end) {
    debugger;
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) {
      array.push(mid);
    }
    if (target >= nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return array;
};

// searchRange([5, 7, 7, 8, 8, 10], 8);

function find_range(arr, key) {
  result = [-1, -1];
  result[0] = binary_search(arr, key, false);
  if (result[0] !== -1) {
    // no need to search, if 'key' is not present in the input array
    result[1] = binary_search(arr, key, true);
  }

  return result;
}

// modified Binary Search
function binary_search(arr, key, findMaxIndex) {
  let keyIndex = -1;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    debugger;
    mid = Math.floor(start + (end - start) / 2);
    if (key < arr[mid]) {
      end = mid - 1;
    } else if (key > arr[mid]) {
      start = mid + 1;
    } else {
      // key === arr[mid]
      keyIndex = mid;
      if (findMaxIndex) {
        start = mid + 1; // search ahead to find the last index of 'key'
      } else {
        end = mid - 1; // search behind to find the first index of 'key'
      }
    }
  }

  return keyIndex;
}

// find_range([4, 6, 6, 6, 9], 6);
// console.log(find_range([1, 3, 8, 10, 15], 10));
// console.log(find_range([1, 3, 8, 10, 15], 12));

// currsum exceeds given sum by currsum
//  - sum. Find number of subarrays having
// this sum and exclude those subarrays
// from currsum by increasing count by
// same amount.

// function backspace_compare(str1, str2) {
//   // use two pointer approach to compare the strings
//   let index1 = str1.length - 1,
//     index2 = str2.length - 1;
//   while (index1 >= 0 || index2 >= 0) {
//     debugger;
//     let i1 = testCharForHash(str1, index1),
//       i2 = testCharForHash(str2, index2);
//     if (i1 < 0 && i2 < 0) {
//       // reached the end of both the strings
//       return true;
//     }
//     if (i1 < 0 || i2 < 0) {
//       // reached the end of one of the strings
//       return false;
//     }
//     if (str1[i1] !== str2[i2]) {
//       // check if the characters are equal
//       return false;
//     }

//     index1 = i1 - 1;
//     index2 = i2 - 1;
//   }
//   return true;
// }

// function testCharForHash(str, index) {
//   let backspaceCount = 0;
//   while (index >= 0) {
//     debugger;
//     if (str[index] === "#") {
//       // found a backspace character
//       backspaceCount += 1;
//     } else if (backspaceCount > 0) {
//       // a non-backspace character
//       backspaceCount -= 1;
//     } else {
//       break;
//     }

//     index -= 1; // skip a backspace or a valid character
//   }

//   return index;
// }

// backspace_compare("xy#z", "xzz#");
// backspace_compare("xy#z", "xyz#");
// backspace_compare("xp#", "xyz##");
// backspace_compare("xywrrmp", "xywrrmu#p");

// const binarySearch = function (arr, key) {
//   // TODO: Write your code here
//   let start = 0,
//     end = arr.length - 1,
//     mid,
//     isAscending = arr[0] < arr[arr.length - 1];
//   while (start <= end) {
//     debugger;
//     mid = start + Math.floor((end - start) / 2);
//     if (key === arr[mid]) {
//       return mid;
//     }
//     if (isAscending) {
//       if (key > arr[mid]) {
//         start = mid + 1;
//       } else {
//         end = mid - 1;
//       }
//     } else {
//       if (key > arr[mid]) {
//         end = mid - 1;
//       } else {
//         start = mid + 1;
//       }
//     }
//   }
//   return -1;
// };

// binarySearch([1, 2, 3, 4, 5, 6, 7], 5);

var search = function (nums, target) {
  let start = 0,
    end = nums.length - 1,
    mid;
  while (start <= end) {
    debugger;
    mid = start + Math.floor((end - start) / 2);
    if (nums[mid] === target) return mid;

    if (nums[start] <= nums[mid]) {
      if (nums[start] <= target && target <= nums[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] <= target && target <= nums[end]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return -1;
};

// search([4, 5, 6, 7, 0, 1, 2], 0);

const findNextNonDuplicate = function (arr) {
  let nextNonDuplicate = 1;
  let i = 0;

  while (i < arr.length) {
    debugger;
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate++;
    }
    i++;
  }
  return nextNonDuplicate;
};

// findNextNonDuplicate([2, 3, 3, 3, 6, 9, 9]);

var twoSum = function (nums, target) {
  let hash = {};
  for (let i = 0; i < nums.length; i++) {
    debugger;
    let remainder = target - nums[i];
    if (remainder in hash) {
      return [i, hash[remainder]];
    } else {
      hash[remainder] = i;
    }
  }
  return [-1, -1];
};

// twoSum([2, 7, 11, 15], 9);

// var lengthOfLongestSubstring = function (s) {
//   let store = new Set();
//   let start = 0;
//   let end = 0;
//   let max = 0;

//   while (end < s.length) {
//     debugger;
//     if (!store.has(s[end])) {
//       store.add(s[end]);
//       end++;
//     } else {
//       max = Math.max(max, store.size);
//       store.delete(s[start]);
//       start++;
//     }
//   }
//   return max;
// };

// lengthOfLongestSubstring("abcabcbb");

function longestPalindrome(s) {
  if (s.length < 1) return "";
  let maxSubStart = 0;
  let maxSubLength = 0;
  for (let i = 0; i < s.length; i++) {
    debugger;
    const oddPalindrome = expandAroundCenter(s, i, i);
    const evenPalindrome = expandAroundCenter(s, i, i + 1);
    const longestSubAtChar = Math.max(oddPalindrome, evenPalindrome);
    if (longestSubAtChar > maxSubLength) {
      maxSubLength = longestSubAtChar;
      maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
    }
  }
  return s.substr(maxSubStart, maxSubLength);
}

function expandAroundCenter(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    debugger;
    left--;
    right++;
  }
  console.log("left ==>", left);
  console.log("RIGHT ==>", right);
  return right - left - 1;
}

// longestPalindrome("babad");

var reverse = function (x) {
  let sum = 0;
  const isNegative = x < 0;
  x = Math.abs(x);
  while (x !== 0) {
    debugger;
    sum = sum * 10 + (x % 10);

    if (sum > Math.pow(2, 31) - 1 || sum < -Math.pow(2, 31)) {
      return 0;
    }
    x = Math.floor(Math.abs(x) / 10);
  }
  return isNegative ? -sum : sum;
};

// reverse(123);

var isValid = (s) => {
  let store = {
    "[": "]",
    "{": "}",
    "(": ")",
  };

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    debugger;
    let current = s[i];
    if (current === ")" || current === "]" || current === "}") {
      let prev = stack.pop();
      if (store[prev] === current) {
        continue;
      } else {
        return false;
      }
    } else {
      stack.push(current);
    }
  }
  return stack.length > 0 ? false : true;
};

// isValid("(]");

var searchRange = function (nums, target) {
  let result = [-1, -1];
  result[0] = binarySearch(nums, target, false);
  if (result[0] !== -1) {
    result[1] = binarySearch(nums, target, true);
  }
  return result;
};

const binarySearch = (nums, target, findEnd) => {
  let start = 0,
    end = nums.length - 1,
    mid,
    keyIndex;
  while (start <= end) {
    debugger;
    mid = start + Math.floor((end - start) / 2);
    if (target === nums[mid]) {
      keyIndex = mid;
      if (findEnd) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return keyIndex;
};

// searchRange([5, 7, 7, 8, 8, 10], 8);

// const solution = (word) => {
//   let map = {};

//   for (let i = 0; i < word.length; i++) {
//     debugger;
//     let char = word[i];
//     map[char] = (map[char] || 0) + 1;
//   }

//   let uniqueChars = Object.keys(map);

//   console.log("uniqueChars ==><", uniqueChars);

//   uniqueChars.sort((a, b) => {
//     debugger;
//     console.log("a", a);
//     console.log("b", b);
//     if (map[a] > map[b]) return -1;
//     else if (map[a] < map[b]) return 1;
//     else {
//       if (a < b) return -1;
//       else return 1;
//     }
//   });
//   return uniqueChars.join("");
// };

// solution("bloomberg");

let groupAnagrams = (strs) => {
  let sortedStr = strs.map((word) => word.split("").sort().join(""));
  let hash = {};

  for (let i = 0; i < strs.length; i++) {
    debugger;
    if (!hash[sortedStr[i]]) {
      hash[sortedStr[i]] = [strs[i]];
    } else {
      hash[sortedStr[i]].push(strs[i]);
    }
  }
  return Object.values(hash);
};

// groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];
  for (let interval of intervals) {
  }
  return result;
};

// merge([
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ]);

var maxSlidingWindow = function (nums, k) {
  let windowStart = 0;
  let resultArr = [];
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    debugger;
    if (windowEnd - windowStart + 1 >= k) {
      resultArr.push(Math.max(...nums.slice(windowStart, windowEnd + 1)));
      windowStart++;
    }
  }
  return resultArr;
};

// maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);

var maxSlidingWindow = function (nums, k) {
  let windowStart = 0;
  let result = [];

  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    if (windowEnd - windowStart + 1 >= k) {
      result.push(Math.max(...nums.slice(windowStart, windowEnd + 1)));
      windowStart++;
    }
  }
  return result;
};

const bestTimeToBuyAndSellStock = (prices) => {
  let profit = 0;
  let sellIdx = prices.length - 1;

  for (let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
    debugger;
    let buyVal = prices[buyIdx];
    let sellVal = prices[sellIdx];

    if (buyVal - sellVal >= 0) {
      sellIdx = buyIdx;
    } else {
      let price = sellVal - buyVal;
      profit = Math.max(profit, price);
    }
  }
  return profit;
};

// bestTimeToBuyAndSellStock([7, 1, 5, 3, 6, 4]);

var subarraySum = function (nums, k) {
  let sum = 0,
    res = 0,
    store = new Map();

  for (let i = 0; i < nums.length; i++) {
    debugger;
    sum += nums[i];
    if (sum === k) res++;
    if (store.has(sum - k)) res += store.get(sum - k);
    let count = store.get(sum);
    if (!count) store.set(sum, 1);
    else store.set(sum, count + 1);
  }
  return res;
};

// subarraySum([1, 1, 1], 2);

var longestOnes = function (nums, k) {
  let max = 0;
  let start = 0,
    end = 0,
    zeroes = 0;
  for (let end = 0; end < nums.length; end++) {
    debugger;
    if (nums[end] === 0) {
      zeroes++;
    }
    while (zeroes > k) {
      if (nums[start] === 0) {
        zeroes--;
      }
      start++;
    }
    max = Math.max(max, end - start + 1);
  }
  return max;
};

// longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2);

var characterReplacement = function (s, k) {
  let maxLen = 0;
  let start = 0,
    end = 0,
    zeroes = 0;
  let stack = [s[0]];
  for (let end = 0; end < s.length; end++) {
    debugger;
    if (s[end] !== stack[0]) {
      zeroes++;
    }
    while (zeroes > k) {
      if (s[start] !== stack[0]) {
        zeroes--;
      }
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};

// characterReplacement("AABABBA", 1);

function lengthOfLongestSubstring(str, k) {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  // Try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    debugger;
    const rightChar = str[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;

    maxRepeatLetterCount = Math.max(
      maxRepeatLetterCount,
      frequencyMap[rightChar]
    );

    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      leftChar = str[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart += 1;
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

// lengthOfLongestSubstring("aabccbb", 2);

function findPermutation(str, pattern) {
  let windowStart = 0,
    matched = 0,
    charFrequency = {};

  for (i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  // Our goal is to match all the characters from the 'charFrequency' with the current window
  // try to extend the range [windowStart, windowEnd]
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    debugger;
    const rightChar = str[windowEnd];
    if (rightChar in charFrequency) {
      // Decrement the frequency of matched character
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] === 0) {
        matched += 1;
      }
    }

    if (matched === Object.keys(charFrequency).length) {
      return true;
    }

    // Shrink the sliding window
    if (windowEnd >= pattern.length - 1) {
      leftChar = str[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }
  return false;
}

// findPermutation("oidbcaf", "abc");

var moveZeroes = function (nums) {
  // let left = 0;
  // let curr;

  // for (let right = 0; right < nums.length; right++) {
  //   debugger;
  //   if (nums[right] !== 0) {
  //     let numLeft = nums[left];
  //     nums[left] = nums[right];
  //     nums[right] = numLeft;
  //     left++;
  //   }
  // }
  // return nums;

  let writePointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    debugger;
    const val = nums[readPointer];
    nums[readPointer] = 0;
    if (val !== 0) {
      nums[writePointer] = val;
      writePointer++;
    }
  }
};

// moveZeroes([1, 0]);

var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let start = 0;
  let max = 0;
  let end = 0;

  while (end < s.length) {
    debugger;
    let rightChar = s[end];
    let leftChar = s[start];
    if (set.has(rightChar)) {
      max = Math.max(max, set.size);
      set.delete(leftChar);
      start++;
    } else {
      set.add(rightChar);
      end++;
    }
  }
  return max;
};

// lengthOfLongestSubstring("pwwkew");

var characterReplacement = function (s, k) {
  let start = 0;
  let maxLen = 0;
  let maxChar = 0;
  let hash = {};

  for (let end = 0; end < s.length; end++) {
    debugger;
    let rightChar = s[end];
    if (rightChar in hash) {
      hash[rightChar]++;
    } else {
      hash[rightChar] = 1;
    }

    maxChar = Math.max(maxChar, hash[rightChar]);

    if (end - start + 1 - maxChar > k) {
      let leftChar = s[start];
      hash[leftChar]--;
      start++;
    }
    maxLen = Math.max(maxLen, end - start + 1);
  }
  return maxLen;
};

// characterReplacement("aabccbb", 2);

var twoSum = function (nums, target) {
  let hash = {};
  let start = 0;

  while (start <= nums.length) {
    debugger;
    let current = nums[start];
    let toFind = target - current;
    if (current in hash) {
      return [hash[current], start];
    } else {
      hash[toFind] = start;
    }
    start++;
  }
};

// twoSum([2, 7, 11, 15], 9);

var threeSum = function (arr) {};

var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let result = [intervals[0]];
  for (let interval of intervals) {
    debugger;
    console.log("interval ===>", interval);
    console.log("result ===>", result);
    let e1 = result[result.length - 1][1];
    let e2 = interval[1];
    let s2 = interval[0];
    if (e1 >= s2) {
      result[result.length - 1][1] = Math.max(e1, e2);
    } else {
      result.push(interval);
    }
  }
  return result;
};

// merge([
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ]);

// const solution = (word) => {
//   let map = {}; // O(1)

//   // O(N)
//   for (let i = 0; i < word.length; i++) {
//     let char = word[i]; // O(1)
//     map[char] = (map[char] || 0) + 1; // O(1)
//   }

//   let uniqueChars = Object.keys(map); // O(1)?

//   console.log("uniqueChars ==><", uniqueChars);
//   console.log("uniqueChars ==><", map);

//   // O(NLogN)
//   uniqueChars.sort((a, b) => {
//     debugger;
//     console.log("a", a);
//     console.log("b", b);
//     if (map[a] > map[b]) return -1;
//     else if (map[a] < map[b]) return 1;
//     else {
//       if (a < b) return -1;
//       else return 1;
//     }
//   });

//   console.log("JAYE ==>", uniqueChars.join(""));
//   return uniqueChars.join("");
// };

// solution("bloomberg");

function cyclic_sort(nums) {
  let i = 0;
  while (i < nums.length) {
    debugger;
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  return nums;
}

// cyclic_sort([3, 1, 5, 4, 2]);

var findDuplicates = function (nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    debugger;
    let position = Math.abs(nums[i]) - 1;
    if (String(nums[position])[0] === "-") {
      result.push(Math.abs(nums[i]));
    } else {
      nums[position] = -nums[position];
    }
  }
  return result;
};

// findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);

const solution = (word) => {
  let map = {}; // O(1)

  // to improve time complexity, we can use a hash map to store the count of each character
  // O(N)
  for (let i = 0; i < word.length; i++) {
    let char = word[i]; // O(1)
    map[char] = (map[char] || 0) + 1; // O(1)
  }

  let uniqueChars = Object.keys(map); // O(1)?

  console.log("uniqueChars ==><", uniqueChars);
  console.log("uniqueChars ==><", map);

  // O(NLogN)
  uniqueChars.sort((a, b) => {
    debugger;

    if (map[a] > map[b]) return -1;
    else if (map[a] < map[b]) return 1;
    else {
      if (a < b) return -1;
      else return 1;
    }
  });

  console.log("JAYE ==>", uniqueChars.join(""));
  return uniqueChars.join("");
};

// solution("bloomberg");

// Initialize the dictionary
let dict = {};

const len = [
  "",
  "a",
  "b",
  "c",
  "d",
  "e",
  "dd",
  "f",
  "g",
  "ff",
  "ng",
  "h",
  "ch",
  "i",
  "j",
  "l",
  "ll",
  "m",
  "n",
  "o",
  "ph",
  "p",
  "r",
  "rh",
  "s",
  "t",
  "th",
  "u",
  "w",
  "y",
];

for (let i = 0; i < len.length; i++) {
  dict[len[i]] = i;
}

// Helper for welsh sort
const welshHelper = (a, b) => {
  if (a === b) return 0;

  // Get the first two letters if they're valid alphabets
  // else, use the first letter as usual
  // Do this for both words to be compared
  // debugger;
  const first = a.slice(0, 2) in dict ? a.slice(0, 2) : a[0];
  const second = b.slice(0, 2) in dict ? b.slice(0, 2) : b[0];

  // Get the 'numerical value' for each 'letter' to be compared
  // If the letter is not in the alphabet, use an arbitrary
  // large number for it so it will be sorted last
  const idxA = first in dict ? dict[first] : Infinity; // xhaka
  const idxB = second in dict ? dict[second] : Infinity;

  // - Compare the current letters from both words
  val = idxA - idxB;

  console.log(first, second, idxA, idxB, val);

  // - If both current letters are the same, exclude them
  // from the words, and recursively try to sort using the
  // remaining letters. Else, return the result
  return val == 0 ? welshHelper(a.slice(1), b.slice(1)) : val;
};

function main() {
  let input = [
    "",
    "ng",
    "ch",
    "boat",
    "1",
    "chin",
    "cow",
    "cook",
    "car",
    "him",
    "angle",
    "appple",
    "zoho",
    "ngular",
    "phart",
    "path",
    "xhaka",
  ];

  let inputTwo = ["ball", "ball"];
  console.log("dict ==>", dict);

  console.log("unsorted=", inputTwo);
  inputTwo.sort(welshHelper); // O(NLogN)
  console.log("sorted=", inputTwo);
}

// main();

class HashMap {
  constructor() {
    this.map = {};
  }
}

// set
// get

// ['', 'angle', 'appple', 'boat', 'car', 'cook', 'cow', 'ng', 'ngular', 'him', 'ch', 'chin', 'phart', 'path', '1', 'zoho', 'xhaka']

// const minimumMoves = (arr1, arr2) => {
//   if (arr1.length !== arr2.length) return;
//   let result = 0;

//   for (let i = 0; i < arr1.length; i++) {
//     let arr1S = `${arr1[i]}`;
//     let arr2S = `${arr2[i]}`;

//     for (let c = 0; c < arr1S.length; c++) {
//       const aValue = Number(arr1S[c]);
//       const bValue = Number(arr2S[c]);

//       result += Math.abs(aValue - bValue);
//     }
//   }
//   return result;
// };
// console.log(minimumMoves([123, 543], [321, 279]));

const counts = (teamA, teamB) => {
  let answer = [];

  teamA.sort();

  for (let score of teamB) {
    let low = 0,
      high = teamA.length - 1;

    while (low <= high) {
      debugger;
      let mid = high + Math.floor((low + high) / 2);

      if (teamA[mid] > score) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    answer.push(low);
  }
  return answer;
};
// console.log(counts([1, 2, 3], [2, 4]));

const reverseInteger = (x) => {
  let isNegative = x < 0;
  let result = 0;
  x = Math.abs(x);
  while (x !== 0) {
    if (-Math.pow(2, -31) > result || result > Math.pow(2, 31) - 1) return 0;
    result = result * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return isNegative ? -result : result;
};

// reverseInteger()

// reverseString(123);
// reverseString(-123);
// reverseString(120);

// answer = []
// teamA.sort()
// for score in teamB:
//     low, high = 0, len(teamA) - 1
//     while(low <= high):
// mid = low + (high - low) // 2
//         if teamA[mid] > score:
//             high = mid - 1
//         else:
//             low = mid + 1
//     answer.append(low)
// return answer

// result = 0
// if len(arr1) != len(arr2):
//     return

// for i in range(len(arr1)):
//     arr1S = str(arr1[i])
//     arr2S = str(arr2[i])

//     for c in range(len(arr1S)):
//         aValue = int(str(arr1S[c]))
//         bValue = int(str(arr2S[c]))

//         if(aValue > bValue):
//             result += abs(aValue - bValue)
//         else:
//             result += abs(aValue - bValue)

// return result

const minimumMoves = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return;

  let result = 0;

  for (let i = 0; i < arr1.length; i++) {
    debugger;
    let arr1S = String(arr1[i]);
    let arr2S = String(arr2[i]);

    for (let c = 0; c < arr1S.length; c++) {
      const aValue = Number(arr1S[c]);
      const bValue = Number(arr2S[c]);

      result += Math.abs(aValue - bValue);
    }
  }

  return result;
};

// console.log(minimumMoves([123, 543], [321, 279]));

const search_ceiling_of_a_number = (arr, target) => {
  let min = Infinity;
  let start = 0,
    end = arr.length - 1,
    mid;

  while (start <= end) {
    // debugger;
    mid = start + Math.floor((end - start) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      min = Math.min(min, mid);
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return min === Infinity ? -1 : min;
};
// ceilingOfANumber([1, 3, 8, 10, 15], 12);
// console.log(search_ceiling_of_a_number([4, 6, 10], 6));
// console.log(search_ceiling_of_a_number([1, 3, 8, 10, 15], 12));
// console.log(search_ceiling_of_a_number([4, 6, 10], 17));
// console.log(search_ceiling_of_a_number([4, 6, 10], -1));

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  while (start <= end) {
    debugger;
    mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

// searchInsert([1, 3, 5, 6], 2);

class Underground {
  constructor() {
    this.checkInMap = new Map();
    this.checkOutMap = new Map();
  }

  checkIn(id, stationName, t) {
    this.checkInMap.set(id, [stationName, t]);
  }

  checkOut(id, stationName, t) {
    debugger;
    let getUserCheckIn = this.checkInMap.get(id);
    if (getUserCheckIn) {
      let checkInTime = getUserCheckIn[1];
      console.log(getUserCheckIn[0]);
      let timeDifference = t - checkInTime;
      let key = [getUserCheckIn[0], stationName];
      let getExistingCheckOut = this.checkOutMap.get(key);
      if (getExistingCheckOut) {
        return this.checkOutMap.set(
          [getUserCheckIn[0], stationName],
          [getExistingCheckOut[0] + timeDifference, getExistingCheckOut[1] + 1]
        );
      } else {
        return this.checkOutMap.set(
          [getUserCheckIn[0], stationName],
          [timeDifference, 1]
        );
      }
    }
  }

  getAverageTime(startStation, endStation) {
    let [time, n] = this.checkOutMap.get([startStation, endStation]);
    return time / n;
  }
}

// const under = new Underground();
// under.checkIn(7, "Lagos", 2);
// under.checkOut(7, "London", 10);

// console.log("under ==>", under.checkInMap);
// console.log("chewckOutMap", this.checkOutMap);

// console.log();

// let store = new Map();

// store.set(2, "a");
// store.set(3, "b");
// store.set(4, "c");
// store.set(5, "d");
// store.set(6, "e");

// let obj = {
//   2: "a",
//   3: "b",
//   4: "c",
//   5: "d",
//   6: "e",
// };

// // console.log({ store });
// for (const key of store) {
//   console.log(key);
//   let [k, val] = key;
//   console.log(k, val);
// }

const alphabets = [
  // "",
  "a",
  "b",
  "c",
  "d",
  "e",
  "dd",
  "f",
  "g",
  "ff",
  "ng",
  "h",
  "ch",
  "i",
  "j",
  "l",
  "ll",
  "m",
  "n",
  "o",
  "ph",
  "p",
  "r",
  "rh",
  "s",
  "t",
  "th",
  "u",
  "w",
  "y",
];

const recursive = (a, b, welshDictionary, n = 0) => {
  let welshA = locateStringOnMap(a, welshDictionary);
  let welshB = locateStringOnMap(b, welshDictionary);

  if (welshA === welshB) {
    return recursive(a.slice(n + 1), b.slice(n + 1), welshDictionary);
  }
  return { welshA, welshB };
};

const welsh = (input) => {
  let welshDictionary = new Map();
  for (let i = 0; i < alphabets.length; i++) {
    welshDictionary.set(alphabets[i], i);
  }
  console.log(welshDictionary);
  input.sort((a, b) => {
    let { welshA, welshB } = recursive(a, b, welshDictionary, 0);
    if (welshA === undefined || welshB === undefined) return;

    if (welshA - welshB < 0) {
      return -1;
    } else if (welshA - welshB > 0) {
      return 1;
    } else {
      return 0;
    }
    // get indexes and compare;
  });
  console.log({ input });
  return input;
};

const locateStringOnMap = (a, welshDictionary) => {
  let welsh = a.slice(0, 2);
  let result = undefined;
  let getIndex = welshDictionary.get(welsh);
  if (getIndex === undefined) {
    getIndex = welshDictionary.get(a.slice(0, 1));
  }

  if (getIndex) {
    result = getIndex;
  } else {
    result = Infinity;
  }
  return result;
};

// console.log(["xamp", "chin", "house", "him"]);
// welsh(["xamp", "chin", "house", "him"]);
// sort them according to welsh dictionary

const numbers = [2, 3, 4, 100];

// console.log(
//   numbers.sort((a, b) => {
//     if (a > b) {
//       return 1;
//     } else if (b > a) {
//       return -1;
//     } else {
//       return 0;
//     }
//   })
// );

var sortedSquares = function (nums) {
  let newArray = new Array(nums.length).fill(0);
  let pointer = nums.length - 1;
  let start = 0,
    end = nums.length - 1;

  while (start <= end) {
    debugger;
    let startPlace = nums[start] * nums[start];
    let endPlace = nums[end] * nums[end];
    if (startPlace < endPlace) {
      newArray[pointer] = endPlace;
      end--;
    } else {
      newArray[pointer] = startPlace;
      start++;
    }
    pointer--;
  }
  console.log("newArray", newArray);
  return newArray;
};

// sortedSquares([-4, -1, 0, 3, 10]);

// import LinkedList from "./LinkedLists/module.mjs";

// const l1 = new LinkedList(1);
// l1.append(1);
// l1.append(2);
// l1.append(4);
// l1.append(5);

// const l2 = new LinkedList(5);
// l2.append(6);
// l2.append(1);
// l2.append(8);
// l2.append(4);
// l2.append(5);

// let h1 = l1.head;
// let h2 = l2.head;

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

var deleteDuplicates = function (head) {
  console.log(head);
  let current = head;
  let next = null;
  while (current.next !== null) {
    if (current.val === current.next.val) {
      next = current.next.next;
      // current.next = next;
    }
    // else {
    current = current.next;
    // }
  }
  // console.log(current)
  // console.log(head)
  return current;
};

// deleteDuplicates([1, 1, 2]);

// function ListNode(val, next) {
//   this.val = val === undefined ? 0 : val;
//   this.next = next === undefined ? null : next;
// }

// var addTwoNumbers = function (l1, l2) {
//   let list = new ListNode(0);
//   let head = list;
//   let sum = 0;
//   let carry = 0;

//   while (l1 !== null || l2 !== null || sum > 0) {
//     debugger;
//     if (l1 !== null) {
//       sum += l1.val;
//       l1 = l1.next;
//     }
//     if (l2 !== null) {
//       sum += l2.val;
//       l2 = l2.next;
//     }
//     if (sum >= 10) {
//       carry = 1;
//       sum = sum - 10;
//     }
//     head.next = new ListNode(sum);
//     head = head.next;

//     sum = carry;
//     carry = 0;
//   }

//   return list.next;
// };

// addTwoNumbers([l1.val ], [5,6,4]);

var maxSubArray = function (nums) {
  // Kadane's algorith says that the max sum is the maximum of the sum pf precedding elements + current one or current one.
  console.log({ nums });
  let start = 0,
    end = 0;
  let sum = 0,
    maxSum = 0;

  while (start <= end) {
    debugger;
    console.log("start", start);
    sum += nums[end];
    if (sum >= nums[end]) {
      end++;
    } else {
      sum -= nums[start];
      start++;
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

// maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);

var nextGreaterElement = function (nums1, nums2) {
  let map = new Map();
  let result = new Array(nums1.length).fill(-1);
  let stack = [];
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], i);
  }
  console.log(map);
  for (let j = 0; j < nums2.length; j++) {
    debugger;
    let index = map.get(nums2[j]);
    console.log("index ==>", index);

    while (stack[stack.length - 1] < nums2[j]) {
      let ex = stack.pop();
      let i = map.get(ex);
      result[i] = nums2[j];
    }

    if (
      (stack.length === 0 && index !== undefined) ||
      (stack[stack.length - 1] > nums2[j] && index !== undefined)
    ) {
      stack.push(nums2[j]);
    }
    // if (index !== undefined) {
    //   stack.push(nums2[j]);
    // }
  }
  return result;
};

// nextGreaterElement([4, 1, 2], [1, 3, 4, 2]);

var maxProfit = function (prices) {
  var lowestBuy = prices[0];
  var maxProfit = 0;

  for (var i = 0; i < prices.length; i++) {
    let current = prices[i];
    debugger;
    if (current > lowestBuy && current - lowestBuy > maxProfit) {
      maxProfit = current - lowestBuy;
    }
    if (current < lowestBuy) {
      lowestBuy = current;
    }
  }

  return maxProfit;
};

// maxProfit([7, 1, 5, 3, 6, 4]);
let memo = new Map();
let stack = [];

const power = (x) => {
  let count = 0;
  while (x !== 1) {
    stack.push(x);
    if (x % 2) {
      x = 3 * x + 1;
    } else {
      x = x / 2;
    }
    count++;
  }
  return count;
  // while (x === 1) {
  //   // debugger;
  //   console.log({ stack });
  //   let res = stack.pop();
  //   console.log({ memo });
  //   if (memo.has(res)) {
  //     let data = memo.get(res);
  //     count += data;
  //     return count;
  //   } else {
  //     count++;
  //     memo.set(res, count);
  //   }
  //   if (stack.length === 0) {
  //     break;
  //   }
  // }
  // return count;
};

// power(5);

var getKth = function (lo, hi, k) {
  const arr = [];
  for (let x = lo; x <= hi; x++) {
    arr.push(x);
  }
  arr.sort((a, b) => {
    debugger;
    let countA = power(a);
    let countB = power(b);
    // console.log({  power(a), power(b) });
    if (countA === countB) {
      return a - b;
    }
    return countA - countB;
  });
  console.log({ memo });
  return arr[k - 1];
};

// getKth(7, 11, 2);

// const memo = new Map();
// memo.set(1, 0);
// memo.set(2, 1);

// console.log({ memo });

// /**
//  * @param {number} x
//  * @return {number}
//  */
// const power = (x) => {
//   if (memo.has(x)) {
//     return memo.get(x);
//   }
//   memo.set(x, 1 + power(x % 2 === 0 ? parseInt(x / 2) : 3 * x + 1));
//   return memo.get(x);
// };

// /**
//  * @param {number} lo
//  * @param {number} hi
//  * @param {number} k
//  * @return {number}
//  */
// var getKth = function (lo, hi, k) {
//   const arr = [];
//   for (let x = lo; x <= hi; x++) {
//     arr.push(x);
//   }
//   arr.sort((a, b) => {
//     if (power(a) === power(b)) {
//       return a > b ? 1 : -1;
//     }
//     return power(a) > power(b) ? 1 : -1;
//   });
//   console.log({ arr });
//   console.log({ arr: arr[k - 1] });
//   return arr[k - 1];
// };

// "*c*cdefg"
// "abcohcdefg"

var numSmallerByFrequency = function (queries, words) {
  words = words.map((w) => smallestChar(w));
  queries = queries.map((w) => smallestChar(w));
  words = words.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let start = 0,
      end = words.length - 1,
      mid;
    while (start <= end) {
      debugger;
      mid = start + Math.floor((end - start) / 2);
      let current = words[mid];
      if (query < current) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    result.push(words.length - 1 - end);
  }
  return result;
};

//   for (let i = 0; i < queries.length; i++) {
//     debugger;
//     let start = 0,
//       end = words.length - 1;
//     let query = queries[i];
//     while (start <= end) {
//       debugger;
//       let mid = start + Math.floor((end - start) / 2);
//       // console.log({ mid });
//       // console.log({ mid: words[mid] });
//       let current = words[mid];
//       if (query < current) {
//         end = mid - 1; // what is the logic behind this?
//       } else {
//         start = mid + 1;
//       }
//     }
//     result.push(words.length - 1 - end);
//   }
//   return result;
// };

var numSmallerByFrequency = function (queries, words) {
  let res = [];
  queries = queries.map((q) => countFrequency(q)); //[3,2]
  words = words.map((w) => countFrequency(w)); //[1,2,3,4]
  words = words.sort((a, b) => a - b);
  console.log({ queries });
  console.log({ words });

  for (let i = 0; i < queries.length; i++) {
    let start = 0,
      end = words.length - 1;
    while (start <= end) {
      debugger;
      let mid = start + Math.floor((end - start) / 2);
      if (queries[i] < words[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    res.push(words.length - 1 - end);
  }
  return res;
};

function countFrequency(str) {
  let freq = {};

  str.split("").forEach((key) => {
    freq[key] = (freq[key] || 0) + 1;
  });
  console.log({ freq });
  // console.log("keys ==>", Object.keys(freq));
  // console.log("keys sort ==>", Object.keys(freq).sort());
  console.log("keys sort ==>", Object.keys(freq).sort());
  console.log("keys sort[0] ==>", freq[Object.keys(freq).sort()[0]]);

  return freq[Object.keys(freq).sort()[0]];
}

const smallestChar = (data) => {
  let map = new Map();
  data.split("").forEach((d) => {
    // debugger;
    if (map.has(d)) {
      let curr = map.get(d);
      map.set(d, curr + 1);
    } else {
      map.set(d, 1);
    }
  });

  let re = Array.from(map.keys()).sort();

  return map.get(re[0]);
};

// smallestChar("aaa");

// (queries = ["bbb", "cc"]), (words = ["a", "aa", "aaa", "aaaa"]);

// numSmallerByFrequency(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]);

const orderAgnosticSearch = (arr, target) => {
  let start = 0,
    end = arr.length - 1,
    mid;
  let isAsc = Boolean(arr[start] < arr[end]);
  while (start <= end) {
    debugger;
    mid = start + Math.floor((end - start) / 2);
    let current = arr[mid];
    if (target === current) {
      return current;
    }
    if (isAsc) {
      if (current < target) {
        start = mid + 1;
      } else if (current > target) {
        end = mid - 1;
      }
    } else {
      if (current < target) {
        end = mid - 1;
      } else if (current > target) {
        start = mid + 1;
      }
    }
  }
  return -1;
};

// orderAgnosticSearch([4, 6, 10], 10);

// [1, 2, 3, 4, 6, 10];
// [10, 9, 8, 7, 6, 5];

// [(4, 6, 10)], (key = 10);

const ceilingOfANumber = (arr, num) => {
  let start = 0,
    end = arr.length - 1,
    mid,
    min = Infinity;
  while (start <= end) {
    debugger;
    mid = start + Math.floor((end - start) / 2);
    let current = arr[mid];
    if (current >= num) {
      min = Math.min(min, current);
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return min === Infinity ? -1 : arr.indexOf(min);
};

// ceilingOfANumber([4, 6, 10], 6);

const freqStuff = (words, queries) => {
  // Phase I
  // sort words
  // transform words and queries using f(s);
  // Phase II
  // use binary search to loop through the array to compare the values

  words = words.map((word) => runTime(word));
  queries = queries.map((query) => runTime(query));
  words.sort((a, b) => a - b);

  let result = [];

  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    debugger;
    let start = 0,
      end = words.length,
      mid,
      count = 0;
    while (start <= end) {
      mid = start + Math.floor((end - start) / 2);
      if (query < words[mid]) {
        count++;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    result.push(count);
  }
  return result;
};

const runTime = (value) => {
  // loop thru
  let silo = new Map();
  // value.sort((a, b) => a - b);
  value.split("").forEach((v) => {
    silo.set(v, silo.get(v) || 1);
  });
  return silo.get(Array.from(silo.keys()).sort());
};

// freqStuff(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]);

const checkInclusion = (s1, s2) => {
  let store = new Map();

  for (let i = 0; i < s1.length; i++) {
    let curr = s1[i];
    if (store.has(curr)) {
      store.set(curr, store.get(curr) + 1);
    } else {
      store.set(curr, 1);
    }
  }

  console.log({ store });

  let start = 0,
    end = 0,
    matched = 0;

  while (end <= s2.length) {
    debugger;
    let current = s2[end];
    let startPointer = s2[start];
    if (store.has(current)) {
      store.set(current, store.get(current) - 1);
      if (store.get(current) === 0) {
        matched++;
      }
      // end++;
    }

    if (matched === Array.from(store.keys()).length) return true;

    if (!store.has(current)) {
      if (store.get(startPointer) === 0) {
        matched--;
      }
      if (store.has(startPointer)) {
        store.set(startPointer, store.get(startPointer) + 1);
      }
      start++;
    }
    end++;
  }

  return false;
};

// checkInclusion("ab", "eidbaooo");

const findAnagrams = (s, p) => {
  let anagrams = new Map();

  for (let i = 0; i < p.length; p++) {
    let curr = p[i];
    if (anagrams.has(curr)) {
      anagrams.set(curr, anagrams.get(curr) + 1);
    } else {
      anagrams.set(curr, 1);
    }
  }

  let start = 0,
    end = 0,
    matched = 0,
    result = [];

  while (end <= s.length) {
    let rightChar = s[end];
    if (anagrams.has(rightChar)) {
      anagrams.set(rightChar, anagrams.get(rightChar) - 1);
      if (anagrams.get(rightChar) === 0) {
        matched++;
      }
    }

    if (matched === Array.from(anagrams.keys()).length) result.push(start);

    if (end >= p.length - 1) {
      let leftChar = s[start];
      if (anagrams.get(leftChar) === 0) {
        matched--;
      }
      if (anagrams.has(leftChar)) {
        anagrams.set(leftChar, anagrams.get(leftChar) + 1);
      }
    }
  }
  console.log({ result });
  return result;
};

// findAnagrams("cbaebabacd", "abc");

const LESS_THAN_20 = [
  "",
  "One",
  "Two",
  "Three",
  "Four",
  "Five",
  "Six",
  "Seven",
  "Eight",
  "Nine",
  "Ten",
  "Eleven",
  "Twelve",
  "Thirteen",
  "Fourteen",
  "Fifteen",
  "Sixteen",
  "Seventeen",
  "Eighteen",
  "Nineteen",
];
const TENS = [
  "",
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  "Eighty",
  "Ninety",
];
const THOUSANDS = ["", "Thousand", "Million", "Billion"];

var numberToWords = function (num) {
  if (num === 0) {
    return "Zero";
  }
  let thousandCounter = 0;
  let result = "";

  while (num > 0) {
    debugger;
    if (num % 1000 != 0) {
      result =
        numToString(num % 1000) + THOUSANDS[thousandCounter] + " " + result;
    }
    num /= 1000;
    num = Math.trunc(num);
    thousandCounter++;
  }
  return result.trim();
};

function numToString(num) {
  debugger;
  if (num === 0) return "";
  else if (num < 20) return LESS_THAN_20[num] + " ";
  else if (num < 100)
    return TENS[Math.trunc(num / 10)] + " " + numToString(num % 10);
  else
    return (
      LESS_THAN_20[Math.trunc(num / 100)] + " Hundred " + numToString(num % 100)
    );
}

// numberToWords(1234567);

function numSmallerByFrequency(queries, words) {
  // space -> O(1)
  // time -> O(l) //where l is longest word
  const getFreq = (word) => {
    let smallestChar = "z";
    let smallestCharFreq = 0;
    // O(l) // length of word
    for (let i = 0; i < word.length; i++) {
      debugger;
      const char = word[i];
      if (char <= smallestChar) {
        if (char == smallestChar) {
          smallestCharFreq++;
        } else {
          smallestChar = char;
          smallestCharFreq = 1;
        }
      }
    }
    return smallestCharFreq;
  };

  // space -> O(d)
  const freqOfWords = [];

  // time -> O(d)
  for (const word of words) {
    freqOfWords.push(getFreq(word));
  }

  // sort words // O(dlogd)
  freqOfWords.sort((a, b) => b - a);

  // time -> O(d) // d => length of words
  const getFreqOfWordsGreater = (freq) => {
    let count = 0;
    // O(d) // d => length of words
    for (const wordFreq of freqOfWords) {
      if (wordFreq > freq) {
        count++;
      } else {
        break;
      }
    }
    return count;
  };

  const result = [];
  // O(n) * O(l + d) => O(n(l + d)) // O(n^2)
  for (const query of queries) {
    // get all freq of word greater than freq of query
    // getFreq -> O(l) ,
    // getFreqOfWordsGreater -> O(dlogd)
    // O(l) + O(dlogd) ~=  O(l)
    result.push(getFreqOfWordsGreater(getFreq(query)));
  }

  return result;
}
// zaaaz

// z
// a

// q = ["bbb", "cc"] , words = ["a","aa","aaa","aaaa"]

// ["a","aa","aaa","aaaa"]
//.  1   2    3    4

//  ["bbb", "cc"]
//     3      2

// freqSmallestLexicographWord = (word: string) => number;
// get freq of all the char
// return freq of smallest alphabetical char

// perform freqSmallestLexicographWord for all words
// save them in a list
// sort in decending order
//
// perform query check

// for (let i = 0; i < queries.length; i++) {
//   let query = queries[i];
//   let start = 0,
//     end = words.length - 1,
//     mid;
//   while (start <= end) {
//     mid = start + Math.floor((end - start) / 2);
//     let current = words[mid];
//     if (current > query) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   result.push(words.length - 1 - end);
// }

function numSmallerByFrequencyII(queries, words) {
  queries = queries.map((query) => getFreek(query));
  words = words.map((word) => getFreek(word));

  console.log({ queries });

  words.sort((a, b) => a - b);

  let answer = [];

  for (let i = 0; i < queries.length; i++) {
    let query = queries[i];
    let start = 0,
      end = words.length - 1,
      mid;

    while (start <= words.length) {
      mid = start + Math.floor((end - start) / 2);
      let current = words[mid];
      if (query < current) {
        answer.push(words.length - 1 - mid + 1);
        break;
      }
      start++;
    }
  }

  console.log({ answer });
  // console.log({ words });
  return answer;
}

const getFreek = (util) => {
  // find the number of times the least occurring letter occurs
  let smallestLetter = "z";
  let occurrence = 0;
  for (let i = 0; i < util.length; i++) {
    let current = util[i];
    if (current <= smallestLetter) {
      if (current === smallestLetter) {
        occurrence++;
      } else {
        smallestLetter = current;
        occurrence = 1;
      }
    }
  }
  return occurrence;
};

// numSmallerByFrequencyII(["bbb", "cc"], ["a", "aa", "aaa", "aaaa"]);

// getFreek("zaaaza");

const reverseStringg = (word) => {
  let map = new Map();
  for (let index = 0; index < word.length; index++) {
    const element = word[index];
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  }

  let roll = Array.from(map.keys());

  console.log({ roll });

  roll.sort((a, b) => {
    debugger;
    let valA = map.get(a);
    let valB = map.get(b);
    console.log({ a, valA });
    console.log({ b, valB });
    // if (valA < valB) {
    //   // return valA - valB;
    //   return -1;
    // } else if (valA > valB) {
    //   return 1;
    // } else {
    //   if (a > b) {
    //     return a - b;
    //   } else {
    //     return b - a;
    //   }
    // }

    if (valA > valB) return -1;
    else if (valA < valB) return 1;
    else {
      if (a < b) return -1;
      else return 1;
    }
  });
  console.log({ roll: roll.join("") });
  return roll.join("");
};

// reverseStringg("bloomberg");

const welshAlphabets = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "dd",
  "f",
  "g",
  "ff",
  "ng",
  "h",
  "ch",
  "i",
  "j",
  "l",
  "ll",
  "m",
  "n",
  "o",
  "ph",
  "p",
  "r",
  "rh",
  "s",
  "t",
  "th",
  "u",
  "w",
  "y",
];

// ["xamp", "chin", "house", "him"];
// Given this input, sort the letters according to their order on the welshAlphabets table.
//

let store = new Map();

for (let i = 0; i < welshAlphabets.length; i++) {
  let current = welshAlphabets[i];
  store.set(current, i);
}

const getIndexes = (store, a, b) => {
  // debugger;
  let idxA = store.get(a.slice(0, 2)) ?? store.get(a.slice(0, 1));
  let idxB = store.get(b.slice(0, 2)) ?? store.get(b.slice(0, 1));

  if (idxA === idxB) {
    return getIndexes(store, a.slice(1), b.slice(1));
  }

  return { idxA, idxB };
};

// getIndexes(store, "him", "house");

const wellsCargo = (input) => {
  let store = new Map();

  for (let i = 0; i < welshAlphabets.length; i++) {
    let current = welshAlphabets[i];
    store.set(current, i);
  }
  debugger;
  console.log({ store });
  input.sort((a, b) => {
    debugger;
    let { idxA, idxB } = getIndexes(store, a, b);
    console.log({ idxA });
    console.log({ idxB });
    idxA = idxA === undefined ? Infinity : idxA;
    idxB = idxB === undefined ? Infinity : idxB;

    if (idxA < idxB) return -1;
    if (idxA > idxB) return 1;
    if (idxA === idxB) return 0;
    // lookup indexes of a and b from store.
    // lookup first 2 letters ?? lookup first letter
    // if both are undefined, set index to Infinity
    // if index of A and index of B are equal to each other
  });
  console.log({ input });
  return input;
};

wellsCargo(["xamp", "chin", "house", "him"]);

const runner = (entry) => {
  entry.sort((a, b) => {
    console.log({ entry });
    debugger;
    if (a - b < 0) {
      return -1;
    } else if (a - b > 0) {
      return 1;
    } else {
      return 0;
    }
  });
};

// runner([1, 3, 2, 6, 5, 7]);
