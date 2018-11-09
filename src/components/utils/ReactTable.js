import React from 'react';
import styled from 'styled-components';
import ReactTable from "react-table";
import 'react-table/react-table.css';

const StyledReactTable = styled(ReactTable)`
    .ReactTable{
        background-color: ${props => props.theme.backgroundColor};
        color: ${props => props.theme.color};       
    }    
`
const AppReactTable = (props) => <StyledReactTable {...props} />
export default AppReactTable;