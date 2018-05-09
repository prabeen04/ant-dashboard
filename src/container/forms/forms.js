import React, { Component } from 'react';
import { Card, Divider } from 'antd';
import SimpleForm from "./simpleForm";
import ComplexForm from "./complexForm";
class Forms extends Component {
  render() {
    return (
      <div>
        <Card>
         <Divider/>
         <SimpleForm/>
         <Divider/>
         <ComplexForm/>
         <Divider/>
        </Card>
      </div>
    )
  }
}
export default Forms;