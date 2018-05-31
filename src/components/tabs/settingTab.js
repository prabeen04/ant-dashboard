import React, { Component } from 'react'
import { Tabs, Icon, Button, List } from 'antd';
const TabPane = Tabs.TabPane;
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];
class SettingTab extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <Tabs defaultActiveKey="1">
                    <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
                        <List
                        bordered
                        dataSource={data}
                        renderItem={item => (<List.Item>{item}</List.Item>)}
                        />
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