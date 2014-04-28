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
        var temp = data.current_observation.temp_f;
        var chartObj = {'zip': zip, 'temp': temp};
        chart.dataProvider.push(chartObj);
        chart.validateData();
      });
  }

  var chart;

  function makeGraph(){
  chart = AmCharts.makeChart('graph', {
        'type': 'serial',
        'theme': 'light',
        'dataProvider': [],
        'valueAxes': [{
            'gridColor':'#FFFFFF',
    		'gridAlpha': 0.2,
    		'dashLength': 0
        }],
        'gridAboveGraphs': true,
        'startDuration': 1,
        'graphs': [{
            'balloonText': '[[category]]: <b>[[value]]</b>',
            'fillAlphas': 0.8,
            'lineAlpha': 0.2,
            'type': 'column',
            'valueField': 'temp'
        }],
        'chartCursor': {
            'categoryBalloonEnabled': false,
            'cursorAlpha': 0,
            'zoomable': false
        },
        'categoryField': 'zip',
        'categoryAxis': {
            'gridPosition': 'start',
            'gridAlpha': 0
        },
    	'exportConfig':{
    	  'menuTop': 0,
    	  'menuItems': [{
          'icon': '/lib/3/images/export.png',
          'format': 'png'
          }]
    	}
    });
  }
})();
