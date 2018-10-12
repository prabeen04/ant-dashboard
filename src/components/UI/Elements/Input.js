import styled from "styled-components";

const Input = styled.input.attrs({
    type: 'text',
    size: props => (props.small ? 4 : undefined),
})`
    border-radius: 3px;
    border: 1px solid #eee;
    display: block;
    margin: 0 0 1em;
    border-radius: 0.3rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  #aaa;
    padding: ${props => props.padding};
   &:hover{
    box-shadow: 0px 4px 10px -2px  #777;
  
    }
  
    ::placeholder {
      color: #888;
    }
   `
