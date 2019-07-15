import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Tabs, Icon } from 'antd';
import { StyledTabs } from "../../components/UI/Antd";
import { TabsWrapper } from "../../components/UI/Layout";
import ChartSettings from './chartSettings';
import ProfileSettings from './profile/profileSettings';
import ProgressLine from './calendar/progressLine';
import Theme from './Theme/Theme'
import './settings.css';
const TabPane = Tabs.TabPane;


const Settings = (props) => {
    return (
        <TabsWrapper>
            <StyledTabs defaultActiveKey="2">
                <TabPane tab={<span><Icon type="area-chart" />Charts</span>} key="1">
                    <ChartSettings />
                </TabPane>
                <TabPane tab={<span><Icon type="unlock" />Profile</span>} key="2">
                    <ProfileSettings />
                </TabPane>
                <TabPane tab={<span><Icon type="calendar" />calendar</span>} key="3">
                  Calendar 
                </TabPane>
                <TabPane tab={<span><Icon type="cloud-download" />Downloads</span>} key="4">
                    <ColumnTransfer />
                </TabPane>
                <TabPane tab={<span><Icon type="desktop" />Theme</span>} key="5">
                    <Theme/>
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
            </StyledTabs>
        </TabsWrapper>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Settings)
