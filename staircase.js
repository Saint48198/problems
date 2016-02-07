(function() {
    "use strict";
    var staircase = {
        main: function () {
            var n = 6;
            var len = n;
            var str = '';
            var output = '';

            while(len) {
                str += "#";
                len--;

                if (len === 0) {
                    len = str.length - 1;

                    if (str.length !== n) {
                        str = new Array((n - str.length) + 1).join(" ") + str;
                    }

                    output = str + "\n" + output;
                    str = '';
                }
            }

            console.log(output);
        }
    }

    staircase.main();
})();
