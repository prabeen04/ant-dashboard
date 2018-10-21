import ContentLoader, { Facebook } from "react-content-loader";
import styled from "styled-components";

const StyledSkeleton  = styled(ContentLoader)`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
` 

export default StyledSkeleton;