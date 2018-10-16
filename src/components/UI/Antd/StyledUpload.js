import { Upload } from "antd";
import styled from 'styled-components'

const StyledUpload = styled(Upload)`
.ant-upload.ant-upload-select-picture-card {
    border: 1px dashed #d9d9d9;
    width: 104px;
    height: 104px;
    border-radius: 4px;
    background-color: #fafafa; 
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
    border-radius: 3px;
    border: 1px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    margin: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${props => props.theme.boxShadowColor};
    padding: 0.3rem 1rem;
`
export default StyledUpload;