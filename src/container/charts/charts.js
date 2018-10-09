import React, { Component } from 'react'
import { Tabs } from 'antd';
import GooglePlace from '../../components/google/googlePlace'
import LineChart1 from './lineChart';
import PieChart1 from './pieChart';
import BarChart1 from './barChart';
import AreaChart1 from './areaChart';
import MyChart from './myChart';
import RadialChart1 from './radialChart';
import AdvancedBarChart from './AdvancedBarChart';

import './charts.css';
import FunnelChart from '../../components/charts/funnelChart';
const TabPane = Tabs.TabPane;

class Charts extends Component {
    constructor(props) {
        super(props);
        this.newTabIndex = 0;
        const panes = [
            { title: 'My Chart', content: <MyChart height={200} width={500}/>, key: '1' },
            { title: 'Bar Chart', content: <BarChart1 height={300} width={800}/>, key: '2' },
            { title: 'Pie Chart', content: <PieChart1 height={300} width={600}/>, key: '3' },
            { title: 'Area Chart', content: <AreaChart1 height={300} width={600}/>, key: '4' },
            { title: 'Line Chart', content: <LineChart1 height={300} width={600}/>, key: '5' },
            { title: 'Radial Chart', content: <RadialChart1 height={300} width={600}/>, key: '6' },
            { title: 'Funnel Chart', content: <FunnelChart height={300} width={600}/>, key: '7' },
            { title: 'AdvancedBarChart', content: <AdvancedBarChart height={300} width={600}/>, key: '8' },
        ];
        this.state = {
            activeKey: panes[7].key,
            panes,
        };
    }

    onChange = (activeKey) => {
        this.setState({ activeKey });
    }

    render() {
        return (
            <div className="charts-wrapper">
                <Tabs
                    size={'small'}
                    animated={true}
                    onChange={this.onChange}
                    activeKey={this.state.activeKey}
                    // style={{backgroundColor: '#001529', color: '#aaa'}}
                >
                    {this.state.panes.map(pane => <TabPane tab={pane.title} key={pane.key} closable={pane.closable}>{pane.content}</TabPane>)}
                </Tabs>
            </div>
        );
    }
}

export default Charts;