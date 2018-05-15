import React from 'react'

export default (props) => {
  return (
    <div>
      <select style={{border: '1px solid #ccc', width: 200,height: 30, borderRadius: 4 }}>
          {props.children}
      </select>    
    </div>
  )
}
