(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    placeBig();
    placeSmall();
    $('body').on('click', '.big', selectDiv);
    $('body').on('click', '.small', selectDiv);
    $('body').keydown(move);
  }

  function selectDiv(event){
    $('.selected').toggleClass('selected');
    $(this).toggleClass('selected');
    event.StopPropogation();
  }

  function placeBig(){
    //debugger;
    var $newDiv = $('<div>').addClass('big');
    $('body').append($newDiv);

    var w = window.innerWidth - $newDiv.width();
    var h = window.innerHeight - $newDiv.height();
    var randW = Math.floor(Math.random()* w);
    var randH = Math.floor(Math.random()*h);
    $newDiv.css('left', randW).css('top', randH);
  }

  function placeSmall(){
    var $newDiv = $('<div>').addClass('small');
    $('.big').append($newDiv);

    var w = $('.big').width() - $newDiv.width();
    var h = $('.big').height() - $newDiv.height();
    var randW = Math.floor(Math.random()*w);
    var randH = Math.floor(Math.random()*h);
    $newDiv.css('left', randW).css('top',randH);
  }

  function move(event){
    var currentX = $('.selected').css('left').replace('px','') * 1;
    var currentY = $('.selected').css('top').replace('px','') * 1;
    var boundX = $('.selected').parent().width() - $('.selected').width();
    var boundY = $('.selected').parent().height() - $('.selected').height();

    switch(event.keyCode){
    case 37:if(currentX > 1){ currentX--;}
      break;
    case 38:if(currentY > 1){ currentY--;}
      break;
    case 39:if(currentX < boundX){ currentX++;}
      break;
    case 40:if(currentY < boundY){ currentY++;}
      break;
    }

    $('.selected').css('left', currentX).css('top', currentY);
  }
})();
