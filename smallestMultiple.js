/**
 * Created by sdaniel1 on 9/11/15.
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 * https://projecteuler.net/problem=5
 */
(function () {
    "use strict";

    function smallestMultiple () {
        this.value = 0;
        this.initialize = function () {
            var found = false;
            var n = 0;
            var isDivisible = true;

            while(found === false) {
                isDivisible = true
                n++;
                for (var x = 1; x <= 20; x++) {
                    if (n % x !== 0) {
                        isDivisible = false;
                        break;
                    }
                }

                if (isDivisible) {
                    found = true;
                    this.value = n;
                }
            }
        }
        this.printValue = function () {
            console.log(this.value);
        }
    }

    var test1 = new smallestMultiple();
    test1.initialize();
    test1.printValue();
})();