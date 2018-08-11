import React from 'react'
import { Switch } from 'antd';

const onChange = (checked) => console.log(checked)

const SearchInput =  (props) => {
  return (
    <div>
        <Switch defaultChecked onChange={onChange} />
    </div>
  )
}
