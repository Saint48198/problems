/**
 * Created by sdaniel1 on 9/10/15.
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 * https://projecteuler.net/problem=4
 */
(function () {
    "use strict";
    function largestPalindrome () {
        this.MIN = 100;
        this.MAX = 1000;
        this.value = 0;

        this.initialize = function () {
            var testValue = 0;
            var palindrome = 0;
            for (var x = this.MIN; x < this.MAX; x++) {
                for (var y = this.MIN; y < this.MAX; y++) {
                    testValue =  y * x;

                    palindrome = parseInt(testValue.toString().split("").reverse().join(""));

                    if (testValue > this.value && testValue === palindrome) {
                        this.value = testValue;
                    }
                }
            }
        }

        this.printString = function () {
            console.log(this.value);
        }
    }

    var test1 = new largestPalindrome();
    test1.initialize();
    test1.printString();
})();
