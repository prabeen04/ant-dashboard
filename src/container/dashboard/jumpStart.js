import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import { Card } from 'antd';
import { getJumpstartList } from '../../actions/dashboardAction';
import './dashboard.css';
class JumpStartBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let renderJumpStartBoxes = this.props.jumpStartData.filter((data) => data.visible)
            .map((data) => <Card key={data.id} className="jumpstart-box">
                <div>
                    <h3>{data.title}</h3>
                    <h2>{data.value}</h2>
                </div>
            </Card>)

        return (
            <div className="flex-container" style={{ flexGrow: 1,justifyContent: 'flex-start' }}>
                {renderJumpStartBoxes}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        jumpStartData: state.dashboardReducer
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        
    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(JumpStartBox);