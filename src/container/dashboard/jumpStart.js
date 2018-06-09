import React, { Component } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import { Card } from 'antd';
import { jumpStartData } from './jumpStartData';
const renderJumpStartBoxes = jumpStartData.map((data) => <Card key={data.id} style={{ margin: '1rem' }} title={data.title}><div>{data.value}</div></Card>)
class JumpStartBox extends Component {
    constructor(props) {
        super(props)
    }
    
    componentDidMount() {
    }
    render() {

        return (
            <div>

                {renderJumpStartBoxes}

            </div>
        )
    }
}
export default JumpStartBox;