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
        }]
        console.log(columns)
        console.log('--------------------------------')
  
        const custom = data.map((data) => {
                return {Header: data.name, accessor: data.age}
        })
        console.log(custom)
        const keys = Object.keys(data[0]);
        console.log(keys)

        const customColumn = keys.map(key => {
            return {Header: key.name, accessor: key.age}
        })
        console.log(customColumn)
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