/**
 * Created by sdaniels on 9/8/15.
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 * https://projecteuler.net/problem=1
 */
(function () {
    "use strict";

    var multiples3n5 = {
        MAX: 1000,
        total: 0,
        collection: [],

        generate: function () {
            var i = 0;
            while (i < this.MAX - 1) {
                i++;
                if ((i % 3 === 0) || (i % 5 === 0)) {
                    this.collection.push(i);
                }
            }
        },

        sum: function() {
            return this.collection.reduce(function(a, b) {
                return a + b;
            });
        }
    }

    multiples3n5.generate();
    console.log(multiples3n5.sum());
})();