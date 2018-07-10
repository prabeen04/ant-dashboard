import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout, Menu, Icon, Badge, Table } from 'antd';
import './navbar.css';
import NavMenu from './navMenu';
import Dashboard from '../../container/dashboard/dashboard';
import Calendar from '../../container/calendar/calendar';
import Profile from '../../container/profile/profile';
import Post from '../../container/post/post';
import SinglePost from '../../container/post/singlePost';
import Login from "../../container/login/login";
import NotFound from '../../container/notFound/notFound';
import Forms from '../../container/forms/forms';
import Tables from '../../container/tables/tables';
import Settings from '../../container/settings/settings';
import DND from '../../container/DND/DND';
import Charts from '../../container/charts/charts';
import GooglePlace from '../google/googlePlace' ;
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
                    <Header className="flex-container" style={{ background: '#fff', padding: 0, height: 45 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <div style={{ float: 'right', marginRight: 50 }}>
                            <a href="#" style={{margin: 15}}>
                                <Badge count={1} >
                                    <Icon type="bell" />
                                </Badge>
                            </a>
                            <a href="#" style={{margin: 15}}>
                                <Badge count={5} >
                                    <Icon type="user" />
                                </Badge>
                            </a>
                            <a href="#" style={{margin: 15}}>
                                <Badge count={10} >
                                    <Icon type="bell" />
                                </Badge>
                            </a>
                        </div>
                    </Header>

                    <Content>
                        <Switch>
                            <Route exact path='/' component={Dashboard} />
                            <Route exact path='/calendar' component={Calendar} />
                            <Route exact path='/profile' component={Profile} />
                            <Route exact path='/post' component={Post} />
                            <Route exact path='/post/:id' component={SinglePost} />
                            <Route exact path='/forms' component={Forms} />
                            <Route exact path='/tables' component={Tables} />
                            <Route exact path='/settings' component={Settings} />
                            <Route exact path='/dnd' component={DND} />
                            <Route exact path='/charts' component={Charts} />
                            <Route path='**' component={NotFound} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Navbar;