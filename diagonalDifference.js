/**
 * Created by sdaniels on 9/20/15.
 */
(function() {
    "use strict";

    var diagonalDifference = function () {
        this.initialize = function (data) {
            var aData = data.split("\n");
            var numOfArrays = aData[0];
            var arrays = aData.splice(1);
            var sum1 = 0;
            var sum2 = 0;
            var numbers = [];
            var value = 0;
            var reverseIndex = numOfArrays;

            for (var i = 0; i < numOfArrays; i++) {
                numbers = arrays[i].split(" ");

                reverseIndex--;

                sum1 += Number(numbers[i]);
                sum2 += Number(numbers[reverseIndex]);
            }

            value = sum1 - sum2;
            value = value < 0 ? value * -1 : value;

            console.log(value);
        }
    }

    var input = "3\n11 2 4\n4 5 6\n10 8 -12";
    var test = new diagonalDifference();
    test.initialize(input);
})();