import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'antd';
import SettingPopover from '../../components/popover/settingPopover';
import './dashboard.css';
const ButtonGroup = Button.Group;

class DashboardHeader extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="dashboard-header">
                <ButtonGroup>
                    <Button onClick={()=>this.props.fetchChartData()}>1W</Button>
                    <Button onClick={()=>this.props.fetchChartData()}>4W</Button>
                    <Button onClick={()=>this.props.fetchChartData()}>1Y</Button>
                    <Button onClick={()=>this.props.fetchChartData()}>Mtd</Button>
                    <Button onClick={()=>this.props.fetchChartData()}>Qtd</Button>
                    <Button onClick={()=>this.props.fetchChartData()}>Ytd</Button>
                    <Button onClick={()=>this.props.fetchChartData()}>All</Button>
                </ButtonGroup>
                <SettingPopover/>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    dateRangeList: state.dashboardReducer.dateRangeList
  })
export default connect(mapStateToProps)(DashboardHeader);