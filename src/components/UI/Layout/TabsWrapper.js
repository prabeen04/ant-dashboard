import styled from 'styled-components';

const TabsWrapper = styled.div`
border-radius: 0.3rem;
box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
border: 1px solid ${props => props.theme.borderColor}
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.color};
margin: 0.3rem;
padding: 0.3rem;
`
export default TabsWrapper;