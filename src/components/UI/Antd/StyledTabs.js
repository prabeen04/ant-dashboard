import { Tabs } from 'antd';
import styled from 'styled-components';

const StyledTabs = styled(Tabs)`
    .ant-tabs-nav-container {
        color: ${props => props.theme.color};
        background: ${props => props.theme.backgroundColor};
        box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
        border: 1px solid ${props => props.theme.borderColor}
        border-radius: 0.3rem;
    }
    .ant-nav-container {
        color: ${props => props.theme.color};
        background: ${props => props.theme.backgroundColor};
        box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
        border: 1px solid ${props => props.theme.borderColor}
        border-radius: 0.3rem;
    }
    
`
export default StyledTabs;