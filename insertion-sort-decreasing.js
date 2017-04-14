function insertionSort (array) {
	"use strict";

	var key;
	var i;

	for(var j = 1; j < array.length;  j++) {
		key = array[j];

		i = j - 1;

		while (i >= 0 && array[i] > key) {
			array[i + 1] = array[i];
			i = i - 1;
		}

		array[i + 1] = key;
	}

	return array;
}

//console.log(insertionSort([2,5,1,4,6,2]));

console.log(insertionSort([31,41,59,26,41,58]));