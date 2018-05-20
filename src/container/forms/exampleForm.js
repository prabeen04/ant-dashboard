import React from 'react'

export default (props) => {
  return (
    <div>
      <h3>ExampleComponent</h3>
      {props.data.map(int =>{
        return <p>int</p>
      })}
    </div>
  )
}
