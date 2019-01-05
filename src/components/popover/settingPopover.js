import React, { Component } from 'react';
import { Icon, Popover, Tooltip, Card, Button } from 'antd';
// import AddProfile from '../../container/profile/addProfile';
import SettingTab from '../tabs/settingTab';
import { StyledPopover } from "../UI/Antd";

class SettingPopover extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false
        }
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
                    <StyledPopover
                        content={
                            <div>
                                <SettingTab hide={this.hide}/>
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
                    </StyledPopover>
                </Tooltip>
            </div>
        )
    }
}
export default SettingPopover