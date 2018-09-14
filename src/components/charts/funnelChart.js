import React, { Component } from 'react'
import D3Funnel from 'd3-funnel';

class FunnelChart extends Component {
    constructor(props) {
        super(props)
        const { height, width} = this.props;
        this.myRef = React.createRef();
        this.state = {
            data: [
                { label: 'Inquiries', value: 5000 },
                { label: 'Applicants', value: 2500 },
                { label: 'Admits', value: 500 },
                { label: 'Deposits', value: 20 },
            ],
            options: {
                chart: {
                    height: height,
                    width: width,
                    bottomWidth: 1/7,
                },
                block: {
                    dynamicHeight: true,
                    minHeight: 15,
                    highlight: true
                },
                tooltip: {
                    enabled: true
                }
            }
        }
    }
    componentDidMount() {
        const { data, options, } = this.state;
        const chart = new D3Funnel(this.myRef.current);
        chart.draw(data, options,);
    }
    render() {
        return (
            <div>  
                <h2>FunnelChart Component</h2>
                <div ref={this.myRef} />
            </div>
        )
    }
}

export default FunnelChart;