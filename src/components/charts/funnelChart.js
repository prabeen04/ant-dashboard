import React, { Component } from 'react'
import D3Funnel from 'd3-funnel';

class FunnelChart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [
                { label: 'Inquiries', value: 5000 },
                { label: 'Applicants', value: 2500 },
                { label: 'Admits', value: 500 },
                { label: 'Deposits', value: 200 },
            ]
        }
    }
    componentDidMount(){
        const options = {
            block: {
                dynamicHeight: true,
                minHeight: 15,
            },
        };
    }
    render() {
        return (
            <div>
                <h2>FunnelChart Component</h2>
            </div>
        )
    }
}

export default FunnelChart;