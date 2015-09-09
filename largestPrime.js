/**
 * Created by sdaniel1 on 9/9/15.
 */
(function () {
    "use strict";
    function largestPrime (num) {
        this.num = num;
        this.calculate = function () {
            var max = this.num - 1;
            var largestPrime = this.num;
            while(max) {
                if (this.num % max === 0 && max > 1 && this.primeCheck(max)) {
                    largestPrime = max;
                    break;
                }
                max--;
            }

            return largestPrime;
        }
        this.primeCheck = function (num) {
            var max = num - 1;
            var isPrime = true;
            for (var i = 2; i < max; i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }

            return isPrime
        }
    }

    var test1 = new largestPrime(13195);
    console.log(test1.calculate());

    var test2 = new largestPrime(11);
    console.log(test2.calculate());

    var test3 = new largestPrime(600851475143);
    console.log(test3.calculate());
})();