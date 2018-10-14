import styled from 'styled-components';
import { Layout } from "antd";
const { Header } = Layout;
const NavbarWrapper = styled(Header)`
.ant-layout-header {
    box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    height: 50px; 
    line-height: 64px;
}
`
export default NavbarWrapper;