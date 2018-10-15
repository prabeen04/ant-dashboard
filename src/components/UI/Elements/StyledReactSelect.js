import ReactSelect  from 'react-select'
import styled from 'styled-components'

const StyledReactSelect = styled(ReactSelect )`
&.Select--multi  {
    border-radius: 3px;
    border: 1px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    display: block;
    margin: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${props => props.theme.boxShadowColor};
    padding: 0.3rem 1rem;
    .Select-value {
        display: inline-flex;
        align-items: center;
        border-radius: 3px;
        border: 1px solid ${props => props.theme.borderColor};
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};
        display: block;
        margin: 0.2rem 0.5rem;
        border-radius: 0.3rem;
        outline: none;
        box-shadow: 0px 4px 10px -4px  ${props => props.theme.boxShadowColor};
        padding: 0.3rem 1rem;
    }		
}

& .Select-placeholder {
    font-size: smaller;
    border-radius: 3px;
    border: 1px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    display: block;
    margin: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${props => props.theme.boxShadowColor};
    padding: 0.3rem 1rem;
}
input{
    border-radius: 3px;
    border: 1px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    display: block;
    margin: 0.2rem 0.5rem;
    border-radius: 0.3rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${props => props.theme.boxShadowColor};
    padding: 0.3rem 1rem;
}
    `
export default StyledReactSelect;