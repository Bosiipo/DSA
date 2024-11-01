const medianOfTwoSortedArrays = (nums1, nums2) => {
  console.log("softwork yeahhh");
  const mergedArray = [...nums1, ...nums2];
  const sortedArray = mergedArray.sort((a, b) => a - b);
  if (sortedArray.length % 2 === 0) {
    // if length is an even number
    const secondPointer = sortedArray.length / 2;
    let firstPointer = secondPointer - 1;
    let sum = sortedArray[firstPointer] + sortedArray[secondPointer];
    return sum / 2;
  } else if (sortedArray.length % 2 === 1) {
    // if length is an odd number
    let middle = Math.floor(sortedArray.length / 2);
    return sortedArray[middle];
  }
};

medianOfTwoSortedArrays([1, 3], [2]);
