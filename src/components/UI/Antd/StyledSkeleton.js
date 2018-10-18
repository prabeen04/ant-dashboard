import { Skeleton } from "antd";
import styled from 'styled-components'

const StyledSkeleton = styled(Skeleton)`
    color: ${props => props.theme.themeType === 'dark'? 'red' :'green'};
    background-color: ${props => props.theme.backgroundColor};
`
export default StyledSkeleton;