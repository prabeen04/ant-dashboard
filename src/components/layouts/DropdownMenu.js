import React, { Component } from 'react'
import { Menu, Icon, Avatar } from "antd";
import { StyledDropdown } from "../UI/Antd";
import Theme from '../../container/settings/Theme/Theme';
const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3"><Theme/></Menu.Item>
    </Menu>
);
class DropdownMenu extends Component {
    render() {
        return (
            <StyledDropdown overlay={menu}>
                <Avatar style={{ backgroundColor: 'red', verticalAlign: 'middle' }} size="medium">
                    {'P'}
                </Avatar>
            </StyledDropdown>
        )
    }
}

export default DropdownMenu;