import { Card } from "antd";
import styled from 'styled-components'

const StyledCard = styled(Card)`
    background-color: ${props => props.theme.applicationBackground} !important;
    color: ${props => props.theme.color};
    border: none !important;
    .ant-card {
        background-color: ${props => props.theme.applicationBackground} !important;
        color: ${props => props.theme.color};
        border: none !important;
    }
    .ant-card-bordered {
        border: none !important;
    }
    .ant-card-body {
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};
        border: none !important;
    }
`
export default StyledCard;