import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Menu, Icon, Button, Switch } from 'antd';
import { Link } from 'react-router-dom';
import Theme from '../../container/settings/Theme/Theme';
import { Spring } from "react-spring";
const SubMenu = Menu.SubMenu;

export default function NavMenu(props) {
    const [collapsed, setCollapsed] = useState(false)
    const [menuData, setMenuData] = useState([
        { path: '/', key: '1', iconType: 'appstore', title: 'DashBoard' },
        { path: '/calendar', key: '2', iconType: 'calendar', title: 'Calendar' },
        { path: '/profile', key: '3', iconType: 'profile', title: 'Profile' },
        { path: '/post', key: '4', iconType: 'medium', title: 'Post' },
        { path: '/forms', key: '5', iconType: 'edit', title: 'Forms' },
        { path: '/tables', key: '6', iconType: 'table', title: 'Table' },
        { path: '/settings', key: '7', iconType: 'setting', title: 'Setting' },
        { path: '/dnd', key: '8', iconType: 'select', title: 'DND' },
        { path: '/charts', key: '9', iconType: 'area-chart', title: 'Charts' },
        { path: '/map', key: '10', iconType: 'global', title: 'Map' },
        { path: '/drag', key: '11', iconType: 'edit', title: 'Drag n Change' },
        { path: '/tree', key: '12', iconType: 'plus', title: 'Tree' },
        { path: '/custom', key: '13', iconType: 'plus', title: 'Custom Fields' },
        { path: '/fullCalendar', key: '14', iconType: 'calendar', title: 'Full calendar' },
        { path: '/spring', key: '15', iconType: 'gift', title: 'Spring' },
    ])
    return (
        <div>
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                theme={props.theme}
                inlineCollapsed={props.collapsed}
            >
                {menuData && menuData.map(menu => {
                    return (
                        <Menu.Item key={menu.key}>
                            <Spring
                                delay={200}
                                from={{ transform: 'translate3d(200px,0,0) scale(0)' }}
                                to={{ transform: 'translate3d(0px,0,0) scale(1)' }}>
                                {styles => (
                                    <Link to={menu.path} style={styles}>
                                        <Icon type={menu.iconType} />
                                        <span>{menu.title}</span>
                                    </Link>
                                )}
                            </Spring>
                        </Menu.Item>
                    )
                })}
                <Menu.Item>
                    <Switch
                        checked={props.theme === 'dark'}
                        onChange={props.toggleTheme}
                        checkedChildren="Dark"
                        unCheckedChildren="Light"
                    />
                </Menu.Item>
                <Menu.Item>
                    <Theme />
                </Menu.Item>

            </Menu>
        </div>
    );
}
