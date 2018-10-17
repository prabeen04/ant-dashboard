import { Drawer } from "antd";
import styled from 'styled-components'

const StyledDrawer = styled(Drawer)`
    background-color: ${props => props.theme.applicationBackground} !important;
    color: ${props => props.theme.color};
    box-shadow: 0px 4px 10px -4px  ${props => props.theme.boxShadowColor};
    border: none !important;
    .ant-drawer-content-wrapper {
        background-color: ${props => props.theme.applicationBackground} !important;
        color: ${props => props.theme.color};
        border: none !important;
    }
`
export default StyledDrawer;