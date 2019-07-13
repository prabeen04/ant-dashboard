import styled from "styled-components";
import {Calendar} from 'react-big-calendar'
const StyledBigCalendar = styled(Calendar)`
    border-radius: 3px;
    border: 1px solid ${props => props.theme.borderColor};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    display: block;
    margin: 0.3rem;
    border-radius: 0.3rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${props => props.theme.boxShadowColor};
    padding: 0.3rem 1rem;
    
    .rbc-toolbar button {
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};
    }
   `
export default StyledBigCalendar;