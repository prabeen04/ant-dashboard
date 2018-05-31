import React, { Component } from 'react'
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;

class SettingTab extends Component {
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                        Tab 1
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                        Tab 2
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
export default SettingTab;