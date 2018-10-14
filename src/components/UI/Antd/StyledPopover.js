import { Popover } from 'antd';
import styled from 'styled-components';

const StyledPopover = styled(Popover)`
    .ant-popover-inner{
        color: ${props => props.theme.color};
        background-color: ${props => props.theme.applicationBackground};
        box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
        border: 1px solid ${props => props.theme.borderColor}
    }    
`
export default StyledPopover;