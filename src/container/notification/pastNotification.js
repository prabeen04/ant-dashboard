import React, { Component } from 'react';
import { List, Button, Checkbox } from 'antd'; 

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