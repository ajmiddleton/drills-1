/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(get);
  }

  function get(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/6a50cc2bf300d4db/conditions/q/'+zip+'.json?callback=?';
    $.getJSON(url, weather);
  }

  function weather(conditions){
    console.log(conditions);
    var $img = $('<img>');
    $img.attr('src', conditions.current_observation.icon_url);
    $('#weather').append($img);
    $('#weather').append('<span>' +conditions.current_observation.temperature_string + '</span>');
  }
})();
