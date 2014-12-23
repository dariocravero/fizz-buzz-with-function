!function() {
  'use strict';

  function fizzbuzz(countUpTo) {
    var values = [];

    for(var i=1; i < countUpTo; i++) {
      var value,
          mod3 = i%3 === 0,
          mod5 = i%5 === 0;

      if (mod3) {
        if(mod5) {
          value = "fizz-buzz";
        } else {
          value = "fizz";
        }
      } else if (mod5) {
        value = "buzz";
      } else {
        value = i;
      }

      values.push(value);
    };

    return values;
  }

  var stringInput = prompt();
  var x = +stringInput;

  // $('#fizzbuzz').html(fizzbuzz(x).join("<br>"));
  document.getElementById('fizzbuzz').innerHTML = fizzbuzz(x).join("<br>");
}();
