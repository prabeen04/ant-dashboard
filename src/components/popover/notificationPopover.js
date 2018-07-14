import React, { Component } from 'react'
import { Badge, Icon, Tooltip } from 'antd';

class NotificationPopover extends Component {
    render() {
        return (
            <div>
                <Tooltip title="Notifications">
                    <Badge count={10} >
                        <Icon type="bell" />
                    </Badge>
                </Tooltip>
            </div>
        )
    }
}

export default NotificationPopover;