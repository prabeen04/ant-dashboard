import { DatePicker } from "antd";
import styled from 'styled-components'

const StyledDatePicker = styled(DatePicker)`
    .ant-input{
        border-radius: 3px;
        border: 1px solid ${props => props.theme.borderColor};
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};
        display: block;
        margin: 0.2rem 0.5rem;
        border-radius: 0.3rem;
        outline: none;
        box-shadow: 0px 4px 10px -4px  ${props => props.theme.boxShadowColor};
        padding: 0.3rem 1rem;
    }
`
export default StyledDatePicker;