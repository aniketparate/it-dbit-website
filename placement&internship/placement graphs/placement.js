google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['Number of Students', 'Placed',],
        ['2019 - 2020', 50],
        ['2018 - 2019', 35],
        ['2017 - 2018', 40],
        ['2016 - 2017', 43],
      ]);

      var options = {
        title: 'Placement @ IT',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Number of students',
          minValue: 0
        },
        vAxis: {
          title: 'Academic year'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('placed'));

      chart.draw(data, options);
    }