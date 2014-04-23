(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#color-box').click(toggleMe);
  }

  function toggleMe(){
    $('#color-box').toggleClass('red');
  }

})();
