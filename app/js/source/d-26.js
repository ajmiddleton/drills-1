/* jshint camelcase:false */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#get').click(get);
  }

  function get(){
    var zip = $('#zip').val().trim();
    var url = 'http://api.wunderground.com/api/6a50cc2bf300d4db/forecast10day/q/'+zip+'.json?callback=?';
    $.getJSON(url, weather);
  }

  function weather(data){
    var temps = data.forecast.simpleforecast.forecastday.map(getTemp);
    var icons = data.forecast.simpleforecast.forecastday.map(getIcon);
    var days = data.forecast.simpleforecast.forecastday.map(getDay);

    var forecast = makeDivs(temps, icons, days);
    $('#weather').append(forecast);
  }

  function makeDivs(temps, icons, days){
    var divs = [];
    for(var i=0; i<temps.length; i++){
      var $tempContainer = $('<div class="forecastDay">').css('display', 'inline-block');
      var $tempIcon = $('<img>').attr('src', icons[i]);
      var $tempTemp = $('<span>').text(temps[i]);
      var $tempDay = $('<p>').text(days[i]);
      $tempContainer.append($tempIcon).append($tempTemp).append($tempDay);
      divs.push($tempContainer);
    }

    return divs;
  }

  function getDay(data){
    return data.date.weekday;
  }

  function getTemp(data){
    return data.high.fahrenheit;
  }

  function getIcon(data){
    return data.icon_url;
  }
})();
