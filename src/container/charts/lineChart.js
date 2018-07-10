import React, { Component } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts';
const data = [
    { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20] },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40] },
    { name: 'Page C', uv: 2800, pv: 1398, amt: 2400, uvError: 40 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20 },
    { name: 'Page E', uv: 278, pv: 1000, amt: 2400, uvError: 28 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400, uvError: [90, 20] },
    { name: 'Page G', uv: 189, pv: 4800, amt: 2400, uvError: [28, 40] },
    { name: 'Page H', uv: 1890, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28 },
    { name: 'Page J', uv: 189, pv: 4800, amt: 2400, uvError: [15, 60] },
];

class LineChart1 extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <LineChart width={this.props.width} height={this.props.height} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="tomato" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    {/* <Legend layout="vertical" verticalAlign="middle" align="right"  margin={{ top: 100, left: 0, right: 0, bottom: 100 }}/> */}
                </LineChart>
            </div>
        )
    }
}

export default LineChart1;