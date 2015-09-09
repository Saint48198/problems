/**
 * Created by sdaniels on 9/8/15.
 */
(function() {
    "use strict";

    var evenFibonacci = {
        evenTotal: 0,

        generate: function () {
            var num = 1;
            var max = 4000000;
            var sequence = [num];

            //console.log(num);
            while(num <= max) {
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