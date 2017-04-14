(function () {
    "use strict";

    /*var input = [[1, 1,  1,  0,  0, 0],
                [ 0, 1,  0,  0,  0, 0],
                [ 1, 1,  1,  0,  0, 0],
                [ 0, 9,  2, -4, -4, 0],
                [ 0, 0,  0, -2,  0, 0],
                [ 0, 0, -1, -2, -4, 0]];*/
    var input =[
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0]
    ];

    var grid = input;
    var hg = {};
    var amounts = [];

    grid.forEach(function (numbers, indexL) {
        var id = "g" + indexL;
        var total = 0;

        numbers.forEach(function (n, indexN) {

            if (numbers[indexN + 1] !== undefined & numbers[indexN + 2] !== undefined && grid[indexL + 1] !== undefined && grid[indexL + 2] !== undefined) {
                if (!hg[id + indexN]) {
                    hg[id + indexN] = [];
                    total = 0;
                }

                for (var i = indexN, totalHG = indexN + 3; i < totalHG; i++) {
                    hg[id + indexN].push(numbers[i]);
                    total = total + numbers[i];
                }

                hg[id + indexN].push(grid[indexL + 1][indexN +1]);
                total = total + grid[indexL + 1][indexN + 1];

                for (var i = indexN, totalHG = indexN + 3; i < totalHG; i++) {
                    hg[id + indexN].push(grid[indexL + 2][i]);
                    total = total + grid[indexL + 2][i];
                }

                amounts.push(total);
            }

        });
    });

    console.log(Math.max(...amounts));
})();
