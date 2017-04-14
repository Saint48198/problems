(function () {
    "use strict";

    var input = "4\n" +
        "aba\n" +
        "baba\n" +
        "aba\n" +
        "xzxb\n" +
        "3\n" +
        "aba\n" +
        "xzxb\n" +
        "ab";

    function processInput(input) {
        var inputArray =  input.split("\n");
        var totalStrings = inputArray[0];
        var strings = inputArray.slice(1, parseInt(totalStrings) + 1);
        var queries = inputArray.slice(parseInt(totalStrings) + 2);
        var total = 0;

        queries.forEach(function (query) {
            var total = 0;

            strings.forEach(function (string) {
                if (query === string) {
                    total++;
                }
            });

            console.log(total);
        });
    }

    processInput(input);
})();
