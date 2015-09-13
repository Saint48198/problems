(function () {
    "use strict";

    function processData() {
        var dimension = 3;
        var grid = [ '--p', '-m-', '---' ];
        displayPathtoPrincess(dimension, grid);
    }

    function displayPathtoPrincess(dimension, grid) {
        var DIRECTIONS = ["UP", "DOWN", "LEFT", "RIGHT"];
        var bIndex = [0,0];
        var pIndex = [0,0];
        var diff = 0;
        var sDirection = "";
        for (var i = 0; i < dimension; i++) {
            if (grid[i].indexOf("p") !== -1) {
                pIndex = [i, grid[i].indexOf("p")];
            } else if (grid[i].indexOf("m") !== -1) {
                bIndex = [i, grid[i].indexOf("m")];
            }
        }

        if (bIndex[0] < pIndex[0]) {
            diff = pIndex[0] - bIndex[0];
            sDirection = DIRECTIONS[1];
        } else if (bIndex[0] > pIndex[0]) {
            diff = bIndex[0] - pIndex[0];
            sDirection = DIRECTIONS[0];
        }


        while(diff) {
            diff--;
            console.log(sDirection);
        }

        if (bIndex[1] > pIndex[1]) {
            diff = bIndex[1] - pIndex[1];
            sDirection = DIRECTIONS[2];
        } else if (bIndex[1] < pIndex[1]) {
            diff = pIndex[1] - bIndex[1];
            sDirection = DIRECTIONS[3];
        }

        while(diff) {
            diff--;
            console.log(sDirection);
        }
    }

    processData();

})()