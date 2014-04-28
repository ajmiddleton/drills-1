/* global AmCharts:true */
/* jshint camelcase:false */

(function(){
  'use strict';
  $(document).ready(init);

  function init(){
    makeGraph();
    $('#add').click(add);
  }

  function add(){
      var zip = $('#zip').val().trim();
      var url = 'http://api.wunderground.com/api/6a50cc2bf300d4db/conditions/q/'+zip+'.json?callback=?';
      $.getJSON(url, function(data){
        var temp = data.current_observation.temperature_string;
        var lat = data.current_observation.display_location.latitude;
        var long = data.current_observation.display_location.longitude;
        var city = data.current_observation.display_location.city;
        
        var mapObj = {svgPath: targetSVG, zoomLevel:5, scale: 0.5, title: city + ': ' + temp, latitude: lat, longitude: long};
        chart.dataProvider.images.push(mapObj);
        chart.validateData();
      });
  }

  var chart;
  var targetSVG = 'M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z';


  function makeGraph(){
    chart = AmCharts.makeChart('graph', {
    	type: 'map',
      'theme': 'none',
      pathToImages: 'http://www.amcharts.com/lib/3/images/',

    	imagesSettings: {
    		rollOverColor: '#089282',
    		rollOverScale: 3,
    		selectedScale: 3,
    		selectedColor: '#089282',
        color:'#13564e'
    	},

      zoomControl:{buttonFillColor:'#15A892'},

      areasSettings:{unlistedAreasColor:'#15A892'},

    	dataProvider: {
        map: 'worldLow',
        images: []

      }
    });
  }
})();
