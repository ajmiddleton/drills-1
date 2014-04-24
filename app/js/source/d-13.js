(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#compute').click(compute);
  }

  function compute(){
    var ranges = $('#numbers').val().split('-');
    var numbersAdd = ranges[0].split('+').map(snip).map(convertToNum).filter(isOdd);
    var numbersProd = ranges[1].split('*').map(snip).map(convertToNum).filter(isOdd);

    var totalSum = 0;
    var totalProd = 0;
    for(var i=0; i<numbersAdd.length; i++){
      totalSum += numbersAdd[i];
    }
    for(i=0; i<numbersProd.length; i++){
      totalProd *= numbersProd[i];
    }

    $('#sum').text(totalSum);
    $('#prod').text(totalProd);
  }

  function snip(x){
    return x.trim();
  }

  function convertToNum(x){
    return x*1;
  }

  function isOdd(x){
    return x%2;
  }

})();
