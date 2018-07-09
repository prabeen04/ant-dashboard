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
      <div className="flex-container" style={{flexWrap: 'wrap', justifyContent: 'space-evenly'}}>
        <LineChart1 height={this.props.height} width={this.props.width}/>
        <BarChart1 height={this.props.height} width={this.props.width}/>
        <AreaChart1 height={this.props.height} width={this.props.width}/>
        <PieChart1 height={this.props.height} width={this.props.width}/>
      </div>
    )
  }
}

export default MyChart;