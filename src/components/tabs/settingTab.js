import React, { Component } from 'react'
import { Tabs, Icon, Button, List, Checkbox } from 'antd';
import { TabsWrapper } from "../UI/Layout";
import { StyledTabs } from "../UI/Antd";

const TabPane = Tabs.TabPane;
const data = [
    <Checkbox>Manchester United</Checkbox>,
    <Checkbox>Arsenal</Checkbox>,
    <Checkbox>Chelsea</Checkbox>,
    <Checkbox>Manchester City</Checkbox>,
    <Checkbox>Liverpool</Checkbox>,
    <Checkbox>Tottenham</Checkbox>
];
const data2 = [
    <Checkbox>Premier League</Checkbox>,
    <Checkbox>Champions League</Checkbox>,
    <Checkbox>FA Cup</Checkbox>,
    <Checkbox>Capital One Cup</Checkbox>,
];
const data3 = [
    <Checkbox>Points</Checkbox>,
    <Checkbox>Most Wins</Checkbox>,
    <Checkbox>Most Goal</Checkbox>,
    <Checkbox>Most Chances Created</Checkbox>,
    <Checkbox>Most fouls</Checkbox>,
    <Checkbox>Most Tackles</Checkbox>,
];
class SettingTab extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <TabsWrapper>
                    <StyledTabs defaultActiveKey="1" style={{ width: 400 }}>
                        <TabPane tab={<span><Icon type="team" />Team</span>} key="1">
                            <List
                                size="small"
                                bordered
                                header={<div><h4> Team</h4></div>}
                                footer={<div style={{ textAlign: 'right' }}> <Button
                                    type="primary"
                                    onClick={this.props.hide}>Close</Button></div>}
                                dataSource={data}
                                renderItem={item => (<List.Item>{item}</List.Item>)}
                            />

                        </TabPane>
                        <TabPane tab={<span><Icon type="trophy" />Trophy</span>} key="2">
                            <List
                                size="small"
                                bordered
                                header={<div><h4>Filter by Trophies</h4></div>}
                                footer={<div style={{ textAlign: 'right' }}> <Button
                                    type="primary"
                                    onClick={this.props.hide}>Close</Button></div>}
                                dataSource={data2}
                                renderItem={item => (<List.Item>{item}</List.Item>)}
                            />
                        </TabPane>
                        <TabPane tab={<span><Icon type="line-chart" />Statistics</span>} key="3">
                            <List
                                size="small"
                                bordered
                                header={<div><h4>Filter by Stats</h4></div>}
                                footer={<div style={{ textAlign: 'right' }}> <Button
                                    type="primary"
                                    onClick={this.props.hide}>Close</Button></div>}
                                dataSource={data3}
                                renderItem={item => (<List.Item>{item}</List.Item>)}
                            />
                        </TabPane>
                    </StyledTabs>
                </TabsWrapper>
            </div>
        )
    }
}
export default SettingTab;