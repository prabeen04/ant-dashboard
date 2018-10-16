import { Card } from "antd";
import styled from 'styled-components'

const StyledCard = styled(Card)`
.ant-card {
    background-color: ${props => props.theme.applicationBackground} !important;
    color: ${props => props.theme.color};
}
&& .ant-card-body {
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    border: none;
}
`
export default StyledCard;