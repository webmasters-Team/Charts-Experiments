var data = [{
    department: "Admin",
    month: "June",
    employees: 20
  }, {
    department: "Admin",
    month: "July",
    employees: 25
  }, {
    department: "Development",
    month: "June",
    employees: 41
  }, {
    department: "Development",
    month: "July",
    employees: 46
  },{
    department: "Marketing",
    month: "June",
    employees: 31
  }, {
    department: "Marketing",
    month: "July",
    employees: 25
  }, {
    department: "Operations",
    month: "June",
    employees: 26
  }, {
    department: "Operations",
    month: "July",
    employees: 27
  }, {
    department: "Sales",
    month: "June",
    employees: 68
  }, {
    department: "Sales",
    month: "July",
    employees: 72
  }];
  
  // Get unique set of category labels
  var categoryLabelMap = {};
  var categoryLabels = [];
  data.forEach(function(d) { 
    var label = d.department;
    if (categoryLabelMap[label]) {
      return;
    }
    categoryLabelMap[label] = true;
    categoryLabels.push(label);
  });
  
  Highcharts.theme = {
      colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', 
               '#FF9655', '#FFF263', '#6AF9C4'],
      title: {
          style: {
              color: '#000',
              font: 'bold 16px Arial, Verdana, sans-serif'
          }
      },
      subtitle: {
          style: {
              color: '#666666',
              font: 'bold 12px Arial, Verdana, sans-serif'
          }
      },
  
      legend: {
          itemStyle: {
              font: '9pt Arial, Verdana, sans-serif',
              color: 'black'
          },
          itemHoverStyle:{
              color: 'gray'
          }   
      }
  };
  
  Highcharts.setOptions(Highcharts.theme);
  
  // Bar chart
  (function() {
    var barChart = new Highcharts.Chart({
      chart: {
        renderTo: 'bar',
        type: 'bar',
        width: 500,
        height: 300
      },
      title: {
        text: 'Employees by Department'
      },
      xAxis: {
        categories: categoryLabels,
        title: {
          text: 'Department'
        }
      },
      yAxis: {
        title: {
          text:'Employees'
        },
        min: 0,
        max: 100,
        tickInterval: 10
      },
      legend: {
        enabled: false
      },
      series: [{ 
        name: 'Employees', 
        data: data.filter(function(d) { 
          return d.month === 'June';
        }).map(function(d) { 
          return d.employees; 
        }) 
      }]
    });
  })();
  
  // Multi-series bar chart
  (function() {
    var chart = new Highcharts.Chart({
      chart: {
        renderTo: 'multibar',
        type: 'bar',
        width: 500,
        height: 300
      },
      title: {
        text: 'Employees by Department'
      },
      xAxis: {
        categories: categoryLabels,
        title: {
          text: 'Department'
        }
      },
      yAxis: {
        title: {
          text:'Employees'
        },
        min: 0,
        max: 100,
        tickInterval: 10
      },
      legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top'
      },
      series: [{ 
        name: 'June Headcount', 
        data: data.filter(function(d) { 
          return d.month === 'June';
        }).map(function(d) { 
          return d.employees; 
        }) 
      }, { 
        name: 'July Headcount', 
        data: data.filter(function(d) { 
          return d.month === 'July';
        }).map(function(d) { 
          return d.employees; 
        }) 
      }]
    });
  })();
  
  // Column chart
  (function() {
    var chart = new Highcharts.Chart({
      chart: {
        renderTo: 'column',
        type: 'column',
        width: 500,
        height: 300
      },
      title: {
        text: 'Employees by Department'
      },
      xAxis: {
        categories: categoryLabels,
        title: {
          text: 'Department'
        }
      },
      yAxis: {
        title: {
          text:'Employees'
        },
        min: 0,
        max: 100,
        tickInterval: 20
      },
      legend: {
        enabled: false
      },
      series: [{ 
        name: 'Employees', 
        data: data.filter(function(d) {
          return d.month === 'June';
        }).map(function(d) { 
          return d.employees 
        }) 
      }]
    });
  })();
  
  // Multi-series column chart
  (function() {
    var chart = new Highcharts.Chart({
      chart: {
        renderTo: 'multicolumn',
        type: 'column',
        width: 500,
        height: 300
      },
      title: {
        text: 'Employees by Department'
      },
      xAxis: {
        categories: categoryLabels,
        title: {
          text: 'Department'
        }
      },
      yAxis: {
        title: {
          text:'Employees'
        },
        min: 0,
        max: 100,
        tickInterval: 20
      },
      legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top'
      },
      series: [{ 
        name: 'June headcount', 
        data: data.filter(function(d) {
          return d.month === 'June';
        }).map(function(d) { 
          return d.employees 
        }) 
      },{ 
        name: 'July headcount', 
        data: data.filter(function(d) {
          return d.month === 'July';
        }).map(function(d) { 
          return d.employees 
        }) 
      }]
    });
  })();
  
  // Line chart
  (function() {
    var chart = new Highcharts.Chart({
      chart: {
        renderTo: 'line',
        type: 'line',
        width: 500,
        height: 300
      },
      title: {
        text: 'Employees by Department'
      },
      xAxis: {
        categories: categoryLabels,
        title: {
          text: 'Department'
        }
      },
      yAxis: {
        title: {
          text:'Employees'
        },
        min: 0,
        max: 100,
        tickInterval: 20
      },
      legend: {
        enabled: false
      },
      series: [{ 
        name: 'Employees', 
        data: data.filter(function(d) {
          return d.month === 'June';
        }).map(function(d) { 
          return d.employees;
        }) 
      }]
    });  
  })();
  
  // Multi-series line chart
  (function() {
    var chart = new Highcharts.Chart({
      chart: {
        renderTo: 'multiline',
        type: 'line',
        width: 500,
        height: 300
      },
      title: {
        text: 'Employees by Department'
      },
      xAxis: {
        categories: categoryLabels,
        title: {
          text: 'Department'
        }
      },
      yAxis: {
        title: {
          text:'Employees'
        },
        min: 0,
        max: 100,
        tickInterval: 20
      },
      legend: {
        enabled: true,
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top'
      },
      series: [{ 
        name: 'June Headcount', 
        data: data.filter(function(d) {
          return d.month === 'June';
        }).map(function(d) { 
          return d.employees;
        }) 
      }, { 
        name: 'July Headcount', 
        data: data.filter(function(d) {
          return d.month === 'July';
        }).map(function(d) { 
          return d.employees;
        }) 
      }]
    });  
  })();
  
  // Pie chart
  (function() {
    var chart = new Highcharts.Chart({
      chart: {
        renderTo: 'pie',
        type: 'pie',
        width: 500,
        height: 300
      },
      title: {
        text: 'Employees by Department'
      },
      plotOptions: {
        pie: {
          dataLabels: {
            enabled: true
          },
          startAngle: 45
        }
      },
      series: [{ 
        name: 'Employees', 
        data: data.filter(function(d) {
          return d.month === 'June';
        }).map(function(d) { 
          return { name: d.department, y: d.employees }; 
        }),
        states: {
          hover: {
            halo: {
              size: 0
            }
          }
        }
      }]
    });
  })();
  