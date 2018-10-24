import { DatePicker } from "antd";
import styled from 'styled-components'

const StyledRangePicker = styled(DatePicker.RangePicker)`
.ant-input{
    width: 250px;
    border-radius: 3px;
    border: 1px solid ${props => props.theme.inputBorderColor};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    display: block;
    margin: 0.2rem 0;
    border-radius: 0.3rem;
    outline: none;
    padding: 0.3rem 1rem;
}
`
export default StyledRangePicker;