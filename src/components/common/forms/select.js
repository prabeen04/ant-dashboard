import React from 'react'

export default MySelect (props) => {
  return (
    <div>
      <select>
          {props.children}
      </select>    
    </div>
  )
}
