import React from 'react'

const ExampleForm =  (props) => {
  return (
    <div>
      <h3>ExampleComponent</h3>
      {props.data.map((int, index) =>{
        return <p key={index}>{int*2}</p>
      })}
    </div>
  )
}
export default ExampleForm;