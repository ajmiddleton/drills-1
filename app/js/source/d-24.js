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
        var wind = data.current_observation.wind_mph;
        chart.arrows[0].setValue(wind);
        chart.axes[0].setBottomText(wind + ' mph');
      });
  }

  var chart;

  function makeGraph(){
  chart = AmCharts.makeChart('graph', {
        'type': 'gauge',
    	  'theme': 'dark',
        'axes': [{
            'axisThickness':1,
             'axisAlpha':0.2,
             'tickAlpha':0.2,
             'valueInterval':5,
            'bands': [{
                'color': '#84b761',
                'endValue': 10,
                'startValue': 0
            }, {
                'color': '#fdd400',
                'endValue': 15,
                'startValue': 10
            }, {
                'color': '#cc4748',
                'endValue': 20,
                'innerRadius': '95%',
                'startValue': 15
            }],
            'bottomText': '0 mph',
            'bottomTextYOffset': -20,
            'endValue': 20
        }],
        'arrows': [{}]
    });
  }
})();
