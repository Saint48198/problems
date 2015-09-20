/**
 * Created by sdaniels on 9/20/15.
 */
(function() {
    "use strict";

    var sumArray = function () {
        this.initialize = function (data) {
            var sum  = 0;
            if (Array.isArray(data)) {
                sum = data.reduce(function(previousValue, currentValue, index, array) {
                    if (typeof previousValue === "string") {
                        previousValue =  Number(previousValue);
                    }

                    if (typeof currentValue === "string") {
                        currentValue = Number(currentValue);
                    }

                    return Number(previousValue) + Number(currentValue);
                });
                console.log(sum);
            }
        }
    }

    var test = new sumArray();
    test.initialize([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]);
})();