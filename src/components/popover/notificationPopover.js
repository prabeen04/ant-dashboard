import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Badge, Icon, Tooltip, Popover } from 'antd';
import NotificationTab from '../tabs/notificationTab';

function NotificationPopover(props) {
    const [visible, setVisible] = useState(false)
    const handleVisibleChange = visible => {
        setVisible(visible)
    }
    return (
        <Tooltip title="Notifications">
            <Popover
                content={
                    <div>
                        <NotificationTab />
                    </div>

                }
                trigger="click"
                placement="bottomRight"
                visible={visible}
                onVisibleChange={handleVisibleChange}
            >
                <Badge count={props.notificationCount} >
                    <Icon type="bell" />
                </Badge>
            </Popover>
        </Tooltip>
    )
}

const mapStateToProps = ({ notificationReducer }) => ({
    notificationCount: notificationReducer.presentNotifications.results && notificationReducer.presentNotifications.results.length
})

export default connect(mapStateToProps)(NotificationPopover);
