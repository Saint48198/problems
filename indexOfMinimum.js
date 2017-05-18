
var indexOfMinimum = function(array, startIndex) {
  // Set initial values for minValue and minIndex,
  // based on the leftmost entry in the subarray:
  var minValue = array[startIndex];
  var minIndex = startIndex;
  
  for (let currentIndex = minIndex + 1; currentIndex < array.length; currentIndex++) {
    if (array[currentIndex] < minValue) {
      minValue = array[currentIndex];
      minIndex =  currentIndex;
    }
  }
  
  // Loop over items starting with startIndex,
  // updating minValue and minIndex as needed:
  
  return minIndex;
};

var array = [18, 6, 66, 44, 9, 22, 14];
var index = indexOfMinimum(array, 2);

console.log(index);