import React, { Component } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import { Card } from 'antd';
import chartData from './chartData';

class JumpStartBox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 2000);
    }
    render() {

        return (
            <div>
                <Card style={{margin: '1rem'}}>
                    <Line
                        data={chartData}
                        width={200}
                        height={100}
                        options={{
                            maintainAspectRatio: false
                        }} />
                </Card>
            </div>
        )
    }
}
export default JumpStartBox;