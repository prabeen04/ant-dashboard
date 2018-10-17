import { Drawer } from "antd";
import styled from 'styled-components'

const StyledDrawer = styled(Drawer)`
    .ant-drawer-content-wrapper {
        background-color: ${props => props.theme.applicationBackground} !important;
        color: ${props => props.theme.color};
        border: none !important;
    }
    .ant-drawer-content {
        background-color: ${props => props.theme.applicationBackground} !important;
        color: ${props => props.theme.color};
    }
    .ant-drawer-body {
        background-color: ${props => props.theme.applicationBackground} !important;
        color: ${props => props.theme.color};
        border: none !important;
    }
    .ant-drawer-header {
        background-color: ${props => props.theme.applicationBackground} !important;
        color: ${props => props.theme.color};
    }
    .ant-drawer-title {
        color: ${props => props.theme.color};
    }

`
export default StyledDrawer;