google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Internships', 'Number of students'],
    ['Indian Oil Corporatitions',1],
    ['Frappe Technologies',1],
    ['Balcony Technologies	', 1],
    ['Pristine Inc. Pvt Ltd.	', 1],
    ['Godrej Infotech Ltd	',1],
    ['Salaam Balaak', 3],
    ['Sizzle Labs Gennext Innovation Hub	',1],
    ['BuyRight Pvt Ltd.	',2],
  ]);

  var options = {
    title: 'Internship offered to students',
    pieSliceText: 'label',
  };

  var chart = new google.visualization.PieChart(document.getElementById('2017internship'));

  chart.draw(data, options);
}
