(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#color-box').click(randomize);
  }

  function randomize(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    var a = Math.random();

    var color = 'rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
    $('#color-box').css('background-color', color);
  }

})();
