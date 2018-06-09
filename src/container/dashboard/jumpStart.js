import React, { Component } from 'react'
import { Bar, Line } from 'react-chartjs-2';
import { Card } from 'antd';
import jumpStartData from './jumpStartData';

class JumpStartBox extends Component {
    constructor(props) {
        super(props)
        this.renderJumpStartBoxes = this.renderJumpStartBoxes;
    }
    renderJumpStartBoxes = () => {

    }
    componentDidMount() {
    }
    render() {

        return (
            <div>

                {jumpStartData.data.map((data) => {
                    console.log(data.title)
                    return <Card key={data.id} style={{ margin: '1rem' }} title={data.title}><div>{data.title}</div>      </Card>
                })}

            </div>
        )
    }
}
export default JumpStartBox;