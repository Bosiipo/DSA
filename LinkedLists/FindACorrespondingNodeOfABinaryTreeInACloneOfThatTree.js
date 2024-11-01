var getTargetCopy = function(original, cloned, target) {
  
  let result = null;
  
  function traverse (node) {
    if(node.left){
      traverse(node.left);
    }
    if(node.val === target.val){
      return result = node;
    }
    if(node.right){
      traverse(node.right);
    }
  }
  
  traverse(cloned);
  
  return result;
};

getTargetCopy([7,4,3,null,null,6,19], [7,4,3,null,null,6,19], [3,6,19]);