import React, { Component } from 'react'
import { Tabs, Icon, Button } from 'antd';
const TabPane = Tabs.TabPane;

class SettingTab extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
  
                        <Button
                            type="primary"
                            onClick={this.props.hide}>Close</Button>
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
                        Tab 2
                    </TabPane>
                    <TabPane tab={<span><Icon type="android" />Tab 3</span>} key="3">
                        Tab 3
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}
export default SettingTab;