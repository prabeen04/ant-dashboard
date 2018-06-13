import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import './tables.css';

class Tables extends Component {
    render() {
        return (
            <div className="table-container">
                <h3>Tables Component</h3>
                <ReactTable
                    data={this.props.tableData}
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
const mapStateToProps = state => {
    return {
        tableData: state.tableReducer
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Tables);