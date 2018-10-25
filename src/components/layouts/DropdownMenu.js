import React, { Component } from 'react'
import { Menu, Icon } from "antd";
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
            <StyledDropdown>

            </StyledDropdown>
        )
    }
}

export default DropdownMenu;