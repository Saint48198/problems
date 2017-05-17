
var module1 =  (function() {
  "use strict";
  
  var count = 0;
  
  
  var publicApi = {
    inc: function () {
      count++;
    },
    dec: function () {
      count--;
    },
    get: function () {
      return count;
    }
  };
  
  return publicApi;
  
})();
console.log(module1.get());
module1.inc();
console.log(module1.get());