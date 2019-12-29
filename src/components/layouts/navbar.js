import React, { lazy, Suspense, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Layout, Icon, Badge } from "antd";
import "./navbar.css";
import BundleLoading from "../loading/bundleLoading";
import NavMenu from "./navMenu";
import NotificationPopover from "../popover/notificationPopover";
import { ApplicationWrapper, LayoutWrapper, NavbarWrapper } from "../UI/Layout";
import DropdownMenu from "./DropdownMenu";
const { Header, Sider, Content } = Layout;

const Dashboard = lazy(() => import("../../container/dashboard/dashboard"));
const Calendar = lazy(() => import("../../container/calendar/calendar"));
const Profile = lazy(() => import("../../container/profile/profile"));
const Post = lazy(() => import("../../container/post/post"));
const Forms = lazy(() => import("../../container/forms/forms"));
const Settings = lazy(() => import("../../container/settings/settings"));
const Charts = lazy(() => import("../../container/charts/charts"));
const MyMap = lazy(() => import("../../container/map/map"));
const Drag = lazy(() => import("../../container/drag/drag"));
const SinglePost = lazy(() => import("../../container/post/singlePost"));
const CustomField = lazy(() => import("../../container/custom/customField"));
const FullCalendar = lazy(() =>
  import("../../container/FullCalendar/FullCalendar")
);
const Spring = lazy(() => import("../../container/Spring/Spring"));
const UserProfile = lazy(() =>
  import("../../container/UserProfile/UserProfile")
);
const NotFound = lazy(() => import("../../container/notFound/notFound"));

export default function Navbar(props) {
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState("dark");

  const toggle = () => setCollapsed(!collapsed);
  const toggleTheme = value => setTheme(value ? "dark" : "light");
  const background = theme === "light" ? "#fff" : null;

  return (
    <LayoutWrapper>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{ minHeight: "100vh", background }}
      >
        <div className="logo">
          <h2>Ant {!collapsed && <span> Dashboard</span>}</h2>
        </div>
        <NavMenu
          collapsed={collapsed}
          toggleCollapsed={toggle}
          toggleTheme={toggleTheme}
          theme={theme}
        />
      </Sider>
      <LayoutWrapper>
        <NavbarWrapper style={{ padding: 0, height: 50 }}>
          <Header>
            <div className="navHeaderLeft">
              <Icon
                className="trigger"
                type={collapsed ? "menu-unfold" : "menu-fold"}
                onClick={toggle}
              />
            </div>
            <div className="navbarHeaderRight">
              <span style={{ margin: 15 }}>
                <Badge count={1}>
                  <Icon type="bell" />
                </Badge>
              </span>
              <span style={{ margin: 15 }}>
                <Badge count={5}>
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
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/calendar" component={Calendar} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/post" component={Post} />
                <Route exact path="/post/:id" component={SinglePost} />
                <Route exact path="/forms" component={Forms} />
                <Route exact path="/settings" component={Settings} />
                {/* <AppBoundary> */}
                <Route exact path="/charts" component={Charts} />
                {/* </AppBoundary> */}
                <Route exact path="/map" component={MyMap} />
                <Route exact path="/drag" component={Drag} />
                <Route exact path="/custom" component={CustomField} />
                <Route exact path="/fullCalendar" component={FullCalendar} />
                <Route exact path="/spring" component={Spring} />
                <Route exact path="/userProfile" component={UserProfile} />
                <Route path="**" component={NotFound} />
              </Switch>
            </Suspense>
          </Content>
        </ApplicationWrapper>
      </LayoutWrapper>
    </LayoutWrapper>
  );
}
