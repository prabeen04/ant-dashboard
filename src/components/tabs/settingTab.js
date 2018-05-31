import React, { Component } from 'react'
import { Tabs, Icon, Button, List, Checkbox  } from 'antd';
const TabPane = Tabs.TabPane;
const data = [
    <Checkbox>Manchester United</Checkbox>,
    <Checkbox>Arsenal</Checkbox>,
    <Checkbox>Chelsea</Checkbox>,
    <Checkbox>Manchester City</Checkbox>,
    <Checkbox>Liverpool</Checkbox>,
    <Checkbox>Tottenham</Checkbox>
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
                            size="small"
                            header={<div>Header</div>}
                            footer={<div style={{textAlign: 'right'}}> <Button
                                type="primary"
                                onClick={this.props.hide}>Close</Button></div>}
                            dataSource={data}
                            renderItem={item => (<List.Item>{item}</List.Item>)}
                        />

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