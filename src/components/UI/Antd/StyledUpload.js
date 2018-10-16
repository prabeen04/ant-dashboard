import { Upload } from "antd";
import styled from 'styled-components'

const StyledUpload = styled(Upload)`
.ant-upload.ant-upload-select-picture-card {
    border: 1px dashed ${props => props.theme.borderColor};
    width: 104px;
    height: 104px;
    border-radius: 4px;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    text-align: center;
    cursor: pointer;
    -webkit-transition: border-color 0.3s ease;
    -o-transition: border-color 0.3s ease;
    transition: border-color 0.3s ease;
    vertical-align: top;
    margin-right: 8px;
    margin-bottom: 8px;
    display: table;
}
`
export default StyledUpload;