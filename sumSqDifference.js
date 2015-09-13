/**
 * Created by sdaniels on 9/13/15.
 * The sum of the squares of the first ten natural numbers is,
 1^2 + 2^2 + ... + 10^2 = 385

 The square of the sum of the first ten natural numbers is,
 (1 + 2 + ... + 10)2 = 55^2 = 3025

 Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
 Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

 https://projecteuler.net/problem=6
 */
(function () {
    "use strict";

    function sumSqDifference () {
        this.MAX = 100;
        this.POWER = 2;
        this.value = 0;
        this.initialize = function () {
            var totalSq = 0;
            var totalSumSq = 0;

            for(var n = 1; n <= this.MAX; n++) {
                totalSq = totalSq + Math.pow(n, this.POWER);
                totalSumSq = totalSumSq + n;
            }
            totalSumSq = Math.pow(totalSumSq, this.POWER);

            this.value = totalSumSq - totalSq;

        }

        this.printValue = function() {
            console.log(this.value);
        }
    }

    var test1 = new sumSqDifference();
    test1.initialize();
    test1.printValue();

})();