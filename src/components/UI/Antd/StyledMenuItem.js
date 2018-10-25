import { Menu } from "antd";
import styled from 'styled-components'

const StyledMenu = styled(Menu.Item)`
    .ant-menu-item{
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};
    }
`
export default StyledMenu;