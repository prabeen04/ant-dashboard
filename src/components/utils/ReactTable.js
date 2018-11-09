import React from 'react';
import styled from 'styled-components';
import ReactTable from "react-table";
import 'react-table/react-table.css';

const StyledReactTable = styled(ReactTable)`
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
    .ReactTable{
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};       
        box-shadow: 0 1px 4px 1px ${props => props.theme.boxShadowColor};
    }    
`
const AppReactTable = (props) => <StyledReactTable {...props} />
export default AppReactTable;