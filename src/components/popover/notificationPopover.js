import React, { Component } from 'react'
import { Badge, Icon, Tooltip, Popover } from 'antd';

class NotificationPopover extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <Tooltip title="Notifications">
                <Popover
                    content={
                        <div>
                            <h1>this is notification content</h1>
                        </div>

                    }
                    // title={<a onClick={this.hide}>Close</a>}
                    trigger="click"
                    placement="bottomRight"
                    visible={true}
                    // onVisibleChange={}
                >
                    <Badge count={10} >
                        <Icon type="bell" />
                    </Badge>
                    </Popover>
            </Tooltip>
                )
            }
        }
        
export default NotificationPopover;