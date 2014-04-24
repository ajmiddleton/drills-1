(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#compute').click(compute);
  }

  function compute(){
    var numbers = $('#numbers').val().split(',');
    numbers = numbers.map(snip).map(convertToNum).map(assignment);

    $('#result').text(numbers);
  }

  function assignment(x){
    if(isOdd(x)){
      return cube(x);
    }
    else{
      return sq(x);
    }
  }

  function snip(x){
    return x.trim();
  }

  function isOdd(x){
    return x%2;
  }

  function sq(x){
    return x*x;
  }

  function cube(x){
    return Math.pow(x,3);
  }

  function convertToNum(x){
    return x*1;
  }

})();
