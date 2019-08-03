import React, { Component } from 'react'
import { Empty } from 'antd';
import { FlexContainer } from "../../components/UI/Layout";
function NotFound() {
  return (
    <FlexContainer style={{ width: '100%', height: '80vh' }} justifyContent='center' alignItems='center'>
      <Empty description='Not found' />
    </FlexContainer>
  )
}

export default NotFound;