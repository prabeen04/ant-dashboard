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
        console.log(this.props.notificationCount)
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
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange}
                >
                    <Badge count={this.props.notificationCount} >
                        <Icon type="bell" />
                    </Badge>
                </Popover>
            </Tooltip>
        )
    }
}
const mapStateToProps = state => {
    if (state.notificationReducer.presentNotifications.results) {
        console.log('insidisnadinask')
        return {
            notificationCount: state.notificationReducer.presentNotifications.results.length
        }
    }
    return{}

}
export default connect(mapStateToProps)(NotificationPopover);
