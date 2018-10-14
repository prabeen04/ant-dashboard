import styled from 'styled-components';
import { Layout } from "antd";
const NavbarWrapper = styled(Layout.Header)`
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
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    .ant-layout-header {
        height: 50px; 
        line-height: 64px;
    }
`
export default NavbarWrapper;