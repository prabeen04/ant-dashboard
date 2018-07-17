import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Badge, Icon, Tooltip, Popover } from 'antd';
import NotificationTab from '../tabs/notificationTab';

class NotificationPopover extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
        this.handleVisibleChange = this.handleVisibleChange.bind(this);
    }

    handleVisibleChange = visible => {
        this.setState({ visible });
    }
    render() {
        return (
            <Tooltip title="Notifications">
                <Popover
                    content={
                        <div>
                            <NotificationTab/>
                        </div>

                    }
                    trigger="click"
                    placement="bottomRight"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                >
                    <Badge count={10} >
                        <Icon type="bell" />
                    </Badge>
                </Popover>
            </Tooltip>
        )
    }
}
const mapStateToProps = state => {
    return{
      notificationCount: state.notificationReducer.presentNotifications.length  
    }
}
export default connect(mapStateToProps)(NotificationPopover);
