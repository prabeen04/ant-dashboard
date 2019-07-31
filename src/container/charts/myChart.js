import React, { Component } from 'react';
import LineChart1 from './lineChart';
import BarChart1 from './barChart';
import AreaChart1 from './areaChart';
import PieChart1 from './pieChart';

function MyChart(props) {
  return (
    <div className="flex-container" style={{ flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
      <LineChart1 height={props.height} width={props.width} />
      <BarChart1 height={props.height} width={props.width} />
      <AreaChart1 height={props.height} width={props.width} />
      <PieChart1 height={props.height} width={props.width} />
    </div>
  )
}

export default MyChart;