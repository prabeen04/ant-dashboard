import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import { Card } from 'antd';
import { getJumpstartList } from '../../actions/dashboardAction';
class JumpStartBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let renderJumpStartBoxes = this.props.jumpStartData.filter((data) => data.visible)
            .map((data) => <Card key={data.id} style={{ margin: '0.3rem', justifyContent: 'space-evenly', minWidth: 180, flexGrow: 1, maxWidth: 480, height: 100 }}>
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