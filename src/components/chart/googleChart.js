import React from 'react';
import GoogleChartLoader from "./GoogleChartLoader";

export class GoogleChart extends React.Component {
  constructor(props) {    
    super(props);    
  }

  componentDidMount() {
    if (typeof window === "undefined") {
        return;
    }
    if (this.props.loadCharts) {
        GoogleChartLoader.init().then(() => {
            this.drawChart();
        });
    } else {
        this.drawChart();
    }
  }

  componentDidUpdate() {
    if (!this.props.loadCharts) {
     this.drawChart();
    } else if (GoogleChartLoader.isLoading) {
      GoogleChartLoader.initPromise.then(() => {
        this.drawChart();
      });
    } else if (GoogleChartLoader.isLoaded) {
      this.drawChart();
    }
  }

  componentWillUnmount() {
    try {
      if (window) {
        if (window.google && window.google.visualization) {
          window.google.visualization.events.removeAllListeners(this.wrapper);
        }
      }
    } catch (err) {
      return;
    }
  }

  
  drawChart() {  
    var data = google.visualization.arrayToDataTable([
      ['Year', 'Sales', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('test'));

    chart.draw(data, options);

    var data1 = google.visualization.arrayToDataTable([
      ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
      ['2004/05',  165,      938,         522,             998,           450,      614.6],
      ['2005/06',  135,      1120,        599,             1268,          288,      682],
      ['2006/07',  157,      1167,        587,             807,           397,      623],
      ['2007/08',  139,      1110,        615,             968,           215,      609.4],
      ['2008/09',  136,      691,         629,             1026,          366,      569.6]
   ]);

  var options1 = {
    title : 'Monthly Coffee Production by Country',
    vAxis: {title: 'Cups'},
    hAxis: {title: 'Month'},
    seriesType: 'bars',
    series: {5: {type: 'line'}}
  };

  var chart1 = new google.visualization.ComboChart(document.getElementById('test1'));
  chart1.draw(data1, options1);
  }  

  render() {
    return (
        <div>
            <div id="test" className="innter-chart"></div>
            <div id="test1" className="innter-chart"></div>
        </div>
    );
  }
}
  
