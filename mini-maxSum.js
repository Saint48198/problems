
function miniMaxSum (arr) {
  "use strict";
  
  arr = arr.sort((a, b) => a - b );
  let min = arr.slice(0, arr.length - 1).reduce((total, value) => total + value );
  let max = arr.slice(1).reduce((total, value) => total + value );
  
  console.log(min.toString() + ' ' + max.toString());
  
}

miniMaxSum([1, 2, 3, 4, 5]);