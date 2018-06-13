import React, { Component } from 'react';
import ReactTable from "react-table";
import { data } from './tableData';
import 'react-table/react-table.css';
import './tables.css';

class Tables extends Component {
    render() {
        const columns = [{
            Header: 'Name',
            accessor: 'name' // String-based value accessors!
        }, {
            Header: 'Age',
            accessor: 'age',
        },
        {
            Header: 'Profession',
            accessor: 'profession' // String-based value accessors!
        },
        {
            Header: 'Location',
            accessor: 'location',
        }]

        return (
            <div className="table-container">
                <h3>Tables Component</h3>
                <ReactTable
                    data={data}
                    columns={columns}
                    showPagination={true}
                    showPaginationTop={false}
                    showPaginationBottom={true}
                    showPageSizeOptions={true}
                    pageSizeOptions={[5, 10, 20, 25, 50, 100]}
                    defaultPageSize={5}
                />
            </div>
        )
    }
}
export default Tables;