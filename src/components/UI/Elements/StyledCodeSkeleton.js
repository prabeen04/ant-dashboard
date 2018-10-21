import React from "react";
import { Code } from "react-content-loader";
import styled from "styled-components";

const Skeleton = () => (<Code/>)

const StyledCodeSkeleton = styled(Skeleton)`
    svg > rect{
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};
    }
`

export default StyledCodeSkeleton;