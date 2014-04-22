(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#compute').click(compute);
  }

  function compute(){
    var numbers = $('#numbers').val().split(',');
    numbers = numbers.map(fourth);

    numbers.forEach(createDiv);
  }

  function fourth(element){
    return Math.pow(element,4);
  }

  function createDiv(element){
    var $newDiv =$('<div>').text(element).addClass('number-box');
    $('#result').append($newDiv);
  }
})();
