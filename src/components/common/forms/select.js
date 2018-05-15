import React from 'react'

export default (props) => {
  return (
    <div>
      <select>
          {props.children}
      </select>    
    </div>
  )
}
