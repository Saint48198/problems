/**
 * Created by sdaniel1 on 9/9/15.
 */
(function () {
    "use strict";
    function largestPrime (num) {
        this.num = num;
        this.primeFactors = [];
        this.initialize = function () {

            if (this.isPrime(num)) {
                this.primeFactors.push(num);
            } else {
                this.findPrimeNumbers(this.num);
            }
        }

        this.findPrimeNumbers = function(num) {
            var newMax = 0;

            for (var i = 2; i < num; i++) {
                if (num % i === 0 && this.inArray(i) === false) {
                    newMax = num / i;
                    this.primeFactors.push(i);

                    // using recursion to find the next prime number as long as the new max is not a prime number itself
                    if (this.isPrime(newMax)) {
                        this.primeFactors.push(newMax);
                    } else {
                        this.findPrimeNumbers(newMax);
                    }

                    break;
                }
            }
        }

        this.inArray = function (value) {
            var found = false;
            for(var i = 0, total = this.primeFactors.length; i < total; i++) {
                if (value === this.primeFactors[i]) {
                    found = true;
                    break;
                }
            }

            return found;
        }

        this.isPrime = function (value) {
            for(var i = 2, total = value - 1; i < total; i++) {
                if (value % i === 0) {
                    return false;
                }
            }
            return true;
        }

        this.getValue = function () {
            return this.primeFactors[this.primeFactors.length - 1];
        }

        this.printValue = function(value) {
            console.log(value);
        }
    }

    // test cases
    var test1 = new largestPrime(600851475143); // 6857
    test1.initialize();
    test1.printValue(test1.getValue());

    var test2 = new largestPrime(11); // 11
    test2.initialize();
    test2.printValue(test1.getValue());

    var test3 = new largestPrime(13195); // 29
    test3.initialize();
    test3.printValue(test1.getValue());

})();