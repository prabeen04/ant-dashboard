import React, { Component } from 'react';
import { List, Button } from 'antd'; 

class PastNotification extends Component {
    render() {
        return (
            <div>
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
            </div>
        )
    }
}

export default PastNotification;