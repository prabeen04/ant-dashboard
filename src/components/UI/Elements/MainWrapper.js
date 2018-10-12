import styled from 'styled-components';

const MainWrapper = styled.div`
border-radius: 0.2rem;
box-shadow: 0 1px 4px 1px rgb(211, 208, 208);
background-color: ${props => props.theme.backgroundColor};
background-color: ${props => props.theme.color};
margin: 0.3rem;
padding: 0.3rem;
`
export default MainWrapper;