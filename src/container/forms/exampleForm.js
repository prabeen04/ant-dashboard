import React from 'react'

export default (props) => {
  return (
    <div>
      <h3>ExampleComponent</h3>
      {props.data.map((int, index) =>{
        return <p key={index}>{int}</p>
      })}
    </div>
  )
}
