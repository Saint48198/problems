/**
 * Created by sdaniels on 9/8/15.
 */
(function() {
    "use strict";

    var evenFibonacci = {
        MAX: 4000000,
        evenTotal: 0,

        generate: function () {
            var num = 1;
            var sequence = [num];

            //console.log(num);
            while(num <= this.MAX) {
                //console.log(num);
                sequence.push(num);
                num = sequence[sequence.length - 1] + sequence[sequence.length - 2];

                if (num % 2 === 0) {
                    this.updateTotal(num);
                }
            }
        },

        updateTotal: function (amt) {
            this.evenTotal = this.evenTotal + amt;
        }
    }

    evenFibonacci.generate();
    console.log(evenFibonacci.evenTotal);

})();