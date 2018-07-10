import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';
import SettingPopover from '../../components/popover/settingPopover';
import './dashboard.css';
const ButtonGroup = Button.Group;

class DashboardHeader extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="dashboard-header">
                <ButtonGroup>
                    {
                        this.props.dateRangeList.map((range) => {
                            return <Button key={range.id} onClick={() => this.props.fetchChartData()}>{range.value}</Button>
                        })
                    }
                </ButtonGroup>
                <SettingPopover />
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    dateRangeList: state.dashboardReducer.dateRangeList
})
export default connect(mapStateToProps)(DashboardHeader);