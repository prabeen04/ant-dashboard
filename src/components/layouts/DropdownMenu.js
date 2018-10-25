import React, { Component } from 'react'
import { Menu, Icon, Avatar } from "antd";
import { StyledDropdown, StyledMenu } from "../UI/Antd";
import { ApplicationWrapper, MainWrapper } from "../UI/Layout";
import Theme from '../../container/settings/Theme/Theme';
const menu = (
    <ApplicationWrapper>
        <MainWrapper>
        <Menu>
            <StyledMenu key="0">
                <a href="#">Profile</a>
            </StyledMenu>
            <StyledMenu key="1">
                <a href="#">Settings</a>
            </StyledMenu>
            <Menu.Divider />
        </Menu>
        <Theme />
        </MainWrapper>
    </ApplicationWrapper>
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