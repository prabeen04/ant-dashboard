import React, { Component } from 'react';
import { List, Button, Checkbox } from 'antd';
const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
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