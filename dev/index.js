function handleClick(idstr) {
    $(idstr).remove(); // Hide
}


function drawChart_index() {
  //Define general options for all graphs
    var options = {
        legend: { position: "none" }, 
        vAxis: {minValue: 0},
        hAxis: {minValue: 0},
    };
    var pieChartOptions = {
        chartArea: {left:0, 'width': '200%', 'height': '200%'}
    }
    
  // Define chart for square 1
  var data1 = google.visualization.arrayToDataTable([
         ['Search Term', 'Occurences', { role: 'annotation' }, { role: 'style' }],
         ['"pro"', 22724, 22727, '#fdc010'],
         ['"eas"', 22643, 22643, '#8bc34a'],        
         ['"men"', 22307, 22307, '	#43a047'],
         ['"x to o"', 17222, 17222, '#009688' ],
         ['"ener g"', 15167,15167, '#09bcd3' ],
      ]);

  // Define chart for square 3
  var data3 = google.visualization.arrayToDataTable([
         ['Cart Item', 'Occurences', { role: 'annotation' }, { role: 'style' }],
         ['Cardio Factors', 162, 162, '#fdc010'],
         ['Earth Friendly Products', 156, 156, '#8bc34a'],        
         ['NUTIVA Coconut Manna', 118, 118, '	#43a047'],
         ['Source Naturals Wellness Formula', 104, 104, '#009688' ],
         ['Lipo-6 Hers', 88,88, '#09bcd3' ],
      ]);
  
  // Define chart for square 4
  var data4 = new google.visualization.DataTable();
  data4.addColumn('string', 'Element');
  data4.addColumn('number', 'Percentage');
  data4.addRows([
    ['New', .25],
    ['Returning', 0.75]
  ]);
  

  // Instantiate and draw the chart.
  var chart1 = new google.visualization.BarChart(document.getElementById('square1Graph'));
  var chart3 = new google.visualization.ColumnChart(document.getElementById('square3Graph'));
  var chart4 = new google.visualization.PieChart(document.getElementById('square4Graph'));

  
  chart1.draw(data1, options);
  chart3.draw(data3, options);
  chart4.draw(data4, pieChartOptions);
}

function drawChart_cart() {
  //Define general options for all graphs
    var options = {
        legend: { position: "none" }, 
        vAxis: {minValue: 0},
        hAxis: {minValue: 0},
    };
    var pieChartOptions = {
        chartArea: {left:0, 'width': '200%', 'height': '200%'}
    }
    
  
  //Define chart for added cart items
  var added_cart_data = google.visualization.arrayToDataTable([
         ['Cart Item', 'Occurences', { role: 'annotation' }, { role: 'style' }],
         ['Cardio Factors', 164, 164, '#fdc010'],
         ['Earth Friendly Products', 157, 157, '#8bc34a'],        
         ['NUTIVA Coconut Manna', 120, 120, '	#43a047'],
         ['Source Naturals Wellness Formula', 104, 104, '#009688' ],
         ['Lipo-6 Hers', 88, 88, '#09bcd3' ],
    ]);

  // Define chart for square 4
  var type_data = new google.visualization.DataTable();
  type_data.addColumn('string', 'Element');
  type_data.addColumn('number', 'Percentage');
  type_data.addRows([
    ['cardio', .25],
    ['enzyme', 0.75],
    ['supplement', 0.75]
  ]);
    
  //Instantiate and draw the chart.
  var added_to_cart = new google.visualization.ColumnChart(document.getElementById('cartChart1'));
  var item_types = new google.visualization.PieChart(document.getElementById('cartChart2'));

  added_to_cart.draw(added_cart_data, options);
  item_types.draw(type_data, pieChartOptions);
}

function drawChart_customers() {
  //Define general options for all graphs
    var options = {
        legend: { position: "none" }, 
        vAxis: {minValue: 0},
        hAxis: {minValue: 0},
        chartArea: {  width: "40%", height: "100%" },
    };
    var pieChartOptions = {
        chartArea: {left:0, 'width': '200%', 'height': '200%'}
    }
    
  //Define chart for added cart items
  var customer_data = google.visualization.arrayToDataTable([
         ['Type of Customer', 'Amount', { role: 'annotation' }, { role: 'style' }],
         ['In-Store Shoppers', 5000, 5000, '#fdc010'],
         ['Newsletter Subscribers', 1000, 1000, '#8bc34a'],        
         ['Online Shoppers', 100, 100, '	#43a047'],
         ['Online Accounts', 572, 572, '#009688' ],
    ]);
    
    // Define chart for square 4
  var newvsreturn = new google.visualization.DataTable();
  newvsreturn.addColumn('string', 'Element');
  newvsreturn.addColumn('number', 'Percentage');
  newvsreturn.addRows([
    ['New', .25],
    ['Returning', 0.75]
  ]);
    
  //Instantiate and draw the chart.
  var customers = new google.visualization.BarChart(document.getElementById('customersChart'));
  var newret1 = new google.visualization.PieChart(document.getElementById('custChart'));

  customers.draw(customer_data, options);
  newret1.draw(newvsreturn, pieChartOptions);

}