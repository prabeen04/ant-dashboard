import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tabs, Icon } from 'antd';
import ChartSettings from './chartSettings';
import './settings.css';
const TabPane = Tabs.TabPane;


class Settings extends Component {

    render() {
        return (
            <div className="setting-wrapper">
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="area-chart" />Charts</span>} key="1">
                       <ChartSettings/>
                    </TabPane>
                    <TabPane tab={<span><Icon type="unlock" />Profile</span>} key="2">
                        Tab 2
                    </TabPane>
                    <TabPane tab={<span><Icon type="calendar" />calendar</span>} key="3">
                        Tab 3
                    </TabPane>
                    <TabPane tab={<span><Icon type="cloud-download" />Downloads</span>} key="4">
                        Tab 4
                    </TabPane>
                    <TabPane tab={<span><Icon type="desktop" />Desktop</span>} key="5">
                        Tab 5
                    </TabPane>
                    <TabPane tab={<span><Icon type="share-alt" />Sharing</span>} key="6">
                        Tab 6
                    </TabPane>
                    <TabPane tab={<span><Icon type="mail" />Mail</span>} key="7">
                        Tab 7
                    </TabPane>
                    <TabPane tab={<span><Icon type="notification" />Notification</span>} key="8">
                        Tab 8
                    </TabPane>
                    <TabPane tab={<span><Icon type="search" />Search</span>} key="9">
                        Tab 9
                    </TabPane>
                    <TabPane tab={<span><Icon type="layout" />Layout</span>} key="10">
                        Tab 10
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
