(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#case').click(changeCase);
  }

  function changeCase(){
    var words = $('#words').val().split(',');
    console.log(words);

    for(var i=0; i< words.length; i++){
      var $div = $('<div>').addClass('text-box');
      if(words[i]%2){
        $div.text(words[i].toLowerCase()).addClass('red');
        $('#result').append($div);
      }else{
        $div.text(words[i].toUpperCase()).addClass('green');
        $('#result').append($div);
      }
    }
  }
})();
