import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Button, Checkbox } from 'antd';


class ChartSettings extends Component {

  render() {
    let JumpstartData = this.props.jumpStartData.map(data => {
      return <Checkbox key={data.id} value={data.id}>{data.title}</Checkbox>
    })
    return (
      <div>
        <List
          size="small"
          bordered
          header={<div><h4> Team</h4></div>}
          footer={<div style={{ textAlign: 'right' }}> <Button
            type="primary"
            onClick={this.props.hide}>Close</Button></div>}
          dataSource={jumpStartData}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  jumpStartData: state.dashboardReducer.jumpStartData
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartSettings)
