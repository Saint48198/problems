(function () {
    "use strict";
    var timeConversion = {
        main: function () {
            var time = "07:05:45AM";
            //var time = "12:40:03AM";
            var timeParts = time.split(":");
            var hrs = timeParts[0] * 1;
            var seconds = timeParts[2].split("AM").join("").split("PM").join("");

            if (/PM/.test(timeParts[2]) && hrs !== 12) {
                timeParts[0] = hrs + 12;
            } else if(/PM/.test(timeParts[2]) === false && hrs === 12) {
                timeParts[0] = "00";
            }

            console.log(timeParts[0] + ":" + timeParts[1] + ":" + seconds);
        }
    };
    timeConversion.main();
})();
