import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppReactTable from "../../components/utils/ReactTable";
import { getTableData } from '../../actions/tableAction';
import { ApplicationWrapper, LayoutWrapper } from '../../components/UI/Layout'
import './tables.css';

class Tables extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.getTableData()
        }, 2000)
    }
    render() {
        return (
            <ApplicationWrapper>
                <LayoutWrapper>
                    <AppReactTable
                        data={this.props.tableData}
                        columns={this.props.columns}
                        showPagination={true}
                        showPaginationTop={false}
                        showPaginationBottom={true}
                        showPageSizeOptions={true}
                        pageSizeOptions={[5, 10, 20, 25, 50, 100]}
                        defaultPageSize={5}
                    />
                </LayoutWrapper>
            </ApplicationWrapper>
        )
    }
}
const mapStateToProps = state => {
    return {
        tableData: state.tableReducer.data,
        columns: state.tableReducer.columns
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getTableData
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Tables);