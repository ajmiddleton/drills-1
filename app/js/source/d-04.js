(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#compute').click(compute);
  }

  function compute(){
    var numbers = $('#numbers').val().split('-');
    var bases = numbers[0].split(', ');
    var powers = numbers[1].split(', ');

    var results = transform(bases,powers);

    for(var i=0;i<bases.length;i++){
      createDiv(bases[i],powers[i],results[i]);
    }


  }

  function transform(base,power){
    var r = [];
    for(var i=0; i<base.length; i++){
      r.push(Math.pow(base[i], power[i]));
    }
    return r;
  }

  function createDiv(base, power, res){
    var $box = $('<div>').addClass('number-box');
    var $top = $('<div>').addClass('top');
    var $bottom = $('<div>').addClass('bottom');

    $top.append('<span>' + base + '</span><sup>' + power + '</sup>');
    $bottom.text(res);
    $box.append($top);
    $box.append($bottom);

    $('#result').append($box);
  }
})();
