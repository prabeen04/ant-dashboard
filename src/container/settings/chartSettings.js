import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { List, Button, Checkbox } from 'antd';
import { jumpStartData } from '../dashboard/jumpStartData';
const data2 = jumpStartData.map(data => {
  return <p key={data.id}>{data.title}</p>
})
const data = [
  <Checkbox>Manchester United</Checkbox>,
  <Checkbox>Arsenal</Checkbox>,
  <Checkbox>Chelsea</Checkbox>,
  <Checkbox>Manchester City</Checkbox>,
  <Checkbox>Liverpool</Checkbox>,
  <Checkbox>Tottenham</Checkbox>
];
class ChartSettings extends Component {

  render() {
    return (
      <div>
        {data2}
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
