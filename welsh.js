// Initialize the dictionary
let dict = {};

const alphabets = [
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

for (let i = 0; i < alphabets.length; i++) {
  dict[alphabets[i]] = i;
}

// Helper for welsh sort
const welshHelper = (a, b) => {
  // Get the first two letters if they're valid alphabets
  // else, use the first letter as usual
  // Do this for both words to be compared
  debugger;
  const first = a.slice(0, 2) in dict ? a.slice(0, 2) : a[0];
  const second = b.slice(0, 2) in dict ? b.slice(0, 2) : b[0];

  // Get the 'numerical value' for each 'letter' to be compared
  // If the letter is not in the alphabet, use an arbitrary
  // large number for it so it will be sorted last
  const idxA = first in dict ? dict[first] : Infinity;
  const idxB = second in dict ? dict[second] : Infinity;

  console.log(first, second, idxA, idxB);

  // Now the actual sort.
  // - Handle unknown letters
  if (idxA === Infinity) {
    return 1;
  }
  if (idxB === Infinity) {
    return -1;
  }

  // - Compare the current letters from both words
  val = idxA - idxB;

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

  console.log("unsorted=", input);
  input.sort(welshHelper);
  console.log("sorted=", input);
}
