(function () {
    "use strict";
    var sherlockBeast = {
        main: function () {
            // 1, 3, 5, 11
            var numbers = [11];
            var fails = -1;

            numbers.forEach(function (n) {
                var max = Math.pow(10, n) - 1;
                var value = -1;

                var processNumber = function(number) {
                    var threes = [];
                    var fives = [];

                    if (number.toString().length === n) {
                        if ((/^[3]+$/.test(number.toString()) || /^[5]+$/.test(number.toString()))) {
                            var threes = number.toString().split("").filter(function(val) {
                                return val === "3";
                            });

                            var fives = number.toString().split("").filter(function(val) {
                                return val === "5";
                            });

                            if (threes.length > 4 && fives.length > 2) {
                                if (threes.length % 5 === 0 && fives.length % 3 === 0) {
                                    value = number;
                                    number = 0;
                                }
                            } else if (threes.length < 4 && fives.length > 2) {
                                if (fives.length % 3 === 0) {
                                    value = number;
                                    number = 0;
                                }
                            } else if (threes.length > 4 && fives.length < 2) {
                                if (threes.length % 5 === 0) {
                                    value = number;
                                    number = 0;
                                }
                            }

                        }

                        setTimeout(function () {
                            number--;
                            processNumber(number);
                        },  0);
                    } else {
                        console.log(value);
                    }
                };

                processNumber(max);



            });
        }
    };

    sherlockBeast.main();
})();
