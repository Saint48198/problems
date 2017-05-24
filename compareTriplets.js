/**
 * Created by sdaniels on 5/20/17.
 */

function solve (a0, a1, a2, b0, b1, b2) {
  "use strict";
  let args = [].slice.call(arguments);
  let len = args.length / 2;
  let aScores = args.splice(0, len);
  let bScores = args;
  let aTotal = 0;
  let bTotal = 0;
  
  
  aScores.forEach((a, index) => {
    if (a > bScores[index]) {
      aTotal++;
    } else  if (a < bScores[index]) {
      bTotal++;
    }
  });
  
  console.log(aTotal.toString() + ' ' + bTotal.toString());
  
}

solve(3, 6, 10, 3, 6, 10);