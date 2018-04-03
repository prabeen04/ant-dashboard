import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
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
                <Card>
                    <Bar
                        data={chartData}
                        width={100}
                        height={50}
                        options={{
                            maintainAspectRatio: false
                        }} />
                </Card>
            </div>
        )
    }
}
export default JumpStartBox;