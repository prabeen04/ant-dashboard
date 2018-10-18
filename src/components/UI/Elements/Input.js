import styled from "styled-components";

const Input = styled.input.attrs({
    type: 'text',
    size: props => (props.small ? 4 : undefined),
})`
    border-radius: 3px;
    border: 1px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    display: block;
    margin: 0.2rem 0;
    border-radius: 0.3rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${props => props.theme.boxShadowColor};
    padding: 0.3rem 1rem;
   &:hover{
    box-shadow: 0px 4px 10px -2px  ${props => props.theme.boxShadowColor};
    }
    ::placeholder {
      color: #888;
    }
   `
export default Input;