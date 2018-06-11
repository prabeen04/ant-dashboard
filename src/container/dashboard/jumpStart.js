import React, { Component } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import { Card } from 'antd';
import { jumpStartData } from './jumpStartData';
class JumpStartBox extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
    }
    render() {
        let renderJumpStartBoxes = jumpStartData.filter((data) => data.visible)
            .map((data) => <Card key={data.id} style={{ margin: '1rem', justifyContent: 'space-evenly', minWidth: 200 }}>
            <div>
                <h3>{data.title}</h3>
                <h2>{data.value}</h2>
            </div>
        </Card>)

        return (
            <div className="flex-container" style={{ flexGrow: 1}}>
                {renderJumpStartBoxes}
            </div>
        )
    }
}
export default JumpStartBox;