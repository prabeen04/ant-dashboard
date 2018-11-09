import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import { Layout, Menu, Icon, Badge, Table } from 'antd';
import './navbar.css';
import BundleLoading from '../loading/bundleLoading'
import NavMenu from './navMenu';
import GooglePlace from '../google/googlePlace';
import AppBoundary from '../../errorHandler/appBoundary';
import NotificationPopover from '../popover/notificationPopover';
import { ApplicationWrapper, LayoutWrapper, MainWrapper, NavbarWrapper } from "../UI/Layout";
import DropdownMenu from './DropdownMenu';
import Theme from '../../container/settings/Theme/Theme';
const { Header, Sider, Content } = Layout;

const Dashboard = lazy(() => import('../../container/dashboard/dashboard'));
const Calendar = lazy(() => import('../../container/calendar/calendar'));
const Profile = lazy(() => import('../../container/profile/profile'));
const Post = lazy(() => import('../../container/post/post'));
const DND = lazy(() => import('../../container/DND/DND'));
const Forms = lazy(() => import('../../container/forms/forms'));
const Tables = lazy(() => import('../../container/tables/tables'));
const Settings = lazy(() => import('../../container/settings/settings'));
const Charts = lazy(() => import('../../container/charts/charts'));
const MyMap = lazy(() => import('../../container/map/map'));
const Drag = lazy(() => import('../../container/drag/drag'));
const SinglePost = lazy(() => import('../../container/post/singlePost'));
const TreeSort = lazy(() => import('../../container/treesort/treeSort'));
const CustomField = lazy(() => import('../../container/custom/customField'));
const FullCalendar = lazy(() => import('../../container/FullCalendar/FullCalendar'));
const NotFound = lazy(() => import('../../container/notFound/notFound'));

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            theme: 'dark'
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    toggleTheme = (value) => {
        console.log(value)
        this.setState({
            theme: value ? 'dark' : 'light',
        })
    }
    render() {
        const background = this.state.theme === 'light' ? '#fff' : null
        return (
            <LayoutWrapper>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    style={{ minHeight: '100vh', background }}
                >
                    <div className="logo">
                        <h2>Ant {!this.state.collapsed && <span> Dashboard</span>}</h2>
                    </div>
                    <NavMenu
                        collapsed={this.state.collapsed}
                        toggleCollapsed={this.toggle}
                        toggleTheme={this.toggleTheme}
                        theme={this.state.theme} />
                </Sider>
                <LayoutWrapper>
                    <NavbarWrapper style={{ padding: 0, height: 50 }}>
                        <Header>
                            <div style={{ height: 45, display: 'flex', alignSelf: 'flex-start', alignItems: 'center' }}>
                                <Icon
                                    className="trigger"
                                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                    onClick={this.toggle}
                                />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', alignSelf: 'flex-end', marginRight: 50, height: 45 }}>
                                <span style={{ margin: 15 }}>
                                    <Badge count={1} >
                                        <Icon type="bell" />
                                    </Badge>
                                </span>
                                <span style={{ margin: 15 }}>
                                    <Badge count={5} >
                                        <Icon type="user" />
                                    </Badge>
                                </span>
                                <span style={{ margin: 15 }}>
                                    <NotificationPopover />
                                </span>
                                <DropdownMenu />
                            </div>
                        </Header>
                    </NavbarWrapper>
                    <ApplicationWrapper>
                        <Content>
                            <Suspense fallback={<BundleLoading />}>
                                <Switch>
                                    <Route exact path='/' component={() => <Dashboard />} />
                                    <Route exact path='/calendar' component={() => <Calendar />} />
                                    <Route exact path='/profile' component={() => <Profile />} />
                                    <Route exact path='/post' component={() => <Post />} />
                                    <Route exact path='/post/:id' component={() => <SinglePost />} />
                                    <Route exact path='/forms' component={() => <Forms />} />
                                    <Route exact path='/tables' component={() => <Tables />} />
                                    <Route exact path='/settings' component={() => <Settings />} />
                                    <Route exact path='/dnd' component={() => <DND />} />
                                    {/* <AppBoundary> */}
                                    <Route exact path='/charts' component={() => <Charts />} />
                                    {/* </AppBoundary> */}
                                    <Route exact path='/map' component={() => <MyMap />} />
                                    <Route exact path='/drag' component={() => <Drag />} />
                                    <Route exact path='/tree' component={() => <TreeSort />} />
                                    <Route exact path='/custom' component={() => <CustomField />} />
                                    <Route exact path='/fullCalendar' component={() => <FullCalendar />} />
                                    <Route path='**' component={() => <NotFound />} />
                                </Switch>
                            </Suspense>
                        </Content>
                    </ApplicationWrapper>
                </LayoutWrapper>
            </LayoutWrapper>
        );
    }
}

export default Navbar;