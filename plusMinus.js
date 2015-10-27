(function() {
    "use strict";

    var plusMinus = function(input) {
        this.input = input;
        this.total = null;
        this.processData = function () {
            var rawDataArray = this.input.split("\n");
            var total = rawDataArray[0];
            var number = rawDataArray[1].split(" ");
            var positive = [];
            var negative = [];
            var zero = [];
            var value = null;

            this.total = total;

            for (var i = 0; i < total; i++) {
                value = number[i];
                if (value > 0) {
                    positive.push(value);
                } else if (value < 0) {
                    negative.push(value);
                } else {
                    zero.push(value);
                }
            }

            this.printValue(this.getAvg(positive.length));
            this.printValue(this.getAvg(negative.length));
            this.printValue(this.getAvg(zero.length));
        };
        this.getAvg = function (value) {
            var avg = value / this.total;
            return parseFloat(avg).toPrecision(3);
        };

        this.printValue = function (value) {
            console.log(value);
        }

    }

    var example = new plusMinus("6\n-4 3 -9 0 4 1");
    example.processData();

})();
