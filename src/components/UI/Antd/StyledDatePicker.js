import { DatePicker } from "antd";
import styled from 'styled-components'

const StyledDatePicker = styled(DatePicker)`
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
`
export default StyledDatePicker;