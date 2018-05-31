import React, { Component } from 'react';
import { Icon, Popover,Tooltip, Card, Button } from 'antd';

class SettingPopover extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
        this.handleVisibleChange = this.handleVisibleChange.bind(this);
    }
    hide = () => {
        this.setState({
            visible: false,
        });
    }
    handleVisibleChange = (visible) => {
        this.setState({ visible });
    }
    render() {
        return (
            <div>
                <Tooltip title="Settings">
                    <Icon
                        style={{ fontSize: 25, cursor: 'pointer' }}
                        type="setting"
                        onClick={() => console.log('settings view clicked')}
                    />
                </Tooltip>
            </div>
        )
    }
}
export default SettingPopover