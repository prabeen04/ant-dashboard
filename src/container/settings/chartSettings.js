import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Button, Checkbox } from 'antd';
import { jumpStartData } from '../dashboard/jumpStartData';
const data = jumpStartData.map(data => {
  return <Checkbox key={data.id} value={data.id}>{data.title}</Checkbox>
})

class ChartSettings extends Component {

  render() {
    return (
      <div>
        <List
          size="small"
          bordered
          header={<div><h4> Team</h4></div>}
          footer={<div style={{ textAlign: 'right' }}> <Button
            type="primary"
            onClick={this.props.hide}>Close</Button></div>}
          dataSource={data}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ChartSettings)
