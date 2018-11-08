import React from 'react';
import styled from 'styled-components';
import ReactTable from "react-table";
const StyledReactTable = styled(ReactTable)`

`

class ReactTable extends React.Component {
    render() {
        return <StyledReactTable/>
    }
}

export default ReactTable;