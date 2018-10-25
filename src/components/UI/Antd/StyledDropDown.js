import { Dropdown } from "antd";
import styled from 'styled-components'

const StyledDropdown = styled(Dropdown)`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
`
export default StyledDropdown;