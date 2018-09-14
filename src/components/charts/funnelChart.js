import React, { Component } from 'react'
import D3Funnel from 'd3-funnel';

class FunnelChart extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
            data: [
                { label: 'Inquiries', value: 5000 },
                { label: 'Applicants', value: 2500 },
                { label: 'Admits', value: 500 },
                { label: 'Deposits', value: 200 },
            ],
            options: {
                block: {
                    dynamicHeight: true,
                    minHeight: 15,
                },
            }
        }
    }
    componentDidMount() {
        const { data, options} = this.state;
        const chart = new D3Funnel(this.myRef.current);
        chart.draw(data, options);
    }
    render() {
        const { height, width} = this.props;
        return (
            <div>  
                <h2>FunnelChart Component</h2>
                <div ref={this.myRef}  style={{ height, width}} />
            </div>
        )
    }
}

export default FunnelChart;