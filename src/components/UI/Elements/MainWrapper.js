import styled from 'styled-components';

const MainWrapper = styled.div`
border-radius: 0.2rem;
box-shadow: 0 1px 4px 1px rgb(211, 208, 208);
${props => props.dark ? `
background: #444;
color: white;
`: `
background: #fff;
color: #444;
`}
margin: 0.3rem;
padding: 0.3rem;
`
export default MainWrapper;