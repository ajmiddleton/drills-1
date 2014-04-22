(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#compute').click(compute);
  }

  function compute(){
    var numbers = $('#numbers').val().split(', ');
    numbers = numbers.map(sq).filter(isEven).forEach(makeDiv);
  }

  function sq(x){
    return x*x;
  }

  function isEven(x){
    return x%2 === 0;
  }

  function makeDiv(x){
    $('#result').append($('<div>').addClass('number-box').text(x));
  }
})();
