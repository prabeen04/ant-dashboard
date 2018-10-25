import React, { Component } from 'react'
import { Menu, Icon, Avatar } from "antd";
import { StyledDropdown } from "../UI/Antd";
import { MainWrapper } from "../UI/Layout";
import Theme from '../../container/settings/Theme/Theme';
const menu = (
    <MainWrapper>
        <Menu>
            <Menu.Item key="0">
                <a href="http://www.alipay.com/">Profile</a>
            </Menu.Item>
            <Menu.Item key="1">
                <a href="http://www.taobao.com/">Settings</a>
            </Menu.Item>
            <Menu.Divider />
        </Menu>
        <Theme />
    </MainWrapper>
);
class DropdownMenu extends Component {
    render() {
        return (
            <StyledDropdown overlay={menu}>
                <Avatar style={{ backgroundColor: '#1890ff', verticalAlign: 'middle' }} size="medium">
                    {'P'}
                </Avatar>
            </StyledDropdown>
        )
    }
}

export default DropdownMenu;