(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#compute').click(compute);
  }

  function compute(){
    var numbers = $('#numbers').val().split(', ');
    var index = numbers.length -3;
    numbers = numbers.slice(index);
    numbers = numbers.join(', ');

    $('#result').text(numbers);
  }

})();
