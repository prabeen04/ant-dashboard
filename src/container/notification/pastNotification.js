import React, { Component } from 'react';
import { List, Button, Checkbox } from 'antd'; 
const data = [
    <Checkbox>Manchester United</Checkbox>,
    <Checkbox>Arsenal</Checkbox>,
    <Checkbox>Chelsea</Checkbox>,
    <Checkbox>Manchester City</Checkbox>,
    <Checkbox>Liverpool</Checkbox>,
    <Checkbox>Tottenham</Checkbox>
];
class PastNotification extends Component {
    render() {
        return (
            <div>
                <List
                    size="small"
                    bordered
                    dataSource={data}
                    renderItem={item => (<List.Item>{item}</List.Item>)}
                />
            </div>
        )
    }
}

export default PastNotification;