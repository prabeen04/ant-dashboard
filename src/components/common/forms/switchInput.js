import React from 'react'
import { Switch } from 'antd';

const onChange = (checked) => console.log(checked)

const SearchInput =  (props) => {
  console.log(props)
  return (
    <div style={{ margin: '0.2rem', padding: '0.3rem 1rem'}}>
        <Switch defaultChecked {...props} onChange={(checked) => props.input.onChange(checked)} />
    </div>
  )
}

export default SearchInput;