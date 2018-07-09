import React, { Component } from 'react';
import LineChart1 from './lineChart'; 
import BarChart1 from './barChart'; 
import AreaChart1 from './areaChart'; 
import PieChart1 from './pieChart'; 

class MyChart extends Component {
  render() {
    return (
      <div className="flex-container">
        <LineChart1/>
        <BarChart1/>
        <AreaChart1/>
        <PieChart1/>
      </div>
    )
  }
}

export default MyChart;