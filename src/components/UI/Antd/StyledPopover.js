import { Popover } from 'antd';
import styled from 'styled-components';

const StyledPopover = styled(Popover)`
    .ant-Popover-nav-container {
        color: ${props => props.theme.color};
    }
    .ant-nav-container {
        color: ${props => props.theme.color};
        box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
        border: 1px solid ${props => props.theme.borderColor}
        border-radius: 0.3rem;
    }
    
`
export default StyledTabs;