(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#compute').click(compute);
  }

  function compute(){
    var numbers = $('#numbers').val().split(', ');
    numbers = numbers.map(convertToNum);
    numbers = makeArray(numbers[0], numbers[1]);
    console.log(numbers);

    var sums = [];
    while(numbers.length > 1){
      sums.push(numbers[0] + numbers[numbers.length-1]);
      numbers = numbers.slice(1);
      numbers.pop();
    }

    if(numbers.length === 1){
      sums.push(numbers[0]);
    }

    sums = sums.join(', ');
    $('#result').text(sums);
  }

  function convertToNum(x){
    return x*1;
  }

  function makeArray(x,y){
    var arr = [];
    for(var i=x; i<=y; i++){
      arr.push(i);
    }
    return arr;
  }

})();
