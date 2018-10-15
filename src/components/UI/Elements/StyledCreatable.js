import React from 'react';
import { Creatable } from 'react-select';
import styled from 'styled-components';

const StyledCreatable = styled(Creatable)`
	.Select-multi-value-wrapper {
		margin-bottom: 5px;

		&.Select-value {
			border-radius: 15px;
	    overflow: hidden;
	    border: none;
	    font-size: 13pt;

	    &.Select-value-icon {
				padding: 3px 8px 3px 0px;
		    border: none;
		    background: #4A90E2;
		    border-radius: 0;
		    color: white;
	    }

	    &.Select-value-label {
	    	background-color: #4A90E2;
		    color: white;
		    border-radius: 0;
		    padding: 3px 10px;
		    float: left;
	    }
		}
	}
`

export default (props) => <StyledCreatable {...props} />