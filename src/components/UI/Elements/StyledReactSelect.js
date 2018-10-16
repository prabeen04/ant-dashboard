import ReactSelect  from 'react-select'
import styled from 'styled-components'

const StyledReactSelect = styled(ReactSelect )`
    .css-1aya2g8{
        border: 1px solid ${props => props.theme.borderColor};
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};
    }
    `
export default StyledReactSelect;