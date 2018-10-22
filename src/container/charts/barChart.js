import React, { Component } from 'react'
import { BarChart, Bar, Brush, Cell, CartesianGrid, ReferenceLine, ReferenceDot,
     XAxis, YAxis, Tooltip, Legend, ErrorBar, LabelList, Label } from 'recharts';
import MixedBarChart from './MixedBarChart';     
const data = [
    { name: 'food', uv: 3300, pv: 2000, amt: 4500, time: 1, uvError: [100, 50], pvError: [110, 20] },
    { name: 'cosmetic', uv: 3300, pv: 2000, amt: 6500, time: 2, uvError: 120, pvError: 50 },
    { name: 'storage', uv: 3200, pv: 1398, amt: 5000, time: 3, uvError: [120, 80], pvError: [200, 100] },
    { name: 'async', uv: 3200, pv: 1398, amt: 5000, time: 3, uvError: [120, 80], pvError: [200, 100] },
    { name: 'analog', uv: 3200, pv: 1398, amt: 5000, time: 3, uvError: [120, 80], pvError: [200, 100] },
    { name: 'digital', uv: 2800, pv: 2800, amt: 4000, time: 4, uvError: 100, pvError: 30 },
];

const data1 = [
    { name: '1', amt: 4500 },
    { name: '2', amt: 6500 },
    { name: '3', amt: 5000 },
    { name: '4', amt: 5000 },
    { name: '5', amt: 5000 },
    { name: '6', amt: 4000 },
    { name: '7', amt: 9800 },
    { name: '8', amt: 5410 },
    { name: '9', amt: 5000 },
    { name: '10', amt: 1222 },
    { name: '11', amt: 8744 },
    { name: '12', amt: 9800 },
    { name: '13', amt: 5410 },
    { name: '14', amt: 5000 },
    { name: '15', amt: 1222 },
    { name: '16', amt: 8744 },
    { name: '17', amt: 9800 },
    { name: '18', amt: 5410 },
    { name: '19', amt: 5000 },
    { name: '20', amt: 1222 },
    { name: '21', amt: 8744 },
    { name: '22', amt: 9800 },
    { name: '23', amt: 5410 },
    { name: '24', amt: 5000 },
    { name: '25', amt: 1222 },
    { name: '26', amt: 8744 },
    { name: '27', amt: 9800 },
    { name: '28', amt: 5410 },
    { name: '29', amt: 5000 },
    { name: '30', amt: 1222 },
];
const data2 = [
    { name: 'manutd', amt: 1222 },
    { name: 'chelsea', amt: 9800 },
    { name: 'arsenal', amt: 5410 },
    { name: 'mancity', amt: 5000 },
    { name: 'liverpool', amt: 1222 },
    { name: 'spurs', amt: 8744 },
];


class BarChart1 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            chartData: data1
        }
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         chartData: data2
        //     })
        // }, 5000)

    }
    render() {
        return (
            <div style={{ margin: '0.2rem' }}>
                <BarChart width={this.props.width} height={this.props.height} data={this.state.chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name">
                        <Label value="Pages of my website" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="amt" fill="#8884d8" barSize={20} />
                    {/* <Bar dataKey="uv" fill="#82ca9d" barSize={20} /> */}
                </BarChart>
                <MixedBarChart/>
            </div>
        )
    }
}

export default BarChart1