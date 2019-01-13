import React from 'react';
import { Redirect } from 'react-router-dom';
import { Menu, Icon, Button, Switch } from 'antd';
import { Link } from 'react-router-dom';
import Theme from '../../container/settings/Theme/Theme';
import { Spring } from "react-spring";
const SubMenu = Menu.SubMenu;
const menuData = [
    { path: '/', key: '1', iconType: 'appstore', title: 'DashBoard' },
    { path: '/calendar', key: '2', iconType: 'appstore', title: 'Calendar' },
    { path: '/profile', key: '3', iconType: 'appstore', title: 'Profile' },
    { path: '/post', key: '4', iconType: 'appstore', title: 'Post' },
    { path: '/forms', key: '5', iconType: 'appstore', title: 'Forms' },
    { path: '/tables', key: '6', iconType: 'appstore', title: 'Table' },
    { path: '/settings', key: '7', iconType: 'appstore', title: 'Setting' },
    { path: '/dnd', key: '8', iconType: 'appstore', title: 'DND' },
    { path: '/charts', key: '9', iconType: 'appstore', title: 'Charts' },
    { path: '/map', key: '10', iconType: 'appstore', title: 'Map' },
    { path: '/drag', key: '11', iconType: 'appstore', title: 'Drag n Change' },
    { path: '/tree', key: '12', iconType: 'appstore', title: 'Tree' },
    { path: '/custom', key: '13', iconType: 'appstore', title: 'Custom Fields' },
    { path: '/fullCalendar', key: '14', iconType: 'appstore', title: 'Full calendar' },
    { path: '/spring', key: '15', iconType: 'appstore', title: 'Spring' },
]
class NavMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            menuData: menuData,
        }
    }
    render() {
        return (
            <div>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme={this.props.theme}
                    inlineCollapsed={this.props.collapsed}
                >
                    {this.state.menuData.map(menu => {
                        return (
                            <Menu.Item key={menu.key}>
                                <Spring
                                    delay={200}
                                    from={{ opacity: 0, transform: 'translate3d(200px,0,0) scale: 0' }}
                                    to={{ opacity: 1, transform: 'translate3d(0px,0,0) scale: 1' }}>
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
        );
    }
}

export default NavMenu;