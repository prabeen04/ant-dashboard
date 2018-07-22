import React from 'react';
import { Redirect } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';
import { Link } from 'react-router-dom';
const SubMenu = Menu.SubMenu;

class NavMenu extends React.Component {
    state = {
        collapsed: false,
    }
    // toggleCollapsed = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // }
    render() {
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.props.collapsed}
                >
                    <Menu.Item key="1">
                        <Link to='/'>
                            <Icon type="appstore" />
                            <span>DashBoard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/calendar'>
                            <Icon type="calendar" />
                            <span>Calendar</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/profile'>
                            <Icon type="profile" />
                            <span>Profile</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to='/post'>
                            <Icon type="medium" />
                            <span>Post</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to='/forms'>
                            <Icon type="edit" />
                            <span>Forms</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Link to='/tables'>
                            <Icon type="table" />
                            <span>Tables</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="7">
                        <Link to='/settings'>
                            <Icon type="setting" />
                            <span>Settings</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="8">
                        <Link to='/dnd'>
                            <Icon type="select" />
                            <span>DND</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="9">
                        <Link to='/charts'>
                            <Icon type="area-chart" />
                            <span>Charts</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="10">
                        <Link to='/map'>
                            <Icon type="global" />
                            <span>Map</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="11">
                        <Link to='/drag'>
                            <Icon type="edit" />
                            <span>Drag</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default NavMenu;