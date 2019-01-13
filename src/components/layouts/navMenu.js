import React from 'react';
import { Redirect } from 'react-router-dom';
import { Menu, Icon, Button, Switch } from 'antd';
import { Link } from 'react-router-dom';
import Theme from '../../container/settings/Theme/Theme';
import { Spring } from "react-spring";
const SubMenu = Menu.SubMenu;
const menuData = [
    {path: '/', key: '1', iconType: 'appstore', title: 'DashBoard'},
    {path: '/calendar', key: '2', iconType: 'appstore', title: 'Calendar'},
    {path: '/profile', key: '3', iconType: 'appstore', title: 'Profile'},
    {path: '/post', key: '4', iconType: 'appstore', title: 'Post'},
    {path: '/forms', key: '5', iconType: 'appstore', title: 'Forms'},
    {path: '/tables', key: '6', iconType: 'appstore', title: 'Table'},
    {path: '/settings', key: '7', iconType: 'appstore', title: 'Setting'},
    {path: '/dnd', key: '8', iconType: 'appstore', title: 'DND'},
    {path: '/charts', key: '9', iconType: 'appstore', title: 'Charts'},
    {path: '/map', key: '10', iconType: 'appstore', title: 'Map'},
    {path: '/drag', key: '11', iconType: 'appstore', title: 'Drag n Change'},
    {path: '/tree', key: '12', iconType: 'appstore', title: 'Tree'},
    {path: '/custom', key: '13', iconType: 'appstore', title: 'Custom Fields'},
    {path: '/fullCalendar', key: '14', iconType: 'appstore', title: 'Full calendar'},
    {path: '/spring', key: '15', iconType: 'appstore', title: 'Spring'},
]
class NavMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
    }
    // toggleCollapsed = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // }
    render() {
        return (
            <Spring
                delay={200}
                from={{ opacity: 0, tansform: 'scale: 0' }}
                to={{ opacity: 1, tansform: 'scale: 1' }}>
                {styles => (
                    <div style={styles}>
                        <Menu
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            mode="inline"
                            theme={this.props.theme}
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
                            <Menu.Item key="12">
                                <Link to='/tree'>
                                    <Icon type="plus" />
                                    <span>Sort Tree</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="13">
                                <Link to='/custom'>
                                    <Icon type="plus" />
                                    <span>Custom Field</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="14">
                                <Link to='/fullCalendar'>
                                    <Icon type="calendar" />
                                    <span>Full Calendar</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="15">
                                <Link to='/spring'>
                                    <Icon type="gift" />
                                    <span>Spring</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item>
                                <Switch
                                    checked={this.props.theme === 'dark'}
                                    onChange={this.props.toggleTheme}
                                    checkedChildren="Dark"
                                    unCheckedChildren="Light"
                                />
                            </Menu.Item>
                            <Menu.Item>
                                <Theme />
                            </Menu.Item>

                        </Menu>
                    </div>
                )}
            </Spring>
        );
    }
}

export default NavMenu;