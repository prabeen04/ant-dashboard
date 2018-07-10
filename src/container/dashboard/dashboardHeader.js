import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import SettingPopover from '../../components/popover/settingPopover';
import './dashboard.css';
const ButtonGroup = Button.Group;

class DashboardHeader extends Component {
    render() {
        return (
            <div className="dashboard-header">
                <ButtonGroup>
                    <Button onClick={()=>this.props.fetchChartData}>1W</Button>
                    <Button>4W</Button>
                    <Button>1Y</Button>
                    <Button>Mtd</Button>
                    <Button>Qtd</Button>
                    <Button>Ytd</Button>
                    <Button>All</Button>
                </ButtonGroup>
                <SettingPopover/>
            </div>
        )
    }
}

export default DashboardHeader;