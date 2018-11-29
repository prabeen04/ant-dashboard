import React, { Component } from 'react'
import { PieChart,Area, Pie, Cell, Tooltip } from 'recharts';
import axios from 'axios';
const url = 'https://fokuswork.com:8443/salesxl/api/v2.0/opportunity/user/wonLoss';
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcmFiZWVuLnN0cmFuZ2VAZ21haWwuY29tIiwic2NvcGVzIjoiUk9MRV9BRE1JTiIsInVzZXJJZCI6IlVTSUY0NjA4NzYyMTIwMTgiLCJvcmdJZCI6Ik9JRjQzMzgxOTIxMjAxOCIsImlhdCI6MTU0MzQ5MzQ0NSwiZXhwIjoxNTQzNTExNDQ1fQ.3wG5f1VUPTzygItFmw9B1yW6_moWS7CPgwYa_NTkOk8'
const data01 = [
  { name: 'Group A', value: 400, v: 89, color: 'rgba(52, 182, 193, 0.7)' },
  { name: 'Group B', value: 300, v: 100, color: 'rgba(56, 206, 33, 0.7)' },
  { name: 'Group C', value: 200, v: 200, color: 'rgba(208, 88, 216, 0.7)' },
  { name: 'Group D', value: 200, v: 20, color: 'rgba(206, 66, 47, 0.7)' },
  { name: 'Group E', value: 278, v: 40, color: 'rgba(72, 84, 191, 0.7)' },
  { name: 'Group F', value: 189, v: 60, color: 'rgba(222, 249, 47, 0.7)' },
];

class PieChart1 extends Component {
  constructor(props) {
    super(props)

    this.state = {
      chartData: data01
    }
  }
  componentDidMount = () => {
    axios.get(`${url}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => {
        console.log(res)
        // this.setState({
        //   chartData: res.data
        // })
      })
      .catch(err => console.log(err))
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
          <Tooltip />
          {/* <Legend/> */}
        </PieChart>
      </div>
    )
  }
}

export default PieChart1;