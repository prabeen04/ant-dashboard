import React, { Component } from 'react'
import { Tabs, Icon, Button, List, Checkbox } from 'antd';
const TabPane = Tabs.TabPane;

class NotificationTab extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1" style={{ width: 400 }}>
                    <TabPane tab={<span><Icon type="team" />Yesterday</span>} key="1">


                    </TabPane>
                    <TabPane tab={<span><Icon type="trophy" />Today</span>} key="2">

                    </TabPane>
                    <TabPane tab={<span><Icon type="line-chart" />Tommorow</span>} key="3">

                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default NotificationTab;