(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#compute').click(compute);
  }

  function compute(){
    var x = $('#num1').val() *1;
    var y = $('#num2').val() *1;

    $('#result').text(x+y);
  }
})();
