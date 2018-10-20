import React, { Component } from 'react';
import { findDOMNode } from "react-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import { Button } from "antd";
import { BarChart, PieChart, Pie, Bar, Brush, Cell, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Label } from 'recharts';
import FileSaver from "file-saver";
import { setPieChartData, setBarChartData, setViewType } from '../../actions/chartsAction';
import TimeInterval from '../../components/utils/TimeInterval';

class AdvancedBarChart extends Component {

    handleDownloadChart = () => {
        console.log('download chart btn clicked')
        let chartSVG = findDOMNode(this.currentChart).children[0];
        console.log(chartSVG)
        let svgURL = new XMLSerializer().serializeToString(chartSVG);
        let svgBlob = new Blob([svgURL], { type: "image/png;charset=utf-8" });
        var canvas = document.createElement("canvas");
        // var svgSize = svgBlob.getBoundingClientRect();
        // canvas.width = svgSize.width;
        // canvas.height = svgSize.height;
        var ctx = canvas.getContext("2d");

        var img = document.createElement("img");
        canvas.toBlob(function (blob) {
            FileSaver.saveAs(blob, "pretty image.png");
        });
        // FileSaver.saveAs(svgBlob, 'chart' + ".svg");


    }
    displayXTick = (tick) => {
        return `${tick}`;
    }
    displayYTick = (tick) => {
        return `Day ${tick}`;
    }
    componentDidMount() {
        this.props.setPieChartData(this.props.viewType, this.props.data);
        this.props.setBarChartData(this.props.viewType, this.props.data);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.viewType != this.props.viewType) {
            this.props.setPieChartData(nextProps.viewType, nextProps.data);
            this.props.setBarChartData(nextProps.viewType, nextProps.data);
        }
    }
    render() {
        const { height, width, pieChartData, barChartData, timeInterval, setViewType } = this.props;
        return (
            <div>
                <div className="flex-container">
                    <TimeInterval
                        times={timeInterval}
                        handleClick={setViewType} />
                    <Button type="primary"
                        onClick={this.handleDownloadChart}>
                        Download Chart
                      </Button>
                </div>
                <BarChart width={width} height={height} data={barChartData}
                    ref={(chart) => this.currentChart = chart}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                        dataKey="days"
                        tickFormatter={this.displayXTick}>
                        <Label value="Pages of my website" offset={0} position="insideBottom" />
                    </XAxis>
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="value" fill="#8884d8" barSize={20} />
                </BarChart>
                <PieChart width={width} height={height} >
                    <Pie data={pieChartData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} />
                    <Tooltip />
                </PieChart>
            </div>
        )
    }
}

const mapStateToProps = ({ chartsReducer }) => {
    return {
        timeInterval: chartsReducer.timeInterval,
        data: chartsReducer.data,
        pieChartData: chartsReducer.pieChartData,
        barChartData: chartsReducer.barChartData,
        viewType: chartsReducer.viewType
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setPieChartData,
        setBarChartData,
        setViewType,
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AdvancedBarChart);