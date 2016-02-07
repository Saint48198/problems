(function () {
    "use strict";
    var sherlockBeast = {
        main: function () {
            // 1, 3, 5, 11
            var numbers = [11];
            var fails = -1;

            numbers.forEach(function (n) {
                var max = Math.pow(10, n) - 1;
                var number = -1;
                var threes = [];
                var fives = [];

                while(max) {
                    threes = [];
                    fives = [];

                    if (max.toString().length === n) {
                        if ((/^[3]+$/.test(max.toString()) || /^[5]+$/.test(max.toString()))) {
                            console.log(max);

                            var threes = max.toString().split("").filter(function(val) {
                                return val === "3";
                            });

                            var fives = max.toString().split("").filter(function(val) {
                                return val === "5";
                            });

                            if (threes.length > 4 && fives.length > 2) {
                                if (threes.length % 5 === 0 && fives.length % 3 === 0) {
                                    number = max;
                                    break;
                                }
                            } else if (threes.length < 4 && fives.length > 2) {
                                if (fives.length % 3 === 0) {
                                    number = max;
                                    break;
                                }
                            } else if (threes.length > 4 && fives.length < 2) {
                                if (threes.length % 5 === 0) {
                                    number = max;
                                    break;
                                }
                            }

                        }
                    } else {
                        break;
                    }
                    max--;
                }

                console.log(number);
            });
        }
    };

    sherlockBeast.main();
})();
