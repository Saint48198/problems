
function birthdayCakeCandles (candles, candleHeight) {
  "use strict";
  
  let tallest = [];
  
  candleHeight.forEach((candle, index) => {
    if (typeof tallest[0] === 'undefined' || tallest[0] === candle) {
      tallest.push(candle);
    } else if (tallest[0] < candle) {
      tallest = [candle];
    }
  });
  
  console.log(tallest.length);
}

birthdayCakeCandles(10, [82, 49, 82, 82, 41, 82, 15, 63, 38, 25]);