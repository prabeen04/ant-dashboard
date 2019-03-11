import React, { Component } from 'react';
import { Pagination } from 'antd';

export default function PaginationComponent(props) {
  return (
    <div>
      <Pagination defaultCurrent={1} total={50} />
    </div>
  )
}
}
