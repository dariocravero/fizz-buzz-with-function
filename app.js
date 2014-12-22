
$(document).ready(function(){

var fizzbuzz = function(countUpTo){
  
  for(i=1;i<countUpTo;i++){
  if (i%3==0){
    if(i%5==0){
      $('#fizzbuzz').append("<p>" + "fizz-buzz" + "</p>");
    }
    else {
      $('#fizzbuzz').append("<p>" + "fizz" + "</p>");
    }
  }
  else if (i%5==0){
    $('#fizzbuzz').append("<p>" + "buzz" + "</p>");
  }
    else{
      $('#fizzbuzz').append("<p>" + i + "</p>");
    }
  };
}

  var stringInput = prompt();
   var x = +stringInput;
   fizzbuzz(x);


});