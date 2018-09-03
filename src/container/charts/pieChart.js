import React, { Component } from 'react'
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer, Sector, Label, LabelList } from 'recharts';
const data01 = [
  { name: 'Group A', value: 400, v: 89, color: '#4286f4' },
  { name: 'Group B', value: 300, v: 100, color: '#f44256' },
  { name: 'Group C', value: 200, v: 200, color: '#70ed36' },
  { name: 'Group D', value: 200, v: 20, color: '#7c89ba' },
  { name: 'Group E', value: 278, v: 40, color: '#4245f4' },
  { name: 'Group F', value: 189, v: 60, color: '#ddf738' },
];

const data02 = [
  { name: 'Group A', value: 2400, color: '#4286f4' },
  { name: 'Group B', value: 4567, color: '#70ed36' },
  { name: 'Group C', value: 1398, color: '#ddf738' },
  { name: 'Group D', value: 9800, color: '#4245f4' },
  { name: 'Group E', value: 3908, color: '#7c89ba' },
  { name: 'Group F', value: 4800, color: '#f44256' },
];
class PieChart1 extends Component {
  constructor(props){
    super(props)
}
  render() {
    return (
      <div style={{margin: '0.2rem'}}>
        <PieChart width={this.props.width} height={this.props.height} >
          <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
          {
          	data01.map((entry, index) => <Cell fill={entry.color}/>)
          }
          </Pie>
          <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} label>
          {
          	data02.map((entry, index) => <Cell fill={entry.color}/>)
          }
          </Pie>
          <Tooltip/>
          {/* <Legend/> */}
        </PieChart>
      </div>
    )
  }
}

export default PieChart1;