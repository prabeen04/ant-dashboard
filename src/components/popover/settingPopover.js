import React, { Component } from 'react';
import { Icon, Popover, Tooltip, Card, Button } from 'antd';
// import AddProfile from '../../container/profile/addProfile';
import SettingTab from '../tabs/settingTab';

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
        console.log('handle Visible Change clicked')
        this.setState({ visible });
    }
    render() {
        return (
            <div>
                <Tooltip title="Settings">
                    <Popover
                        content={
                            <div>
                                <SettingTab/>
                            </div>

                    }
                        // title={<a onClick={this.hide}>Close</a>}
                        trigger="click"
                        placement="bottomRight"
                        visible={this.state.visible}
                        onVisibleChange={this.handleVisibleChange}
                    >
                        <Icon
                            style={{ fontSize: 25, cursor: 'pointer' }}
                            type="setting"
                            onClick={() => this.handleVisibleChange()}
                        />
                    </Popover>
                </Tooltip>
            </div>
        )
    }
}
export default SettingPopover