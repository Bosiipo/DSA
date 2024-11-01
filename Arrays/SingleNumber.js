const singleNumber = (nums) => {
  let hash = {};
  nums.forEach(num => {
    debugger;
    if(hash[num]){
      delete hash[num];
    } else {
      hash[num] = 1;
    }
  });
  console.log('hash ==>', hash)
  return Object.keys(hash)[0];
}