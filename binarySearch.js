function binarySearch (n, targetValue) {
  "use strict";
  
  let min = 0;
  let max = n.length - 1;
  let guess;
  
  while (min <= max) {
    guess = Math.floor((max + min) / 2);
    if (n[guess] === targetValue) {
      return guess;
    } else if (n[guess] < targetValue) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  
  return -1;
}


var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
  41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

var result = binarySearch(primes, 73);
console.log("Found prime at index " + result);