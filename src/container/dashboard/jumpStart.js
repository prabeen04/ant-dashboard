import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Bar, Line } from 'react-chartjs-2';
import { classNames } from 'classnames';
import { Card } from 'antd';
import { getJumpstartList } from '../../actions/dashboardAction';
import '../../App.css';
import './dashboard.css';
class JumpStartBox extends Component {
    constructor(props) {
        super(props)
    }

    render() {

        let renderJumpStartBoxes = this.props.jumpStartData.filter((data) => data.visible)
            .map((data) => {
                // const jumpstart = classNames({
                //     'jumpstart-box': true,
                //     'clickable': true
                //   });
                return <Card key={data.id}
                    className={'jumpstart-box'}
                    onClick={() => console.log(data.id)}>
                    <div>
                        <h3 style={{color: '#fff'}}>{data.title}</h3>
                        <h2 style={{color: '#fff'}}>{data.value}</h2>
                    </div>
                </Card>
            })

        return (
            <div className="flex-container" style={{ flexGrow: 1, justifyContent: 'flex-start' }}>
                {renderJumpStartBoxes}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        jumpStartData: state.dashboardReducer.jumpStartList
    }
}
const mapDispatchToProps = dispatch => {
    return bindActionCreators({

    }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(JumpStartBox);