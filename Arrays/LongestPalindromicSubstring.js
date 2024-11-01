// String
// Dynamic Programming
// function longestPalindrome(s) {
//   if (s.length < 1) return "";
//   let maxSubStart = 0;
//   let maxSubLength = 0;
//   for (let i = 0; i < s.length; i++) {
//     const lengthCenteredAtChar = expandAroundCenter(s, i, i);
//     const lengthCenteredAtSpace = expandAroundCenter(s, i, i + 1);
//     const longestSubAtChar = Math.max(
//       lengthCenteredAtChar,
//       lengthCenteredAtSpace
//     );
//     if (longestSubAtChar > maxSubLength) {
//       maxSubLength = longestSubAtChar;
//       maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
//     }
//   }
//   return s.substr(maxSubStart, maxSubLength);
// }

// function expandAroundCenter(s, left, right) {
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     left--;
//     right++;
//   }
//   return right - left - 1;
// }

// var longestPalindrome = function (s) {
//   let game = "";
//   let same;
//   console.log('omoo');
//   var long = function (current = 0, storage = [], game) {
//     debugger;
//     if (current === s.length) {
//       let sam = storage.reduce((a, b) => (a.length > b.length ? a : b));
//       // console.log('sam ===>', sam);
//       return sam;
//     } // base case!

//     for (let i = current; i < s.length; i++) {
//       game = game + s[i];
//       let same = game.split("").reverse().join("");

//       if (game === same) {
//         storage.push(game);
//       }
//     }
//     current++;
//     game = "";
//     return long(current, storage, game);
//   };

//   return long(0, [], "");
// };


function longestPalindrome(s) {
  if (s.length < 0) return "";

  let maxSubLength = 0;
  let maxSubStart = 0;
  for (let i = 0; i < s.length; i++) {
    debugger;
    const lengthCenteredAtChar = expand(s, i, i);
    const lengthCenteredAtMiddle = expand(s, i, i + 1);
    const longestSubAtChar = Math.max(
      lengthCenteredAtChar,
      lengthCenteredAtMiddle
    );
    if (longestSubAtChar > maxSubLength) {
      maxSublength = longestSubAtChar;
      maxSubStart = i - Math.floor((maxSubLength - 1) / 2);
    }
  }
  return s.substr(maxSubStart, maxSubLength);
}

function expand(s, left, right) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--;
    right++;
  }
  return right - left - 1;
}

longestPalindrome('aba');

// function longestPalindrome(s) {
//   debugger;
//   let left = Math.floor(s.length / 2);

//   let oddPalindrome = expand(s, left, left);
//   let evenPalindrome = expand(s, left - 1, left);

//   console.log('odd ', oddPalindrome);
//   console.log('even ', evenPalindrome);
// }

// function expand(s, left, right) {
//   while (left >= 0 && right < s.length && s[left] === s[right]) {
//     left--;
//     right++;
//   }

//   return right - left - 1;
// }

// longestPalindrome('aba');