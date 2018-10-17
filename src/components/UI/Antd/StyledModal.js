import { Modal } from "antd";
import styled from 'styled-components'

const StyledModal = styled(Modal)`
    .ant-modal-content{
        background-color: ${props => props.theme.applicationBackground} !important;
        color: ${props => props.theme.color};
   }
    .ant-modal-header{
        background-color: ${props => props.theme.applicationBackground} !important;
        color: ${props => props.theme.color};
   }
    .ant-modal-title{
        color: ${props => props.theme.color};
   }
`
export default StyledModal;