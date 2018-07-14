import React, { Component } from 'react'
import { Badge, Icon, Tooltip } from 'antd';

class NotificationPopover extends Component {
    render() {
        return (
            <Tooltip title="Notifications">
                <Badge count={10} >
                    <Icon type="bell" />
                </Badge>
            </Tooltip>
        )
    }
}

export default NotificationPopover;