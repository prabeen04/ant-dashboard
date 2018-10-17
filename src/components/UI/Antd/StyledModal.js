import { Modal } from "antd";
import styled from 'styled-components'

const StyledModal = styled(Modal)`
    background-color: ${props => props.theme.applicationBackground} !important;
    color: ${props => props.theme.color};
    box-shadow: 0px 4px 10px -4px  ${props => props.theme.boxShadowColor};
    border: none !important;
`
export default StyledModal;