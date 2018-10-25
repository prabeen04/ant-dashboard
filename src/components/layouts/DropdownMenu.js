import React, { Component } from 'react'
import { Menu, Icon, Avatar } from "antd";
import { StyledDropdown } from "../UI/Antd";
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
);
class DropdownMenu extends Component {
    render() {
        return (
            <StyledDropdown overlay={menu} trigger={['click']}>
                <Avatar style={{ backgroundColor: 'red', verticalAlign: 'middle' }} size="large">
                    {'Prabeen'}
                </Avatar>
            </StyledDropdown>
        )
    }
}

export default DropdownMenu;