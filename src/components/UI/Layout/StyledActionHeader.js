import styled from "styled-components";

const StyledActionHeader = styled.div`
    background:${props => props.theme.backgroundColor}; 
    color: ${props => props.theme.color}
    height: 40px;
    margin:  0.2rem  0.5rem;
    padding: 0.3rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    border-radius: 0.2rem;
    box-shadow: 0 1px 4px 1px${props => props.theme.boxShadowColor};
`
export default StyledActionHeader;