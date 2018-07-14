import React, { Component } from 'react'
import { Badge, Icon } from 'antd';

class NotificationPopover extends Component {
    render() {
        return (
            <div>
                <Badge count={10} >
                    <Icon type="bell" />
                </Badge>
            </div>
        )
    }
}

export default NotificationPopover;