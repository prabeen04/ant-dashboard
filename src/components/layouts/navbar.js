import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Menu, Icon, Badge } from 'antd';
import './navbar.css';
import NavMenu from './navMenu';
import Dashboard from '../../container/dashboard/dashboard';
import Calendar from '../../container/calendar/calendar';
import Profile from '../../container/profile/profile';
import Post from '../../container/post/post';
import SinglePost from '../../container/post/singlePost';
import Login from "../../container/login/login";
import NotFound from '../../container/notFound/notFound';
const { Header, Sider, Content } = Layout;

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
            collapsed: false,
        };
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    render() {
        return (
            <Layout>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    style={{ height: '100vh' }}
                >
                    <div className="logo" />
                    <NavMenu
                        collapsed={this.state.collapsed}
                        toggleCollapsed={this.toggle} />
                    {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu> */}
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />

                        <div>
                            {/* <Badge count={5} style={{ float: 'right' }}>
                                <a href="#" className="head-example" />
                            </Badge>
                            <Badge count={1} >
                                <a href="#" className="head-example" />
                            </Badge> */}
                        </div>
                    </Header>

                    <Content>
                        <Switch>
                            <Route exact path='/' component={Dashboard} />
                            <Route exact path='/calendar' component={Calendar} />
                            <Route exact path='/profile' component={Profile} />
                            <Route exact path='/post' component={Post} />
                            <Route exact path='/post/:id' component={SinglePost} />
                            <Route exact path='/login' component={Login} />
                            <Route path='**' component={NotFound} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Navbar;