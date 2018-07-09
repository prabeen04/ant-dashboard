import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import './dashboard.css';
const ButtonGroup = Button.Group;

class DashboardHeader extends Component {
    render() {
        return (
            <div className="dashboard-header">
                <ButtonGroup>
                    <Button>L</Button>
                    <Button>M</Button>
                    <Button>R</Button>
                </ButtonGroup>
            </div>
        )
    }
}

export default DashboardHeader;