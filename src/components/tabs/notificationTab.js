import React, { Component } from 'react'
import { Tabs, Icon, Button, List, Checkbox } from 'antd';
import PastNotification from '../../container/notification/pastNotification';
import PresentNotification from '../../container/notification/presentNotification';
import FutureNotification from '../../container/notification/futureNotification';

const TabPane = Tabs.TabPane;

class NotificationTab extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey={"2"} scrollToActive={true} style={{ width: 400 }}>
                    <TabPane key={"1"} tab={<span style={{ color: 'skyblue' }}><Icon type="team" />Yesterday</span>}>
                        <PastNotification />
                    </TabPane>
                    <TabPane key={"2"} tab={<span style={{ color: 'lightgreen' }}><Icon type="trophy" />Today</span>}>
                        <PresentNotification />
                    </TabPane>
                    <TabPane key={"3"} tab={<span style={{ color: 'tomato' }}><Icon type="line-chart" />Tommorow</span>}>
                        <FutureNotification />
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default NotificationTab;