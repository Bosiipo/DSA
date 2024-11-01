const trappingRainWater = (heights) => {
  let left = 0;
  let right = heights.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let totalWater = 0;

  while (left < right) {
    debugger;
   if(heights[left] <= heights[right]){
     if(maxLeft < heights[left]){
       maxLeft = heights[left];
     } else {
       totalWater += maxLeft - heights[left];
     }
     left++;
   } else {
       if(maxRight < heights[right]){
         maxRight = heights[right];
       } else {
         totalWater += maxRight - heights[right];
       }
       right--;
   }
  }
  return totalWater;
};

trappingRainWater([0, 1, 0, 2, 3, 1, 0, 1]);
