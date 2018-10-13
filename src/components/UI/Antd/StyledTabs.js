import { Tabs } from 'antd';
import styled from 'styled-components';

const StyledTabs = styled(Tabs)`
    .ant-tabs-nav-container {
        color: ${props => props.theme.color};
        background: ${props => props.theme.backgroundColor};
    }
    
`
export default StyledTabs;