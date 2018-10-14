import styled from 'styled-components';

const NavbarWrapper = styled.div`
box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.color};
`
export default NavbarWrapper;