import React from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import { NavMenu } from './navMenu';
import './navbar.css';
const { Header, Sider, Content } = Layout;

class Navbar extends React.Component {
    state = {
        collapsed: false,
    };
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
                    <NavMenu inlineCollapsed={this.state.collapsed} />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Navbar;