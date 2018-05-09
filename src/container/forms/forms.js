import React, { Component } from 'react';
import { Card, Divider } from 'antd';
import SimpleForm from "./simpleForm";
class Forms extends Component {
  render() {
    return (
      <div>
        <Card>
         <Divider/>
         <SimpleForm/>
         <Divider/>
        </Card>
      </div>
    )
  }
}
export default Forms;