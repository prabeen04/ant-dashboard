import React, { Component } from 'react'
import { PieChart, Pie, Legend, Cell, Tooltip, ResponsiveContainer, Sector,  Label, LabelList } from 'recharts';
const data = [
    { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
    { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
    { name: 'Page E', uv: 278, pv: null, amt: 2400, uvError: 28 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
    { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
    { name: 'Page H', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
];

class PieChart1 extends Component {
  render() {
    return (
      <div>
        <h2>PieChart1 Component</h2>
      </div>
    )
  }
}

export default PieChart1;