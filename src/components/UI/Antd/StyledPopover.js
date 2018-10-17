import { Popover } from 'antd';
import styled from 'styled-components';

const StyledPopover = styled(Popover)`
    .ant-popover {
        color: ${props => props.theme.color};
        background-color: ${props => props.theme.applicationBackground};
        border: 3px solid red;
    }  
    .ant-popover-inner {
        color: ${props => props.theme.color};
        background-color: ${props => props.theme.applicationBackground} !important;
        box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
        border: 3px solid red;
    }  
    .ant-popover-inner-content {
        color: ${props => props.theme.color};
        background-color: ${props => props.theme.backgroundColor};
        border: 3px solid red;
    }  
`
export default StyledPopover;