
function solvePuzzle (num) {
  "use strict";
  
  const oneHoles = { '0': true, '4': true, '6': true, '9': true };
  const twoHoles = { '8': true };
  
  let numString = num.toString();
  let total = 0;
  
  for (let s of numString) {
    if(oneHoles[s]) {
      total = total + 1;
    } else if (twoHoles[s]) {
      total = total + 2;
    }
  }
  
  return total;
}

const test1 = solvePuzzle(24);
const test2 = solvePuzzle(1264);
const test3 = solvePuzzle(9899);

console.log(test1);
console.log(test2);
console.log(test3);