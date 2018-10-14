import styled from 'styled-components';
import { Layout } from "antd";
const { Header } = Layout;
const NavbarWrapper = styled(Header)`
.ant-layout-header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    flex-wrap: nowrap;
    padding: 0;
    margin: 0;
    box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
    height: 50px; 
    line-height: 64px;
}
`
export default NavbarWrapper;