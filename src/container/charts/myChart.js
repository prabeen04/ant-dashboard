import React, { Component } from 'react';
import LineChart1 from './lineChart'; 
import BarChart1 from './barChart'; 
import AreaChart1 from './areaChart'; 
import PieChart1 from './pieChart'; 

class MyChart extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div className="flex-container">
        <LineChart1 height={this.props.height} width={this.props.height}/>
        <BarChart1 height={this.props.height} width={this.props.height}/>
        <AreaChart1 height={this.props.height} width={this.props.height}/>
        <PieChart1 height={this.props.height} width={this.props.height}/>
      </div>
    )
  }
}

export default MyChart;