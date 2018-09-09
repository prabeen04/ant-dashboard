import React, { Component } from 'react'
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer, Sector, Label, LabelList } from 'recharts';
import axios from 'axios';
const data01 = [
  { name: 'Group A', value: 400, v: 89, color: 'rgba(52, 182, 193, 0.7)' },
  { name: 'Group B', value: 300, v: 100, color: 'rgba(56, 206, 33, 0.7)' },
  { name: 'Group C', value: 200, v: 200, color: 'rgba(208, 88, 216, 0.7)' },
  { name: 'Group D', value: 200, v: 20, color: 'rgba(206, 66, 47, 0.7)' },
  { name: 'Group E', value: 278, v: 40, color: 'rgba(72, 84, 191, 0.7)' },
  { name: 'Group F', value: 189, v: 60, color: 'rgba(222, 249, 47, 0.7)' },
];

const data02 = [
  { name: 'Group A', value: 2400, color: 'rgba(52, 182, 193, 0.7)' },
  { name: 'Group B', value: 4567, color: 'rgba(208, 88, 216, 0.7)' },
  { name: 'Group C', value: 1398, color: 'rgba(56, 206, 33, 0.7)' },
  { name: 'Group D', value: 9800, color: 'rgba(206, 66, 47, 0.7)' },
  { name: 'Group E', value: 3908, color: 'rgba(72, 84, 191, 0.7)' },
  { name: 'Group F', value: 4800, color: 'rgba(222, 249, 47, 0.7)' },
];
class PieChart1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
       chartData: data01
    }
  }
  componentDidMount = () => {
    // axios.get('http://192.168.1.61:3000/oppo')
    // .then(res =>{ 
    //   console.log(res)
    //   this.setState({
    //     chartData: res.data
    //   })
    // })
    // .catch(err => console.log(err))
  }
  
  render() {
    return (
      <div style={{ margin: '0.2rem' }}>
        <PieChart width={this.props.width} height={this.props.height} >
          <Pie data={this.state.chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50}>
            {
              data01.map((entry, index) => <Cell fill={entry.color} />)
            }
          </Pie>
          <Pie data={this.state.chartData} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} label>
            {
              data02.map((entry, index) => <Cell fill={entry.color} />)
            }
          </Pie>
          <Tooltip />
          {/* <Legend/> */}
        </PieChart>
      </div>
    )
  }
}

export default PieChart1;