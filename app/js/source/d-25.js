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
    //debugger;
      var symbol = $('#symbol').val().trim().toUpperCase();
      var shares = $('#shares').val().trim() *1;
      var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
      $.getJSON(url, function(data){
        //debugger;
        var obj = {};
        obj.company = data.Name;
        obj.position = data.LastPrice * shares;
        var companyIndex = findCompany(obj.company);
        if(companyIndex > -1){
          chart.dataProvider[companyIndex].position += obj.position;
        }else{
          chart.dataProvider.push(obj);
        }
        chart.validateData();
      });
  }

  function findCompany(company){
    //debugger;
    for(var i=0; i< chart.dataProvider.length; i++){
      if(chart.dataProvider[i].company === company){
        return i;
      }
    }
    return -1;
  }
  var chart;

  function makeGraph(){
    chart = AmCharts.makeChart('graph', {
        'type': 'pie',
    	  'theme': 'dark',
        'titles': [{
            'text': 'Stock Positions',
            'size': 16
        }],
        'dataProvider': [],
        'valueField': 'position',
        'titleField': 'company',
        'startEffect': 'elastic',
        'startDuration': 2,
        'labelRadius': 15,
        'innerRadius': '50%',
        'depth3D': 10,
        'balloonText': '[[title]]<br><span style="font-size:14px"><b>[[value]]</b> ([[percents]]%)</span>',
        'angle': 15,
        'exportConfig':{
          menuItems: [{
          icon: '/lib/3/images/export.png',
          format: 'png'
          }]
    	   }
      });
  }
})();
