import React from 'react';
import styled from 'styled-components';
import ReactTable from "react-table";
import 'react-table/react-table.css';

const StyledReactTable = styled(ReactTable)`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    .ReactTable{
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};

        .-pagination>select{
            background-color: ${props => props.theme.backgroundColor};
            color: ${props => props.theme.backgroundColor};
        }
    }
    .ReactTable .rt-thead .rt-th.-sort-desc, .ReactTable .rt-thead .rt-td.-sort-desc {
    -webkit-box-shadow: inset 0 -3px 0 0 red;
    box-shadow: inset 0 -3px 0 0 red;
}
    
`
const AppReactTable = (props) => <StyledReactTable {...props} />
export default AppReactTable;