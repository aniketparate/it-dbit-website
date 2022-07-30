google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Dream Package', '>5 LPA', '<5 LPA'],
        ['2019 - 2020', 34, 9],
        ['2018 - 2019', 28, 12],
        ['2017 - 2018', 20, 25],
        ['2016 - 2017', 29, 21],
      ]);

      var options = {
        title: 'Dream Package Offered @ IT',
        chartArea: {width: '50%'},
        isStacked: true,
        hAxis: {
          title: 'Number Of Students',
          minValue: 0,
        },
        vAxis: {
          title: 'Academic Years'
        }
      };
      var chart = new google.visualization.BarChart(document.getElementById('dreamPackage'));
      chart.draw(data, options);
    }