import React from "react";
import ContentLoader, { Facebook } from "react-content-loader";
import styled from "styled-components";

const Skeleton = () => (<Facebook/>)

const StyledSkeleton  = styled(Skeleton)`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
` 

export default StyledSkeleton;