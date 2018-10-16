import React from 'react';
import { Creatable } from 'react-select';
import styled from 'styled-components';

const StyledCreatable = styled(Creatable)`
	.css-1aya2g8{
		border: 1px solid ${props => props.theme.borderColor};
		background-color: ${props => props.theme.backgroundColor};
		color: ${props => props.theme.color};
	}
`

export default (props) => <StyledCreatable {...props} />