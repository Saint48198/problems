/**
 * Created by sdaniels on 9/7/15.
 */
var foo = [12];
var num = 0;
var max  = 0;
for(var i = 0, total = foo.length; i < total; i++) {
    num = foo[i];
    max = num;
    while(num) {
        num--;
        console.log(max, num);
        if ((max % num) === 0) {
            console.log(num);
        }
    }
}